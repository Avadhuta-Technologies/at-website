// reCAPTCHA Configuration
export const recaptchaConfig = {
  // Site keys (public keys for client-side)
  siteKeys: {
    v2: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY_V2 || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Default test key
    v3: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY_V3 || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Default test key
  },
  
  // Secret keys (private keys for server-side verification)
  secretKeys: {
    v2: import.meta.env.RECAPTCHA_SECRET_KEY_V2 || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe', // Default test key
    v3: import.meta.env.RECAPTCHA_SECRET_KEY_V3 || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe', // Default test key
  },
  
  // Default settings
  defaultSettings: {
    theme: 'light' as 'light' | 'dark',
    size: 'normal' as 'normal' | 'compact' | 'invisible',
    tabindex: 0,
  },
  
  // Form-specific settings
  forms: {
    contact: {
      version: 'v2' as 'v2' | 'v3',
      action: 'contact_form',
      threshold: 0.5, // For v3
    },
    reservation: {
      version: 'v2' as 'v2' | 'v3',
      action: 'reservation_form',
      threshold: 0.5, // For v3
    },
    newsletter: {
      version: 'v3' as 'v2' | 'v3',
      action: 'newsletter_signup',
      threshold: 0.3, // Lower threshold for newsletter
    },
  },
  
  // Environment check
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
};

// Helper function to get site key for a specific form
export function getSiteKey(formName: keyof typeof recaptchaConfig.forms): string {
  const formConfig = recaptchaConfig.forms[formName];
  return recaptchaConfig.siteKeys[formConfig.version];
}

// Helper function to get secret key for a specific form
export function getSecretKey(formName: keyof typeof recaptchaConfig.forms): string {
  const formConfig = recaptchaConfig.forms[formName];
  return recaptchaConfig.secretKeys[formConfig.version];
}

// Helper function to get form configuration
export function getFormConfig(formName: keyof typeof recaptchaConfig.forms) {
  return recaptchaConfig.forms[formName];
} 