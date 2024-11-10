<script>
	import '../app.css';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	
	let { children } = $props();
	const isMenuOpen = writable(false);
    
	function toggleMenu() {
	    isMenuOpen.update(value => !value);
	}
 </script>
 
 <div class="min-h-screen flex flex-col">
	<Header />
	
	<main class="flex-grow">
	    {#if $page.url.pathname === '/'}
		   {@render children()}
	    {:else}
		   {@render children()}
	    {/if}
	</main>
 
	<Footer />
 </div>