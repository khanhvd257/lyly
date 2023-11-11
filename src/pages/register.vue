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
import { register } from "@/api/user"

export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        password_confirmation: '',
      },
      error: false,
    }
  },
  mounted() {

  },
  methods: {
    handleSubmit() {
      let load = this.$loading.show()
      register(this.registerForm).then(res => {
        this.error = false
        this.$moshaToast('Đăng ký tài khoản thành công',
          {
            type: 'success',
            transition: 'slide',
            timeout: 3000,
          })
      }).catch(err => {
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
          <div class="d-flex">
            <img height="100" width="100" src="../assets/images/logo/logo_tron.png" alt=""/>
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
                v-model="registerForm.username"
                label="Tên đăng nhập"
                type="text"
              />
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="registerForm.password"
                label="Mật khẩu"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>
            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="registerForm.password_confirmation"
                label="Nhập lại mật khẩu"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VAlert style="margin-top: 6px" color="error" v-if="error" text="Sai tài khoản / mật khẩu"/>
              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">


                <a
                  class="ms-2 mb-1"
                  href="/login"
                >
                  Có tài khoản, đăng nhập
                </a>
              </div>

              <!-- login button -->
              <VBtn
                block
                @click="handleSubmit"
              >
                Đăng kí ngay
              </VBtn>
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
