<template>
  <header>
    <a href="#">{{ brandName }}</a>
    <nav>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Services</a>
      <a href="#">Plans & Pricing</a>
      <a href="#">Tools & Tips</a>
      <a href="#">Contact</a>
      <div class="loginBtnParent">
        <a href="#">Login</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
// todo make link as a component, use tilewind
import {ref} from "vue";

const brandName = ref('JAMES CONSULTING')
</script>

<style scoped>
header {
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #0f315f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
  color: #e4e4e4;
}

nav {
  display: flex;
  gap: 25px;
}

a {
  text-decoration: none;
}

</style>