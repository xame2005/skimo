<template>
  <main>
    <sk-header></sk-header>
    <px-assets-table />
  </main>
</template>

<script>
import SkHeader from "@/components/SkHeader.vue";
import PxAssetsTable from "@/components/PxAssetsTable.vue";

export default {
  name: "App",
  components: {
    SkHeader,
    PxAssetsTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
