// Scroll animations utility functions

/**
 * Initialize hero animations
 */
export function initHeroAnimations() {
  // Hero-specific animations
  const heroElements = document.querySelectorAll('.home-hero-section');
  
  heroElements.forEach(element => {
    // Add fade-in animation
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  });
}

/**
 * Initialize scroll animations for components
 */
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });

  // Observe component-specific elements
  const componentElements = document.querySelectorAll('.home-how-it-works-step, .home-pod-card, .home-pack-card, .home-why-works-card, .home-built-for-card, .home-success-story-card');
  componentElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

/**
 * Initialize staggered animations
 */
export function initStaggeredAnimations() {
  const staggeredContainers = document.querySelectorAll('[data-animate="row-staggered"]');
  
  staggeredContainers.forEach(container => {
    const baseDelay = parseInt(container.getAttribute('data-base-delay') || '200');
    const cardDelay = parseInt(container.getAttribute('data-card-delay') || '100');
    const rowDelay = parseInt(container.getAttribute('data-row-delay') || '200');
    const columnsPerRow = parseInt(container.getAttribute('data-columns-per-row') || '3');
    
    const cards = container.querySelectorAll('[data-animate]');
    
    cards.forEach((card, index) => {
      const row = Math.floor(index / columnsPerRow);
      const delay = baseDelay + (row * rowDelay) + (index * cardDelay);
      
      card.style.animationDelay = `${delay}ms`;
    });
  });
}

/**
 * Initialize scale animations
 */
export function initScaleAnimations() {
  const scaleElements = document.querySelectorAll('[data-animate="scale-in"]');
  
  scaleElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
  });
}

/**
 * Initialize slide animations
 */
export function initSlideAnimations() {
  const slideElements = document.querySelectorAll('[data-animate="slide-in-up"]');
  
  slideElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initScrollAnimations();
  initStaggeredAnimations();
  initScaleAnimations();
  initSlideAnimations();
});