import type { ContactFormData } from '../services/HubSpotService';

export interface FormFieldMapping {
  [key: string]: string;
}

// Map form field names to HubSpot properties
export const formFieldToHubSpotMapping: FormFieldMapping = {
  name: 'name', // Will be split into firstName and lastName
  firstName: 'firstname',
  lastName: 'lastname',
  email: 'email',
  phone: 'phone',
  company: 'company',
  jobTitle: 'jobtitle',
  message: 'project_details',
  project: 'project_type',
  budget: 'budget_range',
  timeline: 'project_timeline',
};

export function mapFormDataToHubSpot(formData: FormData): ContactFormData {
  const mappedData: Partial<ContactFormData> = {};
  
  console.log('Mapping form data - available fields:', Array.from(formData.keys()));
  
  for (const [key, value] of formData.entries()) {
    const hubspotProperty = formFieldToHubSpotMapping[key] || key;
    
    console.log(`Mapping field: ${key} -> ${hubspotProperty} = "${value}"`);
    
    // Handle name splitting for HubSpot
    if (key === 'name' && value) {
      const fullName = value as string;
      const nameParts = fullName.trim().split(' ');
      
      if (nameParts.length >= 2) {
        // First name is the first part
        mappedData.firstName = nameParts[0];
        // Last name is everything else
        mappedData.lastName = nameParts.slice(1).join(' ');
      } else if (nameParts.length === 1) {
        // Only one name provided, treat as first name
        mappedData.firstName = nameParts[0];
        mappedData.lastName = '';
      }
    } else {
      mappedData[hubspotProperty] = value as string;
    }
  }
  
  console.log('Final mapped data:', mappedData);
  return mappedData as ContactFormData;
}

export function validateContactData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.email) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

export function sanitizeFormData(data: ContactFormData): ContactFormData {
  const sanitized: Partial<ContactFormData> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value === 'string') {
      sanitized[key] = value.trim();
    }
  }
  
  return sanitized as ContactFormData;
} 