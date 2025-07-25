// Simple test for slug generation
const testIndustry = 'Mobile Apps / Utility & Delivery';

const slug = testIndustry
  .toLowerCase()
  .replace(/\s*\/\s*/g, '-') // Replace "/" with "-"
  .replace(/\s*\(\s*/g, '-') // Replace "(" with "-"
  .replace(/\s*\)\s*/g, '') // Remove ")"
  .replace(/\s*&\s*/g, '-') // Replace "&" with "-"
  .replace(/\s+/g, '-') // Replace spaces with "-"
  .replace(/-+/g, '-') // Replace multiple dashes with single dash
  .replace(/^-|-$/g, ''); // Remove leading/trailing dashes

console.log('Industry:', testIndustry);
console.log('Generated Slug:', slug);
console.log('Expected URL:', `/case-studies?industry=${slug}`); 