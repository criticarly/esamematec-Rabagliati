<template>
  <div class="col-md-4">
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 27rem;"
      class="mb-2 flex-item"
    >
      <b-card-text>
        <div class="product-image">
          <img v-bind:src="prodotti.image" class="card-img-top">
          <div class="card-body">
            <h4 class="card-title">{{ prodotti.product }}</h4>
            <div class="card-text">
              <p> Descrizione: {{prodotti.features}}</p>
              <p v-if="prodotti.inventory >= 100"><b>Disponibile</b></p>
              <p v-else-if="prodotti.inventory > 0"><b> Disponibilità limitata</b></p>
              <p v-else><b>Esaurito</b></p>
              <p v-show="prodotti.onSale"><b>Acquistalo!</b></p>
              <span class="eyebrow, prodotti-brand">{{ prodotti.brand }}</span>
              <span class="prodotti-price">{{ prodotti.price }} €</span>
            </div>
          </div>
        </div>
      </b-card-text>

      <BottoneCarrello v-bind:prodotto="prodotti" >Aggiungi al carrello</BottoneCarrello>
      <button type="button" class="btn btn-link">
      <router-link class="prodotti-link" v-bind:to="{ name: 'Dettagli', params: { id: prodotti.id } }">Per saperne di più</router-link>
      </button>
    </b-card>    
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

.prodotti-link {
  text-decoration: none;
  font-weight: 100;
  color: #b97375;
}
</style>