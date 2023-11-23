<script setup>
import { useTheme } from 'vuetify'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/flower.png'
import authV1Tree from '@images/may_bay.png'


const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)

</script>
<script>
import { getInfoUser, login } from "@/api"
import router from "@/router"

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        remember: false,
      },
      error: false,
      rules: {
        required: value => {
          if (!value) {
            return 'Trường này phải điền'
          }
          return true
        },
        passwordLength: password => {
          const regexPassword = /^.{8,}$/
          return regexPassword.test(password) ? true : 'Mật khẩu phải ít nhất 8 ký tự'
        },
      },
    }
  },
  mounted() {
    if (localStorage.getItem('access_token')) {
      router.push("/")
    }
  },
  methods: {
    handleSubmit() {
      let load = this.$loading.show()
      login(this.loginForm).then(res => {
          localStorage.setItem('access_token', res.data.token)
          getInfoUser().then(res => {
            console.log(res.data.info.name)
            const objectJSON = JSON.stringify(res.data.info)
            localStorage.setItem('infoUser', objectJSON)
          })
          this.error = false
          this.$moshaToast('Đăng nhập thành công',
            {
              type: 'success',
              transition: 'slide',
              timeout: 3000,
            })
          const redirectPath = localStorage.getItem('redirectPath')
          if (redirectPath) {
            // Xóa thông tin về trang trước đó từ localStorage (đã sử dụng xong)
            localStorage.removeItem('redirectPath')
            // Chuyển hướng người dùng quay lại trang trước đó sau khi đăng nhập thành công
            router.push(redirectPath)
          } else {
            // Nếu không có thông tin trang trước đó, chẳng hạn quay lại trang chủ
            router.push('/')
          }
        },
      ).catch(err => {
        this.error = true
      })
      load.hide()
    },
  },
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <!--          <div class="d-flex">-->
          <!--            <div v-html="logo"/>-->
          <!--          </div>-->
          <div class="d-flex">
            <router-link to="/">
              <img height="100" width="100" src="../assets/images/logo/logo_tron.png" alt=""/>
            </router-link>
          </div>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          LYLY Store
        </VCardTitle>
      </VCardItem>

      <!--      <VCardText class="pt-2">-->
      <!--        <h5 class="text-h5 font-weight-semibold mb-1">-->
      <!--          Chào mừng bạn đến với trang quản trị của LYLY Store! 👋🏻-->
      <!--        </h5>-->
      <!--        <p class="mb-0">-->
      <!--          Vui lòng đăng nhập trước khi bắt đầu-->
      <!--        </p>-->
      <!--      </VCardText>-->

      <VCardText>
        <VForm>
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="loginForm.username"
                label="Tên đăng nhập"
                :rules="[rules.required]"
                type="text"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="loginForm.password"
                label="Mật khẩu" :rules="[rules.required, rules.passwordLength]"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <VAlert style="margin-top: 6px" color="error" v-if="error" text="Sai tài khoản / mật khẩu"/>
              <!-- remember me checkbox -->

              <!-- login button -->
              <VBtn
                class="mt-5"
                block
                @click="handleSubmit"
              >
                Đăng nhập
              </VBtn>
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <!--                <VCheckbox-->
                <!--                  v-model="loginForm.remember"-->
                <!--                  label="Ghi nhớ đăng nhập"-->
                <!--                />-->
                <router-link
                  class="ms-2 mb-1"
                  to="/register"
                >
                  Đăng kí tài khoản?
                </router-link>
                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </VCol>

            <!-- create account -->
            <!--            <VCol-->
            <!--              cols="12"-->
            <!--              class="text-center text-base"-->
            <!--            >-->
            <!--              <span>New on our platform?</span>-->
            <!--              <RouterLink-->
            <!--                class="text-primary ms-2"-->
            <!--                to="/register"-->
            <!--              >-->
            <!--                Create an account-->
            <!--              </RouterLink>-->
            <!--            </VCol>-->

            <!--            <VCol-->
            <!--              cols="12"-->
            <!--              class="d-flex align-center"-->
            <!--            >-->
            <!--              <VDivider />-->
            <!--              <span class="mx-4">or</span>-->
            <!--              <VDivider />-->
            <!--            </VCol>-->

            <!-- auth providers -->
            <!--            <VCol-->
            <!--              cols="12"-->
            <!--              class="text-center"-->
            <!--            >-->
            <!--              <AuthProvider />-->
            <!--            </VCol>-->
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"

    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
      width="400"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/pages/page-auth.scss";
</style>
