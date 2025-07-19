// Initialize navigation utilities for reserve pod functionality
import { initializeReservePodButtons } from '../utils/navigationUtils.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing navigation utilities...');
  initializeReservePodButtons();
});

// Also initialize on page navigation (for SPA-like behavior)
if (typeof window !== 'undefined') {
  // Listen for navigation events
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      initializeReservePodButtons();
    }, 100);
  });

  // Listen for custom navigation events
  window.addEventListener('navigation-complete', () => {
    setTimeout(() => {
      initializeReservePodButtons();
    }, 100);
  });
} 