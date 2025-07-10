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
    
    // Navigate to the page with hash
    window.location.href = url;
  },

  /**
   * Handle URL hash scrolling on page load
   */
  handleUrlHashScroll: function() {
    // Check for hash in URL
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove the #
      console.log('Handling hash scroll for section:', sectionId);
      
      // Try multiple times to ensure the section is loaded
      const tryScroll = () => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          console.log('Found target section, scrolling...');
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          return true;
        } else {
          console.log('Section not found, retrying...');
          return false;
        }
      };
      
      // Try immediately
      if (!tryScroll()) {
        // Try after a delay
        setTimeout(() => {
          if (!tryScroll()) {
            // Try one more time after longer delay
            setTimeout(tryScroll, 1000);
          }
        }, 500);
      }
    }
  },

  /**
   * Handle button clicks with section navigation
   */
  handleSectionNavigation: function(event, sectionId, fallbackHref) {
    console.log('handleSectionNavigation called with sectionId:', sectionId);
    event.preventDefault();
    
    const target = event.target;
    const href = target?.href || fallbackHref || '#';
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    console.log('Is home page:', isHomePage);
    
    // Special handling for available-pods section - always navigate to explore-pods page
    if (sectionId === 'available-pods') {
      console.log('Navigating to explore-pods page with available-pods section');
      window.location.href = '/explore-pods#available-pods';
      return;
    }
    
    if (isHomePage) {
      // Try to scroll to section on current page
      const targetSection = document.getElementById(sectionId);
      console.log('Looking for section:', sectionId, 'Found:', !!targetSection);
      
      if (targetSection) {
        console.log('Scrolling to section:', sectionId);
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Section not found, using fallback href:', href);
        // Section not found, use fallback href
        window.location.href = href;
      }
    } else {
      // Not on home page, navigate to home page with section
      const homeUrl = `/#${sectionId}`;
      console.log('Navigating to home page with section:', homeUrl);
      window.history.pushState({}, '', homeUrl);
      window.location.href = homeUrl;
    }
  },

  /**
   * Get section ID based on button label
   */
  getSectionIdFromButtonLabel: function(buttonLabel) {
    const label = buttonLabel.toLowerCase();
    console.log('Looking for section ID for button label:', buttonLabel, 'normalized to:', label);
    
    // Map button labels to section IDs
    const sectionMap = {
      'get started with a pod': 'choose-pod-section',
      'choose your novapod': 'choose-pod-section',
      'start with a novapod': 'available-pods',
      'see how it works': 'how-it-works',
      'how it works': 'how-it-works',
      'explore all pods': 'available-pods',
      'explore packs': 'packs-section',
      'view packs': 'packs-section'
    };
    
    // Find matching section
    for (const [key, sectionId] of Object.entries(sectionMap)) {
      if (label.includes(key)) {
        console.log('Found matching section:', key, '->', sectionId);
        return sectionId;
      }
    }
    
    console.log('No matching section found for label:', label);
    return null;
  },

  /**
   * Generic button click handler
   */
  handleButtonClick: function(event, buttonLabel) {
    console.log('ScrollUtils.handleButtonClick called with label:', buttonLabel);
    const sectionId = this.getSectionIdFromButtonLabel(buttonLabel);
    
    if (sectionId) {
      console.log('Using section navigation for:', sectionId);
      // Use the generic section navigation
      this.handleSectionNavigation(event, sectionId);
    } else {
      console.log('No matching section, using default navigation');
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