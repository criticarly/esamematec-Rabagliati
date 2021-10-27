<template>
  <div>
    <h1>{{prodotti.brand}} - {{ prodotti.product }}</h1>
    <p>
      {{prodotti.description}}
    </p>
    <p v-if="prodotti.inventory > 10">Disponibile</p>
    <p v-else-if="prodotti.inventory > 0">In esaurimento</p>
    <p v-else>Non disponibile</p>
    <p v-show="prodotti.onSale">In vendita!</p>
    <p>Acquistalo a {{ prodotti.price }} euro !</p>
    <p>Altri colori disponibili:</p>

     <div id="carosello">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480">

      <b-carousel-slide v-bind:img-src="prodotti.image"></b-carousel-slide>
      <b-carousel-slide v-bind:img-src="prodotti.image2"></b-carousel-slide>
      <b-carousel-slide v-bind:img-src="prodotti.image3"></b-carousel-slide>
      <b-carousel-slide v-bind:img-src="prodotti.image4"></b-carousel-slide>

    </b-carousel>


  </div>
   
    <p>
      <router-link v-bind:to="{ name: 'Home' }">Torna alla lista</router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: function() {
    return {
      prodotti: {}
    };
  },
  created: function() {
    this.prodotti = this.$store.getters.getProductById(Number(this.id));
    //this.prodotti = this.$store.state.prodotti[Number(this.id)];
    if (!this.prodotti) console.log("IL PRODOTTO NON ESISTE");
  }
};
</script>
