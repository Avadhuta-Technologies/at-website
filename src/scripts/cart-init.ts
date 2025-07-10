import { cartService } from '../services/CartService';

// Initialize cart service globally
if (typeof window !== 'undefined') {
  // Make cartService available globally
  (window as any).cartService = cartService;
  
  // Initialize cart count on page load
  document.addEventListener('DOMContentLoaded', () => {
    cartService.init();
  });
}

export { cartService }; 