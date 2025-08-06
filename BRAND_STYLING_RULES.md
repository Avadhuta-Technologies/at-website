# AT Website Brand Styling Rules

## 🎨 BRAND STYLING REFERENCE - HomeHeroSection.astro Patterns

This document establishes the definitive styling patterns based on the HomeHeroSection.astro component to ensure consistent branding across all sections and pages.

## 📝 TYPOGRAPHY SYSTEM

### Font Family Hierarchy
- **Primary Font**: `font-inter` (Inter) - Used for all body text, buttons, and general content
- **Fallback**: `sans-serif` - System fallback

### Font Size Scale (Responsive)
```css
/* Mobile First Approach */
.text-4xl md:text-5xl lg:text-6xl  /* Hero headlines (48px → 60px → 72px) */
.text-xl md:text-2xl               /* Subheadings (20px → 24px) */
.text-lg                           /* Body large (18px) */
.text-base                         /* Body text (16px) */
.text-sm                           /* Small text (14px) */
```

### Font Weight System
```css
.font-bold                         /* Main headlines (700) */
.font-semibold                     /* Buttons, emphasis (600) */
.font-medium                       /* Subheadings (500) */
.font-normal                       /* Body text (400) */
```

### Line Height System
```css
.leading-tight                     /* Headlines (1.25) */
.leading-relaxed                   /* Body text (1.625) */
```

## 🎨 COLOR SYSTEM

### Primary Color Palette
```css
/* Text Colors */
.text-graphite-700                /* Primary text color */
.text-graphite-600                /* Secondary text color */
.text-white                       /* White text */

/* Background Colors */
.bg-white                         /* Primary background */
.bg-graphite-50                   /* Secondary background */
```

### Accent Colors
```css
/* Mint (Primary Accent) */
.text-mint-700                    /* Mint text */
.bg-mint-500                      /* Mint background */
.border-mint-200/30               /* Mint border with opacity */

/* Cerulean (Secondary Accent) */
.text-cerulean-700                /* Cerulean text */
.bg-cerulean-500                  /* Cerulean background */
```

## 🔘 BUTTON STYLING SYSTEM

### Primary CTA Button Pattern
```html
<a class="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-mint-500 to-cerulean-500 text-white font-inter font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 hover:scale-105 hover:shadow-md group flex-shrink-0 shadow-sm">
  <span>Button Text</span>
  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Icon path -->
  </svg>
</a>
```

### Secondary Button Pattern
```html
<a class="inline-flex items-center px-6 py-3 glass border-graphite-300/50 text-graphite-700 font-inter font-semibold rounded-lg hover:bg-graphite-50/50 hover:border-graphite-400/70 transition-all duration-300 group hover:scale-105">
  <span>Button Text</span>
  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Icon path -->
  </svg>
</a>
```

### Glass Badge Pattern
```html
<div class="inline-flex items-center px-4 py-2 glass border-mint-200/30 text-mint-700 text-sm font-semibold rounded-full hover:glass-strong transition-all duration-300">
  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Icon path -->
  </svg>
  Badge Text
</div>
```

## 🎭 GLASSMORPHISM SYSTEM

### Glass Effect Classes
```css
.glass {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-strong {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Glass Button Enhancements
```css
.glass.bg-mint-500\/20 {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
}

.glass.bg-mint-500\/20:hover {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 100%);
}

.glass.border-graphite-300\/50 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.glass.border-graphite-300\/50:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}
```

## 🎨 GRADIENT SYSTEM

### Text Gradients
```css
.gradient-title {
  /* Applied to main headlines */
}

.gradient-text {
  /* Applied to highlighted text within headlines */
}
```

### Background Gradients
```css
.bg-gradient-to-r from-mint-500 to-cerulean-500    /* Primary button gradient */
.hover:from-mint-600 hover:to-cerulean-600         /* Primary button hover */
```

## 📐 SPACING SYSTEM

### Container Spacing
```css
.container mx-auto px-4 py-20 md:py-32             /* Main section containers */
.max-w-6xl mx-auto text-center                     /* Content max width */
.max-w-3xl mx-auto                                 /* Subtitle max width */
.max-w-2xl mx-auto                                 /* Description max width */
```

### Element Spacing
```css
.mb-8                                              /* Badge to headline spacing */
.mb-6                                              /* Headline to subtitle spacing */
.mb-8                                              /* Subtitle to description spacing */
.mb-12                                             /* Description to buttons spacing */
.gap-4                                             /* Button group spacing */
```

### Padding System
```css
.px-6 py-3                                         /* Button padding */
.px-4 py-2                                         /* Badge padding */
```

## 🎭 INTERACTION PATTERNS

### Hover Effects
```css
.hover:scale-105                                   /* Button scale on hover */
.hover:translate-x-1                               /* Icon slide on hover */
.hover:shadow-md                                   /* Button shadow on hover */
.hover:glass-strong                                /* Glass effect enhancement */
```

### Transitions
```css
.transition-all duration-300                       /* Standard transition */
.transition-transform duration-300                 /* Transform transition */
```

### Group Hover Patterns
```css
.group-hover:translate-x-1                         /* Icon animation in button groups */
```

## 📱 RESPONSIVE PATTERNS

### Text Responsiveness
```css
.text-4xl md:text-5xl lg:text-6xl                 /* Responsive headline scaling */
.text-xl md:text-2xl                               /* Responsive subtitle scaling */
```

### Layout Responsiveness
```css
.flex flex-col sm:flex-row                         /* Stack to row layout */
.justify-center items-center                       /* Center alignment */
```

## 🎨 LAYOUT PATTERNS

### Section Structure
```html
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div class="relative z-10 container mx-auto px-4 py-20 md:py-32">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Content Alignment
```css
.text-center                                       /* Center all text content */
.flex items-center justify-center                  /* Center flex content */
```

## 🔧 IMPLEMENTATION RULES

### MANDATORY PATTERNS
1. **ALWAYS** use `font-inter` for all text content
2. **ALWAYS** use the established color palette (graphite, mint, cerulean)
3. **ALWAYS** implement responsive text sizing with mobile-first approach
4. **ALWAYS** use glassmorphism effects for secondary elements
5. **ALWAYS** include hover states with scale and transition effects
6. **ALWAYS** use the established spacing system
7. **ALWAYS** center-align content in hero sections
8. **ALWAYS** include icon animations in buttons

### FORBIDDEN PATTERNS
1. **NEVER** use gradient backgrounds (only text and button gradients allowed)
2. **NEVER** use fonts other than Inter without approval
3. **NEVER** use colors outside the established palette
4. **NEVER** skip responsive design implementation
5. **NEVER** omit hover states for interactive elements
6. **NEVER** use arbitrary spacing values
7. **NEVER** use inline styles

### QUALITY REQUIREMENTS
1. **MUST** maintain consistent visual hierarchy
2. **MUST** ensure proper contrast ratios
3. **MUST** implement smooth animations
4. **MUST** follow accessibility guidelines
5. **MUST** test across all device sizes
6. **MUST** maintain brand consistency

## 📋 COMPONENT CHECKLIST

Before implementing any new section, ensure:
- [ ] Uses `font-inter` for all text
- [ ] Implements responsive text sizing
- [ ] Uses established color palette
- [ ] Includes proper hover states
- [ ] Follows spacing system
- [ ] Implements glassmorphism where appropriate
- [ ] Centers content properly
- [ ] Includes smooth transitions
- [ ] Maintains visual hierarchy
- [ ] Passes accessibility checks

## 🎯 REFERENCE COMPONENT

**HomeHeroSection.astro** serves as the definitive reference for:
- Typography patterns
- Color usage
- Button styling
- Glassmorphism effects
- Spacing system
- Responsive design
- Interaction patterns
- Layout structure

All new sections must follow these exact patterns to maintain brand consistency. 