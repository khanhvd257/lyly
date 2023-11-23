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

import { register } from "@/api/user"

export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        password_confirmation: '',
      },
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
        usernameLength: username => {
          const regexPassword = /^.{6,}$/
          return regexPassword.test(username) ? true : 'Tên tài khoản phải ít nhất 6 ký tự'
        },
        noWhitespace: username => {
          const regexNoWhitespace = /^\S*$/
          return regexNoWhitespace.test(username) ? true : 'Tên đăng nhập không được chứa dấu cách'
        },
        passwordMatch: (value) => {
          return value === this.registerForm.password ? true : 'Mật khẩu không khớp'
        },
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
        this.$router.push('/login')
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
            <router-link to="/">
              <img height="100" width="100" src="../assets/images/logo/logo_tron.png" alt=""/>
            </router-link>
          </div>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          LYLY Store
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <VForm>
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="registerForm.username"
                label="Tên đăng nhập"
                :rules="[rules.required, rules.noWhitespace, rules.usernameLength]"
                type="text"
              />
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="registerForm.password"
                label="Mật khẩu"
                :rules="[rules.required, rules.passwordLength]"
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
                :rules="[rules.required, rules.passwordMatch]"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VSnackbar color="error" v-model="error" timeout="2000">
                Lỗi tạo tài khoản
              </VSnackbar>
              <!-- remember me checkbox -->

              <!-- login button -->
              <VBtn
                block class="mt-5"
                @click="handleSubmit"
              >
                Đăng kí ngay
              </VBtn>
              <div class="d-flex align-center justify-center flex-wrap mt-1 mb-4">
                <router-link
                  class="ms-2 mb-1"
                  to="/login"
                >
                  Có tài khoản, đăng nhập
                </router-link>
              </div>

            </VCol>
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
