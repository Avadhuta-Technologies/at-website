// Global Cart Initialization Script
// This script handles add-to-cart functionality across the entire application

// Extend Window interface to include our custom properties
declare global {
  interface Window {
    cartService?: any;
    cartDrawer?: any;
    globalCartManager?: GlobalCartManager;
  }
}

class GlobalCartManager {
  private cartService: any = null;
  private cartDrawer: any = null;

  constructor() {
    this.init();
  }

  async init() {
    // Wait for cart service to be available
    if (typeof window !== 'undefined' && window.cartService) {
      this.cartService = window.cartService;
      this.setupGlobalEventListeners();
      await this.updateHeaderCartBadge();
    } else {
      // Retry after a short delay
      setTimeout(() => this.init(), 100);
    }
  }

  setupGlobalEventListeners() {
    // Listen for add-to-cart button clicks
    document.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      const addToCartBtn = target.closest('[data-add-to-cart]') as HTMLElement;
      
      if (addToCartBtn) {
        e.preventDefault();
        await this.handleAddToCart(addToCartBtn);
      }
    });

    // Listen for header cart toggle
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const headerCartToggle = target.closest('#header-cart-toggle') as HTMLElement;
      const enhancePodCartBtn = target.closest('#enhance-pod-cart-btn') as HTMLElement;
      
      if (headerCartToggle && this.cartDrawer) {
        e.preventDefault();
        this.cartDrawer.toggleCart();
      }
      
      if (enhancePodCartBtn && this.cartDrawer) {
        e.preventDefault();
        this.cartDrawer.toggleCart();
      }
    });

    // Listen for cart drawer initialization
    window.addEventListener('cart-drawer-ready', () => {
      this.cartDrawer = window.cartDrawer;
    });

    // Listen for cart updates
    window.addEventListener('cart-updated', async () => {
      await this.updateHeaderCartBadge();
    });
  }

  async handleAddToCart(button: HTMLElement) {
    try {
      // Get item data from button attributes
      const itemData = {
        id: button.getAttribute('data-item-id') || '',
        type: (button.getAttribute('data-item-type') || 'pod') as 'pod' | 'pack',
        title: button.getAttribute('data-item-title') || '',
        description: button.getAttribute('data-item-description') || '',
        price: button.getAttribute('data-item-price') || '',
        duration: button.getAttribute('data-item-duration') || '',
        icon: button.getAttribute('data-item-icon') || '',
        badge: button.getAttribute('data-item-badge') || '',
        badgeColor: button.getAttribute('data-item-badge-color') || 'blue'
      };

      // Validate required fields
      if (!itemData.id || !itemData.title || !itemData.price) {
        this.showNotification('Missing item information', 'error');
        return;
      }

      // Add to cart
      const success = await this.cartService.addToCart(itemData);
      
      if (success) {
        this.showNotification(`${itemData.type === 'pod' ? 'Pod' : 'Pack'} added to cart!`);
        
        // Update button state
        this.updateButtonState(button, true);
        
        // Update header badge
        await this.updateHeaderCartBadge();
        
        // Dispatch cart updated event
        window.dispatchEvent(new CustomEvent('cart-updated'));
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.showNotification('Error adding item to cart', 'error');
    }
  }

  updateButtonState(button: HTMLElement, added: boolean) {
    if (added) {
      button.textContent = 'Added ✓';
      button.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-emerald-500', 'hover:from-green-600', 'hover:to-emerald-600');
      button.classList.add('bg-gray-500', 'cursor-not-allowed');
      button.setAttribute('disabled', 'true');
      
      // Reset button after 2 seconds
      setTimeout(() => {
        const itemType = button.getAttribute('data-item-type');
        button.textContent = itemType === 'pod' ? 'Reserve Pod' : 'Add Pack';
        button.classList.remove('bg-gray-500', 'cursor-not-allowed');
        button.classList.add('bg-gradient-to-r', 'from-green-500', 'to-emerald-500', 'hover:from-green-600', 'hover:to-emerald-600');
        button.removeAttribute('disabled');
      }, 2000);
    }
  }

  showNotification(message: string, type: 'success' | 'error' = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success' ? '✓' : '✗';
    
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full flex items-center space-x-2`;
    notification.innerHTML = `
      <span class="text-lg">${icon}</span>
      <span>${message}</span>
    `;
    
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

  // Method to programmatically add items to cart
  async addItemToCart(itemData: any) {
    if (!this.cartService) {
      console.error('Cart service not available');
      return false;
    }

    try {
      const success = await this.cartService.addToCart(itemData);
      
      if (success) {
        this.showNotification(`${itemData.type === 'pod' ? 'Pod' : 'Pack'} added to cart!`);
        
        // Open cart drawer
        if (this.cartDrawer) {
          this.cartDrawer.openCart();
        }
        
        // Update header badge
        await this.updateHeaderCartBadge();
        
        // Dispatch cart updated event
        window.dispatchEvent(new CustomEvent('cart-updated'));
      }
      
      return success;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.showNotification('Error adding item to cart', 'error');
      return false;
    }
  }

  // Update header cart badge
  async updateHeaderCartBadge() {
    if (!this.cartService) return;

    try {
      const cart = await this.cartService.getCart();
      const count = cart.length;
      
      const headerCartToggle = document.getElementById('header-cart-toggle');
      if (headerCartToggle) {
        // Remove existing badge
        const existingBadge = headerCartToggle.querySelector('.cart-badge');
        if (existingBadge) {
          existingBadge.remove();
        }
        
        // Add new badge if count > 0
        if (count > 0) {
          const badge = document.createElement('span');
          badge.className = 'cart-badge absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs font-bold';
          badge.textContent = count.toString();
          headerCartToggle.appendChild(badge);
        }
      }
    } catch (error) {
      console.error('Error updating header cart badge:', error);
    }
  }
}

// Initialize global cart manager
if (typeof window !== 'undefined') {
  window.globalCartManager = new GlobalCartManager();
}

// Export for use in other modules
export { GlobalCartManager }; 