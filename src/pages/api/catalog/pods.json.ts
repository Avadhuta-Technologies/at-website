export const prerender = false;
import type { APIRoute } from 'astro';
import { podsCatalog } from '../../../content/catalog/_pods.js';

export const GET: APIRoute = async () => {
  try {
    const pods = podsCatalog.availablePods.map(pod => ({
      id: pod.id,
      title: pod.name,
      description: pod.tagline,
      price: pod.pricing[0] || 'Starting at ₹2.5L/month',
      basePrice: 250000, // Default base price
      icon: '🚀', // Default icon
      badge: 'New',
      badgeColor: 'bg-mint-100 text-mint-800',
      category: 'pod'
    }));
    
    return new Response(JSON.stringify(pods), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching pods:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch pods' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 