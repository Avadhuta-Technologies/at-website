# AT Website Style Guide

## 🎨 Design System Overview

This style guide establishes the visual design system for the AT website, ensuring consistency across all components and pages.

## 🎯 Brand Identity

### Brand Colors
- **Primary Blue**: `#2563eb` - Used for primary actions, links, and highlights
- **Secondary Blue**: `#1e40af` - Used for hover states and secondary elements
- **Dark Blue**: `#1e3a8a` - Used for text and dark backgrounds
- **Light Blue**: `#dbeafe` - Used for backgrounds and subtle highlights
- **White**: `#ffffff` - Primary background color
- **Light Gray**: `#f8fafc` - Secondary background color
- **Gray**: `#64748b` - Secondary text color
- **Dark Gray**: `#334155` - Primary text color

### Color Usage Rules
- **MUST** use the established color palette only
- **NEVER** introduce new colors without approval
- **ALWAYS** maintain proper contrast ratios (minimum 4.5:1 for text)
- **MUST** use semantic color associations (success = green, error = red, etc.)

## 📝 Typography

### Font Family
- **Primary Font**: Inter (Variable font)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Weights
- **Light**: 300 - Used for subtle text
- **Regular**: 400 - Default body text
- **Medium**: 500 - Emphasis and subheadings
- **Semibold**: 600 - Section headings
- **Bold**: 700 - Main headings and CTAs

### Typography Scale
```css
/* Headings */
h1: 3rem (48px) - font-weight: 700
h2: 2.25rem (36px) - font-weight: 600
h3: 1.875rem (30px) - font-weight: 600
h4: 1.5rem (24px) - font-weight: 500
h5: 1.25rem (20px) - font-weight: 500
h6: 1.125rem (18px) - font-weight: 500

/* Body Text */
body: 1rem (16px) - font-weight: 400
small: 0.875rem (14px) - font-weight: 400
caption: 0.75rem (12px) - font-weight: 400
```

### Typography Rules
- **MUST** use the established font hierarchy
- **NEVER** use more than 3 different font sizes on a single page
- **ALWAYS** maintain proper line height (1.5 for body text, 1.2 for headings)
- **MUST** ensure text is readable on all background colors

## 📐 Spacing System

### Spacing Scale (Tailwind CSS)
```css
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
32: 8rem (128px)
```

### Spacing Rules
- **MUST** use the established spacing scale
- **NEVER** use arbitrary spacing values
- **ALWAYS** maintain consistent spacing between related elements
- **MUST** use responsive spacing for different screen sizes

## 🧩 Component Patterns

### Button Styles

#### Primary Button
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Primary Action
</button>
```

#### Secondary Button
```html
<button class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Secondary Action
</button>
```

#### Outline Button
```html
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Outline Action
</button>
```

### Card Styles

#### Standard Card
```html
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Card Title</h3>
  <p class="text-gray-600">Card content goes here.</p>
</div>
```

#### Feature Card
```html
<div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
    <!-- Icon here -->
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-3">Feature Title</h3>
  <p class="text-gray-600">Feature description.</p>
</div>
```

### Form Styles

#### Input Field
```html
<div class="mb-4">
  <label class="block text-sm font-medium text-gray-700 mb-2">Label</label>
  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
</div>
```

#### Textarea
```html
<div class="mb-4">
  <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"></textarea>
</div>
```

### Navigation Styles

#### Primary Navigation
```html
<nav class="bg-white shadow-sm border-b border-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img class="h-8 w-auto" src="/assets/logo/logo_png.png" alt="NovaPod AI Logo">
      </div>
      
      <!-- Navigation Links -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#" class="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
          <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Pods</a>
          <a href="#" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Packs</a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

## 🎨 Background Patterns

### Background Rules
- **MUST** use solid colors or subtle patterns only
- **NEVER** use gradient backgrounds (as per user preferences)
- **ALWAYS** maintain consistency with home page style
- **MUST** ensure proper contrast with text content

### Common Background Classes
```css
/* Primary background */
.bg-white

/* Secondary background */
.bg-gray-50

/* Accent background */
.bg-blue-50

/* Dark background */
.bg-gray-900
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

### Responsive Rules
- **MUST** design mobile-first
- **ALWAYS** test on multiple screen sizes
- **MUST** ensure touch targets are at least 44px
- **NEVER** hide important content on mobile

## 🎭 Interactive States

### Hover States
- **MUST** provide visual feedback for interactive elements
- **ALWAYS** use smooth transitions (200ms duration)
- **NEVER** use jarring color changes
- **MUST** maintain accessibility during hover states

### Focus States
- **MUST** provide clear focus indicators
- **ALWAYS** use consistent focus styling
- **NEVER** remove focus outlines without alternatives
- **MUST** ensure keyboard navigation works

### Loading States
- **MUST** provide loading indicators for async operations
- **ALWAYS** use consistent loading animations
- **NEVER** leave users without feedback
- **MUST** maintain accessibility during loading

## 🖼️ Image Guidelines

### Image Formats
- **Photos**: WebP or AVIF with JPEG fallback
- **Icons**: SVG for scalability
- **Logos**: SVG or high-resolution PNG
- **Graphics**: SVG when possible

### Image Optimization Rules
- **MUST** optimize all images before use
- **ALWAYS** provide alt text for accessibility
- **MUST** use appropriate image sizes
- **NEVER** use images larger than necessary

### Image Placeholder Pattern
```html
<img 
  src="/assets/placeholder.svg" 
  alt="Description" 
  class="w-full h-48 object-cover rounded-lg"
  loading="lazy"
>
```

## 🎨 Icon System

### Icon Guidelines
- **MUST** use consistent icon style
- **ALWAYS** provide proper sizing
- **MUST** ensure icons are accessible
- **NEVER** use icons without labels when needed

### Icon Sizes
```css
/* Small icons */
.w-4 h-4 (16px)

/* Medium icons */
.w-6 h-6 (24px)

/* Large icons */
.w-8 h-8 (32px)

/* Extra large icons */
.w-12 h-12 (48px)
```

## 📊 Data Visualization

### Chart Colors
- **Primary**: `#2563eb`
- **Secondary**: `#64748b`
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`

### Chart Guidelines
- **MUST** use consistent color schemes
- **ALWAYS** provide proper labels and legends
- **MUST** ensure accessibility compliance
- **NEVER** rely solely on color to convey information

## 🎯 Call-to-Action (CTA) Patterns

### Primary CTA
```html
<div class="bg-blue-600 text-white text-center py-12 px-6 rounded-lg">
  <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
  <p class="text-lg mb-6">Join thousands of businesses automating their workflows.</p>
  <button class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
    Get Started Now
  </button>
</div>
```

### Secondary CTA
```html
<div class="bg-gray-50 text-center py-12 px-6 rounded-lg">
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Learn More</h2>
  <p class="text-gray-600 mb-6">Discover how our solutions can help your business.</p>
  <a href="#" class="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
    Explore Solutions
  </a>
</div>
```

## 🔍 Accessibility Standards

### Color Contrast
- **Normal text**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **UI components**: Minimum 3:1 ratio

### Focus Indicators
- **MUST** be clearly visible
- **ALWAYS** use consistent styling
- **NEVER** remove without alternatives
- **MUST** work with keyboard navigation

### Screen Reader Support
- **MUST** provide proper alt text
- **ALWAYS** use semantic HTML
- **MUST** include ARIA labels when needed
- **NEVER** rely solely on visual cues

## 📋 Implementation Checklist

### Before Implementing New Components
- [ ] Follow established color palette
- [ ] Use consistent typography scale
- [ ] Implement proper spacing
- [ ] Ensure responsive design
- [ ] Add accessibility features
- [ ] Test interactive states
- [ ] Optimize for performance
- [ ] Validate against style guide

### Code Review Checklist
- [ ] Follows design system
- [ ] Uses consistent patterns
- [ ] Implements proper states
- [ ] Maintains accessibility
- [ ] Works across devices
- [ ] Matches brand identity
- [ ] Uses established components
- [ ] Follows naming conventions

---

**Remember**: This style guide ensures visual consistency and professional appearance across all pages and components. Always refer to this guide when creating new elements or modifying existing ones. 