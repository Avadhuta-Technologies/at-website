// Scroll-based animations using Intersection Observer API
class ScrollAnimations {
  constructor() {
    this.observers = new Map();
    this.init();
  }

  init() {
    // Initialize all animation types
    this.initFadeInUp();
    this.initFadeInLeft();
    this.initFadeInRight();
    this.initScaleIn();
    this.initSlideInUp();
    this.initStaggeredChildren();
    this.initCardGrid();
    this.initRowStaggered();
    this.initParallax();
    this.initCounterAnimation();
  }

  // Fade in from bottom with upward movement
  initFadeInUp() {
    const elements = document.querySelectorAll('[data-animate="fade-in-up"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('fade-in-up', observer);
  }

  // Fade in from left
  initFadeInLeft() {
    const elements = document.querySelectorAll('[data-animate="fade-in-left"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-left');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('fade-in-left', observer);
  }

  // Fade in from right
  initFadeInRight() {
    const elements = document.querySelectorAll('[data-animate="fade-in-right"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-right');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('fade-in-right', observer);
  }

  // Scale in animation
  initScaleIn() {
    const elements = document.querySelectorAll('[data-animate="scale-in"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('scale-in', observer);
  }

  // Slide in from bottom
  initSlideInUp() {
    const elements = document.querySelectorAll('[data-animate="slide-in-up"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('slide-in-up', observer);
  }

  // Staggered children animation
  initStaggeredChildren() {
    const containers = document.querySelectorAll('[data-animate="staggered-children"]');
    if (containers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          const delay = parseInt(entry.target.dataset.delay) || 150; // Default 150ms delay
          const staggerDelay = parseInt(entry.target.dataset.staggerDelay) || 120; // Default 120ms between items
          
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
            }, delay + (index * staggerDelay));
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    containers.forEach(container => observer.observe(container));
    this.observers.set('staggered-children', observer);
  }

  // Card grid animation with individual card delays
  initCardGrid() {
    const containers = document.querySelectorAll('[data-animate="card-grid"]');
    if (containers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          const baseDelay = parseInt(entry.target.dataset.baseDelay) || 200; // Base delay before first card
          const cardDelay = parseInt(entry.target.dataset.cardDelay) || 150; // Delay between each card
          const rowDelay = parseInt(entry.target.dataset.rowDelay) || 100; // Delay between rows
          const columnsPerRow = parseInt(entry.target.dataset.columnsPerRow) || 3; // Number of columns per row
          
          Array.from(children).forEach((child, index) => {
            // Calculate row and column position
            const row = Math.floor(index / columnsPerRow);
            const col = index % columnsPerRow;
            
            // Add initial hidden state
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Calculate delay: base delay + row delay + column delay within row
            const totalDelay = baseDelay + (row * rowDelay) + (col * cardDelay);
            
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, totalDelay);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    containers.forEach(container => observer.observe(container));
    this.observers.set('card-grid', observer);
  }

  // Row-based staggered animation
  initRowStaggered() {
    const containers = document.querySelectorAll('[data-animate="row-staggered"]');
    if (containers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          const baseDelay = parseInt(entry.target.dataset.baseDelay) || 200;
          const cardDelay = parseInt(entry.target.dataset.cardDelay) || 120; // Delay between cards in same row
          const rowDelay = parseInt(entry.target.dataset.rowDelay) || 200; // Delay between rows
          const columnsPerRow = parseInt(entry.target.dataset.columnsPerRow) || 3;
          
          Array.from(children).forEach((child, index) => {
            // Calculate row and column position
            const row = Math.floor(index / columnsPerRow);
            const col = index % columnsPerRow;
            
            // Add initial hidden state
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Calculate delay: base delay + row delay + column delay within row
            const totalDelay = baseDelay + (row * rowDelay) + (col * cardDelay);
            
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, totalDelay);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    containers.forEach(container => observer.observe(container));
    this.observers.set('row-staggered', observer);
  }

  // Parallax effect
  initParallax() {
    const elements = document.querySelectorAll('[data-animate="parallax"]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const speed = entry.target.dataset.speed || 0.5;
          const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -speed;
            entry.target.style.transform = `translateY(${rate}px)`;
          };
          
          window.addEventListener('scroll', handleScroll);
          entry.target.dataset.scrollHandler = 'true';
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(el => observer.observe(el));
    this.observers.set('parallax', observer);
  }

  // Counter animation for numbers
  initCounterAnimation() {
    const counters = document.querySelectorAll('[data-animate="counter"]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const duration = parseInt(entry.target.dataset.duration) || 2000;
          const increment = target / (duration / 16); // 60fps
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              entry.target.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target;
            }
          };

          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
    this.observers.set('counter', observer);
  }

  // Cleanup method
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.scrollAnimations = new ScrollAnimations();
});

// Re-initialize on page navigation (for SPA)
document.addEventListener('astro:page-load', () => {
  if (window.scrollAnimations) {
    window.scrollAnimations.destroy();
  }
  window.scrollAnimations = new ScrollAnimations();
});