export const podsData = {
  hero: {
    badge: "AI-Powered Project Teams",
    title: "Project Pods",
    subtitle: "Your On-Demand Tech Team, Without the Hiring Hassle",
    description: "Avadhuta's Project Pods are pre-structured, outcome-focused tech teams that plug into your product journey. Get the expertise you need, when you need it, with zero hiring overhead.",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "24/7", label: "Support Available" }
    ]
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
      "Dedicated team (not freelancers or randoms)",
      "Project manager for delivery & communication",
      "Weekly check-ins & progress reports",
      "Sprint-based delivery (2-week sprints)",
      "QA & code reviews included",
      "All code & IP 100% yours"
    ]
  },

  availablePods: {
    title: "Available Project Pods",
    pods: [
      {
        id: "ecommerce-engine",
        title: "Ecommerce Engine Pod",
        description: "Your Dedicated Team for Scalable, High-Converting Ecommerce Experiences",
        icon: "/assets/features/icon-01.svg",
        badge: "Popular",
        badgeColor: "green",
        teamComposition: [
          "1 Full Stack Developer (4+ yrs) – storefront, backend logic, integrations",
          "1 UI/UX Designer – conversion-focused shopping experience",
          "0.5 QA & SEO Engineer – quality, speed, and search optimization",
          "Project Lead / Architect (Shared) – ecommerce strategy and tech guidance"
        ],
        deliverables: [
          "Custom storefront (Next.js, Nuxt, or Shopify/Shopware)",
          "Cart, checkout, discount engine, and payment gateway integration",
          "Admin panel for orders, inventory, returns",
          "Loyalty, referral, and coupon modules",
          "SEO optimization, Google Shopping, and analytics integration"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹2.5L/month",
        priceUSD: "$3K/month"
      },
      {
        id: "ar-vr-experience",
        title: "AR/VR Experience Pod",
        description: "Immersive Digital Experiences for Products, Training, and Visualization",
        icon: "/assets/features/icon-02.svg",
        badge: "Immersive",
        badgeColor: "purple",
        teamComposition: [
          "1 Unity / Unreal Developer – immersive interactions and logic",
          "1 3D Designer – models, animations, and textures",
          "1 WebXR / Frontend Dev – WebAR/WebVR experiences",
          "Project Lead (Shared) – scene flow, device testing, delivery"
        ],
        deliverables: [
          "AR/VR scenes optimized for Meta Quest, WebXR, or mobile AR",
          "3D models, environments, and interaction design",
          "Scene management with backend/CMS integration",
          "Cross-platform delivery (Web + Android/iOS)",
          "Testing, optimization, and packaging for deployment"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹3L/month",
        priceUSD: "$3.6K/month"
      },
      {
        id: "ai-product-studio",
        title: "AI Product Studio Pod",
        description: "Build AI-First Products Without Building a Data Science Team",
        icon: "/assets/features/icon-03.svg",
        badge: "AI-Powered",
        badgeColor: "blue",
        teamComposition: [
          "1 AI Engineer – LLMs, embeddings, prompt tuning, RAG pipelines",
          "1 Full Stack Developer – frontend/backend integration and APIs",
          "1 Product Designer – conversational UX and AI-specific UI flows",
          "Project Architect (Shared) – use case validation and evaluation framework"
        ],
        deliverables: [
          "End-to-end AI SaaS workflow with OpenAI, Anthropic, or open-source models",
          "Prompt engineering, evaluation & fallback strategies",
          "RAG pipeline, vector DB (Pinecone, Weaviate, Chroma)",
          "Secure deployment with API rate limiting and analytics",
          "Conversational UI, dashboard, or widget-based frontend"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹3.5L/month",
        priceUSD: "$4.2K/month"
      },
      {
        id: "product-launch",
        title: "Product Launch Pod",
        description: "Your All-in-One Team for Fast, Confident MVP Delivery",
        icon: "/assets/features/icon-04.svg",
        badge: "Fast",
        badgeColor: "orange",
        teamComposition: [
          "1 Product Engineer (Frontend + Backend) – builds complete flows",
          "1 UI/UX Designer – wireframes, high-fidelity UI, interaction design",
          "0.5 QA Engineer – automated + manual tests",
          "Project Architect (Shared) – scalable architecture, guidance"
        ],
        deliverables: [
          "Fully functional MVP within 2–3 weeks",
          "Mobile-responsive UI + scalable backend",
          "Auth, roles & CRUD dashboards",
          "REST or GraphQL API setup",
          "DevOps pipeline (Vercel, Render, or Docker)"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹2.5L/month",
        priceUSD: "$3K/month"
      },
      {
        id: "admin-workflow-automation",
        title: "Admin & Workflow Automation Pod",
        description: "For Teams Looking to Automate Business Operations",
        icon: "/assets/features/icon-01.svg",
        badge: "Automation",
        badgeColor: "indigo",
        teamComposition: [
          "1 Full Stack Developer – dashboard and logic-heavy flows",
          "1 QA/Tester – robust testing and data validation",
          "Project Manager (Shared) – handles coordination, delivery"
        ],
        deliverables: [
          "Role-based dashboards",
          "Workflow logic and status tracking",
          "Data import/export + reporting tools",
          "Secure login, access controls",
          "Deployment + CI/CD support"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹2L/month",
        priceUSD: "$2.4K/month"
      },
      {
        id: "ai-ml-integration",
        title: "AI/ML Integration Pod",
        description: "Integrate Smart Features into Your Product—No Data Science Hiring Needed",
        icon: "/assets/features/icon-02.svg",
        badge: "AI/ML",
        badgeColor: "cyan",
        teamComposition: [
          "1 AI Engineer (ML/LLM experience)",
          "1 Backend Developer – APIs, integration, deployment",
          "Project Architect (Shared) – data pipeline and evaluation guidance"
        ],
        deliverables: [
          "Prompt-based or model-based feature delivery",
          "REST/GraphQL APIs for use inside your product",
          "Evaluation metrics, fallbacks, error handling",
          "On-device or cloud model deployment"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹3L/month",
        priceUSD: "$3.6K/month"
      },
      {
        id: "mobile-first-saas",
        title: "Mobile-First SaaS Pod",
        description: "Your Cross-Platform Team for Beautiful, Functional Mobile SaaS Products",
        icon: "/assets/features/icon-03.svg",
        badge: "Mobile",
        badgeColor: "pink",
        teamComposition: [
          "1 React Native / Flutter Developer – cross-platform mobile app development",
          "1 Backend Developer – APIs, auth, and business logic",
          "1 UI/UX Designer – mobile-first designs and user flows",
          "0.5 QA Engineer – test coverage and release readiness",
          "Project Lead (Shared) – sprint planning and tech oversight"
        ],
        deliverables: [
          "Cross-platform mobile app (iOS + Android)",
          "Responsive UI + native-like performance",
          "REST/GraphQL APIs with auth & business logic",
          "Push notifications, secure login, and offline support",
          "Store publishing (Play Store & App Store)"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹3L/month",
        priceUSD: "$3.6K/month"
      },
      {
        id: "devops-infra-automation",
        title: "DevOps & Infra Automation Pod",
        description: "Scale with Confidence — Reliable Infrastructure, CI/CD, and CloudOps Support",
        icon: "/assets/features/icon-04.svg",
        badge: "DevOps",
        badgeColor: "gray",
        teamComposition: [
          "1 DevOps Engineer – infra setup, pipelines, scaling, security",
          "0.5 Backend Developer – service integration, logging, tooling",
          "Project Lead (Shared) – tracks milestones and environments"
        ],
        deliverables: [
          "Cloud environment setup (AWS, GCP, Azure, or Vercel/Render)",
          "CI/CD pipelines using GitHub Actions, GitLab, or Docker",
          "Logging, alerting, and monitoring (ELK, Prometheus, Grafana)",
          "Staging & production segregation",
          "SSL, backups, and security hardening"
        ],
        engagement: "minimum 1 month",
        priceINR: "₹2L/month",
        priceUSD: "$2.4K/month"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our Project Pods",
    items: [
      {
        question: "How quickly can we get started?",
        answer: "Most pods can be assembled and onboarded within 1-2 weeks. We'll start with a discovery call to understand your needs, then match you with the right team composition. Custom pods may take slightly longer depending on specific requirements."
      },
      {
        question: "What's the minimum engagement period?",
        answer: "We require a minimum 1-month engagement to ensure proper onboarding and project momentum. However, we recommend 3-6 months for optimal results and team cohesion. Longer engagements often come with volume discounts."
      },
      {
        question: "How do you ensure quality and accountability?",
        answer: "Each pod includes a dedicated project manager who provides weekly updates, milestone tracking, and regular check-ins. We use industry-standard tools for project management, code reviews, and quality assurance. All team members are vetted professionals with proven track records."
      },
      {
        question: "Can we scale up or down during the engagement?",
        answer: "Yes! Our pods are designed to be flexible. You can add or remove team members with 2 weeks' notice. We can also switch between different pod types (e.g., from Full-Stack to Tech Lead) based on your evolving needs. Custom pods offer maximum flexibility for unique requirements."
      },
      {
        question: "What technologies and tools do your pods work with?",
        answer: "Our teams are proficient in modern tech stacks including React, Vue, Angular, Node.js, Python, Java, AWS, Azure, and more. We adapt to your existing tools and processes, or can recommend optimal solutions. Each pod member is selected based on your specific technology requirements."
      },
      {
        question: "How do you handle communication and time zones?",
        answer: "We work in your time zone and provide 24/7 support for critical issues. Regular communication happens through your preferred channels (Slack, Teams, email, etc.). Weekly video calls ensure alignment, and our project managers are always available for urgent matters."
      }
    ]
  },

  cta: {
    title: "Start Your Pod",
    description: "Need clarity on which pod fits your goals? Book a free 30-min call and we'll help you define the best setup.",
    buttonText: "Book a Free Discovery Call",
    email: "hello@avadhutatech.com",
    downloadLink: "[Download Pod Services Deck]"
  }
}; 