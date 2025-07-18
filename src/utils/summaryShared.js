// Shared utilities for summary components - Using catalog as single source of truth
import { catalogUtils, podsCatalog, packsCatalog } from '/src/content/catalog/_index.js';

export class SummaryShared {
  constructor() {
    this.cartService = null;
    this.init();
  }

  async init() {
    if (typeof window !== 'undefined' && window.cartService) {
      this.cartService = window.cartService;
    } else {
      setTimeout(() => this.init(), 100);
    }
  }

  // Cart operations
  async getCart() {
    if (!this.cartService) return [];
    return await this.cartService.getCart();
  }

  async addToCart(item) {
    if (!this.cartService) return;
    await this.cartService.addToCart(item);
  }

  async removeFromCart(id, type) {
    if (!this.cartService) return;
    await this.cartService.removeItemById(id, type);
  }

  async updateCartItem(id, type, data) {
    if (!this.cartService) return;
    await this.cartService.updateItem(id, type, data);
  }

  // Pod operations - using catalog data
  async selectPod(podId) {
    try {
      const pod = podsCatalog.getPodById(podId);
      
      if (pod) {
        const podForCart = podsCatalog.getPodForCart(podId);
        await this.addToCart(podForCart);
        
        this.showNotification('Pod selected successfully!', 'success');
        return pod;
      } else {
        this.showNotification('Pod not found', 'error');
      }
    } catch (error) {
      console.error('Error selecting pod:', error);
      this.showNotification('Failed to select pod', 'error');
    }
  }

  async removePod() {
    try {
      const cart = await this.getCart();
      const podItem = cart.find(item => item.type === 'pod');
      
      if (podItem) {
        await this.removeFromCart(podItem.id, 'pod');
        
        // Also remove all packs since they depend on the pod
        const packItems = cart.filter(item => item.type === 'pack');
        for (const pack of packItems) {
          await this.removeFromCart(pack.id, 'pack');
        }
        
        this.showNotification('Pod and all packs removed from cart', 'success');
        return true;
      }
    } catch (error) {
      console.error('Error removing pod:', error);
      this.showNotification('Failed to remove pod', 'error');
    }
    return false;
  }

  async updateHirePeriod(months) {
    try {
      const cart = await this.getCart();
      const podItem = cart.find(item => item.type === 'pod');
      
      if (podItem) {
        await this.updateCartItem(podItem.id, 'pod', {
          ...podItem,
          reservationMonths: parseInt(months)
        });
      }
    } catch (error) {
      console.error('Error updating hire period:', error);
    }
  }

  // Pack operations - using catalog data
  async addPack(packId) {
    try {
      const pack = packsCatalog.getPackById(packId);
      
      if (pack) {
        const packForCart = packsCatalog.getPackForCart(packId);
        await this.addToCart(packForCart);
        
        this.showNotification('Pack added to cart successfully!', 'success');
        return pack;
      } else {
        this.showNotification('Pack not found', 'error');
      }
    } catch (error) {
      console.error('Error adding pack to cart:', error);
      this.showNotification('Failed to add pack to cart', 'error');
    }
  }

  async removePack(packId) {
    try {
      await this.removeFromCart(packId, 'pack');
      this.showNotification('Pack removed from cart', 'success');
      return true;
    } catch (error) {
      console.error('Error removing pack from cart:', error);
      this.showNotification('Failed to remove pack from cart', 'error');
    }
    return false;
  }

  // Data loading - using catalog as single source of truth
  async loadPods() {
    try {
      return podsCatalog.availablePods;
    } catch (error) {
      console.error('Error loading pods:', error);
      return [];
    }
  }

  async loadRecommendedPacks(podItem) {
    try {
      if (!podItem || !podItem.id) {
        // If no pod is selected, show all available packs
        return packsCatalog.availablePacks.map(pack => ({
          ...pack,
          isAdded: false
        }));
      }

      // Get recommended packs for the selected pod
      let packsToShow = packsCatalog.getRecommendedPacksForPod(podItem.id);
      
      // If no recommended packs, show all available packs
      if (!packsToShow || packsToShow.length === 0) {
        packsToShow = packsCatalog.availablePacks;
      }

      const cart = await this.getCart();
      const addedPackIds = cart.filter(item => item.type === 'pack').map(item => item.id);

      return packsToShow.map(pack => ({
        ...pack,
        isAdded: addedPackIds.includes(pack.id)
      }));
    } catch (error) {
      console.error('Error loading recommended packs:', error);
      return [];
    }
  }

  async loadAllPacks() {
    try {
      const cart = await this.getCart();
      const addedPackIds = cart.filter(item => item.type === 'pack').map(item => item.id);

      return packsCatalog.availablePacks.map(pack => ({
        ...pack,
        isAdded: addedPackIds.includes(pack.id)
      }));
    } catch (error) {
      console.error('Error loading all packs:', error);
      return [];
    }
  }

  // Get pack categories for organization
  getPackCategories() {
    try {
      return packsCatalog.packCategories;
    } catch (error) {
      console.error('Error loading pack categories:', error);
      return [];
    }
  }

  // UI updates
  updatePodSummary(podItem, selectors = {}) {
    const {
      titleSelector = '#summary-pod-title',
      priceSelector = '#summary-pod-price',
      descriptionSelector = '#selected-pod-description'
    } = selectors;

    const titleEl = document.querySelector(titleSelector);
    const priceEl = document.querySelector(priceSelector);
    const descEl = document.querySelector(descriptionSelector);
    
    if (titleEl) titleEl.textContent = podItem.title || podItem.name;
    if (priceEl) priceEl.textContent = podItem.price || 'Price not available';
    if (descEl) descEl.textContent = podItem.description || podItem.tagline;
  }

  updateFinalSummary(podItem, packItems) {
    const titleEl = document.getElementById('final-pod-title');
    const priceEl = document.getElementById('final-pod-price');
    const durationEl = document.getElementById('final-pod-duration');
    
    if (titleEl) titleEl.textContent = podItem.title || podItem.name;
    if (priceEl) priceEl.textContent = podItem.price || 'Price not available';
    if (durationEl) durationEl.textContent = `${podItem.reservationMonths || 3} months`;
  }

  updateTotalPrice(podItem, packItems) {
    const totalEl = document.getElementById('total-price');
    if (!totalEl) return;

    let total = 0;
    
    // Add pod price
    if (podItem && podItem.basePrice) {
      const months = podItem.reservationMonths || 3;
      total += podItem.basePrice * months;
    }
    
    // Add pack prices
    packItems.forEach(pack => {
      if (pack.basePrice) {
        total += pack.basePrice;
      }
    });

    totalEl.textContent = catalogUtils.formatPrice(total);
  }

  // Navigation
  nextStep() {
    const currentStep = this.getCurrentStep();
    if (currentStep < 3) {
      this.navigateToStep(currentStep + 1);
    }
  }

  previousStep() {
    const currentStep = this.getCurrentStep();
    if (currentStep > 1) {
      this.navigateToStep(currentStep - 1);
    }
  }

  navigateToStep(step) {
    window.dispatchEvent(new CustomEvent('step-changed', { detail: { step } }));
  }

  getCurrentStep() {
    const stepper = document.querySelector('.stepper');
    if (!stepper) return 1;
    
    const activeStep = stepper.querySelector('.step.active');
    if (!activeStep) return 1;
    
    const stepNumber = parseInt(activeStep.getAttribute('data-step'));
    return stepNumber || 1;
  }

  // Form handling
  async handleFormSubmission() {
    try {
      const form = document.getElementById('reservation-form');
      if (!form) return;

      const formData = new FormData(form);
      const cart = await this.getCart();
      
      const reservationData = {
        pod: cart.find(item => item.type === 'pod'),
        packs: cart.filter(item => item.type === 'pack'),
        contact: {
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          message: formData.get('message')
        },
        timestamp: new Date().toISOString()
      };

      console.log('Reservation data:', reservationData);
      
      // Here you would typically send this to your backend
      // For now, we'll just show a success message
      this.showNotification('Reservation submitted successfully!', 'success');
      
      // Clear cart after successful submission
      if (this.cartService) {
        await this.cartService.clearCart();
      }
      
      return reservationData;
    } catch (error) {
      console.error('Error submitting form:', error);
      this.showNotification('Failed to submit reservation', 'error');
    }
  }

  // Event listeners
  addEventListeners(selectors, handlers) {
    Object.entries(selectors).forEach(([selector, handler]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener('click', handler);
      }
    });
  }

  addFormListeners() {
    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleFormSubmission();
      });
    }
  }

  addChangeListeners() {
    const hirePeriodSelect = document.getElementById('hire-period-select');
    if (hirePeriodSelect) {
      hirePeriodSelect.addEventListener('change', (e) => {
        this.updateHirePeriod(e.target.value);
      });
    }
  }

  // Notifications
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // UI helpers
  showElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.classList.remove('hidden');
  }

  hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.classList.add('hidden');
  }

  updateCartCountDisplay() {
    if (this.cartService) {
      this.cartService.updateCartCountDisplay();
    }
  }
}

// Create and export singleton instance
export const summaryShared = new SummaryShared(); 