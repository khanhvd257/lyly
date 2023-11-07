/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import store from '@/store/user' // Import Vuex Store
import { createPinia } from 'pinia'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import { createApp } from 'vue'
import moment from "moment/moment"
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'swiper/swiper-bundle.css'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import VueNumberFormat from '@coders-tm/vue-number-format'


loadFonts()


// Create vue app
const app = createApp(App)
app.config.globalProperties.formatPrice = function (value) {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  return formatter.format(value)
}
app.config.globalProperties.formatDateTime = function (value) {
  return moment(String(value)).format('HH:mm:ss - DD/MM/YYYY')

}
app.use(VueNumberFormat, { precision: 3 })
app.use(store)
// Use plugins
app.use(moshaToast, {
  transition: 'slide',
  hideProgressBar: 'true',

})
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(LoadingPlugin, {
  color: '#00A9FF',
  loader: 'bars',
})

// Mount vue app
app.mount('#app')
