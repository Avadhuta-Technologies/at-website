# Development Rules and Standards

## 🚨 MANDATORY RULES - MUST FOLLOW

### 1. Code Organization and Structure

#### File Naming Conventions
- **Components**: MUST use PascalCase (e.g., `PodCard.astro`, `HeroSection.astro`)
- **Pages**: MUST use kebab-case (e.g., `explore-pods.astro`, `case-studies.astro`)
- **Content files**: MUST use kebab-case with underscore prefix (e.g., `_hero.js`, `_faq.js`)
- **Style files**: MUST use kebab-case with underscore prefix (e.g., `_buttons.scss`, `_layout.scss`)
- **Utility files**: MUST use camelCase (e.g., `podUtils.js`, `colorUtils.ts`)

#### Directory Structure Rules
- **NEVER** create files in the wrong directory
- **ALWAYS** place components in appropriate feature folders
- **NEVER** mix different file types in the same directory
- **ALWAYS** follow the established folder hierarchy

### 2. Component Development Rules

#### Component Structure (MANDATORY ORDER)
```astro
---
// 1. EXTERNAL LIBRARIES (always first)
import { someLibrary } from 'external-package';

// 2. INTERNAL UTILITIES
import { formatCurrency } from '../../utils/currencyUtils.js';

// 3. COMPONENTS
import Layout from '../layouts/Layout.astro';
import PodCard from './PodCard.astro';

// 4. CONTENT/DATA
import { heroData } from '../../content/home/_hero.js';

// 5. PROPS/DATA FETCHING
const { slug } = Astro.params;
const data = await fetchData(slug);

// 6. COMPUTED VALUES
const formattedPrice = formatCurrency(data.price);
---

<!-- 7. TEMPLATE -->
<Layout title={data.title}>
  <!-- Component content -->
</Layout>

<!-- 8. STYLES (if needed) -->
<style>
  /* Component-specific styles */
</style>
```

#### Component Guidelines
- **MUST** keep components single-purpose and focused
- **MUST** use props for data passing between components
- **MUST** implement proper TypeScript types for all props
- **MUST** include proper accessibility attributes (aria-labels, alt text, etc.)
- **MUST** use semantic HTML elements
- **NEVER** create components larger than 200 lines
- **ALWAYS** add comments for complex logic

### 3. Styling Rules

#### Tailwind CSS Usage
- **MUST** use Tailwind utility classes as the primary styling method
- **MUST** maintain consistent spacing using Tailwind's spacing scale
- **MUST** use the established color palette (defined in tailwind.config.cjs)
- **NEVER** use inline styles
- **NEVER** use `!important` unless absolutely necessary
- **ALWAYS** use responsive design classes (sm:, md:, lg:, xl:)

#### SCSS Guidelines
- **MUST** use SCSS only for complex component styles that can't be achieved with Tailwind
- **MUST** follow BEM methodology for class naming
- **MUST** scope styles to the component using `:global()` sparingly
- **NEVER** create global styles without approval
- **ALWAYS** use CSS variables for theming

#### Background and UI Consistency
- **MUST** match home page style for backgrounds (no gradient backgrounds)
- **MUST** maintain uniform styling patterns across all sections
- **MUST** use consistent spacing and typography
- **NEVER** introduce new color schemes without approval

### 4. Content Management Rules

#### Content File Structure
- **MUST** use the established content structure in `src/content/`
- **MUST** separate content from presentation logic
- **MUST** use descriptive variable names
- **MUST** maintain consistent data structure across similar content types
- **NEVER** hardcode content in components

#### Pod Content Rules
- **MUST** use `/content/pod.js` for homepage pod data
- **MUST** use `/content/pods/{pod_file}` for detailed pod information
- **MUST** curate pod details from individual files for the home page
- **NEVER** duplicate pod data across multiple files

#### Content Guidelines
```javascript
// CORRECT: src/content/home/_hero.js
export const hero = {
  title: "Main headline",
  subtitle: "Supporting text",
  cta: {
    text: "Get Started",
    url: "/contact"
  },
  image: "/assets/hero/hero-image.jpg"
};

// INCORRECT: Hardcoding in component
const title = "Main headline"; // DON'T DO THIS
```

### 5. Performance Rules

#### Optimization Requirements
- **MUST** optimize images before adding to public/assets
- **MUST** use appropriate image formats (WebP, AVIF for photos, SVG for icons)
- **MUST** implement lazy loading for images
- **MUST** minimize JavaScript bundle size
- **NEVER** load unnecessary dependencies
- **ALWAYS** use Astro's built-in optimization features

#### Asset Management
- **MUST** organize assets in appropriate folders under public/assets
- **MUST** use descriptive file names
- **MUST** implement responsive images where appropriate
- **NEVER** use images larger than necessary

### 6. Integration Rules

#### HubSpot Integration
- **MUST** use `HubSpotService.ts` for all CRM operations
- **MUST** follow proper property mapping
- **MUST** implement form validation
- **MUST** handle errors gracefully
- **NEVER** expose API keys in client-side code

#### External Services
- **MUST** use environment variables for API keys
- **MUST** implement proper error handling
- **MUST** follow security best practices
- **MUST** implement rate limiting where necessary

### 7. Code Quality Rules

#### TypeScript Usage
- **MUST** use TypeScript for all new files
- **MUST** define proper interfaces for all data structures
- **MUST** use strict type checking
- **NEVER** use `any` type without justification
- **ALWAYS** add proper JSDoc comments for complex functions

#### Error Handling
- **MUST** implement proper error boundaries
- **MUST** handle async operations with try-catch
- **MUST** provide meaningful error messages
- **NEVER** let errors bubble up to the user without handling

### 8. Accessibility Rules

#### WCAG Compliance
- **MUST** ensure proper heading hierarchy (h1, h2, h3, etc.)
- **MUST** provide alt text for all images
- **MUST** use proper ARIA labels where needed
- **MUST** ensure keyboard navigation works
- **MUST** maintain proper color contrast ratios
- **NEVER** rely solely on color to convey information

### 9. Testing and Validation Rules

#### Pre-commit Requirements
- **MUST** test all changes across different browsers
- **MUST** validate responsive design on multiple screen sizes
- **MUST** check for accessibility issues
- **MUST** verify performance impact
- **NEVER** commit code that breaks existing functionality

### 10. Documentation Rules

#### Code Documentation
- **MUST** document complex functions and components
- **MUST** update documentation when making changes
- **MUST** include examples for reusable components
- **NEVER** leave TODO comments in production code

## 🔧 DEVELOPMENT WORKFLOW

### Before Making Changes
1. **ALWAYS** read the existing code to understand patterns
2. **ALWAYS** check the documentation for established conventions
3. **ALWAYS** test existing functionality before making changes
4. **ALWAYS** create a backup or use version control

### During Development
1. **ALWAYS** follow the established file structure
2. **ALWAYS** use consistent naming conventions
3. **ALWAYS** implement proper error handling
4. **ALWAYS** test your changes thoroughly

### Before Committing
1. **MUST** run the build process successfully
2. **MUST** test on multiple browsers
3. **MUST** validate responsive design
4. **MUST** check for accessibility issues
5. **MUST** ensure no console errors
6. **MUST** verify performance impact

## 🚫 FORBIDDEN PRACTICES

### Code Practices
- ❌ **NEVER** use inline styles
- ❌ **NEVER** hardcode content in components
- ❌ **NEVER** create global CSS without approval
- ❌ **NEVER** use `!important` without justification
- ❌ **NEVER** ignore TypeScript errors
- ❌ **NEVER** commit console.log statements
- ❌ **NEVER** use deprecated methods or libraries

### File Organization
- ❌ **NEVER** place files in wrong directories
- ❌ **NEVER** use inconsistent naming conventions
- ❌ **NEVER** create circular dependencies
- ❌ **NEVER** duplicate code across components

### Performance
- ❌ **NEVER** load unnecessary dependencies
- ❌ **NEVER** use unoptimized images
- ❌ **NEVER** ignore bundle size increases
- ❌ **NEVER** skip error handling

## ✅ BEST PRACTICES

### Recommended Patterns
- ✅ Use composition over inheritance
- ✅ Keep functions small and focused
- ✅ Use meaningful variable and function names
- ✅ Implement proper loading states
- ✅ Use semantic HTML elements
- ✅ Follow the DRY principle (Don't Repeat Yourself)
- ✅ Write self-documenting code

### Code Review Checklist
- [ ] Follows naming conventions
- [ ] Implements proper error handling
- [ ] Includes accessibility features
- [ ] Maintains performance standards
- [ ] Uses consistent styling patterns
- [ ] Includes proper documentation
- [ ] Passes all tests
- [ ] No console errors
- [ ] Responsive design works
- [ ] Cross-browser compatibility

## 📋 ENFORCEMENT

### Code Review Process
1. **MANDATORY** code review for all changes
2. **MANDATORY** testing on multiple browsers
3. **MANDATORY** accessibility validation
4. **MANDATORY** performance impact assessment

### Violation Consequences
- Code changes will be rejected if they violate these rules
- Developers must fix violations before code can be merged
- Repeated violations may result in additional review requirements

## 🔄 UPDATING THESE RULES

### Rule Modification Process
1. **MUST** get approval from project maintainers
2. **MUST** update all related documentation
3. **MUST** communicate changes to all team members
4. **MUST** provide migration guidance for existing code

---

**Remember**: These rules exist to maintain code quality, consistency, and maintainability. Following them ensures that the project remains professional, accessible, and performant for all users. 