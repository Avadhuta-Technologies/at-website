// Immediate cart service initialization
(function() {
  'use strict';
  
  console.log('🟢 [CartInit] Initializing cart service immediately...');
  
  // Create cart service if it doesn't exist
  if (typeof window !== 'undefined' && !window.cartService) {
    console.log('🟢 [CartInit] Creating cart service...');
    
    window.cartService = {
      async getCartCount() {
        try {
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          return cart.length;
        } catch (error) {
          console.error('🟡 [CartInit] Error getting cart count:', error);
          return 0;
        }
      },
      
      async addToCart(item) {
        try {
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          cart.push({ ...item, timestamp: Date.now() });
          localStorage.setItem('novapod-cart', JSON.stringify(cart));
          this.updateCartCount();
          
          // Show notification
          this.showNotification(`Added ${item.title || 'Item'} to cart!`);
          
          // Navigate to summary page after a short delay
          setTimeout(() => {
            console.log('🟢 [CartInit] Navigating to summary page...');
            window.location.href = '/summary';
          }, 1500);
          
          return true;
        } catch (error) {
          console.error('🟡 [CartInit] Error adding to cart:', error);
          return false;
        }
      },
      
      async removeFromCart(index) {
        try {
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            localStorage.setItem('novapod-cart', JSON.stringify(cart));
            this.updateCartCount();
            return true;
          }
          return false;
        } catch (error) {
          console.error('🟡 [CartInit] Error removing from cart:', error);
          return false;
        }
      },
      
      async clearCart() {
        try {
          localStorage.removeItem('novapod-cart');
          this.updateCartCount();
          return true;
        } catch (error) {
          console.error('🟡 [CartInit] Error clearing cart:', error);
          return false;
        }
      },
      
      async updateCartCount() {
        const count = await this.getCartCount();
        const cartCountElements = document.querySelectorAll('[data-cart-count]');
        cartCountElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.textContent = count.toString();
            element.style.display = count > 0 ? 'block' : 'none';
          }
        });
      },
      
      showNotification(message, type = 'success') {
        console.log('🟡 [CartInit] Notification:', message, type);
        // Simple notification implementation
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
          type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
          notification.classList.add('translate-x-full');
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        }, 3000);
      },
      
      async init() {
        await this.updateCartCount();
        console.log('🟢 [CartInit] Cart service initialized');
      }
    };
    
    // Initialize immediately
    window.cartService.init();
    
    // Dispatch ready event
    window.dispatchEvent(new CustomEvent('cart-service-ready'));
    console.log('🟢 [CartInit] Cart service ready event dispatched');
  } else {
    console.log('🟢 [CartInit] Cart service already exists');
  }
})(); 