import { HubSpotService } from '../services/HubSpotService';
import { config } from '../config/environment';

export async function getHubSpotContactProperties() {
  if (!config.hubspot.accessToken) {
    console.error('❌ HUBSPOT_ACCESS_TOKEN not configured');
    return null;
  }

  const hubspotService = new HubSpotService(config.hubspot.accessToken);

  try {
    // Get contact properties from HubSpot
    const response = await fetch('https://api.hubapi.com/crm/v4/properties/contacts', {
      headers: {
        'Authorization': `Bearer ${config.hubspot.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch properties: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching HubSpot properties:', error);
    return null;
  }
}

export async function logAvailableProperties() {
  console.log('🔍 Fetching available HubSpot contact properties...');
  
  const properties = await getHubSpotContactProperties();
  
  if (properties) {
    console.log('✅ Available HubSpot contact properties:');
    properties.forEach((prop: any) => {
      console.log(`   - ${prop.name}: ${prop.label} (${prop.type})`);
    });
  } else {
    console.log('❌ Failed to fetch properties');
  }
  
  return properties;
}

export function getStandardHubSpotProperties() {
  return {
    // Standard HubSpot contact properties that should always exist
    email: 'email',
    firstname: 'firstname', 
    lastname: 'lastname',
    phone: 'phone',
    company: 'company',
    jobtitle: 'jobtitle',
    lifecyclestage: 'lifecyclestage',
    // Add more standard properties as needed
  };
} 