<template>
  <div class="product">
    <h3 class="header-text">Sản phẩm đang được bày bán tại LYLY Store</h3>
    <VRow class="container" justify="space-between" >
      <div
        v-for="n in 20"
      >
        <div class="product-content hover-card">

          <div class="product-img">
            <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                 alt=""
            >
          </div>
          <div class="product-desc">
            <span class="product-name">
              Đây là tên sản phẩm  Đây là tên sản phẩm
            </span>
            <div class="product-rating">
              <div style="display: flex; align-items: stretch">
                <span>5</span>
                <VIcon size="16" icon="emojione:star"/>
              </div>
              <span>
                45 Lượt bán
              </span>
            </div>
            <span class="product-price">
              ₫10.000.000
            </span>
          </div>
        </div>
      </div>
    </VRow>
  </div>
</template>

<script>
export default {
  name: "ProductList",
}
</script>

<style lang="scss" scoped>


.product {
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container {
    max-width: 1200px;
    margin: 0;

    .product-content {
      margin-top: 2rem;
      height: 290px;
      width: 220px;
      border-radius: 10px;
      background-color: #fff;

      .product-img {
        padding: 6px 8px;
        width: 100%;
        height: 180px;
        border-radius: 6px;
        position: relative;

        img {
          overflow: hidden;
          object-fit: cover;
          width: 100%;
          border-radius: 8px;
          height: 100%;
        }
      }

      .product-desc {
        display: flex;
        margin: 0 3%;
        gap: 3px;
        padding: 0px 6px;
        white-space: pre-wrap;
        flex-direction: column;
        height: 100px;

        .product-name {
          line-height: 20px;
          height: 40px;
          color: black;
        }

        .product-rating {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .product-price {
          color: firebrick;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}

</style>
