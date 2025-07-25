export const caseStudiesData = {
  hero: {
    title: "Case Studies",
    subtitle: "Real solutions, real results",
    description: "Explore our portfolio of successful projects across industries, from ecommerce platforms to AI-powered tools and mobile applications."
  },
  caseStudies: [ 
    {
      id: "reach-ecommerce-store",
      title: "US based leading ecommerce store",
      industry: "Ecommerce",
      engagementType: "Full Product Build with Ongoing Support",
      duration: "12 months + ongoing support",
      teamComposition: "1 PM, 3 Frontend Devs, 2 Backend Devs, 1 QA, 1 DevOps",
      techStack: ["VueJS", "VueStorefront", "Tailwind CSS", "Node.js", "Shopware", "GraphQL"],
      problemStatement: "The client needed a robust ecommerce storefront integrated with telecom backend systems to quickly launch localized stores in different countries selling data plans and devices together.",
      ourApproach: "We developed a modular ecommerce platform with a decoupled frontend, Ecommerce backend integration with Shopware, and integration with data plan workflows.",
      solutionHighlights: [
        "Integration of data plan and device purchase in the ecommerce flows",
        "Utilizing Shopware as a headless ecommerce backend",
        "GraphQL APIs for flexibility",
        "Multi-tenant storefront architecture",
        "Integration with 3rd party services",
        "Card payment fraud detection",
        "Device finance",
        "Device trade-in",
        "Shipment service and charges calculation",
        "Payment service",
        "Custom fulfilment journeys",
        "Multiple device vendors integration",
        "Device protection service",
        "Device insurance service",
        "Integration with Shopify",
        "Multiple customer deployments",
        "Single sign-on with existing systems"
      ],
      impact: [
        "Successfully deployed to more than 10 customers",
        "Reduced integration effort by 40%"
      ],
      testimonial: {
        quote: "Avadhuta's technical expertise and agility helped us scale our ecommerce presence globally. Their team felt like an extension of ours.",
        author: "Client"
      },
      callToAction: "Looking to launch or scale your ecommerce store? Let's build it together.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Ecommerce",
      badgeColor: "blue"
    },
    {
      id: "3d-interior-furnishing-tool",
      title: "3D Interior Furnishing Tool",
      industry: "Interior Design",
      engagementType: "Full product development",
      duration: "6 months",
      teamComposition: "1 PM, 1 3D Developer, 1 Frontend Dev, 2 backend developers",
      techStack: ["ReactJS", "Tailwind CSS", "Three.js", "Firebase"],
      problemStatement: "An interior design service provider, faced long customer conversion cycles due to difficulty in capturing client preferences and aligning them quickly with design concepts.",
      ourApproach: "We developed a browser-based 3D interior design tool using ThreeJS that allows customers to create and customize 2D floor plans and instantly visualize them in 3D. The tool supports furnishing with a wide range of items and enables immersive design walkthroughs via AR headsets like HoloLens and Meta Quest 3. This significantly streamlined the design finalization process, improving client-architect collaboration and reducing turnaround time.",
      solutionHighlights: [
        "Drag-and-drop 3D interior furnisher",
        "Material and properties configurations for all objects",
        "Easy color and properties configurations for walls",
        "Material & lighting adjustments",
        "2D renderer for easy sharing",
        "2D floor plan to 3D visualizer",
        "Instant BOQ",
        "Visualizing the scene on AR headsets"
      ],
      impact: [
        "Increased lead conversion by 60%",
        "Reduced in-person consultations by 50%",
        "Enhanced customer experience"
      ],
      testimonial: {
        quote: "With the 3D designer tool, our sales team is now closing deals faster and more efficiently. Customers love visual freedom.",
        author: "Client"
      },
      callToAction: "Need an interactive 3D experience for your customers? We've got you covered.",
      image: "/images/case-studies/placeholder.svg",
      badge: "3D Design",
      badgeColor: "purple"
    },
    {
      id: "ai-room-interiors-generator",
      title: "AI Room Interiors Generator",
      industry: "Interior Design",
      engagementType: "AI MVP Build",
      duration: "2 months",
      teamComposition: "1 PM, 1 AI Engineer, 1 Full Stack Dev",
      techStack: ["ReactJS", "Tailwind CSS", "Node.js", "OpenAI", "AWS"],
      problemStatement: "The client wanted to let users upload room images and generate styled interiors using AI and build moodbooks to share with the Architect.",
      ourApproach: "We built a prompt-based AI workflow that allowed users to select styles and generate high-quality mockups. They could easily share the resulting moodbook with the Architects.",
      solutionHighlights: [
        "AI-powered image generation, with perfect room structural recognition",
        "Style-driven variants",
        "Moodbook generation with favorite styles"
      ],
      impact: [
        "Increased design approval rate by 70%",
        "Customer satisfaction increased 4x"
      ],
      testimonial: {
        quote: "This AI tool has transformed how we pitch designs to clients—quick, accurate, and visually impressive.",
        author: "Client"
      },
      callToAction: "Want to bring AI into your design workflow? Let us help you lead the change.",
      image: "/images/case-studies/placeholder.svg",
      badge: "AI",
      badgeColor: "green"
    },
    {
      id: "rinext-regulatory-intelligence",
      title: "RINext – Regulatory Intelligence Platform",
      industry: "Pharmacovigilance",
      engagementType: "MVP Development + AI Integration",
      duration: "3 months",
      teamComposition: "1 PM, 1 AI Engineers, 1 Frontend Dev, 1 Backend Dev",
      techStack: ["ReactJS", "Ant framework", "NodeJS", "NestJS framework", "Postgres", "ChromaDB", "Redis", "AWS EC2", "RDS"],
      problemStatement: "Pharmacovigilance teams struggle to keep up with the growing volume of regulatory updates from global health authorities. Manually tracking, analyzing, and assessing the impact of each update is time-consuming, error-prone, and inefficient.",
      ourApproach: "RINext automates regulatory monitoring by aggregating updates from international regulatory bodies and classifying them as relevant or not based on a company's products and processes. The tool generates concise AI-driven summaries, highlights potential impact, and suggests affected documents or SOPs to update. This enables faster, more accurate compliance and supports timely decision-making, helping companies consistently meet regulatory requirements with less manual effort.",
      solutionHighlights: [
        "Document summarization using LLM",
        "Priority scoring with LLM",
        "Impact analysis",
        "SOP analysis and modification suggestion",
        "Admin dashboards for impact review"
      ],
      impact: [
        "Reduced update review time to hours",
        "Increase efficiency of employees",
        "Reduced error rate to 0"
      ],
      testimonial: {
        quote: "Avadhuta helped us turn a regulatory burden into a product advantage. Their AI solution is the heart of our platform.",
        author: "Client"
      },
      callToAction: "Working with complex regulatory workflows? We can help you simplify it with AI.",
      image: "/images/case-studies/placeholder.svg",
      badge: "AI/ML",
      badgeColor: "indigo"
    },
    {
      id: "reconcile-updates-tool",
      title: "Reconcile Updates Tool",
      industry: "Pharmacovigilance",
      engagementType: "Tool Modernization",
      duration: "3 months",
      teamComposition: "1 PM, 1 Backend Dev, 1 Frontend Dev",
      techStack: ["ReactJS", "Node.js", "Postgres", "AWS EC2", "RDS"],
      problemStatement: "Pharmacovigilance teams often receive Individual Case Safety Reports (ICSRs), safety updates, or compliance notifications from partners through email. Manually reviewing, validating, and reconciling this data against internal safety systems is time-consuming, prone to oversight, and delays regulatory compliance.",
      ourApproach: "Reconcile automates the ingestion and parsing of partner emails, extracts key safety data, and cross-verifies it against internal records to identify discrepancies or missing information. It provides a clear triage workflow for efficient resolution, reducing manual effort and ensuring timely and accurate case management. This helps pharmacovigilance teams maintain audit readiness and meet regulatory timelines with confidence.",
      solutionHighlights: [
        "Discrepancy detection",
        "Auto-reconciliation",
        "Custom reporting"
      ],
      impact: [
        "Saved 30+ hours per user monthly",
        "Improved compliance audit readiness"
      ],
      testimonial: {
        quote: "The reconciliation tool from Avadhuta is now core to our QA workflows—simple, effective, and reliable.",
        author: "Client"
      },
      callToAction: "Manual reconciliation slowing you down? Let us automate it.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Automation",
      badgeColor: "teal"
    },
    {
      id: "as2-gateway-secure-document-exchange",
      title: "AS2 Gateway – Secure Document Exchange",
      industry: "Pharmacovigilance",
      engagementType: "Custom Tool Development + Protocol Integration",
      duration: "3 months",
      teamComposition: "1 Project Manager, 2 Backend Developers, 1 Frontend Developer, 1 QA Engineer",
      techStack: ["VueJS", "Bootstrap", "NodeJS", "ExpressJS", "OpenAS2", "MySQL", "AWS EC2", "RDS"],
      problemStatement: "Pharma companies needed a secure and compliant way to exchange critical documents—such as safety reports and regulatory submissions—with partners and health authorities. Manual exchanges or non-standard protocols introduced compliance risks and security concerns.",
      ourApproach: "We designed and implemented a secure, scalable AS2 Gateway using industry protocols to ensure encrypted, authenticated document exchange. We integrated OpenAS2 into a custom NodeJS backend and built a user-friendly interface to monitor, log, and control transfers.",
      solutionHighlights: [
        "Fully compliant AS2 implementation with digital signature and encryption",
        "Real-time dashboard to track incoming/outgoing documents",
        "Retry and error handling mechanisms for delivery failures",
        "Partner configuration management via admin UI",
        "Audit logging and status tracking for all transfers",
        "Deployed securely on AWS with RDS-backed persistence"
      ],
      impact: [
        "Achieved full compliance with global regulatory data transfer standards (AS2)",
        "Reduced manual intervention by 80% for partner exchanges",
        "Enabled 24/7 document transmission reliability with real-time monitoring",
        "Improved audit readiness through complete transaction logs"
      ],
      testimonial: {
        quote: "Avadhuta delivered a rock-solid AS2 solution that exceeded our expectations. It's now a critical part of our compliance infrastructure. Their team was technically sound and always responsive.",
        author: "Client"
      },
      callToAction: "Need to build a secure data exchange gateway for regulatory or enterprise compliance? Let's design it together.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Security",
      badgeColor: "orange"
    },
    {
      id: "karbonpoints-refurbished-electronics",
      title: "Karbonpoints – Refurbished Electronics Ecommerce & Trade-In Platform",
      industry: "Ecommerce",
      engagementType: "Full Product Build (Ecommerce + Device Diagnostic App)",
      duration: "5 months",
      teamComposition: "1 PM, 2 Frontend Devs, 2 Backend Devs, 1 QA Engineer",
      techStack: ["ReactJS", "Material UI", "NodeJS", "FeathersJS", "Saleor (Ecommerce)", "Postgres", "AWS EC2", "S3", "RDS"],
      problemStatement: "The client wanted to launch an online store to sell refurbished electronics and introduce a device exchange program to increase customer acquisition and stock sourcing. They needed a seamless ecommerce platform and a mobile diagnostic tool that could assess a device's health and calculate a real-time exchange value—without requiring users to install an app.",
      ourApproach: "We designed and developed two core modules: A modern ecommerce store using Saleor, tailored to the refurbished goods market with product filtering, reviews, and exchange discount flows. A mobile-first, browser-based diagnostic web app that assesses device hardware capabilities like camera, sensors, battery health, and performance, and generates a score with an exchange value. Our team ensured both systems worked seamlessly together, supported by a unified backend and cloud deployment for scale and security.",
      solutionHighlights: [
        "Ecommerce store with Saleor + custom ReactJS storefront",
        "App-less device diagnostic tool accessible via a shared link",
        "Real-time evaluation of 15+ device hardware parameters",
        "Dynamic pricing engine based on diagnostic results",
        "Integration with product catalog, cart, and checkout for exchange-based discounts",
        "Deployed on AWS with scalable infrastructure and S3-based media handling"
      ],
      impact: [
        "Increased user trust and trade-ins by 65% via instant diagnostics",
        "Boosted ecommerce conversion rate by 40% with exchange discounts",
        "Reduced return/refund rate due to transparent device evaluations",
        "Enabled the business to handle 1,000+ concurrent users at launch"
      ],
      testimonial: {
        quote: "Avadhuta helped us create not just an ecommerce site, but a smart platform that builds trust with users. The diagnostic tool was a game-changer. Their team delivered a stable and intuitive product that helped us scale fast.",
        author: "Client"
      },
      callToAction: "Want to build an ecommerce experience enhanced with smart tools and dynamic pricing? Let's craft it together.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Ecommerce",
      badgeColor: "blue"
    },
    {
      id: "jamlist-marketplace-artisans",
      title: "Jamlist – Marketplace for Artisans and Handmade Goods",
      industry: "Ecommerce",
      engagementType: "Full Custom Marketplace Build",
      duration: "5 months",
      teamComposition: "1 PM, 2 Backend Devs, 2 Frontend Devs, 1 UI/UX Designer, 1 QA Engineer",
      techStack: ["Angular", "Material Design", "Java (Play Framework)", "MySQL", "AWS EC2", "S3", "RDS"],
      problemStatement: "A visionary marketplace platform aimed to empower artisans by providing a digital marketplace where they could sell handmade and curated products. Existing ecommerce solutions lacked the custom workflows and community features that were envisioned, such as artisan profiles, curation tools, and seller-specific dashboards. A custom platform was essential for their brand positioning.",
      ourApproach: "We built the platform from the ground up—designing a scalable architecture using Java Play Framework for backend and Angular with Material Design for a fast, responsive frontend. Our team focused on creating an intuitive seller experience and a rich browsing and purchasing journey for buyers. We also optimized the backend for artisan-specific workflows like product approval, customization, and batch inventory handling.",
      solutionHighlights: [
        "Custom-built marketplace with artisan onboarding",
        "Seller dashboards with inventory, orders, and profile management",
        "Secure buyer-seller messaging and order tracking",
        "Curated home page and dynamic category pages",
        "SEO-optimized, mobile-first responsive design",
        "Scalable deployment using AWS EC2 and S3 for media storage"
      ],
      impact: [
        "Onboarded 300+ artisans within 2 months of launch",
        "Increased product catalog to over 5,000 SKUs in 6 months",
        "Achieved 35% repeat buyer rate through curated, high-quality experiences",
        "Reduced seller onboarding time by 50% with intuitive UI and support tools"
      ],
      testimonial: {
        quote: "We came to Avadhuta with a vision, and they brought it to life. The marketplace they delivered isn't just functional—it's crafted with care. Our artisans love using it, and so do our customers.",
        author: "Client"
      },
      callToAction: "Need a niche marketplace tailored to your audience and brand? Let's build something meaningful together.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Marketplace",
      badgeColor: "purple"
    },
    {
      id: "bhava-ayurveda-ecommerce",
      title: "Bhava Ayurveda – Ayurvedic Product Ecommerce Store",
      industry: "Ecommerce",
      engagementType: "Ecommerce Store Development (Woocommerce)",
      duration: "2 months",
      teamComposition: "1 PM, 1 WordPress/WooCommerce Dev, 1 UI Designer, 1 QA Engineer",
      techStack: ["WooCommerce (Custom Theme)", "MySQL", "AWS EC2", "S3", "RDS"],
      problemStatement: "A growing Ayurvedic wellness brand, a growing Ayurvedic brand, needed an online store to reach a wider customer base and simplify order management. Their offline business was thriving, but they lacked a digital storefront that aligned with their brand aesthetics and could scale with their growing product line. Off-the-shelf themes lacked the authenticity and trust needed for wellness products.",
      ourApproach: "We designed and developed a fully customized WooCommerce store with a clean, Ayurvedic-inspired design. The theme was built from scratch to reflect the brand's natural and holistic identity, optimized for both speed and mobile devices. We also configured secure payment gateways, product categorization by wellness use-case, and intuitive navigation to enhance discoverability and conversions.",
      solutionHighlights: [
        "Custom WooCommerce theme designed to reflect Ayurvedic principles",
        "Category-based product discovery (e.g., immunity, digestion, skincare)",
        "Integration with payment gateways and order tracking",
        "Lightweight frontend optimized for mobile users",
        "Deployed on AWS with S3-based media handling and secure MySQL backend",
        "SEO-optimized architecture for organic search visibility"
      ],
      impact: [
        "Online sales launched within 60 days of project start",
        "Increased reach to pan-India audience through digital channel",
        "50% of early orders came from returning offline customers",
        "Improved brand trust and perception through a professionally designed store"
      ],
      testimonial: {
        quote: "Avadhuta helped us bring our Ayurvedic brand online with authenticity and ease. The store looks beautiful, works flawlessly, and has already started driving real results. We're grateful for their thoughtful approach.",
        author: "Client"
      },
      callToAction: "Have a traditional or wellness brand ready to go digital? Let's craft a storefront that reflects your values and scales with your vision.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Ecommerce",
      badgeColor: "green"
    },
    {
      id: "digitalgemba-manufacturing",
      title: "DigitalGemba – Smart Shop Floor Management System",
      industry: "Manufacturing",
      engagementType: "MVP Design & Development (Industrial SaaS)",
      duration: "4 months",
      teamComposition: "1 PM, 2 Backend Devs, 1 Frontend Dev, 1 QA Engineer",
      techStack: ["ReactJS", "Ant Design", "NodeJS", "FeathersJS", "Postgres", "AWS EC2", "RDS"],
      problemStatement: "Manufacturing units face significant inefficiencies due to paper-based or semi-digital shop floor processes. Key tasks like Bill of Materials (BOM) management, gauge calibration, inspection (SPC), and maintenance were fragmented and error-prone. This manufacturing technology company aimed to centralize and automate these processes into one intuitive platform tailored for the shop floor.",
      ourApproach: "We partnered with manufacturing domain experts to understand operational workflows and built an MVP that digitizes the most critical processes. Our team architected a modular backend using FeathersJS and a component-rich frontend using React + Ant Design, optimized for touch screens and low-latency shop floor usage.",
      solutionHighlights: [
        "BOM management module with versioning and real-time updates",
        "Gauge calibration & preventive maintenance tracking with alerts",
        "Statistical Process Control (SPC) inspections and visual dashboards",
        "User roles for operators, supervisors, and auditors",
        "Offline-first capabilities with secure data sync",
        "Scalable architecture deployed on AWS"
      ],
      impact: [
        "Reduced calibration delays by 80% through proactive alerting",
        "Increased inspection throughput by 2x",
        "Standardized workflows across 3 production lines within pilot phase",
        "Built a strong foundation for enterprise adoption of the product"
      ],
      testimonial: {
        quote: "With Avadhuta's help, we brought our vision for DigitalGemba to life. Their team not only built the product fast—they understood the complexity of manufacturing and translated it into a highly usable platform. It's already showing results on the floor.",
        author: "Client"
      },
      callToAction: "Want to digitize your factory floor or build an industrial SaaS platform? Let's bring your vision into production.",
      image: "/images/case-studies/placeholder.svg",
      badge: "SaaS",
      badgeColor: "indigo"
    },
    {
      id: "storytimeowls-storytelling-app",
      title: "StorytimeOwls – Personalized Storytelling App for Children",
      industry: "Mobile Apps / EdTech / Parenting",
      engagementType: "UX/UI Revamp + Feature Development & App Release",
      duration: "3 months",
      teamComposition: "1 PM, 1 UI/UX Designer, 1 React Native Dev, 1 Backend Dev",
      techStack: ["React Native", "NodeJS", "ExpressJS", "MySQL"],
      problemStatement: "A children's entertainment platform aimed to provide children with a deeply personal storytelling experience—stories narrated in their own parent's or guardian's voice. However, the app's original design lacked intuitiveness, and feature limitations hindered usability and growth. A leading EdTech company partnered with Avadhuta to modernize the experience, enhance features, and prepare the product for release.",
      ourApproach: "We began with a UX audit of the existing app and then redesigned the experience to be child-friendly, emotionally resonant, and parent-guided. We introduced features such as voice recording, audio library management, bedtime scheduling, and offline playback. Our development ensured smooth performance across iOS and Android devices.",
      solutionHighlights: [
        "Revamped UX/UI with child-safe navigation and playful design",
        "Custom story library with parental voice recordings",
        "Audio recording, editing, and tagging capabilities",
        "Scheduled bedtime reminders and offline story playback",
        "Performance-optimized React Native mobile app",
        "Secure backend to manage users, stories, and metadata"
      ],
      impact: [
        "Increased user engagement time by 2.5x",
        "Improved app store ratings after redesign",
        "Strengthened emotional connection between parents and children through voice storytelling",
        "Enabled rollout in schools and parenting communities"
      ],
      testimonial: {
        quote: "Avadhuta helped us transform StorytimeOwls into the magical experience we always dreamed it could be. The new design is intuitive, beautiful, and most importantly—emotionally powerful. Parents love it, and kids can't get enough of it.",
        author: "Client"
      },
      callToAction: "Want to build a mobile experience that's personal, playful, and meaningful? We can help bring it to life.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Mobile App",
      badgeColor: "pink"
    },
    {
      id: "ai-recommender-shopify-app",
      title: "AI Recommender Shopify App – Smart Product Discovery Engine",
      industry: "Ecommerce",
      engagementType: "Custom Shopify App Development",
      duration: "2.5 months",
      teamComposition: "1 PM, 1 Shopify App Developer, 1 Backend Dev, 1 QA Engineer",
      techStack: ["Shopify App (Liquid, JS, CSS)", "NodeJS", "ExpressJS", "MySQL", "AWS EC2"],
      problemStatement: "A leading e-commerce brand wanted to enhance product discovery on their Shopify store using an AI-based recommendation system they had built in-house. However, integrating the proprietary AI engine with Shopify's ecosystem required a custom app that could dynamically suggest products based on user behavior, product metadata, and purchase trends.",
      ourApproach: "We developed a lightweight, efficient Shopify app that communicates with PhyElements' AI engine via secure APIs. The app was designed to integrate seamlessly into Shopify themes and inject personalized product recommendations at various points—product pages, carts, and even post-checkout. We ensured minimal load impact and full theme compatibility.",
      solutionHighlights: [
        "Custom Shopify app embedded using Liquid and JavaScript",
        "Integration with proprietary AI algorithm via secure backend APIs",
        "Smart placement of recommendations (cross-sell, upsell, 'frequently bought together')",
        "Customizable widget styling to match brand themes",
        "Performance-optimized backend hosted on AWS EC2",
        "Admin dashboard for toggling recommendation logic and analytics"
      ],
      impact: [
        "Increased average order value (AOV) by 22% within the first month",
        "Improved product visibility and engagement across long-tail inventory",
        "Delivered a plug-and-play recommendation layer for Shopify merchants",
        "Enabled internal AI team to easily iterate recommendation logic without touching frontend code"
      ],
      testimonial: {
        quote: "Avadhuta built a Shopify app that turned our AI algorithm into a business advantage. The recommendations are smart, and the integration feels native. This is exactly what we needed to stand out in the crowded ecommerce space.",
        author: "Client"
      },
      callToAction: "Have a proprietary model or algorithm you want to turn into a product? We'll help you build, integrate, and scale it on the platforms you need.",
      image: "/images/case-studies/placeholder.svg",
      badge: "AI/ML",
      badgeColor: "green"
    },
    {
      id: "orderlikho-order-delivery-management",
      title: "OrderLikho – All-in-One Order & Delivery Management App",
      industry: "Mobile Apps / SME Enablement",
      engagementType: "Mobile App Development + Deployment to App Stores",
      duration: "3.5 months",
      teamComposition: "1 PM, 2 React Native Developers, 1 Backend Dev, 1 QA Engineer",
      techStack: ["React Native", "NodeJS", "FeathersJS", "MySQL", "SQLite", "AWS EC2", "RDS", "S3"],
      problemStatement: "Small and medium businesses across sectors often struggle with managing orders, deliveries, customer tracking, and payments—usually relying on spreadsheets or fragmented tools. A technology startup envisioned a simple yet powerful mobile solution that could streamline these processes in a user-friendly format accessible to non-tech-savvy users.",
      ourApproach: "We built a cross-platform mobile app using React Native with a clean, intuitive interface tailored for SMEs. The backend was designed to be scalable and secure, with MySQL for online use and SQLite for offline sync. Our team handled the full app development lifecycle, including play store and app store submissions.",
      solutionHighlights: [
        "Cross-platform mobile app (Android & iOS) for order, customer, and payment tracking",
        "Offline-first capability using SQLite with seamless sync to MySQL",
        "Role-based access control for business owners and delivery staff",
        "Real-time order updates and delivery status tracking",
        "Reports and summaries for daily transactions",
        "Deployed with scalable AWS infrastructure and push notification support",
        "Full app store and play store deployment with branding and documentation"
      ],
      impact: [
        "Enabled 100+ SMEs to digitize operations within 2 months of launch",
        "Reduced manual order errors by 70%",
        "Improved cashflow visibility with real-time payment tracking",
        "Received 4.7+ star ratings on both app stores for ease of use"
      ],
      testimonial: {
        quote: "Avadhuta helped us transform our vision into a working product that's already solving real problems for small businesses. The app is clean, fast, and incredibly intuitive—even for first-time users. Their attention to detail during deployment made the process seamless.",
        author: "Client"
      },
      callToAction: "Looking to build a mobile app that empowers your users and solves real business problems? Let's bring it to life—fast and beautifully.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Mobile App",
      badgeColor: "blue"
    },
    {
      id: "pincode-deliverability-checker",
      title: "Pincode Deliverability Checker – Shopify App for Fresh Produce Brands",
      industry: "Ecommerce (Fresh Food / Direct-to-Consumer)",
      engagementType: "Custom Shopify App Development",
      duration: "2 months",
      teamComposition: "1 PM, 1 Shopify App Developer, 1 Backend Dev, 1 QA Engineer",
      techStack: ["Shopify App (Liquid, JS, CSS)", "NodeJS", "ExpressJS", "MySQL", "AWS EC2"],
      problemStatement: "A premium farm fresh produce brand, delivers fresh fruits and vegetables using their own logistics system. Standard Shopify shipping rules couldn't accommodate the granular control they needed—such as restricting delivery to specific pincodes, applying different rules for leafy greens vs. perishables, and showing availability dynamically on product and cart pages.",
      ourApproach: "We built a custom Shopify app that allows the brand to configure delivery rules by pincode and product type. Our team ensured tight Shopify theme integration and minimal performance impact. The app provides dynamic deliverability checks at multiple customer touchpoints—product page, cart, and checkout—based on backend rules managed via a user-friendly admin panel.",
      solutionHighlights: [
        "Shopify app embedded using Liquid & JavaScript",
        "Admin panel to define product categories and pincode-specific availability",
        "Real-time pincode check on product, cart, and checkout pages",
        "Support for exception rules (e.g., next-day delivery zones, product exclusions)",
        "Backend APIs secured and hosted on AWS EC2",
        "Lightweight widget styling that adapts to store themes"
      ],
      impact: [
        "Reduced failed delivery attempts by 85%",
        "Improved customer experience with instant availability feedback",
        "Enabled precise control over SKU and location-specific logistics",
        "Contributed to a 20% increase in successful same-day deliveries"
      ],
      testimonial: {
        quote: "Avadhuta helped us solve a critical logistics challenge with a solution that's tightly integrated and super easy to manage. The pincode checker app reduced order cancellations and gave our customers a much better buying experience.",
        author: "Client"
      },
      callToAction: "Need custom delivery logic on Shopify that matches your real-world logistics? Let's build you a smart, scalable app.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Ecommerce",
      badgeColor: "teal"
    },
    {
      id: "relive-tiktok-style-video-platform",
      title: "Relive – TikTok-Style Short Video Platform",
      industry: "Social Apps / Media",
      engagementType: "Full App Development + Deployment to App Stores",
      duration: "2 months",
      teamComposition: "1 PM, 2 React Native Developers, 2 Backend Devs, 1 UI/UX Designer, 1 QA Engineer",
      techStack: ["React Native", "NodeJS", "FeathersJS", "StreamIO", "Firebase Auth", "MySQL", "SQLite", "AWS EC2", "RDS", "S3"],
      problemStatement: "In the wake of TikTok's ban in India, A prominent media-tech company Vision saw a timely opportunity to launch a short video-sharing platform tailored to Indian users. The goal was to recreate the TikTok experience—video feed, likes, comments, user following, and trending content—in record time, with scalability and native performance.",
      ourApproach: "We executed the project on a rapid timeline, combining proven frameworks with custom logic. React Native enabled us to build for both Android and iOS simultaneously. We integrated StreamIO for real-time feeds, comments, and activity tracking, while using Firebase Auth for quick and secure user onboarding. The backend, built with FeathersJS, supported scalable video management, content moderation, and notifications.",
      solutionHighlights: [
        "Infinite scroll short-video feed with like/comment/share functionality",
        "Real-time activity feed powered by StreamIO",
        "Firebase-based user login with OTP & social login options",
        "Profile pages with followers/following management",
        "Video upload with server-side compression and S3 storage",
        "Push notifications and trending content algorithm",
        "Native app performance, deployed on both Play Store and App Store"
      ],
      impact: [
        "Launched MVP in just 60 days",
        "50,000+ downloads in the first 3 weeks post-launch",
        "Achieved 4.6★+ user rating on app stores",
        "Enabled SR HiTech to enter the influencer and creator economy space quickly",
        "Video engagement metrics rivalled larger platforms in targeted demographics"
      ],
      testimonial: {
        quote: "Avadhuta helped us bring our idea to life faster than we imagined. The app looks and feels like a top-tier product. Their team delivered with speed, precision, and a clear understanding of what a social-first mobile experience needs.",
        author: "Client"
      },
      callToAction: "Looking to launch a fast-moving consumer app or enter the social media space? Let's get you there faster, without compromise.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Social Media",
      badgeColor: "pink"
    },
    {
      id: "vgas-gas-cylinder-booking",
      title: "VGas – Aggregated Gas Cylinder Booking Platform",
      industry: "Mobile Apps / Utility & Delivery",
      engagementType: "Mobile App Development (Aggregator Platform)",
      duration: "4 months",
      teamComposition: "1 PM, 2 React Native Devs, 1 Django Backend Dev, 1 QA Engineer",
      techStack: ["React Native", "Python (Django)", "MySQL", "AWS EC2", "RDS", "S3"],
      problemStatement: "Gas cylinder agencies often operate in silos, offering little transparency on pricing or availability—especially for commercial users. A leading gas distribution company wanted to wanted to create a unified platform where users could compare prices from multiple gas agencies and book cylinders with doorstep delivery and integrated payment options.",
      ourApproach: "We built a scalable mobile-first platform using React Native for cross-platform delivery and Django for backend reliability and speed. The app connects users to nearby commercial gas providers, shows real-time pricing and availability, and enables end-to-end order management—including booking, tracking, delivery coordination, and payment.",
      solutionHighlights: [
        "Aggregated listings from multiple gas agencies with real-time quotes",
        "Smart filters for gas type, delivery time, and vendor ratings",
        "In-app booking, payment gateway integration, and delivery tracking",
        "Admin portal for agencies to manage inventory and pricing",
        "Notification system for order updates and delivery ETA",
        "Scalable backend hosted on AWS EC2 and RDS with S3 for document/media uploads"
      ],
      impact: [
        "Reduced average gas procurement time by 60% for commercial users",
        "Increased price transparency and competition across vendors",
        "Enabled smaller agencies to reach a broader market",
        "Delivered a reliable app experience for both Android and iOS with minimal training required"
      ],
      testimonial: {
        quote: "We were trying to solve a real-world problem, and Avadhuta brought it to life with incredible efficiency. Their technical expertise in mobile platforms and backend systems ensured we could scale confidently from day one.",
        author: "Client"
      },
      callToAction: "Want to disrupt a traditional industry with a seamless digital platform? Let's design the tech that powers it.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Mobile App",
      badgeColor: "orange"
    },
    {
      id: "brokerage-manager-saas-platform",
      title: "Brokerage Manager – SaaS Platform for Commodity Brokers",
      industry: "SaaS / Commodity Trading",
      engagementType: "Web Application Development & Productization",
      duration: "3.5 months",
      teamComposition: "1 PM, 2 Full Stack Developers, 1 QA Engineer",
      techStack: ["Angular", "MaterialJS", "NodeJS (Lambda Functions)", "MySQL", "AWS Lambda", "API Gateway", "S3", "SNS"],
      problemStatement: "A leading commodity brokerage firm, a key player in edible oil brokerage, faced challenges in tracking orders, calculating brokerage, and managing the flow of transactions between buyers and sellers. Existing tools were fragmented and lacked the automation needed for reminders, real-time trade volume insights, and transparent financial reporting. They also wanted to productize the solution for broader industry use.",
      ourApproach: "We developed Brokerage Manager, a SaaS platform tailored for brokerage firms in the commodities sector. Built using a serverless AWS architecture for scale and cost-efficiency, the app streamlines brokerage workflows—tracking buyers, sellers, trade volumes, delivery statuses, and commissions. The UI was crafted to be clean and fast for high-frequency, daily users.",
      solutionHighlights: [
        "End-to-end buyer, seller, and transaction management",
        "Automated brokerage calculation with real-time profit dashboards",
        "Payment reminder system via SMS/Email using AWS SNS",
        "Delivery status tracking and invoicing integration",
        "Multi-user access with role-based permissions",
        "Launched as a multi-tenant SaaS product for brokerage firms",
        "Deployed on a scalable AWS serverless stack (Lambda, API Gateway, S3)"
      ],
      impact: [
        "Reduced brokerage calculation time by 90%",
        "Improved cashflow through timely payment reminders",
        "Gave brokers clear visibility on trade volumes and earnings",
        "Successfully onboarded other brokers—turning the internal tool into a SaaS product",
        "Zero infrastructure management with serverless backend"
      ],
      testimonial: {
        quote: "What started as a tool for our internal use is now a SaaS product used by other brokers. Avadhuta's deep understanding of our domain and their technical execution made that possible. We now run smoother, faster, and with more confidence.",
        author: "Client"
      },
      callToAction: "Looking to digitize your trading or brokerage workflows—or build a vertical SaaS platform? Let's make it happen, end-to-end.",
      image: "/images/case-studies/placeholder.svg",
      badge: "SaaS",
      badgeColor: "indigo"
    },
    {
      id: "timeless-beauty-secrets-ecommerce",
      title: "Timeless Beauty Secrets – Heritage-Inspired Beauty Ecommerce Experience",
      industry: "Ecommerce / Beauty & Wellness",
      engagementType: "Shopify Custom Storefront + App Integrations",
      duration: "2.5 months",
      teamComposition: "1 PM, 1 Shopify Theme Developer, 1 UI/UX Designer, 1 QA Engineer",
      techStack: ["Shopify Theme (Liquid)", "Shopify Apps", "Shopify APIs"],
      problemStatement: "A heritage-inspired beauty brand rooted in ancient beauty traditions, needed an online store that could reflect its heritage-driven narrative while enabling seamless ecommerce functionality. Standard Shopify themes couldn't capture their premium, culturally rich aesthetic or support their unique packaging system based on global civilizations. They also needed a custom fulfilment flow and loyalty program integration.",
      ourApproach: "We designed and developed a fully custom Shopify storefront that brought the brand's identity to life. Inspired by historical beauty rituals, we introduced a civilization-based product packaging UI that educated and engaged users. Custom Shopify apps were integrated to handle non-standard fulfilment rules and loyalty workflows, while maintaining a clean and performant frontend.",
      solutionHighlights: [
        "Bespoke Shopify theme crafted to mirror the elegance of the brand",
        "Product categorization and discovery based on ancient civilizations (e.g., Egyptian, Greek, Indian)",
        "Integrated Shopify apps for:",
        "Custom fulfilment flows (multi-location, batch-based shipping)",
        "Loyalty program management and user points tracking",
        "Optimized checkout journey with trust-building micro-interactions",
        "Fully responsive design, tested for performance and cross-device compatibility"
      ],
      impact: [
        "40% increase in average session duration post-launch",
        "Conversion rate improved by 25% within 2 months",
        "Repeat purchases rose by 3x after loyalty integration",
        "Brand storytelling and packaging experience received positive feedback from influencers and customers"
      ],
      testimonial: {
        quote: "The team at Avadhuta beautifully translated our brand story into a digital experience. Our ecommerce store now feels luxurious, intuitive, and uniquely us. Their attention to every interaction—from product discovery to post-purchase—is what made the difference.",
        author: "Client"
      },
      callToAction: "Have a brand story that deserves more than a template? Let's craft an ecommerce experience that inspires, engages, and converts.",
      image: "/images/case-studies/placeholder.svg",
      badge: "Ecommerce",
      badgeColor: "purple"
    },
    {
      id: "smart-visitor-management-system",
      title: "Smart Visitor Management System",
      industry: "SaaS / Workplace Automation / Facility Management",
      engagementType: "End-to-End Product Design & Development",
      duration: "3 months",
      teamComposition: "1 PM, 1 UX Designer, 2 Full Stack Developers, 1 QA Engineer",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "MySQL", "AWS EC2", "S3", "RDS"],
      problemStatement: "Modern offices, coworking spaces, and gated facilities often struggle with managing visitor entry, exit, and approval workflows securely and efficiently. Manual registers are outdated, and most digital tools lacked customization and real-time control. The client envisioned a sleek, easy-to-use digital visitor management solution that could replace traditional gate logs and enhance security.",
      ourApproach: "We designed and developed the app from the ground up with a mobile-friendly, tablet-first interface suitable for front desks and security kiosks. The system automates approvals, sends instant host notifications, and logs visitor details with photo and ID capture. It also provides real-time dashboards for admin teams to monitor all entries and exits across multiple locations.",
      solutionHighlights: [
        "Digital visitor check-in and check-out system",
        "Instant host notifications via email/SMS",
        "Pre-approval workflows for repeat or VIP visitors",
        "ID/photo capture and automatic badge generation",
        "Real-time dashboard for reception and admin staff",
        "Centralized log for audit/compliance review",
        "White-labeled and configurable for multiple organizations"
      ],
      impact: [
        "75% reduction in front desk wait time",
        "Improved security and traceability of visitor logs",
        "Increased visitor satisfaction with digital, paperless experience",
        "Scaled to manage 10,000+ monthly entries across client sites",
        "Enabled organizations to meet compliance and safety regulations with ease"
      ],
      testimonial: {
        quote: "iVisit has completely streamlined how we handle visitor entries. From security to user experience, it's miles ahead of traditional registers. Avadhuta delivered a modern, efficient, and scalable solution that just works.",
        author: "Client"
      },
      callToAction: "Want to digitize and automate your visitor experience? We can help you build a secure, modern, and branded solution—fast.",
      image: "/images/case-studies/placeholder.svg",
      badge: "SaaS",
      badgeColor: "blue"
    }
  ]
}; 