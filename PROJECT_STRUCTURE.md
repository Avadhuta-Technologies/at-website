# Project Structure Documentation

## Overview
This project has been reorganized following SOLID principles and clean code practices. The structure separates concerns, makes components reusable, and centralizes data management.

## Directory Structure

```
src/
├── components/
│   ├── sections/           # Reusable section components
│   │   ├── HeroSection.astro
│   │   ├── WhyChooseSection.astro
│   │   ├── FeaturesSection.astro
│   │   ├── PodsGridSection.astro
│   │   ├── PacksGridSection.astro
│   │   ├── HowItWorksSection.astro
│   │   ├── FAQSection.astro
│   │   ├── TestimonialsSection.astro
│   │   ├── CTASection.astro
│   │   └── index.js        # Component exports
│   └── layout/             # Layout components
├── content/                # Data layer
│   ├── pods.js            # Pods page data
│   ├── packs.js           # Packs page data
│   └── index.js           # Data exports
└── pages/                 # Page components
    ├── explore-pods.astro
    └── explore-packs.astro
```

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)
- Each component has a single, well-defined responsibility
- Data is separated from presentation logic
- Components are focused on specific UI sections

### 2. Open/Closed Principle (OCP)
- Components are open for extension through props
- New features can be added without modifying existing components
- Data structure allows easy addition of new content

### 3. Liskov Substitution Principle (LSP)
- Components accept standardized props interfaces
- All section components follow consistent patterns
- Props are properly typed with TypeScript interfaces

### 4. Interface Segregation Principle (ISP)
- Components only receive the props they need
- Optional props allow flexible usage
- Clean interfaces prevent prop pollution

### 5. Dependency Inversion Principle (DIP)
- Pages depend on abstractions (data interfaces)
- Components are not tightly coupled to specific data
- Data can be easily swapped or modified

## Component Architecture

### Section Components
Each section component follows a consistent pattern:
- **Props Interface**: TypeScript interface defining expected props
- **Default Values**: Sensible defaults for optional props
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized rendering and minimal JavaScript

### Data Layer
- **Centralized Data**: All content is stored in `/content` directory
- **Structured Format**: Consistent JSON-like structure
- **Type Safety**: TypeScript interfaces for data validation
- **Easy Maintenance**: Content can be updated without touching components

## Usage Examples

### Using Components
```astro
---
import { HeroSection, WhyChooseSection } from '../components/sections/index.js';
import { podsData } from '../content/index.js';
---

<HeroSection 
  badge={podsData.hero.badge}
  title={podsData.hero.title}
  subtitle={podsData.hero.subtitle}
  description={podsData.hero.description}
  stats={podsData.hero.stats}
/>
```

### Adding New Content
1. Add data to the appropriate content file (`pods.js` or `packs.js`)
2. Use existing components or create new ones following the established pattern
3. Import and use in pages

### Creating New Components
1. Follow the established naming convention
2. Define a TypeScript interface for props
3. Use consistent styling patterns
4. Add to the index.js file for easy imports

## Benefits

1. **Reusability**: Components can be used across multiple pages
2. **Maintainability**: Changes to data don't require component modifications
3. **Scalability**: Easy to add new pages and sections
4. **Consistency**: Uniform design patterns across the site
5. **Performance**: Optimized rendering and minimal bundle size
6. **Developer Experience**: Clear structure and easy to understand

## Best Practices

1. **Always use TypeScript interfaces** for component props
2. **Keep components focused** on a single responsibility
3. **Use consistent naming** conventions
4. **Document complex logic** with comments
5. **Test components** in isolation when possible
6. **Follow accessibility guidelines** for inclusive design 