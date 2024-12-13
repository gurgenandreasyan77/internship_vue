<template>
Contact {{id}}
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
console.log(route);

const id = route.params.id
</script>