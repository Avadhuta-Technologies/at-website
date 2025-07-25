/**
 * Industry name mapping and URL generation utilities
 */

// Available industry names from the case studies
const AVAILABLE_INDUSTRIES = [
  "Interior Design",
  "Ecommerce", 
  "Pharmacovigilance",
  "Manufacturing",
  "Mobile Apps / EdTech / Parenting",
  "Mobile Apps / SME Enablement", 
  "Ecommerce (Fresh Food / Direct-to-Consumer)",
  "Social Apps / Media",
  "Mobile Apps / Utility & Delivery",
  "SaaS / Commodity Trading",
  "Ecommerce / Beauty & Wellness",
  "SaaS / Workplace Automation / Facility Management"
];

// URL slug to industry mapping for fuzzy matching
const URL_TO_INDUSTRY_MAPPING = {
  // Healthcare & Pharma variations
  'healthcare-&-pharma': 'Pharmacovigilance',
  'healthcare-pharma': 'Pharmacovigilance',
  'healthcare': 'Pharmacovigilance',
  'pharma': 'Pharmacovigilance',
  'pharmacovigilance': 'Pharmacovigilance',
  
  // AI & Automation variations
  'ai-&-automation': 'SaaS / Workplace Automation / Facility Management',
  'ai-automation': 'SaaS / Workplace Automation / Facility Management',
  'automation': 'SaaS / Workplace Automation / Facility Management',
  'ai': 'SaaS / Workplace Automation / Facility Management',
  
  // Retail, Design & Ecommerce variations
  'retail,-design-&-ecommerce': 'Ecommerce',
  'retail-design-ecommerce': 'Ecommerce',
  'retail': 'Ecommerce',
  'design': 'Interior Design',
  'ecommerce': 'Ecommerce',
  
  // Security & Field Ops variations
  'security-&-field-ops': 'SaaS / Workplace Automation / Facility Management',
  'security-field-ops': 'SaaS / Workplace Automation / Facility Management',
  'security': 'SaaS / Workplace Automation / Facility Management',
  'field-ops': 'SaaS / Workplace Automation / Facility Management',
  
  // Mobile Apps variations
  'mobile-apps': 'Mobile Apps / EdTech / Parenting',
  'mobile': 'Mobile Apps / EdTech / Parenting',
  'edtech': 'Mobile Apps / EdTech / Parenting',
  'parenting': 'Mobile Apps / EdTech / Parenting',
  
  // SaaS variations
  'saas': 'SaaS / Commodity Trading',
  'commodity-trading': 'SaaS / Commodity Trading',
  'trading': 'SaaS / Commodity Trading',
  
  // Manufacturing
  'manufacturing': 'Manufacturing',
  'manufacture': 'Manufacturing',
  
  // Social Apps
  'social-apps': 'Social Apps / Media',
  'social': 'Social Apps / Media',
  'media': 'Social Apps / Media',
  
  // Beauty & Wellness
  'beauty': 'Ecommerce / Beauty & Wellness',
  'wellness': 'Ecommerce / Beauty & Wellness',
  'beauty-wellness': 'Ecommerce / Beauty & Wellness',
  
  // Fresh Food
  'fresh-food': 'Ecommerce (Fresh Food / Direct-to-Consumer)',
  'direct-to-consumer': 'Ecommerce (Fresh Food / Direct-to-Consumer)',
  'food': 'Ecommerce (Fresh Food / Direct-to-Consumer)',
  
  // SME Enablement
  'sme-enablement': 'Mobile Apps / SME Enablement',
  'sme': 'Mobile Apps / SME Enablement',
  'enablement': 'Mobile Apps / SME Enablement',
  
  // Utility & Delivery
  'utility': 'Mobile Apps / Utility & Delivery',
  'delivery': 'Mobile Apps / Utility & Delivery',
  'utility-delivery': 'Mobile Apps / Utility & Delivery',
  'mobile-apps-utility-delivery': 'Mobile Apps / Utility & Delivery',
  'mobile-apps-utility-&-delivery': 'Mobile Apps / Utility & Delivery',
  'mobile-apps-utility-%26-delivery': 'Mobile Apps / Utility & Delivery'
};

/**
 * Generate URL-friendly slug from industry name
 * @param {string} industryName - The industry name to convert
 * @returns {string} URL-friendly slug
 */
export function generateIndustrySlug(industryName) {
  if (!industryName) return '';
  
  return industryName
    .toLowerCase()
    .replace(/\s*\/\s*/g, '-') // Replace "/" with "-"
    .replace(/\s*\(\s*/g, '-') // Replace "(" with "-"
    .replace(/\s*\)\s*/g, '') // Remove ")"
    .replace(/\s*&\s*/g, '-') // Replace "&" with "-"
    .replace(/\s+/g, '-') // Replace spaces with "-"
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
}

/**
 * Check if an industry name is available in our case studies
 * @param {string} industryName - The industry name to check
 * @returns {boolean} True if industry is available
 */
export function isIndustryAvailable(industryName) {
  if (!industryName) return false;
  
  // Try exact match first
  const exactMatch = AVAILABLE_INDUSTRIES.some(available => 
    available.toLowerCase() === industryName.toLowerCase()
  );
  
  if (exactMatch) return true;
  
  // Try fuzzy matching
  const fuzzyMatch = fuzzyMatchIndustry(industryName);
  return fuzzyMatch !== null;
}

/**
 * Get the exact industry name from available industries (case-insensitive match)
 * @param {string} industryName - The industry name to match
 * @returns {string|null} Exact industry name or null if not found
 */
export function getExactIndustryName(industryName) {
  if (!industryName) return null;
  
  const match = AVAILABLE_INDUSTRIES.find(available => 
    available.toLowerCase() === industryName.toLowerCase()
  );
  
  return match || null;
}

/**
 * Find industry by URL slug using fuzzy matching
 * @param {string} urlSlug - The URL slug to match
 * @returns {string|null} Matched industry name or null if not found
 */
export function findIndustryByUrlSlug(urlSlug) {
  if (!urlSlug) return null;
  
  const normalizedSlug = urlSlug.toLowerCase().trim();
  
  // First try direct mapping
  if (URL_TO_INDUSTRY_MAPPING[normalizedSlug]) {
    return URL_TO_INDUSTRY_MAPPING[normalizedSlug];
  }
  
  // Try partial matching
  for (const [slug, industry] of Object.entries(URL_TO_INDUSTRY_MAPPING)) {
    if (slug.includes(normalizedSlug) || normalizedSlug.includes(slug)) {
      return industry;
    }
  }
  
  // Try word-based matching
  const slugWords = normalizedSlug.split(/[-\s&,]+/).filter(word => word.length > 0);
  
  for (const [slug, industry] of Object.entries(URL_TO_INDUSTRY_MAPPING)) {
    const slugWordsArray = slug.split(/[-\s&,]+/).filter(word => word.length > 0);
    
    // Check if any words match
    const hasWordMatch = slugWords.some(word => 
      slugWordsArray.some(slugWord => 
        slugWord.includes(word) || word.includes(slugWord)
      )
    );
    
    if (hasWordMatch) {
      return industry;
    }
  }
  
  return null;
}

/**
 * Fuzzy match industry name with comprehensive logic
 * @param {string} industryName - The industry name to match
 * @returns {string|null} Matched industry name or null if not found
 */
export function fuzzyMatchIndustry(industryName) {
  if (!industryName) return null;
  
  const normalizedName = industryName.toLowerCase().trim();
  
  // 1. Try exact match first
  const exactMatch = getExactIndustryName(industryName);
  if (exactMatch) return exactMatch;
  
  // 2. Try URL slug mapping
  const urlMatch = findIndustryByUrlSlug(normalizedName);
  if (urlMatch) return urlMatch;
  
  // 3. Try word-based matching with available industries
  const nameWords = normalizedName.split(/[-\s&,()/]+/).filter(word => word.length > 0);
  
  for (const availableIndustry of AVAILABLE_INDUSTRIES) {
    const industryWords = availableIndustry.toLowerCase().split(/[-\s&,()/]+/).filter(word => word.length > 0);
    
    // Check if any words match
    const hasWordMatch = nameWords.some(word => 
      industryWords.some(industryWord => 
        industryWord.includes(word) || word.includes(industryWord)
      )
    );
    
    if (hasWordMatch) {
      return availableIndustry;
    }
  }
  
  // 4. Try partial string matching
  for (const availableIndustry of AVAILABLE_INDUSTRIES) {
    const normalizedIndustry = availableIndustry.toLowerCase();
    
    if (normalizedIndustry.includes(normalizedName) || normalizedName.includes(normalizedIndustry)) {
      return availableIndustry;
    }
  }
  
  return null;
}

/**
 * Generate case studies URL with industry filter
 * @param {string} industryName - The industry name
 * @returns {string} URL for case studies with industry filter
 */
export function generateCaseStudiesUrl(industryName) {
  if (!industryName) return '/case-studies';
  
  const slug = generateIndustrySlug(industryName);
  // Properly encode the slug to handle special characters like ampersands
  const encodedSlug = encodeURIComponent(slug);
  return `/case-studies?industry=${encodedSlug}`;
}

/**
 * Get all available industries
 * @returns {string[]} Array of available industry names
 */
export function getAvailableIndustries() {
  return [...AVAILABLE_INDUSTRIES];
}

/**
 * Get industry display name (for UI purposes)
 * @param {string} industryName - The industry name
 * @returns {string} Display name for the industry
 */
export function getIndustryDisplayName(industryName) {
  if (!industryName) return '';
  
  // Return exact match if available
  const exactMatch = getExactIndustryName(industryName);
  if (exactMatch) return exactMatch;
  
  // Try fuzzy matching
  const fuzzyMatch = fuzzyMatchIndustry(industryName);
  if (fuzzyMatch) return fuzzyMatch;
  
  // Return original name if no match
  return industryName;
}

/**
 * Validate and sanitize industry name for URL generation
 * @param {string} industryName - The industry name to validate
 * @returns {object} Object with isValid boolean and sanitized name
 */
export function validateIndustryName(industryName) {
  if (!industryName || typeof industryName !== 'string') {
    return { isValid: false, sanitized: '' };
  }
  
  const trimmed = industryName.trim();
  if (trimmed.length === 0) {
    return { isValid: false, sanitized: '' };
  }
  
  const isAvailable = isIndustryAvailable(trimmed);
  const exactName = getExactIndustryName(trimmed);
  const fuzzyName = fuzzyMatchIndustry(trimmed);
  
  return {
    isValid: isAvailable,
    sanitized: exactName || fuzzyName || trimmed,
    slug: generateIndustrySlug(exactName || fuzzyName || trimmed)
  };
} 