// Catalog test utility - Verify single source of truth
import { catalogUtils, podsCatalog, packsCatalog } from '/src/content/catalog/_index.js';

console.log('Testing Catalog as Single Source of Truth...');

// Test pod data
console.log('Available Pods:', podsCatalog.availablePods.length);
podsCatalog.availablePods.forEach(pod => {
  console.log(`- ${pod.name} (${pod.id})`);
});

// Test pack data
console.log('Available Packs:', packsCatalog.availablePacks.length);
packsCatalog.availablePacks.forEach(pack => {
  console.log(`- ${pack.title} (${pack.id}) - ${pack.priceINR}`);
});

// Test catalog utilities
console.log('Testing Catalog Utils...');
const testPod = podsCatalog.availablePods[0];
const testPack = packsCatalog.availablePacks[0];

if (testPod) {
  console.log('Test Pod for Cart:', podsCatalog.getPodForCart(testPod.id));
}

if (testPack) {
  console.log('Test Pack for Cart:', packsCatalog.getPackForCart(testPack.id));
}

// Test price formatting
console.log('Price Formatting Test:', catalogUtils.formatPrice(250000));

console.log('Catalog test completed successfully!'); 