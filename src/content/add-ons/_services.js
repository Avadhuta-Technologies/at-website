import { catalogUtils } from '../catalog/_index.js';

export const addOnsServicesData = {
  title: "Available Add-on Services",
  subtitle: "Choose from our range of specialized services to enhance your pod's capabilities",
  services: [
    {
      id: "maintenance-support",
      title: "Maintenance & Support",
      description: "Keep your application running smoothly with 24/7 monitoring, bug fixes, and performance optimization.",
      price: "₹50K/month",
      priceUSD: "~$600/month",
      features: [
        "24/7 monitoring and alerting",
        "Bug fixes and updates",
        "Performance optimization",
        "Security patches and updates",
        "Backup and disaster recovery",
        "Monthly health reports"
      ],
      icon: "🛠️",
      color: "blue"
    },
    {
      id: "analytics-insights",
      title: "Analytics & Insights",
      description: "Make data-driven decisions with advanced analytics, custom dashboards, and actionable insights.",
      price: "₹30K/month",
      priceUSD: "~$360/month",
      features: [
        "Advanced analytics setup",
        "Custom dashboards",
        "Monthly performance reports",
        "A/B testing support",
        "User behavior analysis",
        "Conversion optimization"
      ],
      icon: "📊",
      color: "purple"
    },
    {
      id: "devops-infrastructure",
      title: "DevOps & Infrastructure",
      description: "Streamline your development process with CI/CD pipelines, cloud infrastructure, and auto-scaling.",
      price: "₹40K/month",
      priceUSD: "~$480/month",
      features: [
        "CI/CD pipeline setup",
        "Cloud infrastructure management",
        "Auto-scaling configuration",
        "Security hardening",
        "Monitoring and logging",
        "Disaster recovery planning"
      ],
      icon: "⚡",
      color: "green"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Create exceptional user experiences with professional design services and user research.",
      price: "₹35K/month",
      priceUSD: "~$420/month",
      features: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design implementation",
        "Design system creation",
        "Usability optimization"
      ],
      icon: "🎨",
      color: "pink"
    },
    {
      id: "qa-testing",
      title: "QA & Testing",
      description: "Ensure quality and reliability with comprehensive testing strategies and automated test suites.",
      price: "₹25K/month",
      priceUSD: "~$300/month",
      features: [
        "Automated testing setup",
        "Manual testing services",
        "Performance testing",
        "Security testing",
        "Cross-browser testing",
        "Mobile testing"
      ],
      icon: "🔍",
      color: "orange"
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Engage your audience with compelling content, copywriting, and marketing materials.",
      price: "₹20K/month",
      priceUSD: "~$240/month",
      features: [
        "Website copywriting",
        "Blog content creation",
        "Marketing materials",
        "SEO content optimization",
        "Social media content",
        "Email marketing copy"
      ],
      icon: "✍️",
      color: "teal"
    }
  ]
}; 