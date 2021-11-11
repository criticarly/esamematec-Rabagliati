<template>
  <div id="nav" class="nav">
    
    <nav>
      <div class="container-fluid">
        <router-link v-bind:to="{ name: 'Home' }">
          <a class="navbar-brand" href="#">
          <img src="@/assets/borsetta.png" alt="" width="37" height="37"><!--https://cdn-icons-png.flaticon.com/512/775/775193.png-->
          My MakeUp Store
          </a>
        </router-link>
      </div>
      <router-link v-bind:to="{ name: 'Home' }"><img src="@/assets/occhiolino.png" alt="" width="19" height="19">&nbsp;Makeup</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Recensioni' }"><img src="@/assets/cuore.png" alt="" width="19" height="19">&nbsp;Recensioni</router-link> &nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Carrello' }"><img src="@/assets/carrello.png" alt="" width="19" height="19">&nbsp;Shop {{carrello}}</router-link>
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
nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #ffffff;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: #2d2d34;
  text-decoration: none;
}
/*.nav .nav-item.router-link-exact-active {
  color: #ffffff;
  border-bottom: solid 2px #ffffff;
}*/
</style>