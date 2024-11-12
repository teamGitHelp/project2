<script>
     import Hero from '$lib/components/hero.svelte';
     import Barangay from '$lib/components/barangay.svelte';
     import Station from '$lib/components/station.svelte';
     import Other from '$lib/components/other.svelte';
 </script>
 
<Hero />
 <div class="flex text-center justify-center mt-14">
     <p class="text-sm font-semibold font-dmSans text-darkblue">We're here to help, 24/7. </p>
 </div>
 
 <div class="flex gap-5 justify-center">
     <Barangay />
     <Station />
     <Other />
 </div>