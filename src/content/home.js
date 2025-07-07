import { getEntry } from 'astro:content';

export async function getHomeData() {
  try {
    const entry = await getEntry('home', 'index');
    return entry.data;
  } catch (error) {
    console.error('Error loading home data:', error);
    return null;
  }
} 