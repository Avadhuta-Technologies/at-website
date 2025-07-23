import { config } from '../config/environment';

export interface HubSpotCustomProperty {
  name: string;
  label: string;
  type: string;
  groupName: string;
  description?: string;
  options?: string[];
}

export const requiredCustomProperties: HubSpotCustomProperty[] = [
  {
    name: 'project_type',
    label: 'Project Type',
    type: 'enumeration',
    groupName: 'contactinformation',
    description: 'Type of project the contact is interested in',
    options: [
      'Web Development',
      'Mobile App Development', 
      'AI/ML Integration',
      'E-commerce Solution',
      'AR/VR Experience',
      'DevOps & Infrastructure',
      'Other'
    ]
  },
  {
    name: 'budget_range',
    label: 'Budget Range',
    type: 'enumeration', 
    groupName: 'contactinformation',
    description: 'Budget range for the project',
    options: [
      'Under $10K',
      '$10K - $25K',
      '$25K - $50K', 
      '$50K - $100K',
      '$100K+',
      'Not sure'
    ]
  },
  {
    name: 'project_timeline',
    label: 'Project Timeline',
    type: 'enumeration',
    groupName: 'contactinformation', 
    description: 'Timeline for project completion',
    options: [
      'ASAP',
      '1-2 months',
      '3-6 months',
      '6+ months',
      'Not sure'
    ]
  },
  {
    name: 'project_details',
    label: 'Project Details',
    type: 'string',
    groupName: 'contactinformation',
    description: 'Detailed description of the project requirements and goals'
  }
];

export async function createCustomProperty(property: HubSpotCustomProperty): Promise<boolean> {
  if (!config.hubspot.accessToken) {
    console.error('❌ HUBSPOT_ACCESS_TOKEN not configured');
    return false;
  }

  try {
    // First create the property
    const response = await fetch(`https://api.hubapi.com/crm/v3/properties/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.hubspot.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: property.name,
        label: property.label,
        type: property.type,
        groupName: property.groupName,
        description: property.description,
        fieldType: property.type === 'enumeration' ? 'select' : 'text',
        formField: true,
        ...(property.type === 'enumeration' && property.options && {
          options: property.options.map(option => ({
            label: option,
            value: option,
            displayOrder: property.options?.indexOf(option) || 0
          }))
        })
      }),
    });

    if (response.ok) {
      console.log(`✅ Created custom property: ${property.name}`);
      return true;
    } else {
      const errorData = await response.json();
      if (errorData.status === 'error' && errorData.message.includes('already exists')) {
        console.log(`ℹ️  Property ${property.name} already exists`);
        return true;
      } else {
        console.error(`❌ Failed to create property ${property.name}:`, errorData);
        return false;
      }
    }
  } catch (error) {
    console.error(`❌ Error creating property ${property.name}:`, error);
    return false;
  }
}



export async function setupCustomProperties(): Promise<void> {
  console.log('🔧 Setting up custom HubSpot properties...');
  
  for (const property of requiredCustomProperties) {
    await createCustomProperty(property);
  }
  
  console.log('✅ Custom properties setup complete!');
}

export async function checkCustomProperties(): Promise<void> {
  if (!config.hubspot.accessToken) {
    console.error('❌ HUBSPOT_ACCESS_TOKEN not configured');
    return;
  }

  try {
    const response = await fetch('https://api.hubapi.com/crm/v4/properties/contacts', {
      headers: {
        'Authorization': `Bearer ${config.hubspot.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const existingProperties = data.results.map((prop: any) => prop.name);
      
      console.log('📋 Checking custom properties...');
      
      for (const requiredProperty of requiredCustomProperties) {
        if (existingProperties.includes(requiredProperty.name)) {
          console.log(`✅ ${requiredProperty.name}: Found`);
        } else {
          console.log(`❌ ${requiredProperty.name}: Missing`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Error checking custom properties:', error);
  }
} 