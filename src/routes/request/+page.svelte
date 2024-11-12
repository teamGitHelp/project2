<script lang="ts">
  import { onMount } from 'svelte';
  import emailjs from 'emailjs-com';

  
  onMount(() => {
    emailjs.init('7DZBtgZo7EsQJ0pAA'); // public key
  });

  type FormData = {
    firstName: string;
    lastName: string;
    contactNumber: string;
    street: string;
    barangay: string;
    assistanceType: string;
  };

  let formData: FormData = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    street: '',
    barangay: '',
    assistanceType: ''
  };
  let errors = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    street: '',
    barangay: '',
    assistanceType: ''
  };
  let successMessage = '';
  let errorMessage = '';

  // emailJS setup
  const SERVICE_ID = 'service_y69ek0m';
  const TEMPLATE_ID = 'template_a3oejqd';

  // request assistance form validation
  function validateForm() {
    let isValid = true;
    errors = { firstName: '', lastName: '', contactNumber: '', street: '', barangay: '', assistanceType: '' };

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
      isValid = false;
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }
    if (!formData.contactNumber || !/^\d{10,11}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Enter a valid contact number';
      isValid = false;
    }
    if (!formData.street) {
      errors.street = 'Street is required';
      isValid = false;
    }
    if (!formData.barangay) {
      errors.barangay = 'Barangay is required';
      isValid = false;
    }
    if (!formData.assistanceType) {
      errors.assistanceType = 'Please select the type of assistance needed';
      isValid = false;
    }

    return isValid;
  }

  // form submission
  async function submitForm() {
    errorMessage = ''; 
    successMessage = ''; 

    if (validateForm()) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            contactNumber: formData.contactNumber,
            street: formData.street,
            barangay: formData.barangay,
            assistanceType: formData.assistanceType
          }
        );
        successMessage = 'Your request has been sent successfully!';
        formData = { firstName: '', lastName: '', contactNumber: '', street: '', barangay: '', assistanceType: '' };
      } catch (error) {
        errorMessage = 'Failed to send your request. Please try again later.';
        console.error("EmailJS Error:", error);
      }
    }
  }
</script>

<form class="bg-lightblue rounded-3xl p-20 flex flex-col justify-center items-center border-2 border-pink" on:submit|preventDefault={submitForm}>
  <!-- head title -->
  <h1 class="text-center text-4xl font-black font-inter text-darkblue mb-10">Request Assistance</h1>

  <!-- F U L L N A M E -->
    <!-- first name -->
    <div class="form-container flex flex-col w-full justify-center gap-5">
      <input type="text" placeholder="First Name" bind:value={formData.firstName} class="border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" />
      {#if errors.firstName}
        <p class="text-darkblue text-xs">{errors.firstName}</p>
      {/if}

      <!-- last name -->
      <input type="text" placeholder="Last Name" bind:value={formData.lastName} class="border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" />
      {#if errors.lastName}
        <p class="text-darkblue text-xs">{errors.lastName}</p>
      {/if}

      <!-- contact number -->
        <input type="text" placeholder="Contact Number" bind:value={formData.contactNumber} class="w-120 border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" />
        {#if errors.contactNumber}
          <p class="text-darkblue text-xs">{errors.contactNumber}</p>
        {/if}

    <!-- A D D R E S S -->
      <!-- street -->
      <input type="text" bind:value={formData.street} placeholder="Street" class="border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" />
      {#if errors.street}
        <p class="text-darkblue text-xs">{errors.street}</p>
      {/if}
      <!-- barangay -->
      <select bind:value={formData.barangay} class="border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium">
        <option value="" disabled>Barangay</option>
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
        <option value="sta.rita">Sta. Rita</option>
        <option value="west-bajac-bajac">West Bajac Bajac</option>
        <option value="west-tapinac">West Tapinac</option>
      </select>
      {#if errors.barangay}
        <p class="text-darkblue text-xs">{errors.barangay}</p>
      {/if}
      
    <!-- assistance type -->
    <select bind:value={formData.assistanceType} class="border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium">
      <option value="" disabled>Type of Assistance</option>
      <option value="Medical Aid">Medical Aid</option>
      <option value="Rescue">Rescue</option>
      <option value="Food or Water">Food or Water</option>
      <option value="Other">Other</option>
    </select>
    {#if errors.assistanceType}
      <p class="text-darkblue text-xs">{errors.assistanceType}</p>
    {/if}

    <!-- success and error message after submitting -->
    {#if successMessage}
    <p class="success text-darkblue text-xs text-center mt-4">{successMessage}</p>
    {/if}
    {#if errorMessage}
      <p class="error text-darkblue text-xs text-center mt-4">{errorMessage}</p>
    {/if}

    <!-- submit button -->
    <button type="submit" class="border-transparent p-3 bg-pink rounded-xl text-darkblue text-sm font-semibold">Request</button>
  </div>
</form>

<style>
  .form-container {
    width: 360px;
  }

  p {
    margin-top: -12px;
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }
</style>