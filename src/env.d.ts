/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Global type declarations for reCAPTCHA utilities
declare global {
  interface Window {
    grecaptcha: {
      getResponse: (widgetId: number) => string;
      reset: (widgetId: number) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
      render: (element: string | HTMLElement, options: any) => number;
    };
    recaptchaUtils: {
      getResponse: (widgetId: number) => string | null;
      reset: (widgetId: number) => void;
      execute: (siteKey: string, action: string) => Promise<string>;
      verify: (response: string, secretKey: string) => Promise<{ success: boolean; error?: string }>;
    };
    // Test page callbacks
    onTestRecaptchaSuccess: (response: string) => void;
    onTestRecaptchaExpired: () => void;
    onTestRecaptchaError: () => void;
  }
}
