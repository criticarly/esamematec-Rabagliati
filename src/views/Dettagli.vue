<template>
  <div>
    <div class="container"><br><br>
      <router-link v-bind:to="{ name: 'Home' }">
        <a class="backhome" href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/5227/5227701.png" alt="" width="25" height="25">
          Torna alla homepage
        </a>
      </router-link>
    </div>
    <br/><br />
    <h1>{{ prodotti.brand }} - {{ prodotti.product }}</h1>

    <br/><br/>
    <br/><br/>

            <div class="container">
              <div class="row">
                <div id="carosello" style="float: left; display: block; width: 500px; height: 500px">
                  <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    >
                    <b-carousel-slide v-bind:img-src="prodotti.image"></b-carousel-slide>
                    <b-carousel-slide v-bind:img-src="prodotti.image2"></b-carousel-slide>
                    <b-carousel-slide v-bind:img-src="prodotti.image3"></b-carousel-slide>
                    <b-carousel-slide v-bind:img-src="prodotti.image4"></b-carousel-slide>
                  </b-carousel>
                      <br/>

                      <br/><br/>
                </div>
                <div id="descrizione" style=" float: left; display: block; width: 500px; height: 500px; margin: 50px;">
                <div class="col-lg-10 col-md-6">
                   <p>{{ prodotti.description }}</p>
                    <p v-if="prodotti.inventory > 10"><b>Disponibile</b></p>
                    <p v-else-if="prodotti.inventory > 0">Disponibilità limitata</p>
                    <p v-else>Non disponibile</p>
                    <p v-show="prodotti.onSale">In vendita!</p>
                    <p>Acquistalo a soli {{ prodotti.price }} €</p>
                    <BottoneCarrello v-bind:prodotto="prodotti">Aggiungi al carrello</BottoneCarrello>
                </div>
                </div>
              </div>
                    <div style="clear: both"></div>
            </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: function () {
    return {
      prodotti: {},
    };
  },
  created: function () {
    this.prodotti = this.$store.getters.getProductById(Number(this.id));
    //this.prodotti = this.$store.state.prodotti[Number(this.id)];
    if (!this.prodotti) console.log("IL PRODOTTO NON ESISTE");
  },
};
</script>