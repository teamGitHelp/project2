<script lang="ts">
     import { onMount } from 'svelte';
     import { init, send } from 'emailjs-com';
     import { writable } from 'svelte/store';
   
     const EMAILJS_USER_ID = '7DZBtgZo7EsQJ0pAA';
     onMount(() => {
       init(EMAILJS_USER_ID);
     });
   
     const firstName = writable('');
     const lastName = writable('');
     const email = writable('');
     const phone = writable('');
     const reason = writable('');
   
     const errorMessages = writable<string[]>([]);
     const successMessage = writable<string | null>(null);
   
     function validateForm() {
       const errors: string[] = [];
       $firstName || errors.push('First name is required.');
       $lastName || errors.push('Last name is required.');
       /\S+@\S+\.\S+/.test($email) || errors.push('Valid email is required.');
       /^\d{11}$/.test($phone) || errors.push('Phone number must be 11 digits.');
       $reason || errors.push('Reason for contact is required.');
       errorMessages.set(errors);
       return errors.length === 0;
     }
   
     async function handleSubmit() {
       errorMessages.set([]);
       successMessage.set(null);
       if (!validateForm()) return;
   
       const formData = {
         first_name: $firstName,
         last_name: $lastName,
         email: $email,
         phone: $phone,
         reason: $reason,
       };
   
       try {
         await send('service_y69ek0m', 'template_a3oejqd', formData);
         successMessage.set('Message sent successfully!');
       } catch (error) {
         errorMessages.set(['Failed to send message. Please try again.']);
       }
     }
</script>


<div class="bg-lightgreen rounded-3xl p-20 flex flex-col justify-center items-center border-2 border-pink">
     <h1 class="text-center text-4xl font-black font-inter text-darkgreen mb-10">Contact Us</h1>
     
     <!-- error message -->
     {#if $errorMessages.length}
       <ul class="bg-red-100 text-red-700 p-2 m-6 rounded-xl text-xs">
         {#each $errorMessages as error}
           <li>{error}</li>
         {/each}
       </ul>
     {/if}
   
     <!-- success message  -->
     {#if $successMessage}
       <div class="bg-green text-darkgreen p-2 m-6 rounded-xl text-xs">
         { $successMessage }
       </div>
     {/if}
   
     <!-- form -->
     <form on:submit|preventDefault={handleSubmit} class="flex flex-col w-full justify-center gap-5 items-center">
          <!-- F U L L N A M E -->
               <!-- first name -->
               <input type="text" bind:value={$firstName} class="w-full border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" placeholder="First Name" required />
               <!-- last name -->
               <input type="text" bind:value={$lastName} class="w-full border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" placeholder="Last Name" required />

               <!-- email -->
               <input type="email" bind:value={$email} class="w-full border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" placeholder="Email" required />
         
               <!-- phone number -->
               <input type="tel" bind:value={$phone} class="w-full border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" placeholder="Phone Number" required />
       
               <!-- reason for contact -->
               <textarea bind:value={$reason} class="w-full border-transparent rounded-xl placeholder:text-darkblue text-sm font-medium" rows="3" placeholder="Reason for Contact" required></textarea>
               
               <!-- submit button -->
               <button type="submit" class="border-transparent p-3 bg-pink rounded-xl text-darkblue text-sm font-semibold w-full">Submit</button>
     </form>
</div>

<style>
     form {
          width: 360px;
     }
</style>
   