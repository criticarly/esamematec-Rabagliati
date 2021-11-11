<template>
  <div>
    <button @click="onSubmit">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit: function () {
      this.$store.commit("AGGIUNGI_RECENSIONE");
    }
  }
};
</script>

