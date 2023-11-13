<template>
  <v-card>
    <h2 style="text-align: center; margin: 1rem 0; color: #CE5A67">THÔNG TIN ĐẶT SẢN PHẨM</h2>
    <VDivider/>
    <div class="pay-containter">
      <h3 class="header-text sticky-top-50">Thông tin sản phẩm</h3>
      <div v-for="(item,index) in order" :key="index">
        <div class="product-detail">
          <img width="100" height="100"
               :src="item.product_detail.image_url"
               alt=""
          >
          <div class="name">
            <span class="clamp-text" style="width: 30%; font-size: 14px">Tên sản phẩm: {{
                item.product_detail.name
              }}</span>
            <span>Số lượng: {{ item.quantity }}</span>
            <span>Đơn giá: {{ formatPrice(item.product_detail.price) }}</span>
            <span>{{ item.total ? formatPrice(item.total) : formatPrice(item.flowPrice) }}</span>
          </div>
        </div>
      </div>
      <VDivider style="margin: 2rem 0"/>
      <h3 class="header-text sticky-top-50">Thông tin người nhận</h3>
      <div class="user">
        <v-row>
          <v-col cols="12" sm="6">
            <VTextField label="Tên người nhận" v-model="name"
                        :rules="[rules.required]"

            />
          </v-col>
          <v-col cols="12" sm="6">
            <VTextField label="Số điện thoại" v-model="phone"
                        :rules="[rules.required]"
            />
          </v-col>
        </v-row>
        <VRow>
          <VCol cols="12" sm="6">
            <VSelect label="Tên tỉnh/ Thành phố" :items="provinceData"
                     item-title="full_name" item-value="code"
                     @update:modelValue="getDataDistrict" v-model="addressForm.province"
                     :rules="[rules.required]"

            />
          </VCol>
          <VCol cols="12" sm="6">
            <VSelect label="Tên quận/ Huyện" :items="districtData"
                     item-title="full_name" item-value="code"
                     v-if="addressForm.province"
                     @update:modelValue="getDataWards" v-model="addressForm.district"
                     :rules="[rules.required]"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" sm="6">
            <VSelect label="Tên xã/ Phường" :items="wardsData"
                     item-title="full_name" item-value="code"
                     v-model="addressForm.ward"
                     v-if="addressForm.district"
                     item-props="fullname" :rules="[rules.required]"
            />
          </VCol>

          <VCol cols="12" sm="6">
            <VTextField label="Tên Đường" v-model="addressForm.stress"
                        :rules="[rules.required]" v-if="addressForm.ward"
            />
          </VCol>
        </VRow>
      </div>
      <VDivider style="margin: 2rem 0"/>
      <h3 class="header-text sticky-top-50">Phương thức thanh toán</h3>
      <ul class="logo-list">
        <VRadioGroup v-model="formOrder.payMethod">
          <VRadio v-for="item in payMethod" :key="item.value" :value="item.value">
            <template v-slot:label>
              <div style="display: flex; margin-bottom: 10px; align-items: center; gap: 10px">
                <img width="60" height="60" :src="item.logo" :alt="item.value" class="footer-payment-icon"/>
                <h4>{{ item.value }}</h4>
              </div>
            </template>
          </VRadio>
        </VRadioGroup>
      </ul>


      <div class="pay-footer">
        <div class="info hidden-xs">
          <span>Tên người nhận: {{ name }}</span>
          <span>Số điện thoại: {{ phone }}</span>
        </div>
        <span class="price-total">
          {{ formatPrice(totalPrice) }}
    </span>
        <VBtn :disabled="!isValidate" color="success" @click="goPay">Thanh toán</VBtn>
      </div>
    </div>
  </v-card>
  <VDialog transition="" v-model="show">
    <div style="text-align: center">
      <QRcode :is-show="show"/>
    </div>
  </VDialog>

</template>

<script>
import { getDistrict, getProvince, getWards } from "@/api/address"
import { orderProduct } from "@/api/order"
import { getInfoUser } from "@/api"
import QRcode from "@/components/QRcode.vue"
import momoLogo from '@/assets/images/momo-logo.png'
import viettelpay from '@/assets/images/viettelpay-logo.svg'
import visa from '@/assets/images/visa.svg'
import cod from '@/assets/images/cod.png'

export default {
  name: "preOrder",
  components: { QRcode },

  props: {
    order: [],
    selectedIds: [],
  },
  data() {
    return {
      show: false,
      isValidate: false,
      userInfo: {},
      payMethod: [
        { logo: cod, value: 'Thanh toán khi nhận hàng' },
        { logo: momoLogo, value: 'Momo' },
        { logo: viettelpay, value: 'ViettelPay' },
        { logo: visa, value: 'Visa' },
      ],
      provinceData: [],
      wardsData: [],
      districtData: [],
      name: '',
      phone: '',
      formOrder: {
        note: '',
        delivery_address: '',
        product_id: '',
        quantity: '',
        selectIds: [],
        payMethod: '',
      },
      addressForm: {
        stress: '',
        district: '',
        ward: '',
        province: '',
      },
      rules: {
        required: value => {
          if (!value) {
            return 'Trường này phải điền'
          }
          return true
        },
        counter: value => value.length > 0 || 'Lớn hơn 0',
      },
    }
  },
  created() {
    this.getDataProvince()
    getInfoUser().then(res => {
      this.name = res.data.info.name
      this.phone = res.data.info.phone
    })
    this.formOrder.selectIds = this.selectedIds
  }
  ,
  computed: {
    isValidate() {
      if (this.addressForm.stress && this.addressForm.district &&
        this.addressForm.ward && this.addressForm.province && this.formOrder.payMethod) {
        return true
      } else {
        return false
      }
    }
    ,
    totalPrice() {
      if (this.selectedIds) {
        return this.order.reduce((acc, obj) => acc + obj.total, 0)
      }
      return this.order[0].flowPrice
    }
    ,
  }
  ,

  methods: {
    getDataProvince() {
      getProvince().then(res => {
        this.provinceData = res.data
      })
    }
    ,
    getDataDistrict(id) {
      getDistrict({ province_code: id }).then(res => {
        this.districtData = res.data
        this.addressForm.district = ''
        this.addressForm.ward = ''
      })
    }
    ,
    getDataWards(id) {
      getWards({ district_code: id }).then(res => {
        this.wardsData = res.data
        this.addressForm.ward = ''
      })
    }
    ,
    handleShowQR() {
      // this.show = true

    }
    ,
    goPay() {
      const provice = this.provinceData.find(item => item.code == this.addressForm.province).full_name
      const district = this.districtData.find(i => i.code == this.addressForm.district).full_name
      const ward = this.wardsData.find(i => i.code == this.addressForm.ward).full_name
      this.formOrder.delivery_address = this.addressForm.stress + " - " + ward + " - " + district + " - " + provice
      this.formOrder.product_id = this.order[0].product_detail.id
      this.formOrder.quantity = this.order[0].quantity
      this.formOrder.note = this.name + " " + this.phone
      console.log(this.formOrder)
      let load = this.$loading.show()
      orderProduct(this.formOrder).then((res) => {

        this.$router.push({
          name: 'order',
        })
        this.$moshaToast('Đặt hàng thành công',
          {
            type: 'success',
            transition: 'slide',
          })
      }).catch(e => {
        this.$moshaToast('Đặt hàng thất bai',
          {
            type: 'success',
            transition: 'slide',
            hideProgressBar: 'true',
            timeOut: 2000,
          })
      })

      load.hide()

    }
    ,
  }
  ,

}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {

  .product-detail {
    img {
      width: 120px;
      height: 120px;
    }

    .name {
      flex-direction: column;
      font-size: 12px;
      align-items: start!important;

      span:first-child {
        width: 100% !important;
      }

    }
  }
}

.pay-containter {
  padding: 1rem 1rem;

  .user {
    padding: .5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .product-detail {
    display: flex;
    gap: 1rem;
    padding: .5rem 1rem;

    img {
      border-radius: 6px;
    }

    .name {
      flex: 1;
      display: flex;
      justify-content: space-between;
      color: #000;
      align-items: center;

      :first-child {
        font-weight: bold;
        max-width: 600px;

      }
    }
  }
}

.logo-list {
  padding: .5rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.pay-footer {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #FFffff;
  height: 60px;

  .info {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #000;
    z-index: 9999;
    padding: 1px 6px;
    text-align: end;
  }

  .price-total {
    color: #CE5A67;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
