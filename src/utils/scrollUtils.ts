/**
 * Generic scroll utility for navigating to sections without page reload
 */
export function scrollToSection(sectionId: string, options?: {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}) {
  const defaultOptions = {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
    inline: 'nearest' as ScrollLogicalPosition
  };
  
  const scrollOptions = { ...defaultOptions, ...options };
  
  // Check if we're on the home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  
  if (isHomePage) {
    // Find the target section on current page
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      // Smooth scroll to the section
      targetSection.scrollIntoView(scrollOptions);
    } else {
      console.warn(`Section with id "${sectionId}" not found on current page`);
    }
  } else {
    // Not on home page, navigate to home page with hash
    const homeUrl = `/#${sectionId}`;
    
    // Use history.pushState to change URL without reload
    window.history.pushState({}, '', homeUrl);
    
    // Navigate to home page
    window.location.href = homeUrl;
  }
}

/**
 * Navigate to a specific page and section
 */
export function navigateToPageAndSection(pagePath: string, sectionId?: string) {
  const url = sectionId ? `${pagePath}#${sectionId}` : pagePath;
  
  // Use history.pushState to change URL without reload
  window.history.pushState({}, '', url);
  
  // Navigate to the page
  window.location.href = url;
}

/**
 * Handle button clicks with section navigation
 */
export function handleSectionNavigation(
  event: Event, 
  sectionId: string, 
  fallbackHref?: string
) {
  event.preventDefault();
  
  const target = event.target as HTMLAnchorElement;
  const href = target?.href || fallbackHref || '#';
  
  // Check if we're on the home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  
  if (isHomePage) {
    // Try to scroll to section on current page
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Section not found, use fallback href
      window.location.href = href;
    }
  } else {
    // Not on home page, navigate to home page with section
    const homeUrl = `/#${sectionId}`;
    window.history.pushState({}, '', homeUrl);
    window.location.href = homeUrl;
  }
}

/**
 * Get section ID based on button label
 */
export function getSectionIdFromButtonLabel(buttonLabel: string): string | null {
  const label = buttonLabel.toLowerCase();
  
  // Map button labels to section IDs
  const sectionMap: Record<string, string> = {
    'get started with a pod': 'choose-pod-section',
    'choose your novapod': 'choose-pod-section',
    'see how it works': 'how-it-works',
    'how it works': 'how-it-works',
    'explore packs': 'packs-section',
    'view packs': 'packs-section'
  };
  
  // Find matching section
  for (const [key, sectionId] of Object.entries(sectionMap)) {
    if (label.includes(key)) {
      return sectionId;
    }
  }
  
  return null;
} 