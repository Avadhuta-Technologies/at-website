export const podsData = {
  hero: {
    title: "Explore High-Impact Service Pods Built for Results",
    subtitle: "Modular, outcome-driven pods combining expert talent and smart AI to help you build faster, automate smarter, and grow sustainably — without the chaos of traditional software services.",
    primaryButton: { label: "Browse Pods", href: "#available-pods" },
    secondaryButton: { label: "Talk To A Specialist", href: "/contact" }
  },
  
  whyChoose: {
    title: "Why Choose a Pod?",
    cards: [
      {
        title: "No Hiring Delays",
        description: "Skip the 2-3 month hiring cycle. Get a vetted, ready-to-start pod within a week.",
        icon: "/assets/features/icon-01.svg",
        gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
      },
      {
        title: "Built for Execution",
        description: "Each pod is pre-configured for high output — with the right mix of skills and clear delivery workflows.",
        icon: "/assets/features/icon-02.svg",
        gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E]"
      },
      {
        title: "Flexible and Scalable",
        description: "Start with a lean pod, scale up as your needs grow. Pause or adjust based on your roadmap.",
        icon: "/assets/features/icon-03.svg",
        gradient: "from-[#FBC2EB] via-[#A6C1EE] to-[#3B82F6]"
      },
      {
        title: "One Invoice. One Team. Full Ownership.",
        description: "No freelancers. No contractors. Just one accountable, delivery-focused team with transparent billing.",
        icon: "/assets/features/icon-04.svg",
        gradient: "from-[#FDE68A] via-[#6EE7B7] to-[#3B82F6]"
      }
    ]
  },

  included: {
    title: "What's Included in Every Pod",
    image: "/assets/features/icon-01.svg",
    items: [
      "Pre-defined roles based on your project type",
      "Dedicated team members (no context-switching)",
      "Integrated with your tools (Jira, Slack, GitHub, etc.)",
      "Daily/weekly check-ins & sprint planning",
      "Reporting & visibility dashboard",
      "IP protection & signed NDAs"
    ]
  },

  availablePods: {
    title: "Available Project Pods",
    pods: [
      {
        id: "ecommerce-engine",
        title: "Ecommerce Engine Pod (ShopPod)",
        description: "Your Dedicated Team for Scalable, High-Converting Ecommerce Experiences",
        icon: "/assets/features/icon-01.svg",
        badge: "Popular",
        badgeColor: "green",
        idealFor: [
          "D2C brands launching custom ecommerce stores",
          "B2B platforms needing tailored ordering workflows",
          "Retail businesses scaling beyond Shopify limitations"
        ],
        podDescription: "This pod is built for speed, performance, and flexibility — whether you're building headless ecommerce, a custom storefront, or a feature-rich backend.",
        teamComposition: [
          "1 Full Stack Developer (4+ yrs) – storefront, backend logic, integrations",
          "1 UI/UX Designer – conversion-focused shopping experience",
          "0.5 QA & SEO Engineer – quality, speed, and search optimization",
          "Project Lead / Architect (Shared) – ecommerce strategy and tech guidance"
        ],
        upgradeNote: "🧩 Need marketplace features or Shopify/Shopware custom app development? Upgrade to the Plus Pod.",
        deliverables: [
          "Custom storefront (Next.js, Nuxt, or Shopify/Shopware)",
          "Cart, checkout, discount engine, and payment gateway integration (Razorpay, Stripe, etc.)",
          "Admin panel for orders, inventory, returns",
          "Loyalty, referral, and coupon modules",
          "SEO optimization, Google Shopping, and analytics integration",
          "Scalable backend for product catalogs"
        ],
        deliveryTimelines: [
          "2–3 Weeks: MVP store setup with product flows",
          "4–6 Weeks: Full-featured ecommerce platform",
          "Sprints: Weekly delivery, feedback, and scope alignment"
        ],
        whyTrust: [
          "🛍️ Battle-tested ecommerce team (B2C + B2B use cases)",
          "🚀 Fast ramp-up, no delays in going live",
          "📈 Optimized for conversion, speed, and performance",
          "🔌 Integrates with ERPs, CRMs, and shipping APIs"
        ],
        pastUseCases: [
          "Multi-brand D2C store with Razorpay & NetSuite integration",
          "Wholesale B2B portal with custom pricing workflows",
          "Shopify-based subscription store with referral tracking"
        ],
        engagement: "Starting at ₹2.5L/month (~$3K/month)",
        priceNote: "Includes dev, design, QA, infrastructure, and deployment"
      },
      {
        id: "ar-vr-experience",
        title: "AR/VR Experience Pod (XRPod)",
        description: "Immersive Digital Experiences for Products, Training, and Visualization",
        icon: "/assets/features/icon-02.svg",
        badge: "Immersive",
        badgeColor: "purple",
        idealFor: [
          "Retail & D2C brands offering virtual product try-ons",
          "Industrial or manufacturing training with AR",
          "Real estate, interior, and architectural walkthroughs"
        ],
        podDescription: "This pod specializes in building rich AR/VR applications using Unity, Unreal, WebXR, or ARKit/ARCore — deployed across mobile, web, or headsets.",
        teamComposition: [
          "1 Unity / Unreal Developer – immersive interactions and logic",
          "1 3D Designer – models, animations, and textures",
          "1 WebXR / Frontend Dev – WebAR/WebVR experiences",
          "Project Lead (Shared) – scene flow, device testing, delivery"
        ],
        upgradeNote: "🧪 Need integration with ecommerce or IoT? Upgrade to the Custom AR+VR Pod.",
        deliverables: [
          "AR/VR scenes optimized for Meta Quest, WebXR, or mobile AR",
          "3D models, environments, and interaction design",
          "Scene management with backend/CMS integration",
          "Cross-platform delivery (Web + Android/iOS)",
          "Testing, optimization, and packaging for deployment"
        ],
        deliveryTimelines: [
          "3 Weeks: Functional AR prototype or walkthrough",
          "5–6 Weeks: Full interactive experience",
          "Sprints: Weekly demo and device testing feedback"
        ],
        whyTrust: [
          "🎮 Deep AR/VR domain experience",
          "🧩 Seamless integration with ecommerce, CMS, and analytics",
          "📱 Tested across major headsets and mobile devices",
          "🖼️ Polished visuals with optimized performance"
        ],
        pastUseCases: [
          "AR-enabled virtual furniture try-on app for ecommerce",
          "VR safety training simulation for a manufacturing firm",
          "WebAR product showcase for a launch event"
        ],
        engagement: "Starting at ₹3L/month (~$3.6K/month)",
        priceNote: "Includes full development, 3D assets, testing, and deployment"
      },
      {
        id: "ai-product-studio",
        title: "AI Product Studio Pod (AIPod)",
        description: "Build AI-First Products Without Building a Data Science Team",
        icon: "/assets/features/icon-03.svg",
        badge: "AI-Powered",
        badgeColor: "blue",
        idealFor: [
          "SaaS founders building GenAI-powered tools",
          "Enterprises automating processes with LLMs",
          "Teams embedding voice, chat, or smart recommendations"
        ],
        podDescription: "This pod is your go-to team for launching AI-powered products — from design to integration and feedback loops.",
        teamComposition: [
          "1 AI Engineer – LLMs, embeddings, prompt tuning, RAG pipelines",
          "1 Full Stack Developer – frontend/backend integration and APIs",
          "1 Product Designer – conversational UX and AI-specific UI flows",
          "Project Architect (Shared) – use case validation and evaluation framework"
        ],
        upgradeNote: "💬 Add a voice/chat avatar, or document chatbot? Upgrade to the AI+ Copilot Pod.",
        deliverables: [
          "End-to-end AI SaaS workflow with OpenAI, Anthropic, or open-source models",
          "Prompt engineering, evaluation & fallback strategies",
          "RAG pipeline, vector DB (Pinecone, Weaviate, Chroma)",
          "Secure deployment with API rate limiting and analytics",
          "Conversational UI, dashboard, or widget-based frontend"
        ],
        deliveryTimelines: [
          "2–3 Weeks: Working PoC or feature integration",
          "4–6 Weeks: Production-ready AI product",
          "Sprints: Weekly demos and tuning based on evaluation metrics"
        ],
        whyTrust: [
          "🤖 Fast AI development without in-house data science",
          "⚙️ Tested architecture for reliability and observability",
          "🧠 Use-case first: focus on real outcomes, not hype",
          "🔍 Transparent progress with usage and latency metrics"
        ],
        pastUseCases: [
          "AI resume screener with OpenAI + Pinecone",
          "Chat-based internal knowledge assistant",
          "Audio transcription and summarization app"
        ],
        engagement: "Starting at ₹3.5L/month (~$4.2K/month)",
        priceNote: "Includes design, dev, infra, and AI pipelines"
      },
      {
        id: "product-launch",
        title: "Product Launch Pod (LaunchPod)",
        description: "Your All-in-One Team for Fast, Confident MVP Delivery",
        icon: "/assets/features/icon-04.svg",
        badge: "Fast",
        badgeColor: "orange",
        idealFor: [
          "Founders launching new products",
          "Startups validating product-market fit",
          "Teams spinning up internal tools or SaaS MVPs"
        ],
        podDescription: "This pod is a lean cross-functional unit to take your product from idea to MVP, fast.",
        teamComposition: [
          "1 Product Engineer (Frontend + Backend) – builds complete flows",
          "1 UI/UX Designer – wireframes, high-fidelity UI, interaction design",
          "0.5 QA Engineer – automated + manual tests",
          "Project Architect (Shared) – scalable architecture, guidance"
        ],
        upgradeNote: "💡 Want to build faster or add mobile? Upgrade to Launch+ Pod.",
        deliverables: [
          "Fully functional MVP within 2–3 weeks",
          "Mobile-responsive UI + scalable backend",
          "Auth, roles & CRUD dashboards",
          "REST or GraphQL API setup",
          "DevOps pipeline (Vercel, Render, or Docker)",
          "QA, documentation, and handoff"
        ],
        deliveryTimelines: [
          "2–3 Weeks: Functional MVP",
          "4–6 Weeks: Full-feature launch version",
          "Weekly sprints, demos, and roadmap alignment"
        ],
        whyTrust: [
          "🔥 No hiring delay, product team ready",
          "🧠 Startup-savvy engineers, lean mindset",
          "🛠️ Scalable codebase, test-driven development",
          "🤝 Transparency: weekly reports, Git access, and architectural reviews"
        ],
        pastUseCases: [
          "Candidate evaluation platform MVP",
          "Internal CRM tool for early-stage sales",
          "IoT dashboard for field data monitoring"
        ],
        engagement: "Starts at ₹2.5L/month (~$3K/month)",
        priceNote: "Includes dev, design, testing, DevOps & coordination"
      },
      {
        id: "custom-pod",
        title: "Custom Pod (Tailored for You)",
        description: "Need a combination of backend, mobile, QA, DevOps, or something niche? We'll assemble a custom pod based on your exact needs and timelines.",
        icon: "/assets/features/icon-01.svg",
        badge: "Custom",
        badgeColor: "purple",
        isCustom: true,
        idealFor: [
          "Unique project requirements not covered by standard pods",
          "Combination of multiple technologies or domains",
          "Specialized industry needs or compliance requirements"
        ],
        podDescription: "We'll build a custom team composition based on your specific project requirements, technology stack, and timeline.",
        teamComposition: [
          "Custom team composition based on your needs",
          "Flexible roles: Backend, Frontend, Mobile, DevOps, QA",
          "Specialized expertise for niche requirements",
          "Project Lead tailored to your domain"
        ],
        deliverables: [
          "Custom solution designed for your specific use case",
          "Flexible technology stack based on your requirements",
          "Scalable architecture for your unique needs",
          "Integration with your existing systems and workflows"
        ],
        engagement: "Custom pricing based on requirements",
        priceNote: "Free discovery call to discuss your needs"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our project pods",
    items: [
      {
        question: "How quickly can a pod start working on my project?",
        answer: "Most pods can begin within 1-2 weeks of contract signing. We maintain a pool of pre-vetted talent ready to deploy, eliminating traditional hiring delays."
      },
      {
        question: "What's included in the monthly pod pricing?",
        answer: "Each pod includes the full team (developers, designers, QA), project management, infrastructure costs, and all deliverables. No hidden fees or additional charges."
      },
      {
        question: "Can I scale up or down based on my needs?",
        answer: "Absolutely. You can start with a lean pod and scale up as your project grows. We also offer flexible engagement models to match your development phases."
      },
      {
        question: "How do you ensure code quality and maintainability?",
        answer: "Every pod includes QA engineers, code reviews, automated testing, and follows industry best practices. We also provide comprehensive documentation and knowledge transfer."
      },
      {
        question: "What happens if I need to pause or modify the project scope?",
        answer: "We offer flexible contracts that allow you to pause, modify, or scale your engagement. We work closely with you to adjust timelines and deliverables as needed."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes, we offer post-launch support packages including maintenance, updates, and feature additions. Many clients choose to continue with their pod for ongoing development."
      }
    ]
  },

  cta: {
    title: "Ready to Build Something Amazing?",
    description: "Get started with a project pod today and see the difference a dedicated, outcome-focused team can make.",
    buttonText: "Start Your Project",
    email: "hello@novapod.ai",
    downloadLink: "/contact"
  }
}; 