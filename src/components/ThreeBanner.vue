<template>
  <VParallax
    height="300"
    class="banner"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        LYLY STORE
      </h1>
      <h4 class="subheading">
        MANG KỈ NIỆM VỀ BÊN BẠN
      </h4>
    </div>
  </VParallax>
</template>

<script>
export default {
  name: "ThreeBanner",
}
</script>

<style scoped>
.banner{
  border-radius: 8px;
}
</style>
