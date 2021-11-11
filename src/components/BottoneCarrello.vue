<template>
  <div>

    <button @click="addToCart" type="button" :disabled="inventory<=0" :class="{disabledButton: (inventory<=0)}" >
      <slot></slot>
    </button>
   
  </div>
</template>

<script>
export default { 
   props: ["prodotto"],
  methods :{
    addToCart: function () {
      this.prodotto[this.id].inventory = this.prodotto[this.id].inventory - 1
      this.$store.commit("AGGIUNGI_CARRELLO", this.prodotto);
    },
  },
  computed: {
    inventory: function () {
      return this.prodotto[this.id].inventory;
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