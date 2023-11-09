<template>
  <template v-if="status === 0">
    <div class="cart">
      <div v-if="cartArr.length">
        <h3 class="header-text">Giỏ hàng</h3>
        <div class="cart-title">
      <span>
        <div style="width: 5%"/>
      </span>
          <span style=" width: 15%;">Hình ảnh</span>
          <span style="width: 35%;">Tên sản phẩm</span>
          <span style=" width: 30%;">Giá tiền</span>
          <span style=" width: 15%; text-align: end">Tùy chọn</span>
        </div>
        <div class="cart-container">
          <div v-for="cart in cartArr" :key=cart.id>
            <VDivider/>
            <div class="cart-item">
              <v-checkbox
                v-model="selectedCart"
                :value="cart.id"
              />
              <div class="item-img">
                <img width="80" height="80" :src="cart.product_detail.image_url" alt="">
              </div>
              <div class="item-content">
                {{ cart.product_detail.name }}
              </div>
              <div class="item-price">
                <span>{{ formatPrice(cart.product_detail.price) }}</span>
                <VTextField :rules="[rules.required]" min="1" :max="cart.product_detail.quantity" class="item-quantity"
                            readonly
                            density="compact" @update:modelValue="handleCheck(cart)"
                            type="number" v-model="cart.quantity"
                />
                <span>{{ formatPrice(cart.total) }}</span>
              </div>
              <div class="action">
                <VBtn>Xóa</VBtn>
              </div>
            </div>
          </div>
          <div>
            <VBtn @click="handleClickCheckCart">Thanh toán</VBtn>
          </div>
        </div>
      </div>
      <div v-if="!cartArr.length" class="no-cart">
        <img src="../assets/gif/empty-animation1.gif" alt="">
        <h2>Chưa có sản phẩm nào trong giỏ hàng</h2>
        <router-link to="/">
          <VBtn append-icon="mdi-cart">Mua ngay</VBtn>
        </router-link>
      </div>
    </div>
  </template>
  <template v-if="status===1">
    <div class="order">
      <PreOrder :order="orderArr" :selected-ids="selectedCart"/>
    </div>
  </template>
</template>

<script>
import { getAllCart } from "@/api/order"
import PreOrder from "@/pages/order/preOrder.vue"

export default {
  name: "cart",
  components: { PreOrder },
  data() {
    return {
      status: 0,
      rules: {
        required: value => !!value || 'Bắt buộc',
        counter: value => value.length > 0 && value || 'Lớn hơn 0',
        checkNum: (value, pro) => {
          if (!value || isNaN(value) || value <= 0) {
            return 'Số lượng mua lớn hơn 0 '
          }
          if (value > pro.quantity) {
            value = this.product.quantity
          }
          return true
        },
      },
      cart: {
        image: 'https://product.hstatic.net/1000025647/product/kcn_innisfree_tone_up_no_sebum_new-min_804b62f1d33b4e7eb1c42c74dd5a6786_1024x1024.jpg',
        name: 'Kem chống ẩm',
        price: '100.000',
        flowPrice: '300.000',
        num: 3,
      },
      cartArr: [],
      selectedCart: [],
      orderArr: [],

    }
  },
  created() {
    this.getDataCart()
  },
  methods: {
    getDataCart() {
      getAllCart().then(res => {
        this.cartArr = res.data
      })
    },
    handleCheck(cart) {
      if (cart.quantity) {
      }
    },
    handleClickCheckCart() {
      this.orderArr = this.cartArr.filter(i => this.selectedCart.includes(i.id))
      this.status = 1
    },
  },


}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin-left: 1rem;
  padding: 6px 8px;
  border-radius: 8px;
}

.order {
  width: 100%;
  margin-left: 1rem;

}

.cart-title {
  display: flex;
  align-items: center;

  span:nth-child(even) {
    text-align: center;
  }

  span:last-child {
    margin-right: .5rem;
  }
}

.cart-container {
  display: flex;
  flex-direction: column;

  .cart-item {
    //width: 100%;
    padding: 1rem 0;
    margin: 1rem 0rem;
    border-radius: 8px;
    display: flex;
    align-items: center;

    .item-content {
      color: black;
      font-size: 14px;
      width: 30%;
    }

    .item-img {
      width: 15%;
      height: 80px;
      text-align: center;

      img {
        width: 80px;
        border-radius: 6px;
        object-fit: cover;
      }
    }

    .item-price {
      display: flex;
      gap: 16px;
      width: 30%;
      align-items: center;
      flex: 1;

      .item-quantity {
      }
    }

    .action {
      width: 15%;
      float: right;
      text-align: end;
    }
  }
}

.no-cart {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
