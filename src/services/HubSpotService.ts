export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  message?: string;
  project?: string;
  budget?: string;
  timeline?: string;
  project_details?: string;
  selected_pod?: string;
  selected_packs?: string;
  [key: string]: any;
}

export interface HubSpotContact {
  id: string;
  properties: {
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    company?: string;
    jobtitle?: string;
    lifecyclestage?: string;
    project_type?: string;
    budget_range?: string;
    project_timeline?: string;
    project_details?: string;
    selected_pod?: string;
    selected_packs?: string;
    [key: string]: any;
  };
}

export interface HubSpotCompany {
  id: string;
  properties: {
    name: string;
    domain?: string;
    industry?: string;
    [key: string]: any;
  };
}

export interface HubSpotDeal {
  id: string;
  properties: {
    dealname: string;
    amount?: string;
    dealstage: string;
    pipeline: string;
    [key: string]: any;
  };
}

export class HubSpotService {
  private accessToken: string;
  private baseUrl = 'https://api.hubapi.com';

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HubSpot API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
      }

      return await response.json();
    } catch (error) {
      console.error('HubSpot API request failed:', error);
      throw error;
    }
  }

  async createContact(contactData: ContactFormData): Promise<HubSpotContact> {
    console.log('createContact received data:', contactData);
    
    const properties = {
      email: contactData.email,
      firstname: contactData.firstName || '',
      lastname: contactData.lastName || '',
      phone: contactData.phone || '',
      jobtitle: contactData.jobTitle || '',
      lifecyclestage: 'lead',
      project_type: contactData.project_type || '',
      budget_range: contactData.budget_range || '',
      project_timeline: contactData.project_timeline || '',
      project_details: contactData.project_details || '',
      selected_pod: contactData.selected_pod || '',
      selected_packs: contactData.selected_packs || '',
    };

    console.log('Creating HubSpot contact with properties:', properties);

    const response = await this.makeRequest('/crm/v3/objects/contacts', {
      method: 'POST',
      body: JSON.stringify({ properties }),
    });

    return response;
  }

  async createCompany(companyData: { name: string; domain?: string; industry?: string }): Promise<HubSpotCompany> {
    const properties = {
      name: companyData.name,
      domain: companyData.domain || '',
      industry: companyData.industry || '',
    };

    const response = await this.makeRequest('/crm/v3/objects/companies', {
      method: 'POST',
      body: JSON.stringify({ properties }),
    });

    return response;
  }

  async findCompanyByName(companyName: string): Promise<HubSpotCompany | null> {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/companies/search`, {
        method: 'POST',
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'name',
                  operator: 'EQ',
                  value: companyName
                }
              ]
            }
          ],
          properties: ['name', 'domain', 'industry'],
          limit: 1
        }),
      });

      if (response.results && response.results.length > 0) {
        return response.results[0];
      }

      return null;
    } catch (error) {
      console.error('Error searching for company:', error);
      return null;
    }
  }

  async findCompanyByDomain(domain: string): Promise<HubSpotCompany | null> {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/companies/search`, {
        method: 'POST',
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'domain',
                  operator: 'EQ',
                  value: domain
                }
              ]
            }
          ],
          properties: ['name', 'domain', 'industry'],
          limit: 1
        }),
      });

      if (response.results && response.results.length > 0) {
        return response.results[0];
      }

      return null;
    } catch (error) {
      console.error('Error searching for company by domain:', error);
      return null;
    }
  }

  async getOrCreateCompany(companyData: { name: string; domain?: string; industry?: string }): Promise<HubSpotCompany> {
    // First try to find by exact name match
    let existingCompany = await this.findCompanyByName(companyData.name);
    
    if (existingCompany) {
      console.log(`Found existing company: ${existingCompany.properties.name} (ID: ${existingCompany.id})`);
      return existingCompany;
    }

    // If no exact name match, try to find by domain
    if (companyData.domain) {
      existingCompany = await this.findCompanyByDomain(companyData.domain);
      
      if (existingCompany) {
        console.log(`Found existing company by domain: ${existingCompany.properties.name} (ID: ${existingCompany.id})`);
        return existingCompany;
      }
    }

    // If no existing company found, create a new one
    console.log(`Creating new company: ${companyData.name}`);
    return await this.createCompany(companyData);
  }

  async createDeal(dealData: { name: string; amount?: string; contactId?: string; companyId?: string }): Promise<HubSpotDeal> {
    const properties = {
      dealname: dealData.name,
      amount: dealData.amount || '0',
      dealstage: 'appointmentscheduled',
      pipeline: 'default',
    };

    const response = await this.makeRequest('/crm/v3/objects/deals', {
      method: 'POST',
      body: JSON.stringify({ properties }),
    });

    // Create associations separately after deal is created
    if (dealData.contactId) {
      await this.associateDealWithContact(response.id, dealData.contactId);
    }

    if (dealData.companyId) {
      await this.associateDealWithCompany(response.id, dealData.companyId);
    }

    return response;
  }

  async associateContactWithCompany(contactId: string, companyId: string): Promise<void> {
    await this.makeRequest(`/crm/v4/objects/contact/${contactId}/associations/company/${companyId}`, {
      method: 'PUT',
      body: JSON.stringify([{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 1 }]),
    });
  }

  async associateDealWithContact(dealId: string, contactId: string): Promise<void> {
    await this.makeRequest(`/crm/v4/objects/deal/${dealId}/associations/contact/${contactId}`, {
      method: 'PUT',
      body: JSON.stringify([{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }]),
    });
  }

  async associateDealWithCompany(dealId: string, companyId: string): Promise<void> {
    await this.makeRequest(`/crm/v4/objects/deal/${dealId}/associations/company/${companyId}`, {
      method: 'PUT',
      body: JSON.stringify([{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 6 }]),
    });
  }

  async processContactForm(formData: ContactFormData): Promise<{
    contact: HubSpotContact;
    company?: HubSpotCompany;
    deal?: HubSpotDeal;
  }> {
    try {
      // Get or create contact
      const contact = await this.getOrCreateContact(formData);
      
      let company: HubSpotCompany | undefined;
      let deal: HubSpotDeal | undefined;

      // Create deal/lead
      try {
        deal = await this.createDeal({
          name: `Lead from ${formData.firstName || formData.email}`,
          contactId: contact.id,
          companyId: company?.id,
        });
      } catch (dealError) {
        console.warn('Failed to create deal:', dealError);
      }

      return { contact, company, deal };
    } catch (error) {
      console.error('Error processing contact form:', error);
      throw error;
    }
  }

  async getContactByEmail(email: string): Promise<HubSpotContact | null> {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/contacts/${email}?idProperty=email`);
      return response;
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }

  async findContactByEmail(email: string): Promise<HubSpotContact | null> {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/contacts/search`, {
        method: 'POST',
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: email
                }
              ]
            }
          ],
          properties: ['email', 'firstname', 'lastname', 'phone', 'jobtitle', 'project_type', 'budget_range', 'project_timeline', 'project_details', 'selected_pod', 'selected_packs'],
          limit: 1
        }),
      });

      if (response.results && response.results.length > 0) {
        return response.results[0];
      }

      return null;
    } catch (error) {
      console.error('Error searching for contact:', error);
      return null;
    }
  }

  async getOrCreateContact(contactData: ContactFormData): Promise<HubSpotContact> {
    // First try to find existing contact by email
    const existingContact = await this.findContactByEmail(contactData.email);
    
    if (existingContact) {
      console.log(`Found existing contact: ${existingContact.properties.email} (ID: ${existingContact.id})`);
      
      // Update contact with new information if provided
      const updateProperties: Partial<HubSpotContact['properties']> = {};
      
      if (contactData.firstName && !existingContact.properties.firstname) {
        updateProperties.firstname = contactData.firstName;
      }
      if (contactData.lastName && !existingContact.properties.lastname) {
        updateProperties.lastname = contactData.lastName;
      }
      if (contactData.phone && !existingContact.properties.phone) {
        updateProperties.phone = contactData.phone;
      }
      if (contactData.jobTitle && !existingContact.properties.jobtitle) {
        updateProperties.jobtitle = contactData.jobTitle;
      }
      if (contactData.project && !existingContact.properties.project_type) {
        updateProperties.project_type = contactData.project;
      }
      if (contactData.budget && !existingContact.properties.budget_range) {
        updateProperties.budget_range = contactData.budget;
      }
      if (contactData.timeline && !existingContact.properties.project_timeline) {
        updateProperties.project_timeline = contactData.timeline;
      }
      if (contactData.project_details && !existingContact.properties.project_details) {
        updateProperties.project_details = contactData.project_details;
      }
      if (contactData.selected_pod && !existingContact.properties.selected_pod) {
        updateProperties.selected_pod = contactData.selected_pod;
      }
      if (contactData.selected_packs && !existingContact.properties.selected_packs) {
        updateProperties.selected_packs = contactData.selected_packs;
      }
      
      // Only update if there are properties to update
      if (Object.keys(updateProperties).length > 0) {
        try {
          await this.updateContact(existingContact.id, updateProperties);
          console.log('Updated existing contact with new information');
        } catch (updateError) {
          console.warn('Failed to update existing contact:', updateError);
        }
      }
      
      return existingContact;
    }

    // If no existing contact found, create a new one
    console.log(`Creating new contact: ${contactData.email}`);
    return await this.createContact(contactData);
  }

  async updateContact(contactId: string, properties: Partial<HubSpotContact['properties']>): Promise<HubSpotContact> {
    const response = await this.makeRequest(`/crm/v3/objects/contacts/${contactId}`, {
      method: 'PATCH',
      body: JSON.stringify({ properties }),
    });

    return response;
  }
} 