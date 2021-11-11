<template>
  <div>

    <button @click="addToCart" type="button" :disabled="inventory<=0" :class="{disabledButton: (inventory<=0)}">
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
      this.prodotto['inventory'] = this.prodotto['inventory'] - 1
    },
  },
  computed: {
    inventory: function () {
      return this.prodotto['inventory']
    },
  }
};     
</script>

<style scoped>
button {
  background-color: #B97375;
  color: white;
  border: 2px solid #B97375;
  border-radius: 4px;
  }
</style>