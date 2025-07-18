# Relationship Mapping System

## Overview

The relationship mapping system establishes connections between pods, packs, and case studies without modifying the existing content. It provides a single source of truth for relationships and enables intelligent content recommendations.

## Architecture

### Core Components

1. **Relationship Mapper** (`src/utils/relationshipMapper.js`)
   - Main class that analyzes content and builds relationships
   - Uses keyword-based analysis to determine content relationships
   - Provides utility functions for accessing related content

2. **Summary Utils** (`src/utils/summaryUtils.js`)
   - Specialized utilities for the summary page
   - Provides clean interfaces for getting pod and pack data
   - Handles relationship strength calculations

3. **Content Categories** (defined in relationshipMapper.js)
   - Pre-defined categories with keywords and content mappings
   - Enables automatic relationship detection

## How It Works

### 1. Content Analysis

The system analyzes content by:
- Converting content to lowercase text
- Searching for category-specific keywords
- Calculating relationship strength based on keyword matches
- Building cross-references between different content types

### 2. Relationship Categories

The system recognizes these categories:

- **Ecommerce**: shopify, shopware, storefront, cart, checkout, payment, retail, d2c, b2b
- **AI/ML**: ai, ml, llm, openai, chatbot, automation, intelligence, generative, rag, vector
- **AR/VR**: ar, vr, 3d, unity, unreal, webxr, immersive, visualization, headset, hololens
- **Product Launch**: launch, mvp, startup, founder, product-market-fit, validation, saas
- **Workflow Automation**: automation, workflow, admin, dashboard, crm, erp, process, operational
- **Mobile**: mobile, ios, android, react native, flutter, app, cross-platform
- **DevOps**: devops, infrastructure, ci/cd, cloud, aws, deployment, scaling, monitoring
- **Healthcare**: healthcare, pharma, pharmacovigilance, regulatory, compliance, safety, medical
- **Design**: design, ui/ux, brand, visual, interior, 3d, creative
- **Data Analytics**: data, analytics, insights, reporting, dashboard, metrics, kpi

### 3. Relationship Strength

Relationship strength is calculated as:
```
strength = (keyword_matches / total_keywords) * 100
```

A relationship is considered valid if the combined strength of both items is > 0.3 (30%).

## Usage Examples

### Get Recommended Packs for a Pod

```javascript
import { relationshipUtils } from '/src/utils/relationshipMapper.js';

const recommendedPacks = relationshipUtils.getRecommendedPacksForPod('ecommerce-engine');
console.log('Recommended packs:', recommendedPacks);
```

### Get Related Case Studies

```javascript
import { relationshipUtils } from '/src/utils/relationshipMapper.js';

const relatedCaseStudies = relationshipUtils.getRelatedCaseStudiesForPod('ai-product-studio');
console.log('Related case studies:', relatedCaseStudies);
```

### Search Content

```javascript
import { relationshipUtils } from '/src/utils/relationshipMapper.js';

const searchResults = relationshipUtils.searchContent('ecommerce');
console.log('Search results:', searchResults);
```

### Get Content by Category

```javascript
import { relationshipUtils } from '/src/utils/relationshipMapper.js';

const ecommerceContent = relationshipUtils.getContentByCategory('ecommerce');
console.log('Ecommerce content:', ecommerceContent);
```

## Summary Page Integration

The summary page uses specialized utilities:

```javascript
import { getAvailablePods, getRecommendedPacksForPod } from '/src/utils/summaryUtils.js';

// Get all available pods
const pods = getAvailablePods();

// Get recommended packs for a specific pod
const recommendedPacks = getRecommendedPacksForPod('ecommerce-engine');
```

## Benefits

1. **No Content Modification**: Existing content remains unchanged
2. **Single Source of Truth**: All relationships managed in one place
3. **Intelligent Recommendations**: Content is automatically matched based on keywords
4. **Scalable**: Easy to add new categories or modify relationships
5. **Performance**: Relationships are built once and cached
6. **Flexible**: Can be used across different parts of the application

## Adding New Relationships

To add new relationships:

1. **Add Keywords**: Update the `RELATIONSHIP_CATEGORIES` object with new keywords
2. **Add Content IDs**: Map content IDs to categories
3. **Rebuild**: The system will automatically rebuild relationships

Example:
```javascript
const RELATIONSHIP_CATEGORIES = {
  new_category: {
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    podIds: ['pod-id-1', 'pod-id-2'],
    packIds: ['pack-id-1'],
    caseStudyIds: ['case-study-id-1']
  }
};
```

## Testing

Use the test file to verify relationships:

```javascript
import '/src/utils/testRelationships.js';
```

This will log relationship statistics and test various functions.

## Data Flow

1. **Content Sources**: Pods, packs, and case studies from `/content/` directory
2. **Analysis**: Content is analyzed for keywords and relationships
3. **Mapping**: Relationships are built and stored in memory
4. **Access**: Components use utility functions to access related content
5. **Display**: Related content is displayed in the UI

## Performance Considerations

- Relationships are built once when the mapper is instantiated
- Content analysis uses efficient string matching
- Results are cached in memory for fast access
- No database queries required

## Future Enhancements

- Machine learning-based relationship detection
- User behavior-based recommendations
- Dynamic relationship scoring
- Content similarity algorithms
- Integration with analytics for relationship optimization 