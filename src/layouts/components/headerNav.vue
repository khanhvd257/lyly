<template>
  <div class="head-container">
    <div class="index-nav-bar">
      <div>
        <ul class="sub-menu">
          <li v-for="item in menu">
            <a :href="item.link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-container">
        <div class="hidden-md-and-down logo">
          <RouterLink to="/">
            <img src="../../assets/images/logo/LYLY%20STORE.png" width="180" height="60" alt=""/>
          </RouterLink>
        </div>
        <div class="input-search">
          <v-text-field
            bg-color="#f5f5f5"
            density="compact"
            label="Tìm kiếm sản phẩm"
            append-inner-icon="mdi-search"
            variant="solo"
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      menu: [{
        title: "Đăng nhập", link: "login",
      },
        {
          title: "Đăng kí", link: "register",
        },
        {
          title: "Giỏ hàng", link: "home/cart",
        },
        {
          title: "Đơn đặt", link: "home/order",
        },
        {
          title: "Thoát", link: "logout",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.head-container {
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1000000;
  background-color: white;

}

.index-nav-bar {
  margin: 0 auto;
  width: 1200px;
  height: 90px;

  .sub-menu {
    display: flex;
    list-style-type: none;
    justify-content: end;

    li {
    }

    a {
      font-size: 12px;
      padding: 0 1rem;
      color: #868585;
      border-right: 1px solid #80848f;
    }
  }

  .nav-container {
    margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
  }

  .input-search {
    flex: 1;
    margin-left: 2rem;
  }


}
</style>
