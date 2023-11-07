<template>
  <v-card>
    <div class="pay-containter">
      <h3 class="header-text">Thông tin sản phẩm</h3>
      <div v-for="(item,index) in order" :key="index">
        <div class="product-detail">
          <img width="100" height="100"
               :src="item.product_detail.image_url"
               alt=""
          >
          <div class="name">
            <span style="width: 30%;">Tên sản phẩm: {{ item.product_detail.name }}</span>
            <span>Số lượng: {{ item.quantity }}</span>
            <span>Đơn giá: {{ formatPrice(item.product_detail.price) }}</span>
            <span>{{ item.total ? formatPrice(item.total) : formatPrice(item.flowPrice) }}</span>
          </div>
        </div>
      </div>
      <VDivider style="margin: 2rem 0"/>
      <h3 class="header-text">Thông tin người nhận</h3>
      <div class="user">
        <v-row>
          <v-col sm="6">
            <VTextField label="Tên người nhận" v-model="name"
                        :rules="[() => !!name || 'Vui lòng điền thông tin']"

            />
          </v-col>
          <v-col sm="6">
            <VTextField label="Số điện thoại" v-model="phone"
                        :rules="[() => !!phone || 'Vui lòng điền thông tin']"
            />
          </v-col>
        </v-row>
        <VRow>
          <VCol sm="6">
            <VSelect label="Tên tỉnh/ Thành phố" :items="provinceData"
                     item-title="full_name" item-value="code"
                     @update:modelValue="getDataDistrict" v-model="addressForm.province"
                     :rules="[() => !!addressForm.province || 'Vui lòng chọn']"

            />
          </VCol>
          <VCol sm="6">
            <VSelect label="Tên quận/ Huyện" :items="districtData"
                     item-title="full_name" item-value="code"
                     v-if="addressForm.province"
                     @update:modelValue="getDataWards" v-model="addressForm.district"
                     :rules="[() => !!addressForm.district || 'Vui lòng chọn']"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol sm="6">
            <VSelect label="Tên xã/ Phường" :items="wardsData"
                     item-title="full_name" item-value="code"
                     v-model="addressForm.ward"
                     v-if="addressForm.district"
                     item-props="fullname" :rules="[() => !!addressForm.ward || 'Vui lòng chọn']"
            />
          </VCol>

          <VCol sm="6">
            <VTextField label="Tên Đường" v-model="addressForm.stress" v-if="addressForm.ward"/>
          </VCol>
        </VRow>
      </div>
      <VDivider style="margin: 2rem 0"/>
      <h3 class="header-text">Phương thưc thanh toán</h3>
      <ul class="logo-list">
        <img width="60" height="60" src="@/assets/images/momo-logo.png" alt="momo" class="footer-payment-icon"/>

        <img width="60" height="60" src="@/assets/images/viettelpay-logo.svg" alt="viettelpay"
             class="footer-payment-icon"
        />
        <img width="60" height="60" src="@/assets/images/visa.svg" alt="visa-card" class="footer-payment-icon"
             style="width: 50px"
        />
        <img width="60" height="60" src="@/assets/images/master-card.svg" alt="master-card"
             class="footer-payment-icon"
        />
      </ul>
      <div class="pay-footer">
        <div class="info">
          <span>Tên người nhận: {{ name }}</span>
          <span>Số điện thoại: {{ phone }}</span>
        </div>
        <span class="price-total">
          {{ formatPrice(100000) }}
    </span>
        <VBtn color="success" @click="goPay">Thanh toán</VBtn>
      </div>
    </div>
  </v-card>


</template>

<script>
import { getDistrict, getProvince, getWards } from "@/api/address"
import { orderProduct } from "@/api/order"
import { getInfoUser } from "@/api"

export default {
  name: "preOrder",
  props: {
    order: [],
    selectedIds: [],
  },
  data() {
    return {
      userInfo: {},
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
      },
      addressForm: {
        stress: '',
        district: '',
        ward: '',
        province: '',
      },
      rules: {
        required: value => !!value || 'Bắt buộc',
        counter: value => value.length > 0 || 'Lớn hơn 0',
      },
    }
  },
  created() {
    this.getDataProvince()
    getInfoUser().then(res => {
      console.log(res)
      this.name = res.data.info.name
      this.phone = res.data.info.phone
    })
  },

  methods: {
    getDataProvince() {
      getProvince().then(res => {
        this.provinceData = res.data
      })
    },
    getDataDistrict(id) {
      getDistrict({ province_code: id }).then(res => {
        this.districtData = res.data
        this.addressForm.district = ''
        this.addressForm.ward = ''
      })
    },
    getDataWards(id) {
      getWards({ district_code: id }).then(res => {
        this.wardsData = res.data
        this.addressForm.ward = ''
      })
    },
    goPay() {
      if (this.order.length == 1) {
        const provice = this.provinceData.find(item => item.code == this.addressForm.province).full_name
        const district = this.districtData.find(i => i.code == this.addressForm.district).full_name
        const ward = this.wardsData.find(i => i.code == this.addressForm.ward).full_name
        this.formOrder.delivery_address = this.addressForm.stress + " - " + ward + " - " + district + " - " + provice
        this.formOrder.product_id = this.order[0].product_detail.id
        this.formOrder.quantity = this.order[0].quantity
        this.formOrder.note = this.name + " " + this.phone
        console.log(this.formOrder)
        delete this.formOrder.selectIds
        orderProduct(this.formOrder).then(res => {
          this.$router.push({
            name: 'order',
          })
          this.$moshaToast('Đặt hàng thành công',
            {
              type: 'success',
              transition: 'slide',
            })
        })
      } else {
        this.$moshaToast('Đặt hàng thaats bai',
          {
            type: 'success',
            transition: 'slide',
          })
      }
    },
  },

}
</script>

<style lang="scss" scoped>
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
