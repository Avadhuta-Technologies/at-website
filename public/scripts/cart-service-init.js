// CartService initialization and availability checker
(function() {
  let retryCount = 0;
  const maxRetries = 100; // 10 seconds max wait
  
  function checkCartService() {
    if (typeof window !== 'undefined') {
      // Check if CartService is available through the global-cart-init.ts
      if (window.cartService && typeof window.cartService.getCartCount === 'function') {
        console.log('🟢 [CartServiceInit] CartService found and available globally');
        window.dispatchEvent(new CustomEvent('cart-service-ready'));
        return;
      }
      
      retryCount++;
      if (retryCount < maxRetries) {
        console.log('🟢 [CartServiceInit] Waiting for CartService... (attempt ' + retryCount + ')');
        setTimeout(checkCartService, 100);
      } else {
        console.error('🟢 [CartServiceInit] CartService not available after maximum retries');
        // Dispatch event anyway to prevent hanging
        window.dispatchEvent(new CustomEvent('cart-service-ready'));
      }
    }
  }
  
  // Start checking after a short delay to allow other scripts to load
  setTimeout(checkCartService, 200);
})(); 