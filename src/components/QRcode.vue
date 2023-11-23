<template>
  <VCard elevation="4" width="180">
    <VCardText style="text-align: center;">
      <qrcode-vue :value="value" :size="120" level="H"/>
      <span style="text-align: center; margin-bottom: 1rem; margin-top: 6px;">Quét QR để xem trên máy điện thoại</span>
    </VCardText>
  </VCard>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'QRcode',
  components: { QrcodeVue },
  props: {
    isShow: true,
    value: '',
  },

  data() {
    return {
      // isValid: undefined,
      // paused: false,
      // result: null,
    }
  },

  computed: {
    // validationPending() {
    //   return this.isValid === undefined && this.paused
    // },
    //
    // validationSuccess() {
    //   return this.isValid === true
    // },
    //
    // validationFailure() {
    //   return this.isValid === false
    // },
  },

  methods: {
    //   onError: console.error,
    //
    //   resetValidationState() {
    //     this.isValid = undefined
    //   },
    //
    //   async onDetect([firstDetectedCode]) {
    //     this.result = firstDetectedCode.rawValue
    //     this.paused = true
    //
    //     // pretend it's taking really long
    //     await this.timeout(3000)
    //     this.isValid = this.result.startsWith('http')
    //
    //     // some more delay, so users have time to read the message
    //     await this.timeout(2000)
    //     this.paused = false
    //     this.$router.push({
    //       name: 'order'
    //     })
    //   },
    //
    //   timeout(ms) {
    //     return new Promise((resolve) => {
    //       window.setTimeout(resolve, ms)
    //     })
    //   },
    // },
  },
}
</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  color: black;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.validation-success {
  color: green;
}

.validation-failure {
  color: red;
}
</style>
