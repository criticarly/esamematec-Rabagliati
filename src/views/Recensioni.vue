<template>
  <div>
    <div class="container">
      <router-link v-bind:to="{ name: 'Home' }"><a class="backhome" href="#">
      <img src="https://cdn-icons.flaticon.com/png/512/3626/premium/3626128.png?token=exp=1635624939~hmac=8b7d059d094d3a7eedc3817f705c22cb" alt="" width="25" height="25">
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