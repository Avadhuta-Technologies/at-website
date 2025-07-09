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
        engagement: "Starting at ₹6,00,000/month (~$28,000/month)",
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
        engagement: "Starting at ₹7,50,000/month (~$35,000/month)",
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
        engagement: "Starting at ₹8,00,000/month (~$38,000/month)",
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
        engagement: "Starts at ₹5,50,000/month (~$25,000/month)",
        priceNote: "Includes dev, design, testing, DevOps & coordination"
      },
      {
        id: "admin-workflow-automation",
        title: "Admin & Workflow Automation Pod (FlowPod)",
        description: "For Teams Looking to Automate Business Operations",
        icon: "/assets/features/icon-05.svg",
        badge: "Automation",
        badgeColor: "indigo",
        idealFor: [
          "Internal tools and workflow automation",
          "Admin portals, multi-role systems",
          "Process digitalization and reporting"
        ],
        podDescription: "This pod focuses on operational software—building dashboards, CRMs, portals, and integrations.",
        teamComposition: [
          "1 Full Stack Developer – dashboard and logic-heavy flows",
          "1 QA/Tester – robust testing and data validation",
          "Project Manager (Shared) – handles coordination, delivery"
        ],
        upgradeNote: "💡 Need custom integrations? Opt for the Plus Pod with integration engineer.",
        deliverables: [
          "Role-based dashboards",
          "Workflow logic and status tracking",
          "Data import/export + reporting tools",
          "Secure login, access controls",
          "Deployment + CI/CD support"
        ],
        deliveryTimelines: [
          "2 Weeks: Admin dashboard & basic workflows",
          "4–5 Weeks: Full workflow suite with reports"
        ],
        whyTrust: [
          "⚙️ Automation-ready setup",
          "📊 Configurable workflows, usable from day one",
          "🛡️ Secure, scalable, and auditable"
        ],
        pastUseCases: [
          "Admin portal for managing field staff",
          "Approval workflows for finance teams",
          "Reporting dashboard for executive teams"
        ],
        engagement: "Starting at ₹5,00,000/month (~$22,000/month)",
        priceNote: "Includes development, testing, and deployment"
      },
      {
        id: "ai-ml-integration",
        title: "AI/ML Integration Pod (IntegratePod)",
        description: "Integrate Smart Features into Your Product—No Data Science Hiring Needed",
        icon: "/assets/features/icon-06.svg",
        badge: "Integration",
        badgeColor: "teal",
        idealFor: [
          "SaaS tools looking to add ML-driven features",
          "Internal tools needing document or image parsing",
          "Teams wanting recommendations, insights, or summarization"
        ],
        podDescription: "This pod helps you ship useful AI features using LLMs, OCR, and lightweight ML models.",
        teamComposition: [
          "1 AI Engineer (ML/LLM experience)",
          "1 Backend Developer – APIs, integration, deployment",
          "Project Architect (Shared) – data pipeline and evaluation guidance"
        ],
        upgradeNote: "💡 Add a front-end engineer if building full flows around the AI.",
        deliverables: [
          "Prompt-based or model-based feature delivery",
          "REST/GraphQL APIs for use inside your product",
          "Evaluation metrics, fallbacks, error handling",
          "On-device or cloud model deployment"
        ],
        deliveryTimelines: [
          "2–4 Weeks: ML feature integrated into your product",
          "Sprints: Weekly review and feature evolution"
        ],
        whyTrust: [
          "🧠 LLMs without the ML hiring",
          "⚡ Fast prototyping, clean APIs",
          "🤖 Expertise in OpenAI, HuggingFace, and vector DBs"
        ],
        pastUseCases: [
          "Resume evaluation with OpenAI",
          "Image OCR and tagging system",
          "Recommendation engine for user engagement"
        ],
        engagement: "Starts at ₹7,00,000/month (~$30,000/month)",
        priceNote: "PoC-based pricing also available"
      },
      {
        id: "mobile-first-saas",
        title: "Mobile-First SaaS Pod (AppPod)",
        description: "Your Cross-Platform Team for Beautiful, Functional Mobile SaaS Products",
        icon: "/assets/features/icon-07.svg",
        badge: "Mobile",
        badgeColor: "pink",
        idealFor: [
          "SaaS founders building mobile-first products",
          "Businesses needing mobile companion apps",
          "Teams launching iOS/Android MVPs with backend"
        ],
        podDescription: "This pod delivers end-to-end mobile SaaS apps — from UI to backend — with production-ready deployment.",
        teamComposition: [
          "1 React Native / Flutter Developer – cross-platform mobile app development",
          "1 Backend Developer – APIs, auth, and business logic",
          "1 UI/UX Designer – mobile-first designs and user flows",
          "0.5 QA Engineer – test coverage and release readiness",
          "Project Lead (Shared) – sprint planning and tech oversight"
        ],
        upgradeNote: "💡 Need native performance or wearables? Ask for the Native+ upgrade.",
        deliverables: [
          "Cross-platform mobile app (iOS + Android)",
          "Responsive UI + native-like performance",
          "REST/GraphQL APIs with auth & business logic",
          "Push notifications, secure login, and offline support",
          "Backend admin panel (optional)",
          "Store publishing (Play Store & App Store)"
        ],
        deliveryTimelines: [
          "3 Weeks: MVP with core flows",
          "6 Weeks: Full-featured mobile SaaS launch",
          "Weekly sprints, UI reviews, and test builds"
        ],
        whyTrust: [
          "📱 Mobile-first thinking from day one",
          "🎨 Beautiful, user-tested mobile UI",
          "🛠️ Backend and DevOps included — no separate vendors",
          "🚀 Rapid launch to app stores"
        ],
        pastUseCases: [
          "Mobile CRM for sales teams on the go",
          "Habit tracker SaaS with analytics backend",
          "IoT control app with device sync and notifications"
        ],
        engagement: "Starting at ₹6,50,000/month (~$28,000/month)",
        priceNote: "Includes mobile dev, backend dev, design, testing, and deployment"
      },
      {
        id: "devops-infra-automation",
        title: "DevOps & Infra Automation Pod (InfraPod)",
        description: "Scale with Confidence — Reliable Infrastructure, CI/CD, and CloudOps Support",
        icon: "/assets/features/icon-08.svg",
        badge: "Infrastructure",
        badgeColor: "gray",
        idealFor: [
          "Startups scaling their platform",
          "Teams setting up secure, automated deployment pipelines",
          "SaaS products needing infra cost optimization"
        ],
        podDescription: "This pod handles everything behind the scenes — CI/CD, cloud provisioning, monitoring, and ops automation.",
        teamComposition: [
          "1 DevOps Engineer – infra setup, pipelines, scaling, security",
          "0.5 Backend Developer – service integration, logging, tooling",
          "Project Lead (Shared) – tracks milestones and environments"
        ],
        upgradeNote: "💡 Want 24/7 monitoring or custom cloud setup? Add the Infra+ SLA Pack.",
        deliverables: [
          "Cloud environment setup (AWS, GCP, Azure, or Vercel/Render)",
          "CI/CD pipelines using GitHub Actions, GitLab, or Docker",
          "Logging, alerting, and monitoring (ELK, Prometheus, Grafana)",
          "Staging & production segregation",
          "SSL, backups, and security hardening",
          "Cost optimization recommendations"
        ],
        deliveryTimelines: [
          "1–2 Weeks: Basic CI/CD + cloud deployment",
          "3–4 Weeks: Full-scale infra, monitoring & automation setup"
        ],
        whyTrust: [
          "🛡️ Secure, battle-tested infrastructure practices",
          "⚙️ Dev handoff with full automation and rollback strategies",
          "🔁 Works with any stack: Node, Django, Rails, Go, etc.",
          "💸 Infra cost savings and cloud strategy consulting"
        ],
        pastUseCases: [
          "CI/CD for microservices on AWS ECS",
          "GitHub → Docker → Production pipeline setup",
          "Multi-tenant SaaS with containerized staging environments"
        ],
        engagement: "Starting at ₹4,50,000/month (~$20,000/month)",
        priceNote: "One-time infra setup plans available as well"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our project pods",
    items: [
      {
        question: "❓ How is this different from hiring freelancers or agencies?",
        answer: "Pods are structured, accountable, and built for long-term delivery. You don't manage freelancers — you collaborate with a delivery partner who operates like your internal team."
      },
      {
        question: "📆 What's the minimum engagement?",
        answer: "Most pods require a 1-month minimum. You can extend monthly, scale up/down, or convert to a different engagement model later."
      },
      {
        question: "💼 Who manages the team?",
        answer: "Every Pod comes with a Delivery Coordinator or Project Manager depending on the pod size. You get full visibility without micromanaging."
      },
      {
        question: "🔐 Do I own the code and IP?",
        answer: "Yes — everything we build is yours. All code, documentation, and deployments are handed off with full transparency."
      }
    ]
  },

  cta: {
    title: "Start Your Pod",
    description: "Need clarity on which pod fits your goals? Book a free 30-min call and we'll help you define the best setup.",
    buttonText: "Book a Free Discovery Call",
    email: "hello@avadhutatech.com",
    downloadLink: "Download Pod Services Deck"
  }
}; 