<template>
  <div>

    <button @click="addToCart" type="button" class="">
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

<style scoped>
button {
  background-color: rgba(255, 255, 255, 0);
  color: #B97375;
  border: 2px solid #B97375;
  border-radius: 4px;
  }
</style>