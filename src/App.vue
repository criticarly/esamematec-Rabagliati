<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d34;
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2d2d34;
}

#nav a.router-link-exact-active {
  color: #b97375;
}
</style>
