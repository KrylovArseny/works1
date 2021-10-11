<template>
  <block v-for="block of blocks" :key="block.src" v-bind:block="block" />
</template>

<script>
import block from "./post.vue";
export default {
  props: ["blocks"],
  components: {
    block,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
