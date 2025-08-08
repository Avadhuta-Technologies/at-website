class d{constructor(){this.init()}async init(){console.log("🟡 [SelectedItemsDisplay] Initializing..."),await this.loadSelectedItems(),window.addEventListener("cart-updated",()=>{console.log("🟡 [SelectedItemsDisplay] Cart updated event received"),this.loadSelectedItems()}),console.log("🟡 [SelectedItemsDisplay] Initialization complete")}async loadSelectedItems(){console.log("🟡 [SelectedItemsDisplay] loadSelectedItems called");try{console.log("🟡 [SelectedItemsDisplay] Showing loading state..."),this.showLoading(),console.log("🟡 [SelectedItemsDisplay] Getting cart from localStorage...");const e=this.getCartFromLocalStorage();console.log("🟡 [SelectedItemsDisplay] Cart received:",e),this.renderItems(e)}catch(e){console.error("🟡 [SelectedItemsDisplay] Error loading selected items:",e),this.showEmpty()}}getCartFromLocalStorage(){try{const e=localStorage.getItem("novapod-cart");return e?JSON.parse(e):[]}catch(e){return console.error("🟡 [SelectedItemsDisplay] Error reading localStorage:",e),[]}}showLoading(){document.getElementById("loading-state")?.classList.remove("hidden"),document.getElementById("empty-state")?.classList.add("hidden"),document.getElementById("items-list")?.classList.add("hidden")}showEmpty(){document.getElementById("loading-state")?.classList.add("hidden"),document.getElementById("empty-state")?.classList.remove("hidden"),document.getElementById("items-list")?.classList.add("hidden")}renderItems(e){if(e.length===0){this.showEmpty();return}document.getElementById("loading-state")?.classList.add("hidden"),document.getElementById("empty-state")?.classList.add("hidden"),document.getElementById("items-list")?.classList.remove("hidden");const t=e.filter(s=>s.type==="pod"),o=e.filter(s=>s.type==="pack");this.renderPodSection(t),this.renderPacksSection(o),this.updateSummary(e.length),this.updateContinueButton(t.length>0)}renderPodSection(e){const t=document.getElementById("pod-section"),o=document.getElementById("no-pod-state");e.length>0?(t?.classList.remove("hidden"),o?.classList.add("hidden"),this.renderPod(e[0])):(t?.classList.add("hidden"),o?.classList.remove("hidden"))}renderPacksSection(e){const t=document.getElementById("packs-section"),o=document.getElementById("no-packs-state");e.length>0?(t?.classList.remove("hidden"),o?.classList.add("hidden"),this.renderPacks(e)):(t?.classList.add("hidden"),o?.classList.remove("hidden"))}renderPod(e){const t=document.getElementById("pod-item");t&&(t.innerHTML=`
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <h5 class="text-lg font-semibold text-gray-900">${e.title}</h5>
              </div>
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">${e.description}</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-primary-600">${e.price}</span>
                ${e.reservationMonths?`<span class="text-sm text-gray-500">${e.reservationMonths} months</span>`:""}
              </div>
            </div>
            <button 
              class="remove-pod-btn ml-4 p-2 text-gray-600 hover:text-red-500 transition-colors !text-gray-600"
              title="Remove pod"
              data-item-id="${e.id}"
              data-item-type="pod"
              data-item-name="${e.title}"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          </div>
        `)}renderPacks(e){const t=document.getElementById("packs-list");t&&(t.innerHTML=e.map(o=>`
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <h5 class="text-lg font-semibold text-gray-900">${o.title}</h5>
                </div>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">${o.description}</p>
                <div class="flex items-center justify-between">
                  <span class="text-lg font-bold text-green-600">${o.price}</span>
                  ${o.duration?`<span class="text-sm text-gray-500">${o.duration}</span>`:""}
                </div>
              </div>
              <button 
                class="remove-pack-btn ml-4 p-2 text-gray-600 hover:text-red-500 transition-colors !text-gray-600"
                title="Remove pack"
                data-item-id="${o.id}"
                data-item-type="pack"
                data-item-name="${o.title}"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        `).join(""))}updateSummary(e){const t=document.getElementById("summary-section"),o=document.getElementById("total-items");t&&o&&(t.classList.remove("hidden"),o.textContent=e.toString())}updateContinueButton(e){const t=document.getElementById("continue-btn");t&&(e?(t.disabled=!1,t.textContent="Continue",t.onclick=()=>{window.location.href="/checkout"}):(t.disabled=!0,t.textContent="Select a Pod to Continue"))}}document.addEventListener("click",async i=>{const e=i.target,t=e.closest(".remove-pod-btn"),o=e.closest(".remove-pack-btn");if(t){i.preventDefault();const s=t.getAttribute("data-item-id"),n=t.getAttribute("data-item-type"),a=t.getAttribute("data-item-name")||"Current Pod";console.log("🟡 [SelectedItemsDisplay] Remove pod button clicked:",{itemId:s,itemType:n,itemName:a}),s&&n&&(window.removeItemConfirmationModal?window.removeItemConfirmationModal.show(a,"pod",async()=>{await window.removeFromCart(s,n)},()=>{console.log("🟡 [SelectedItemsDisplay] Remove pod cancelled")}):await window.removeFromCart(s,n))}if(o){i.preventDefault();const s=o.getAttribute("data-item-id"),n=o.getAttribute("data-item-type"),a=o.getAttribute("data-item-name")||"Selected Pack";console.log("🟡 [SelectedItemsDisplay] Remove pack button clicked:",{itemId:s,itemType:n,itemName:a}),s&&n&&(window.removeItemConfirmationModal?window.removeItemConfirmationModal.show(a,"pack",async()=>{await window.removeFromCart(s,n)},()=>{console.log("🟡 [SelectedItemsDisplay] Remove pack cancelled")}):await window.removeFromCart(s,n))}});window.removeFromCart=async function(i,e){console.log("🟡 [SelectedItemsDisplay] removeFromCart called with:",{itemId:i,itemType:e});try{const t=localStorage.getItem("novapod-cart");if(t){const s=JSON.parse(t).filter(n=>!(n.id===i&&n.type===e));localStorage.setItem("novapod-cart",JSON.stringify(s)),window.dispatchEvent(new CustomEvent("cart-updated")),console.log("🟡 [SelectedItemsDisplay] Item removed successfully"),window.showNotification&&window.showNotification("Item removed from selection","success")}else console.error("🟡 [SelectedItemsDisplay] No cart data found"),window.showNotification&&window.showNotification("Failed to remove item","error")}catch(t){console.error("🟡 [SelectedItemsDisplay] Error removing item:",t),window.showNotification&&window.showNotification("Error removing item","error")}};typeof window<"u"&&(console.log("🟡 [SelectedItemsDisplay] Creating component instance..."),window.selectedItemsDisplay=new d,console.log("🟡 [SelectedItemsDisplay] Component instance created"),window.testRemoveFromCart=async function(){console.log("🟡 [SelectedItemsDisplay] Test remove function called");const i=localStorage.getItem("novapod-cart");if(i){const e=JSON.parse(i);if(console.log("🟡 [SelectedItemsDisplay] Current cart:",e),e.length>0){const t=e[0];console.log("🟡 [SelectedItemsDisplay] Removing first item:",t),await window.removeFromCart(t.id,t.type)}else console.log("🟡 [SelectedItemsDisplay] Cart is empty")}else console.log("🟡 [SelectedItemsDisplay] No cart data found")});
