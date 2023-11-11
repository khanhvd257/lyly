<template>
  <div class="product">
    <h3 class="header-text">Sản phẩm được yêu thích nhất</h3>
    <VRow class="container" justify="space-between">
      <div
        v-for="item in productList" :key="item.id"
      >
        <div class="product-content hover-card" @click="handleToProduct(item)">

          <div class="product-img">
            <img :src="item.image_url"
                 alt=""
            >
            <div class="item-img-tag">
              <div class="tag-favorite">
                <span>Yêu thích</span>
              </div>
            </div>
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
  name: "FavoriteProduct",
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
      getProducts({ favorite: true }).then(res => {
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

.item-img-tag {
  position: absolute;
  left: 0;
  top: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  max-width: 70%;

  .tag-favorite {
    color: #fff;
    padding: 0 0.25rem;
    height: auto;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    border-top-right-radius: 0.125rem;
    border-bottom-right-radius: 0.125rem;
    background-color: #ed3f14;

    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: -4px;
      border-top: 4px solid #ed3f14;
      border-left: 7px solid transparent;
      filter: brightness(60%);
    }
  }
}

.product {
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container {
    max-width: 1200px;
    margin: 0;
    flex-wrap: nowrap;

    .product-content {
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
          font-size: 13px;
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
