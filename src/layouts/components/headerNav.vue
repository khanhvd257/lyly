<template>
  <div class="head-container">
    <div class="index-nav-bar">
      <div class="top-header hidden-xs">
        <div>
          <ul class="sub-menu">
            <li>
              <router-link to="/facebook">
                <VIcon icon="bi:instagram"/> Instagram
              </router-link>
            </li>
            <li >
              <router-link to="/instagram">
                <VIcon icon="basil:facebook-messenger-outline"/> Messenger
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="sub-menu">
            <li v-if="!userInfo">
              <router-link to="/login">
                Đăng nhập
              </router-link>
            </li>
            <li v-if="!userInfo">
              <router-link to="/register">
                Đăng kí
              </router-link>
            </li>
            <li v-if="userInfo">
              <router-link to="/home/order">
                Đơn hàng
              </router-link>
            </li>
            <li v-if="userInfo">
              <router-link to="/home/cart">
                Giỏ hàng
              </router-link>
            </li>
            <li>
              <router-link v-if="userInfo" to="/home">
                <VAvatar size="22" v-if="userInfo.avatar" :image="userInfo.avatar"/>
                <span style="margin-left: .4rem;">{{ userInfo.name ? userInfo.name : 'customer' }}</span>
              </router-link>
            </li>
            <li v-if="userInfo">
              <router-link @click="handleLogout" to="#">
                Thoát
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-container">
        <div class="hidden-md-and-down logo">
          <RouterLink to="/">
            <img src="../../assets/images/logo/LYLY%20STORE.png" width="180" height="60" alt=""/>
          </RouterLink>
        </div>
        <div class="input-search">
          <search-form/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { logout } from "@/api/user"
import SearchForm from "@/components/SearchForm.vue"

export default {
  name: "headerNav",
  components: { SearchForm },
  computed: {
    userInfo() {
      if (localStorage.getItem('infoUser')) return JSON.parse(localStorage.getItem('infoUser'))
      else if (localStorage.getItem('access_token')) return true
    },
  },
  data() {
    return {}
  },
  methods: {
    handleLogout() {
      logout().then(res => {
        this.$moshaToast('Đăng xuất thành công',
          {
            type: 'success',
            transition: 'slide',
            timeout: 3000,
          })
        localStorage.removeItem('infoUser')
        localStorage.removeItem('access_token')
        this.$router.push('/login')
      })
    },
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

.top-header{
  display: flex;
  justify-content: space-between;
}
.index-nav-bar {
  margin: 0 auto;
  max-width: 1200px;
  max-height: 90px;
  height: 100%;
  width: 100%;

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
  }


}
</style>
