import { cartService } from '../services/CartService';

// Initialize cart service globally
if (typeof window !== 'undefined') {
  // Make cartService available globally
  (window as any).cartService = cartService;
  
  // Initialize cart count on page load
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing cart service...');
    cartService.init();
  });
  
  // Also update cart count when window loads (for cases where DOMContentLoaded already fired)
  window.addEventListener('load', () => {
    console.log('Window loaded, updating cart count...');
    cartService.updateCartCount();
  });
}

export { cartService }; 