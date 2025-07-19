import { packsCatalog } from '../catalog/_packs.js';

export const homePacksData = {
  title: "Ready-to-Use Packs",
  subtitle: "Pre-built solutions for common startup needs. Each pack is designed to solve specific challenges and get you results fast.",
  featuredPackIds: [], // We'll get one from each segment instead
  showSegmentName: true // New flag to show segment names in cards
};

// Get one pack from each segment for the home page
export const getHomePacks = () => {
  return packsCatalog.packCategories.map(category => {
    // Get the first pack from each category
    const pack = category.packs[0];
    return {
      ...pack,
      segmentName: category.title, // Add segment name to the pack data
      segmentId: category.id
    };
  });
};
