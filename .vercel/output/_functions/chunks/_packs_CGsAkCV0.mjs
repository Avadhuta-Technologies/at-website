import { a as generatePackSlug } from './slugUtils_BV93oP6N.mjs';

// Single source of truth for all available packs
// This file contains all pack data used throughout the website
// Import this file whenever you need pack data for cart, checkout, or display


const packsCatalog = {
  // Pack data organized by categories
  packCategories: [
    {
      id: "launch-gtm",
      title: "Launch & Go-to-Market Packs",
      description: "Get your product to market with confidence",
      packs: [
        {
          id: "launch-pack",
          title: "Launch Pack",
          description: "Take your product live with confidence. Includes deployment, basic analytics, Play Store/App Store setup, and a launch checklist.",
          icon: "🚀",
          badge: "Popular",
          badgeColor: "green",
          duration: "2 weeks",
          basePriceINR: 75000,
          basePriceUSD: 900,
          discountPercentage: 0,
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
          icon: "🌐",
          badge: "Fast",
          badgeColor: "blue",
          duration: "1.5 weeks",
          basePriceINR: 45000,
          basePriceUSD: 550,
          discountPercentage: 0,
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
          icon: "🎨",
          badge: "Essential",
          badgeColor: "purple",
          duration: "1 week",
          basePriceINR: 30000,
          basePriceUSD: 350,
          discountPercentage: 0,
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
        }
      ]
    },
    {
      id: "growth-optimization",
      title: "Growth & Optimization Packs",
      description: "Scale your product with data-driven strategies",
      packs: [
        {
          id: "growth-pack",
          title: "Growth Pack",
          description: "Add power features that drive scale. CRM integrations, user onboarding flows, loyalty/referral systems, performance enhancements.",
          icon: "📈",
          badge: "Growth",
          badgeColor: "orange",
          duration: "3 weeks",
          basePriceINR: 95000,
          basePriceUSD: 1100,
          discountPercentage: 0,
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
            "Paid Ads Campaign Setup (Google/Meta/X)",
            "Email Drip Campaigns & Automations",
            "Influencer/Creator Collab Plan",
            "Advanced A/B Testing Framework",
            "SEO-Focused Content Writing (Blogs & Landing Pages)"
          ],
          whyItWorks: "Growth isn't luck—it's system design. We bring the right tech, tactics, and tracking into one streamlined setup, so you can experiment, learn, and scale faster.",
          testimonials: [
            {
              quote: "We had a great product but struggled with visibility. The Growth Pack gave us a playbook, a funnel, and real traction.",
              author: "Zoya M.",
              role: "B2B SaaS Founder"
            },
            {
              quote: "What I loved was how data-backed everything was. We finally understood what was working—and doubled down on it.",
              author: "Kunal R.",
              role: "DTC Brand Owner"
            }
          ],
          cta: {
            title: "Ready to Grow With Intent?",
            subtitle: "Don't leave growth to chance. Build your engine and let your product scale smarter.",
            primaryButton: "Buy Growth Pack Now",
            secondaryButton: "Book a Growth Consultation"
          },
          type: "pack"
        },
        {
          id: "ux-audit-revamp-pack",
          title: "UX Audit & Revamp Pack",
          description: "Improve usability and engagement. UI/UX analysis, wireframes, redesign of 3–5 key screens, UX recommendations.",
          icon: "🎯",
          badge: "UX",
          badgeColor: "teal",
          duration: "2.5 weeks",
          basePriceINR: 70000,
          basePriceUSD: 825,
          discountPercentage: 0,
          category: "growth-optimization",
          deliverables: [
            "Heuristic UX Audit - Expert review of your product's user experience across devices, benchmarked against usability best practices and modern UI standards.",
            "Session Replay & Feedback Analysis - Review of user behavior via Hotjar/Clarity sessions and survey feedback to identify pain points, drop-offs, and dead zones.",
            "UX Issues Report + Action Plan - Visual report with key UX issues, severity scores, and a prioritized roadmap for improvement—backed by research and insights.",
            "UI/UX Redesign of Core Screens - Redesign of 3–5 core screens with improved layouts, navigation flows, and visual hierarchy—delivered via Figma.",
            "Dev-Ready Handoff - Design files, style guides, and annotations, all neatly packaged for seamless implementation by your development team."
          ],
          idealFor: [
            "SaaS founders noticing user drop-offs or poor engagement",
            "Product teams planning a UI refresh or redesign",
            "MVP-stage startups needing UX polish before scaling",
            "Apps with usability issues impacting growth"
          ],
          addOns: [
            "Full App Redesign",
            "Mobile UX Optimization",
            "UX Writing & Microcopy Overhaul",
            "Accessibility (A11Y) Review",
            "Prototyping & User Testing Sessions"
          ],
          whyItWorks: "Great UX isn't just pretty screens—it's clarity, speed, and satisfaction. We combine behavioral insights with intuitive design to make your product smooth, sticky, and scalable.",
          testimonials: [
            {
              quote: "We thought our product was 'good enough' until we saw the UX audit. The revamp led to a 2x jump in trial-to-paid conversions.",
              author: "Pranav S.",
              role: "Founder @ TaskFlow"
            },
            {
              quote: "This was way more than just a redesign. It was a transformation of how users felt using our product.",
              author: "Neha K.",
              role: "Head of Product @ Finlytics"
            }
          ],
          cta: {
            title: "Ready to Upgrade the Experience?",
            subtitle: "Let's turn clunky journeys into smooth experiences your users love—and stay for.",
            primaryButton: "Buy UX Audit & Revamp Pack Now",
            secondaryButton: "Schedule a UX Review Call"
          },
          type: "pack"
        },
        {
          id: "conversion-boost-pack",
          title: "Conversion Boost Pack",
          description: "Turn more visitors into users. Setup A/B tests, funnel tracking, CTA optimizations, analytics deep dive.",
          icon: "⚡",
          badge: "Conversion",
          badgeColor: "pink",
          duration: "2 weeks",
          basePriceINR: 65000,
          basePriceUSD: 775,
          discountPercentage: 0,
          category: "growth-optimization",
          deliverables: [
            "Conversion Funnel Analysis - Deep dive into your user journey to identify drop-off points and optimization opportunities.",
            "A/B Testing Framework Setup - Implement testing tools and create hypothesis-driven experiments for key conversion points.",
            "CTA & Landing Page Optimization - Redesign critical conversion elements with data-backed improvements.",
            "Analytics & Tracking Implementation - Set up comprehensive tracking to measure conversion performance across all touchpoints.",
            "Conversion Rate Optimization Report - Detailed analysis with actionable recommendations and implementation roadmap."
          ],
          idealFor: [
            "Startups with traffic but low conversion rates",
            "E-commerce businesses looking to boost sales",
            "SaaS companies wanting to improve trial-to-paid conversion",
            "Marketing teams needing data-driven optimization"
          ],
          addOns: [
            "Advanced Funnel Analysis",
            "Personalization Engine Setup",
            "Exit Intent Optimization",
            "Mobile Conversion Optimization",
            "Customer Journey Mapping"
          ],
          whyItWorks: "Conversion optimization is science, not guesswork. We use data, psychology, and systematic testing to turn your traffic into customers.",
          testimonials: [
            {
              quote: "Our conversion rate jumped 40% in the first month. The data-driven approach made all the difference.",
              author: "Arjun M.",
              role: "E-commerce Founder"
            },
            {
              quote: "Finally, we understand why visitors weren't converting. The optimization roadmap is crystal clear.",
              author: "Priya K.",
              role: "Marketing Director"
            }
          ],
          cta: {
            title: "Ready to Boost Conversions?",
            subtitle: "Turn your traffic into customers with data-driven optimization.",
            primaryButton: "Buy Conversion Boost Pack Now",
            secondaryButton: "Get a Conversion Audit"
          },
          type: "pack"
        }
      ]
    },
    {
      id: "automation-efficiency",
      title: "Automation & Efficiency Packs",
      description: "Streamline operations and scale efficiently",
      packs: [
        {
          id: "ops-automation-pack",
          title: "Ops Automation Pack",
          description: "Automate manual workflows across teams. Zapier/Make automations, Google Sheets workflows, Slack bots, notification systems.",
          icon: "⚙️",
          badge: "Automation",
          badgeColor: "indigo",
          duration: "3 weeks",
          basePriceINR: 85000,
          basePriceUSD: 1000,
            discountPercentage: 0,
          category: "automation-efficiency",
          deliverables: [
            "Process Mapping & Audit - We start by understanding your current workflows—manual tasks, handoffs, bottlenecks—and identify where automation makes the most impact.",
            "Workflow Design & Tool Recommendation - Visual blueprints of improved workflows, plus expert suggestions on the best tools (Zapier, n8n, Make, Retool, Airtable, etc.) based on your stack and scale.",
            "Automation Buildout (3–5 Workflows) - End-to-end implementation of critical automations—be it lead routing, CRM updates, Slack alerts, invoice triggers, or onboarding flows.",
            "Dashboard & Logs Setup - Centralized dashboards to monitor automation status, success rates, and logs—ensuring reliability and transparency.",
            "Handoff Guide & Training - Clear documentation + a live walkthrough so your team can operate, extend, and maintain the automations independently."
          ],
          idealFor: [
            "Startups overwhelmed with repetitive manual tasks",
            "Teams juggling multiple tools without clear sync",
            "Founders spending too much time on backend processes",
            "Agencies looking to streamline operations for scale"
          ],
          addOns: [
            "AI-powered Task Automation (via GPT, Claude, etc.)",
            "HR & Candidate Flow Automation",
            "Invoicing, Payments & Accounting Integrations",
            "Custom App UI for Manual Overrides",
            "Multi-step Approvals & Role-Based Logic"
          ],
          whyItWorks: "Ops shouldn't slow you down. We build lean, no-code/low-code automations that silently run in the background—saving hours, reducing errors, and scaling with you.",
          testimonials: [
            {
              quote: "We saved 20+ hours/week with the Ops Automation Pack. Everything from lead intake to CRM syncing is now hands-free.",
              author: "Rajeev M.",
              role: "B2B Services Founder"
            },
            {
              quote: "This gave us the systems of a much bigger company—without hiring more people.",
              author: "Leena A.",
              role: "Ops Head @ SaaS Startup"
            }
          ],
          cta: {
            title: "Ready to Streamline & Scale?",
            subtitle: "Start spending less time on operations—and more time growing your business.",
            primaryButton: "Buy Ops Automation Pack Now",
            secondaryButton: "Talk to Our Automation Experts"
          },
          type: "pack"
        },
        {
          id: "integration-pack",
          title: "Integration Pack",
          description: "Connect your product with the tools you already use. APIs, payment gateways, CRMs, ERPs, marketing tools — done seamlessly.",
          icon: "🔌",
          badge: "Integration",
          badgeColor: "cyan",
          duration: "3–4 weeks",
          basePriceINR: 110000,
          basePriceUSD: 1300,
          discountPercentage: 0,
          category: "automation-efficiency",
          deliverables: [
            "Integration Requirements Mapping - We work with you to identify all the tools, platforms, and data flows that need to connect—CRMs, ERPs, payment gateways, analytics, internal apps, and more.",
            "API & Platform Compatibility Audit - Deep-dive into each platform's APIs, limits, auth methods, and webhooks to ensure compatibility and stability.",
            "Custom Integration Development (or via Tools) - Whether it's direct API integration, middleware setup (Zapier, n8n, Make), or webhook orchestration—we build and test it end-to-end.",
            "Error Handling & Retry Logic - We don't just integrate—we build it to withstand edge cases, retries, and failures, ensuring consistency and uptime.",
            "Monitoring, Logs & Handoff - Real-time logs, dashboards, and clear documentation so your team can monitor, troubleshoot, and scale with confidence."
          ],
          idealFor: [
            "Startups with growing tool stacks and disconnected data",
            "Teams building internal platforms that need to sync with third-party tools",
            "Agencies needing backend glue for multi-tool workflows",
            "Founders launching new products with external dependencies"
          ],
          addOns: [
            "OAuth2 / API Key Authentication Handling",
            "Embedded Integration for SaaS Platforms",
            "Stripe, Razorpay, or Payment Gateway Integration",
            "Slack / Discord / Email Notification Setup",
            "ERP / CRM Sync (Zoho, Salesforce, HubSpot, etc.)"
          ],
          whyItWorks: "Your tools are only as powerful as your connections. We help you build a tightly integrated system that feels like one product, not a patchwork of apps.",
          testimonials: [
            {
              quote: "Before this, we had 6 tools that never talked to each other. Now, everything flows smoothly—and our ops team is thrilled.",
              author: "Siddharth J.",
              role: "Founder @ EduStack"
            },
            {
              quote: "They handled tricky APIs like a breeze. Our custom CRM now talks perfectly with our analytics, payment, and onboarding stacks.",
              author: "Ananya R.",
              role: "Product Manager"
            }
          ],
          cta: {
            title: "Ready to Make Your Tools Work Together?",
            subtitle: "No more manual syncs or missed updates. Let's get your systems talking.",
            primaryButton: "Buy Integration Pack Now",
            secondaryButton: "Schedule a Tech Consultation"
          },
          type: "pack"
        },
        {
          id: "ai-assistant-pack",
          title: "AI Assistant Pack",
          description: "Add an intelligent assistant to your product or workflow. LLM-powered chatbots, smart form fillers, summarizers, or interactive helpers.",
          icon: "🤖",
          badge: "AI",
          badgeColor: "violet",
          duration: "4 weeks",
          basePriceINR: 125000,
          basePriceUSD: 1500,
          discountPercentage: 0,
          category: "automation-efficiency",
          deliverables: [
            "Use-Case Definition & Persona Design - We help you define what your AI assistant should do—support, onboarding, lead qualification, FAQs, or internal automation—along with tone, voice, and boundaries.",
            "LLM Integration & Prompt Engineering - Powered by OpenAI, Claude, or Mistral—we design, test, and optimize prompts tailored to your use-case, ensuring accurate, on-brand conversations.",
            "Frontend Widget or In-App Chat UI - Custom AI chat widget for your website, app, or internal dashboard—mobile-responsive, brand-aligned, and easy to integrate.",
            "Knowledge Base Connection - Connect the assistant to your documents, help articles, PDFs, URLs, or databases—so it responds with context and real-time knowledge.",
            "Analytics + Feedback Loop - Track usage, top queries, fallback rates, and continuously improve assistant performance with a built-in feedback mechanism."
          ],
          idealFor: [
            "Startups adding AI chat to their websites or products",
            "Founders building custom GPTs for onboarding, hiring, or internal ops",
            "Support teams looking to deflect tickets with smart responses",
            "Product teams wanting to explore AI co-pilots inside apps"
          ],
          addOns: [
            "Voice + Avatar Interface (for interviews or verbal UX)",
            "Multilingual Support",
            "Retrieval-Augmented Generation (RAG) System",
            "CRM/DB/API Integration for dynamic responses",
            "Admin Portal to Monitor Conversations"
          ],
          whyItWorks: "Your AI assistant isn't just a chatbot—it's an extension of your brand and team. We craft assistants that are helpful, intelligent, and most importantly—useful from day one.",
          testimonials: [
            {
              quote: "We deployed our AI assistant in 7 days. It now handles 70% of our queries and books 20+ qualified demos/month.",
              author: "Krish R.",
              role: "B2B SaaS Founder"
            },
            {
              quote: "This wasn't just a 'chatbot'—it's a trained rep that knows our offering better than some humans.",
              author: "Tanya S.",
              role: "Ops Lead @ HealthTech Startup"
            }
          ],
          cta: {
            title: "Ready to Launch Your AI Assistant?",
            subtitle: "Turn conversations into conversions. Build once, scale infinitely.",
            primaryButton: "Buy AI Assistant Pack Now",
            secondaryButton: "Talk to an AI Strategist"
          },
          type: "pack"
        }
      ]
    },
    {
      id: "specialized",
      title: "Specialized Packs",
      description: "Specialized solutions for specific business needs",
      packs: [
        {
          id: "compliance-pack",
          title: "Compliance Pack",
          description: "Meet privacy and policy requirements fast. Includes cookie consent, privacy policy setup, GDPR checklist, accessibility essentials.",
          icon: "🔐",
          badge: "Compliance",
          badgeColor: "emerald",
          duration: "1.5 weeks",
          basePriceINR: 35000,
          basePriceUSD: 425,
            discountPercentage: 0,
          category: "specialized",
          deliverables: [
            "Compliance Needs Assessment - We analyze your business model, industry, geography, and data flows to determine which standards (GDPR, SOC 2, ISO 27001, HIPAA, etc.) apply to you.",
            "Policy & Documentation Kit - Custom-drafted policies tailored to your operations: Privacy Policy, Terms of Use, Data Retention Policy, Cookie Policy, Security Practices Page.",
            "Consent & Cookie Banner Setup - Fully compliant and user-friendly consent management for cookies and data tracking (via platforms like Cookiebot, Osano, or custom setups).",
            "Data Flow & Access Control Mapping - Blueprints and flowcharts showing how data moves through your system, who accesses it, and how it's secured.",
            "Audit Readiness Checklist - A checklist and documentation bundle to get you ready for investor reviews, due diligence, or formal certifications down the line."
          ],
          idealFor: [
            "SaaS startups handling user or customer data",
            "Founders looking to build investor trust",
            "Companies preparing for enterprise sales or international markets",
            "Early teams needing baseline compliance for launch"
          ],
          addOns: [
            "DPA (Data Processing Agreement) Templates",
            "Third-Party Risk Assessment",
            "SOC 2 or ISO 27001 Advisory",
            "HIPAA Compliance Setup",
            "Internal Security Policy Design"
          ],
          whyItWorks: "Compliance builds credibility. We help you navigate the regulatory landscape with clarity—so you can scale faster, close bigger deals, and earn user trust.",
          testimonials: [
            {
              quote: "The Compliance Pack helped us close our first enterprise client. Everything from privacy docs to cookie banners was handled in days.",
              author: "Rohit M.",
              role: "Co-founder @ FinTech Startup"
            },
            {
              quote: "It's like having a privacy expert on your team—without the retainer.",
              author: "Divya N.",
              role: "HealthTech Product Lead"
            }
          ],
          cta: {
            title: "Stay Legit. Stay Trusted.",
            subtitle: "Don't wait for a legal scare or lost deal. Get your compliance foundation in place—fast.",
            primaryButton: "Buy Compliance Pack Now",
            secondaryButton: "Schedule a Compliance Readiness Call"
          },
          type: "pack"
        },
        {
          id: "hiring-enablement-pack",
          title: "Hiring Enablement Pack",
          description: "Make hiring seamless with QualifyMe integration. Career page, candidate pipeline, assessment setup, and job widget embed.",
          icon: "👥",
          badge: "Hiring",
          badgeColor: "amber",
          duration: "2 weeks",
          basePriceINR: 60000,
          basePriceUSD: 725,
          discountPercentage: 0,
          category: "specialized",
          deliverables: [
            "Careers Page Design & Development - A compelling, branded careers page that highlights your culture, perks, and open roles—designed to attract the right kind of candidates.",
            "Job Description Templates - Role-specific, bias-free JD templates for tech, design, product, marketing, and ops—optimized for clarity, reach, and conversion.",
            "Application & Shortlisting Workflow - Setup of streamlined candidate intake workflows using platforms like Typeform, Notion, Airtable, or a custom ATS.",
            "Assessment & Interview Kit - Role-based assessments (MCQ, coding, case studies), structured interview templates, and evaluation scorecards—aligned to your hiring goals.",
            "Offer Letter & Onboarding Templates - Legally sound offer letters, NDA templates, and a plug-and-play onboarding checklist to get new hires productive from day one."
          ],
          idealFor: [
            "Startups scaling fast and hiring across roles",
            "Founders tired of unstructured hiring",
            "HR teams building a repeatable, professional hiring experience",
            "Agencies setting up recruitment-ready digital presence for clients"
          ],
          addOns: [
            "Integration with QualifyMe or other hiring platforms",
            "Referral Program Design",
            "Automated Candidate Email Sequences",
            "Slack/Notion/ATS Integrations",
            "Branded Onboarding Microsite"
          ],
          whyItWorks: "Hiring isn't just about filling roles—it's about building a team you're proud of. We give you the tools, templates, and structure to hire smarter, faster, and more confidently.",
          testimonials: [
            {
              quote: "This made our hiring 10x more professional. Candidates now get a consistent, branded experience—and our team has a playbook to follow.",
              author: "Alok S.",
              role: "Co-founder @ SaaS Startup"
            },
            {
              quote: "From JD to onboarding, it was all done in one sprint. Huge time-saver and helped us close better talent.",
              author: "Priya M.",
              role: "Head of People @ GrowthTech"
            }
          ],
          cta: {
            title: "Ready to Uplevel Your Hiring?",
            subtitle: "Build your dream team with less chaos and more clarity.",
            primaryButton: "Buy Hiring Enablement Pack Now",
            secondaryButton: "Book a Hiring Systems Call"
          },
          type: "pack"
        },
        {
          id: "data-insights-pack",
          title: "Data Insights Pack",
          description: "Turn raw data into usable business intelligence. Custom dashboards, data pipelines, visual reports, and actionable insights.",
          icon: "📊",
          badge: "Analytics",
          badgeColor: "rose",
          duration: "3 weeks",
          basePriceINR: 90000,
          basePriceUSD: 1050,
          discountPercentage: 0,
          category: "specialized",
          deliverables: [
            "Data Audit & Metrics Definition - We start by understanding your business goals and data sources. Then we define the right KPIs and success metrics tailored to your growth stage.",
            "Data Source Integration - Seamless integration with your tools—CRMs, databases, product analytics, spreadsheets, or APIs (Stripe, HubSpot, GA4, Mixpanel, Postgres, etc.).",
            "Interactive Dashboards - Custom dashboards built using tools like Google Looker Studio, Power BI, Tableau, or Retool—designed to highlight trends, outliers, and actionable metrics.",
            "Automated Reports & Alerts - Scheduled email reports and real-time alerts for spikes, drops, or milestone triggers—so you're never in the dark.",
            "Insights Summary & Recommendations - We don't just give you charts—we analyze them. You'll receive a monthly or one-time insights brief with what's working, what's not, and where to act."
          ],
          idealFor: [
            "Founders wanting visibility into their growth levers",
            "Ops teams spending too much time in spreadsheets",
            "Product teams looking to track feature usage and behavior",
            "Sales and marketing leaders needing funnel and campaign visibility"
          ],
          addOns: [
            "Predictive Analytics (using ML models)",
            "Cohort & Retention Analysis",
            "Embedded Dashboards in SaaS Products",
            "SQL Query Bank for Internal Teams",
            "Data Warehouse Setup (BigQuery, Snowflake, etc.)"
          ],
          whyItWorks: "Most teams collect data—but few use it effectively. We bridge the gap between data and decisions by giving you tools you'll actually use, and insights you'll actually act on.",
          testimonials: [
            {
              quote: "Before this, we were flying blind. Now we get weekly snapshots of every critical metric—with clear takeaways. Game-changer.",
              author: "Akshay G.",
              role: "CEO @ Finlytics"
            },
            {
              quote: "The dashboards are so clean and intuitive. Our investors loved them, and our team makes faster decisions now.",
              author: "Neelima S.",
              role: "Product Lead"
            }
          ],
          cta: {
            title: "Ready to Turn Data Into Decisions?",
            subtitle: "Stop guessing. Start knowing with actionable insights.",
            primaryButton: "Buy Data Insights Pack Now",
            secondaryButton: "Schedule a Data Consultation"
          },
          type: "pack"
        }
      ]
    }
  ],

  // Get all packs flattened (for backward compatibility)
  get availablePacks() {
    return this.packCategories.flatMap(category => category.packs);
  },

  // Utility functions for working with pack data
  getPackById: (id) => {
    return packsCatalog.availablePacks.find(pack => pack.id === id) || null;
  },

  getPackBySlug: (slug) => {
    return packsCatalog.availablePacks.find(pack => {
      const packSlug = generatePackSlug(pack.title);
      return packSlug === slug;
    }) || null;
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
      basePriceINR: pack.basePriceINR,
      basePriceUSD: pack.basePriceUSD,
      discountPercentage: pack.discountPercentage || 0,
      duration: pack.duration,
      icon: pack.icon,
      badge: pack.badge,
      badgeColor: pack.badgeColor
    };
  },

  // Get recommended packs for a specific pod
  getRecommendedPacksForPod: (podId) => {
    // Define pod-to-pack recommendations based on pod types
    const recommendations = {
      "ecommerce-engine": ["launch-pack", "web-presence-pack", "brand-starter-pack", "growth-pack"],
      "ar-vr-experience": ["launch-pack", "brand-starter-pack", "web-presence-pack"],
      "ai-product-studio": ["launch-pack", "growth-pack", "data-insights-pack"],
      "product-launch": ["launch-pack", "web-presence-pack", "brand-starter-pack"],
      "admin-workflow-automation": ["growth-pack", "data-insights-pack", "compliance-pack"],
      "ai-ml-integration": ["data-insights-pack", "growth-pack", "compliance-pack"],
      "mobile-first-saas": ["launch-pack", "growth-pack", "web-presence-pack"],
      "devops-infra-automation": ["growth-pack", "data-insights-pack", "compliance-pack"]
    };

    const recommendedPackIds = recommendations[podId] || [];
    return packsCatalog.availablePacks.filter(pack => recommendedPackIds.includes(pack.id));
  }
};

export { packsCatalog as p };
