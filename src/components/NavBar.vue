<template>
  <div id="nav" class="nav">
    
    <nav>
      <div class="container">
      <router-link v-bind:to="{ name: 'Home' }"><a class="navbar-brand" href="#">
      <img src="https://cdn-user-icons.flaticon.com/52435/52435626/1635358679877.svg?token=exp=1635359595~hmac=0fc1d14b14a6b848fb476f79b8a0682e" alt="" width="37" height="37">
        My MakeUp Store
        </a></router-link>
      </div>
      <router-link v-bind:to="{ name: 'Home' }"><img src="https://cdn-icons-png.flaticon.com/512/3557/3557187.png" alt="" width="19" height="19">&nbsp;Makeup</router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Recensioni' }"><img src="https://cdn-icons-png.flaticon.com/512/3331/3331104.png" alt="" width="19" height="19">&nbsp;Recensioni</router-link> &nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'Carrello' }"><img src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png" alt="" width="19" height="19">&nbsp;Shop {{carrello}}</router-link>
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