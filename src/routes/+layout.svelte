<script lang="ts">
	import '../app.css';
	import { Menu, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	
	let { children } = $props();
	const isMenuOpen = writable(false);
   
	function toggleMenu() {
	  isMenuOpen.update(value => !value);
	}
   </script>
   
   <div class="min-h-screen bg-white">
	<nav class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
	  <!-- Logo -->
	  <div class="flex items-center gap-2">
	    <div class="w-4 h-8 bg-[#ffd4d4] rounded-full"></div>
	    <span class="text-[#1a1a43] font-medium">Lifeline</span>
	  </div>
	  
	  <!-- Desktop Menu -->
	  <div class="hidden md:flex items-center gap-12">
	    <a href="/" class="text-[#1a1a43] hover:text-gray-600 transition-colors">Home</a>
	    <a href="/request-page" class="text-gray-500 hover:text-[#1a1a43] transition-colors">Request</a>
	    <a href="/contact-page" class="text-gray-500 hover:text-[#1a1a43] transition-colors">Contact</a>
	  </div>
	  
	  <!-- Mobile Menu Button -->
	  <button class="md:hidden text-[#1a1a43]" onclick={toggleMenu}>
	    {#if $isMenuOpen}
		 <X size={24} />
	    {:else}
		 <Menu size={24} />
	    {/if}
	  </button>
	  
	  <!-- Location -->
	  <div class="hidden md:flex items-center gap-2">
	    <svg class="w-5 h-5 text-[#1a1a43] rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
		 <path d="M22 2L11 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		 <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	    </svg>
	    <span class="text-[#1a1a43]">Olongapo</span>
	  </div>
	</nav>
   
	<!-- Mobile Menu -->
	{#if $isMenuOpen}
	  <div
	    class="md:hidden fixed inset-0 z-50 bg-white"
	    transition:fly={{ y: -100, duration: 300, easing: cubicOut }}
	  >
	    <div class="flex flex-col items-center justify-center h-full space-y-8">
		 <a 
		   href="/" 
		   class="text-2xl text-[#1a1a43]" 
		   onclick={toggleMenu}
		 >
		   Home
		 </a>
		 <a 
		   href="/request" 
		   class="text-2xl text-[#1a1a43]" 
		   onclick={toggleMenu}
		 >
		   Request
		 </a>
		 <a 
		   href="/contact" 
		   class="text-2xl text-[#1a1a43]" 
		   onclick={toggleMenu}
		 >
		   Contact
		 </a>
	    </div>
	  </div>
	{/if}
	{@render children()}
   </div>