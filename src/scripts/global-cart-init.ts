import cartService from '../services/CartService';

// Initialize cart functionality globally
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🟢 [GlobalCartInit] Initializing global cart functionality...');
  
  try {
    // Initialize cart service
    console.log('🟢 [GlobalCartInit] Initializing cart service...');
    await cartService.init();
    console.log('🟢 [GlobalCartInit] Cart service initialized successfully');
    
    // Set up event listeners for add-to-cart buttons
    document.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      const addToCartBtn = target.closest('[data-add-to-cart]') as HTMLElement;
      
      if (addToCartBtn) {
        console.log('🟢 [GlobalCartInit] Add to cart button clicked!');
        console.log('🟢 [GlobalCartInit] Button element:', addToCartBtn);
        console.log('🟢 [GlobalCartInit] Button classes:', addToCartBtn.className);
        
        e.preventDefault();
        
        // Get product data from button attributes
        const itemId = addToCartBtn.getAttribute('data-item-id');
        const itemType = addToCartBtn.getAttribute('data-item-type') as 'pod' | 'pack';
        const itemTitle = addToCartBtn.getAttribute('data-item-title');
        const itemDescription = addToCartBtn.getAttribute('data-item-description');
        const itemPrice = addToCartBtn.getAttribute('data-item-price');
        
        console.log('🟢 [GlobalCartInit] Extracted data attributes:', {
          itemId,
          itemType,
          itemTitle,
          itemDescription,
          itemPrice
        });
        
        if (!itemId || !itemType) {
          console.error('🟢 [GlobalCartInit] Missing required data attributes for add to cart');
          console.error('🟢 [GlobalCartInit] itemId:', itemId, 'itemType:', itemType);
          return;
        }

        console.log('🟢 [GlobalCartInit] Adding to cart:', { itemId, itemType, itemTitle, itemDescription, itemPrice });
        
        // Create cart item with minimal data (catalog will provide the rest)
        const cartItem = {
          id: itemId,
          type: itemType,
          title: itemTitle || '',
          description: itemDescription || '',
          price: itemPrice || '',
          reservationMonths: itemType === 'pod' ? 3 : undefined
        };
        
        console.log('🟢 [GlobalCartInit] Created cart item object:', cartItem);
        
        // Add to cart using centralized catalog
        console.log('🟢 [GlobalCartInit] Calling cartService.addToCart...');
        const success = await cartService.addToCart(cartItem);
        console.log('🟢 [GlobalCartInit] cartService.addToCart result:', success);
        
        if (success) {
          console.log('🟢 [GlobalCartInit] Successfully added to cart');
          
          // Show success message
          const notificationMessage = itemType === 'pod' 
            ? `Added ${itemTitle || 'Pod'} to cart!` 
            : `Added ${itemTitle || 'Pack'} to your pod!`;
          
          console.log('🟢 [GlobalCartInit] Showing notification:', notificationMessage);
          cartService.showNotification(notificationMessage);
          
          // Update cart count
          console.log('🟢 [GlobalCartInit] Updating cart count...');
          await cartService.updateCartCount();
          console.log('🟢 [GlobalCartInit] Cart count updated');
          
          // Cart drawer will automatically open via cart-updated event
          console.log('🟢 [GlobalCartInit] Dispatching cart-updated event...');
          window.dispatchEvent(new CustomEvent('cart-updated', { detail: { action: 'add', item: cartItem } }));
        } else {
          console.error('🟢 [GlobalCartInit] Failed to add to cart');
          console.error('🟢 [GlobalCartInit] This could be due to business rules or validation errors');
        }
      }
    });
    
    // Set up cart count updates
    window.addEventListener('cart-updated', async (event) => {
      const customEvent = event as CustomEvent;
      console.log('🟢 [GlobalCartInit] Cart updated event received:', customEvent.detail);
      console.log('🟢 [GlobalCartInit] Updating cart count from event...');
      await cartService.updateCartCount();
    });
    
    console.log('🟢 [GlobalCartInit] Global cart functionality initialized successfully');
  } catch (error) {
    console.error('🟢 [GlobalCartInit] Error initializing cart functionality:', error);
  }
});

// Make cartService available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).cartService = cartService;
  console.log('🟢 [GlobalCartInit] CartService made available globally for debugging');
} 