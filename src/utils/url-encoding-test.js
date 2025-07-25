/**
 * Test URL Encoding for Ampersands
 * 
 * This tests how ampersands are properly encoded in URLs
 * to avoid being interpreted as parameter separators.
 */

import { 
  generateIndustrySlug, 
  generateCaseStudiesUrl 
} from './industryUtils.js';

console.log('🧪 TESTING URL ENCODING FOR AMPERSANDS\n');

// Test cases with ampersands
const testCases = [
  'Mobile Apps / Utility & Delivery',
  'Ecommerce / Beauty & Wellness',
  'SaaS / Workplace Automation / Facility Management'
];

console.log('📝 Testing URL Generation:');
testCases.forEach((testCase, index) => {
  console.log(`\n${index + 1}. Industry: "${testCase}"`);
  
  // Test slug generation
  const slug = generateIndustrySlug(testCase);
  console.log(`   Generated Slug: "${slug}"`);
  
  // Test URL generation
  const url = generateCaseStudiesUrl(testCase);
  console.log(`   Generated URL: "${url}"`);
  
  // Test URL decoding
  const urlParams = new URLSearchParams(url.split('?')[1]);
  const decodedIndustry = urlParams.get('industry');
  console.log(`   Decoded Industry: "${decodedIndustry}"`);
  
  // Verify it matches the original slug
  const matches = slug === decodedIndustry;
  console.log(`   Matches Original: ${matches}`);
});

console.log('\n🔧 Expected Results:');
console.log('1. "Mobile Apps / Utility & Delivery" → "/case-studies?industry=mobile-apps-utility-delivery"');
console.log('2. "Ecommerce / Beauty & Wellness" → "/case-studies?industry=ecommerce-beauty-wellness"');
console.log('3. No ampersands in final URLs (converted to hyphens)');

console.log('\n✅ Test URLs to Try:');
console.log('- /case-studies?industry=mobile-apps-utility-delivery');
console.log('- /case-studies?industry=ecommerce-beauty-wellness');
console.log('- /case-studies?industry=saas-workplace-automation-facility-management');

console.log('\n🎯 Key Points:');
console.log('1. Ampersands (&) are converted to hyphens (-) in slugs');
console.log('2. URLs are properly encoded using encodeURIComponent()');
console.log('3. No special characters in final URLs');
console.log('4. URLs are safe for browser navigation'); 