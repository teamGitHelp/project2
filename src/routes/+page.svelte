<script>
     import { goto } from '$app/navigation';
     import { base } from '$app/paths';
   </script>
   
   <div class="min-h-screen bg-white">

     <main class="max-w-7xl mx-auto px-6 py-12">
       <div class="bg-[#A3DAC233] rounded-3xl p-12 mb-12 relative overflow-hidden">
         <h1 class="text-6xl font-bold text-[#A3DAC2] mb-8">Emergency Hotline</h1>
         <button 
         class="bg-[#E7C2D4] text-[#252861] px-6 py-2 rounded-full font-medium"
         on:click={() => goto(`${base}/request-page`)}
       >
         Request Assistance
       </button>
         <div class="absolute top-0 right-0 w-32 h-32 bg-[#7CAB96] rounded-bl-full"></div>
         <div class="absolute bottom-0 left-0 w-24 h-24">
           <svg viewBox="0 0 100 100" class="text-[#E7C2D4]" fill="none" stroke="currentColor">
             <path d="M10,50 Q50,10 90,50" stroke-width="2"/>
           </svg>
         </div>
         <div class="absolute bottom-0 right-0 w-24 h-24">
           <svg viewBox="0 0 100 100" class="text-[#252861]" fill="none" stroke="currentColor">
             <path d="M10,90 Q50,50 90,90" stroke-width="2"/>
           </svg>
         </div>
       </div>
   
       <p class="text-center text-[#252861] font-bold mb-12">We're here to help, 24/7.</p>
   
       <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
         <!-- Barangay Section -->
         <div class="bg-mint-50 rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-[#A3DAC2] mb-4 ">Barangay</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Banicain</span>
               <span class="text-[#252861]">611-0382</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">Barretto</span>
               <span class="text-[#7CAB96]">222-4295</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">East Bajac Bajac</span>
               <span class="text-[#252861]">222-5035</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">East Tapinac</span>
               <span class="text-[#7CAB96]">223-3444</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Gordon Heights</span>
               <span class="text-[#252861]">223-5497</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">Kalaklan</span>
               <span class="text-[#7CAB96]">224-6983</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Mabayuan</span>
               <span class="text-[#252861]">602-3900</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">New Asinan</span>
               <span class="text-[#7CAB96]">223-5708</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">New Cabalan</span>
               <span class="text-[#252861]">224-5414</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">New Ilalim</span>
               <span class="text-[#7CAB96]">602-0328</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">New Kababae</span>
               <span class="text-[#252861]">222-8326</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">New Kalalake</span>
               <span class="text-[#7CAB96]">224-8264</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Old Cabalan</span>
               <span class="text-[#252861]">603-1700</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">Pag-Asa</span>
               <span class="text-[#7CAB96]">222-8037</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Sta. Rita</span>
               <span class="text-[#252861]">222-9225</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#7CAB96]">West Bajac Bajac</span>
               <span class="text-[#7CAB96]">222-5173</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">West Tapinac</span>
               <span class="text-[#252861]">223-3434</span>
             </div>
           </div>
         </div>
   
         <!-- Police Station Section -->
         <div class="bg-blue-50 rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-[#92BDF6] mb-4">Police Station</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">(PNP) Maritime Group</span>
               <span class="text-[#252861]">0999-524-0246</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">BJMP 164</span>
               <span class="text-[#92BDF6]">602-7330</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">OCPO</span>
               <span class="text-[#252861]">222-5731</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">PHIL. Coast Guard</span>
               <span class="text-[#92BDF6]">0998-585-8197</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">PHIL. Navy (San Antonio)</span>
               <span class="text-[#252861]">0917-882-2347</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">SAF/TOC</span>
               <span class="text-[#92BDF6]">0907-554-9053</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">SOCO</span>
               <span class="text-[#252861]">602-4440</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">STATION 1 (Triangle)</span>
               <span class="text-[#92BDF6]">222-5131</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">STATION 2 (New Kababae)</span>
               <span class="text-[#252861]">222-1020</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">STATION 3 (Mabayuan)</span>
               <span class="text-[#92BDF6]">223-3944</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">STATION 4 (New Cabalan)</span>
               <span class="text-[#252861]">0998-598-5563</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#92BDF6]">STATION 5 (Sta. Rita)</span>
               <span class="text-[#92BDF6]">222-0403</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">STATION 6 (Barretto)</span>
               <span class="text-[#252861]">0998-598-5569</span>
             </div>
           </div>
         </div>
   
         <!-- Others Section -->
         <div class="bg-[#E7C2D44D] rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-[#E7C2D4] mb-4">Others</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">BFP Olongapo</span>
               <span class="text-[#252861]">610-9114</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">City Hall</span>
               <span class="text-[#D9AAC1]">611-4800</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">City Sports</span>
               <span class="text-[#252861]">0929-156-8028</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">CSJDMH</span>
               <span class="text-[#D9AAC1]">502-1229</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">CSWD</span>
               <span class="text-[#252861]">611-4828</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">DOH</span>
               <span class="text-[#D9AAC1]">0917-652-4658</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">ESMO</span>
               <span class="text-[#252861]">223-9346</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">MGCP</span>
               <span class="text-[#D9AAC1]">223-3270</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">OEDC</span>
               <span class="text-[#252861]">222-9410</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">OLHMC</span>
               <span class="text-[#D9AAC1]">223-9011</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">OTMPS</span>
               <span class="text-[#252861]">611-4818</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">PLDT Olongapo</span>
               <span class="text-[#D9AAC1]">0999-908-7828</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">REDCROSS Olongapo</span>
               <span class="text-[#252861]">222-2181</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">Social Development Center</span>
               <span class="text-[#D9AAC1]">223-1193</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#252861]">Subic Water</span>
               <span class="text-[#252861]">252-2960</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-[#D9AAC1]">Wild Life</span>
               <span class="text-[#D9AAC1]">0998-762-4307</span>
             </div>
           </div>
         </div>
       </div>
     </main>
   </div>
   
   <style>
     :global(.bg-mint-50) {
       background-color: #f0faf5;
     }
     :global(.bg-mint-200) {
       background-color: #bcf0da;
     }
     :global(.text-mint-700) {
       color: #047857;
     }
   </style>