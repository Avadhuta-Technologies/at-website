# Project Organization Plan

## 1. COMPONENTS STRUCTURE

### `/src/components/`
```
components/
├── shared/                    # Reusable components across pages
│   ├── HeroSection.astro
│   ├── CTASection.astro
│   ├── FAQSection.astro
│   ├── TestimonialsSection.astro
│   ├── Card.astro
│   ├── Button.astro
│   ├── Badge.astro
│   └── index.ts              # Export all shared components
├── layout/                    # Layout-specific components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Breadcrumb.astro
│   ├── Navigation.astro
│   └── index.ts
├── home/                      # Home page specific components
│   ├── HomeHeroSection.astro
│   ├── HomeFeaturesSection.astro
│   ├── HomeHowItWorksSection.astro
│   ├── HomeTestimonialsSection.astro
│   └── index.ts
├── pods/                      # Pods page specific components
│   ├── PodsHeroSection.astro
│   ├── PodsWhyChooseSection.astro
│   ├── PodsFeaturesSection.astro
│   ├── PodsGridSection.astro
│   ├── PodsFAQSection.astro
│   └── index.ts
├── packs/                     # Packs page specific components
│   ├── PacksHeroSection.astro
│   ├── PacksWhyChooseSection.astro
│   ├── PacksHowItWorksSection.astro
│   ├── PacksGridSection.astro
│   ├── PacksFAQSection.astro
│   ├── PacksTestimonialsSection.astro
│   └── index.ts
├── blog/                      # Blog related components
│   ├── BlogCard.astro
│   ├── BlogGrid.astro
│   ├── BlogSidebar.astro
│   ├── RelatedArticles.astro
│   ├── PopularArticles.astro
│   └── index.ts
├── forms/                     # Form components
│   ├── ContactForm.astro
│   ├── NewsletterForm.astro
│   ├── SearchForm.astro
│   └── index.ts
└── ui/                        # UI components
    ├── Modal.astro
    ├── Dropdown.astro
    ├── Accordion.astro
    ├── Pagination.astro
    └── index.ts
```

## 2. STYLES STRUCTURE

### `/src/styles/`
```
styles/
├── shared/                    # Shared styles
│   ├── index.css             # Main shared styles
│   ├── animations.css        # Animation utilities
│   ├── components.css        # Component styles
│   ├── utilities.css         # Utility classes
│   └── variables.css         # CSS variables
├── components/                # Component-specific styles
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   └── navigation.css
├── pages/                     # Page-specific styles
│   ├── home.css
│   ├── pods.css
│   ├── packs.css
│   └── blog.css
├── layout/                    # Layout styles
│   ├── header.css
│   ├── footer.css
│   └── navigation.css
├── themes/                    # Theme styles
│   ├── light.css
│   ├── dark.css
│   └── variables.css
└── base/                      # Base styles
    ├── reset.css
    ├── typography.css
    └── grid.css
```

## 3. CONTENT STRUCTURE

### `/src/content/`
```
content/
├── shared/                    # Shared content
│   ├── config.js             # Site configuration
│   ├── navigation.js         # Navigation data
│   ├── footer.js             # Footer data
│   └── index.ts
├── home/                      # Home page content
│   ├── hero.js
│   ├── features.js
│   ├── howItWorks.js
│   ├── testimonials.js
│   ├── faq.js
│   ├── cta.js
│   └── index.ts
├── pods/                      # Pods page content
│   ├── hero.js
│   ├── whyChoose.js
│   ├── features.js
│   ├── availablePods.js
│   ├── faq.js
│   ├── cta.js
│   └── index.ts
├── packs/                     # Packs page content
│   ├── hero.js
│   ├── whyChoose.js
│   ├── howItWorks.js
│   ├── availablePacks.js
│   ├── testimonials.js
│   ├── faq.js
│   ├── cta.js
│   └── index.ts
├── blog/                      # Blog content
│   ├── posts.js
│   ├── categories.js
│   ├── tags.js
│   └── index.ts
└── types/                     # TypeScript type definitions
    ├── content.ts
    ├── components.ts
    └── index.ts
```

## 4. UTILS STRUCTURE

### `/src/utils/`
```
utils/
├── constants/                 # Constants
│   ├── routes.ts
│   ├── api.ts
│   ├── validation.ts
│   └── index.ts
├── helpers/                   # Helper functions
│   ├── formatting.ts
│   ├── validation.ts
│   ├── navigation.ts
│   └── index.ts
├── validation/                # Validation utilities
│   ├── forms.ts
│   ├── content.ts
│   └── index.ts
└── types/                     # TypeScript types
    ├── global.ts
    ├── api.ts
    └── index.ts
```

## 5. SCRIPTS STRUCTURE

### `/src/scripts/`
```
scripts/
├── shared/                    # Shared scripts
│   ├── darkMode.js
│   ├── scrollAnimations.js
│   ├── interactiveElements.js
│   └── index.ts
├── components/                # Component-specific scripts
│   ├── accordion.js
│   ├── dropdown.js
│   ├── modal.js
│   ├── testimonial.js
│   └── index.ts
├── layout/                    # Layout scripts
│   ├── navigation.js
│   ├── stickyMenu.js
│   ├── scrollMenu.js
│   └── index.ts
└── utils/                     # Utility scripts
    ├── scrollTop.js
    ├── formValidation.js
    └── index.ts
```

## 6. PAGES STRUCTURE

### `/src/pages/`
```
pages/
├── index.astro               # Home page
├── explore-pods.astro        # Pods page
├── explore-packs.astro       # Packs page
├── about.astro              # About page
├── contact.astro            # Contact page
├── blog/                    # Blog pages
│   ├── index.astro
│   ├── [slug].astro
│   └── category/[category].astro
└── api/                     # API routes
    ├── contact.astro
    └── newsletter.astro
```

## 7. LAYOUTS STRUCTURE

### `/src/layouts/`
```
layouts/
├── Layout.astro             # Main layout
├── BlogLayout.astro         # Blog layout
├── PageLayout.astro         # Page layout
└── index.ts
```

## 8. ORGANIZATION PRINCIPLES

### Naming Conventions:
- **Components**: PascalCase (e.g., `HeroSection.astro`)
- **Files**: kebab-case (e.g., `hero-section.css`)
- **Folders**: kebab-case (e.g., `shared-components/`)
- **Exports**: camelCase (e.g., `export { heroSection }`)

### Import/Export Structure:
- Each folder has an `index.ts` file for clean imports
- Components are exported from their respective folders
- Shared components are available globally
- Page-specific components are scoped to their pages

### File Organization Rules:
1. **Single Responsibility**: Each file has one clear purpose
2. **Cohesion**: Related files are grouped together
3. **Dependency Management**: Clear import/export structure
4. **Scalability**: Easy to add new features
5. **Maintainability**: Clear folder structure

### Type Safety:
- All components have TypeScript interfaces
- Content files have proper type definitions
- Validation functions ensure data integrity
- Error handling for missing or invalid data

### Performance:
- Lazy loading for non-critical components
- Optimized imports to reduce bundle size
- Efficient CSS organization
- Proper asset management 