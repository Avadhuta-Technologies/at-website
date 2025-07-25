import type { APIRoute } from 'astro';
import { getSecretKey } from '../../config/recaptcha';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const recaptchaResponse = formData.get('recaptchaResponse') as string;

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Please provide a valid email address'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify reCAPTCHA if response is provided
    if (recaptchaResponse) {
      const secretKey = getSecretKey('newsletter');
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

    // Here you would typically:
    // 1. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 2. Store in your database
    // 3. Send confirmation email
    
    console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully subscribed to newsletter'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to subscribe to newsletter'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 