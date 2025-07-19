// Test file to verify relationship mapper functionality
import { relationshipUtils } from './relationshipMapper.js';

console.log('Testing Relationship Mapper...');

// Test 1: Get all relationships
const allRelationships = relationshipUtils.getAllRelationships();
console.log('All relationships loaded:', {
  pods: Object.keys(allRelationships.pods).length,
  packs: Object.keys(allRelationships.packs).length,
  caseStudies: Object.keys(allRelationships.caseStudies).length
});

// Test 2: Get recommended packs for ecommerce pod
const ecommercePacks = relationshipUtils.getRecommendedPacksForPod('ecommerce-engine');
console.log('Recommended packs for ecommerce pod:', ecommercePacks.length);

// Test 3: Get related case studies for AI pod
const aiCaseStudies = relationshipUtils.getRelatedCaseStudiesForPod('ai-product-studio');
console.log('Related case studies for AI pod:', aiCaseStudies.length);

// Test 4: Get content by category
const ecommerceCategory = relationshipUtils.getContentByCategory('ecommerce');
console.log('Ecommerce category content:', {
  pods: ecommerceCategory?.pods.length || 0,
  packs: ecommerceCategory?.packs.length || 0,
  caseStudies: ecommerceCategory?.caseStudies.length || 0
});

// Test 5: Search content
const searchResults = relationshipUtils.searchContent('ecommerce');
console.log('Search results for "ecommerce":', searchResults.length);

// Test 6: Get stats
const stats = relationshipUtils.getStats();
console.log('Relationship mapper stats:', stats);

console.log('Relationship mapper test completed successfully!'); 