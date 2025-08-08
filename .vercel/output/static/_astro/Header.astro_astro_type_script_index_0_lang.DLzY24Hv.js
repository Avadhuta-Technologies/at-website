const u=document.getElementById("navbar");function m(){if(!u)return;(window.pageYOffset||document.documentElement.scrollTop)>50?u.classList.add("scrolled"):u.classList.remove("scrolled")}function g(){document.querySelectorAll(".dropdown-toggle").forEach(e=>{const t=e.nextElementSibling,o=e.querySelector("svg");if(!t||!o)return;let s;e.addEventListener("mouseenter",()=>{clearTimeout(s),document.querySelectorAll(".dropdown-menu").forEach(l=>{if(l!==t){l.classList.remove("show");const c=l.previousElementSibling?.querySelector("svg");c&&(c.style.transform="rotate(0deg)")}}),t.classList.add("show"),o.style.transform="rotate(180deg)"}),e.addEventListener("mouseleave",()=>{s=window.setTimeout(()=>{t.classList.remove("show"),o.style.transform="rotate(0deg)"},150)}),t.addEventListener("mouseenter",()=>{clearTimeout(s)}),t.addEventListener("mouseleave",()=>{s=window.setTimeout(()=>{t.classList.remove("show"),o.style.transform="rotate(0deg)"},150)})})}const i=document.getElementById("navbarToggler"),n=document.getElementById("navbarCollapse");console.log("Navbar elements:",{navbarToggler:i,navbarCollapse:n});i&&n&&(i.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),console.log("Hamburger clicked!");const e=n.classList.contains("hidden");console.log("Is hidden:",e),e?(n.classList.remove("hidden"),n.classList.add("show"),console.log("Menu shown")):(n.classList.add("hidden"),n.classList.remove("show"),console.log("Menu hidden")),i.querySelectorAll("span").forEach((o,s)=>{s===0?o.style.transform=e?"rotate(45deg) translate(5px, 5px)":"none":s===1?o.style.opacity=e?"0":"1":s===2&&(o.style.transform=e?"rotate(-45deg) translate(7px, -6px)":"none")})}),document.addEventListener("click",r=>{!i.contains(r.target)&&!n.contains(r.target)&&(n.classList.add("hidden"),n.classList.remove("show"),i.querySelectorAll("span").forEach((t,o)=>{o===0?t.style.transform="none":o===1?t.style.opacity="1":o===2&&(t.style.transform="none")}))}),window.addEventListener("resize",()=>{window.innerWidth>=1024&&(n.classList.add("hidden"),n.classList.remove("show"),i.querySelectorAll("span").forEach((e,t)=>{t===0?e.style.transform="none":t===1?e.style.opacity="1":t===2&&(e.style.transform="none")}))}));function v(){const r=document.querySelectorAll(".megamenu-item"),e=document.getElementById("details-panel");if(!e)return;const t={"our-work":{title:"Our Work",description:"Discover cutting-edge solutions that transform businesses",icon:`<svg class="w-8 h-8 text-charcoal-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>`,stats:[{label:"Projects Completed",value:"150+"},{label:"Industries Served",value:"25+"},{label:"Success Rate",value:"98%"}],highlights:["AI-Powered Solutions","Cloud-Native Architecture","Real-time Analytics","Scalable Systems"],color:"primary"},contact:{title:"Contact",description:"Ready to start your digital transformation journey?",icon:'<svg class="w-8 h-8 text-charcoal-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',stats:[{label:"Response Time",value:"< 2hrs"},{label:"Expert Team",value:"50+"},{label:"Client Satisfaction",value:"99%"}],highlights:["Free Consultation","24/7 Support","Custom Solutions","Dedicated Team"],color:"green"},"case-studies":{title:"Case Studies",description:"Real results that speak louder than words",icon:'<svg class="w-8 h-8 text-charcoal-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',stats:[{label:"ROI Improvement",value:"300%"},{label:"Time Saved",value:"60%"},{label:"Cost Reduction",value:"40%"}],highlights:["E-commerce Platform","Healthcare Solutions","FinTech Applications","Enterprise Systems"],color:"purple"},portfolio:{title:"Portfolio",description:"Showcasing excellence across diverse technologies",icon:'<svg class="w-8 h-8 text-charcoal-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',stats:[{label:"Technologies",value:"15+"},{label:"Frameworks",value:"25+"},{label:"Platforms",value:"10+"}],highlights:["React & Next.js","Node.js & Python","AWS & Azure","Mobile Apps"],color:"orange"}};r.forEach(o=>{const s=o.getAttribute("data-target");if(!s||!["our-work","contact","case-studies","portfolio"].includes(s))return;const a=t[s];a&&o.addEventListener("mouseenter",()=>{const c={primary:"from-[#22c55e] to-[#0ea5e9]",green:"from-[#22c55e] to-[#0ea5e9]",purple:"from-[#22c55e] to-[#0ea5e9]",orange:"from-[#22c55e] to-[#0ea5e9]"};e.innerHTML=`
          <div class="h-full">
            <div class="text-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r ${c[a.color]} rounded-lg flex items-center justify-center mx-auto mb-3">
                ${a.icon}
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">${a.title}</h3>
              <p class="text-sm text-gray-600 ">${a.description}</p>
            </div>
            
            <!-- Stats Section -->
            <div class="grid grid-cols-3 gap-2 mb-4">
              ${a.stats.map(d=>`
                <div class="text-center p-2 rounded-lg bg-white/50 ">
                  <div class="text-lg font-bold text-${a.color}-600 ">${d.value}</div>
                  <div class="text-xs text-gray-600 ">${d.label}</div>
                </div>
              `).join("")}
            </div>
            
            <!-- Highlights Section -->
            <div class="space-y-1 mb-4">
              <h4 class="font-semibold text-gray-900  mb-2 text-sm">Key Highlights</h4>
              ${a.highlights.map(d=>`
                <div class="flex items-center p-1.5 rounded-lg bg-white/30">
                  <svg class="w-3 h-3 text-${a.color}-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-xs text-gray-700 ">${d}</span>
                </div>
              `).join("")}
            </div>
            
            <div class="text-center">
              <a href="/${s}" class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${c[a.color]} text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
                View ${a.title}
                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        `})})}function h(){const r=document.getElementById("header-cart-toggle"),e=document.querySelector(".cart-badge");r&&r.addEventListener("click",()=>{window.location.href="/summary"});function t(){try{const o=localStorage.getItem("novapod-cart");if(o){const l=JSON.parse(o).length;e&&(l>0?(e.textContent=l.toString(),e.style.display="flex"):e.style.display="none")}else e&&(e.style.display="none")}catch(o){console.error("🟡 [Header] Error reading cart from localStorage:",o),e&&(e.style.display="none")}}window.addEventListener("cart-updated",t),t()}g();v();h();window.addEventListener("scroll",m);window.addEventListener("load",m);
