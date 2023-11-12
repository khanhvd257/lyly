<template>
  <header-nav/>
  <div class="container-profile">
    <profile-menu/>
    <RouterView class="content"/>
    <!--    <VBottomNavigation-->
    <!--      class="position-fixed hidden-md-and-up"-->
    <!--      color="indigo"-->
    <!--    >-->
    <!--      <VBtn v-if="userInfo == null">-->
    <!--        <router-link to="/login">-->
    <!--          <v-icon>material-symbols:login</v-icon>-->
    <!--          Đăng nhập-->
    <!--        </router-link>-->
    <!--      </VBtn>-->
    <!--      <VBtn v-if="userInfo == null">-->
    <!--        <router-link to="/register">-->
    <!--          <v-icon>tabler:registered</v-icon>-->
    <!--          Đăng kí-->
    <!--        </router-link>-->
    <!--      </VBtn>-->
    <!--      <VBtn v-if="userInfo != null">-->
    <!--        <router-link to="/home/cart">-->
    <!--          <v-icon>tdesign:cart</v-icon>-->
    <!--          Giỏ hàng-->
    <!--        </router-link>-->
    <!--      </VBtn>-->
    <!--      <VBtn v-if="userInfo != null">-->
    <!--        <router-link to="/home/order">-->
    <!--          <v-icon>icon-park-outline:order</v-icon>-->
    <!--          Đơn hàng-->
    <!--        </router-link>-->
    <!--      </VBtn>-->
    <!--      <VBtn v-if="userInfo != null">-->
    <!--        <router-link to="/home">-->
    <!--          <v-icon>material-symbols:person-outline</v-icon>-->
    <!--          Cá nhân-->
    <!--        </router-link>-->
    <!--      </VBtn>-->
    <!--    </VBottomNavigation>-->
    <bottom-mobile/>
  </div>

</template>

<script>
import ProfileMenu from "@/layouts/components/profileMenu.vue"
import HeaderNav from "@/layouts/components/headerNav.vue"
import BottomMobile from "@/layouts/components/bottomMobile.vue"

export default {
  name: "profile",
  components: { HeaderNav, ProfileMenu, BottomMobile },
  computed: {
    userInfo() {
      return localStorage.getItem('access_token')
    },
  },
}
</script>

<style scoped>
.container-profile {
  margin: 100px auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
}

@media (max-width: 600px) {
  .container-profile {
    margin: 60px auto !important;
  }

  .content {
    margin-left: 0px !important;;
  }
}

.content {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  flex: 1;
  margin-left: 16px;
  border-radius: 8px;
  background-color: #fff;
  padding: 6px 16px;
  width: 100%;
}
</style>
