<template>
  <div>
    <div class="container">
      <router-link v-bind:to="{ name: 'Home' }"><a class="backhome" href="#">
      <img src="https://cdn-user-icons.flaticon.com/52435/52435626/1635589119808.svg?token=exp=1635590020~hmac=208ff43804d5d5686e42acb9c13c6695" alt="" width="25" height="25">
        Torna alla homepage
        </a></router-link>
      </div>
  <FormRecensioni/>
 
  </div>
</template>

<script>
  import FormRecensioni from "@/components/FormRecensioni.vue";

export default {
  components: {
    FormRecensioni
  },
};
</script>