<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div
        class="w-full mx-auto bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="relative p-6 space-y-4 md:space-y-6 sm:p-8" id="login_form">
        <button
            class="text-gray-500 bg-gray-200 dark:text-white dark:bg-gray-700 p-3 rounded-full focus:outline-none transition-all transform hover:scale-110 hover:rounded-xl shadow-md"
            @click="router.push({name: 'template'})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to
          your account</h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="login">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input v-model="email" type="email" name="email" id="login_email"
                   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="name@company.com" required="">
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input v-model="password" type="password" name="password" id="login_password" placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required=""/>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input v-model="checkbox" id="remember" aria-describedby="remember" type="checkbox"
                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
          </div>
          <button type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all transform hover:scale-105 hover:rounded-xl">
            Sign in
          </button>
        </form>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet?
          <button class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  @click="router.push({name: 'register'})">Sign up
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {getAuthentificated} from "@/store/usersStore";
import Cookies from 'js-cookie';
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch
} from "vue";


const email = ref("");
const password = ref("");
const checkbox = ref(false);
const loginData = ref([]);
const router = useRouter();


const login = () => {
  loginData.value = [
    ["email", email.value],
    ["password", password.value],
    ["checkbox", checkbox.value]
  ];
  getAuthentificated(loginData.value);
};

onBeforeMount(() => {
  if (Cookies.get('token')){
    router.push({name: 'template'})
  }
})

</script>