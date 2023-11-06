<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { uploadFile } from "@/api"
const accountData = {
  avatarImg: avatar1,
  firstName: 'Văn Đình Khánh',
  email: 'khanhve@example.com',
  username: 'khanhvd',
  phone: '0388018333',
  address: 'Sầm Sơn'
}

const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

const changeAvatar = (event) => {

  console.log(event.target.files[0])
  let file = event.target.files[0]
  const form = {
    'image': file,
  }
  uploadFile(form).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })
  // const { files } = file.target

}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}
</script>

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
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
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
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >

              <VBtn
                type="reset"
                color="error"
                variant="tonal"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Reset</span>
                <VIcon
                  icon="mdi-refresh"
                  class="d-sm-none"
                />
              </VBtn>
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
                  v-model="accountDataLocal.firstName"
                  label="Họ và tên"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.username"
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
                  v-model="accountDataLocal.email"
                  label="E-mail"
                  type="email"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.address"
                  label="Địa chỉ"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.phone"
                  label="Số điện thoại"
                  type="number"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Save changes</VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

<!--    <VCol cols="12">-->
<!--      &lt;!&ndash; 👉 Deactivate Account &ndash;&gt;-->
<!--      <VCard title="Deactivate Account">-->
<!--        <VCardText>-->
<!--          <div>-->
<!--            <VCheckbox-->
<!--              v-model="isAccountDeactivated"-->
<!--              label="I confirm my account deactivation"-->
<!--            />-->
<!--          </div>-->

<!--          <VBtn-->
<!--            :disabled="!isAccountDeactivated"-->
<!--            color="error"-->
<!--            class="mt-3"-->
<!--          >-->
<!--            Deactivate Account-->
<!--          </VBtn>-->
<!--        </VCardText>-->
<!--      </VCard>-->
<!--    </VCol>-->
  </VRow>

</template>
