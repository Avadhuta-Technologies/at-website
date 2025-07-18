// Cart testing utilities
import { podsCatalog, packsCatalog } from '/src/content/catalog/_index.js';

// Get pod details by ID
export function getPodById(podId) {
  return podsCatalog.getPodById(podId);
}

// Get pack details by ID
export function getPackById(packId) {
  return packsCatalog.getPackById(packId);
}

// Test cart functionality
import { default as cartService } from '../services/CartService.js';

console.log('Testing Cart Functionality...');

// Test initial cart state
async function testInitialCartState() {
  console.log('🧪 Testing initial cart state...');
  
  // Clear cart first
  await cartService.clearCart();
  
  // Check if cart is empty
  const cart = await cartService.getCart();
  console.log('Initial cart items:', cart);
  
  if (cart.length === 0) {
    console.log('✅ Cart is properly empty on initialization');
  } else {
    console.log('❌ Cart has items on initialization:', cart);
  }
}

// Test pod selection
async function testPodSelection() {
  console.log('🧪 Testing pod selection...');
  
  // Clear cart first
  await cartService.clearCart();
  
  // Try to add a pod
  const testPod = {
    id: "ecommerce-engine",
    type: "pod",
    title: "Ecommerce Engine Pod",
    description: "Test pod",
    price: "₹2.5L/month",
    basePrice: 250000,
    reservationMonths: 3
  };
  
  const result = await cartService.addToCart(testPod);
  console.log('Pod addition result:', result);
  
  const cart = await cartService.getCart();
  console.log('Cart after pod addition:', cart);
}

// Run tests
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', async () => {
    console.log('🔄 Running cart tests...');
    await testInitialCartState();
    await testPodSelection();
  });
} 