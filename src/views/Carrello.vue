<template>
  <div>
    <div class="container"><br><br>
      <router-link v-bind:to="{ name: 'Home' }"><a class="backhome" href="#">
      <img src="https://cdn-icons-png.flaticon.com/512/5227/5227701.png" alt="" width="25" height="25">
        Torna alla homepage
        </a></router-link>
    </div>
      <br><br>
    <h2>Benvenuta nel tuo shop {{ $store.getters.nomeEsteso }}</h2>
    <p>Continua ad acquistare oppure svuota il carrello</p>
    <button @click="svuotaCarrello" type="button">Svuota</button>
    <br><br><br>
      <div class="container">
      <div class="row">
    <ProdottoCarrello
      v-for="elem in prodottiCarrello" :key="elem.id" :prodotti="elem"
    ></ProdottoCarrello>
    </div>
    </div>
  </div>
</template>

<script>
import ProdottoCarrello from "@/components/ProdottoCarrello.vue/";

export default {
  components:{
    ProdottoCarrello,
  },

  data: function () {
      return {
        prodottiCarrello: this.$store.state.prodottiCarrello,
      };
  },
  methods: {
   svuotaCarrello: function() {
      this.$store.commit("SVUOTA_CARRELLO");
      window.location.reload();
    }
  }
 
};

</script>
<style scoped>
button {
  background-color: #b97375;
  color: #ffffff;
  border: 1px solid #b97375;
  border-radius: 3px;
  }
</style>


      
