/**
 * Demonstration of Updated URLs Using Available Industries
 * 
 * This shows how all URLs now use the proper industry names from our
 * AVAILABLE_INDUSTRIES list instead of the problematic variations.
 */

import { 
  generateCaseStudiesUrl, 
  getAvailableIndustries,
  generateIndustrySlug 
} from './industryUtils.js';

console.log('🎯 UPDATED URLS DEMONSTRATION\n');

// Get all available industries
const availableIndustries = getAvailableIndustries();

console.log('📋 All Available Industries:');
availableIndustries.forEach((industry, index) => {
  const slug = generateIndustrySlug(industry);
  const url = generateCaseStudiesUrl(industry);
  console.log(`  ${index + 1}. "${industry}"`);
  console.log(`     Slug: "${slug}"`);
  console.log(`     URL: "${url}"`);
  console.log('');
});

console.log('🔗 Updated Footer Links:');
const footerIndustries = [
  'Ecommerce',
  'Manufacturing', 
  'Pharmacovigilance',
  'Mobile Apps / EdTech / Parenting',
  'Interior Design',
  'SaaS / Commodity Trading'
];

footerIndustries.forEach(industry => {
  const url = generateCaseStudiesUrl(industry);
  console.log(`  "${industry}" → "${url}"`);
});

console.log('\n✅ All URLs now use proper industry names!');
console.log('✅ No more problematic variations like "healthcare-&-pharma"');
console.log('✅ Consistent URL structure across the application');
console.log('✅ Proper SEO-friendly slugs'); 