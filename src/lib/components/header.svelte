<script lang="ts">
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    const navigate = (path: string): void => {
        goto(`${base}${path}`);
    }
</script>

<header class="h-15 bg-back rounded-full flex align-center justify-between">
    <!-- logo -->
    <div class="flex items-center gap-2.5 m-6">
        <div class="w-3 h-6 bg-pink rounded-full"></div>
        <h1 class="font-bold text-darkblue font-dmSans text-sm">Lifeline</h1>
    </div>

    <!-- navigation -->
    <nav class="flex items-center gap-20 text-xs font-semibold text-muted">
        <a 
            href="{base}/" 
            on:click|preventDefault={() => navigate('/')}
            class="hover:text-darkblue"
        >Home</a>
        <a 
            href="{base}/request" 
            on:click|preventDefault={() => navigate('/request')}
            class="hover:text-darkblue"
        >Request</a>
        <a 
            href="{base}/contact" 
            on:click|preventDefault={() => navigate('/contact')}
            class="hover:text-darkblue"
        >Contact</a>
    </nav>

    <div class="flex items-center gap-1.5 text-xs font-semibold text-darkblue m-7"> 
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#252861" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        </div>
        <p>Olongapo</p>
    </div>
</header>