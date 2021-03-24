<template>
  <div>
    <h2 class="text-left grid-rows-4 text-green-900 text-lg font-bold">
      Clientes Frecuentes
    </h2>
    <table>
      <thead>
        <tr class="bg-gray-100 border-b-2 border-gray-400">
          <th>
            <span>Avatar</span>
          </th>
          <th>Nombre</th>
          <th>ID</th>
          <td class="hidden sm:block"></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="a in assets"
          :key="a.id"
          class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        >
          <td>
            <img
              class="rounded-full border-2 border-white h-12 w-12"
              :src="a.image_url"
              :alt="a.name"
            />
          </td>
          <td class="text-green-900 text-bold text-left text-bold">
            {{ a.name }}
          </td>

          <td>{{ a.id }}</td>
          <td class="hidden sm:block"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
