// Shared utilities for summary components - Using catalog as single source of truth
import { catalogUtils, podsCatalog, packsCatalog } from '../content/catalog/_index.js';

export class SummaryShared {
  constructor() {
    this.init();
  }

  async init() {
    // Always use localStorage as single source of truth
    console.log('🔍 [SummaryShared] Initialized with localStorage-only approach');
  }

  // Cart operations - localStorage only
  async getCart() {
    try {
      const localStorageCart = localStorage.getItem('novapod-cart');
      const cart = localStorageCart ? JSON.parse(localStorageCart) : [];
      console.log('🔍 [getCart] Retrieved from localStorage:', cart);
      return cart;
    } catch (error) {
      console.error('🔍 [getCart] Error reading localStorage:', error);
      return [];
    }
  }

  async addToCart(item) {
    try {
      const cart = await this.getCart();
      
      // Business Rule: Only 1 pod allowed
      if (item.type === 'pod') {
        const existingPod = cart.find(cartItem => cartItem.type === 'pod');
        if (existingPod) {
          console.log('🔍 [addToCart] Pod already exists, replacing:', existingPod.id);
          // Remove existing pod and all its packs
          await this.removePod();
          // Get fresh cart after removal
          const freshCart = await this.getCart();
          freshCart.push(item);
          localStorage.setItem('novapod-cart', JSON.stringify(freshCart));
        } else {
          cart.push(item);
          localStorage.setItem('novapod-cart', JSON.stringify(cart));
        }
      }
      // Business Rule: Multiple packs allowed, but no duplicates
      else if (item.type === 'pack') {
        const existingPack = cart.find(cartItem => cartItem.id === item.id && cartItem.type === 'pack');
        if (existingPack) {
          console.log('🔍 [addToCart] Pack already exists, skipping:', item.id);
          this.showNotification('Pack already in cart', 'info');
          return false;
        } else {
          cart.push(item);
          localStorage.setItem('novapod-cart', JSON.stringify(cart));
        }
      }
      // Other item types
      else {
        cart.push(item);
        localStorage.setItem('novapod-cart', JSON.stringify(cart));
      }
      
      console.log('🔍 [addToCart] Added item to localStorage:', item);
      
      // Dispatch cart updated event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cart-updated', { 
          detail: { action: 'add', item } 
        }));
      }
      return true;
    } catch (error) {
      console.error('🔍 [addToCart] Error adding to cart:', error);
      return false;
    }
  }

  async removeFromCart(id, type) {
    try {
      const cart = await this.getCart();
      const index = cart.findIndex(item => item.id === id && item.type === type);
      if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem('novapod-cart', JSON.stringify(cart));
        console.log('🔍 [removeFromCart] Removed item from localStorage:', { id, type });
        
        // Dispatch cart updated event
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cart-updated', { 
            detail: { action: 'remove', item: { id, type } } 
          }));
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error('🔍 [removeFromCart] Error removing from cart:', error);
      return false;
    }
  }

  async updateCartItem(id, type, data) {
    console.log('🔍 [updateCartItem] Called with:', { id, type, data });
    
    try {
      const cart = await this.getCart();
      const index = cart.findIndex(item => item.id === id && item.type === type);
      
      if (index !== -1) {
        cart[index] = { ...cart[index], ...data };
        localStorage.setItem('novapod-cart', JSON.stringify(cart));
        console.log('🔍 [updateCartItem] Updated localStorage with:', cart[index]);
      } else {
        console.log('🔍 [updateCartItem] Item not found, adding it to localStorage');
        cart.push({ id, type, ...data });
        localStorage.setItem('novapod-cart', JSON.stringify(cart));
        console.log('🔍 [updateCartItem] Added item to localStorage:', cart[cart.length - 1]);
      }
      
      // Dispatch cart updated event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('cart-updated', { 
          detail: { action: 'update', item: data } 
        }));
        console.log('🔍 [updateCartItem] Dispatched cart-updated event');
      }
    } catch (error) {
      console.error('🔍 [updateCartItem] Error updating localStorage:', error);
    }
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
    console.log('🔍 [removePod] Starting pod removal...');
    try {
      const cart = await this.getCart();
      const podItem = cart.find(item => item.type === 'pod');
      console.log('🔍 [removePod] Found pod item:', podItem);
      
      if (podItem) {
        // Remove pod from localStorage
        console.log('🔍 [removePod] Removing pod from localStorage...');
        await this.removeFromCart(podItem.id, 'pod');
        
        // Also remove all packs since they depend on the pod
        const packItems = cart.filter(item => item.type === 'pack');
        console.log('🔍 [removePod] Removing packs:', packItems.length);
        for (const pack of packItems) {
          await this.removeFromCart(pack.id, 'pack');
        }
        
        // Clear any other cart-related localStorage items for safety
        try {
          const keysToRemove = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.includes('cart') && key !== 'novapod-cart') {
              keysToRemove.push(key);
            }
          }
          keysToRemove.forEach(key => localStorage.removeItem(key));
          console.log('🔍 [removePod] Cleared additional cart-related storage');
        } catch (storageError) {
          console.error('🔍 [removePod] Error clearing additional storage:', storageError);
        }
        
        this.showNotification('Pod and all packs removed from cart', 'success');
        console.log('🔍 [removePod] Pod removal completed successfully');
        
        // Verify that storage is completely cleared
        try {
          const verifyCart = await this.getCart();
          console.log('🔍 [removePod] Verification - localStorage cart:', verifyCart);
          
          if (verifyCart.length === 0) {
            console.log('🔍 [removePod] ✅ Storage verification passed - localStorage cleared');
          } else {
            console.log('🔍 [removePod] ⚠️ Storage verification failed - data remains:', verifyCart);
          }
        } catch (verifyError) {
          console.error('🔍 [removePod] Error during verification:', verifyError);
        }
        
        return true;
      } else {
        console.log('🔍 [removePod] No pod found in cart');
      }
    } catch (error) {
      console.error('🔍 [removePod] Error removing pod:', error);
      this.showNotification('Failed to remove pod', 'error');
    }
    return false;
  }

  async updateHirePeriod(months) {
    console.log('🔍 [updateHirePeriod] Called with months:', months);
    try {
      const cart = await this.getCart();
      console.log('🔍 [updateHirePeriod] Current cart:', cart);
      const podItem = cart.find(item => item.type === 'pod');
      console.log('🔍 [updateHirePeriod] Found pod item:', podItem);
      
      if (podItem) {
        const updatedPod = {
          ...podItem,
          reservationMonths: parseInt(months)
        };
        console.log('🔍 [updateHirePeriod] Updated pod:', updatedPod);
        
        console.log('🔍 [updateHirePeriod] Calling updateCartItem...');
        await this.updateCartItem(podItem.id, 'pod', updatedPod);
        console.log('🔍 [updateHirePeriod] updateCartItem completed');
        
        // Dispatch cart updated event to trigger UI refresh
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('cart-updated', { 
            detail: { action: 'update', item: updatedPod } 
          }));
          console.log('🔍 [updateHirePeriod] Dispatched cart-updated event');
        }
      } else {
        console.log('🔍 [updateHirePeriod] No pod found in cart');
      }
    } catch (error) {
      console.error('🔍 [updateHirePeriod] Error updating hire period:', error);
    }
  }

  // Enhanced Pack operations - using catalog data with pod requirement check
  async addPack(packId) {
    try {
      const pack = packsCatalog.getPackById(packId);
      
      if (!pack) {
        this.showNotification('Pack not found', 'error');
        return null;
      }

      // Check if pack already exists in cart
      const cart = await this.getCart();
      const existingPack = cart.find(item => item.id === packId && item.type === 'pack');
      
      if (existingPack) {
        // Pack exists, remove it
        await this.removePack(packId);
        this.showNotification('Pack removed from cart', 'success');
        return pack;
      }

      // Check if pod exists in cart before adding pack
      const hasPodInCart = cart.some(item => item.type === 'pod');
      
      if (!hasPodInCart) {
        // Show modal to inform user they need a pod first
        if (typeof window !== 'undefined' && window.showPodRequiredModal) {
          window.showPodRequiredModal();
        } else {
          this.showNotification('Please select a pod first before adding packs', 'warning');
        }
        return null;
      }

      // Pod exists, add the pack
      const packForCart = packsCatalog.getPackForCart(packId);
      await this.addToCart(packForCart);
      
      this.showNotification('Pack added to cart successfully!', 'success');
      return pack;
    } catch (error) {
      console.error('Error adding pack to cart:', error);
      this.showNotification('Failed to add pack to cart', 'error');
      return null;
    }
  }

  // New method for handling pack cart operations with UI updates
  async handlePackCartOperation(packId, buttonElement) {
    try {
      const pack = packsCatalog.getPackById(packId);
      
      if (!pack) {
        this.showNotification('Pack not found', 'error');
        return null;
      }

      // Check current cart status
      const cartStatus = await this.getPackCartStatus(packId);
      
      if (cartStatus.inCart) {
        // Pack is in cart, remove it
        await this.removePack(packId);
        this.updatePackButton(buttonElement, pack, false);
        this.showNotification('Pack removed from cart', 'success');
        return pack;
      } else {
        // Pack is not in cart, check if pod exists
        if (!cartStatus.hasPod) {
          // Show modal to inform user they need a pod first
          if (typeof window !== 'undefined' && window.showPodRequiredModal) {
            window.showPodRequiredModal();
          } else {
            this.showNotification('Please select a pod first before adding packs', 'warning');
          }
          return null;
        }

        // Pod exists, add the pack
        const packForCart = packsCatalog.getPackForCart(packId);
        await this.addToCart(packForCart);
        this.updatePackButton(buttonElement, pack, true);
        this.showNotification('Pack added to cart successfully!', 'success');
        return pack;
      }
    } catch (error) {
      console.error('Error handling pack cart operation:', error);
      this.showNotification('Failed to update pack in cart', 'error');
      return null;
    }
  }

  // Update pack button appearance based on cart status
  updatePackButton(buttonElement, pack, isInCart) {
    if (!buttonElement) return;

    const buttonText = buttonElement.querySelector('span');
    const buttonIcon = buttonElement.querySelector('svg');
    
    if (isInCart) {
      // Pack is in cart - show remove state
      buttonElement.classList.remove('from-primary-600', 'to-primary-700', 'hover:from-primary-700', 'hover:to-primary-800');
      buttonElement.classList.add('from-red-500', 'to-red-600', 'hover:from-red-600', 'hover:to-red-700');
      
      if (buttonText) buttonText.textContent = 'Remove Pack';
      if (buttonIcon) {
        buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>';
      }
    } else {
      // Pack is not in cart - show add state
      buttonElement.classList.remove('from-red-500', 'to-red-600', 'hover:from-red-600', 'hover:to-red-700');
      buttonElement.classList.add('from-primary-600', 'to-primary-700', 'hover:from-primary-700', 'hover:to-primary-800');
      
      if (buttonText) buttonText.textContent = 'Add to Pod';
      if (buttonIcon) {
        buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>';
      }
    }
  }

  // Initialize pack buttons with correct state
  async initializePackButtons() {
    try {
      const packButtons = document.querySelectorAll('[data-add-to-cart][data-item-type="pack"]');
      
      for (const button of packButtons) {
        const packId = button.getAttribute('data-item-id');
        if (packId) {
          const cartStatus = await this.getPackCartStatus(packId);
          const pack = packsCatalog.getPackById(packId);
          if (pack) {
            this.updatePackButton(button, pack, cartStatus.inCart);
          }
        }
      }
    } catch (error) {
      console.error('Error initializing pack buttons:', error);
    }
  }

  // Enhanced Pod selection with replacement confirmation
  async selectPodWithConfirmation(podId) {
    try {
      const pod = podsCatalog.getPodById(podId);
      
      if (!pod) {
        this.showNotification('Pod not found', 'error');
        return null;
      }

      const cart = await this.getCart();
      const existingPod = cart.find(item => item.type === 'pod');
      
      if (existingPod) {
        console.log('🔍 [selectPodWithConfirmation] Existing pod found, showing replacement confirmation');
        // Pod exists, show replacement confirmation
        if (typeof window !== 'undefined' && window.showPodReplacementModal) {
          return new Promise((resolve) => {
            window.showPodReplacementModal(existingPod, pod, async (currentPod, newPod) => {
              // User confirmed replacement
              console.log('🔍 [selectPodWithConfirmation] User confirmed replacement');
              await this.removePod(); // This removes the current pod and all packs
              const podForCart = podsCatalog.getPodForCart(podId);
              await this.addToCart(podForCart);
              this.showNotification(`Pod replaced with ${newPod.title || newPod.name}`, 'success');
              resolve(newPod);
            });
          });
        } else {
          // Fallback without modal
          console.log('🔍 [selectPodWithConfirmation] Modal not available, using fallback');
          await this.removePod();
          const podForCart = podsCatalog.getPodForCart(podId);
          await this.addToCart(podForCart);
          this.showNotification(`Pod replaced with ${pod.name}`, 'success');
          return pod;
        }
      } else {
        console.log('🔍 [selectPodWithConfirmation] No existing pod, adding directly');
        // No existing pod, add directly
        const podForCart = podsCatalog.getPodForCart(podId);
        await this.addToCart(podForCart);
        this.showNotification(`Pod ${pod.name} added to cart`, 'success');
        return pod;
      }
    } catch (error) {
      console.error('Error selecting pod with confirmation:', error);
      this.showNotification('Failed to select pod', 'error');
      return null;
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

  // Check if pod exists in cart
  async hasPod() {
    try {
      const cart = await this.getCart();
      return cart.some(item => item.type === 'pod');
    } catch (error) {
      console.error('Error checking for pod:', error);
      return false;
    }
  }

  // Check if pack exists in cart
  async isPackInCart(packId) {
    try {
      const cart = await this.getCart();
      return cart.some(item => item.id === packId && item.type === 'pack');
    } catch (error) {
      console.error('Error checking if pack is in cart:', error);
      return false;
    }
  }

  // Get cart status for pack (for button text)
  async getPackCartStatus(packId) {
    try {
      const cart = await this.getCart();
      const packInCart = cart.find(item => item.id === packId && item.type === 'pack');
      const hasPod = cart.some(item => item.type === 'pod');
      
      if (packInCart) {
        return { inCart: true, hasPod, action: 'remove' };
      } else {
        return { inCart: false, hasPod, action: 'add' };
      }
    } catch (error) {
      console.error('Error getting pack cart status:', error);
      return { inCart: false, hasPod: false, action: 'add' };
    }
  }

  // Prompt user to add pod if none exists
  async promptForPod() {
    const hasPod = await this.hasPod();
    if (!hasPod) {
      this.showNotification('Please select a NovaPod first to proceed', 'warning');
      return false;
    }
    return true;
  }

  // Add both pod and pack from pod detail page
  async addPodAndPack(podId, packId) {
    try {
      console.log('🔍 [addPodAndPack] Adding pod and pack:', { podId, packId });
      
      // Add pod first
      const pod = await this.selectPodWithConfirmation(podId);
      if (!pod) {
        this.showNotification('Failed to add pod', 'error');
        return false;
      }
      
      // Add pack
      const pack = await this.addPack(packId);
      if (!pack) {
        this.showNotification('Failed to add pack', 'error');
        return false;
      }
      
      // Navigate to summary page step 2
      if (typeof window !== 'undefined') {
        window.location.href = '/summary?step=2';
      }
      
      this.showNotification('Pod and pack added! Redirecting to summary...', 'success');
      return true;
    } catch (error) {
      console.error('Error adding pod and pack:', error);
      this.showNotification('Failed to add pod and pack', 'error');
      return false;
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
    console.log('🔍 [nextStep] Current step:', currentStep);
    console.log('🔍 [nextStep] Called from:', new Error().stack?.split('\n')[2] || 'unknown');
    
    if (currentStep < 3) {
      const nextStepNumber = currentStep + 1;
      console.log('🔍 [nextStep] Navigating to step:', nextStepNumber);
      this.navigateToStep(nextStepNumber);
    } else {
      console.log('🔍 [nextStep] Already at step 3, cannot go further');
    }
  }

  previousStep() {
    const currentStep = this.getCurrentStep();
    console.log('🔍 [previousStep] Current step:', currentStep);
    
    if (currentStep > 1) {
      const previousStepNumber = currentStep - 1;
      console.log('🔍 [previousStep] Navigating to step:', previousStepNumber);
      this.navigateToStep(previousStepNumber);
    } else {
      console.log('🔍 [previousStep] Already at step 1, cannot go back');
    }
  }

  navigateToStep(step) {
    console.log('🔍 [navigateToStep] Dispatching step-changed event for step:', step);
    window.dispatchEvent(new CustomEvent('step-changed', { detail: { step } }));
  }

  getCurrentStep() {
    // Try to get step from the step coordinator's internal state
    const stepCoordinator = document.querySelector('#step-coordinator');
    if (stepCoordinator && stepCoordinator._currentStep) {
      console.log('🔍 [getCurrentStep] Using step coordinator internal state:', stepCoordinator._currentStep);
      return stepCoordinator._currentStep;
    }
    
    // Fallback to stepper method
    const stepper = document.querySelector('.stepper');
    if (!stepper) {
      console.log('🔍 [getCurrentStep] No stepper found, returning 1');
      return 1;
    }
    
    const activeStep = stepper.querySelector('.step.active');
    if (!activeStep) {
      console.log('🔍 [getCurrentStep] No active step found, returning 1');
      return 1;
    }
    
    const stepNumber = parseInt(activeStep.getAttribute('data-step'));
    console.log('🔍 [getCurrentStep] Active step number from stepper:', stepNumber);
    return stepNumber || 1;
  }

  // Form handling
  async handleFormSubmission() {
    try {
      console.log('🔍 Starting form submission...');
      const form = document.getElementById('reservation-form');
      if (!form) {
        console.error('🔍 Form not found');
        return;
      }

      // Check form validity
      if (!form.checkValidity()) {
        console.log('🔍 Form validation failed');
        form.reportValidity();
        this.showNotification('Please fill in all required fields', 'error');
        return;
      }

      const formData = new FormData(form);
      const cart = await this.getCart();
      
      // Validate that we have a pod selected
      const selectedPod = cart.find(item => item.type === 'pod');
      if (!selectedPod) {
        this.showNotification('Please select a pod before submitting', 'error');
        return;
      }

      const reservationData = {
        pod: selectedPod,
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

      console.log('🔍 Reservation data:', reservationData);
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send this to your backend
      // For now, we'll just show a success message
      this.showNotification('Reservation submitted successfully! We\'ll contact you within 24 hours.', 'success');
      
      // Clear cart after successful submission
      localStorage.removeItem('novapod-cart');
      
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Redirect to order confirmation page
      setTimeout(() => {
        window.location.href = '/order-confirmation';
      }, 2000);
      
      return reservationData;
    } catch (error) {
      console.error('🔍 Error submitting form:', error);
      this.showNotification('Failed to submit reservation. Please try again.', 'error');
      
      // Reset button on error
      const submitBtn = form?.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Reserve My NovaPod';
        submitBtn.disabled = false;
      }
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
      console.log('🔍 Adding form listeners to reservation form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('🔍 Form submission triggered');
        await this.handleFormSubmission();
      });
      
      // Also add click listener to the submit button for debugging
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
          console.log('🔍 Submit button clicked');
        });
      }
    } else {
      console.error('🔍 Reservation form not found');
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
    // Cart count display is now handled by localStorage events
    // This method is kept for compatibility but no longer needed
    console.log('🔍 [updateCartCountDisplay] Method called but no longer needed');
  }
}

// Create and export singleton instance
export const summaryShared = new SummaryShared(); 