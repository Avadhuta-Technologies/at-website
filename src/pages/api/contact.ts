export const prerender = false;
import type { APIRoute } from 'astro';
import { HubSpotService, type ContactFormData } from '../../services/HubSpotService';
import { mapFormDataToHubSpot, validateContactData, sanitizeFormData } from '../../utils/hubspotMapper';
import { config, validateConfig } from '../../config/environment';
import { getSecretKey } from '../../config/recaptcha';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check content type and handle accordingly
    const contentType = request.headers.get('content-type');
    
    let formData: FormData;
    
    if (contentType?.includes('application/json')) {
      // Handle JSON data
      const jsonData = await request.json();
      formData = new FormData();
      
      // Convert JSON to FormData
      Object.entries(jsonData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });
    } else {
      // Handle form data
      formData = await request.formData();
    }
    
    // Extract reCAPTCHA response
    const recaptchaResponse = formData.get('recaptchaResponse') as string;
    
    // Verify reCAPTCHA if response is provided
    if (recaptchaResponse) {
      const secretKey = getSecretKey('contact');
      const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaResponse,
        }),
      });
      
      const verificationResult = await verificationResponse.json();
      
      if (!verificationResult.success) {
        return new Response(JSON.stringify({
          success: false,
          error: 'reCAPTCHA verification failed'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    // Map and validate form data
    const contactData = mapFormDataToHubSpot(formData);
    const sanitizedData = sanitizeFormData(contactData);
    
    // Add source information for tracking (not sent to HubSpot)
    sanitizedData.source = 'Website Contact Form';
    
    // Debug: Log the processed data
    console.log('Processed contact data:', {
      original: Object.fromEntries(formData),
      mapped: contactData,
      sanitized: sanitizedData
    });
    
    // Validate the data
    const validation = validateContactData(sanitizedData);
    if (!validation.isValid) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: validation.errors.join(', ') 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate configuration
    validateConfig();
    
    if (!config.hubspot.accessToken) {
      console.error('HUBSPOT_ACCESS_TOKEN environment variable is not set');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'CRM integration not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const hubspotService = new HubSpotService(config.hubspot.accessToken);

    // Process the contact form
    const result = await hubspotService.processContactForm(sanitizedData);

    // Log successful submission
    console.log('Contact form submitted successfully:', {
      contactId: result.contact.id,
      companyId: result.company?.id,
      dealId: result.deal?.id,
      email: sanitizedData.email
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Contact form submitted successfully',
      data: {
        contactId: result.contact.id,
        companyId: result.company?.id,
        dealId: result.deal?.id
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return more detailed error in development
    const errorMessage = import.meta.env.DEV 
      ? `Failed to submit contact form: ${error instanceof Error ? error.message : 'Unknown error'}`
      : 'Failed to submit contact form. Please try again later.';
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 