const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/summaryShared.-iQDg7sh.js","_astro/preload-helper.BlTxHScW.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper.BlTxHScW.js";import{S,g as b,a as f}from"./summaryShared.-iQDg7sh.js";class y{currentStep;currentEventListeners;summaryShared;constructor(){this.currentStep=1,this.currentEventListeners=[],this.summaryShared=new S,this.init()}async init(){console.log("🔍 [SummaryStepCoordinator] Initializing..."),await this.summaryShared.init(),this.setupEventListeners(),this.loadStep(this.currentStep),console.log("🔍 [SummaryStepCoordinator] Initialization complete")}setupEventListeners(){window.addEventListener("step-changed",e=>{const o=e.detail.step;if(console.log("🔍 [StepCoordinator] Step coordinator received step change:",o),console.log("🔍 [StepCoordinator] Current step before change:",this.currentStep),console.log("🔍 [StepCoordinator] Event detail:",e.detail),o>=1&&o<=3){this.currentStep=o;const t=document.getElementById("step-coordinator");t&&(t._currentStep=o),console.log("🔍 [StepCoordinator] Loading step:",o),this.loadStep(o)}else console.log("🔍 [StepCoordinator] Invalid step number:",o)}),window.addEventListener("cart-updated",async e=>{if(console.log("🔍 [CartUpdated] Event received, current step:",this.currentStep),this.currentStep===1){const t=(await this.summaryShared.getCart()).find(n=>n.type==="pod");let a=null;try{const n=localStorage.getItem("novapod-cart");n&&(a=JSON.parse(n).find(r=>r.type==="pod"))}catch{}if(t||a){const n=t||a;console.log("🔍 [CartUpdated] Step 1 - Showing selected pod:",n),this.showSelectedPod(n)}else console.log("🔍 [CartUpdated] Step 1 - Showing available pods"),this.showAvailablePods()}else if(this.currentStep===2){const t=(await this.summaryShared.getCart()).find(a=>a.type==="pod");t&&(console.log("🔍 [CartUpdated] Step 2 - Updating pod summary with:",t),this.updatePodSummary(t)),await this.updateSelectedPacksDisplay()}}),document.addEventListener("click",async e=>{const o=e.target;if(console.log(`🔍 [${new Date().toISOString()}] [Global] Click detected on:`,o),console.log(`🔍 [${new Date().toISOString()}] [Global] Target matches button[data-pack-id]:`,o&&o.matches("button[data-pack-id]")),o&&o.matches("button[data-pack-id]")){e.preventDefault(),e.stopPropagation();const a=o.getAttribute("data-pack-id"),n=o.getAttribute("data-action");let i;if(o.textContent.trim()==="Add Pack"||n==="add")i="add";else if(o.textContent.trim()==="Remove Pack"||n==="remove")i="remove";else{console.error("🔍 [Global] Unknown button state:",o.textContent,"data-action:",n);return}if(console.log(`🔍 [${new Date().toISOString()}] [Global] ===== PACK ACTION START =====`),console.log(`🔍 [${new Date().toISOString()}] [Global] Button text:`,o.textContent.trim()),console.log(`🔍 [${new Date().toISOString()}] [Global] Data action:`,n),console.log(`🔍 [${new Date().toISOString()}] [Global] Determined action: ${i} for pack: ${a}`),console.log(`🔍 [${new Date().toISOString()}] [Global] Current step:`,this.currentStep),console.log(`🔍 [${new Date().toISOString()}] [Global] Button disabled state:`,o.disabled),o.disabled){console.log("🔍 [Global] Button already processing, ignoring click");return}o.disabled=!0,console.log("🔍 [Global] Button disabled for processing");try{if(i==="add"){console.log("🔍 [Global] ===== ADDING PACK =====");const r=await this.summaryShared.hasPod();if(console.log("🔍 [Global] Has pod:",r),!r){this.summaryShared.showNotification("Please select a NovaPod first to add packs","warning");return}await this.summaryShared.addPack(a),console.log("🔍 [Global] ===== PACK ADDED SUCCESSFULLY =====")}else if(i==="remove"){console.log("🔍 [Global] ===== REMOVING PACK =====");const l=(await this.summaryShared.getCart()).find(c=>c.id===a&&c.type==="pack")?.name||"Selected Pack";window.removeItemConfirmationModal?window.removeItemConfirmationModal.show(l,"pack",async()=>{await this.summaryShared.removePack(a),console.log("🔍 [Global] ===== PACK REMOVED SUCCESSFULLY =====")},()=>{console.log("🔍 [Global] Remove pack cancelled")}):(await this.summaryShared.removePack(a),console.log("🔍 [Global] ===== PACK REMOVED SUCCESSFULLY ====="))}this.currentStep===2&&(console.log("🔍 [Global] ===== REFRESHING UI ====="),await this.refreshPackCards(),await this.updateSelectedPacksDisplay(),console.log("🔍 [Global] ===== UI REFRESHED ====="))}catch(r){console.error("🔍 [Global] Error in pack action:",r)}finally{setTimeout(()=>{o.disabled=!1,console.log("🔍 [Global] ===== PACK ACTION END - Button re-enabled =====")},500)}}const t=o.closest('#selected-packs-list button[data-action="remove"]');if(t&&t.getAttribute("data-pack-id")){e.preventDefault(),e.stopPropagation();const a=t.getAttribute("data-pack-id");if(a){console.log("🔍 [Global] Deleting pack from selected packs:",a);const r=(await this.summaryShared.getCart()).find(s=>s.id===a&&s.type==="pack")?.name||"Selected Pack";window.removeItemConfirmationModal?window.removeItemConfirmationModal.show(r,"pack",async()=>{await this.summaryShared.removePack(a),this.currentStep===2&&await this.refreshPackCards()},()=>{console.log("🔍 [Global] Remove pack cancelled")}):(await this.summaryShared.removePack(a),this.currentStep===2&&await this.refreshPackCards()),await this.updateSelectedPacksDisplay()}}})}async loadStep(e){if(console.log("🔍 [loadStep] Loading step:",e),!document.getElementById("step-coordinator")){console.error("🔍 [loadStep] Step coordinator element not found");return}switch(this.updateURL(e),this.cleanupEventListeners(),e){case 1:console.log("🔍 [loadStep] Loading Step 1"),await this.loadStep1();break;case 2:console.log("🔍 [loadStep] Loading Step 2"),await this.loadStep2();break;case 3:console.log("🔍 [loadStep] Loading Step 3"),await this.loadStep3();break;default:console.error("🔍 [loadStep] Unknown step:",e)}}updateURL(e){try{const o=new URL(window.location);o.searchParams.set("step",e.toString()),window.history.replaceState({},"",o),console.log("🔍 [updateURL] Updated URL to step:",e)}catch(o){console.error("🔍 [updateURL] Error updating URL:",o)}}cleanupEventListeners(){console.log("🔍 [cleanupEventListeners] Cleaning up event listeners"),this.currentEventListeners&&this.currentEventListeners.forEach(e=>{document.removeEventListener("click",e)}),this.currentEventListeners=[]}async loadStep1(){const e=document.getElementById("step-coordinator");e.innerHTML=`
        <div id="step-1-content" class="step-content">
          <!-- Content will be dynamically loaded based on cart state -->
        </div>
      `,await this.initializeStep1()}async loadStep2(){const e=document.getElementById("step-coordinator");e.innerHTML=`
        <div id="step-2-content" class="step-content">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-graphite-900 mb-4 gradient-title">
              Enhance Your Pod
            </h2>
            <p class="text-lg text-graphite-700 max-w-2xl mx-auto">
              Add recommended packs to maximize your NovaPod's potential. These add-ons are carefully selected to complement your chosen pod.
            </p>
          </div>

          <!-- Selected Items Row (Pod + Packs) -->
          <div class="flex flex-col lg:flex-row gap-6 mb-8">
                        <!-- Selected Pod Summary -->
            <div id="pod-summary" class="bg-gradient-to-br from-mint-50 to-cerulean-50 rounded-xl p-4 border border-mint-200 flex-1 min-w-0 flex flex-col h-full">
              <!-- Header Section -->
              <h3 class="text-base font-semibold text-graphite-900 mb-2">Selected Pod</h3>
              
 
              <!-- Pod Details Section -->
              <div class="flex-1 space-y-2 mb-3">
                <!-- Pod Description -->
                <div class="bg-white/60 rounded-lg p-2.5 border border-mint-200/50">
                  <div class="flex items-center space-x-3 mb-2">
                  <div class="w-8 h-8 bg-mint-500 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">                  
                    <h4 id="summary-pod-title" class="text-base font-semibold text-graphite-900 truncate">Your Pod</h4>
                    <p id="summary-pod-price" class="text-sm text-mint-600 font-medium">₹0/month</p>
                  </div>
                </div>
                  <p id="summary-pod-description" class="text-xs text-graphite-700 leading-relaxed">Pod description will appear here</p>
                </div>
              </div>

              <!-- CTA Section - Always at bottom -->
              <div class="ml-auto mt-auto pt-3 border-t border-mint-200/50">                
                  <button id="remove-pod-btn" class="text-xs text-red-600 hover:text-red-700 font-medium">
                    Remove Pod
                  </button>
                </div>
              </div>

            <!-- Selected Packs Section - Only show if packs are selected -->
            <div id="selected-packs-section" class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex-1 min-w-0 hidden">
              <h3 class="text-lg font-semibold text-graphite-900 mb-4">Selected Packs</h3>
              <div id="selected-packs-list" class="space-y-3 mb-6">
                ${this.renderSelectedPacksWithDelete()}
              </div>
              <!-- Continue button in selected packs container -->
              <div class="flex justify-end items-center pt-4 border-t border-gray-200">
                <button id="step2-continue-btn-selected" class="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-mint-500 to-cerulean-500 text-white font-inter font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 hover:scale-105 hover:shadow-md group flex-shrink-0 shadow-sm">
                  <span>Continue</span>
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Packs Section -->
          <div class="mb-8">
            <h3 id="packs-section-title" class="text-xl font-semibold text-graphite-900 mb-6">Available Packs</h3>
            <div id="packs-grid">
              <!-- Packs will be dynamically loaded here -->
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-end items-center pt-8 border-t border-gray-200">
            <button id="step2-continue-btn" class="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-mint-500 to-cerulean-500 text-white font-inter font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 hover:scale-105 hover:shadow-md group flex-shrink-0 shadow-sm">
              <span>Continue</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      `,await this.initializeStep2()}async loadStep3(){console.log("🔍 [loadStep3] Starting Step 3 load");const e=document.getElementById("step-coordinator");if(!e){console.error("🔍 [loadStep3] Step coordinator element not found");return}const o=await this.summaryShared.getCart(),t=o.find(i=>i.type==="pod");console.log("🔍 [loadStep3] Cart state:",o),console.log("🔍 [loadStep3] Selected pod:",t);const{getSiteKey:a}=await h(async()=>{const{getSiteKey:i}=await import("./recaptcha.DQ8rnUNH.js");return{getSiteKey:i}},[]),n=a("reservation");e.innerHTML=`
        <div id="step-3-content" class="step-content">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-graphite-900 mb-4 gradient-title">
              Reserve Your NovaPod
            </h2>
            <p class="text-lg text-graphite-700 max-w-2xl mx-auto">
              Complete your reservation by providing your contact information and estimated project duration. We'll get back to you within 24 hours.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Order Summary -->
            <div class="lg:order-2">
              <div class="bg-gradient-to-br from-mint-50 to-cerulean-50 rounded-2xl p-8 border border-mint-200">
                <h3 class="text-2xl font-bold text-graphite-900 mb-6">Order Summary</h3>
                
                <!-- Pod Summary -->
                <div class="mb-6">
                  <h4 class="font-semibold text-graphite-900 mb-3">Selected Pod</h4>
                  <div id="final-pod-summary" class="p-4 bg-white rounded-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <h5 id="final-pod-title" class="font-semibold text-graphite-900">Selected Pod</h5>
                      </div>
                      <p id="final-pod-price" class="font-bold text-mint-600">₹0/month</p>
                    </div>
                  </div>
                </div>

                <!-- Packs Summary -->
                <div id="final-packs-summary" class="mb-6">
                  <h4 class="font-semibold text-graphite-900 mb-3">Selected Packs</h4>
                  <div id="final-packs-list" class="space-y-2">
                    <!-- Packs will be listed here -->
                  </div>
                </div>

                <!-- Duration Display -->
                <div class="pt-4 border-t border-mint-200">
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-semibold text-graphite-900">Duration</span>
                    <span id="final-duration-display" class="text-lg text-graphite-600">1 month</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:order-1">
              <form id="reservation-form" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-graphite-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-graphite-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-graphite-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors">
                </div>
                
                <div>
                  <label for="company" class="block text-sm font-medium text-graphite-700 mb-2">Company Name</label>
                  <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors">
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-graphite-700 mb-2">Additional Requirements</label>
                  <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors" placeholder="Tell us about your project requirements, timeline, or any specific needs..."></textarea>
                </div>
                
                <!-- Hidden input for reservation period -->
                <input type="hidden" id="reservation-period" name="reservation-period" value="1">
                
                <!-- Reservation Period Selection -->
                <div>
                  <label class="block text-sm font-medium text-graphite-700 mb-3">Estimated Project Duration</label>
                  <div class="flex flex-wrap gap-3">
                    <button 
                      type="button"
                      class="step3-duration-chip px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium text-sm bg-mint-500 border-mint-500 text-white"
                      data-duration="1"
                    >
                      1 Month
                    </button>
                    <button 
                      type="button"
                      class="step3-duration-chip px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium text-sm bg-white border-gray-300 text-gray-700 hover:border-mint-400 hover:text-mint-600"
                      data-duration="3"
                    >
                      3 Months
                    </button>
                    <button 
                      type="button"
                      class="step3-duration-chip px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium text-sm bg-white border-gray-300 text-gray-700 hover:border-mint-400 hover:text-mint-600"
                      data-duration="6"
                    >
                      6 Months
                    </button>
                    <button 
                      type="button"
                      class="step3-duration-chip px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium text-sm bg-white border-gray-300 text-gray-700 hover:border-mint-400 hover:text-mint-600"
                      data-duration="12"
                    >
                      12 Months
                    </button>
                  </div>
                  <p class="text-sm text-graphite-500 mt-2">Duration is for project estimation only - pricing remains monthly</p>
                </div>
                
                <!-- reCAPTCHA Widget -->
                <div class="flex justify-center">
                  <div id="recaptcha-container" class="recaptcha-widget">
                    <div class="g-recaptcha" 
                         data-sitekey="${n}"
                         data-theme="light"
                         data-size="normal"
                         data-callback="onReservationRecaptchaSuccess"
                         data-expired-callback="onReservationRecaptchaExpired"
                         data-error-callback="onReservationRecaptchaError">
                    </div>
                  </div>
                </div>
                
                <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-mint-500 to-cerulean-500 text-white font-inter font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 hover:scale-105 hover:shadow-md group shadow-sm">
                  <span>Reserve My NovaPod</span>
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <!-- Navigation removed - no back button in Step 3 -->
        </div>
        
        <!-- Thank You Modal -->
        <div id="thank-you-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
          <div class="bg-white rounded-2xl p-8 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-graphite-900 mb-2">Thank You!</h3>
              <p class="text-graphite-600">Your NovaPod reservation has been submitted successfully.</p>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 class="font-semibold text-graphite-900 mb-4">Reservation Details</h4>
              <div id="modal-reservation-details" class="space-y-3 text-sm">
                <!-- Details will be populated here -->
              </div>
            </div>
            
            <div class="flex justify-center">
              <button id="close-modal-btn" class="inline-flex items-center px-6 py-3 bg-white text-graphite-900 font-inter font-medium rounded-lg hover:bg-graphite-50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <span>Close</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Remove Item Confirmation Modal -->
        <RemoveItemConfirmationModal />
      `,await this.initializeStep3()}async initializeStep1(){console.log("🔍 [initializeStep1] Starting initialization...");let e=[],o=null;try{e=await this.summaryShared.getCart(),console.log("🔍 [initializeStep1] Cart from this.summaryShared.getCart():",e),o=e.find(t=>t.type==="pod"),console.log("🔍 [initializeStep1] Selected pod from this.summaryShared.getCart():",o)}catch(t){console.error("🔍 [initializeStep1] Error with this.summaryShared.getCart():",t)}if(!o)try{const t=localStorage.getItem("novapod-cart");if(console.log("🔍 [initializeStep1] Direct localStorage value:",t),t){const a=JSON.parse(t);console.log("🔍 [initializeStep1] Parsed localStorage cart:",a),o=a.find(n=>n.type==="pod"),console.log("🔍 [initializeStep1] Selected pod from direct localStorage:",o)}}catch(t){console.error("🔍 [initializeStep1] Error reading direct localStorage:",t)}o?(console.log("🔍 [initializeStep1] Showing selected pod:",o),await this.showSelectedPod(o)):(console.log("🔍 [initializeStep1] No pod found, showing available pods"),await this.showAvailablePods()),this.addStep1EventListeners(),console.log("🔍 [initializeStep1] Initialization complete")}async initializeStep2(){console.log("🔍 [initializeStep2] Starting initialization...");const e=await this.summaryShared.getCart(),o=e.find(t=>t.type==="pod");if(console.log("🔍 [initializeStep2] Cart from localStorage:",e),console.log("🔍 [initializeStep2] Selected pod:",o),console.log("🔍 [initializeStep2] Selected pod reservationMonths:",o?.reservationMonths),o){console.log("🔍 [initializeStep2] Calling updatePodSummary..."),await this.updatePodSummary(o),console.log("🔍 [initializeStep2] Calling updatePodDetails directly..."),await this.updatePodDetails(o);const t=o.reservationMonths||1;console.log("🔍 [initializeStep2] Updating pricing for",t,"months"),await this.updatePricingForReservationPeriod(t),console.log("🔍 [initializeStep2] Loading packs..."),await this.loadPacksForStep2(o),console.log("🔍 [initializeStep2] Updating selected packs display..."),await this.updateSelectedPacksDisplay()}else{console.log("🔍 [initializeStep2] No pod found, redirecting to Step 1"),this.summaryShared.showNotification("Please select a NovaPod first to proceed","warning"),this.summaryShared.navigateToStep(1);return}this.addStep2EventListeners(),console.log("🔍 [initializeStep2] Initialization complete")}async initializeStep3(){console.log("🔍 [initializeStep3] Starting Step 3 initialization...");const e=await this.summaryShared.getCart(),o=e.find(a=>a.type==="pod"),t=e.filter(a=>a.type==="pack");if(console.log("🔍 [initializeStep3] Cart state:",e),console.log("🔍 [initializeStep3] Selected pod:",o),console.log("🔍 [initializeStep3] Selected packs:",t),o)console.log("🔍 [initializeStep3] Pod found, updating final summary..."),await this.updateFinalSummary(o,t),console.log("🔍 [initializeStep3] Final summary updated successfully");else{console.log("🔍 [initializeStep3] No pod found, redirecting to Step 1"),this.summaryShared.showNotification("Please select a NovaPod first to proceed","warning"),this.summaryShared.navigateToStep(1);return}this.addStep3EventListeners(),console.log("🔍 Step 3 initialization complete")}async showSelectedPod(e){const o=document.getElementById("step-1-content");o&&(o.innerHTML=`
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-graphite-900 mb-4 gradient-title">
              Your Selected NovaPod
            </h2>
            <p class="text-lg text-graphite-700 max-w-2xl mx-auto">
              Review your selected pod. You can customize the project duration in Step 3.
            </p>
          </div>

          <!-- Selected Pod Display -->
          <div class="max-w-xl mx-auto mb-6">
            <div class="bg-gradient-to-br from-mint-50 to-cerulean-50 rounded-xl p-6 border border-mint-200">
              <!-- Header Section -->
              <div class="flex items-start space-x-3 mb-4">
                <div class="w-10 h-10 bg-mint-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 id="selected-pod-title" class="text-lg font-bold text-graphite-900 mb-1 truncate">
                    <a href="/pods/${b(e.title||e.name)}" class="hover:text-mint-600 transition-colors cursor-pointer" title="View pod details">
                      ${e.title||e.name||"Selected Pod"}
                      <svg class="w-3 h-3 inline ml-1 text-mint-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </h3>
                  <p id="selected-pod-description" class="text-xs text-graphite-600 mb-2 line-clamp-2">${e.description||e.tagline||"Pod description"}</p>
                </div>
              </div>
              

              
              
              <!-- Pricing and Actions Section -->
              <div class="bg-white rounded-lg p-4 border border-mint-200 mb-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-baseline space-x-2">
                    <p id="selected-pod-price" class="text-2xl font-bold text-mint-600">Calculating...</p>
                    <p class="text-sm text-graphite-500">per month</p>
                  </div>                 
                </div>
                
                
              
                <!-- Compact Details Grid -->
                <div class="space-y-3">
                  
                  
                  <!-- Team Composition -->
                  ${e.whatsInPod?.teamComposition&&e.whatsInPod.teamComposition.length>0?`
                    <div class="bg-white rounded-lg p-3 border border-gray-200">
                      <h4 class="text-xs font-semibold text-graphite-900 mb-2 flex items-center">
                        <svg class="w-3 h-3 text-mint-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        Team Composition
                      </h4>
                      <div class="space-y-1.5">
                        ${e.whatsInPod.teamComposition.map(t=>`
                          <div class="flex items-center space-x-1.5">
                            <div class="w-4 h-4 bg-mint-100 rounded-sm flex items-center justify-center">
                              <svg class="w-2.5 h-2.5 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            <span class="text-xs text-graphite-700">${t}</span>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                  `:""}
                  
                  <!-- What Can Do (Deliverables) -->
                  ${e.whatCanDo&&e.whatCanDo.length>0?`
                    <div class="bg-white rounded-lg p-3 border border-gray-200">
                      <h4 class="text-xs font-semibold text-graphite-900 mb-2 flex items-center">
                        <svg class="w-3 h-3 text-mint-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        What You Get
                      </h4>
                      <div class="space-y-1.5">
                        ${e.whatCanDo.slice(0,4).map(t=>`
                          <div class="flex items-center space-x-1.5">
                            <div class="w-4 h-4 bg-cerulean-100 rounded-sm flex items-center justify-center">
                              <svg class="w-2.5 h-2.5 text-cerulean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <span class="text-xs text-graphite-700">${t}</span>
                          </div>
                        `).join("")}
                        ${e.whatCanDo.length>4?`
                          <div class="flex items-center space-x-1.5">
                            <div class="w-4 h-4 bg-gray-100 rounded-sm flex items-center justify-center">
                              <svg class="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            <span class="text-xs text-graphite-600">+${e.whatCanDo.length-4} more capabilities</span>
                          </div>
                        `:""}
                      </div>
                    </div>
                  `:""}                  
                </div>
                
              </div>
              <!-- Action Buttons -->
                <div class="flex gap-2">
                  <button id="remove-pod-btn" class="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm bg-white text-graphite-900 font-inter font-medium rounded-lg hover:bg-graphite-50 transition-all duration-300 border border-graphite-200 hover:border-graphite-300 shadow-sm hover:shadow-md">
                    <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  
                  <button id="view-pod-details-btn" class="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm glass border-graphite-300/50 text-graphite-700 font-inter font-medium rounded-lg hover:bg-graphite-50/50 hover:border-graphite-400/70 transition-all duration-300">
                    <svg class="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span>View Details</span>
                  </button>
                  
                  <button id="step1-continue-btn" class="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-mint-500 to-cerulean-500 text-white font-inter font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 hover:scale-105 hover:shadow-md group shadow-sm">
                    <span>Continue</span>
                    <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>

              
            </div>
          </div>
        `,await this.updatePodSummary(e))}async showAvailablePods(){console.log("🔍 [showAvailablePods] Starting to show available pods...");const e=document.getElementById("step-1-content");console.log("🔍 [showAvailablePods] Step 1 content element found:",!!e),e?(e.innerHTML=`
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-graphite-900 mb-4 gradient-title">
              Choose Your NovaPod
            </h2>
            <p class="text-lg text-graphite-700 max-w-2xl mx-auto">
              Select the perfect NovaPod solution for your business needs. Each pod is designed to deliver exceptional results.
            </p>
          </div>

          <!-- Available Pods Grid -->
          <div id="available-pods-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Pods will be dynamically loaded here -->
          </div>
        `,console.log("🔍 [showAvailablePods] HTML set, now loading available pods..."),await this.loadAvailablePods(),console.log("🔍 [showAvailablePods] Available pods loaded")):console.error("🔍 [showAvailablePods] Step 1 content element not found!")}async loadAvailablePods(){console.log("🔍 [loadAvailablePods] Starting to load available pods...");try{const e=await this.summaryShared.loadPods();console.log("🔍 [loadAvailablePods] Pods loaded:",e);const o=document.getElementById("available-pods-grid");if(console.log("🔍 [loadAvailablePods] Grid element found:",!!o),!o){console.error("🔍 [loadAvailablePods] Grid element not found!");return}if(!e||e.length===0){console.log("🔍 [loadAvailablePods] No pods found, showing empty state"),o.innerHTML='<p class="text-graphite-600 col-span-full text-center py-8">No pods are currently available.</p>';return}console.log("🔍 [loadAvailablePods] Rendering",e.length,"pods"),o.innerHTML=e.map(t=>`
          <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:border-mint-300 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
            <!-- Header with icon and title -->
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-mint-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-semibold text-graphite-900 truncate">${t.name}</h3>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-graphite-600 mb-4 flex-1">${t.tagline}</p>
            
            <!-- Ideal for section -->
            <div class="space-y-2 mb-4">
              <h4 class="text-sm font-medium text-graphite-700">Ideal for:</h4>
              <ul class="text-sm text-graphite-600 space-y-1">
                ${t.idealFor?t.idealFor.slice(0,2).map(a=>`<li>• ${a}</li>`).join(""):""}
              </ul>
            </div>
            
            <!-- Team Composition Preview -->
            ${t.teamComposition&&t.teamComposition.length>0?`
              <div class="space-y-2 mb-4">
                <h4 class="text-sm font-medium text-graphite-700">Team:</h4>
                <ul class="text-sm text-graphite-600 space-y-1">
                  ${t.teamComposition.slice(0,2).map(a=>`<li>• ${a.split("–")[0].trim()}</li>`).join("")}
                  ${t.teamComposition.length>2?`<li class="text-mint-600">+${t.teamComposition.length-2} more</li>`:""}
                </ul>
              </div>
            `:""}
            
            <!-- Pricing - positioned above button -->
            <div class="mb-4">
              ${t.discountPercentage>0?`
                <div class="space-y-1">
                  <div class="text-sm text-gray-500 line-through">₹${(t.basePriceINR/1e5).toFixed(1)}L/month</div>
                  <div class="text-lg font-bold text-mint-600">₹${(t.basePriceINR*(100-t.discountPercentage)/100/1e5).toFixed(1)}L/month</div>
                  <div class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full inline-block">${t.discountPercentage}% OFF</div>
                </div>
              `:`
                <span class="text-lg font-bold text-mint-600">₹${(t.basePriceINR/1e5).toFixed(1)}L/month</span>
              `}
            </div>
            
            <!-- CTA Button - always at bottom -->
            <button class="w-full bg-gradient-to-r from-mint-500 to-cerulean-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-mint-600 hover:to-cerulean-600 transition-all duration-300 transform hover:scale-105 mt-auto" data-pod-id="${t.id}">
              Reserve Pod
            </button>
          </div>
        `).join(""),console.log("🔍 [loadAvailablePods] Pods rendered successfully")}catch(e){console.error("🔍 [loadAvailablePods] Error loading pods:",e);const o=document.getElementById("available-pods-grid");o&&(o.innerHTML='<p class="text-red-600 col-span-full text-center py-8">Error loading pods. Please refresh the page.</p>')}}async loadPacksForStep2(e){console.log("🔍 [loadPacksForStep2] Starting with podItem:",e);const o=document.getElementById("packs-grid"),t=document.getElementById("packs-section-title");if(console.log("🔍 [loadPacksForStep2] Grid element:",o),console.log("🔍 [loadPacksForStep2] Title element:",t),!o){console.error("🔍 [loadPacksForStep2] packs-grid element not found!");return}try{const a=await this.summaryShared.loadAllPacks(),n=this.summaryShared.getPackCategories();if(console.log("🔍 [loadPacksForStep2] All packs:",a),console.log("🔍 [loadPacksForStep2] Categories:",n),!n||n.length===0){console.log("🔍 [loadPacksForStep2] No categories found, showing empty state"),t&&(t.textContent="No Packs Available"),o.innerHTML='<p class="text-graphite-600 col-span-full text-center py-8">No packs are currently available.</p>';return}t&&(t.textContent="Available Packs");const i=await this.renderPacksSection(n);console.log("🔍 [loadPacksForStep2] Generated HTML length:",i.length),o.innerHTML=i,console.log("🔍 [loadPacksForStep2] Packs loaded successfully")}catch(a){console.error("🔍 [loadPacksForStep2] Error loading packs:",a),t&&(t.textContent="Error Loading Packs"),o.innerHTML='<p class="text-red-600 col-span-full text-center py-8">Error loading packs. Please refresh the page.</p>'}}async renderPacksSection(e){console.log("🔍 [renderPacksSection] Starting with categories:",e);const t=this.getCurrentCart().filter(i=>i.type==="pack").map(i=>i.id);console.log("🔍 [renderPacksSection] Selected pack IDs:",t);const a=e.map(i=>`
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-graphite-900 mb-4">${i.title}</h4>
          <div class="flex overflow-x-auto pb-4">
            ${i.packs.map(r=>this.renderPackCard(r,t.includes(r.id))).join("")}
          </div>
        </div>
      `).join("");console.log("🔍 [renderPacksSection] Category packs HTML length:",a.length);const n=`
        <!-- Category Packs Sections -->
        ${a}
      `;return console.log("🔍 [renderPacksSection] Final HTML length:",n.length),n}renderPackCard(e,o=!1){console.log("🔍 [renderPackCard] Rendering pack:",e),console.log("🔍 [renderPackCard] isAdded:",o);const t=document.querySelector(".duration-chip.bg-mint-500");if(t)parseInt(t.getAttribute("data-duration")||"1");else{const r=this.getCurrentCart().find(s=>s.type==="pod");r&&r.reservationMonths&&r.reservationMonths}const a=e.basePriceINR*(100-e.discountPercentage)/100,n=i=>i>=1e5?`₹${(i/1e5).toFixed(1)}L`:i>=1e3?`₹${(i/1e3).toFixed(0)}K`:`₹${i}`;return console.log("🔍 [renderPackCard] Generated HTML for pack:",e.title),`
        <div class="pack-card bg-white rounded-xl min-w-[300px] p-6 mx-4 border border-gray-200 cursor-pointer ${o?"border-mint-500":""}" data-pack-id="${e.id}">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-cerulean-500 rounded-lg flex items-center justify-center">
                <span class="text-white text-lg">${e.icon||"📦"}</span>
              </div>
              ${e.badge?`<span class="px-2 py-1 text-xs font-medium rounded-full ${e.badgeColor==="green"?"bg-green-100 text-green-800":e.badgeColor==="blue"?"bg-blue-100 text-blue-800":"bg-purple-100 text-purple-800"}">${e.badge}</span>`:""}
            </div>
            <div class="text-right">
              ${e.discountPercentage>0?`
                <div class="text-sm text-gray-500 line-through">${n(e.basePriceINR)}</div>
                <div class="text-sm font-medium text-cerulean-600">${n(a)}</div>
                <div class="text-xs text-green-600">${e.discountPercentage}% OFF</div>
              `:`
                <div class="text-sm font-medium text-cerulean-600">${n(e.basePriceINR)}</div>
              `}
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-graphite-900 mb-2">
            <a href="/packs/${f(e.title)}" class="hover:text-cerulean-600 transition-colors cursor-pointer" title="View pack details">
              ${e.title}
              <svg class="w-4 h-4 inline ml-1 text-cerulean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </h3>
          <p class="text-graphite-600 mb-4">${e.description}</p>
          
          <div class="flex items-center justify-between">
            <span class="text-sm text-graphite-500">${e.duration}</span>
            <button class="px-4 py-2 rounded-lg font-medium transition-all duration-300 ${o?"bg-red-500 text-white hover:bg-red-600":"bg-cerulean-500 text-white hover:bg-cerulean-600"}" data-pack-id="${e.id}" data-action="${o?"remove":"add"}">
              ${o?"Remove Pack":"Add Pack"}
            </button>
          </div>
        </div>
      `}getCurrentCart(){try{const e=localStorage.getItem("novapod-cart");return e?JSON.parse(e):[]}catch(e){return console.error("Error reading cart from localStorage:",e),[]}}async getPackDetails(e){try{const{packsCatalog:o}=await h(async()=>{const{packsCatalog:a}=await import("./summaryShared.-iQDg7sh.js").then(n=>n.b);return{packsCatalog:a}},__vite__mapDeps([0,1]));for(const a of o.packCategories){const n=a.packs.find(i=>i.id===e);if(n)return n}const t=o.availablePacks.find(a=>a.id===e);return t||(console.error("Pack not found in catalog:",e),null)}catch(o){return console.error("Error getting pack details from catalog:",o),null}}async renderSelectedPacks(){const e=this.getCurrentCart(),o=e.filter(r=>r.type==="pack");if(o.length===0)return`
          <div class="text-center py-4">
            <p class="text-sm text-graphite-500">No packs selected yet</p>
            <p class="text-xs text-graphite-400 mt-1">Add packs in Step 2 to enhance your pod</p>
          </div>
        `;const t=document.querySelector(".duration-chip.bg-mint-500");if(t)parseInt(t.getAttribute("data-duration")||"1");else{const r=e.find(s=>s.type==="pod");r&&r.reservationMonths&&r.reservationMonths}const a=r=>r>=1e5?`₹${(r/1e5).toFixed(1)}L`:r>=1e3?`₹${(r/1e3).toFixed(0)}K`:`₹${r}`,n=o.map(async r=>{const s=await this.getPackDetails(r.id);if(!s)return"";const l=s.basePriceINR*(100-s.discountPercentage)/100,c=a(l);return`
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-cerulean-500 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm">${s.icon||"📦"}</span>
              </div>
              <div>
                <span class="font-medium text-graphite-900 text-sm">
                  <a href="/packs/${f(s.title||"Pack")}" class="hover:text-cerulean-600 transition-colors cursor-pointer" title="View pack details">
                    ${s.title||"Pack"}
                    <svg class="w-3 h-3 inline ml-1 text-cerulean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </span>
                <p class="text-xs text-graphite-500">${s.description||"Pack description"}</p>
              </div>
            </div>
            <span class="font-semibold text-cerulean-600 text-sm">${c}</span>
          </div>
        `});return(await Promise.all(n)).join("")}async renderSelectedPacksWithDelete(){const e=this.getCurrentCart(),o=e.filter(r=>r.type==="pack");if(o.length===0)return`
          <div class="text-center py-6">
            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <p class="text-sm text-graphite-500">No packs selected yet</p>
            <p class="text-xs text-graphite-400 mt-1">Browse and add packs below to enhance your pod</p>
          </div>
        `;const t=document.querySelector(".duration-chip.bg-mint-500");if(t)parseInt(t.getAttribute("data-duration")||"1");else{const r=e.find(s=>s.type==="pod");r&&r.reservationMonths&&r.reservationMonths}const a=r=>r>=1e5?`₹${(r/1e5).toFixed(1)}L`:r>=1e3?`₹${(r/1e3).toFixed(0)}K`:`₹${r}`,n=o.map(async r=>{const s=await this.getPackDetails(r.id);if(!s)return"";const l=s.basePriceINR*(100-s.discountPercentage)/100,c=a(l);return`
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-cerulean-500 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm">${s.icon||"📦"}</span>
              </div>
              <div>
                <span class="font-medium text-graphite-900 text-sm">
                  <a href="/packs/${f(s.title||"Pack")}" class="hover:text-cerulean-600 transition-colors cursor-pointer" title="View pack details">
                    ${s.title||"Pack"}
                    <svg class="w-3 h-3 inline ml-1 text-cerulean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </span>
                <p class="text-xs text-graphite-500">${s.description||"Pack description"}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <span class="font-semibold text-cerulean-600 text-sm">${c}</span>
                      <button class="text-gray-600 hover:text-red-500 p-1 rounded hover:bg-red-50/50 transition-colors bg-transparent !text-gray-600" data-pack-id="${r.id}" data-action="remove" title="Remove Pack">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
              </button>
            </div>
          </div>
        `});return(await Promise.all(n)).join("")}async updateSelectedPacksDisplay(){console.log("🔍 [updateSelectedPacksDisplay] ===== STARTING UPDATE =====");const e=document.getElementById("selected-packs-section"),o=document.getElementById("selected-packs-list");if(!e||!o){console.error("🔍 [updateSelectedPacksDisplay] Selected packs elements not found");return}const a=(await this.summaryShared.getCart()).filter(n=>n.type==="pack");if(console.log("🔍 [updateSelectedPacksDisplay] Selected packs count:",a.length),a.length===0)e.classList.add("hidden"),console.log("🔍 [updateSelectedPacksDisplay] No packs selected, hiding section");else{e.classList.remove("hidden"),console.log("🔍 [updateSelectedPacksDisplay] Packs selected, showing section");const n=await this.renderSelectedPacksWithDelete();console.log("🔍 [updateSelectedPacksDisplay] New content length:",n.length),o.innerHTML=n}console.log("🔍 [updateSelectedPacksDisplay] ===== UPDATE COMPLETED =====")}async refreshPackCards(){console.log("🔍 [refreshPackCards] ===== STARTING PACK CARDS REFRESH =====");try{const o=this.getCurrentCart().filter(a=>a.type==="pack").map(a=>a.id);console.log("🔍 [refreshPackCards] Selected pack IDs:",o);const t=document.querySelectorAll(".pack-card");console.log("🔍 [refreshPackCards] Found pack cards:",t.length),t.forEach(a=>{const n=a.getAttribute("data-pack-id"),i=a.querySelector("button[data-action]");if(n&&i){const r=o.includes(n);console.log("🔍 [refreshPackCards] Processing pack:",n,"isSelected:",r,"current action:",i.getAttribute("data-action")),r?(a.classList.add("ring-2","ring-mint-500","bg-mint-50"),a.classList.remove("bg-white")):(a.classList.remove("ring-2","ring-mint-500","bg-mint-50"),a.classList.add("bg-white")),r?(i.textContent="Remove Pack",i.setAttribute("data-action","remove"),i.className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-600 hover:text-red-500 bg-transparent hover:bg-red-50/50 !text-gray-600",i.disabled=!1,console.log("🔍 [refreshPackCards] Button classes after update (selected):",i.className)):(i.textContent="Add Pack",i.setAttribute("data-action","add"),i.className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-cerulean-500 text-white hover:bg-cerulean-600",i.disabled=!1,console.log("🔍 [refreshPackCards] Button classes after update (not selected):",i.className)),console.log("🔍 [refreshPackCards] Updated button for pack:",n,"new action:",i.getAttribute("data-action"),"disabled:",i.disabled)}}),await this.updateSelectedPacksDisplay(),console.log("🔍 [refreshPackCards] ===== PACK CARDS REFRESH COMPLETED =====")}catch(e){console.error("🔍 [refreshPackCards] Error refreshing pack cards:",e)}}showNoPodWarning(){const e=document.getElementById("packs-grid"),o=document.getElementById("packs-section-title");o&&(o.textContent="No Pod Selected"),e&&(e.innerHTML=`
          <div class="col-span-full text-center py-12">
            <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <svg class="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <h3 class="text-xl font-semibold text-yellow-800 mb-2">No Pod Selected</h3>
              <p class="text-yellow-700 mb-4">Please go back to step 1 and select a pod before adding packs.</p>
              <button id="go-to-step1-btn" class="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                Go to Step 1
              </button>
            </div>
          </div>
        `)}async updatePodSummary(e){console.log("🔍 [updatePodSummary] Updating pod summary with:",e);const t=(await this.summaryShared.getCart()).find(n=>n.type==="pod");if(!t){console.error("🔍 [updatePodSummary] No pod found in cart");return}console.log("🔍 [updatePodSummary] Latest pod item:",t);let a;this.currentStep===1?a={titleSelector:"#selected-pod-title",priceSelector:"#selected-pod-price"}:a={titleSelector:"#summary-pod-title",priceSelector:"#summary-pod-price"},await this.summaryShared.updatePodSummary(t,a),this.currentStep===2&&await this.updatePodDetails(t)}async getPodDetails(e){console.log("🔍 [getPodDetails] Getting pod details for ID:",e);try{const{podsCatalog:o}=await h(async()=>{const{podsCatalog:a}=await import("./summaryShared.-iQDg7sh.js").then(n=>n._);return{podsCatalog:a}},__vite__mapDeps([0,1])),t=o.availablePods.find(a=>a.id===e);return t?(console.log("🔍 [getPodDetails] Found pod:",t),t):(console.error("🔍 [getPodDetails] Pod not found in catalog:",e),null)}catch(o){return console.error("🔍 [getPodDetails] Error getting pod details from catalog:",o),null}}async updatePodDetails(e){console.log("🔍 [updatePodDetails] Updating pod details with:",e);try{const o=await this.getPodDetails(e.id);if(console.log("🔍 [updatePodDetails] Detailed pod data:",o),!o){console.error("🔍 [updatePodDetails] Could not get detailed pod data");return}const t=document.getElementById("summary-pod-description");if(t){const n=o.whatsInPod?.description||o.tagline||"Pod description not available";console.log("🔍 [updatePodDetails] Setting description:",n),t.textContent=n}else console.error("🔍 [updatePodDetails] Description element not found");console.log("🔍 [updatePodDetails] Team and capabilities elements removed from HTML structure - skipping updates");const a=document.getElementById("view-pod-details-btn");a&&(a.onclick=()=>{const n=this.generatePodSlug(o.name);window.open(`/pods/${n}`,"_blank")}),console.log("🔍 [updatePodDetails] Pod details updated successfully")}catch(o){console.error("🔍 [updatePodDetails] Error updating pod details:",o)}}generatePodSlug(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}async updateFinalSummary(e,o){await this.summaryShared.updatePodSummary(e,{titleSelector:"#final-pod-title",priceSelector:"#final-pod-price"});const t=document.getElementById("final-duration-display");if(t){const n=e.reservationMonths||1;t.textContent=`${n} month${n>1?"s":""}`}const a=document.getElementById("final-packs-list");if(a)if(o.length===0)a.innerHTML='<p class="text-graphite-500 text-sm">No packs selected</p>';else{const n=s=>s>=1e5?`₹${(s/1e5).toFixed(1)}L`:s>=1e3?`₹${(s/1e3).toFixed(0)}K`:`₹${s}`,i=o.map(async s=>{const l=await this.summaryShared.getPackDetails(s.id);if(!l)return"";const c=l.basePriceINR*(100-l.discountPercentage)/100,u=n(c);return`
              <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-cerulean-500 rounded-lg flex items-center justify-center">
                  <span class="text-white text-sm">${l.icon||"📦"}</span>
                </div>
                <span class="font-medium text-graphite-900">
                  <a href="/packs/${f(l.title)}" class="hover:text-cerulean-600 transition-colors cursor-pointer" title="View pack details">
                    ${l.title}
                    <svg class="w-3 h-3 inline ml-1 text-cerulean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <span class="font-semibold text-cerulean-600">${u}/month</span>
            </div>
          `}),r=await Promise.all(i);a.innerHTML=r.join("")}}async initializeStep3DurationChips(){console.log("🔍 [initializeStep3DurationChips] Initializing step 3 duration chips...");try{const t=(await this.summaryShared.getCart()).find(i=>i.type==="pod")?.reservationMonths||1;console.log("🔍 [initializeStep3DurationChips] Current months from cart:",t),document.querySelectorAll(".step3-duration-chip").forEach(i=>{parseInt(i.getAttribute("data-duration")||"1")===t?(i.classList.remove("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"),i.classList.add("bg-mint-500","border-mint-500","text-white")):(i.classList.remove("bg-mint-500","border-mint-500","text-white"),i.classList.add("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"))});const n=document.getElementById("reservation-period");n&&(n.value=t.toString(),console.log("🔍 [initializeStep3DurationChips] Set hidden input value to:",t)),console.log("🔍 [initializeStep3DurationChips] Step 3 duration chips initialized")}catch(e){console.error("🔍 [initializeStep3DurationChips] Error initializing step 3 duration chips:",e)}}async updatePricingForReservationPeriod(e){console.log("🔍 [updatePricingForReservationPeriod] Duration changed to",e,"months (for estimation only)");try{const o=await this.summaryShared.getCart(),t=o.find(a=>a.type==="pod");if(t&&(this.currentStep===1&&await this.updatePodSummary(t),this.currentStep===2&&await this.updatePodSummary(t),this.currentStep===3)){const a=o.filter(n=>n.type==="pack");await this.updateFinalSummary(t,a)}}catch(o){console.error("🔍 [updatePricingForReservationPeriod] Error updating summary:",o)}}updateAllPriceDisplays(e){document.querySelectorAll(".discounted-price-display").forEach(t=>{const a=parseInt(t.getAttribute("data-base-price-inr")||"0"),n=parseInt(t.getAttribute("data-base-price-usd")||"0"),i=parseInt(t.getAttribute("data-discount-percentage")||"0");if(t.getAttribute("data-item-type"),a>0){const r=a,s=n,l=t.querySelector(".final-price");if(l){let p="INR";typeof window<"u"&&window.userLocation&&(p=window.userLocation.currency);const m=p==="INR"?`₹${(r/1e5).toFixed(1)}L`:`$${(s/1e3).toFixed(1)}K`;l.textContent=m}const c=t.querySelector(".original-price");if(c){let p="INR";typeof window<"u"&&window.userLocation&&(p=window.userLocation.currency);const m=p==="INR"?`₹${(totalPriceINR/1e5).toFixed(1)}L`:`$${(totalPriceUSD/1e3).toFixed(1)}K`;c.textContent=m}const u=t.querySelector(".discount-badge-minimal");u&&i>0&&(u.textContent=`${i}% OFF`);const d=t.querySelector(".savings-text");if(d&&i>0){let p="INR";typeof window<"u"&&window.userLocation&&(p=window.userLocation.currency);const m=totalPriceINR-r,g=totalPriceUSD-s,v=p==="INR"?`₹${(m/1e5).toFixed(1)}L`:`$${(g/1e3).toFixed(1)}K`;d.textContent=`Save ${v}`}}})}addStep1EventListeners(){console.log("🔍 [Step1] Adding event listeners..."),document.addEventListener("click",async e=>{const t=e.target.closest("[data-pod-id]");if(t){console.log(`🔍 [${new Date().toISOString()}] [Step1] Pod button clicked:`,t.getAttribute("data-pod-id"));const a=t.getAttribute("data-pod-id"),n=await this.summaryShared.selectPodWithConfirmation(a);n&&await this.showSelectedPod(n)}}),document.addEventListener("click",async e=>{const t=e.target.closest("#step1-continue-btn");if(t&&this.currentStep===1){if(t.disabled){console.log(`🔍 [${new Date().toISOString()}] [Step1] Continue button already processing, ignoring duplicate click`);return}console.log(`🔍 [${new Date().toISOString()}] [Step1] Continue to Step 2 button clicked`),console.log("🔍 [Step1] Current step before nextStep():",this.currentStep),console.log("🔍 [Step1] About to call nextStep()"),t.disabled=!0;const a=t.textContent;t.textContent="Loading...";try{this.summaryShared.nextStep(),console.log("🔍 [Step1] nextStep() called")}catch(n){console.error(`🔍 [${new Date().toISOString()}] [Step1] Error navigating to Step 2:`,n),t.disabled=!1,t.textContent=a}}else t&&console.log("🔍 [Step1] Continue button clicked but ignored - not in Step 1 (current step:",this.currentStep,")")}),document.addEventListener("click",async e=>{e.target&&e.target.matches("#change-pod-btn")&&(console.log("🔍 [Step1] Change pod button clicked"),this.showAvailablePods())}),document.addEventListener("click",async e=>{e.target.closest("#remove-pod-btn")&&(console.log(`🔍 [${new Date().toISOString()}] [Step1] Remove pod button clicked`),e.preventDefault(),e.stopPropagation(),await this.summaryShared.removePod(),this.showAvailablePods())}),document.addEventListener("click",async e=>{const t=e.target.closest("#view-pod-details-btn");if(t){if(t.disabled){console.log(`🔍 [${new Date().toISOString()}] [Step1] View details button already processing, ignoring duplicate click`);return}console.log(`🔍 [${new Date().toISOString()}] [Step1] View pod details button clicked`),e.preventDefault(),e.stopPropagation(),t.disabled=!0;const a=t.innerHTML;t.innerHTML=`
            <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>Loading...</span>
          `;try{const i=(await this.summaryShared.getCart()).find(r=>r.type==="pod");if(i&&i.id){const r=b(i.title||i.name);console.log(`🔍 [${new Date().toISOString()}] [Step1] Navigating to pod details: /pods/${r}`),window.location.href=`/pods/${r}`}else this.summaryShared.showNotification("No pod selected to view details","warning"),t.disabled=!1,t.innerHTML=a}catch(n){console.error(`🔍 [${new Date().toISOString()}] [Step1] Error navigating to pod details:`,n),this.summaryShared.showNotification("Failed to navigate to pod details","error"),t.disabled=!1,t.innerHTML=a}}}),document.addEventListener("click",async e=>{const o=e.target;if(o.matches(".duration-chip")){e.preventDefault();const a=parseInt(o.getAttribute("data-duration")||"1");console.log("🔍 [Step1] Duration chip selected:",a),document.querySelectorAll(".duration-chip").forEach(r=>{const s=r;parseInt(s.getAttribute("data-duration")||"1")===a?(s.classList.remove("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"),s.classList.add("bg-mint-500","border-mint-500","text-white")):(s.classList.remove("bg-mint-500","border-mint-500","text-white"),s.classList.add("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"))}),console.log("🔍 [Step1] Calling updateHirePeriod..."),await this.summaryShared.updateHirePeriod(a),console.log("🔍 [Step1] updateHirePeriod completed");const i=document.getElementById("selected-pod-months");i&&(i.innerHTML=`Reservation Period: <span class="font-medium">${a} Month${a>1?"s":""}</span>`,console.log("🔍 [Step1] Updated months display in Step 1")),await this.updatePricingForReservationPeriod(a);try{const r=localStorage.getItem("novapod-cart");if(r){const l=JSON.parse(r).find(c=>c.type==="pod");console.log("🔍 [Step1] Pod in localStorage after update:",l)}}catch(r){console.error("🔍 [Step1] Error checking localStorage:",r)}}if(o.matches(".step3-duration-chip")){e.preventDefault();const a=parseInt(o.getAttribute("data-duration")||"1");console.log("🔍 [Step3] Duration chip selected:",a),document.querySelectorAll(".step3-duration-chip").forEach(s=>{const l=s;parseInt(l.getAttribute("data-duration")||"1")===a?(l.classList.remove("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"),l.classList.add("bg-mint-500","border-mint-500","text-white")):(l.classList.remove("bg-mint-500","border-mint-500","text-white"),l.classList.add("bg-white","border-gray-300","text-gray-700","hover:border-mint-400","hover:text-mint-600"))});const i=document.getElementById("reservation-period");i&&(i.value=a.toString(),console.log("🔍 [Step3] Updated hidden input value to:",a)),console.log("🔍 [Step3] Calling updateHirePeriod..."),await this.summaryShared.updateHirePeriod(a),console.log("🔍 [Step3] updateHirePeriod completed");const r=document.getElementById("final-duration-display");r&&(r.textContent=`${a} month${a>1?"s":""}`,console.log("🔍 [Step3] Updated duration display to:",a,"month(s)")),await this.updatePricingForReservationPeriod(a)}})}addStep2EventListeners(){console.log("🔍 [Step2] Adding event listeners..."),document.addEventListener("click",async e=>{if(e.target.closest("#remove-pod-btn")){console.log("🔍 [Step2] Remove pod button clicked"),e.preventDefault(),e.stopPropagation();const i=(await this.summaryShared.getCart()).find(r=>r.type==="pod")?.name||"Current Pod";if(window.removeItemConfirmationModal)window.removeItemConfirmationModal.show(i,"pod",async()=>{await this.summaryShared.removePod(),this.summaryShared.navigateToStep(1)},()=>{console.log("🔍 [Step2] Remove pod cancelled")});else{const r=()=>{window.removeItemConfirmationModal?window.removeItemConfirmationModal.show(i,"pod",async()=>{await this.summaryShared.removePod(),this.summaryShared.navigateToStep(1)},()=>{console.log("🔍 [Step2] Remove pod cancelled")}):setTimeout(r,100)};r()}}}),document.addEventListener("click",async e=>{const t=e.target.closest("#step2-continue-btn, #step2-continue-btn-selected");if(t){console.log("🔍 [Step2] Continue button clicked"),console.log("🔍 [Step2] Button ID:",t.id),console.log("🔍 [Step2] About to call nextStep()"),console.log("🔍 [Step2] this.summaryShared available:",typeof this.summaryShared),console.log("🔍 [Step2] this.summaryShared.nextStep available:",typeof this.summaryShared?.nextStep);const a=await this.summaryShared.getCart(),n=a.find(i=>i.type==="pod");console.log("🔍 [Step2] Cart state before navigation:",a),console.log("🔍 [Step2] Selected pod before navigation:",n);try{this.summaryShared&&typeof this.summaryShared.nextStep=="function"?(this.summaryShared.nextStep(),console.log("🔍 [Step2] nextStep() called successfully")):window.summaryShared&&typeof window.summaryShared.nextStep=="function"?(window.summaryShared.nextStep(),console.log("🔍 [Step2] nextStep() called via window.summaryShared")):(console.error("🔍 [Step2] summaryShared.nextStep not available"),console.log("🔍 [Step2] About to dispatch step-changed event manually"),window.dispatchEvent(new CustomEvent("step-changed",{detail:{step:3}})),console.log("🔍 [Step2] Manually dispatched step-changed event"))}catch(i){console.error("🔍 [Step2] Error calling nextStep:",i),console.log("🔍 [Step2] About to dispatch step-changed event in catch block"),window.dispatchEvent(new CustomEvent("step-changed",{detail:{step:3}})),console.log("🔍 [Step2] Fallback: manually dispatched step-changed event")}}}),document.addEventListener("click",e=>{e.target.closest("#go-to-step1-btn")&&this.summaryShared.navigateToStep(1)}),setTimeout(()=>{const e=document.getElementById("step2-continue-btn"),o=document.getElementById("step2-continue-btn-selected");console.log("🔍 [Step2] Debug - step2-continue-btn exists:",!!e),console.log("🔍 [Step2] Debug - step2-continue-btn-selected exists:",!!o),console.log("🔍 [Step2] Debug - this.summaryShared available:",typeof this.summaryShared)},100)}addStep3EventListeners(){console.log("🔍 Adding Step 3 event listeners..."),this.initializeStep3DurationChips();let e=null;window.onReservationRecaptchaSuccess=function(t){e=t,console.log("Reservation reCAPTCHA success:",t)},window.onReservationRecaptchaExpired=function(){e=null,console.log("Reservation reCAPTCHA expired")},window.onReservationRecaptchaError=function(){e=null,console.log("Reservation reCAPTCHA error")},this.initializeRecaptcha();const o=document.getElementById("reservation-form");o&&o.addEventListener("submit",async t=>{if(t.preventDefault(),console.log("🔍 [Step3] Form submission started"),!e){this.summaryShared.showNotification("Please complete the reCAPTCHA verification before submitting the form.","warning");return}const a=o.querySelector('button[type="submit"]'),n=a?.textContent||"Reserve My NovaPod";a&&(a.disabled=!0,a.textContent="Submitting...");const i=new FormData(o),r={name:i.get("name"),email:i.get("email"),phone:i.get("phone"),company:i.get("company"),message:i.get("message"),reservationPeriod:i.get("reservation-period")},s=await this.summaryShared.getCart(),l=s.find(d=>d.type==="pod"),c=s.filter(d=>d.type==="pack"),u={timestamp:new Date().toISOString(),formData:r,cartItems:{pod:l,packs:c},totalItems:s.length,step:this.currentStep,reservationPeriod:r.reservationPeriod};console.log("🔍 [Step3] ===== FORM SUBMISSION DATA ====="),console.log("🔍 [Step3] Form Values:",r),console.log("🔍 [Step3] Cart Items:",s),console.log("🔍 [Step3] Selected Pod:",l),console.log("🔍 [Step3] Selected Packs:",c),console.log("🔍 [Step3] Complete Submission Data:",u),console.log("🔍 [Step3] ===== END FORM SUBMISSION DATA =====");try{const d=i.get("reservation-period")||"1",p={...r,selected_pod:l?l.title||l.name:"",selected_pod_slug:l&&l.slug||"",selected_packs:c.length>0?c.map(v=>v.title||v.name).join(", "):"",reservation_period:`${d} month${parseInt(d)>1?"s":""}`,source:"NovaPod Reservation Form",recaptchaResponse:e,recaptchaAction:l&&l.slug?`pod_reservation_${l.slug}`:"pod_reservation"};console.log("🔍 [Step3] Submitting to HubSpot:",p);const g=await(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();if(g.success)console.log("🔍 [Step3] HubSpot submission successful:",g),this.showThankYouModal(u),setTimeout(async()=>{await this.clearFormAndCart()},2e3);else{console.error("🔍 [Step3] HubSpot submission failed:",g.error),this.summaryShared.showNotification(`Failed to submit reservation: ${g.error}. Please try again or contact support if the problem persists.`,"error");return}}catch(d){console.error("🔍 [Step3] Error submitting to HubSpot:",d),this.summaryShared.showNotification("Failed to submit reservation due to a network error. Please check your connection and try again.","error");return}finally{a&&(a.disabled=!1,a.textContent=n)}}),document.addEventListener("click",t=>{t.target&&t.target.matches("#close-modal-btn")&&this.hideThankYouModal()}),console.log("🔍 Step 3 event listeners added")}showThankYouModal(e){console.log("🔍 [showThankYouModal] Showing thank you modal");const o=document.getElementById("thank-you-modal"),t=document.getElementById("modal-reservation-details");if(o&&t){const a=this.generateModalDetailsHTML(e);t.innerHTML=a,o.classList.remove("hidden"),o.classList.add("flex"),console.log("🔍 [showThankYouModal] Modal displayed successfully")}else console.error("🔍 [showThankYouModal] Modal elements not found")}hideThankYouModal(){console.log("🔍 [hideThankYouModal] Hiding thank you modal");const e=document.getElementById("thank-you-modal");e&&(e.classList.add("hidden"),e.classList.remove("flex"),console.log("🔍 [hideThankYouModal] Modal hidden successfully"))}generateModalDetailsHTML(e){const{formData:o,cartItems:t,reservationPeriod:a}=e;let n=`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-graphite-900 mb-2">Contact Information</h5>
            <div class="space-y-1 text-graphite-600">
              <p><strong>Name:</strong> ${o.name||"Not provided"}</p>
              <p><strong>Email:</strong> ${o.email||"Not provided"}</p>
              <p><strong>Phone:</strong> ${o.phone||"Not provided"}</p>
              <p><strong>Company:</strong> ${o.company||"Not provided"}</p>
            </div>
          </div>
          
          <div>
            <h5 class="font-medium text-graphite-900 mb-2">Selected Items</h5>
            <div class="space-y-1 text-graphite-600">
              <p><strong>Pod:</strong> ${t.pod?t.pod.title:"None selected"}</p>
              <p><strong>Estimated Duration:</strong> ${a||"1"} month${parseInt(a||"1")>1?"s":""}</p>
              <p><strong>Packs:</strong> ${t.packs.length} selected</p>
            </div>
          </div>
        </div>
      `;return o.message&&(n+=`
          <div class="mt-4">
            <h5 class="font-medium text-graphite-900 mb-2">Additional Requirements</h5>
            <p class="text-graphite-600">${o.message}</p>
          </div>
        `),t.packs.length>0&&(n+=`
          <div class="mt-4">
            <h5 class="font-medium text-graphite-900 mb-2">Selected Packs</h5>
            <ul class="list-disc list-inside space-y-1 text-graphite-600">
              ${t.packs.map(i=>`<li>${i.title}</li>`).join("")}
            </ul>
          </div>
        `),n+=`
        <div class="mt-4 pt-4 border-t border-gray-200">
          <p class="text-xs text-graphite-500">
            <strong>Submission Time:</strong> ${new Date(e.timestamp).toLocaleString()}
          </p>
        </div>
      `,n}async clearFormAndCart(){console.log("🔍 [clearFormAndCart] ===== STARTING CLEAR OPERATION =====");try{const e=document.getElementById("reservation-form");e?(e.reset(),console.log("🔍 [clearFormAndCart] Form cleared successfully")):console.error("🔍 [clearFormAndCart] Form element not found"),localStorage.removeItem("novapod-cart"),console.log("🔍 [clearFormAndCart] Cart removed from localStorage"),this.summaryShared&&typeof this.summaryShared.clearCart=="function"&&(await this.summaryShared.clearCart(),console.log("🔍 [clearFormAndCart] Cart cleared via shared utility")),this.updateOrderSummaryForEmptyCart(),this.updateHeaderCartCount(0),this.clearAllStorageReferences(),console.log("🔍 [clearFormAndCart] ===== CLEAR OPERATION COMPLETED ====="),setTimeout(()=>{typeof window<"u"&&(window.location.href="/")},500)}catch(e){console.error("🔍 [clearFormAndCart] Error clearing form and cart:",e)}}updateOrderSummaryForEmptyCart(){console.log("🔍 [updateOrderSummaryForEmptyCart] Updating order summary for empty cart");const e=document.getElementById("final-pod-title"),o=document.getElementById("final-pod-duration"),t=document.getElementById("final-pod-price");e&&(e.textContent="No Pod Selected"),o&&(o.textContent="Not set"),t&&(t.textContent="₹0/month");const a=document.getElementById("final-packs-list");a&&(a.innerHTML='<p class="text-graphite-500 text-sm">No packs selected</p>');const n=document.getElementById("total-price");n&&(n.textContent="₹0"),console.log("🔍 [updateOrderSummaryForEmptyCart] Order summary updated for empty cart")}updateHeaderCartCount(e){console.log("🔍 [updateHeaderCartCount] Updating header cart count to:",e);try{const o=document.querySelectorAll("[data-cart-count]"),t=document.querySelectorAll('.cart-badge, .cart-count, [class*="cart-count"]');o.forEach(n=>{n.textContent=e.toString(),n.setAttribute("data-cart-count",e.toString()),e===0?n.style.display="none":n.style.display="inline"}),t.forEach(n=>{n.textContent=e.toString(),e===0?n.style.display="none":n.style.display="inline"}),[".header .cart-count",".navbar .cart-count",".nav .cart-count",".cart-icon .count",".cart-badge .count",'[class*="cart"] [class*="count"]'].forEach(n=>{document.querySelectorAll(n).forEach(r=>{r.textContent=e.toString(),e===0?r.style.display="none":r.style.display="inline"})}),console.log("🔍 [updateHeaderCartCount] Header cart count updated successfully")}catch(o){console.error("🔍 [updateHeaderCartCount] Error updating header cart count:",o)}}clearAllStorageReferences(){console.log("🔍 [clearAllStorageReferences] Clearing all storage references...");try{Object.keys(localStorage).filter(i=>i.includes("cart")||i.includes("pod")||i.includes("pack")||i.includes("reservation")||i.includes("summary")||i.includes("step")).forEach(i=>{localStorage.removeItem(i),console.log("🔍 [clearAllStorageReferences] Removed localStorage key:",i)}),Object.keys(sessionStorage).filter(i=>i.includes("cart")||i.includes("pod")||i.includes("pack")||i.includes("reservation")||i.includes("summary")||i.includes("step")).forEach(i=>{sessionStorage.removeItem(i),console.log("🔍 [clearAllStorageReferences] Removed sessionStorage key:",i)}),document.cookie.split(";").forEach(i=>{const[r]=i.split("=");r&&(r.includes("cart")||r.includes("pod")||r.includes("pack"))&&(document.cookie=`${r.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,console.log("🔍 [clearAllStorageReferences] Removed cookie:",r.trim()))}),console.log("🔍 [clearAllStorageReferences] All storage references cleared successfully")}catch(e){console.error("🔍 [clearAllStorageReferences] Error clearing storage references:",e)}}initializeRecaptcha(){if(console.log("🔍 [initializeRecaptcha] Starting reCAPTCHA initialization..."),typeof window.grecaptcha>"u"){const e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js",e.async=!0,e.defer=!0,e.onload=()=>{console.log("🔍 [initializeRecaptcha] reCAPTCHA script loaded, waiting for ready..."),window.grecaptcha&&window.grecaptcha.ready?window.grecaptcha.ready(()=>{console.log("🔍 [initializeRecaptcha] reCAPTCHA is ready, rendering widget..."),this.renderRecaptchaWidget()}):setTimeout(()=>{console.log("🔍 [initializeRecaptcha] Fallback: rendering widget..."),this.renderRecaptchaWidget()},1e3)},e.onerror=()=>{console.error("🔍 [initializeRecaptcha] Failed to load reCAPTCHA script"),this.summaryShared.showNotification("Failed to load reCAPTCHA. Please refresh the page and try again.","error")},document.head.appendChild(e)}else console.log("🔍 [initializeRecaptcha] reCAPTCHA script already loaded, checking if ready..."),window.grecaptcha&&window.grecaptcha.ready?window.grecaptcha.ready(()=>{console.log("🔍 [initializeRecaptcha] reCAPTCHA is ready, rendering widget..."),this.renderRecaptchaWidget()}):(console.log("🔍 [initializeRecaptcha] Fallback: rendering widget..."),this.renderRecaptchaWidget())}async renderRecaptchaWidget(){const e=document.getElementById("recaptcha-container");if(e){console.log("🔍 [renderRecaptchaWidget] Found reCAPTCHA container, rendering...");let o=null;try{const r=(await this.summaryShared.getCart()).find(s=>s.type==="pod");r&&r.slug&&(o=r.slug,console.log("🔍 [renderRecaptchaWidget] Current pod slug:",o))}catch{console.log("🔍 [renderRecaptchaWidget] Could not get current pod, using default config")}if(typeof window.grecaptcha>"u"){console.log("🔍 [renderRecaptchaWidget] grecaptcha not available, waiting..."),setTimeout(()=>this.renderRecaptchaWidget(),500);return}const t=e.querySelector(".g-recaptcha");if(t&&t.children.length>0){console.log("🔍 [renderRecaptchaWidget] reCAPTCHA widget already rendered");return}e.innerHTML="";const a=document.createElement("div");a.className="g-recaptcha";let n;if(o){const{getPodSiteKey:i}=await h(async()=>{const{getPodSiteKey:r}=await import("./recaptcha.DQ8rnUNH.js");return{getPodSiteKey:r}},[]);n=i(o)}else{const{getSiteKey:i}=await h(async()=>{const{getSiteKey:r}=await import("./recaptcha.DQ8rnUNH.js");return{getSiteKey:r}},[]);n=i("reservation")}a.setAttribute("data-sitekey",n),a.setAttribute("data-theme","light"),a.setAttribute("data-size","normal"),a.setAttribute("data-callback","onReservationRecaptchaSuccess"),a.setAttribute("data-expired-callback","onReservationRecaptchaExpired"),a.setAttribute("data-error-callback","onReservationRecaptchaError"),e.appendChild(a);try{const i=window.grecaptcha.render(a,{sitekey:n,theme:"light",size:"normal",callback:"onReservationRecaptchaSuccess","expired-callback":"onReservationRecaptchaExpired","error-callback":"onReservationRecaptchaError"});console.log("🔍 [renderRecaptchaWidget] reCAPTCHA widget rendered successfully with ID:",i),e.setAttribute("data-widget-id",i.toString())}catch(i){console.error("🔍 [renderRecaptchaWidget] Failed to render reCAPTCHA widget:",i),this.summaryShared.showNotification("Failed to load reCAPTCHA. Please refresh the page and try again.","error")}}else console.log("🔍 [renderRecaptchaWidget] reCAPTCHA container not found")}}new y;
