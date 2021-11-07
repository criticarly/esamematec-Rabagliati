<template>
  <div>
    <div class="container"><br><br>
    <router-link v-bind:to="{ name: 'Home' }"><a class="backhome" href="#">
      <img src="https://cdn-icons-png.flaticon.com/512/5227/5227701.png" alt="" width="25" height="25">
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