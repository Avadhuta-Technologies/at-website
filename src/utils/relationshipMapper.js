// Relationship Mapper - Establishes connections between pods, packs, and case studies
// Single source of truth for relationships without modifying existing content

import { podsCatalog } from '../content/catalog/_pods.js';
import { packsCatalog } from '../content/catalog/_packs.js';
import { caseStudiesData } from '../content/case-studies/_case-studies.js';

// Define relationship categories and their keywords
const RELATIONSHIP_CATEGORIES = {
  ecommerce: {
    keywords: ['ecommerce', 'shopify', 'shopware', 'storefront', 'cart', 'checkout', 'payment', 'retail', 'd2c', 'b2b'],
    podIds: ['ecommerce-engine'],
    packIds: ['launch-pack', 'web-presence-pack', 'growth-pack'],
    caseStudyIds: ['reach-ecommerce-store']
  },
  ai: {
    keywords: ['ai', 'ml', 'llm', 'openai', 'chatbot', 'automation', 'intelligence', 'generative', 'rag', 'vector'],
    podIds: ['ai-product-studio', 'ai-ml-integration'],
    packIds: ['growth-pack', 'data-insights-pack'],
    caseStudyIds: ['ai-room-interiors-generator', 'rinext-regulatory-intelligence']
  },
  ar_vr: {
    keywords: ['ar', 'vr', '3d', 'unity', 'unreal', 'webxr', 'immersive', 'visualization', 'headset', 'hololens'],
    podIds: ['ar-vr-experience'],
    packIds: ['brand-starter-pack'],
    caseStudyIds: ['3d-interior-furnishing-tool']
  },
  product_launch: {
    keywords: ['launch', 'mvp', 'startup', 'founder', 'product-market-fit', 'validation', 'saaS'],
    podIds: ['product-launch'],
    packIds: ['launch-pack', 'brand-starter-pack', 'web-presence-pack'],
    caseStudyIds: ['reach-ecommerce-store', 'ai-room-interiors-generator']
  },
  workflow_automation: {
    keywords: ['automation', 'workflow', 'admin', 'dashboard', 'crm', 'erp', 'process', 'operational'],
    podIds: ['admin-workflow-automation'],
    packIds: ['growth-pack', 'data-insights-pack'],
    caseStudyIds: ['reconcile-updates-tool', 'as2-gateway-secure-document-exchange']
  },
  mobile: {
    keywords: ['mobile', 'ios', 'android', 'react native', 'flutter', 'app', 'cross-platform'],
    podIds: ['mobile-first-saas'],
    packIds: ['launch-pack'],
    caseStudyIds: ['reach-ecommerce-store']
  },
  devops: {
    keywords: ['devops', 'infrastructure', 'ci/cd', 'cloud', 'aws', 'deployment', 'scaling', 'monitoring'],
    podIds: ['devops-infra-automation'],
    packIds: ['launch-pack'],
    caseStudyIds: ['reach-ecommerce-store', 'rinext-regulatory-intelligence']
  },
  healthcare: {
    keywords: ['healthcare', 'pharma', 'pharmacovigilance', 'regulatory', 'compliance', 'safety', 'medical'],
    podIds: ['admin-workflow-automation'],
    packIds: ['compliance-pack'],
    caseStudyIds: ['rinext-regulatory-intelligence', 'reconcile-updates-tool', 'as2-gateway-secure-document-exchange']
  },
  design: {
    keywords: ['design', 'ui/ux', 'brand', 'visual', 'interior', '3d', 'creative'],
    podIds: ['ar-vr-experience', 'product-launch'],
    packIds: ['brand-starter-pack', 'ux-audit-revamp-pack'],
    caseStudyIds: ['3d-interior-furnishing-tool', 'ai-room-interiors-generator']
  },
  data_analytics: {
    keywords: ['data', 'analytics', 'insights', 'reporting', 'dashboard', 'metrics', 'kpi'],
    podIds: ['ai-ml-integration'],
    packIds: ['data-insights-pack', 'growth-pack'],
    caseStudyIds: ['rinext-regulatory-intelligence', 'reconcile-updates-tool']
  }
};

// Content analysis function to determine relationships
function analyzeContent(content, type) {
  const text = JSON.stringify(content).toLowerCase();
  const relationships = [];
  
  Object.entries(RELATIONSHIP_CATEGORIES).forEach(([category, config]) => {
    const keywordMatches = config.keywords.filter(keyword => 
      text.includes(keyword.toLowerCase())
    );
    
    if (keywordMatches.length > 0) {
      relationships.push({
        category,
        strength: keywordMatches.length / config.keywords.length, // 0-1 score
        matchedKeywords: keywordMatches
      });
    }
  });
  
  return relationships.sort((a, b) => b.strength - a.strength);
}

// Relationship mapper class
class RelationshipMapper {
  constructor() {
    this.relationships = this.buildRelationships();
  }

  // Build all relationships
  buildRelationships() {
    const relationships = {
      pods: {},
      packs: {},
      caseStudies: {},
      categories: {}
    };

    // Analyze pods
    podsCatalog.availablePods.forEach(pod => {
      relationships.pods[pod.id] = {
        content: pod,
        relationships: analyzeContent(pod, 'pod'),
        relatedPacks: [],
        relatedCaseStudies: []
      };
    });

    // Analyze packs
    packsCatalog.availablePacks.forEach(pack => {
      relationships.packs[pack.id] = {
        content: pack,
        relationships: analyzeContent(pack, 'pack'),
        relatedPods: [],
        relatedCaseStudies: []
      };
    });

    // Analyze case studies
    caseStudiesData.caseStudies.forEach(caseStudy => {
      relationships.caseStudies[caseStudy.id] = {
        content: caseStudy,
        relationships: analyzeContent(caseStudy, 'caseStudy'),
        relatedPods: [],
        relatedPacks: []
      };
    });

    // Build cross-references
    this.buildCrossReferences(relationships);

    return relationships;
  }

  // Build cross-references between different content types
  buildCrossReferences(relationships) {
    // For each pod, find related packs and case studies
    Object.entries(relationships.pods).forEach(([podId, podData]) => {
      podData.relationships.forEach(podRel => {
        // Find related packs
        Object.entries(relationships.packs).forEach(([packId, packData]) => {
          const packRel = packData.relationships.find(r => r.category === podRel.category);
          if (packRel && (podRel.strength + packRel.strength) / 2 > 0.3) {
            podData.relatedPacks.push({
              id: packId,
              content: packData.content,
              strength: (podRel.strength + packRel.strength) / 2,
              category: podRel.category
            });
          }
        });

        // Find related case studies
        Object.entries(relationships.caseStudies).forEach(([caseStudyId, caseStudyData]) => {
          const caseStudyRel = caseStudyData.relationships.find(r => r.category === podRel.category);
          if (caseStudyRel && (podRel.strength + caseStudyRel.strength) / 2 > 0.3) {
            podData.relatedCaseStudies.push({
              id: caseStudyId,
              content: caseStudyData.content,
              strength: (podRel.strength + caseStudyRel.strength) / 2,
              category: podRel.category
            });
          }
        });
      });

      // Sort by strength
      podData.relatedPacks.sort((a, b) => b.strength - a.strength);
      podData.relatedCaseStudies.sort((a, b) => b.strength - a.strength);
    });

    // Similar process for packs and case studies
    Object.entries(relationships.packs).forEach(([packId, packData]) => {
      packData.relationships.forEach(packRel => {
        // Find related pods
        Object.entries(relationships.pods).forEach(([podId, podData]) => {
          const podRel = podData.relationships.find(r => r.category === packRel.category);
          if (podRel && (packRel.strength + podRel.strength) / 2 > 0.3) {
            packData.relatedPods.push({
              id: podId,
              content: podData.content,
              strength: (packRel.strength + podRel.strength) / 2,
              category: packRel.category
            });
          }
        });

        // Find related case studies
        Object.entries(relationships.caseStudies).forEach(([caseStudyId, caseStudyData]) => {
          const caseStudyRel = caseStudyData.relationships.find(r => r.category === packRel.category);
          if (caseStudyRel && (packRel.strength + caseStudyRel.strength) / 2 > 0.3) {
            packData.relatedCaseStudies.push({
              id: caseStudyId,
              content: caseStudyData.content,
              strength: (packRel.strength + caseStudyRel.strength) / 2,
              category: packRel.category
            });
          }
        });
      });

      packData.relatedPods.sort((a, b) => b.strength - a.strength);
      packData.relatedCaseStudies.sort((a, b) => b.strength - a.strength);
    });

    // Build category relationships
    Object.entries(RELATIONSHIP_CATEGORIES).forEach(([category, config]) => {
      relationships.categories[category] = {
        name: category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        keywords: config.keywords,
        pods: config.podIds.map(id => relationships.pods[id]).filter(Boolean),
        packs: config.packIds.map(id => relationships.packs[id]).filter(Boolean),
        caseStudies: config.caseStudyIds.map(id => relationships.caseStudies[id]).filter(Boolean)
      };
    });
  }

  // Get related content for a specific item
  getRelatedContent(itemId, itemType, limit = 3) {
    const item = this.relationships[itemType]?.[itemId];
    if (!item) return [];

    switch (itemType) {
      case 'pods':
        return {
          packs: item.relatedPacks.slice(0, limit),
          caseStudies: item.relatedCaseStudies.slice(0, limit)
        };
      case 'packs':
        return {
          pods: item.relatedPods.slice(0, limit),
          caseStudies: item.relatedCaseStudies.slice(0, limit)
        };
      case 'caseStudies':
        return {
          pods: item.relatedPods.slice(0, limit),
          packs: item.relatedPacks.slice(0, limit)
        };
      default:
        return [];
    }
  }

  // Get recommended packs for a pod
  getRecommendedPacksForPod(podId, limit = 6) {
    const pod = this.relationships.pods[podId];
    if (!pod) return [];

    return pod.relatedPacks.slice(0, limit);
  }

  // Get related case studies for a pod
  getRelatedCaseStudiesForPod(podId, limit = 3) {
    const pod = this.relationships.pods[podId];
    if (!pod) return [];

    return pod.relatedCaseStudies.slice(0, limit);
  }

  // Get content by category
  getContentByCategory(category) {
    return this.relationships.categories[category] || null;
  }

  // Get all categories
  getCategories() {
    return Object.keys(this.relationships.categories);
  }

  // Search content by keywords
  searchContent(keywords, type = 'all') {
    const searchTerm = keywords.toLowerCase();
    const results = [];

    if (type === 'all' || type === 'pods') {
      Object.entries(this.relationships.pods).forEach(([id, data]) => {
        const text = JSON.stringify(data.content).toLowerCase();
        if (text.includes(searchTerm)) {
          results.push({ id, type: 'pod', content: data.content, relevance: this.calculateRelevance(text, searchTerm) });
        }
      });
    }

    if (type === 'all' || type === 'packs') {
      Object.entries(this.relationships.packs).forEach(([id, data]) => {
        const text = JSON.stringify(data.content).toLowerCase();
        if (text.includes(searchTerm)) {
          results.push({ id, type: 'pack', content: data.content, relevance: this.calculateRelevance(text, searchTerm) });
        }
      });
    }

    if (type === 'all' || type === 'caseStudies') {
      Object.entries(this.relationships.caseStudies).forEach(([id, data]) => {
        const text = JSON.stringify(data.content).toLowerCase();
        if (text.includes(searchTerm)) {
          results.push({ id, type: 'caseStudy', content: data.content, relevance: this.calculateRelevance(text, searchTerm) });
        }
      });
    }

    return results.sort((a, b) => b.relevance - a.relevance);
  }

  // Calculate search relevance
  calculateRelevance(text, searchTerm) {
    const words = searchTerm.split(' ');
    let relevance = 0;
    
    words.forEach(word => {
      const matches = (text.match(new RegExp(word, 'g')) || []).length;
      relevance += matches;
    });
    
    return relevance;
  }

  // Get summary statistics
  getStats() {
    return {
      totalPods: Object.keys(this.relationships.pods).length,
      totalPacks: Object.keys(this.relationships.packs).length,
      totalCaseStudies: Object.keys(this.relationships.caseStudies).length,
      totalCategories: Object.keys(this.relationships.categories).length
    };
  }
}

// Create singleton instance
const relationshipMapper = new RelationshipMapper();

// Export utility functions
export const relationshipUtils = {
  // Get recommended packs for a pod (for summary page)
  getRecommendedPacksForPod: (podId) => relationshipMapper.getRecommendedPacksForPod(podId),
  
  // Get related case studies for a pod
  getRelatedCaseStudiesForPod: (podId) => relationshipMapper.getRelatedCaseStudiesForPod(podId),
  
  // Get related content for any item
  getRelatedContent: (itemId, itemType) => relationshipMapper.getRelatedContent(itemId, itemType),
  
  // Get content by category
  getContentByCategory: (category) => relationshipMapper.getContentByCategory(category),
  
  // Search content
  searchContent: (keywords, type) => relationshipMapper.searchContent(keywords, type),
  
  // Get all categories
  getCategories: () => relationshipMapper.getCategories(),
  
  // Get statistics
  getStats: () => relationshipMapper.getStats(),
  
  // Get all relationships data
  getAllRelationships: () => relationshipMapper.relationships
};

export default relationshipUtils; 