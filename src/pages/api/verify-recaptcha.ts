import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { response, secretKey } = await request.json();

    if (!response || !secretKey) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing reCAPTCHA response or secret key'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Verify with Google's reCAPTCHA API
    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: response,
      }),
    });

    const verificationResult = await verificationResponse.json();

    if (verificationResult.success) {
      return new Response(JSON.stringify({
        success: true,
        score: verificationResult.score, // For v3
        action: verificationResult.action, // For v3
        challenge_ts: verificationResult.challenge_ts,
        hostname: verificationResult.hostname
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'reCAPTCHA verification failed',
        'error-codes': verificationResult['error-codes']
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 