<template>
  <div>
  
    
    <h1>Questo è il cartello di {{ $store.getters.nomeEsteso }}</h1>
    <button @click="svuotaCarrello" type="button" class="btn btn-outline-light">Svuota</button>
    <p>Hai acquistato:</p>
    <ProdottoCarrello
      v-for="elem in prodottiCarrello" :key="elem.id" :prodotti="elem"
    ></ProdottoCarrello>

    
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



      
