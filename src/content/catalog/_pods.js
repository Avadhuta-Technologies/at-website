// Single source of truth for all available pods
// This file contains all pod data used throughout the website
// Import this file whenever you need pod data for cart, checkout, or display

export const podsCatalog = {
  // Pod data for cart and checkout operations
  availablePods: [
    {
      id: "ecommerce-engine",
      title: "Ecommerce Engine Pod (ShopPod)",
      description: "Your Dedicated Team for Scalable, High-Converting Ecommerce Experiences",
      icon: "shopping-cart",
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
      priceNote: "Includes dev, design, QA, infrastructure, and deployment",
      basePrice: 600000, // For cart calculations
      priceUSD: 28000,
      type: "pod"
    },
    {
      id: "ar-vr-experience",
      title: "AR/VR Experience Pod (XRPod)",
      description: "Immersive Digital Experiences for Products, Training, and Visualization",
      icon: "vr-headset",
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
      priceNote: "Includes full development, 3D assets, testing, and deployment",
      basePrice: 750000,
      priceUSD: 35000,
      type: "pod"
    },
    {
      id: "ai-product-studio",
      title: "AI Product Studio Pod (AIPod)",
      description: "Build AI-First Products Without Building a Data Science Team",
      icon: "brain",
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
      priceNote: "Includes design, dev, infra, and AI pipelines",
      basePrice: 800000,
      priceUSD: 38000,
      type: "pod"
    },
    {
      id: "product-launch",
      title: "Product Launch Pod (LaunchPod)",
      description: "Your All-in-One Team for Fast, Confident MVP Delivery",
      icon: "rocket",
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
      priceNote: "Includes dev, design, testing, DevOps & coordination",
      basePrice: 550000,
      priceUSD: 25000,
      type: "pod"
    },
    {
      id: "admin-workflow-automation",
      title: "Admin & Workflow Automation Pod (FlowPod)",
      description: "For Teams Looking to Automate Business Operations",
      icon: "admin-workflow-automation",
      badge: "Automation",
      badgeColor: "indigo",
      idealFor: [
        "Internal tools and workflow automation",
        "Admin portals, multi-role systems",
        "Business process optimization"
      ],
      podDescription: "This pod specializes in building internal tools, admin panels, and workflow automation systems.",
      teamComposition: [
        "1 Full Stack Developer – admin panels, APIs, integrations",
        "1 UI/UX Designer – user-friendly interfaces",
        "0.5 DevOps Engineer – deployment and monitoring",
        "Project Lead (Shared) – process analysis and optimization"
      ],
      upgradeNote: "🔄 Need advanced integrations? Upgrade to the Enterprise Flow Pod.",
      deliverables: [
        "Custom admin panels and dashboards",
        "Workflow automation and business process tools",
        "API integrations with existing systems",
        "Role-based access control and security",
        "Reporting and analytics dashboards",
        "Mobile-responsive interfaces"
      ],
      deliveryTimelines: [
        "2–3 Weeks: Core admin functionality",
        "4–6 Weeks: Full automation suite",
        "Weekly sprints with stakeholder feedback"
      ],
      whyTrust: [
        "⚙️ Proven track record in business automation",
        "🔒 Enterprise-grade security and compliance",
        "📊 Data-driven insights and reporting",
        "🔄 Seamless integration with existing tools"
      ],
      pastUseCases: [
        "HR workflow automation system",
        "Inventory management dashboard",
        "Customer service automation platform"
      ],
      engagement: "Starting at ₹6,50,000/month (~$30,000/month)",
      priceNote: "Includes development, design, and deployment",
      basePrice: 650000,
      priceUSD: 30000,
      type: "pod"
    },
    {
      id: "devops-infra-automation",
      title: "DevOps & Infrastructure Automation Pod (DevPod)",
      description: "Infrastructure as Code and CI/CD Excellence",
      icon: "devops-infra-automation",
      badge: "DevOps",
      badgeColor: "teal",
      idealFor: [
        "Teams needing infrastructure automation",
        "Startups scaling their tech operations",
        "Companies migrating to cloud-native architecture"
      ],
      podDescription: "This pod focuses on infrastructure automation, CI/CD pipelines, and cloud-native development practices.",
      teamComposition: [
        "1 DevOps Engineer – infrastructure and automation",
        "1 Cloud Architect – scalable architecture design",
        "0.5 Security Engineer – compliance and security",
        "Project Lead (Shared) – infrastructure strategy"
      ],
      upgradeNote: "☁️ Need multi-cloud setup? Upgrade to the Enterprise DevOps Pod.",
      deliverables: [
        "Infrastructure as Code (Terraform, CloudFormation)",
        "CI/CD pipelines and automation",
        "Monitoring and alerting systems",
        "Security and compliance frameworks",
        "Disaster recovery and backup solutions",
        "Performance optimization and scaling"
      ],
      deliveryTimelines: [
        "2–3 Weeks: Basic infrastructure setup",
        "4–6 Weeks: Full automation suite",
        "Weekly sprints with performance reviews"
      ],
      whyTrust: [
        "🚀 Proven expertise in cloud-native architecture",
        "🔒 Security-first approach with compliance",
        "📈 Scalable and maintainable infrastructure",
        "🔄 Automated deployment and monitoring"
      ],
      pastUseCases: [
        "Multi-region Kubernetes cluster setup",
        "AWS to Azure migration automation",
        "Microservices architecture implementation"
      ],
      engagement: "Starting at ₹7,00,000/month (~$32,000/month)",
      priceNote: "Includes infrastructure, automation, and monitoring",
      basePrice: 700000,
      priceUSD: 32000,
      type: "pod"
    },
    {
      id: "mobile-first-saas",
      title: "Mobile-First SaaS Pod (MobilePod)",
      description: "Native Mobile Apps with Backend Infrastructure",
      icon: "mobile-first-saas",
      badge: "Mobile",
      badgeColor: "pink",
      idealFor: [
        "Startups building mobile-first products",
        "Companies expanding to mobile platforms",
        "Teams needing cross-platform mobile solutions"
      ],
      podDescription: "This pod specializes in building native mobile applications with robust backend infrastructure.",
      teamComposition: [
        "1 Mobile Developer (iOS/Android) – native app development",
        "1 Backend Developer – API and database design",
        "1 UI/UX Designer – mobile-first design",
        "Project Lead (Shared) – mobile strategy and coordination"
      ],
      upgradeNote: "📱 Need both iOS and Android? Upgrade to the Cross-Platform Mobile Pod.",
      deliverables: [
        "Native mobile applications (iOS/Android)",
        "Backend API and database design",
        "Push notifications and real-time features",
        "App store optimization and deployment",
        "Analytics and crash reporting",
        "Cross-platform compatibility"
      ],
      deliveryTimelines: [
        "3–4 Weeks: MVP mobile app",
        "6–8 Weeks: Full-featured application",
        "Weekly sprints with user testing"
      ],
      whyTrust: [
        "📱 Deep expertise in mobile development",
        "🔧 Robust backend infrastructure",
        "📊 Analytics and performance optimization",
        "🚀 App store optimization and deployment"
      ],
      pastUseCases: [
        "E-commerce mobile app with payment integration",
        "Social networking platform with real-time features",
        "Fitness tracking app with health integrations"
      ],
      engagement: "Starting at ₹8,50,000/month (~$40,000/month)",
      priceNote: "Includes mobile development, backend, and deployment",
      basePrice: 850000,
      priceUSD: 40000,
      type: "pod"
    }
  ],

  // Utility functions for working with pod data
  getPodById: (id) => {
    return podsCatalog.availablePods.find(pod => pod.id === id) || null;
  },

  getPodsByCategory: (category) => {
    return podsCatalog.availablePods.filter(pod => pod.category === category);
  },

  getPopularPods: () => {
    return podsCatalog.availablePods.filter(pod => pod.badge === "Popular");
  },

  // Cart-specific data transformation
  getPodForCart: (podId) => {
    const pod = podsCatalog.getPodById(podId);
    if (!pod) return null;

    return {
      id: pod.id,
      type: "pod",
      title: pod.title,
      description: pod.description,
      price: pod.engagement,
      priceUSD: pod.priceUSD,
      basePrice: pod.basePrice,
      icon: pod.icon,
      badge: pod.badge,
      badgeColor: pod.badgeColor,
      duration: "Monthly subscription"
    };
  }
};

export default podsCatalog; 