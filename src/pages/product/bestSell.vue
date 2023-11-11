<template>
  <div class="product">
    <h3 class="header-text">Sản phẩm bán chạy</h3>
    <VRow class="container" justify="space-between">
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
                Đã bán <strong>{{ item.total_sold }}</strong>
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
import { getProducts } from "@/api/product"

export default {
  name: "bestSell",
  data() {
    return {
      productList: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getProducts({ bestSelling: true }).then(res => {
        this.productList = res.data
      })

    },
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


.product {
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container {
    max-width: 1200px;
    margin: 0;
    width: 100%;

    .product-content {
      margin-top: 2rem;
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
