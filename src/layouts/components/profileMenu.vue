<template>
  <div class="hidden-xs">
    <v-list density="compact" class="menu-list">
      <v-list-subheader class="menu-header">
        <VAvatar size="80"
                 :image="userInfo.avatar? userInfo.avatar : 'https://kiddy.edu.vn/wp-content/uploads/2023/04/150-Hinh-Avatar-Nam-Dep-Trai-Ca-Tinh-Doc-Dao.jpg'"
        />
        <strong style="margin-left: 1rem">{{ userInfo.name? userInfo.name : 'customer' }}</strong>
      </v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        @click="handleClick(item.link)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { logout } from "@/api"
import router from "@/router"

export default {
  name: "profileMenu",
  computed: {
    userInfo() {
      return JSON.parse(localStorage.getItem('infoUser'))
    },
  },
  data: () => ({
    items: [
      { text: 'Đơn mua hàng', icon: 'icon-park-outline:transaction-order', link: 'order' },
      { text: 'Giỏ hàng', icon: 'noto-v1:shopping-cart', link: 'cart' },
      { text: 'Thông tin tài khoản', icon: 'icon-park:people', link: 'account' },
    ],
  }),
  methods: {
    handleClick(link) {
      this.$router.push({
        name: link,
      })
    },
    handleLogout() {
      logout().then(res => {
        this.$moshaToast('Đăng xuất thành công',
          {
            type: 'success',
            transition: 'slide',
            timeout: 3000,
          })
        localStorage.removeItem('access_token')
        localStorage.removeItem('infoUser')
        router.push('/login')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-list {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  width: 260px;
  height: 600px;
  border-radius: 8px;

  .menu-header {
    margin-bottom: 10px;
  }
}
</style>
