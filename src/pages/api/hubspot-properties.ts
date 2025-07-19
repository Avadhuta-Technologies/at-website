import type { APIRoute } from 'astro';
import { logAvailableProperties } from '../../utils/hubspotProperties';

export const GET: APIRoute = async () => {
  try {
    const properties = await logAvailableProperties();
    
    if (properties) {
      return new Response(JSON.stringify({
        success: true,
        message: 'HubSpot properties fetched successfully',
        properties: properties.map((prop: any) => ({
          name: prop.name,
          label: prop.label,
          type: prop.type,
          groupName: prop.groupName
        }))
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to fetch HubSpot properties'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error in properties endpoint:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 