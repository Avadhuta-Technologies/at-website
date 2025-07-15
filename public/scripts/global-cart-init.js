// Initialize cart functionality globally
document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing global cart functionality...');
  
  try {
    // Initialize cart service
    // Note: CartService import will need to be handled differently in browser context
    
    // Set up event listeners for add-to-cart buttons
    document.addEventListener('click', async (e) => {
      const target = e.target;
      const addToCartBtn = target.closest('[data-add-to-cart]');
      
      if (addToCartBtn) {
        e.preventDefault();
        
        // Get product data from button attributes
        const itemId = addToCartBtn.getAttribute('data-item-id');
        const itemType = addToCartBtn.getAttribute('data-item-type');
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
        
        // For now, just log the cart item
        console.log('Cart item created:', cartItem);
        
        // Show success message
        showNotification(
          itemType === 'pod' 
            ? `Added ${itemTitle || 'Pod'} to cart!` 
            : `Added ${itemTitle || 'Pack'} to your pod!`
        );
        
        // Optional: Redirect to checkout after a delay
        setTimeout(() => {
          window.location.href = '/checkout';
        }, 1500);
      }
    });
    
    console.log('Global cart functionality initialized successfully');
  } catch (error) {
    console.error('Error initializing cart functionality:', error);
  }
});

// Simple notification function
function showNotification(message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
} 