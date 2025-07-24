export const checkoutFormData = {
  title: "Checkout Information",
  subtitle: "Please provide your details to complete your order.",
  billingSection: {
    title: "Billing Information",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: true,
        placeholder: "Enter your first name"
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
        placeholder: "Enter your last name"
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter your email address"
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false,
        placeholder: "Enter your phone number"
      },
      {
        name: "company",
        label: "Company Name",
        type: "text",
        required: false,
        placeholder: "Enter your company name"
      },
      {
        name: "address",
        label: "Address",
        type: "textarea",
        required: true,
        placeholder: "Enter your billing address"
      }
    ]
  },
  paymentSection: {
    title: "Payment Information",
    description: "Your payment information is secure and encrypted.",
    paymentMethods: [
      {
        id: "credit-card",
        name: "Credit Card",
        description: "Visa, Mastercard, American Express",
        icon: "💳"
      },
      {
        id: "bank-transfer",
        name: "Bank Transfer",
        description: "Direct bank transfer",
        icon: "🏦"
      },
      {
        id: "upi",
        name: "UPI",
        description: "Unified Payment Interface",
        icon: "📱"
      }
    ]
  },
  termsSection: {
    title: "Terms & Conditions",
    description: "By completing this order, you agree to our terms of service and privacy policy.",
    links: [
      { text: "Terms of Service", url: "/assets/Terms & Conditions.pdf", target: "_blank" },
      { text: "Privacy Policy", url: "/assets/Privacy Policy.pdf", target: "_blank" },
      { text: "Refund Policy", url: "/refund" }
    ]
  },
  submitButton: {
    text: "Complete Order",
    loadingText: "Processing..."
  },
  successMessage: "Order completed successfully! You'll receive a confirmation email shortly.",
  errorMessage: "Something went wrong. Please try again."
}; 