/**
 * Test URL Parameter Handling for Case Studies
 * 
 * This demonstrates how URL parameters should be handled and
 * how tabs should be activated based on industry parameters.
 */

import { 
  generateIndustrySlug, 
  fuzzyMatchIndustry,
  generateCaseStudiesUrl 
} from './industryUtils.js';

console.log('🧪 TESTING URL PARAMETER HANDLING\n');

// Test cases for URL parameters
const testCases = [
  // Valid industry names
  'Ecommerce',
  'Manufacturing',
  'Pharmacovigilance',
  'Mobile Apps / EdTech / Parenting',
  'Interior Design',
  'SaaS / Commodity Trading',
  
  // URL variations that should be handled
  'ecommerce',
  'manufacturing',
  'pharmacovigilance',
  'mobile-apps-edtech-parenting',
  'interior-design',
  'saas-commodity-trading',
  
  // Fuzzy matches
  'healthcare-&-pharma',
  'ai-&-automation',
  'retail,-design-&-ecommerce',
  'security-&-field-ops'
];

console.log('📝 Testing URL Parameter Processing:');
testCases.forEach((testCase, index) => {
  console.log(`\n${index + 1}. Input: "${testCase}"`);
  
  // Test fuzzy matching
  const fuzzyMatch = fuzzyMatchIndustry(testCase);
  console.log(`   Fuzzy Match: "${fuzzyMatch}"`);
  
  // Test slug generation
  const slug = generateIndustrySlug(fuzzyMatch || testCase);
  console.log(`   Generated Slug: "${slug}"`);
  
  // Test URL generation
  const url = generateCaseStudiesUrl(fuzzyMatch || testCase);
  console.log(`   Generated URL: "${url}"`);
  
  // Test if it's a valid industry
  const isValid = fuzzyMatch !== null;
  console.log(`   Is Valid: ${isValid}`);
});

console.log('\n✅ Expected Behavior:');
console.log('1. URL parameters should be read on page load');
console.log('2. Matching industry tab should be activated');
console.log('3. Only case studies for that industry should be shown');
console.log('4. URL should update when tabs are clicked');
console.log('5. Browser back/forward should work correctly');

console.log('\n🔧 Debugging Steps:');
console.log('1. Check browser console for debug logs');
console.log('2. Verify URL parameters are being read');
console.log('3. Check if tab buttons have correct data-tab attributes');
console.log('4. Verify tab content visibility');
console.log('5. Test browser navigation'); 