export const prerender = false;
import type { APIRoute } from 'astro';
import { packsCatalog } from '../../../content/catalog/_packs.js';

export const GET: APIRoute = async () => {
  try {
    const packs = packsCatalog.availablePacks;
    
    return new Response(JSON.stringify(packs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching packs:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch packs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 