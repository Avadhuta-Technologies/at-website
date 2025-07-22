// Centralized catalog index - Single source of truth for all products
// Import this file whenever you need product data for cart, checkout, or display

import { podsCatalog } from './_pods.js';
import { packsCatalog } from './_packs.js';
import { generatePodSlug, generatePackSlug } from '../../utils/slugUtils.js';

// Export all catalog data
export { podsCatalog, packsCatalog };

// Utility functions for working with the entire catalog
export const catalogUtils = {
  // Get any product by ID and type
  getProductById: (id, type) => {
    if (type === 'pod') {
      return podsCatalog.getPodById(id);
    } else if (type === 'pack') {
      return packsCatalog.getPackById(id);
    }
    return null;
  },

  // Get any product by slug and type
  getProductBySlug: (slug, type) => {
    if (type === 'pod') {
      return podsCatalog.getPodBySlug(slug);
    } else if (type === 'pack') {
      return packsCatalog.getPackBySlug ? packsCatalog.getPackBySlug(slug) : null;
    }
    return null;
  },

  // Get product for cart operations
  getProductForCart: (id, type) => {
    if (type === 'pod') {
      return podsCatalog.getPodForCart(id);
    } else if (type === 'pack') {
      return packsCatalog.getPackForCart(id);
    }
    return null;
  },

  // Validate if a product exists
  productExists: (id, type) => {
    return catalogUtils.getProductById(id, type) !== null;
  },

  // Get all products for display
  getAllProducts: () => {
    return {
      pods: podsCatalog.availablePods,
      packs: packsCatalog.availablePacks
    };
  },

  // Get popular products
  getPopularProducts: () => {
    return {
      pods: podsCatalog.getPopularPods(),
      packs: packsCatalog.getPopularPacks()
    };
  },

  // Calculate total price for cart items
  calculateTotalPrice: (items) => {
    let total = 0;
    items.forEach(item => {
      if (item.basePrice) {
        total += item.basePrice;
      }
    });
    return total;
  },

  // Format price for display
  formatPrice: (amount, currency = 'INR') => {
    if (currency === 'INR') {
      return `₹${amount.toLocaleString()}`;
    } else if (currency === 'USD') {
      return `$${amount.toLocaleString()}`;
    }
    return amount.toString();
  },

  // Get product categories
  getCategories: () => {
    const categories = new Set();
    packsCatalog.availablePacks.forEach(pack => {
      if (pack.category) {
        categories.add(pack.category);
      }
    });
    return Array.from(categories);
  }
};

// Export default catalog utilities
export default catalogUtils; 