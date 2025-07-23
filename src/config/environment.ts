export const config = {
  hubspot: {
    accessToken: import.meta.env.HUBSPOT_ACCESS_TOKEN,
    portalId: import.meta.env.HUBSPOT_PORTAL_ID,
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export const validateConfig = () => {
  if (!config.hubspot.accessToken) {
    console.warn('HUBSPOT_ACCESS_TOKEN environment variable is not set. CRM integration will not work.');
  }
}; 