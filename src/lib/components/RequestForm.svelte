<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { HelpCircle } from 'lucide-svelte';
  
  const dispatch = createEventDispatcher();
  
  let formData = {
    firstName: '',
    lastName: '',
    contactNumber1: '',
    contactNumber2: '',
    street: '',
    barangay: '',
    assistanceType: '',
    others: ''
  };

  const barangayOptions = [
    'Asinan',
    'Banicain',
    'Barretto',
    'East Bajac-bajac',
    'East Tapinac',
    'Gordon Heights',
    'Mabayuan',
    'New Cabalan',
    'New Kababae',
    'New Kalalake',
    'Old Cabalan',
    'Pag-asa',
    'Santa Rita'
  ];

  const assistanceTypes = [
    'Medical Emergency',
    'Fire Emergency',
    'Police Assistance',
    'Natural Disaster',
    'Other'
  ];

  function handleSubmit() {
    dispatch('submit', formData);
  }
</script>

<form 
  on:submit|preventDefault={handleSubmit}
  class="bg-[#FFDBDB66] backdrop-blur-sm rounded-3xl p-8 space-y-6"
>
  <!-- Full Name Section -->
  <div class="space-y-2">
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="text-sm text-gray-700 font-medium">Full Name</label>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <input
          type="text"
          placeholder="First Name"
          bind:value={formData.firstName}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
          required
          />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          bind:value={formData.lastName}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
          required
           />
      </div>
    </div>
  </div>

  <!-- Contact Number Section -->
  <div class="space-y-2">
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="text-sm text-gray-700 font-medium">Contact Number</label>
    <div class="grid grid-cols-2 gap-4">
      <div class="relative">
        <input
          type="tel"
          placeholder="+63"
          bind:value={formData.contactNumber1}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
          required
          />
      </div>
      <div class="relative">
        <input
          type="tel"
          placeholder="+63"
          bind:value={formData.contactNumber2}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
        />
        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2">
          <HelpCircle class="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  </div>

  <!-- Address Section -->
  <div class="space-y-2">
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="text-sm text-gray-700 font-medium">Address</label>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <input
          type="text"
          placeholder="Street"
          bind:value={formData.street}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
          required
          />
      </div>
      <div class="relative">
        <select
          bind:value={formData.barangay}
          class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 text-gray-400 text-sm appearance-none focus:ring-2 focus:ring-pink-200"
          required
          >
          <option value="" disabled selected>Barangay</option>
          {#each barangayOptions as barangay}
            <option value={barangay}>{barangay}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>

  <!-- Assistance Type Section -->
  <div class="grid grid-cols-2 gap-4">
    <div class="relative">
      <select
        bind:value={formData.assistanceType}
        class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 text-gray-400 text-sm appearance-none focus:ring-2 focus:ring-pink-200"
        required
        >
        <option value="" disabled selected>Type of Assistance</option>
        {#each assistanceTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>
    <div class="relative">
      <input
        type="text"
        placeholder="Others"
        bind:value={formData.others}
        class="w-full px-4 py-3 rounded-lg bg-pink-50/50 border-0 placeholder-gray-400 text-sm focus:ring-2 focus:ring-pink-200"
      />
      <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2">
        <HelpCircle class="w-4 h-4 text-gray-400" />
      </button>
    </div>
  </div>

  <!-- Action Buttons -->
  <div class="flex justify-between items-center pt-4">
    <button
      type="button"
      class="flex items-center gap-2 text-sm text-gray-600"
      on:click={() => window.history.back()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
    <button
      type="submit"
      class="px-6 py-2 bg-pink-300 text-blue-900 rounded-full text-sm font-semibold hover:bg-pink-400 transition-colors"
    >
      Submit
    </button>
  </div>
</form>