<template>
  <div>

      <button @click="addToCart" type="button" class="btn btn-outline-primary btn-sm">
      <slot></slot>
    </button>
   
  </div>
</template>

<script>
export default { 
   props: ["prodotto"],
  methods :{
    addToCart: function () {
      this.$store.commit("AGGIUNGI_CARRELLO", this.prodotto);
    },
  },
};     
</script>

<style lang="scss" scoped></style>

