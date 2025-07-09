/**
 * Global scroll utility for navigating to sections without page reload
 * This can be used across the entire site
 */

// Make functions globally available
window.ScrollUtils = {
  /**
   * Scroll to a specific section
   */
  scrollToSection: function(sectionId, options = {}) {
    const defaultOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
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
  },

  /**
   * Navigate to a specific page and section
   */
  navigateToPageAndSection: function(pagePath, sectionId) {
    const url = sectionId ? `${pagePath}#${sectionId}` : pagePath;
    
    // Use history.pushState to change URL without reload
    window.history.pushState({}, '', url);
    
    // Navigate to the page
    window.location.href = url;
  },

  /**
   * Handle button clicks with section navigation
   */
  handleSectionNavigation: function(event, sectionId, fallbackHref) {
    event.preventDefault();
    
    const target = event.target;
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
  },

  /**
   * Get section ID based on button label
   */
  getSectionIdFromButtonLabel: function(buttonLabel) {
    const label = buttonLabel.toLowerCase();
    
    // Map button labels to section IDs
    const sectionMap = {
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
  },

  /**
   * Generic button click handler
   */
  handleButtonClick: function(event, buttonLabel) {
    const sectionId = this.getSectionIdFromButtonLabel(buttonLabel);
    
    if (sectionId) {
      // Use the generic section navigation
      this.handleSectionNavigation(event, sectionId);
    } else {
      // No matching section, use default navigation
      const target = event.target;
      const href = target?.href || '#';
      window.location.href = href;
    }
  }
};

// Add event delegation for buttons with data attributes
document.addEventListener('DOMContentLoaded', function() {
  // Handle buttons with data-scroll-to attribute
  document.addEventListener('click', function(event) {
    const target = event.target.closest('[data-scroll-to]');
    if (target) {
      event.preventDefault();
      const sectionId = target.getAttribute('data-scroll-to');
      const buttonLabel = target.textContent || target.getAttribute('data-button-label') || '';
      
      if (sectionId) {
        ScrollUtils.handleSectionNavigation(event, sectionId);
      } else if (buttonLabel) {
        ScrollUtils.handleButtonClick(event, buttonLabel);
      }
    }
  });
}); 