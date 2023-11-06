<template>
  <div class="hidden-xs">
    <v-list density="compact" class="menu-list">
      <v-list-subheader class="menu-header">
        <VAvatar size="80"
                 image="https://kiddy.edu.vn/wp-content/uploads/2023/04/150-Hinh-Avatar-Nam-Dep-Trai-Ca-Tinh-Doc-Dao.jpg"
        />
        <strong>Văn Đình Khánh</strong>
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
export default {
  name: "profileMenu",
  data: () => ({
    items: [
      { text: 'Đơn mua hàng', icon: 'icon-park:transaction-order', link: 'order' },
      { text: 'Giỏ hàng', icon: 'noto-v1:shopping-cart', link: 'cart' },
      { text: 'Thông tin tài khoản', icon: 'icon-park:people', link: 'account' },
      { text: 'Đăng xuất', icon: 'majesticons:logout', link: 'login' },
    ],
  }),
  methods:{
    handleClick(link){
      this.$router.push({
        name: link
      })
    }
  }
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
