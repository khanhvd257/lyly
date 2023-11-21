<template>
  <VBottomNavigation
    class="position-fixed hidden-md-and-up"
    color="indigo"
  >
    <VBtn>
      <router-link to="/">
        <v-icon>mdi-home</v-icon>
        Trang chủ
      </router-link>
    </VBtn>
    <VBtn v-if="userInfo == null">
      <router-link to="/login">
        <v-icon>material-symbols:login</v-icon>
        Đăng nhập
      </router-link>
    </VBtn>
    <VBtn v-if="userInfo == null">
      <router-link to="/register">
        <v-icon>tabler:registered</v-icon>
        Đăng kí
      </router-link>
    </VBtn>

    <VBtn v-if="userInfo != null">
      <router-link to="/home/cart">
        <v-icon>tdesign:cart</v-icon>
        Giỏ hàng
      </router-link>
    </VBtn>
    <VBtn v-if="userInfo != null">
      <router-link to="/home/order">
        <v-icon>icon-park-outline:order</v-icon>
        Đơn hàng
      </router-link>
    </VBtn>
    <VBtn v-if="userInfo != null">
      <router-link to="/home">
        <v-icon>material-symbols:person-outline</v-icon>
        Cá nhân
      </router-link>
    </VBtn>
  </VBottomNavigation>

</template>

<script>
export default {
  name: "bottomMobile",
  computed: {
    userInfo() {
      return localStorage.getItem('access_token')
    },
  },
}
</script>

<style scoped>

</style>
