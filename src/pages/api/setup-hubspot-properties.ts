export const prerender = false;
import type { APIRoute } from 'astro';
import { setupCustomProperties, checkCustomProperties } from '../../utils/hubspotCustomProperties';

export const GET: APIRoute = async () => {
  try {
    await checkCustomProperties();
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Custom properties check completed. Check server logs for details.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error checking custom properties:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async () => {
  try {
    await setupCustomProperties();
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Custom properties setup completed. Check server logs for details.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error setting up custom properties:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 