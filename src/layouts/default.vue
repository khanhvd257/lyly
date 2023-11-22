<template>
  <div style="background-color: white">
    <header-nav/>
  </div>
  <div class="container">
    <RouterView/>
  </div>
  <Footer/>
  <!--  <VBottomNavigation-->
  <!--    class="position-fixed hidden-md-and-up"-->
  <!--    color="indigo"-->
  <!--  >-->
  <!--    <VBtn v-if="userInfo == null">-->
  <!--      <router-link to="/login">-->
  <!--        <v-icon>material-symbols:login</v-icon>-->
  <!--        Đăng nhập-->
  <!--      </router-link>-->
  <!--    </VBtn>-->
  <!--    <VBtn v-if="userInfo == null">-->
  <!--      <router-link to="/register">-->
  <!--        <v-icon>tabler:registered</v-icon>-->
  <!--        Đăng kí-->
  <!--      </router-link>-->
  <!--    </VBtn>-->
  <!--    <VBtn v-if="userInfo != null">-->
  <!--      <router-link to="/home/cart">-->
  <!--        <v-icon>tdesign:cart</v-icon>-->
  <!--        Giỏ hàng-->
  <!--      </router-link>-->
  <!--    </VBtn>-->
  <!--    <VBtn v-if="userInfo != null">-->
  <!--      <router-link to="/home/order">-->
  <!--        <v-icon>icon-park-outline:order</v-icon>-->
  <!--        Đơn hàng-->
  <!--      </router-link>-->
  <!--    </VBtn>-->
  <!--    <VBtn v-if="userInfo != null">-->
  <!--      <router-link to="/home">-->
  <!--        <v-icon>material-symbols:person-outline</v-icon>-->
  <!--        Cá nhân-->
  <!--      </router-link>-->
  <!--    </VBtn>-->
  <!--  </VBottomNavigation>-->
  <bottom-mobile/>
</template>
<script>
import navigationBar from "@layouts/components/navigationBar.vue"
import { Icon } from "@iconify/vue"
import Footer from "@/layouts/components/Footer.vue"
import HeaderNav from "@/layouts/components/headerNav.vue"
import BottomMobile from "@/layouts/components/bottomMobile.vue"

export default {
  components: { BottomMobile, HeaderNav, Footer, Icon, navigationBar },
  computed: {
    userInfo() {
      return localStorage.getItem('access_token')
    },
  },

}
</script>
<style lang="scss">
@media (max-width: 600px) {
  .container {
    margin: 60px auto !important;
  }
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
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
