// Initialize cart functionality globally
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🟢 [GlobalCartInit] Initializing global cart functionality...');
  
  try {
    // Create a mock CartService if the real one isn't available
    if (!window.cartService) {
      console.log('🟢 [GlobalCartInit] Creating mock CartService for fallback');
      window.cartService = {
        async addToCart(item) {
          console.log('🟢 [GlobalCartInit] Mock CartService.addToCart called with:', item);
          // Store in localStorage as fallback
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          cart.push({ ...item, quantity: 1, timestamp: Date.now() });
          localStorage.setItem('novapod-cart', JSON.stringify(cart));
          return true;
        },
        async getCart() {
          console.log('🟢 [GlobalCartInit] Mock CartService.getCart called');
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          return cart;
        },
        async getCartSummary() {
          console.log('🟢 [GlobalCartInit] Mock CartService.getCartSummary called');
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          const podItem = cart.find(item => item.type === 'pod');
          const packItems = cart.filter(item => item.type === 'pack');
          
          // Calculate total price (simplified)
          const totalPrice = cart.reduce((sum, item) => {
            const price = item.price ? parseFloat(item.price.replace(/[^\d.]/g, '')) : 0;
            return sum + price;
          }, 0);
          
          return {
            items: cart,
            totalItems: cart.length,
            totalPrice: totalPrice,
            podItem: podItem,
            packItems: packItems
          };
        },
        async removeFromCart(index) {
          console.log('🟢 [GlobalCartInit] Mock CartService.removeFromCart called with index:', index);
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            localStorage.setItem('novapod-cart', JSON.stringify(cart));
            return true;
          }
          return false;
        },
        async clearCart() {
          console.log('🟢 [GlobalCartInit] Mock CartService.clearCart called');
          localStorage.removeItem('novapod-cart');
          return true;
        },
        async updateCartCount() {
          console.log('🟢 [GlobalCartInit] Mock CartService.updateCartCount called');
          const cart = JSON.parse(localStorage.getItem('novapod-cart') || '[]');
          const count = cart.length;
          const cartCountElements = document.querySelectorAll('[data-cart-count]');
          cartCountElements.forEach(element => {
            if (element instanceof HTMLElement) {
              element.textContent = count.toString();
              element.style.display = count > 0 ? 'block' : 'none';
            }
          });
        },
        showNotification(message, type = 'success') {
          console.log('🟢 [GlobalCartInit] Mock CartService.showNotification:', message);
          showNotification(message, type);
        }
      };
    }
    
    console.log('🟢 [GlobalCartInit] CartService available, proceeding with initialization');
    
    // Set up event listeners for add-to-cart buttons
    document.addEventListener('click', async (e) => {
      const target = e.target;
      const addToCartBtn = target.closest('[data-add-to-cart]');
      
      if (addToCartBtn) {
        console.log('🟢 [GlobalCartInit] Add to cart button clicked!');
        console.log('🟢 [GlobalCartInit] Button element:', addToCartBtn);
        console.log('🟢 [GlobalCartInit] Button classes:', addToCartBtn.className);
        
        e.preventDefault();
        
        // Get product data from button attributes
        const itemId = addToCartBtn.getAttribute('data-item-id');
        const itemType = addToCartBtn.getAttribute('data-item-type');
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
        
        // Add to cart using CartService if available
        if (window.cartService) {
          try {
            console.log('🟢 [GlobalCartInit] Calling cartService.addToCart...');
            const success = await window.cartService.addToCart(cartItem);
            console.log('🟢 [GlobalCartInit] cartService.addToCart result:', success);
            
            if (success) {
              console.log('🟢 [GlobalCartInit] Successfully added to cart');
              
              // Show success message
              const notificationMessage = itemType === 'pod' 
                ? `Added ${itemTitle || 'Pod'} to cart!` 
                : `Added ${itemTitle || 'Pack'} to your pod!`;
              
              console.log('🟢 [GlobalCartInit] Showing notification:', notificationMessage);
              showNotification(notificationMessage);
              
              // Update cart count
              console.log('🟢 [GlobalCartInit] Updating cart count...');
              await window.cartService.updateCartCount();
              console.log('🟢 [GlobalCartInit] Cart count updated');
              
              // Dispatch cart updated event to open drawer
              console.log('🟢 [GlobalCartInit] Dispatching cart-updated event...');
              window.dispatchEvent(new CustomEvent('cart-updated', { 
                detail: { action: 'add', item: cartItem } 
              }));
            } else {
              console.error('🟢 [GlobalCartInit] Failed to add to cart');
              console.error('🟢 [GlobalCartInit] This could be due to business rules or validation errors');
              showNotification('Failed to add item to cart', 'error');
            }
          } catch (error) {
            console.error('🟢 [GlobalCartInit] Error adding to cart:', error);
            showNotification('Error adding item to cart', 'error');
          }
        } else {
          console.log('🟢 [GlobalCartInit] CartService not available, logging cart item:', cartItem);
          showNotification(
            itemType === 'pod' 
              ? `Added ${itemTitle || 'Pod'} to cart!` 
              : `Added ${itemTitle || 'Pack'} to your pod!`
          );
        }
      }
    });
    
    // Set up cart count updates
    window.addEventListener('cart-updated', async (event) => {
      console.log('🟢 [GlobalCartInit] Cart updated event received:', event.detail);
      console.log('🟢 [GlobalCartInit] Updating cart count from event...');
      if (window.cartService) {
        await window.cartService.updateCartCount();
      }
    });
    
    console.log('🟢 [GlobalCartInit] Global cart functionality initialized successfully');
  } catch (error) {
    console.error('🟢 [GlobalCartInit] Error initializing cart functionality:', error);
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