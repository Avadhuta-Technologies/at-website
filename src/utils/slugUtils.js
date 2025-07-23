// Utility functions for generating and working with slugs

/**
 * Generate a URL-friendly slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The generated slug
 */
export function generateSlug(text) {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')  // Replace non-alphanumeric chars with hyphens
    .replace(/-+/g, '-')         // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');      // Remove leading/trailing hyphens
}

/**
 * Generate a slug from a pod name
 * @param {string} podName - The pod name
 * @returns {string} - The generated slug
 */
export function generatePodSlug(podName) {
  return generateSlug(podName);
}

/**
 * Generate a slug from a pack name
 * @param {string} packName - The pack name
 * @returns {string} - The generated slug
 */
export function generatePackSlug(packName) {
  return generateSlug(packName);
}

/**
 * Check if two slugs match
 * @param {string} slug1 - First slug
 * @param {string} slug2 - Second slug
 * @returns {boolean} - True if slugs match
 */
export function slugsMatch(slug1, slug2) {
  return generateSlug(slug1) === generateSlug(slug2);
}

export default {
  generateSlug,
  generatePodSlug,
  generatePackSlug,
  slugsMatch
}; 