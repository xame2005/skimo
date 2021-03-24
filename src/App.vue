<template>
  <main>
    <sk-header />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
    <sk-footer />
  </main>
</template>

<script>
import SkHeader from "@/components/SkHeader.vue";
import SkFooter from "@/components/SkFooter.vue";

export default {
  name: "App",
  components: {
    SkHeader,
    SkFooter,
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
