<template>
<!--    <div class="flex gap-8">-->
<!--      <button @click="router.push({name: 'home'})">Home</button>-->
<!--      <button @click="router.push({name: 'about'})">About</button>-->
<!--      <button @click="router.push({name: 'contacts'})">Contacts</button>-->
<!--      <button @click="router.push({name: 'contactEdit', params: {id: 8}})">Edit Contacts</button>-->
<!--    </div>-->

  <RouterView/>
</template>

<script setup>
import Template from "@/pages/Template.vue";
import {useRouter} from "vue-router";


const router = useRouter()
</script>