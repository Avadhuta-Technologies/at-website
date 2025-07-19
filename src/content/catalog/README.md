# Centralized Product Catalog System

This directory contains the single source of truth for all product data (pods and packs) used throughout the website.

## Overview

The centralized catalog system ensures that all product data is consistent across:
- Cart operations
- Checkout process
- Product displays
- Add-ons and enhancements
- Dynamic pages

## File Structure

```
src/content/catalog/
├── _index.js          # Main catalog exports and utilities
├── _pods.js          # All available pods data
├── _packs.js         # All available packs data
└── README.md         # This documentation
```

## Usage

### Importing the Catalog

```javascript
// Import everything
import { catalogUtils, podsCatalog, packsCatalog } from '../content/catalog/_index.js';

// Or import specific catalogs
import { podsCatalog } from '../content/catalog/_pods.js';
import { packsCatalog } from '../content/catalog/_packs.js';
```

### Getting Product Data

```javascript
// Get a specific pod
const pod = catalogUtils.getProductById('ecommerce-engine', 'pod');

// Get a specific pack
const pack = catalogUtils.getProductById('launch-pack', 'pack');

// Get product data formatted for cart
const cartPod = catalogUtils.getProductForCart('ecommerce-engine', 'pod');
const cartPack = catalogUtils.getProductForCart('launch-pack', 'pack');
```

### Cart Operations

The CartService now uses the centralized catalog:

```javascript
import cartService from '../services/CartService';

// Add a pod to cart (catalog provides all data)
await cartService.addToCart({
  id: 'ecommerce-engine',
  type: 'pod',
  reservationMonths: 3
});

// Add a pack to cart (catalog provides all data)
await cartService.addToCart({
  id: 'launch-pack',
  type: 'pack'
});
```

### Utility Functions

```javascript
// Check if product exists
const exists = catalogUtils.productExists('ecommerce-engine', 'pod');

// Get all products
const allProducts = catalogUtils.getAllProducts();

// Get popular products
const popular = catalogUtils.getPopularProducts();

// Calculate total price
const total = catalogUtils.calculateTotalPrice(cartItems);

// Format price
const formatted = catalogUtils.formatPrice(100000, 'INR'); // "₹1,00,000"
```

## Product Data Structure

### Pod Structure

```javascript
{
  id: "ecommerce-engine",
  title: "Ecommerce Engine Pod (ShopPod)",
  description: "Your Dedicated Team for Scalable, High-Converting Ecommerce Experiences",
  icon: "shopping-cart",
  badge: "Popular",
  badgeColor: "green",
  idealFor: [...],
  podDescription: "...",
  teamComposition: [...],
  deliverables: [...],
  deliveryTimelines: [...],
  whyTrust: [...],
  pastUseCases: [...],
  engagement: "Starting at ₹6,00,000/month (~$28,000/month)",
  priceNote: "Includes dev, design, QA, infrastructure, and deployment",
  basePrice: 600000, // For cart calculations
  priceUSD: 28000,
  type: "pod"
}
```

### Pack Structure

```javascript
{
  id: "launch-pack",
  title: "Launch Pack",
  description: "Take your product live with confidence...",
  icon: "/assets/features/icon-01.svg",
  badge: "Popular",
  badgeColor: "green",
  duration: "2 weeks",
  priceINR: "₹1,00,000",
  priceUSD: "$1,500",
  basePrice: 100000,
  basePriceUSD: 1500,
  category: "launch-gtm",
  deliverables: [...],
  idealFor: [...],
  addOns: [...],
  whyItWorks: "...",
  testimonials: [...],
  cta: {...},
  type: "pack"
}
```

## Business Rules

The centralized system enforces these business rules:

1. **Pod Rules:**
   - Only one pod can be in cart at a time
   - Pods require a reservation period (default: 3 months)
   - Price is calculated based on reservation period

2. **Pack Rules:**
   - Packs can only be added if a pod is already in cart
   - Multiple packs can be added to the same pod
   - Packs have fixed pricing and delivery timelines

3. **Cart Rules:**
   - All product data comes from the centralized catalog
   - Invalid products are rejected
   - Cart operations validate against catalog data

## Integration Points

### Cart Service
- Uses `catalogUtils.getProductForCart()` for product data
- Validates products with `catalogUtils.productExists()`
- Calculates totals with `catalogUtils.calculateTotalPrice()`

### Checkout Process
- Displays cart items using catalog data
- Validates cart contents against catalog
- Processes orders with catalog-referenced products

### Dynamic Pages
- Pod pages (`[slug].astro`) use catalog data
- Pack pages use catalog data
- All product displays reference the same source

### Add-ons System
- Add-ons are separate from packs but follow similar patterns
- Can reference catalog products for consistency

## Benefits

1. **Single Source of Truth:** All product data comes from one place
2. **Consistency:** Prices, descriptions, and features are always in sync
3. **Maintainability:** Changes to products only need to be made in one place
4. **Type Safety:** TypeScript interfaces ensure data consistency
5. **Business Logic:** Centralized rules prevent invalid cart states
6. **Performance:** Reduced data duplication and faster lookups

## Migration Guide

When updating existing code to use the centralized catalog:

1. **Replace direct product data with catalog lookups:**
   ```javascript
   // Old way
   const podData = { id: 'pod-1', title: 'Pod', price: '₹100K' };
   
   // New way
   const podData = catalogUtils.getProductForCart('pod-1', 'pod');
   ```

2. **Use catalog utilities for operations:**
   ```javascript
   // Old way
   const total = items.reduce((sum, item) => sum + item.price, 0);
   
   // New way
   const total = catalogUtils.calculateTotalPrice(items);
   ```

3. **Validate products before operations:**
   ```javascript
   // Old way
   if (item.id && item.title) { /* proceed */ }
   
   // New way
   if (catalogUtils.productExists(item.id, item.type)) { /* proceed */ }
   ```

## Future Enhancements

1. **Categories:** Add product categories for better organization
2. **Search:** Implement product search functionality
3. **Filtering:** Add filters by price, duration, features
4. **Recommendations:** Suggest related products
5. **Analytics:** Track product views and interactions
6. **Internationalization:** Support multiple currencies and languages 