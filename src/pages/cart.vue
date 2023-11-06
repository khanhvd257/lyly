<template>
  <div>
    <h3 class="header-text">Giỏ hàng</h3>
    <div class="cart-title">
      <span style=" width: 15%;">Hình ảnh</span>
      <span style="width: 40%;">Tên sản phẩm</span>
      <span style=" width: 30%;">Giá tiền</span>
      <span style=" width: 15%; text-align: end">Tùy chọn</span>
    </div>
    <div class="cart-container">
      <div v-for="n in 5" class="cart-item hover-card">
        <div class="item-img">
          <img :src="cart.image" alt="">
        </div>
        <div class="item-content">
          {{ cart.name }}
        </div>
        <div class="item-price">
          <span>{{ cart.price }}</span>
          <VTextField class="item-quantity" density="compact" type="number">{{ cart.num }}</VTextField>
          <span>{{ cart.flowPrice }}</span>
        </div>
        <div class="action">
          <VBtn>Xóa</VBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      cart: {
        image: 'https://product.hstatic.net/1000025647/product/kcn_innisfree_tone_up_no_sebum_new-min_804b62f1d33b4e7eb1c42c74dd5a6786_1024x1024.jpg',
        name: 'Kem chống ẩm',
        price: '100.000',
        flowPrice: '300.000',
        num: 3,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-title {
  display: flex;

  span:nth-child(odd) {
    text-align: center;
  }
  span:last-child{
    margin-right: .5rem;
  }
}

.cart-container {
  display: flex;
  flex-direction: column;

  .cart-item {
    //width: 100%;
    padding: 1rem 0;
    margin: 1rem .5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    .item-content {
      color: black;
      font-size: 14px;
      width: 40%;
    }

    .item-img {
      width: 15%;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: contain;
      }
    }

    .item-price {
      display: flex;
      gap: 16px;
      width: 15%;
      align-items: center;
      flex: 1;

      .item-quantity {
      }
    }
    .action{
      width: 15%;
      float: right;
      text-align: end;
    }
  }
}
</style>
