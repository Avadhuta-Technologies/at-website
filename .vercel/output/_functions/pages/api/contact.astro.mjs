import { g as getSecretKey } from '../../chunks/recaptcha_KRqrYjmN.mjs';
export { renderers } from '../../renderers.mjs';

class HubSpotService {
  accessToken;
  baseUrl = "https://api.hubapi.com";
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Authorization": `Bearer ${this.accessToken}`,
      "Content-Type": "application/json",
      ...options.headers
    };
    try {
      const response = await fetch(url, {
        ...options,
        headers
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HubSpot API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
      }
      return await response.json();
    } catch (error) {
      console.error("HubSpot API request failed:", error);
      throw error;
    }
  }
  async createContact(contactData) {
    console.log("createContact received data:", contactData);
    const properties = {
      email: contactData.email,
      firstname: contactData.firstName || "",
      lastname: contactData.lastName || "",
      phone: contactData.phone || "",
      jobtitle: contactData.jobTitle || "",
      lifecyclestage: "lead",
      project_type: contactData.project_type || "",
      budget_range: contactData.budget_range || "",
      project_timeline: contactData.project_timeline || "",
      project_details: contactData.project_details || "",
      selected_pod: contactData.selected_pod || "",
      selected_packs: contactData.selected_packs || ""
    };
    console.log("Creating HubSpot contact with properties:", properties);
    const response = await this.makeRequest("/crm/v3/objects/contacts", {
      method: "POST",
      body: JSON.stringify({ properties })
    });
    return response;
  }
  async createCompany(companyData) {
    const properties = {
      name: companyData.name,
      domain: companyData.domain || "",
      industry: companyData.industry || ""
    };
    const response = await this.makeRequest("/crm/v3/objects/companies", {
      method: "POST",
      body: JSON.stringify({ properties })
    });
    return response;
  }
  async findCompanyByName(companyName) {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/companies/search`, {
        method: "POST",
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "name",
                  operator: "EQ",
                  value: companyName
                }
              ]
            }
          ],
          properties: ["name", "domain", "industry"],
          limit: 1
        })
      });
      if (response.results && response.results.length > 0) {
        return response.results[0];
      }
      return null;
    } catch (error) {
      console.error("Error searching for company:", error);
      return null;
    }
  }
  async findCompanyByDomain(domain) {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/companies/search`, {
        method: "POST",
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "domain",
                  operator: "EQ",
                  value: domain
                }
              ]
            }
          ],
          properties: ["name", "domain", "industry"],
          limit: 1
        })
      });
      if (response.results && response.results.length > 0) {
        return response.results[0];
      }
      return null;
    } catch (error) {
      console.error("Error searching for company by domain:", error);
      return null;
    }
  }
  async getOrCreateCompany(companyData) {
    let existingCompany = await this.findCompanyByName(companyData.name);
    if (existingCompany) {
      console.log(`Found existing company: ${existingCompany.properties.name} (ID: ${existingCompany.id})`);
      return existingCompany;
    }
    if (companyData.domain) {
      existingCompany = await this.findCompanyByDomain(companyData.domain);
      if (existingCompany) {
        console.log(`Found existing company by domain: ${existingCompany.properties.name} (ID: ${existingCompany.id})`);
        return existingCompany;
      }
    }
    console.log(`Creating new company: ${companyData.name}`);
    return await this.createCompany(companyData);
  }
  async createDeal(dealData) {
    const properties = {
      dealname: dealData.name,
      amount: dealData.amount || "0",
      dealstage: "appointmentscheduled",
      pipeline: "default"
    };
    const response = await this.makeRequest("/crm/v3/objects/deals", {
      method: "POST",
      body: JSON.stringify({ properties })
    });
    if (dealData.contactId) {
      await this.associateDealWithContact(response.id, dealData.contactId);
    }
    if (dealData.companyId) {
      await this.associateDealWithCompany(response.id, dealData.companyId);
    }
    return response;
  }
  async associateContactWithCompany(contactId, companyId) {
    await this.makeRequest(`/crm/v4/objects/contact/${contactId}/associations/company/${companyId}`, {
      method: "PUT",
      body: JSON.stringify([{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 1 }])
    });
  }
  async associateDealWithContact(dealId, contactId) {
    await this.makeRequest(`/crm/v4/objects/deal/${dealId}/associations/contact/${contactId}`, {
      method: "PUT",
      body: JSON.stringify([{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }])
    });
  }
  async associateDealWithCompany(dealId, companyId) {
    await this.makeRequest(`/crm/v4/objects/deal/${dealId}/associations/company/${companyId}`, {
      method: "PUT",
      body: JSON.stringify([{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 6 }])
    });
  }
  async processContactForm(formData) {
    try {
      const contact = await this.getOrCreateContact(formData);
      let company;
      let deal;
      try {
        deal = await this.createDeal({
          name: `Lead from ${formData.firstName || formData.email}`,
          contactId: contact.id,
          companyId: company?.id
        });
      } catch (dealError) {
        console.warn("Failed to create deal:", dealError);
      }
      return { contact, company, deal };
    } catch (error) {
      console.error("Error processing contact form:", error);
      throw error;
    }
  }
  async getContactByEmail(email) {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/contacts/${email}?idProperty=email`);
      return response;
    } catch (error) {
      if (error instanceof Error && error.message.includes("404")) {
        return null;
      }
      throw error;
    }
  }
  async findContactByEmail(email) {
    try {
      const response = await this.makeRequest(`/crm/v3/objects/contacts/search`, {
        method: "POST",
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: "email",
                  operator: "EQ",
                  value: email
                }
              ]
            }
          ],
          properties: ["email", "firstname", "lastname", "phone", "jobtitle", "project_type", "budget_range", "project_timeline", "project_details", "selected_pod", "selected_packs"],
          limit: 1
        })
      });
      if (response.results && response.results.length > 0) {
        return response.results[0];
      }
      return null;
    } catch (error) {
      console.error("Error searching for contact:", error);
      return null;
    }
  }
  async getOrCreateContact(contactData) {
    const existingContact = await this.findContactByEmail(contactData.email);
    if (existingContact) {
      console.log(`Found existing contact: ${existingContact.properties.email} (ID: ${existingContact.id})`);
      const updateProperties = {};
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
      if (Object.keys(updateProperties).length > 0) {
        try {
          await this.updateContact(existingContact.id, updateProperties);
          console.log("Updated existing contact with new information");
        } catch (updateError) {
          console.warn("Failed to update existing contact:", updateError);
        }
      }
      return existingContact;
    }
    console.log(`Creating new contact: ${contactData.email}`);
    return await this.createContact(contactData);
  }
  async updateContact(contactId, properties) {
    const response = await this.makeRequest(`/crm/v3/objects/contacts/${contactId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties })
    });
    return response;
  }
}

const formFieldToHubSpotMapping = {
  name: "name",
  // Will be split into firstName and lastName
  firstName: "firstname",
  lastName: "lastname",
  email: "email",
  phone: "phone",
  company: "company",
  jobTitle: "jobtitle",
  message: "project_details",
  project: "project_type",
  budget: "budget_range",
  timeline: "project_timeline",
  selected_pod: "selected_pod",
  selected_packs: "selected_packs"
};
function mapFormDataToHubSpot(formData) {
  const mappedData = {};
  console.log("Mapping form data - available fields:", Array.from(formData.keys()));
  for (const [key, value] of formData.entries()) {
    const hubspotProperty = formFieldToHubSpotMapping[key] || key;
    console.log(`Mapping field: ${key} -> ${hubspotProperty} = "${value}"`);
    if (key === "name" && value) {
      const fullName = value;
      const nameParts = fullName.trim().split(" ");
      if (nameParts.length >= 2) {
        mappedData.firstName = nameParts[0];
        mappedData.lastName = nameParts.slice(1).join(" ");
      } else if (nameParts.length === 1) {
        mappedData.firstName = nameParts[0];
        mappedData.lastName = "";
      }
    } else {
      mappedData[hubspotProperty] = value;
    }
  }
  console.log("Final mapped data:", mappedData);
  return mappedData;
}
function validateContactData(data) {
  const errors = [];
  if (!data.email) {
    errors.push("Email is required");
  } else if (!isValidEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push("Please enter a valid phone number");
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
}
function sanitizeFormData(data) {
  const sanitized = {};
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value === "string") {
      sanitized[key] = value.trim();
    }
  }
  return sanitized;
}

const config = {
  hubspot: {
    accessToken: undefined                                    ,
    portalId: undefined                                 
  },
  isDevelopment: false,
  isProduction: true
};
const validateConfig = () => {
  {
    console.warn("HUBSPOT_ACCESS_TOKEN environment variable is not set. CRM integration will not work.");
  }
};

const prerender = false;
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let formData;
    if (contentType?.includes("application/json")) {
      const jsonData = await request.json();
      formData = new FormData();
      Object.entries(jsonData).forEach(([key, value]) => {
        if (value !== null && value !== void 0) {
          formData.append(key, String(value));
        }
      });
    } else {
      formData = await request.formData();
    }
    const recaptchaResponse = formData.get("recaptchaResponse");
    const recaptchaAction = formData.get("recaptchaAction");
    const selectedPodSlug = formData.get("selected_pod_slug");
    if (recaptchaResponse) {
      let secretKey;
      if (recaptchaAction && recaptchaAction.startsWith("pod_reservation")) {
        secretKey = getSecretKey("reservation");
        console.log("Using reservation form reCAPTCHA verification for pod:", selectedPodSlug);
      } else {
        secretKey = getSecretKey("contact");
        console.log("Using contact form reCAPTCHA verification");
      }
      const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaResponse
        })
      });
      const verificationResult = await verificationResponse.json();
      if (!verificationResult.success) {
        return new Response(JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed"
        }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      console.log("reCAPTCHA verification successful for action:", recaptchaAction);
    }
    const contactData = mapFormDataToHubSpot(formData);
    const sanitizedData = sanitizeFormData(contactData);
    sanitizedData.source = "Website Contact Form";
    console.log("Processed contact data:", {
      original: Object.fromEntries(formData),
      mapped: contactData,
      sanitized: sanitizedData
    });
    const validation = validateContactData(sanitizedData);
    if (!validation.isValid) {
      return new Response(JSON.stringify({
        success: false,
        error: validation.errors.join(", ")
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    validateConfig();
    if (!config.hubspot.accessToken) {
      console.error("HUBSPOT_ACCESS_TOKEN environment variable is not set");
      return new Response(JSON.stringify({
        success: false,
        error: "CRM integration not configured"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const hubspotService = new HubSpotService(config.hubspot.accessToken);
    const result = await hubspotService.processContactForm(sanitizedData);
    console.log("Contact form submitted successfully:", {
      contactId: result.contact.id,
      companyId: result.company?.id,
      dealId: result.deal?.id,
      email: sanitizedData.email
    });
    return new Response(JSON.stringify({
      success: true,
      message: "Contact form submitted successfully",
      data: {
        contactId: result.contact.id,
        companyId: result.company?.id,
        dealId: result.deal?.id
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage = "Failed to submit contact form. Please try again later.";
    return new Response(JSON.stringify({
      success: false,
      error: errorMessage
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
