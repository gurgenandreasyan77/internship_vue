<template>
  <div class="inputParent">
    <label for="firstname">First name *</label>
    <input id="firstname" type="text"/>
  </div>
</template>

<script setup>
// todo make a input as a component
</script>

<style scoped>
.inputParent {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inputParent textarea {
  width: 930px;
}

.inputParent > input {
  width: 450px;
  height: 40px;
  padding: 10px;
}

.inputParent > input, .inputParent > textarea {
  background-color: transparent;
  border-bottom: 1px solid white;
}
</style>