import { catalogUtils } from '../content/catalog/_index.js';

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
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('initDB - Not in browser environment, skipping IndexedDB initialization');
      return;
    }

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
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('getCart - Not in browser environment, returning empty array');
      return [];
    }

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

  // Add item to cart with business rules using centralized catalog
  async addToCart(item: CartItem): Promise<boolean> {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('addToCart - Not in browser environment, returning false');
      return false;
    }

    try {
      // Validate product exists in catalog
      if (!catalogUtils.productExists(item.id, item.type)) {
        this.showNotification(`Invalid ${item.type}: ${item.id}`, 'error');
        return false;
      }

      const cart = await this.getCart();
      
      if (item.type === 'pod') {
        // Rule 1: Only one pod at a time
        const existingPod = cart.find(cartItem => cartItem.type === 'pod');
        if (existingPod) {
          this.showNotification('You can only reserve one pod at a time. Please remove the existing pod first.', 'error');
          return false;
        }
        
        // Get pod data from catalog
        const podData = catalogUtils.getProductForCart(item.id, 'pod');
        if (!podData) {
          this.showNotification('Pod not found in catalog', 'error');
          return false;
        }

        // Set default reservation period if not specified
        if (!item.reservationMonths) {
          item.reservationMonths = 3;
        }
        
        // Calculate price based on reservation period
        if (podData.basePrice) {
          const totalPrice = podData.basePrice * item.reservationMonths;
          item.price = catalogUtils.formatPrice(totalPrice, 'INR') + `/month (~$${Math.round(totalPrice / 75)}/month)`;
          item.basePrice = podData.basePrice;
        }

        // Copy data from catalog
        Object.assign(item, {
          title: podData.title,
          description: podData.description,
          icon: podData.icon,
          badge: podData.badge,
          badgeColor: podData.badgeColor
        });
      } else if (item.type === 'pack') {
        // Rule 3: Must have a pod before adding packs
        const existingPod = cart.find(cartItem => cartItem.type === 'pod');
        if (!existingPod) {
          this.showNotification('Please add a pod to your cart before adding packs.', 'error');
          return false;
        }
        
        // Get pack data from catalog
        const packData = catalogUtils.getProductForCart(item.id, 'pack');
        if (!packData) {
          this.showNotification('Pack not found in catalog', 'error');
          return false;
        }

        // Rule 2: Multiple packs allowed for same pod
        item.podId = existingPod.id;

        // Copy data from catalog
        Object.assign(item, {
          title: packData.title,
          description: packData.description,
          price: packData.price,
          priceUSD: packData.priceUSD,
          basePrice: packData.basePrice,
          duration: packData.duration,
          icon: packData.icon,
          badge: packData.badge,
          badgeColor: packData.badgeColor
        });
      }

      // Store in IndexedDB
      await this.storeItem(item);
      this.updateCartCount();
      
      // Dispatch cart updated event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cart-updated', { detail: { action: 'add' } }));
      }
      
      return true;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return false;
    }
  }

  // Store item in IndexedDB
  private async storeItem(item: CartItem): Promise<void> {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('storeItem - Not in browser environment, skipping storage');
      return;
    }

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
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('removeFromCart - Not in browser environment, returning false');
      return false;
    }

    try {
      const cart = await this.getCart();
      if (index >= 0 && index < cart.length) {
        const item = cart[index];
        
        // Remove only the specific item, don't automatically remove packs
        await this.removeItemById(item.id, item.type);
        this.updateCartCount();
        
        // Dispatch cart updated event
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cart-updated', { detail: { action: 'remove' } }));
        }
        
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
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('removeItemById - Not in browser environment, returning false');
      return false;
    }

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
          // Dispatch cart updated event
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('cart-updated', { detail: { action: 'remove' } }));
          }
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
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') {
      console.log('clearCart - Not in browser environment, returning false');
      return false;
    }

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
          // Dispatch cart updated event
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('cart-updated', { detail: { action: 'clear' } }));
          }
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
      const podItem = cart.find(item => item.id === podId && item.type === 'pod');
      
      if (podItem && podItem.basePrice) {
        podItem.reservationMonths = months;
        const totalPrice = podItem.basePrice * months;
        podItem.price = catalogUtils.formatPrice(totalPrice, 'INR') + `/month (~$${Math.round(totalPrice / 75)}/month)`;
        
        await this.storeItem(podItem);
        this.updateCartCount();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating pod reservation:', error);
      return false;
    }
  }

  // Get cart summary with calculations
  async getCartSummary(): Promise<CartSummary> {
    try {
      const cart = await this.getCart();
      const podItem = cart.find(item => item.type === 'pod');
      const packItems = cart.filter(item => item.type === 'pack');
      
      // Calculate total price using catalog utilities
      const totalPrice = catalogUtils.calculateTotalPrice(cart);
      
      return {
        items: cart,
        totalItems: cart.length,
        totalPrice: totalPrice,
        podItem: podItem,
        packItems: packItems
      };
    } catch (error) {
      console.error('Error getting cart summary:', error);
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
        packItems: []
      };
    }
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

  // Update cart count display
  async updateCartCount(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      const count = await this.getCartCount();
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      
      cartCountElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.textContent = count.toString();
          element.style.display = count > 0 ? 'block' : 'none';
        }
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  // Show notification
  showNotification(message: string, type: 'success' | 'error' = 'success'): void {
    if (typeof window === 'undefined') return;

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Convenience methods for adding specific product types
  async addPod(podData: Omit<CartItem, 'type'>): Promise<boolean> {
    return this.addToCart({ ...podData, type: 'pod' });
  }

  async addPack(packData: Omit<CartItem, 'type'>): Promise<boolean> {
    return this.addToCart({ ...packData, type: 'pack' });
  }

  async removeItem(index: number): Promise<boolean> {
    return this.removeFromCart(index);
  }

  // Initialize the service
  async init(): Promise<void> {
    await this.updateCartCount();
  }

  // Get product details from catalog
  async getPodDetails(podId: string): Promise<CartItem | null> {
    return catalogUtils.getProductForCart(podId, 'pod');
  }

  async getPackDetails(packId: string): Promise<CartItem | null> {
    return catalogUtils.getProductForCart(packId, 'pack');
  }
}

// Create singleton instance
const cartService = new CartService();

// Export the singleton instance
export default cartService; 