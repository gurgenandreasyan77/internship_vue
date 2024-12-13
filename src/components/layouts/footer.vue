<template>
  <footer>
    <div class="infoBlock">
      <h2>{{ brandName }}</h2>
      <p>{{ address }}</p>
      <p>Mail: {{ mail }}</p>
      <p>Tel: {{ telephone }}</p>
    </div>
    <div class="menuBlock">
      <h2>MENU</h2>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Services</a>
      <a href="#">Plans & Pricing</a>
      <a href="#">Tools & Tips</a>
      <a href="#">Contact</a>
    </div>
    <div class="socialsBlock">
      <h2>SOCIALS</h2>
      <div class="socialLinks">
        <a href="#">Facebook</a>
        <a href="#">Tweeter</a>
      </div>
      <a href="#">{{ copyWrite }}</a>
    </div>
  </footer>
</template>


<script setup>
import {ref} from "vue";

const brandName = ref('JAMES CONSULTING')
const address = ref('500 Terry Francine Street, San Francisco, CA 94158')
const mail = ref('info@mysite.com')
const telephone = ref('123-456-7890')
const copyWrite = ref('© 2035 by JAMES CONSULTING.\n' + 'Powered and secured by Wix')
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  padding: 50px;
  bottom: 0;
  background-color: #081b36;
  color: #e4e4e4;
  display: flex;
  justify-content: space-evenly;
}

footer div {
  width: 250px;
  //margin-top: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
}
footer h2 {
  margin-bottom: 20px;
}

footer a {
  margin: 4px;
}
</style>