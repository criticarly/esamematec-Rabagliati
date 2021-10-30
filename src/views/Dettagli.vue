<template>
  <div>
    <div class="container">
      <router-link v-bind:to="{ name: 'Home' }"><a class="backhome" href="#">
      <img src="https://cdn-user-icons.flaticon.com/52435/52435626/1635589119808.svg?token=exp=1635590020~hmac=208ff43804d5d5686e42acb9c13c6695" alt="" width="25" height="25">
        Torna alla homepage
        </a></router-link>
      </div>
    <br><br>
    <h1>{{prodotti.brand}} - {{ prodotti.product }}</h1>
    <p>
      {{prodotti.description}}
    </p>
    <p v-if="prodotti.inventory > 10"><b>Disponibile</b></p>
    <p v-else-if="prodotti.inventory > 0">Disponibilità limitata</p>
    <p v-else>Non disponibile</p>
    <p v-show="prodotti.onSale">In vendita!</p>
    <p>Acquistalo a soli {{ prodotti.price }} €</p>
    <div class="container">
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
    <br>
    <BottoneCarrello v-bind:prodotto="prodotti">Aggiungi al carrello</BottoneCarrello>
    <br><br>
  </div>
  </div>
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