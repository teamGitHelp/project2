<!-- <script lang="ts">
  import { goto } from '$app/navigation';
  import RequestForm from '$lib/components/RequestForm.svelte';

  function handleSubmit(event: CustomEvent) {
    console.log('Form submitted:', event.detail);
    // Here you would typically send the data to your backend
    // For now, we'll just log it and go back to the home page
    goto('/');
  }
</script>

<div class="title w-full rounded-2xl bg-white p-6">
  <div class="max-w-6xl mx-auto mt-10">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Left Section --
      <!-- <div class="bg-[#92BDF633] rounded-3xl p-12 relative overflow-hidden">
        <div class="rounded-3xl p-8 space-y-6">
          <h1 class="text-darkblue text-4xl text-center font-bold mb-4">Request Assistance</h1>
          <p class="text-[#535353] text-center mb-8">Please provide the following information to expedite assistance.</p>
          
          <!-- Medical Cross Icon --
          <div class="w-48 h-48 mx-auto">
            <svg viewBox="0 0 24 24" class="w-full h-full text-[#F8B3B8]" fill="currentColor">
              <path d="M12,2 L12,22 M4.6 6.8 L19.4 17.2 M4.6 17.2 L19.4 6.8" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Right Section 
      <div class="bg-[#FFDBDB66] rounded-3xl p-8 space-y-6">
        <RequestForm on:submit={handleSubmit} />
      </div>
    </div>
  </div>
</div> --> 