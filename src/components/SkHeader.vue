<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <router-link to="/">
              <img
                src="@/assets/logo.png"
                alt="Skimo Logo"
                class="rounded-full border-2 border-white h-10 w-10"
              />
              Skimo</router-link
            >
            Menú</span
          >
        </div>
        <div
          class="flex items-center flex-shrink-0 text-white mr-6 font-semibold text-xl"
        >
          <router-link to="/contact"> Contacto </router-link>
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SkHeader",
};
</script>
