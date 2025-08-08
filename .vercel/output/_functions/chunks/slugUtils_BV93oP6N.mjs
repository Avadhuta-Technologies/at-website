// Utility functions for generating and working with slugs

/**
 * Generate a URL-friendly slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The generated slug
 */
function generateSlug(text) {
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
function generatePodSlug(podName) {
  return generateSlug(podName);
}

/**
 * Generate a slug from a pack name
 * @param {string} packName - The pack name
 * @returns {string} - The generated slug
 */
function generatePackSlug(packName) {
  return generateSlug(packName);
}

export { generatePackSlug as a, generateSlug as b, generatePodSlug as g };
