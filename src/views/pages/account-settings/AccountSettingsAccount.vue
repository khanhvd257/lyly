<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Thông tin tài khoản">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="formUser.avatar? formUser.avatar: avatar1"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="$refs.refInputEl.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Cập nhật ảnh đại diện mới</span>
              </VBtn>
              <input
                ref="refInputEl"
                type="file"
                name="file"
                @input="handleUpload"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
              />
            </div>
            <p class="text-body-1 mb-0">
              Chỉ cho phép JPG, GIF or PNG. Tối đa 800K
            </p>
          </form>
        </VCardText>

        <VDivider/>

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="formUser.name"
                  label="Họ và tên"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="formUser.username"
                  label="Tên đăng nhập"
                  disabled
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formUser.email"
                  label="E-mail"
                  type="email"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="formUser.address"
                  label="Địa chỉ"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="formUser.phone"
                  label="Số điện thoại"
                  type="number"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn @click="handleSave">Lưu thông tin</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

</template>
<script>

import { getInfoUser, uploadFile } from "@/api"
import avatar1 from "@images/avatars/avatar-1.png"
import { updateUser } from "@/api/user"
import moshaToast from "mosha-vue-toastify"

export default {
  data() {
    return {
      avatar1,
      formUser: {
        avatar: '',
        name: 'Văn Đình Khánh',
        email: 'khanhve@example.com',
        username: 'khanhvd',
        phone: '0388018333',
        address: 'Sầm Sơn',
      },
      user: {},
    }
  },
  created() {
    this.getDataUser()
  },
  methods: {
    getDataUser() {
      getInfoUser().then(res => {
        this.user = res.data.info
        this.formUser.name = this.user.name
        this.formUser.username = this.user.username
        this.formUser.phone = this.user.phone
        this.formUser.email = this.user.email
        this.formUser.address = this.user.address
        this.formUser.avatar = this.user.avatar
      })
    },
    handleUpload(event) {

      let file = event.target.files[0]
      const form = {
        'image': file,
      }
      uploadFile(form).then(res => {
        console.log(res)
        this.formUser.avatar = res.url
      }).catch(e => {
      })

    },
    handleSave() {
      let load = this.$loading.show()
      updateUser(this.formUser).then(res => {
        const objectJSON = JSON.stringify(res.data)
        localStorage.setItem('infoUser', objectJSON)
        this.$moshaToast('Sửa thành công',
          {
            type: 'success',
            transition: 'slide',
            timeout: 3000,
          })
      })
      load.hide()
    },
  },

}
</script>
