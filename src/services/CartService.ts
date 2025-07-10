export interface CartItem {
  id: string;
  type: 'pod' | 'pack';
  title: string;
  price: string;
  priceUSD?: string;
  description: string;
  duration?: string;
  icon?: string;
  badge?: string;
  badgeColor?: string;
  podId?: string; // For packs to reference their parent pod
  reservationMonths?: number; // For pods only
  basePrice?: number; // Base price per month for calculation
}

export interface CartSummary {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  podItem?: CartItem; // The single pod in cart
  packItems: CartItem[]; // All packs in cart
}

class CartService {
  private readonly DB_NAME = 'NovaPodCartDB';
  private readonly STORE_NAME = 'cart';
  private db: IDBDatabase | null = null;

  // Initialize IndexedDB
  private async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('initDB - Opening database:', this.DB_NAME);
      const request = indexedDB.open(this.DB_NAME, 1);
      
      request.onerror = () => {
        console.error('initDB - Error opening database:', request.error);
        reject(request.error);
      };
      request.onsuccess = () => {
        this.db = request.result;
        console.log('initDB - Database opened successfully:', this.db);
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        console.log('initDB - Database upgrade needed');
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          console.log('initDB - Creating object store:', this.STORE_NAME);
          db.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
        }
      };
    });
  }

  // Get all cart items from IndexedDB
  async getCart(): Promise<CartItem[]> {
    await this.initDB();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        console.log('getCart - Database not initialized, returning empty array');
        resolve([]);
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.getAll();

      request.onerror = () => {
        console.error('getCart - Error retrieving cart:', request.error);
        reject(request.error);
      };
      request.onsuccess = () => {
        console.log('getCart - Retrieved items from DB:', request.result);
        resolve(request.result || []);
      };
    });
  }

  // Add item to cart with business rules
  async addToCart(item: CartItem): Promise<boolean> {
    try {
      const cart = await this.getCart();
      
      if (item.type === 'pod') {
        // Rule 1: Only one pod at a time
        const existingPod = cart.find(cartItem => cartItem.type === 'pod');
        if (existingPod) {
          this.showNotification('You can only reserve one pod at a time. Please remove the existing pod first.', 'error');
          return false;
        }
        
        // Set default reservation period if not specified
        if (!item.reservationMonths) {
          item.reservationMonths = 3;
        }
        
        // Calculate price based on reservation period
        if (item.basePrice) {
          const totalPrice = item.basePrice * item.reservationMonths;
          item.price = `₹${totalPrice.toLocaleString()}/month (~$${Math.round(totalPrice / 75)}/month)`;
        }
      } else if (item.type === 'pack') {
        // Rule 3: Must have a pod before adding packs
        const existingPod = cart.find(cartItem => cartItem.type === 'pod');
        if (!existingPod) {
          this.showNotification('Please add a pod to your cart before adding packs.', 'error');
          return false;
        }
        
        // Rule 2: Multiple packs allowed for same pod
        item.podId = existingPod.id;
      }

      // Store in IndexedDB
      await this.storeItem(item);
      this.updateCartCount();
      return true;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return false;
    }
  }

  // Store item in IndexedDB
  private async storeItem(item: CartItem): Promise<void> {
    await this.initDB();
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.put(item);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  // Remove item from cart by index
  async removeFromCart(index: number): Promise<boolean> {
    try {
      const cart = await this.getCart();
      if (index >= 0 && index < cart.length) {
        const item = cart[index];
        
        // If removing a pod, also remove all its packs
        if (item.type === 'pod') {
          const packsToRemove = cart.filter(cartItem => 
            cartItem.type === 'pack' && cartItem.podId === item.id
          );
          
          for (const pack of packsToRemove) {
            await this.removeItemById(pack.id, 'pack');
          }
        }
        
        await this.removeItemById(item.id, item.type);
        this.updateCartCount();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error removing item from cart:', error);
      return false;
    }
  }

  // Remove item from cart by id and type
  async removeItemById(id: string, type: 'pod' | 'pack'): Promise<boolean> {
    try {
      await this.initDB();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          resolve(false);
          return;
        }

        const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);
        const request = store.delete(id);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
          this.updateCartCount();
          resolve(true);
        };
      });
    } catch (error) {
      console.error('Error removing item from cart by ID:', error);
      return false;
    }
  }

  // Clear entire cart
  async clearCart(): Promise<boolean> {
    try {
      await this.initDB();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          resolve(false);
          return;
        }

        const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);
        const request = store.clear();

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
          this.updateCartCount();
          resolve(true);
        };
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      return false;
    }
  }

  // Update pod reservation period
  async updatePodReservation(podId: string, months: number): Promise<boolean> {
    try {
      const cart = await this.getCart();
      const pod = cart.find(item => item.id === podId && item.type === 'pod');
      
      if (pod && pod.basePrice) {
        pod.reservationMonths = months;
        const totalPrice = pod.basePrice * months;
        pod.price = `₹${totalPrice.toLocaleString()}/month (~$${Math.round(totalPrice / 75)}/month)`;
        
        await this.storeItem(pod);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating pod reservation:', error);
      return false;
    }
  }

  // Get cart summary with business logic
  async getCartSummary(): Promise<CartSummary> {
    const items = await this.getCart();
    console.log('getCartSummary - Raw items from DB:', items);
    
    const podItem = items.find(item => item.type === 'pod');
    const packItems = items.filter(item => item.type === 'pack');
    
    console.log('getCartSummary - Pod item:', podItem);
    console.log('getCartSummary - Pack items:', packItems);
    
    // Calculate total price based on reservation period
    let totalPrice = 0;
    if (podItem && podItem.basePrice && podItem.reservationMonths) {
      const podPrice = podItem.basePrice * podItem.reservationMonths;
      totalPrice += podPrice;
    }
    
    // Add pack prices
    packItems.forEach(pack => {
      const priceMatch = pack.price.match(/₹([\d,]+)/);
      if (priceMatch) {
        const packPrice = parseInt(priceMatch[1].replace(/,/g, ''));
        totalPrice += packPrice;
      }
    });

    const summary = {
      items,
      totalItems: items.length,
      totalPrice,
      podItem,
      packItems
    };
    
    console.log('getCartSummary - Final summary:', summary);
    return summary;
  }

  // Check if cart is empty
  async isEmpty(): Promise<boolean> {
    const cart = await this.getCart();
    return cart.length === 0;
  }

  // Get cart count
  async getCartCount(): Promise<number> {
    const cart = await this.getCart();
    return cart.length;
  }

  // Update cart count in UI
  async updateCartCount(): Promise<void> {
    const cartCount = await this.getCartCount();
    const cartBadges = document.querySelectorAll('[data-cart-count], .cart-badge') as NodeListOf<HTMLElement>;
    
    console.log('Updating cart count:', cartCount);
    console.log('Cart badges found:', cartBadges.length);
    
    cartBadges.forEach(cartBadge => {
      if (cartBadge) {
        cartBadge.textContent = cartCount.toString();
        cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
        console.log('Cart badge updated successfully');
      }
    });
    
    if (cartBadges.length === 0) {
      console.warn('No cart badges found in DOM');
    }
  }

  // Show cart notification
  showNotification(message: string, type: 'success' | 'error' = 'success'): void {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Add pod to cart with success notification
  async addPod(podData: Omit<CartItem, 'type'>): Promise<boolean> {
    const success = await this.addToCart({ ...podData, type: 'pod' });
    if (success) {
      this.showNotification(`Added ${podData.title} to cart!`);
      await this.updateCartCount(); // Ensure cart count is updated
    }
    return success;
  }

  // Add pack to cart with success notification
  async addPack(packData: Omit<CartItem, 'type'>): Promise<boolean> {
    const success = await this.addToCart({ ...packData, type: 'pack' });
    if (success) {
      this.showNotification(`Added ${packData.title} to your pod!`);
      await this.updateCartCount(); // Ensure cart count is updated
    }
    return success;
  }

  // Remove item with notification
  async removeItem(index: number): Promise<boolean> {
    const cart = await this.getCart();
    if (index >= 0 && index < cart.length) {
      const item = cart[index];
      const success = await this.removeFromCart(index);
      if (success) {
        this.showNotification(`Removed ${item.title} from cart`, 'error');
      }
      return success;
    }
    return false;
  }

  // Initialize cart service (call on page load)
  async init(): Promise<void> {
    await this.updateCartCount();
  }

  // Get pod details for modal/drawer
  async getPodDetails(podId: string): Promise<CartItem | null> {
    const cart = await this.getCart();
    return cart.find(item => item.id === podId && item.type === 'pod') || null;
  }

  // Get pack details for modal/drawer
  async getPackDetails(packId: string): Promise<CartItem | null> {
    const cart = await this.getCart();
    return cart.find(item => item.id === packId && item.type === 'pack') || null;
  }
}

// Create singleton instance
export const cartService = new CartService();

// Make it available globally for inline onclick handlers
if (typeof window !== 'undefined') {
  (window as any).cartService = cartService;
  
  // Global functions for inline onclick handlers
  (window as any).handleReservePod = async function(podId: string) {
    console.log('Reserve pod clicked for:', podId);
    
    if (!podId) {
      console.error('Pod ID is undefined');
      return;
    }
    
    try {
      // Get pod data from the page
      const podTitle = document.querySelector('h1')?.textContent?.trim() || 'Development Pod';
      const podDescription = document.querySelector('p.text-xl')?.textContent?.trim() || 'Complete development team for your project';
      
      const podData = {
        id: podId,
        title: podTitle,
        price: '₹6,00,000/month (~$28,000/month)',
        priceUSD: '$28,000/month',
        description: podDescription,
        badge: 'Popular',
        badgeColor: 'green',
        basePrice: 600000, // Base price per month (₹6 Lakhs)
        reservationMonths: 3 // Default 3 months
      };
      
      console.log('Adding pod data:', podData);
      const success = await cartService.addPod(podData);
      console.log('Add pod result:', success);
      
      if (success) {
        // Redirect to cart page after a short delay
        setTimeout(() => {
          window.location.href = '/cart';
        }, 1000);
      }
    } catch (error) {
      console.error('Error in handleReservePod:', error);
      alert('Error adding pod to cart. Please try again.');
    }
  };

  (window as any).handleAddPack = async function(packId: string) {
    console.log('Add pack clicked for:', packId);
    
    try {
      // Get packs data from the page
      const packsDataElement = document.querySelector('[data-packs]');
      if (!packsDataElement) {
        console.error('Packs data not found on page');
        cartService.showNotification('Pack data not available. Please refresh the page.', 'error');
        return;
      }
      
      const packsData = JSON.parse(packsDataElement.getAttribute('data-packs') || '[]');
      console.log('Available packs data:', packsData);
      
      const pack = packsData.find((p: any) => p.id === packId);
      console.log('Found pack:', pack);
      
      if (pack) {
        const packData = {
          id: packId,
          title: pack.title,
          price: pack.price,
          duration: pack.duration,
          description: pack.description,
          icon: pack.icon,
          podId: pack.podId || 'current-pod'
        };
        
        console.log('Adding pack data:', packData);
        const success = await cartService.addPack(packData);
        console.log('Add pack result:', success);
        
        if (success) {
          cartService.showNotification('Pack added to cart successfully!', 'success');
        } else {
          cartService.showNotification('Failed to add pack to cart. Please try again.', 'error');
        }
      } else {
        console.error('Pack not found:', packId);
        console.error('Available pack IDs:', packsData.map((p: any) => p.id));
        cartService.showNotification('Pack not found. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error in handleAddPack:', error);
      alert('Error adding pack to cart. Please try again.');
    }
  };

  (window as any).handleCaseStudyClick = function(useCase: string) {
    const podId = document.querySelector('[data-pod-id]')?.getAttribute('data-pod-id') || '';
    window.open(`/case-studies?pod=${podId}&case=${encodeURIComponent(useCase)}`, '_blank');
  };

  (window as any).handleContactClick = function() {
    window.location.href = '/contact?type=sales';
  };
} 