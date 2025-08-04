# AT Website Project Documentation

## Project Overview

This is an Astro-based website for AT (Automation Technologies), featuring a modern e-commerce platform for selling automation pods and packs. The project uses Astro 5.x with Tailwind CSS, SCSS, and integrates with HubSpot for CRM functionality.

## Technology Stack

### Core Technologies
- **Astro**: 5.12.0 - Static site generator
- **Tailwind CSS**: 3.3.3 - Utility-first CSS framework
- **SCSS**: 1.89.2 - CSS preprocessor
- **TypeScript**: For type safety and better development experience
- **Vercel**: Deployment platform

### Key Dependencies
- **@astrojs/tailwind**: Tailwind CSS integration
- **@astrojs/vercel**: Vercel deployment adapter
- **astro-compress**: Asset compression
- **swiper**: Touch slider library
- **vanilla-cookieconsent**: Cookie consent management
- **@fontsource-variable/inter**: Inter font family

## Project Architecture

### Directory Structure

```
at-website/
├── public/                 # Static assets
│   ├── assets/            # Images, icons, brand assets
│   ├── fonts/             # Custom fonts
│   ├── scripts/           # Client-side JavaScript
│   └── images/            # General images
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer, etc.)
│   │   ├── shared/        # Shared components across pages
│   │   ├── ui/            # Basic UI components
│   │   └── [feature]/     # Feature-specific components
│   ├── content/           # Content management
│   │   ├── [feature]/     # Feature-specific content
│   │   └── types/         # TypeScript type definitions
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages (routes)
│   ├── scripts/           # Server-side scripts
│   ├── services/          # External service integrations
│   ├── styles/            # Global styles and SCSS
│   └── utils/             # Utility functions and helpers
├── config files           # Configuration files
└── documentation          # Project documentation
```

### Component Architecture

#### Component Categories

1. **Layout Components** (`src/components/layout/`)
   - `Layout.astro` - Main page layout
   - `Header.astro` - Navigation header
   - `Footer.astro` - Site footer
   - `BackToTop.astro` - Back to top button

2. **Shared Components** (`src/components/shared/`)
   - `CTASection.astro` - Call-to-action sections
   - `CartDrawer.astro` - Shopping cart
   - `CurrencyDisplay.astro` - Price formatting
   - `Newsletterbox.astro` - Newsletter signup

3. **Feature Components** (`src/components/[feature]/`)
   - Home page components
   - Pod-related components
   - Pack-related components
   - Case studies components
   - Portfolio components

4. **UI Components** (`src/components/ui/`)
   - Basic UI elements
   - Cards, buttons, forms
   - Reusable UI patterns

### Content Management

#### Content Structure
- **Homepage Content**: `src/content/home/`
- **Pod Content**: `src/content/pods/` (individual pod files)
- **Pack Content**: `src/content/packs/`
- **Case Studies**: `src/content/case-studies/`
- **Blog Content**: `src/content/blog/`

#### Content Patterns
- Each feature has its own content directory
- Content files use `.js` extension for structured data
- Blog posts use `.md` extension for markdown content
- Pod details are stored in individual `.md` files

### Styling Architecture

#### Style Organization
```
src/styles/
├── main.scss              # Main SCSS entry point
├── base/                  # Base styles
│   ├── _reset.scss       # CSS reset
│   ├── _typography.scss  # Typography rules
│   └── _utilities.scss   # Utility classes
├── components/           # Component-specific styles
├── layout/              # Layout styles
├── pages/               # Page-specific styles
└── sections/            # Section-specific styles
```

#### Styling Approach
- **Tailwind CSS**: Primary styling framework
- **SCSS**: Custom styles and component-specific styling
- **CSS Variables**: For consistent theming
- **Responsive Design**: Mobile-first approach

### Routing Structure

#### Page Organization
- **Home**: `/` - Main landing page
- **Pods**: `/pods/[slug]` - Individual pod pages
- **Packs**: `/packs/[slug]` - Individual pack pages
- **Case Studies**: `/case-studies/[slug]` - Case study pages
- **Portfolio**: `/portfolio` - Work showcase
- **Contact**: `/contact` - Contact form
- **Checkout**: `/checkout` - Purchase flow

## Development Guidelines

### Code Organization

#### File Naming Conventions
- **Components**: PascalCase (e.g., `PodCard.astro`)
- **Pages**: kebab-case (e.g., `explore-pods.astro`)
- **Content**: kebab-case (e.g., `_hero.js`)
- **Styles**: kebab-case with underscore prefix (e.g., `_buttons.scss`)

#### Import Organization
1. External libraries
2. Internal utilities
3. Components
4. Content/data
5. Styles

### Component Development

#### Component Structure
```astro
---
// 1. Imports
import Layout from '../layouts/Layout.astro';
import { getPodData } from '../../utils/podUtils.js';

// 2. Props/Data fetching
const { podSlug } = Astro.params;
const podData = await getPodData(podSlug);

// 3. Computed values
const formattedPrice = formatCurrency(podData.price);
---

<!-- 4. Template -->
<Layout title={podData.title}>
  <!-- Component content -->
</Layout>

<!-- 5. Styles (if needed) -->
<style>
  /* Component-specific styles */
</style>
```

#### Component Guidelines
- Keep components focused and single-purpose
- Use props for data passing
- Implement proper TypeScript types
- Follow consistent naming conventions
- Include proper accessibility attributes

### Styling Guidelines

#### Tailwind CSS Usage
- Use Tailwind utility classes as primary styling method
- Create custom components for repeated patterns
- Use `@apply` directive sparingly
- Maintain consistent spacing and color schemes

#### SCSS Guidelines
- Use SCSS for complex component styles
- Follow BEM methodology for class naming
- Keep styles modular and scoped
- Use CSS variables for theming

### Content Management

#### Content File Structure
```javascript
// Example: src/content/home/_hero.js
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

#### Content Guidelines
- Use descriptive variable names
- Maintain consistent data structure
- Separate content from presentation
- Use TypeScript interfaces for type safety

### Performance Guidelines

#### Optimization Strategies
- Use Astro's built-in optimization features
- Implement proper image optimization
- Minimize JavaScript bundle size
- Use lazy loading for images and components
- Implement proper caching strategies

#### Asset Management
- Optimize images before adding to public/assets
- Use appropriate image formats (WebP, AVIF)
- Implement responsive images
- Maintain organized asset structure

## Integration Guidelines

### HubSpot Integration
- Use `HubSpotService.ts` for CRM operations
- Follow proper property mapping
- Implement form validation
- Handle contact creation and updates

### External Services
- Implement proper error handling
- Use environment variables for API keys
- Follow security best practices
- Implement rate limiting where necessary

## Testing and Quality Assurance

### Code Quality
- Use Prettier for code formatting
- Follow ESLint rules (if configured)
- Implement proper TypeScript types
- Write self-documenting code

### Browser Compatibility
- Test across major browsers
- Implement progressive enhancement
- Ensure accessibility compliance
- Test responsive design

## Deployment

### Build Process
1. Run `npm run build` for production build
2. Assets are optimized and compressed
3. Static files are generated
4. Deploy to Vercel

### Environment Configuration
- Use `.env` files for environment variables
- Follow security best practices
- Implement proper staging/production separation

## Maintenance

### Regular Tasks
- Update dependencies regularly
- Monitor performance metrics
- Review and update content
- Backup content and configuration
- Monitor error logs

### Documentation Updates
- Keep documentation current
- Update component examples
- Maintain style guide
- Document breaking changes

## Troubleshooting

### Common Issues
- Build errors: Check dependency versions
- Styling issues: Verify Tailwind configuration
- Content not loading: Check file paths and imports
- Performance issues: Review asset optimization

### Debug Tools
- Browser developer tools
- Astro dev server logs
- Vercel deployment logs
- Performance monitoring tools 