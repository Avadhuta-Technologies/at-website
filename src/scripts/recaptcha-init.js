// Global reCAPTCHA initialization script
// This ensures reCAPTCHA loads consistently across all pages

(function() {
  'use strict';

  // Global reCAPTCHA state
  window.recaptchaGlobalState = {
    isLoaded: false,
    isReady: false,
    loadPromise: null
  };

  // Load reCAPTCHA script
  function loadRecaptchaScript() {
    if (window.recaptchaGlobalState.loadPromise) {
      return window.recaptchaGlobalState.loadPromise;
    }

    window.recaptchaGlobalState.loadPromise = new Promise((resolve, reject) => {
      // Check if already loaded
      if (typeof window.grecaptcha !== 'undefined') {
        window.recaptchaGlobalState.isLoaded = true;
        resolve();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      
      script.onload = function() {
        console.log('🔍 [Global] reCAPTCHA script loaded successfully');
        window.recaptchaGlobalState.isLoaded = true;
        
        // Wait for grecaptcha to be ready
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(function() {
            console.log('🔍 [Global] reCAPTCHA is ready');
            window.recaptchaGlobalState.isReady = true;
            window.dispatchEvent(new CustomEvent('recaptcha-global-ready'));
            resolve();
          });
        } else {
          // Fallback: wait a bit more
          setTimeout(function() {
            window.recaptchaGlobalState.isReady = true;
            window.dispatchEvent(new CustomEvent('recaptcha-global-ready'));
            resolve();
          }, 1000);
        }
      };
      
      script.onerror = function() {
        console.error('🔍 [Global] Failed to load reCAPTCHA script');
        reject(new Error('Failed to load reCAPTCHA script'));
      };
      
      document.head.appendChild(script);
    });

    return window.recaptchaGlobalState.loadPromise;
  }

  // Initialize reCAPTCHA when DOM is ready
  function initRecaptcha() {
    console.log('🔍 [Global] Initializing reCAPTCHA...');
    loadRecaptchaScript().catch(function(error) {
      console.error('🔍 [Global] reCAPTCHA initialization failed:', error);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRecaptcha);
  } else {
    initRecaptcha();
  }

  // Export global function for manual initialization
  window.initRecaptchaGlobal = initRecaptcha;
  
  // Export function to check if reCAPTCHA is ready
  window.isRecaptchaReady = function() {
    return window.recaptchaGlobalState.isReady && typeof window.grecaptcha !== 'undefined';
  };

  // Export function to wait for reCAPTCHA to be ready
  window.waitForRecaptcha = function() {
    if (window.recaptchaGlobalState.isReady) {
      return Promise.resolve();
    }
    
    return new Promise((resolve) => {
      const checkReady = () => {
        if (window.recaptchaGlobalState.isReady) {
          resolve();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    });
  };

})(); 