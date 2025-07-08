export const packsData = {
  hero: {
    title: "Add Power to Your Pod with Fixed-Scope Packs",
    subtitle: "Modular Packs that extend your Pod's capabilities — from launching your product to automating operations, boosting growth, or integrating AI. Clear outcomes, fixed pricing, faster delivery.",
    description: "Don't want to manage a dev team? Just want a specific outcome delivered—quickly, predictably, and without the back-and-forth? That's exactly what our Fixed Scope Packs are built for.",
    primaryButton: { label: "Browse Packs", href: "#popular-packs" },
    secondaryButton: { label: "Build Your Bundle", href: "/contact" }
  },

  availablePacks: {
    title: "Available Project Packs",
    packs: [
      {
        id: "mvp-launch",
        title: "MVP Launch Pack",
        description: "Build your first product with clean UX, frontend, backend, and admin dashboard.",
        icon: "/assets/features/icon-01.svg",
        badge: "Popular",
        badgeColor: "green",
        deliverables: [
          "Responsive frontend with modern UI/UX",
          "Backend API with authentication",
          "Admin dashboard with user management",
          "Database design and setup",
          "Deployment and hosting configuration",
          "Documentation and handover"
        ],
        timeline: "4-6 weeks",
        priceINR: "₹3.5-4 Lakhs",
        priceUSD: "$4,200-4,800"
      },
      {
        id: "ai-chatbot",
        title: "AI Chatbot Pack",
        description: "Deploy a GPT-powered assistant for your website or app. Includes chat UI, backend integration, prompt tuning.",
        icon: "/assets/features/icon-02.svg",
        badge: "Fast",
        badgeColor: "blue",
        deliverables: [
          "Custom chatbot interface",
          "GPT API integration",
          "Prompt engineering and optimization",
          "Conversation history and context",
          "Admin panel for monitoring",
          "Analytics and insights dashboard"
        ],
        timeline: "2-3 weeks",
        priceINR: "₹1.2-1.5 Lakhs",
        priceUSD: "$1,440-1,800"
      },
      {
        id: "ai-knowledge",
        title: "AI-Powered Knowledge Assistant",
        description: "Train a bot on your documentation, support queries, or product FAQs—and let guests get instant answers.",
        icon: "/assets/features/icon-03.svg",
        badge: "Smart",
        badgeColor: "purple",
        deliverables: [
          "Knowledge base integration",
          "Document processing and indexing",
          "Semantic search capabilities",
          "Custom training on your data",
          "Web interface for queries",
          "Analytics and improvement insights"
        ],
        timeline: "2-3 weeks",
        priceINR: "₹1.5-2 Lakhs",
        priceUSD: "$1,800-2,400"
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation Pack",
        description: "Create custom workflows: form to CRM, automated follow-ups, alerts, task creation using n8n or Zapier.",
        icon: "/assets/features/icon-04.svg",
        badge: "Efficient",
        badgeColor: "orange",
        deliverables: [
          "Custom workflow design",
          "API integrations setup",
          "Automated triggers and actions",
          "Error handling and monitoring",
          "User interface for workflow management",
          "Documentation and training"
        ],
        timeline: "2-3 weeks",
        priceINR: "₹85,000-1.1 Lakhs",
        priceUSD: "$1,020-1,320"
      },
      {
        id: "3d-visualization",
        title: "3D Visualization Pack (Three.js)",
        description: "Add interactive, browser-based 3D models to your website or app using Three.js",
        icon: "/assets/features/icon-01.svg",
        badge: "Interactive",
        badgeColor: "teal",
        deliverables: [
          "3D model integration",
          "Interactive controls and animations",
          "Performance optimization",
          "Mobile responsiveness",
          "Custom shaders and materials",
          "Documentation and examples"
        ],
        timeline: "2-3 weeks",
        priceINR: "₹1.5-2 Lakhs",
        priceUSD: "$1,800-2,400"
      },
      {
        id: "analytics-dashboard",
        title: "Analytics + Dashboard Pack",
        description: "Add user metrics, funnel tracking, and business dashboards using Chart.js, Supabase, or Metabase.",
        icon: "/assets/features/icon-02.svg",
        badge: "Insights",
        badgeColor: "indigo",
        deliverables: [
          "Data collection and tracking",
          "Custom dashboard design",
          "Real-time analytics",
          "Export and reporting features",
          "User access management",
          "Integration with existing systems"
        ],
        timeline: "2-3 weeks",
        priceINR: "₹80,000-1.2 Lakhs",
        priceUSD: "$960-1,440"
      }
    ]
  },

  whyChoose: {
    title: "Why Choose a Fixed Scope Pack?",
    cards: [
      {
        title: "Clear Scope, No Surprises",
        description: "Each Pack comes with well-defined deliverables, timelines, and pricing. No scope creep. No hourly billing drama.",
        icon: "/assets/features/icon-01.svg",
        gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
      },
      {
        title: "Faster Kickoff, Faster Results",
        description: "Skip endless meetings and proposals. Pick a Pack, pair it with your Pod, and get started within days.",
        icon: "/assets/features/icon-02.svg",
        gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E]"
      },
      {
        title: "Fixed Pricing = Predictable Budgeting",
        description: "Know exactly what you're paying for, upfront. Great for startups, finance teams, and anyone tired of inflated quotes.",
        icon: "/assets/features/icon-03.svg",
        gradient: "from-[#FBC2EB] via-[#A6C1EE] to-[#3B82F6]"
      },
      {
        title: "Modular & Stackable",
        description: "Start small and scale with confidence. Add more Packs as your needs grow — from launch to automation and beyond.",
        icon: "/assets/features/icon-04.svg",
        gradient: "from-[#FDE68A] via-[#6EE7B7] to-[#3B82F6]"
      },
      {
        title: "Aligned Expectations",
        description: "Everyone's on the same page from day one — making collaboration smoother and delivery sharper.",
        icon: "/assets/features/icon-05.svg",
        gradient: "from-[#A78BFA] via-[#F59E0B] to-[#EF4444]"
      }
    ]
  },

  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Pick Your Pod",
        description: "Choose the service area that aligns with your goal — AI integration, automation, product launch, or more.",
        icon: "pick-pod"
      },
      {
        number: "02",
        title: "Select a Pack",
        description: "Based on your needs and budget — Startup Pack, Scale Pack, or Custom — each one comes with defined deliverables and timelines.",
        icon: "select-pack"
      },
      {
        number: "03",
        title: "Kick Off the Project",
        description: "Our team gets started with minimal handholding. You'll stay in the loop with regular updates and demos.",
        icon: "kick-off"
      },
      {
        number: "04",
        title: "Review & Launch",
        description: "Once deliverables are met, we ensure everything is production-ready and handover is smooth.",
        icon: "review-launch"
      },
      {
        number: "05",
        title: "Stack More Packs as You Scale",
        description: "Extend, iterate, or switch focus by adding new Packs or Pods as your needs evolve.",
        icon: "stack-scale"
      }
    ]
  },

  popularPacks: {
    title: "Popular Packs",
    packs: [
      {
        id: "mvp-launch",
        title: "MVP Launch Pack",
        description: "Build your first product with clean UX, frontend, backend, and admin dashboard.",
        image: "/assets/blog/blog-01.jpg",
        targetAudience: "Startup founders, POC teams, first-time product builders",
        duration: "4–6 weeks",
        price: "₹3.5–4 Lakhs"
      },
      {
        id: "ai-chatbot",
        title: "AI Chatbot Pack",
        description: "Deploy a GPT-powered assistant for your website or app. Includes chat UI, backend integration, prompt tuning.",
        image: "/assets/blog/blog-02.jpg",
        targetAudience: "SaaS companies, HR tech, e-learning, lead-gen",
        duration: "2–3 weeks",
        price: "₹1.2–1.5 Lakhs"
      },
      {
        id: "ai-knowledge",
        title: "AI-Powered Knowledge Assistant",
        description: "Train a bot on your documentation, support queries, or product FAQs—and let guests get instant answers.",
        image: "/assets/blog/blog-03.jpg",
        targetAudience: "SaaS product teams, HR systems, internal support, e-learning",
        duration: "2–3 weeks",
        price: "₹1.5–2 Lakhs"
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation Pack",
        description: "Create custom workflows: form to CRM, automated follow-ups, alerts, task creation using n8n or Zapier.",
        image: "/assets/blog/blog-details-01.jpg",
        targetAudience: "Startup founders, POC teams, first-time product builders",
        duration: "2–3 weeks",
        price: "₹85,000–1.1 Lakhs"
      },
      {
        id: "3d-visualization",
        title: "3D Visualization Pack (Three.js)",
        description: "Add interactive, browser-based 3D models to your website or app using Three.js",
        image: "/assets/blog/blog-footer-01.jpg",
        targetAudience: "D2C brands, real estate, edtech, industrial product companies, and any team needing 3D on the web without heavy infrastructure.",
        duration: "2–3 weeks",
        price: "₹1.5–2 Lakhs"
      },
      {
        id: "analytics-dashboard",
        title: "Analytics + Dashboard Pack",
        description: "Add user metrics, funnel tracking, and business dashboards using Chart.js, Supabase, or Metabase.",
        image: "/assets/blog/blog-footer-02.jpg",
        targetAudience: "Product teams, marketing heads, early-stage SaaS",
        duration: "2–3 weeks",
        price: "₹80,000–1.2 Lakhs"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our Fixed Scope Packs",
    items: [
      {
        question: "Can I customize a Pack?",
        answer: "Yes! We can tweak scope, add/remove features, or combine two packs."
      },
      {
        question: "What if I need something ongoing?",
        answer: "You can transition into a monthly Pod after your pack is delivered—no disruption."
      },
      {
        question: "What if I don't like the output?",
        answer: "We follow a milestone-based approach: You'll get early previews, can suggest changes, and only approve the next phase after you're satisfied."
      },
      {
        question: "Do I get the code and IP?",
        answer: "100%. All code is handed over, along with documentation and deployment access."
      }
    ]
  },

  testimonials: {
    title: "What Customers Are Saying",
    items: [
      {
        name: "Jackie Sanders",
        role: "Content Writer",
        content: "Their packs are incredibly efficient—no surprises, just solid results. We launched our MVP and onboarded real users in 6 weeks.",
        image: "/assets/testimonials/author-01.jpg"
      },
      {
        name: "Jane Doe",
        role: "Founder",
        content: "We just needed a chatbot. They gave us exactly that—in 10 days. No bloated proposal, just delivery.",
        image: "/assets/testimonials/author-02.jpg"
      }
    ]
  },

  cta: {
    title: "Take the Shortcut to Shipping",
    description: "Don't waste weeks trying to figure out what team to hire. Choose a Pack, and we'll get it done.",
    buttonText: "Book a Free Scope Call",
    email: "hello@novapod.ai",
    downloadLink: "/contact"
  }
}; 