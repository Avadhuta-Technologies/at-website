// Cart Debug Utility - Test cart behavior
import { default as cartService } from '../services/CartService.js';

console.log('🔧 Cart Debug Utility Loaded');

// Debug functions
window.cartDebug = {
  // Clear cart completely
  clearCart: async () => {
    console.log('🧹 Clearing cart...');
    const result = await cartService.clearCart();
    console.log('Cart cleared:', result);
    return result;
  },

  // Check current cart state
  checkCart: async () => {
    console.log('📋 Checking cart state...');
    const cart = await cartService.getCart();
    console.log('Current cart items:', cart);
    console.log('Cart count:', cart.length);
    return cart;
  },

  // Test pod addition
  testAddPod: async (podId = 'ecommerce-engine') => {
    console.log(`🧪 Testing pod addition: ${podId}`);
    const pod = {
      id: podId,
      type: 'pod',
      title: 'Test Pod',
      description: 'Test pod description',
      price: '₹2.5L/month',
      basePrice: 250000,
      reservationMonths: 3
    };
    
    const result = await cartService.addToCart(pod);
    console.log('Pod addition result:', result);
    return result;
  },

  // Test pack addition
  testAddPack: async (packId = 'launch-pack') => {
    console.log(`🧪 Testing pack addition: ${packId}`);
    const pack = {
      id: packId,
      type: 'pack',
      title: 'Test Pack',
      description: 'Test pack description',
      price: '₹75,000',
      basePrice: 75000
    };
    
    const result = await cartService.addToCart(pack);
    console.log('Pack addition result:', result);
    return result;
  },

  // Remove specific item
  removeItem: async (id, type) => {
    console.log(`🗑️ Removing item: ${id} (${type})`);
    const result = await cartService.removeItemById(id, type);
    console.log('Remove result:', result);
    return result;
  },

  // Full cart test
  runFullTest: async () => {
    console.log('🚀 Running full cart test...');
    
    // 1. Clear cart
    await window.cartDebug.clearCart();
    
    // 2. Check empty state
    const emptyCart = await window.cartDebug.checkCart();
    if (emptyCart.length !== 0) {
      console.error('❌ Cart should be empty but has items:', emptyCart);
      return false;
    }
    
    // 3. Add pod
    const podAdded = await window.cartDebug.testAddPod();
    if (!podAdded) {
      console.error('❌ Failed to add pod');
      return false;
    }
    
    // 4. Check cart with pod
    const cartWithPod = await window.cartDebug.checkCart();
    if (cartWithPod.length !== 1) {
      console.error('❌ Cart should have 1 item but has:', cartWithPod.length);
      return false;
    }
    
    // 5. Add pack
    const packAdded = await window.cartDebug.testAddPack();
    if (!packAdded) {
      console.error('❌ Failed to add pack');
      return false;
    }
    
    // 6. Check final state
    const finalCart = await window.cartDebug.checkCart();
    if (finalCart.length !== 2) {
      console.error('❌ Cart should have 2 items but has:', finalCart.length);
      return false;
    }
    
    console.log('✅ Full cart test passed!');
    return true;
  }
};

// Auto-run basic test on page load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', async () => {
    console.log('🔧 Cart Debug: Page loaded, running basic test...');
    
    // Clear cart and check initial state
    await window.cartDebug.clearCart();
    const initialCart = await window.cartDebug.checkCart();
    
    if (initialCart.length === 0) {
      console.log('✅ Cart is properly empty on page load');
    } else {
      console.error('❌ Cart has items on page load:', initialCart);
    }
  });
} 