# Packs Content Structure

This directory contains individual pack data files in markdown format. Each pack will have its own detailed page.

## File Structure
```
src/content/packs/
├── mvp-launch-pack.md
├── ai-chatbot-pack.md
├── ai-knowledge-assistant-pack.md
├── workflow-automation-pack.md
├── 3d-visualization-pack.md
├── analytics-dashboard-pack.md
└── README.md
```

## Markdown Frontmatter Structure
Each pack file should follow this structure:

```yaml
---
id: "mvp-launch"
title: "MVP Launch Pack"
description: "Build your first product with clean UX, frontend, backend, and admin dashboard."
image: "/assets/blog/blog-01.jpg"
targetAudience: "Startup founders, POC teams, first-time product builders"
duration: "4–6 weeks"
price: "₹3.5–4 Lakhs"
hero:
  title: "MVP Launch Pack"
  subtitle: "From concept to live product in 4-6 weeks"
  description: "Launch your minimum viable product with a complete tech stack including frontend, backend, database, and admin dashboard."
  image: "/assets/hero/mvp-pack.jpg"
features:
  - title: "Complete Tech Stack"
    description: "Frontend, backend, database, and admin dashboard included"
    icon: "/assets/features/icon-01.svg"
  - title: "User Experience Design"
    description: "Clean, intuitive interfaces designed for your users"
    icon: "/assets/features/icon-02.svg"
  - title: "Scalable Architecture"
    description: "Built to grow with your business needs"
    icon: "/assets/features/icon-03.svg"
deliverables:
  - title: "Frontend Application"
    description: "Responsive web application with modern UI/UX"
  - title: "Backend API"
    description: "RESTful API with authentication and data management"
  - title: "Admin Dashboard"
    description: "Complete admin interface for managing your product"
  - title: "Database Setup"
    description: "Optimized database schema and data management"
process:
  title: "Our MVP Development Process"
  steps:
    - number: "01"
      title: "Requirements & Design"
      description: "Gather requirements and create wireframes"
    - number: "02"
      title: "Development"
      description: "Build frontend, backend, and database"
    - number: "03"
      title: "Testing & QA"
      description: "Comprehensive testing and bug fixes"
    - number: "04"
      title: "Deployment"
      description: "Production deployment and handover"
testimonials:
  - name: "Mike Chen"
    role: "Startup Founder"
    content: "The MVP Launch Pack got us to market in 5 weeks. The quality exceeded our expectations."
    image: "/assets/testimonials/mike.jpg"
faq:
  - question: "What's included in the MVP?"
    answer: "Complete frontend, backend, database, admin dashboard, and deployment setup."
  - question: "Can I customize the features?"
    answer: "Yes, we can modify the scope based on your specific requirements."
cta:
  title: "Launch Your MVP"
  description: "Ready to bring your idea to life? Let's start building your MVP today."
  buttonText: "Start Your MVP"
---
```

## Content Guidelines
1. Use clear, descriptive titles
2. Include relevant images and icons
3. Provide detailed feature descriptions
4. Add real testimonials when available
5. Include comprehensive FAQ sections
6. Use consistent formatting and structure 