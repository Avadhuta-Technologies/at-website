/**
 * Debug Tab Slugs
 * 
 * This helps us understand what the actual tab slugs should be
 * for the case studies page.
 */

import { generateIndustrySlug } from './industryUtils.js';

console.log('🔍 DEBUGGING TAB SLUGS\n');

// Test the specific industry that's not working
const testIndustry = 'Mobile Apps / Utility & Delivery';
const slug = generateIndustrySlug(testIndustry);

console.log(`Industry: "${testIndustry}"`);
console.log(`Generated Slug: "${slug}"`);
console.log(`Expected URL: "/case-studies?industry=${slug}"`);

// Test all available industries
const allIndustries = [
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
  'AI/ML'
];

console.log('\n📋 All Industry Slugs:');
allIndustries.forEach((industry, index) => {
  const industrySlug = generateIndustrySlug(industry);
  console.log(`${index + 1}. "${industry}" → "${industrySlug}"`);
});

console.log('\n🔧 Expected Tab Data Attributes:');
allIndustries.forEach((industry, index) => {
  const industrySlug = generateIndustrySlug(industry);
  console.log(`data-tab="${industrySlug}" → "${industry}"`);
});

console.log('\n✅ Test URLs:');
allIndustries.forEach((industry, index) => {
  const industrySlug = generateIndustrySlug(industry);
  console.log(`${index + 1}. /case-studies?industry=${industrySlug}`);
}); 