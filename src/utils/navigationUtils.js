// Navigation utilities for summary and cart operations
import { podsCatalog, packsCatalog } from '/src/content/catalog/_index.js';

// Get pod details by ID
export function getPodById(podId) {
  return podsCatalog.getPodById(podId);
}

// Get pack details by ID
export function getPackById(packId) {
  return packsCatalog.getPackById(packId);
}

// Initialize cart service
const cartService = new CartService();

// Navigate to summary page with pod added
export async function navigateToSummaryWithPod(podId, packId = null) {
  try {
    // Get pod details
    const pod = getPodById(podId);
    if (!pod) {
      console.error('Pod not found:', podId);
      return false;
    }

    // Remove any existing pod first (only one pod allowed)
    const cart = await cartService.getCart();
    const existingPod = cart.find(item => item.type === 'pod');
    if (existingPod) {
      await cartService.removeItemById(existingPod.id, 'pod');
    }

    // Add pod to cart
    await cartService.addToCart({
      id: podId,
      type: 'pod',
      name: pod.name,
      price: pod.pricing[0] || 'Starting at ₹2.5L/month',
      quantity: 1
    });

    // If pack ID is provided, add pack to cart
    if (packId) {
      const pack = getPackById(packId);
      if (pack) {
        await cartService.addToCart({
          id: packId,
          type: 'pack',
          name: pack.title,
          price: pack.priceINR || pack.price,
          quantity: 1
        });
      }
    }

    // Navigate to summary page
    window.location.href = '/summary';
    return true;
  } catch (error) {
    console.error('Error navigating to summary with pod:', error);
    return false;
  }
}

// Navigate to summary page with pack added (for pod detail pages)
export async function navigateToSummaryWithPack(packId, podId = null) {
  try {
    // Get pack details
    const pack = getPackById(packId);
    if (!pack) {
      console.error('Pack not found:', packId);
      return false;
    }

    // If pod ID is provided, add pod to cart first
    if (podId) {
      const pod = getPodById(podId);
      if (pod) {
        // Remove any existing pod first
        const cart = await cartService.getCart();
        const existingPod = cart.find(item => item.type === 'pod');
        if (existingPod) {
          await cartService.removeItemById(existingPod.id, 'pod');
        }

        // Add pod to cart
        await cartService.addToCart({
          id: podId,
          type: 'pod',
          name: pod.name,
          price: pod.pricing[0] || 'Starting at ₹2.5L/month',
          quantity: 1
        });
      }
    }

    // Add pack to cart
    await cartService.addToCart({
      id: packId,
      type: 'pack',
      name: pack.title,
      price: pack.priceINR || pack.price,
      quantity: 1
    });

    // Navigate to summary page
    window.location.href = '/summary';
    return true;
  } catch (error) {
    console.error('Error navigating to summary with pack:', error);
    return false;
  }
}

// Add event listeners to all "Reserve Pod" buttons
export function initializeReservePodButtons() {
  // Find all reserve pod buttons
  const reserveButtons = document.querySelectorAll('[data-reserve-pod]');
  
  reserveButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const podId = button.getAttribute('data-reserve-pod');
      const packId = button.getAttribute('data-reserve-pack');
      
      if (podId) {
        await navigateToSummaryWithPod(podId, packId);
      }
    });
  });

  // Find all "Add to Pod" buttons (for pack cards)
  const addToPodButtons = document.querySelectorAll('[data-add-to-pod]');
  
  addToPodButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const packId = button.getAttribute('data-add-to-pod');
      const podId = button.getAttribute('data-pod-id');
      
      if (packId) {
        await navigateToSummaryWithPack(packId, podId);
      }
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initializeReservePodButtons();
});

// Export for manual initialization
export { cartService }; 