/**
 * Simple test for industry utility functions
 */

import { 
  generateIndustrySlug, 
  isIndustryAvailable, 
  getExactIndustryName,
  generateCaseStudiesUrl,
  getAvailableIndustries,
  validateIndustryName,
  fuzzyMatchIndustry,
  findIndustryByUrlSlug
} from './industryUtils.js';

// Test cases
console.log('🧪 Testing Industry Utility Functions...\n');

// Test 1: generateIndustrySlug
console.log('📝 Test 1: generateIndustrySlug');
const testIndustries = [
  'Interior Design',
  'Ecommerce', 
  'Pharmacovigilance',
  'Manufacturing',
  'Mobile Apps / EdTech / Parenting',
  'Mobile Apps / SME Enablement', 
  'Ecommerce (Fresh Food / Direct-to-Consumer)',
  'Social Apps / Media',
  'Mobile Apps / Utility & Delivery',
  'SaaS / Commodity Trading',
  'Ecommerce / Beauty & Wellness',
  'SaaS / Workplace Automation / Facility Management'
];

testIndustries.forEach(industry => {
  const slug = generateIndustrySlug(industry);
  console.log(`  "${industry}" → "${slug}"`);
});

// Test 2: isIndustryAvailable
console.log('\n✅ Test 2: isIndustryAvailable');
console.log(`  "Interior Design" → ${isIndustryAvailable('Interior Design')}`);
console.log(`  "interior design" → ${isIndustryAvailable('interior design')}`);
console.log(`  "Unknown Industry" → ${isIndustryAvailable('Unknown Industry')}`);

// Test 3: getExactIndustryName
console.log('\n🎯 Test 3: getExactIndustryName');
console.log(`  "interior design" → "${getExactIndustryName('interior design')}"`);
console.log(`  "mobile apps" → "${getExactIndustryName('mobile apps')}"`);
console.log(`  "Unknown" → "${getExactIndustryName('Unknown')}"`);

// Test 4: generateCaseStudiesUrl
console.log('\n🔗 Test 4: generateCaseStudiesUrl');
console.log(`  "Interior Design" → "${generateCaseStudiesUrl('Interior Design')}"`);
console.log(`  "Mobile Apps / EdTech / Parenting" → "${generateCaseStudiesUrl('Mobile Apps / EdTech / Parenting')}"`);

// Test 5: getAvailableIndustries
console.log('\n📋 Test 5: getAvailableIndustries');
const available = getAvailableIndustries();
console.log(`  Total available industries: ${available.length}`);
console.log(`  First 3: ${available.slice(0, 3).join(', ')}`);

// Test 6: validateIndustryName
console.log('\n🔍 Test 6: validateIndustryName');
const validationTests = [
  'Interior Design',
  'interior design',
  'Mobile Apps / EdTech / Parenting',
  'Unknown Industry',
  '',
  null
];

validationTests.forEach(test => {
  const result = validateIndustryName(test);
  console.log(`  "${test}" → isValid: ${result.isValid}, slug: "${result.slug}"`);
});

// Test 7: Fuzzy matching with URL slugs
console.log('\n🔍 Test 7: Fuzzy Matching with URL Slugs');
const urlSlugTests = [
  'healthcare-&-pharma',
  'ai-&-automation', 
  'retail,-design-&-ecommerce',
  'security-&-field-ops',
  'mobile-apps',
  'saas',
  'manufacturing',
  'social-apps',
  'beauty-wellness',
  'fresh-food',
  'sme-enablement',
  'utility-delivery'
];

urlSlugTests.forEach(slug => {
  const match = findIndustryByUrlSlug(slug);
  console.log(`  "${slug}" → "${match}"`);
});

// Test 8: Fuzzy matching with various inputs
console.log('\n🎯 Test 8: Fuzzy Matching with Various Inputs');
const fuzzyTests = [
  'healthcare',
  'pharma',
  'ai',
  'automation',
  'retail',
  'design',
  'ecommerce',
  'security',
  'field ops',
  'mobile',
  'edtech',
  'parenting',
  'saas',
  'trading',
  'manufacturing',
  'social',
  'media',
  'beauty',
  'wellness',
  'food',
  'sme',
  'utility',
  'delivery'
];

fuzzyTests.forEach(test => {
  const match = fuzzyMatchIndustry(test);
  console.log(`  "${test}" → "${match}"`);
});

console.log('\n✅ All tests completed!'); 