import cartService from '../services/CartService';

// Initialize cart functionality globally
document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing global cart functionality...');
  
  try {
    // Initialize cart service
    await cartService.init();
    
    // Set up event listeners for add-to-cart buttons
    document.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      const addToCartBtn = target.closest('[data-add-to-cart]') as HTMLElement;
      
      if (addToCartBtn) {
        e.preventDefault();
        
        // Get product data from button attributes
        const itemId = addToCartBtn.getAttribute('data-item-id');
        const itemType = addToCartBtn.getAttribute('data-item-type') as 'pod' | 'pack';
        const itemTitle = addToCartBtn.getAttribute('data-item-title');
        const itemDescription = addToCartBtn.getAttribute('data-item-description');
        const itemPrice = addToCartBtn.getAttribute('data-item-price');
        
        if (!itemId || !itemType) {
          console.error('Missing required data attributes for add to cart');
          return;
        }

        console.log('Adding to cart:', { itemId, itemType, itemTitle, itemDescription, itemPrice });
        
        // Create cart item with minimal data (catalog will provide the rest)
        const cartItem = {
          id: itemId,
          type: itemType,
          title: itemTitle || '',
          description: itemDescription || '',
          price: itemPrice || '',
          reservationMonths: itemType === 'pod' ? 3 : undefined
        };
        
        // Add to cart using centralized catalog
        const success = await cartService.addToCart(cartItem);
        
        if (success) {
          console.log('Successfully added to cart');
          
          // Show success message
          cartService.showNotification(
            itemType === 'pod' 
              ? `Added ${itemTitle || 'Pod'} to cart!` 
              : `Added ${itemTitle || 'Pack'} to your pod!`
          );
          
          // Update cart count
          await cartService.updateCartCount();
          
          // Optional: Redirect to checkout after a delay
          setTimeout(() => {
            window.location.href = '/checkout';
          }, 1500);
        } else {
          console.error('Failed to add to cart');
        }
      }
    });
    
    // Set up cart count updates
    window.addEventListener('cart-updated', async () => {
      await cartService.updateCartCount();
    });
    
    console.log('Global cart functionality initialized successfully');
  } catch (error) {
    console.error('Error initializing cart functionality:', error);
  }
});

// Make cartService available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).cartService = cartService;
} 