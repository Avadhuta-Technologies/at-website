# Cursor Agent Context - AT Website Project

## 🚨 CRITICAL RULES (MUST FOLLOW)

### **Styling Rules**
- **NO GRADIENT BACKGROUNDS** - Use solid colors only
- Match home page styling patterns exactly
- Use Tailwind CSS for most styling, SCSS for complex components
- Follow the established color palette and spacing system

### **Component Structure (MANDATORY ORDER)**
```astro
---
// 1. Imports (Astro, React, Vue, etc.)
// 2. Props interface/type definitions
// 3. Data fetching (getStaticPaths, etc.)
// 4. Component logic
---

<!-- 5. HTML structure -->
<!-- 6. Tailwind classes -->
<!-- 7. Event handlers -->
<!-- 8. Accessibility attributes -->

<style>
  /* 9. SCSS styles (if needed) */
</style>
```

### **File Naming & Organization**
- Components: `PascalCase.astro` (e.g., `HeroSection.astro`)
- Content: `_sectionName.js` for data, `.md` for markdown
- Pages: `kebab-case.astro` (e.g., `explore-pods.astro`)
- Utilities: `camelCase.ts` (e.g., `podUtils.ts`)

### **Content Management**
- Home page: Use `/content/pod.js` for general content
- Pod details: Use `/content/pods/{pod_file}.md` for detailed information
- Keep content structure consistent across all sections

## 🎨 Design System

### Colors
- Primary: `#2563eb` (blue-600)
- Secondary: `#64748b` (slate-500)
- Accent: `#f59e0b` (amber-500)
- Success: `#10b981` (emerald-500)
- Error: `#ef4444` (red-500)

### Typography
- Font: Inter (variable font)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Scale: Follow Tailwind's text scale

### Spacing
- Use Tailwind's spacing scale (4px base)
- Common: `p-4`, `p-6`, `p-8`, `m-4`, `m-6`, `m-8`

## 📁 Project Structure
```
src/
├── components/     # Reusable components
├── content/        # Data and markdown files
├── layouts/        # Page layouts
├── pages/          # Route pages
├── styles/         # SCSS files
└── utils/          # Utility functions
```

## 🔧 Technology Stack
- **Framework**: Astro 5.12.0
- **Styling**: Tailwind CSS 3.3.3 + SCSS
- **Deployment**: Vercel
- **CMS**: HubSpot integration
- **Language**: TypeScript preferred

## ✅ Quality Checklist
Before submitting any changes:
- [ ] Follows component structure order
- [ ] Uses consistent naming conventions
- [ ] No gradient backgrounds
- [ ] Responsive design implemented
- [ ] Accessibility attributes added
- [ ] TypeScript types defined
- [ ] Error handling included
- [ ] Performance optimized

## 🚫 Forbidden Practices
- Don't use gradient backgrounds
- Don't create components without following the mandatory structure
- Don't use inline styles
- Don't skip TypeScript types
- Don't ignore accessibility requirements

## 📚 Reference Files
- `PROJECT_DOCUMENTATION.md` - Complete project overview
- `DEVELOPMENT_RULES.md` - Detailed development rules
- `STYLE_GUIDE.md` - Visual design system
- `COMPONENT_LIBRARY.md` - Component catalog
- `QUICK_REFERENCE.md` - Daily development guide

---
**Remember**: Consistency is key. Always refer to the full documentation files for complete guidelines. 