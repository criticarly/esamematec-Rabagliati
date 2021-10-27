<template>
  <div id="nav" class="nav">
    
    <nav>
      <router-link v-bind:to="{ name: 'Home' }">Make up</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Recensioni' }">Recensioni</router-link> &nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Carrello' }">Carrello {{carrello}}</router-link>
    </nav>
  </div>
</template>



<script>
export default {
  computed: {
    carrello: function(){
      return this.$store.state.prodottiCarrello.length;
    },
    numeroProdotti: function() {
      return this.$store.getters.numeroProdotti;
    }
  },
  
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #ffffff;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.89);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #ffffff;
  border-bottom: solid 2px #ffffff;
}
</style>