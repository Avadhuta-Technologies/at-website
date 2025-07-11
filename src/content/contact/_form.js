export const contactFormData = {
  title: "Send us a Message",
  subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter your email address"
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      required: false,
      placeholder: "Enter your company name"
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: false,
      placeholder: "Enter your phone number"
    },
    {
      name: "project",
      label: "Project Type",
      type: "select",
      required: true,
      options: [
        "Web Development",
        "Mobile App Development",
        "AI/ML Integration",
        "E-commerce Solution",
        "AR/VR Experience",
        "DevOps & Infrastructure",
        "Other"
      ]
    },
    {
      name: "budget",
      label: "Budget Range",
      type: "select",
      required: true,
      options: [
        "Under $10K",
        "$10K - $25K",
        "$25K - $50K",
        "$50K - $100K",
        "$100K+",
        "Not sure"
      ]
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "select",
      required: true,
      options: [
        "ASAP",
        "1-2 months",
        "3-6 months",
        "6+ months",
        "Not sure"
      ]
    },
    {
      name: "message",
      label: "Project Details",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your project requirements, goals, and any specific features you need..."
    }
  ],
  submitButton: {
    text: "Send Message",
    loadingText: "Sending..."
  },
  successMessage: "Thank you! We'll get back to you within 24 hours.",
  errorMessage: "Something went wrong. Please try again."
}; 