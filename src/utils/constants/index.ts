// Application-wide constants
export const APP_CONFIG = {
  NAME: 'Avadhuta Technologies',
  DOMAIN: 'avadhutatech.com',
  EMAIL: 'hello@avadhutatech.com',
  PHONE: '+91-XXXXXXXXXX',
  ADDRESS: 'India',
} as const;

// Navigation constants
export const NAVIGATION = {
  HOME: '/',
  PODS: '/explore-pods',
  PACKS: '/explore-packs',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
} as const;

// Badge color mappings
export const BADGE_COLORS = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-800 dark:text-blue-200',
    border: 'border-blue-200 dark:border-blue-700',
    gradient: 'from-blue-500 to-cyan-500',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-800 dark:text-purple-200',
    border: 'border-purple-200 dark:border-purple-700',
    gradient: 'from-purple-500 to-pink-500',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900',
    text: 'text-orange-800 dark:text-orange-200',
    border: 'border-orange-200 dark:border-orange-700',
    gradient: 'from-orange-500 to-red-500',
  },
  teal: {
    bg: 'bg-teal-100 dark:bg-teal-900',
    text: 'text-teal-800 dark:text-teal-200',
    border: 'border-teal-200 dark:border-teal-700',
    gradient: 'from-teal-500 to-green-500',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-800 dark:text-green-200',
    border: 'border-green-200 dark:border-green-700',
    gradient: 'from-green-500 to-emerald-500',
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-200 dark:border-indigo-700',
    gradient: 'from-indigo-500 to-purple-500',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900',
    text: 'text-cyan-800 dark:text-cyan-200',
    border: 'border-cyan-200 dark:border-cyan-700',
    gradient: 'from-cyan-500 to-blue-500',
  },
} as const;

// Animation delays
export const ANIMATION_DELAYS = {
  DELAY_200: 'animation-delay-200',
  DELAY_400: 'animation-delay-400',
  DELAY_600: 'animation-delay-600',
  DELAY_800: 'animation-delay-800',
  DELAY_1000: 'animation-delay-1000',
} as const;

// Common gradients
export const GRADIENTS = {
  PRIMARY: 'from-blue-500 via-purple-500 to-pink-500',
  SECONDARY: 'from-green-500 via-emerald-500 to-teal-500',
  SUCCESS: 'from-green-400 to-emerald-500',
  WARNING: 'from-orange-400 to-red-500',
  INFO: 'from-blue-400 to-cyan-500',
} as const;

// Social media links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/avadhutatech',
  LINKEDIN: 'https://linkedin.com/company/avadhutatech',
  GITHUB: 'https://github.com/avadhutatech',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  VALIDATION: 'Please check your input and try again.',
  NETWORK: 'Network error. Please check your connection.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Form submitted successfully!',
  DATA_SAVED: 'Data saved successfully!',
  OPERATION_COMPLETED: 'Operation completed successfully!',
} as const;

// Validation rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  PODS: '/api/pods',
  PACKS: '/api/packs',
} as const; 