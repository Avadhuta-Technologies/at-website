// Interactive Elements - Generic reusable interactions
class InteractiveElements {
  constructor() {
    this.init();
  }

  init() {
    this.initCardInteractions();
    this.initSmoothScroll();
  }

  // Enhanced card interactions for any card elements
  initCardInteractions() {
    // Generic card hover effects
    document.querySelectorAll('.card, .pod-card, .pack-card, [data-card="hover"]').forEach(card => {
      // Store original transform for restoration
      const originalTransform = card.style.transform || '';
      
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = originalTransform || 'translateY(0) scale(1)';
      });
    });

    // Enhanced hover effects for group elements
    document.querySelectorAll('.group').forEach(group => {
      group.addEventListener('mouseenter', function() {
        const scaleElements = this.querySelectorAll('.group-hover\\:scale-110, .group-hover\\:scale-150');
        const rotateElements = this.querySelectorAll('.group-hover\\:rotate-3');
        
        scaleElements.forEach(el => {
          const scale = el.classList.contains('group-hover\\:scale-150') ? '1.5' : '1.1';
          el.style.transform = `scale(${scale})`;
          el.style.transition = 'transform 0.3s ease';
        });
        
        rotateElements.forEach(el => {
          el.style.transform = 'rotate(3deg)';
          el.style.transition = 'transform 0.3s ease';
        });
      });
      
      group.addEventListener('mouseleave', function() {
        const animatedElements = this.querySelectorAll('.group-hover\\:scale-110, .group-hover\\:scale-150, .group-hover\\:rotate-3');
        animatedElements.forEach(el => {
          el.style.transform = '';
        });
      });
    });
  }

  // Smooth scroll for anchor links
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            // Add offset for fixed headers if needed
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20; // 20px buffer
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // Generic section scroll animations
  initSectionAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach((section, index) => {
      section.classList.add('scroll-animate');
      section.style.animationDelay = `${index * 0.2}s`;
      observer.observe(section);
    });
  }

  // Initialize all interactive elements
  static init() {
    return new InteractiveElements();
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  InteractiveElements.init();
});

// Export for manual initialization if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InteractiveElements;
} 