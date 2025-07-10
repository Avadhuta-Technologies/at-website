import { getEntry } from 'astro:content';

/**
 * Load detailed pod information from individual markdown files
 * @param {string} podId - The ID of the pod to load
 * @returns {Promise<Object|null>} - The pod details or null if not found
 */
export async function getPodDetails(podId) {
  try {
    // Map pod IDs to their corresponding markdown files
    const podFileMap = {
      'ecommerce-engine': 'ecommerce-engine-pod',
      'ar-vr-experience': 'ar-vr-experience-pod',
      'ai-product-studio': 'ai-product-studio-pod',
      'product-launch': 'product-launch-pod',
      'admin-workflow-automation': 'admin-workflow-automation-pod',
      'ai-ml-integration': 'ai-ml-integration-pod',
      'mobile-first-saas': 'mobile-first-saas-pod',
      'devops-infra-automation': 'devops-infra-automation-pod'
    };

    const fileName = podFileMap[podId];
    if (!fileName) {
      console.warn(`No pod file mapping found for ID: ${podId}`);
      return null;
    }

    const entry = await getEntry('pods', fileName);
    return entry?.data || null;
  } catch (error) {
    console.error(`Error loading pod details for ${podId}:`, error);
    return null;
  }
}

/**
 * Load all pod details for a list of pod IDs
 * @param {string[]} podIds - Array of pod IDs to load
 * @returns {Promise<Object[]>} - Array of pod details
 */
export async function getMultiplePodDetails(podIds) {
  const podDetails = [];
  
  for (const podId of podIds) {
    const details = await getPodDetails(podId);
    if (details) {
      podDetails.push(details);
    }
  }
  
  return podDetails;
}

/**
 * Transform home page pod data to include detailed information
 * @param {Object} homePodData - Basic pod data from pods.js
 * @returns {Promise<Object>} - Enhanced pod data with details
 */
export async function enhanceHomePodData(homePodData) {
  const enhancedPods = [];
  
  for (const pod of homePodData.pods) {
    const details = await getPodDetails(pod.id);
    if (details) {
      enhancedPods.push({
        ...pod,
        // Use detailed information from markdown files
        teamComposition: details.teamComposition || pod.teamComposition || [],
        deliverables: details.deliverables || pod.deliverables || [],
        idealFor: details.idealFor ? details.idealFor.join(', ') : pod.idealFor || '',
        pricing: details.priceINR || pod.engagement || '',
        minEngagement: details.engagement || "1 month"
      });
    } else {
      // Fallback to basic data if details not found
      enhancedPods.push(pod);
    }
  }
  
  return {
    ...homePodData,
    pods: enhancedPods
  };
} 