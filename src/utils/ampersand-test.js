/**
 * Test Ampersand Handling in URL Parameters
 * 
 * This tests how ampersands (&) are handled in industry names
 * and URL parameters.
 */

import { 
  generateIndustrySlug, 
  fuzzyMatchIndustry,
  generateCaseStudiesUrl 
} from './industryUtils.js';

console.log('🧪 TESTING AMPERSAND HANDLING\n');

// Test cases with ampersands
const ampersandTests = [
  'Mobile Apps / Utility & Delivery',
  'mobile-apps-utility-&-delivery',
  'mobile-apps-utility-delivery',
  'Ecommerce / Beauty & Wellness',
  'ecommerce-beauty-&-wellness',
  'SaaS / Workplace Automation / Facility Management',
  'saas-workplace-automation-facility-management'
];

console.log('📝 Testing Ampersand Handling:');
ampersandTests.forEach((testCase, index) => {
  console.log(`\n${index + 1}. Input: "${testCase}"`);
  
  // Test slug generation
  const slug = generateIndustrySlug(testCase);
  console.log(`   Generated Slug: "${slug}"`);
  
  // Test fuzzy matching
  const fuzzyMatch = fuzzyMatchIndustry(testCase);
  console.log(`   Fuzzy Match: "${fuzzyMatch}"`);
  
  // Test URL generation
  const url = generateCaseStudiesUrl(fuzzyMatch || testCase);
  console.log(`   Generated URL: "${url}"`);
  
  // Test if it's a valid industry
  const isValid = fuzzyMatch !== null;
  console.log(`   Is Valid: ${isValid}`);
});

console.log('\n🔧 Expected URL Behavior:');
console.log('1. "Mobile Apps / Utility & Delivery" → "mobile-apps-utility-delivery"');
console.log('2. "mobile-apps-utility-&-delivery" → Should match "Mobile Apps / Utility & Delivery"');
console.log('3. "Ecommerce / Beauty & Wellness" → "ecommerce-beauty-wellness"');
console.log('4. "ecommerce-beauty-&-wellness" → Should match "Ecommerce / Beauty & Wellness"');

console.log('\n✅ Test URLs to Try:');
console.log('- /case-studies?industry=mobile-apps-utility-delivery');
console.log('- /case-studies?industry=ecommerce-beauty-wellness');
console.log('- /case-studies?industry=saas-workplace-automation-facility-management');

console.log('\n🎯 Key Points:');
console.log('1. Ampersands (&) should be converted to hyphens (-) in slugs');
console.log('2. URL parameters should be properly decoded');
console.log('3. Fuzzy matching should work with both formats');
console.log('4. Tab activation should work correctly'); 