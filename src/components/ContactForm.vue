<template>
  <div class="ContactMain">
    <h2>CONTACT</h2>
    <form action="./ContactForm.vue" :click="formData()" method="post">
      <div class="infoContainer">
        <div class="inputParent">
          <label for="firstname">First name *</label>
          <input id="firstname" type="text"/>
        </div>
        <div class="inputParent">
          <label for="lastname">Last name *</label>
          <input id="lastname" type="text"/>
        </div>
        <div class="inputParent">
          <label for="email">Email *</label>
          <input id="email" type="email"/>
        </div>
        <div class="inputParent">
          <label for="subject">Subject</label>
          <input id="subject" type="text"/>
        </div>
      </div>
      <div class="inputParent">
        <label for="message">Message *</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <button id="SubmitBtn" type="submit">Submit</button>
    </form>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.2579862364379!2d44.50156075105092!3d40.22072393590058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a970002cae971%3A0x7c3be6443d627fcc!2sCODEIDEA%20LLC!5e0!3m2!1sen!2sam!4v1734026289371!5m2!1sen!2sam"
        style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script setup>
// todo make a input as a component

addEventListener("click", function formData (e) {
  e.preventDefault()
})
</script>

<style scoped>
.ContactMain {
  width: 100%;
  padding: 20px;
  background-color: #0f315f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ContactMain > h2 {
  text-align: center;
  font-size: 40px;
}

form {
  padding: 50px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
}

.infoContainer {
  width: 930px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

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

iframe {
  width: 930px;
  height: 300px;
}

#SubmitBtn {
  width: 400px;
  height: 40px;
  background-color: white;
  color: black;
}
</style>