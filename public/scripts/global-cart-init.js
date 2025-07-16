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
        
        // Add to cart using CartService if available
        if (window.cartService) {
          try {
            const success = await window.cartService.addToCart(cartItem);
            if (success) {
              console.log('Successfully added to cart');
              
              // Show success message
              showNotification(
                itemType === 'pod' 
                  ? `Added ${itemTitle || 'Pod'} to cart!` 
                  : `Added ${itemTitle || 'Pack'} to your pod!`
              );
              
              // Update cart count
              await window.cartService.updateCartCount();
              
              // Dispatch cart updated event to open drawer
              window.dispatchEvent(new CustomEvent('cart-updated', { 
                detail: { action: 'add' } 
              }));
            } else {
              console.error('Failed to add to cart');
              showNotification('Failed to add item to cart', 'error');
            }
          } catch (error) {
            console.error('Error adding to cart:', error);
            showNotification('Error adding item to cart', 'error');
          }
        } else {
          console.log('CartService not available, logging cart item:', cartItem);
          showNotification(
            itemType === 'pod' 
              ? `Added ${itemTitle || 'Pod'} to cart!` 
              : `Added ${itemTitle || 'Pack'} to your pod!`
          );
        }
      }
    });
    
    console.log('Global cart functionality initialized successfully');
  } catch (error) {
    console.error('Error initializing cart functionality:', error);
  }
});

// Simple notification function
function showNotification(message, type = 'success') {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.textContent = message;
  const bgColor = type === 'success' ? '#10b981' : '#ef4444';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
} 