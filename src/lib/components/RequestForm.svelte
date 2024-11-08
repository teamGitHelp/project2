<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  let firstName = '';
  let lastName = '';
  let contactNumber = '';
  let street = '';
  let barangay = '';
  let assistanceType = '';
  let others = '';
  let showSubmissionMessage = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    dispatch('submit', {
      firstName,
      lastName,
      contactNumber,
      street,
      barangay,
      assistanceType,
      others
    });
    showSubmissionMessage = true;
    setTimeout(() => {
      showSubmissionMessage = false;
      goto('/project2');
    }, 3000);
  }

  function handleBackClick() {
    goto('/project2');
  }
</script>

<form on:submit={handleSubmit} class="space-y-6">
  <div class="space-y-2">
    <label for="fullName" class="block text-[#252861] font-medium">Full Name</label>
    <div class="grid grid-cols-2 gap-4">
      <input
        type="text"
        id="firstName"
        bind:value={firstName}
        placeholder="First Name"
        class="w-full px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
        required
      />
      <input
        type="text"
        id="lastName"
        bind:value={lastName}
        placeholder="Last Name"
        class="w-full px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
        required
      />
    </div>
  </div>

  <div class="space-y-2">
    <label for="contactNumber" class="block text-[#252861] font-medium">Contact Number</label>
    <div class="flex gap-4">
      <input
        type="tel"
        value="+63"
        disabled
        class="w-16 px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
      />
      <input
        type="tel"
        id="contactNumber"
        bind:value={contactNumber}
        placeholder=""
        class="flex-1 px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
        required
      />
    </div>
  </div>

  <div class="space-y-2">
    <label for="address" class="block text-[#252861] font-medium">Address</label>
    <input
      type="text"
      id="street"
      bind:value={street}
      placeholder="Street"
      class="w-full px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
      required
    />
    <select
      id="barangay"
      bind:value={barangay}
      class="w-full px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0 appearance-none"
      required
    >
      <option value="">Barangay</option>
      <option value="banicain">Banicain</option>
      <option value="barretto">Barretto</option>
      <option value="east-bajac-bajac">East Bajac Bajac</option>
      <option value="east-tapinac">East Tapinac</option>
      <option value="gordon-heights">Gordon Heights</option>
      <option value="kalaklan">Kalaklan</option>
      <option value="mabayuan">Mabayuan</option>
      <option value="new-asinan">New Asinan</option>
      <option value="new-cabalan">New Cabalan</option>
      <option value="new-ilalim">New Ilalim</option>
      <option value="new-kababae">New Kababae</option>
      <option value="new-kalalake">New Kalalake</option>
      <option value="old-cabalan">Old Cabalan</option>
      <option value="pag-asa">Pag-Asa</option>
      <option value="sta-rita">Sta. Rita</option>
      <option value="west-bajac-bajac">West Bajac Bajac</option>
      <option value="west-tapinac">West Tapinac</option>
    </select>
  </div>

  <div class="space-y-2">
    <label for="assistanceType" class="block text-[#252861] font-medium">Type of Assistance</label>
    <select
      id="assistanceType"
      bind:value={assistanceType}
      class="w-full px-4 py-2 rounded-lg bg-[#FFDBDB] border-0 appearance-none"
      required
    >
      <option value="">Type of Assistance</option>
      <option value="medical">Medical Emergency</option>
      <option value="fire">Fire Emergency</option>
      <option value="police">Police Assistance</option>
      <option value="rescue">Rescue Operation</option>
      <option value="disaster">Disaster Response</option>
    </select>
  </div>

  <div class="space-y-2">
    <label for="others" class="block text-[#252861] font-medium">Others</label>
    <input
      type="text"
      id="others"
      bind:value={others}
      placeholder="Others"
      class="w-full px-4 py-2 rounded-lg text-[#252861] bg-[#FFDBDB] border-0"
    />
  </div>

  <div class="flex justify-between items-center pt-4">
    <button
      type="button"
      class="text-gray-600 font-medium flex items-center gap-2"
      on:click={handleBackClick}
    >
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      Back
    </button>
    <button
      type="submit"
      class="bg-[#F8B3B8] text-[#252861] px-8 py-2 rounded-full hover:bg-[#F8B3B8] transition-colors font-medium"
    >
      Submit
    </button>
  </div>
</form>

{#if showSubmissionMessage}
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    transition:fade
  >
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 class="text-2xl font-bold text-[#252861] mb-4">Request Send</h2>
      <p class="text-gray-600">Your emergency request has been received. Help is on the way.</p>
    </div>
  </div>
{/if}

<style>
  /* Add custom styles for select elements */
  select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
  }
</style>