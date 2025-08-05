# AT Website Component Library

## 📚 Component Overview

This document catalogs all components in the AT website, their usage patterns, props, and implementation guidelines.

## 🏗️ Layout Components

### Layout.astro
**Location**: `src/layouts/Layout.astro`
**Purpose**: Main page layout wrapper

**Props**:
- `title` (string): Page title
- `description` (string): Meta description
- `image` (string): Open Graph image

**Usage**:
```astro
<Layout title="Page Title" description="Page description">
  <!-- Page content -->
</Layout>
```

### Header.astro
**Location**: `src/components/layout/Header.astro`
**Purpose**: Site navigation header

**Features**:
- Responsive navigation
- Logo display
- Mobile menu
- Search functionality

### Footer.astro
**Location**: `src/components/layout/Footer.astro`
**Purpose**: Site footer with links and information

**Features**:
- Company information
- Navigation links
- Social media links
- Newsletter signup

### BackToTop.astro
**Location**: `src/components/layout/BackToTop.astro`
**Purpose**: Back to top button

**Features**:
- Scroll-triggered visibility
- Smooth scroll behavior
- Accessible button

## 🧩 Shared Components

### CTASection.astro
**Location**: `src/components/shared/CTASection.astro`
**Purpose**: Reusable call-to-action sections

**Props**:
- `title` (string): CTA title
- `description` (string): CTA description
- `buttonText` (string): Button text
- `buttonUrl` (string): Button URL
- `variant` (string): Style variant ('primary' | 'secondary')

**Usage**:
```astro
<CTASection 
  title="Ready to Get Started?"
  description="Join thousands of businesses automating their workflows."
  buttonText="Get Started Now"
  buttonUrl="/contact"
  variant="primary"
/>
```

### CartDrawer.astro
**Location**: `src/components/shared/CartDrawer.astro`
**Purpose**: Shopping cart sidebar

**Features**:
- Product list display
- Quantity controls
- Price calculations
- Checkout integration

### CurrencyDisplay.astro
**Location**: `src/components/shared/CurrencyDisplay.astro`
**Purpose**: Consistent price formatting

**Props**:
- `amount` (number): Price amount
- `currency` (string): Currency code (default: 'USD')
- `size` (string): Text size ('sm' | 'md' | 'lg')

**Usage**:
```astro
<CurrencyDisplay amount={99.99} currency="USD" size="lg" />
```

### Newsletterbox.astro
**Location**: `src/components/shared/Newsletterbox.astro`
**Purpose**: Newsletter signup component

**Features**:
- Email validation
- HubSpot integration
- Success/error states
- GDPR compliance

## 🏠 Home Page Components

### HomeHeroSection.astro
**Location**: `src/components/home/HomeHeroSection.astro`
**Purpose**: Main hero section for homepage

**Content Source**: `src/content/home/_hero.js`

**Features**:
- Hero image display
- Main headline
- Call-to-action buttons
- Background styling

### HomeFeaturesSection.astro
**Location**: `src/components/home/HomeFeaturesSection.astro`
**Purpose**: Features showcase section

**Content Source**: `src/content/home/_features.js`

**Features**:
- Feature cards grid
- Icon display
- Feature descriptions
- Responsive layout

### HomeTestimonialsSection.astro
**Location**: `src/components/home/HomeTestimonialsSection.astro`
**Purpose**: Customer testimonials section

**Content Source**: `src/content/home/_testimonials.js`

**Features**:
- Testimonial carousel
- Customer photos
- Star ratings
- Company information

### HomeFAQSection.astro
**Location**: `src/components/home/HomeFAQSection.astro`
**Purpose**: Frequently asked questions section

**Content Source**: `src/content/home/_faq.js`

**Features**:
- Accordion-style FAQ
- Search functionality
- Category filtering
- Expandable answers

## 🏢 Pod Components

### PodCard.astro
**Location**: `src/components/pods/PodCard.astro`
**Purpose**: Individual pod display card

**Props**:
- `pod` (object): Pod data object
- `variant` (string): Display variant ('grid' | 'list')

**Features**:
- Pod image display
- Title and description
- Price display
- Action buttons

### PodDetailHeroSection.astro
**Location**: `src/components/pod-detail/PodDetailHeroSection.astro`
**Purpose**: Hero section for individual pod pages

**Props**:
- `pod` (object): Pod data object

**Features**:
- Pod hero image
- Title and description
- Key features list
- Purchase button

### PodFeaturesSection.astro
**Location**: `src/components/pod-detail/PodFeaturesSection.astro`
**Purpose**: Detailed features section

**Props**:
- `features` (array): Features array

**Features**:
- Feature grid layout
- Icon display
- Feature descriptions
- Category grouping

### PodPricingSection.astro
**Location**: `src/components/pod-detail/PodPricingSection.astro`
**Purpose**: Pricing information section

**Props**:
- `pricing` (object): Pricing data

**Features**:
- Price display
- Feature comparison
- Add-on options
- Purchase flow

## 📦 Pack Components

### PackCard.astro
**Location**: `src/components/packs/PackCard.astro`
**Purpose**: Individual pack display card

**Props**:
- `pack` (object): Pack data object
- `variant` (string): Display variant

**Features**:
- Pack image display
- Title and description
- Price display
- Included items list

### PackDetailHeroSection.astro
**Location**: `src/components/packs/PackDetailHeroSection.astro`
**Purpose**: Hero section for individual pack pages

**Props**:
- `pack` (object): Pack data object

**Features**:
- Pack hero image
- Title and description
- Key benefits
- Purchase button

### PackAddOnsSection.astro
**Location**: `src/components/packs/PackAddOnsSection.astro`
**Purpose**: Add-on options section

**Props**:
- `addOns` (array): Add-on options array

**Features**:
- Add-on grid
- Price display
- Feature descriptions
- Selection controls

## 📊 Case Study Components

### CaseStudyCard.astro
**Location**: `src/components/case-studies/CaseStudyCard.astro`
**Purpose**: Individual case study display card

**Props**:
- `caseStudy` (object): Case study data object

**Features**:
- Case study image
- Title and description
- Results metrics
- Industry tags

### CaseStudyHeroSection.astro
**Location**: `src/components/case-studies/CaseStudyHeroSection.astro`
**Purpose**: Hero section for case study pages

**Props**:
- `caseStudy` (object): Case study data object

**Features**:
- Hero image
- Client information
- Project overview
- Key metrics

### CaseStudyApproachSection.astro
**Location**: `src/components/case-studies/CaseStudyApproachSection.astro`
**Purpose**: Methodology and approach section

**Props**:
- `approach` (array): Approach steps array

**Features**:
- Step-by-step process
- Visual timeline
- Detailed descriptions
- Outcome metrics

## 🎨 UI Components

### Card.astro
**Location**: `src/components/ui/Card.astro`
**Purpose**: Basic card component

**Props**:
- `title` (string): Card title
- `description` (string): Card description
- `image` (string): Card image URL
- `variant` (string): Style variant

**Usage**:
```astro
<Card 
  title="Card Title"
  description="Card description"
  image="/assets/image.jpg"
  variant="feature"
/>
```

### Button.astro
**Location**: `src/components/ui/Button.astro`
**Purpose**: Reusable button component

**Props**:
- `text` (string): Button text
- `url` (string): Button URL
- `variant` (string): Style variant ('primary' | 'secondary' | 'outline')
- `size` (string): Button size ('sm' | 'md' | 'lg')

**Usage**:
```astro
<Button 
  text="Click Me"
  url="/destination"
  variant="primary"
  size="md"
/>
```

### Form.astro
**Location**: `src/components/ui/Form.astro`
**Purpose**: Form wrapper component

**Props**:
- `action` (string): Form action URL
- `method` (string): HTTP method
- `fields` (array): Form fields configuration

**Features**:
- Field validation
- Error handling
- Success states
- HubSpot integration

## 📱 Responsive Components

### ResponsiveGrid.astro
**Location**: `src/components/shared/ResponsiveGrid.astro`
**Purpose**: Responsive grid layout wrapper

**Props**:
- `columns` (object): Column configuration for breakpoints
- `gap` (string): Grid gap size

**Usage**:
```astro
<ResponsiveGrid 
  columns={{ sm: 1, md: 2, lg: 3 }}
  gap="6"
>
  <!-- Grid items -->
</ResponsiveGrid>
```

### ResponsiveImage.astro
**Location**: `src/components/shared/ResponsiveImage.astro`
**Purpose**: Responsive image component

**Props**:
- `src` (string): Image source
- `alt` (string): Alt text
- `sizes` (object): Responsive sizes configuration

**Features**:
- Responsive image loading
- Lazy loading
- WebP/AVIF support
- Fallback handling

## 🔧 Interactive Components

### Accordion.astro
**Location**: `src/components/ui/Accordion.astro`
**Purpose**: Collapsible content sections

**Props**:
- `items` (array): Accordion items array
- `allowMultiple` (boolean): Allow multiple open sections

**Features**:
- Smooth animations
- Keyboard navigation
- ARIA compliance
- Custom styling

### Modal.astro
**Location**: `src/components/ui/Modal.astro`
**Purpose**: Modal dialog component

**Props**:
- `id` (string): Modal ID
- `title` (string): Modal title
- `content` (string): Modal content

**Features**:
- Backdrop click to close
- ESC key to close
- Focus management
- Scroll locking

### Tabs.astro
**Location**: `src/components/ui/Tabs.astro`
**Purpose**: Tabbed content component

**Props**:
- `tabs` (array): Tab configuration array
- `defaultTab` (string): Default active tab

**Features**:
- Tab switching
- Content loading
- Keyboard navigation
- Responsive design

## 📊 Data Display Components

### StatsCard.astro
**Location**: `src/components/ui/StatsCard.astro`
**Purpose**: Statistics display card

**Props**:
- `value` (string): Statistic value
- `label` (string): Statistic label
- `icon` (string): Icon name
- `trend` (object): Trend data

**Features**:
- Number formatting
- Icon display
- Trend indicators
- Responsive layout

### ProgressBar.astro
**Location**: `src/components/ui/ProgressBar.astro`
**Purpose**: Progress indicator component

**Props**:
- `value` (number): Progress value (0-100)
- `label` (string): Progress label
- `variant` (string): Style variant

**Features**:
- Animated progress
- Label display
- Color coding
- Accessibility support

## 🎯 Form Components

### Input.astro
**Location**: `src/components/ui/Input.astro`
**Purpose**: Form input component

**Props**:
- `type` (string): Input type
- `name` (string): Input name
- `label` (string): Input label
- `placeholder` (string): Placeholder text
- `required` (boolean): Required field

**Features**:
- Label association
- Error states
- Validation feedback
- Accessibility support

### Select.astro
**Location**: `src/components/ui/Select.astro`
**Purpose**: Dropdown select component

**Props**:
- `name` (string): Select name
- `label` (string): Select label
- `options` (array): Option array
- `placeholder` (string): Placeholder text

**Features**:
- Custom styling
- Search functionality
- Multi-select support
- Keyboard navigation

### Checkbox.astro
**Location**: `src/components/ui/Checkbox.astro`
**Purpose**: Checkbox input component

**Props**:
- `name` (string): Checkbox name
- `label` (string): Checkbox label
- `checked` (boolean): Default checked state

**Features**:
- Custom styling
- Label association
- Indeterminate state
- Accessibility support

## 🔍 Search Components

### SearchBar.astro
**Location**: `src/components/shared/SearchBar.astro`
**Purpose**: Search functionality component

**Props**:
- `placeholder` (string): Search placeholder
- `onSearch` (function): Search callback

**Features**:
- Real-time search
- Search suggestions
- Search history
- Keyboard shortcuts

### SearchResults.astro
**Location**: `src/components/shared/SearchResults.astro`
**Purpose**: Search results display

**Props**:
- `results` (array): Search results array
- `query` (string): Search query

**Features**:
- Result highlighting
- Pagination
- Filtering options
- Result categories

## 📱 Mobile Components

### MobileMenu.astro
**Location**: `src/components/layout/MobileMenu.astro`
**Purpose**: Mobile navigation menu

**Props**:
- `isOpen` (boolean): Menu open state
- `onClose` (function): Close callback

**Features**:
- Slide-in animation
- Backdrop overlay
- Touch gestures
- Focus management

### MobileFilter.astro
**Location**: `src/components/shared/MobileFilter.astro`
**Purpose**: Mobile filter interface

**Props**:
- `filters` (array): Filter options array
- `onApply` (function): Apply callback

**Features**:
- Bottom sheet design
- Multi-select filters
- Clear all option
- Apply/cancel actions

## 🔧 Utility Components

### LoadingSpinner.astro
**Location**: `src/components/ui/LoadingSpinner.astro`
**Purpose**: Loading indicator component

**Props**:
- `size` (string): Spinner size ('sm' | 'md' | 'lg')
- `color` (string): Spinner color

**Features**:
- Smooth animation
- Customizable size
- Color variants
- Accessibility support

### ErrorBoundary.astro
**Location**: `src/components/ui/ErrorBoundary.astro`
**Purpose**: Error handling wrapper

**Props**:
- `fallback` (component): Fallback component
- `onError` (function): Error callback

**Features**:
- Error catching
- Fallback UI
- Error reporting
- Recovery options

## 📋 Component Usage Guidelines

### When to Create New Components
- **Reusable patterns**: When a UI pattern appears in multiple places
- **Complex logic**: When a component has complex state management
- **Accessibility**: When a component needs specific accessibility features
- **Performance**: When a component needs optimization

### Component Naming Conventions
- **PascalCase**: All component files
- **Descriptive names**: Clear indication of purpose
- **Feature prefixes**: Group related components

### Component Documentation
- **Props interface**: Define all props with types
- **Usage examples**: Provide clear usage examples
- **Accessibility notes**: Document accessibility features
- **Performance notes**: Document performance considerations

### Component Testing
- **Props validation**: Test all prop combinations
- **Accessibility testing**: Ensure WCAG compliance
- **Responsive testing**: Test on multiple screen sizes
- **Performance testing**: Monitor bundle size impact

---

**Remember**: This component library serves as the foundation for consistent UI development. Always refer to this documentation when creating or modifying components. 