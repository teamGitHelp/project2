<script>
     import { goto } from '$app/navigation';
     import { base } from '$app/paths';
   </script>
   
   <div class="min-h-screen bg-white">

     <main class="max-w-7xl mx-auto px-6 py-12">
       <div class="bg-mint-50 rounded-3xl p-12 mb-12 relative overflow-hidden">
         <h1 class="text-6xl font-bold text-mint-700 mb-8">Emergency Hotline</h1>
         <button 
           class="bg-pink-200 text-gray-800 px-6 py-2 rounded-full font-medium"
           on:click={() => goto('/request-page')}
         >
           Request Assistance
         </button>
         <div class="absolute top-0 right-0 w-32 h-32 bg-mint-200 rounded-bl-full"></div>
         <div class="absolute bottom-0 left-0 w-24 h-24">
           <svg viewBox="0 0 100 100" class="text-pink-300" fill="none" stroke="currentColor">
             <path d="M10,50 Q50,10 90,50" stroke-width="2"/>
           </svg>
         </div>
         <div class="absolute bottom-0 right-0 w-24 h-24">
           <svg viewBox="0 0 100 100" class="text-blue-300" fill="none" stroke="currentColor">
             <path d="M10,90 Q50,50 90,90" stroke-width="2"/>
           </svg>
         </div>
       </div>
   
       <p class="text-center font-bold mb-12">We're here to help, 24/7.</p>
   
       <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
         <!-- Barangay Section -->
         <div class="bg-mint-50 rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-mint-700 mb-4 ">Barangay</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span>Banicain</span>
               <span>611-0382</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">Barretto</span>
               <span class="text-mint-700">222-4295</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>East Bajac Bajac</span>
               <span>222-5035</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">East Tapinac</span>
               <span class="text-mint-700">223-3444</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>Gordon Heights</span>
               <span>223-5497</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">Kalaklan</span>
               <span class="text-mint-700">224-6983</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>Mabayuan</span>
               <span>602-3900</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">New Asinan</span>
               <span class="text-mint-700">223-5708</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>New Cabalan</span>
               <span>224-5414</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">New Ilalim</span>
               <span class="text-mint-700">602-0328</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>New Kababae</span>
               <span>222-8326</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">New Kalalake</span>
               <span class="text-mint-700">224-8264</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>Old Cabalan</span>
               <span>603-1700</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">Pag-Asa</span>
               <span class="text-mint-700">222-8037</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>Sta. Rita</span>
               <span>222-9225</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-mint-700">West Bajac Bajac</span>
               <span class="text-mint-700">222-5173</span>
             </div>
             <div class="flex font-bold justify-between">
               <span>West Tapinac</span>
               <span>223-3434</span>
             </div>
           </div>
         </div>
   
         <!-- Police Station Section -->
         <div class="bg-blue-50 rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-blue-700 mb-4">Police Station</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span >(PNP) Maritime Group</span>
               <span >0999-524-0246</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">BJMP 164</span>
               <span class="text-blue-700">602-7330</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >OCPO</span>
               <span >222-5731</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">PHIL. Coast Guard</span>
               <span class="text-blue-700">0998-585-8197</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >PHIL. Navy (San Antonio)</span>
               <span >0917-882-2347</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">SAF/TOC</span>
               <span class="text-blue-700">0907-554-9053</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >SOCO</span>
               <span >602-4440</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">STATION 1 (Triangle)</span>
               <span class="text-blue-700">222-5131</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >STATION 2 (New Kababae)</span>
               <span >222-1020</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">STATION 3 (Mabayuan)</span>
               <span class="text-blue-700">223-3944</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >STATION 4 (New Cabalan)</span>
               <span >0998-598-5563</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-blue-700">STATION 5 (Sta. Rita)</span>
               <span class="text-blue-700">222-0403</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >STATION 6 (Barretto)</span>
               <span >0998-598-5569</span>
             </div>
           </div>
         </div>
   
         <!-- Others Section -->
         <div class="bg-pink-50 rounded-3xl p-6">
           <h2 class="text-2xl text-center font-bold text-pink-700 mb-4">Others</h2>
           <div class="space-y-3">
             <div class="flex font-bold justify-between">
               <span >BFP Olongapo</span>
               <span >610-9114</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">City Hall</span>
               <span class="text-pink-700">611-4800</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >City Sports</span>
               <span >0929-156-8028</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">CSJDMH</span>
               <span class="text-pink-700">502-1229</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >CSWD</span>
               <span >611-4828</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">DOH</span>
               <span class="text-pink-700">0917-652-4658</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >ESMO</span>
               <span >223-9346</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">MGCP</span>
               <span class="text-pink-700">223-3270</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >OEDC</span>
               <span >222-9410</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">OLHMC</span>
               <span class="text-pink-700">223-9011</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >OTMPS</span>
               <span >611-4818</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">PLDT Olongapo</span>
               <span class="text-pink-700">0999-908-7828</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >REDCROSS Olongapo</span>
               <span >222-2181</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">Social Development Center</span>
               <span class="text-pink-700">223-1193</span>
             </div>
             <div class="flex font-bold justify-between">
               <span >Subic Water</span>
               <span >252-2960</span>
             </div>
             <div class="flex font-bold justify-between">
               <span class="text-pink-700">Wild Life</span>
               <span class="text-pink-700">0998-762-4307</span>
             </div>
           </div>
         </div>
       </div>
     </main>
   
     <footer class="mt-12 py-6 text-center text-gray-500 text-sm">
       <div class="flex items-center justify-center gap-2 mb-2">
         <div class="w-3 h-6 bg-pink-200 rounded-full"></div>
         <span>Lifeline</span>
       </div>
       <p>Copyright © 2024 GIHelp Emergency Hotline</p>
     </footer>
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