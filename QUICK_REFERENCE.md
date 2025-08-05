# AT Website Quick Reference Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Key File Locations

### Configuration Files
- `astro.config.mjs` - Astro configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

### Content Structure
- `src/content/home/` - Homepage content
- `src/content/pods/` - Individual pod files
- `src/content/packs/` - Pack content
- `src/content/case-studies/` - Case study content

### Component Locations
- `src/components/layout/` - Layout components
- `src/components/shared/` - Shared components
- `src/components/ui/` - Basic UI components
- `src/components/[feature]/` - Feature-specific components

### Style Files
- `src/styles/main.scss` - Main SCSS entry point
- `src/styles/base/` - Base styles
- `src/styles/components/` - Component styles
- `src/styles/pages/` - Page-specific styles

## 🎨 Design Tokens

### Colors
```css
/* Primary Colors */
--blue-600: #2563eb
--blue-700: #1e40af
--blue-800: #1e3a8a
--blue-50: #dbeafe

/* Neutral Colors */
--white: #ffffff
--gray-50: #f8fafc
--gray-600: #64748b
--gray-800: #334155
```

### Typography
```css
/* Font Family */
font-family: 'Inter', system-ui, sans-serif

/* Font Weights */
font-weight: 300 (light)
font-weight: 400 (regular)
font-weight: 500 (medium)
font-weight: 600 (semibold)
font-weight: 700 (bold)

/* Font Sizes */
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
```

### Spacing
```css
/* Tailwind Spacing Scale */
space-1: 0.25rem (4px)
space-2: 0.5rem (8px)
space-3: 0.75rem (12px)
space-4: 1rem (16px)
space-6: 1.5rem (24px)
space-8: 2rem (32px)
space-12: 3rem (48px)
space-16: 4rem (64px)
```

## 🧩 Component Patterns

### Basic Component Structure
```astro
---
// 1. External libraries
import { someLibrary } from 'external-package';

// 2. Internal utilities
import { formatCurrency } from '../../utils/currencyUtils.js';

// 3. Components
import Layout from '../layouts/Layout.astro';

// 4. Content/data
import { heroData } from '../../content/home/_hero.js';

// 5. Props/data fetching
const { slug } = Astro.params;
const data = await fetchData(slug);

// 6. Computed values
const formattedPrice = formatCurrency(data.price);
---

<!-- 7. Template -->
<Layout title={data.title}>
  <!-- Component content -->
</Layout>

<!-- 8. Styles (if needed) -->
<style>
  /* Component-specific styles */
</style>
```

### Common Tailwind Classes
```html
<!-- Layout -->
<div class="container mx-auto px-4">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div class="flex items-center justify-between">

<!-- Typography -->
<h1 class="text-3xl font-bold text-gray-800">
<p class="text-gray-600 leading-relaxed">

<!-- Spacing -->
<div class="py-12 px-6">
<div class="mb-8 mt-4">

<!-- Colors -->
<div class="bg-white text-gray-800">
<div class="bg-blue-600 text-white">

<!-- Interactive -->
<button class="hover:bg-blue-700 transition-colors duration-200">
<a class="focus:ring-2 focus:ring-blue-500">
```

## 📝 Content Management

### Content File Structure
```javascript
// src/content/home/_hero.js
export const hero = {
  title: "Main headline",
  subtitle: "Supporting text",
  cta: {
    text: "Get Started",
    url: "/contact"
  },
  image: "/assets/hero/hero-image.jpg"
};
```

### Pod Content Rules
- Use `/content/pod.js` for homepage pod data
- Use `/content/pods/{pod_file}` for detailed pod information
- Curate pod details from individual files for home page
- Never duplicate pod data across multiple files

## 🔧 Utility Functions

### Common Utilities
```javascript
// Currency formatting
import { formatCurrency } from '../../utils/currencyUtils.js';

// Slug generation
import { generateSlug } from '../../utils/slugUtils.js';

// HubSpot integration
import { HubSpotService } from '../../services/HubSpotService.js';

// Validation
import { validateEmail } from '../../utils/validation.js';
```

### Environment Variables
```javascript
// Access environment variables
const apiKey = import.meta.env.HUBSPOT_API_KEY;
const isDev = import.meta.env.DEV;
```

## 🎯 Common Patterns

### Button Components
```html
<!-- Primary Button -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Secondary Action
</button>

<!-- Outline Button -->
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Outline Action
</button>
```

### Card Components
```html
<!-- Standard Card -->
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Card Title</h3>
  <p class="text-gray-600">Card content goes here.</p>
</div>

<!-- Feature Card -->
<div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
    <!-- Icon here -->
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-3">Feature Title</h3>
  <p class="text-gray-600">Feature description.</p>
</div>
```

### Form Components
```html
<!-- Input Field -->
<div class="mb-4">
  <label class="block text-sm font-medium text-gray-700 mb-2">Label</label>
  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
</div>

<!-- Textarea -->
<div class="mb-4">
  <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"></textarea>
</div>
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Classes
```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Responsive Text -->
<h1 class="text-2xl md:text-3xl lg:text-4xl">

<!-- Responsive Spacing -->
<div class="py-8 md:py-12 lg:py-16">

<!-- Responsive Visibility -->
<div class="hidden md:block">
<div class="block md:hidden">
```

## 🔍 Accessibility

### Required Attributes
```html
<!-- Images -->
<img src="image.jpg" alt="Descriptive alt text">

<!-- Links -->
<a href="/page" aria-label="Descriptive link text">

<!-- Buttons -->
<button aria-label="Action description">

<!-- Forms -->
<input type="text" aria-describedby="error-message">
```

### Focus Management
```html
<!-- Focus indicators -->
<button class="focus:ring-2 focus:ring-blue-500 focus:outline-none">

<!-- Skip links -->
<a href="#main-content" class="sr-only focus:not-sr-only">
```

## 🚨 Common Issues & Solutions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Astro version compatibility
npm list astro

# Verify TypeScript configuration
npx tsc --noEmit
```

### Styling Issues
```css
/* Ensure Tailwind is imported */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Check for CSS conflicts */
/* Use more specific selectors if needed */
```

### Content Not Loading
```javascript
// Check file paths
import { content } from '../../content/home/_hero.js';

// Verify export structure
export const hero = { /* content */ };

// Check for typos in import names
```

## 📋 Development Checklist

### Before Starting
- [ ] Read existing code patterns
- [ ] Check component library documentation
- [ ] Review style guide
- [ ] Understand content structure

### During Development
- [ ] Follow naming conventions
- [ ] Use established component patterns
- [ ] Implement proper error handling
- [ ] Add accessibility features
- [ ] Test responsive design

### Before Committing
- [ ] Run build process
- [ ] Test on multiple browsers
- [ ] Check for console errors
- [ ] Validate accessibility
- [ ] Review performance impact

## 🔗 Useful Resources

### Documentation
- [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) - Complete project documentation
- [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md) - Development rules and standards
- [STYLE_GUIDE.md](./STYLE_GUIDE.md) - Design system and styling guide
- [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) - Component library documentation

### External Resources
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [HubSpot API Documentation](https://developers.hubspot.com/)

### Tools
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Wave Accessibility Tool](https://wave.webaim.org/)

---

**Remember**: This quick reference guide provides essential information for daily development. Always refer to the full documentation for detailed guidelines and rules. 