<template>
  <div>
    <h1>Makeup Store</h1>
    <h2>Cosmetica</h2>
    <CardProdotti v-for="elem in prodotti" :key="elem.id" :prodotti="elem"></CardProdotti>
  </div>
</template>

<script>
import CardProdotti from "@/components/CardProdotti.vue";

export default {
  components: {
    CardProdotti
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    prodotti: function() {
      return this.$store.state.prodotti;
    }
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
