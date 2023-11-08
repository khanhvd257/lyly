<template>
  <div style="background-color: white">
    <header-nav/>
  </div>
  <div class="container">
    <RouterView/>
  </div>
  <Footer/>
  <VBottomNavigation
    class="position-fixed hidden-md-and-up"
    color="indigo"
  >
    <VBtn>
      <v-icon>mdi-history</v-icon>
      Recents
    </VBtn>

    <VBtn>
      <v-icon>mdi-heart</v-icon>

      Favorites
    </VBtn>

    <VBtn>
      <v-icon>mdi-map-marker</v-icon>

      Nearby
    </VBtn>
  </VBottomNavigation>
</template>
<script>
import navigationBar from "@layouts/components/navigationBar.vue"
import { Icon } from "@iconify/vue"
import Footer from "@/layouts/components/Footer.vue"
import HeaderNav from "@/layouts/components/headerNav.vue"

export default {
  components: { HeaderNav, Footer, Icon, navigationBar },
}
</script>
<style lang="scss">
.container {
  width: 1200px;
  margin: 90px auto;

}

.index-nav-bar {
  height: 80px;
  width: 100%;
  background: #fff;

  .nav-container {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

}

// As we are using `layouts` plugin we need its styles to be imported
</style>
