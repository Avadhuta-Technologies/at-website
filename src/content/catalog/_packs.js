// Single source of truth for all available packs
// This file contains all pack data used throughout the website
// Import this file whenever you need pack data for cart, checkout, or display

export const packsCatalog = {
  // Pack data for cart and checkout operations
  availablePacks: [
    // Launch & Go-to-Market Packs
    {
      id: "launch-pack",
      title: "Launch Pack",
      description: "Take your product live with confidence. Includes deployment, basic analytics, Play Store/App Store setup, and a launch checklist.",
      icon: "/assets/features/icon-01.svg",
      badge: "Popular",
      badgeColor: "green",
      duration: "2 weeks",
      priceINR: "₹1,00,000",
      priceUSD: "$1,500",
      basePrice: 100000, // For cart calculations
      basePriceUSD: 1500,
      category: "launch-gtm",
      deliverables: [
        "Brand Identity Kit - Logo, color palette, typography, and brand voice—all aligned to tell your story powerfully and consistently.",
        "Go-To-Market Website - Launch-ready website (built on Webflow, Next.js, or your preferred stack) that communicates your value proposition, showcases your offering, and is optimized for conversions.",
        "Pitch Deck + Sales Collateral - Investor-ready pitch deck, product one-pagers, and sales decks tailored to resonate with your audience.",
        "Product Teasers & Social Creatives - Launch graphics, animated teasers, email banners, and content templates to fuel your first wave of outreach.",
        "Launch Plan Blueprint - Channel-by-channel strategy for your launch across product platforms (Product Hunt, LinkedIn, X, etc.) with recommended timelines and messaging cues."
      ],
      idealFor: [
        "Founders building their first product",
        "Startups entering a competitive market",
        "Internal teams preparing to launch an MVP or new product line",
        "Agencies helping clients go live with a bang"
      ],
      addOns: [
        "Paid Ads Setup & Campaigns",
        "Explainer Video Production",
        "Early Access Landing Page with Waitlist",
        "App Store / Play Store Listing Assets"
      ],
      whyItWorks: "Most products fail not because of the idea—but because of poor launch execution. We bring together strategy, design, and messaging to make your product launch sharp, loud, and memorable.",
      testimonials: [
        {
          quote: "The Launch Pack was exactly what we needed to go from idea to impact. The assets were polished and the GTM support gave us serious momentum.",
          author: "Meera S.",
          role: "Founder @ Loopwise"
        },
        {
          quote: "I had a product. NovaPod gave it a presence. We launched on Product Hunt and got 500+ signups in week one.",
          author: "Aryan T.",
          role: "Indie Hacker"
        }
      ],
      cta: {
        title: "Ready to Launch?",
        subtitle: "Your audience is waiting. Let's make sure your first impression sticks.",
        primaryButton: "Buy Launch Pack Now",
        secondaryButton: "Talk to Our Team"
      },
      type: "pack"
    },
    {
      id: "web-presence-pack",
      title: "Web Presence Pack",
      description: "Create a sleek, responsive website to showcase your product. Landing page or multi-section site, basic CMS, mobile-first design, SEO ready.",
      icon: "/assets/features/icon-02.svg",
      badge: "Fast",
      badgeColor: "blue",
      duration: "1.5 weeks",
      priceINR: "₹45,000",
      priceUSD: "$550",
      basePrice: 45000,
      basePriceUSD: 550,
      category: "launch-gtm",
      deliverables: [
        "Custom Business Website - A beautifully crafted, responsive website built on Webflow, Next.js, or WordPress—tailored to your goals, optimized for performance, and easy to manage.",
        "Conversion-Focused Copywriting - Clear, compelling content that speaks your audience's language and turns visitors into leads, customers, or subscribers.",
        "SEO Foundation Setup - Technical SEO, on-page optimization, metadata, and structured content blocks to help your site rank and get discovered.",
        "Essential Integrations - Contact forms, chatbots, email capture, calendly booking, analytics, and more—set up to make your site work harder for your business.",
        "CMS & Handover Guide - Editable content sections with a walkthrough video or guide so your team can update content without tech help."
      ],
      idealFor: [
        "Startups without a digital presence yet",
        "Agencies and creators needing a high-quality site fast",
        "Small businesses looking to level up their online credibility",
        "Founders rebranding or launching new services"
      ],
      addOns: [
        "Blog Setup + Writing Templates",
        "Language Localization",
        "Newsletter Integration & Automation",
        "Advanced SEO Audit & Strategy",
        "Hosting & Maintenance Support"
      ],
      whyItWorks: "In today's world, your website is your brand. This pack helps you move from 'just a link' to a fully-functional, high-converting web presence—built to impress and perform.",
      testimonials: [
        {
          quote: "We went from zero to a premium-looking website in 10 days. Clients now take us seriously before the first meeting.",
          author: "Ravi V.",
          role: "Consultant"
        },
        {
          quote: "This wasn't just a website build—it was a full experience that gave us clarity on our messaging and confidence in our brand.",
          author: "Anika M.",
          role: "Creative Studio Lead"
        }
      ],
      cta: {
        title: "Build a Presence That Works While You Sleep",
        subtitle: "Your website should be your hardest working employee. Let's make that happen.",
        primaryButton: "Buy Web Presence Pack Now",
        secondaryButton: "Schedule a Free Consultation"
      },
      type: "pack"
    },
    {
      id: "brand-starter-pack",
      title: "Brand Starter Pack",
      description: "Build a professional identity for your product or startup. Logo, color palette, typography, pitch deck template, and social banners.",
      icon: "/assets/features/icon-03.svg",
      badge: "Essential",
      badgeColor: "purple",
      duration: "1 week",
      priceINR: "₹30,000",
      priceUSD: "$350",
      basePrice: 30000,
      basePriceUSD: 350,
      category: "launch-gtm",
      deliverables: [
        "Logo Design - A custom logo (primary, secondary, and icon versions) that reflects your brand's personality and is ready for all mediums—digital, print, and social.",
        "Brand Color Palette - Curated primary and secondary color schemes with usage guidelines to ensure visual consistency everywhere.",
        "Typography System - Selected fonts and hierarchy rules that match your tone—clean, professional, bold, or playful.",
        "Brand Voice & Messaging Guide - Tagline, elevator pitch, tone of voice, and example messaging to help you speak with confidence across platforms.",
        "Brand Assets Kit - Favicon, social media display icons, branded backgrounds, and editable templates—all delivered in ready-to-use formats."
      ],
      idealFor: [
        "Founders starting from scratch",
        "Early-stage startups in need of a professional identity",
        "Creators and solopreneurs launching a personal brand",
        "MVP teams preparing to pitch, present, or publish"
      ],
      addOns: [
        "Business Card & Stationery Design",
        "Intro Animation or Logo Reveal",
        "Extended Brand Guidelines Document",
        "Product Packaging Basics",
        "Branded Pitch Deck Template"
      ],
      whyItWorks: "Your brand is more than a logo—it's the first feeling people get when they meet your product. We help you define it clearly, design it beautifully, and deliver it consistently.",
      testimonials: [
        {
          quote: "Before the Brand Starter Pack, we had a name and a dream. After it, we had a visual identity we were proud to show investors.",
          author: "Shruti D.",
          role: "SaaS Founder"
        },
        {
          quote: "The branding nailed our vibe and gave us a solid foundation. Every touchpoint now feels cohesive and premium.",
          author: "Rahul T.",
          role: "Creator & Podcaster"
        }
      ],
      cta: {
        title: "Ready to Become Unforgettable?",
        subtitle: "Let's give your idea a face, a voice, and a vibe your audience can remember.",
        primaryButton: "Buy Brand Starter Pack Now",
        secondaryButton: "Talk to a Branding Expert"
      },
      type: "pack"
    },
    // Growth & Optimization Packs
    {
      id: "growth-pack",
      title: "Growth Pack",
      description: "Add power features that drive scale. CRM integrations, user onboarding flows, loyalty/referral systems, performance enhancements.",
      icon: "/assets/features/icon-04.svg",
      badge: "Growth",
      badgeColor: "orange",
      duration: "3 weeks",
      priceINR: "₹1,50,000",
      priceUSD: "$2,200",
      basePrice: 150000,
      basePriceUSD: 2200,
      category: "growth-optimization",
      deliverables: [
        "Website Optimization Audit - Detailed review of your website's UX, SEO, speed, and conversion flows—with prioritized action items to boost performance.",
        "Lead Generation Setup - Capture leads through smart forms, popups, landing pages, and integrations with CRM or email tools like HubSpot, Mailchimp, or ConvertKit.",
        "Analytics & Funnel Tracking - Google Analytics, Tag Manager, and event-based tracking setup to help you understand user behavior and funnel performance.",
        "Content Strategy Kickstart - A content plan tailored to your audience—including blog topics, SEO keywords, and distribution channels to drive organic growth.",
        "Growth Stack Configuration - Set up of tools like Hotjar, Intercom, Drift, or Crisp for deeper engagement, feedback loops, and automated lead nurturing."
      ],
      idealFor: [
        "Startups looking to accelerate growth post-launch",
        "Founders wanting to improve user acquisition & conversion",
        "Small businesses aiming to turn traffic into qualified leads",
        "Teams unsure how to build or scale a growth engine"
      ],
      addOns: [
        "Advanced A/B Testing Setup",
        "Email Marketing Automation",
        "Social Media Growth Strategy",
        "Influencer Partnership Framework",
        "Customer Success Process Design"
      ],
      whyItWorks: "Growth isn't just about getting more traffic—it's about getting the right traffic and converting it efficiently. This pack gives you the tools, processes, and insights to scale sustainably.",
      testimonials: [
        {
          quote: "The Growth Pack turned our website from a brochure into a lead generation machine. Our conversion rate went up 40% in the first month.",
          author: "Priya K.",
          role: "B2B SaaS Founder"
        },
        {
          quote: "We had traffic but no leads. This pack showed us exactly where we were losing people and how to fix it.",
          author: "Vikram S.",
          role: "E-commerce Owner"
        }
      ],
      cta: {
        title: "Ready to Scale Your Growth?",
        subtitle: "Stop guessing what works. Let's build a growth engine that delivers predictable results.",
        primaryButton: "Buy Growth Pack Now",
        secondaryButton: "Get a Growth Audit"
      },
      type: "pack"
    },
    {
      id: "integration-pack",
      title: "Integration Pack",
      description: "Connect your product with essential business tools. API development, webhook setup, data synchronization, and custom integrations.",
      icon: "/assets/features/icon-05.svg",
      badge: "Integration",
      badgeColor: "indigo",
      duration: "2-3 weeks",
      priceINR: "₹80,000",
      priceUSD: "$1,200",
      basePrice: 80000,
      basePriceUSD: 1200,
      category: "growth-optimization",
      deliverables: [
        "API Development & Documentation - Custom APIs for your product with comprehensive documentation for easy integration.",
        "Third-Party Integrations - Connect with popular tools like Zapier, Slack, Google Workspace, Microsoft 365, and more.",
        "Data Synchronization - Real-time data sync between your product and external systems with error handling and retry logic.",
        "Webhook Implementation - Event-driven integrations that trigger actions across multiple platforms automatically.",
        "Integration Testing & Monitoring - Comprehensive testing suite and monitoring dashboard to ensure reliable connections."
      ],
      idealFor: [
        "Products needing to connect with existing business tools",
        "Startups looking to expand their ecosystem",
        "Teams wanting to automate data flow between systems",
        "Companies preparing for enterprise sales"
      ],
      addOns: [
        "Custom API Rate Limiting",
        "Advanced Security & Authentication",
        "Real-time Dashboard for Integrations",
        "Enterprise SSO Integration",
        "Custom Webhook Development"
      ],
      whyItWorks: "Modern businesses run on integrations. This pack ensures your product fits seamlessly into your customers' existing workflows and tech stack.",
      testimonials: [
        {
          quote: "The Integration Pack made our product enterprise-ready overnight. We closed our first enterprise deal within a month.",
          author: "Arjun M.",
          role: "SaaS CTO"
        },
        {
          quote: "Our customers love how easily our product connects with their existing tools. It's become a major selling point.",
          author: "Neha R.",
          role: "Product Manager"
        }
      ],
      cta: {
        title: "Ready to Connect Everything?",
        subtitle: "Let's make your product the center of your customers' workflow.",
        primaryButton: "Buy Integration Pack Now",
        secondaryButton: "Discuss Custom Integrations"
      },
      type: "pack"
    }
  ],

  // Utility functions for working with pack data
  getPackById: (id) => {
    return packsCatalog.availablePacks.find(pack => pack.id === id) || null;
  },

  getPacksByCategory: (category) => {
    return packsCatalog.availablePacks.filter(pack => pack.category === category);
  },

  getPopularPacks: () => {
    return packsCatalog.availablePacks.filter(pack => pack.badge === "Popular");
  },

  // Cart-specific data transformation
  getPackForCart: (packId) => {
    const pack = packsCatalog.getPackById(packId);
    if (!pack) return null;

    return {
      id: pack.id,
      type: "pack",
      title: pack.title,
      description: pack.description,
      price: pack.priceINR,
      priceUSD: pack.priceUSD,
      basePrice: pack.basePrice,
      basePriceUSD: pack.basePriceUSD,
      duration: pack.duration,
      icon: pack.icon,
      badge: pack.badge,
      badgeColor: pack.badgeColor
    };
  }
};

export default packsCatalog; 