<!--<script>-->
<!--if (localStorage.getItem("userToken")){-->
<!--  alert();-->
<!--}else {-->
<!--  router.push({name: 'login'});-->
<!--}-->
<!--</script>-->

<template>
  <header class="bg-blue-900">
    <div class="flex justify-between items-center px-6 py-4">
      <div class="text-white text-xl font-light">
        <a href="#">JAMES CONSULTING</a>
      </div>

      <nav class="hidden md:flex gap-6">
        <a href="#" class="text-white font-light hover:text-gray-300">About</a>
        <a href="#" class="text-white font-light hover:text-gray-300">Projects</a>
        <a href="#" class="text-white font-light hover:text-gray-300">Services</a>
        <a href="#" class="text-white font-light hover:text-gray-300">Plans & Pricing</a>
        <a href="#" class="text-white font-light hover:text-gray-300">Tools & Tips</a>
        <a href="#" class="text-white font-light hover:text-gray-300">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" viewBox="0 0 50 50">
            <path
                d="M 25 2.0078125 C 12.309296 2.0078125 2.0000002 12.317108 2 25.007812 C 2 37.112262 11.38131 47.043195 23.259766 47.935547 C 23.283185 47.93745 23.306613 47.939576 23.330078 47.941406 C 23.882405 47.981205 24.437631 48.007812 25 48.007812 C 25.562369 48.007812 26.117595 47.981205 26.669922 47.941406 C 26.693387 47.939576 26.716815 47.93745 26.740234 47.935547 C 38.61869 47.043195 48 37.112262 48 25.007812 C 48 12.317108 37.690704 2.0078125 25 2.0078125 z M 25 4.0078125 C 36.609824 4.0078125 46 13.397988 46 25.007812 C 46 30.739515 43.704813 35.924072 39.990234 39.710938 C 38.401074 38.55372 36.437194 37.863387 34.677734 37.246094 C 32.593734 36.516094 30.622172 35.824094 30.076172 34.621094 C 29.990172 33.594094 29.997859 32.792094 30.005859 31.871094 L 30.007812 31.480469 C 30.895813 30.635469 32.012531 28.852078 32.394531 27.205078 C 33.054531 26.853078 33.861516 26.009281 34.103516 23.988281 C 34.224516 22.985281 33.939062 22.2085 33.539062 21.6875 C 34.079062 19.8325 35.153484 15.136469 33.271484 12.105469 C 32.475484 10.824469 31.274313 10.016266 29.695312 9.6972656 C 28.808312 8.5992656 27.134484 8 24.896484 8 C 21.495484 8.063 19.002234 9.1047031 17.490234 11.095703 C 15.707234 13.445703 15.370328 16.996297 16.486328 21.654297 C 16.073328 22.175297 15.775438 22.963328 15.898438 23.986328 C 16.141438 26.007328 16.945469 26.851125 17.605469 27.203125 C 17.987469 28.852125 19.103188 30.635469 19.992188 31.480469 L 19.994141 31.861328 C 20.002141 32.786328 20.009828 33.590094 19.923828 34.621094 C 19.375828 35.827094 17.394781 36.526625 15.300781 37.265625 C 13.551886 37.88319 11.599631 38.574586 10.013672 39.716797 C 6.2962191 35.929504 4 30.742023 4 25.007812 C 4.0000002 13.397989 13.390176 4.0078125 25 4.0078125 z"/>
          </svg>
        </div>
        <button class="color-gray-500" @click="router.push({name: 'login'})">Log In</button>
      </div>
    </div>
  </header>

  <section class="bg-blue-900 text-white py-12">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-center text-3xl font-bold tracking-wide mb-8">CONTACT</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="first-name" class="block text-sm font-medium mb-1">First name *</label>
            <input type="text" id="first-name" v-model="form.firstName" class="block w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-white" required/>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium mb-1">Last name *</label>
            <input type="text" id="last-name" v-model="form.lastName" class="block w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-white" required/>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-medium mb-1">Email *</label>
            <input type="email" id="email" v-model="form.email" class="block w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-white" required/>
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
            <input type="text" id="subject" v-model="form.subject" class="block w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-white"/>
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium mb-1">Message *</label>
          <textarea id="message" v-model="form.message" rows="5" class="block w-full border-b border-gray-400 bg-transparent py-2 text-sm focus:outline-none focus:border-white" required></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="px-6 py-3 bg-white text-blue-900 font-semibold tracking-wide hover:bg-gray-200 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
  <footer class="bg-blue-950 text-white py-10">
    <div class="container px-8 flex flex-col md:flex-row justify-between items-start">
      <div class="mb-6 md:mb-0">
        <h2 class="font-bold text-lg mb-2">JAMES CONSULTING</h2>
        <p>500 Terry Francine Street,<br>San Francisco, CA 94158</p>
        <p>Mail: <a href="#" class="text-blue-300 hover:underline">info@mysite.com</a></p>
        <p>Tel: <a href="#" class="text-blue-300 hover:underline">123-456-7890</a></p>
      </div>

      <div class="mb-6 md:mb-0">
        <h2 class="font-bold text-lg mb-2">MENU</h2>
        <ul>
          <li><a href="#" class="text-blue-300 hover:underline">About</a></li>
          <li><a href="#" class="text-blue-300 hover:underline">Projects</a></li>
          <li><a href="#" class="text-blue-300 hover:underline">Services</a></li>
          <li><a href="#" class="text-blue-300 hover:underline">Plans & Pricing</a></li>
          <li><a href="#" class="text-blue-300 hover:underline">Tools & Tips</a></li>
          <li><a href="#" class="text-blue-300 hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold text-lg mb-2">SOCIALS</h2>
        <div class="flex space-x-4 mb-4">
          <a href="#" class="text-blue-300 hover:text-blue-400">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.408c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.795.144v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" class="text-blue-300 hover:text-blue-400">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.128 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.724-.666 1.562-.666 2.475 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.087.627 1.956 2.444 3.379 4.6 3.419-1.685 1.32-3.808 2.105-6.115 2.105-.397 0-.789-.023-1.175-.069 2.179 1.398 4.768 2.212 7.548 2.212 9.051 0 13.999-7.496 13.999-13.986 0-.213-.005-.425-.014-.637.961-.695 1.796-1.562 2.457-2.549z"/>
            </svg>
          </a>
        </div>
        <p class="text-sm text-gray-400">© 2035 by JAMES CONSULTING.<br>Powered and secured by Wix</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";

const form = reactive({
  firstName: ref(""),
  lastName: "",
  email: "",
  subject: "",
  message: "",
})

const router = useRouter()
</script>