<template>
  <div class="grid grid-cols-4 grid-flow-col gap-4">
    <div class="grid col-span-3">
      <px-assets-table :assets="assets" />
    </div>
    <div>
      <sk-aside />
    </div>
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import SkAside from "@/components/SkAside.vue";

export default {
  name: "Home",

  components: { PxAssetsTable, SkAside },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>

<style lang="scss" scoped></style>
