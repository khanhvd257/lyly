<template>
  <header-nav/>
  <div class="container-profile">
    <profile-menu/>
    <RouterView class="content"/>
  </div>
</template>

<script>
import ProfileMenu from "@/layouts/components/profileMenu.vue"
import HeaderNav from "@/layouts/components/headerNav.vue"

export default {
  name: "profile",
  components: { HeaderNav, ProfileMenu },
}
</script>

<style scoped>
.container-profile {

  margin: 8px auto;
  width: 1200px;
  display: flex;
}

.content {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  flex: 1;
  margin-left: 16px;
  border-radius: 8px;
  background-color: #fff;
  padding: 6px 16px
}
</style>
