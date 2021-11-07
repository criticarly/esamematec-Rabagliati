<template>
  <div class="col-md-4">
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
                  <span class="eyebrow, prodotti-brand">{{ prodotti.brand }}</span>
                  <span class="prodotti-price">{{ prodotti.price }} €</span>
                </div>
            </div>
        </div>
        
    </b-card-text>
    

  </b-card>
  
</div>

</template>

<script>

export default {
  props: ["prodotti"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.prodotti-brand {
  float: right;
}

.prodotti-price {
  float: left;
}

.prodotti-card {
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
}
.prodotti-link {
  color: #2d2d34;
  text-decoration: none;
  font-weight: 100;
}
</style>