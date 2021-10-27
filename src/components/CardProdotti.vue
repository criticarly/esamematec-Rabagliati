<template>

<div>
  <div class="container">
    <div class="row">
     <div class="col-sm">
        <b-card
          img-alt="Image"
          img-top
          tag="article"
         style="max-width: 20rem;"
          class="mb-2"
        >
        <b-card-text>
            <div class="product-image">
              <img v-bind:src="prodotti.image" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">{{ prodotti.product }}</h4>
                <div class="card-text">
                  <p> Descrizione: {{prodotti.features}}</p>
                  <p v-if="prodotti.inventory >= 100">Disponibile</p>
                  <p v-else-if="prodotti.inventory > 0"> Disponibilità limitata</p>
                  <p v-else>Esaurito</p>
                  <p v-show="prodotti.onSale">Acquistalo!</p>
                  <span class="eyebrow, prodotti-brand">{{ prodotti.brand }}</span>
                  <span class="prodotti-price">{{ prodotti.price }} euro</span>
                </div>
            </div>
        </div>
    </b-card-text>

    <BottoneCarrello v-bind:prodotto="prodotti">Aggiungi al carrello</BottoneCarrello>
    <button type="button" class="btn btn-link">
    <router-link class="prodotti-link" v-bind:to="{ name: 'Dettagli', params: { id: prodotti.id } }">Per saperne di più</router-link></button>
  </b-card>
      </div> 
  </div>
</div>
 

</div>

</template>

<script>

export default {
  props: ["prodotti"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.prodotti-brand {
  float: right;
}

.prodotti-price {
  float: left;
}

/*.prodotti-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.prodotti-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.prodotti-card > .title {
  margin: 0;
}*/
.prodotti-link {
  text-decoration: none;
  font-weight: 100;
}
</style>