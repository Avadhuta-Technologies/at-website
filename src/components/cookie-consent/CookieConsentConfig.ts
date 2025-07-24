import type { CookieConsentConfig } from 'vanilla-cookieconsent';

declare global {
    interface Window {
      dataLayer: Record<string, any>[];
      gtag: (...args: any[]) => void;
    }
  }

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
            window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
              });
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "We Value Your Privacy",
          description:
            'We use cookies to enhance your browsing experience, analyze site traffic, and tailor content for you. By clicking ‘Accept All Cookies’, you consent to our use of cookies. You can manage your preferences or learn more in our Cookie Policy.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences', 
          footer:
            '<a href="/assets/Privacy Policy.pdf" target="_blank">Privacy Policy</a>\n<a href="/assets/Terms & Conditions.pdf" target="_blank">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'NovaPod uses cookies and similar technologies to ensure the proper functioning of our website, enhance your browsing experience, analyze site traffic, and personalize content. You can choose which categories of cookies to allow. For more details, please see our <a href="/assets/Cookie Policy.pdf" target="_blank">Cookie Policy</a>',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These cookies are necessary for the website to function properly. They enable core features like security, network management, and accessibility. You cannot turn these off.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These cookies allow the website to remember choices you make (such as your language, region, or login details) and provide enhanced, more personalized features. They may also be used to provide services you have requested.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve site performance and user experience.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="mailto:support@novapod.ai">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};
