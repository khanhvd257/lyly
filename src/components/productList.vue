<template>
  <div class="product">
    <h3 v-if="title" class="header-text">{{ title }}</h3>
    <h3 v-else class="header-text">Sản phẩm đang được bày bán tại LYLY Store</h3>
    <VRow style="gap: 10px" class="container">
      <div
        v-for="item in productList" :key="item.id"
      >
        <div class="product-content hover-card" @click="handleToProduct(item)">

          <div class="product-img">
            <VImg :src="item.image_url"
                  cover
                  :alt="item.id"
            />
            <span v-if="item.quantity == 0" class="sold-out">Bán hết</span>
          </div>
          <div class="product-desc">
            <span class="product-name clamp-text">
              {{ item.name }}
            </span>
            <div class="product-rating">
              <div style="display: flex; align-items: stretch">
                <VRating :model-value="item.avg_rating" size="18" icon="emojione:star"/>
              </div>
              <span>
                 Đã bán {{ item.total_sold }}
              </span>
            </div>
            <span class="product-price">
              {{ formatPrice(item.price) }}
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
  props: {
    title: '',
    productList: []
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

    handleToProduct(val) {
      this.$router.push({
        name: 'productDetail',
        query: { id: val.id },
        params: { title: val.name },

      })
    },
  },
}
</script>

<style lang="scss" scoped>

@media (max-width: 600px) {
  .product-content {
    height: 250px !important;
    width: 182px !important;;
    border-radius: 6px !important;;
    background-color: #fff;

    .product-img {
      padding: 6px 8px;
      width: 100%;
      height: 150px !important;;
      border-radius: 6px !important;;
      position: relative;

      img {
        overflow: hidden;
        object-fit: cover;
        width: 100%;
        border-radius: 8px;
        height: 100%;
      }
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container {
    max-width: 1200px;
    width: 100%;
    row-gap: 1rem;
    margin: 0;

    .product-content {
      margin-top: 1rem;
      height: 280px;
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
          position: relative;
          display: inline-block;
          word-wrap: break-word;
          overflow: hidden;
          max-height: 2.4em; /* (Number of lines you want visible) * (line-height) */
          line-height: 1.2em;
          color: black;
          font-size: 13px;

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
