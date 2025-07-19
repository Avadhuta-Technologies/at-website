// Initialize cart service globally
if (typeof window !== 'undefined') {
  // Note: CartService import will need to be handled differently in browser context
  
  // Initialize cart count on page load
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing cart service...');
    // cartService.init(); // Commented out since CartService is not available in browser context
  });
  
  // Also update cart count when window loads (for cases where DOMContentLoaded already fired)
  window.addEventListener('load', () => {
    console.log('Window loaded, updating cart count...');
    // cartService.updateCartCount(); // Commented out since CartService is not available in browser context
  });
} 