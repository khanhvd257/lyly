<template>
  <div class="banner">
    <div class="banner-right">
      <v-carousel hide-delimiter-background
                  show-arrows="hover"
                  cycle height="300" interval="4000"
      >
        <v-carousel-item v-for="item in bannerList" :key="item">
          <img width="890" height="300" class="baner-img" slot="sources"
               :src="`./src/assets/banner/${item}.png`"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="banner-left">
      <img
        src="https://st3.depositphotos.com/1306638/12575/v/450/depositphotos_125753420-stock-illustration-retro-bus-travel-banner.jpg"
      >
    </div>
  </div>
  <VRow>
    <VCol sm="12">
      <div class="category">
        <h3 class="header-text">Bạn muốn mua hàng gì?</h3>
        <swiper
          class="category-container swiper"
          grab-cursor
          :slides-per-view="9"
          :spaceBetween="30"
          :modules="modules"

        >
          <swiper-slide class="swiper-slide" v-for="item in cateArr">
            <VCard variant="flat" class="content hover-card">
              <VAvatar size="60">
                <img class="category-img"
                     :src="item.image_url"
                     alt="item.image_url"
                >
              </VAvatar>
              <span>{{ item.name }}</span>
            </VCard>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </VCol>
  </VRow>
  <BestSell/>
  <FavoriteProduct/>
  <ThreeBanner/>
  <Review/>
  <ProductList/>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Review from "@/components/Review.vue"
import FavoriteProduct from "@/components/Product.vue"
import ProductList from "@/components/productList.vue"
import ThreeBanner from "@/components/ThreeBanner.vue"
import HotProduct from "@/components/HotProduct.vue"
import { getAllCategory } from "@/api/product"
import BestSell from "@/pages/product/bestSell.vue"

export default {
  name: "home",
  components: {
    BestSell,
    HotProduct,
    ThreeBanner,
    ProductList,
    FavoriteProduct,
    Review,
    Swiper, SwiperSlide,
  },
  mounted() {
    // window.addEventListener('resize', this.checkWindowWidth)
  },
  created() {
    this.getDataCate()
  },
  data() {

    return {
      cateArr: [],
      bannerList: [
        'banner1', 'banner2', 'banner3',
      ],
      modules: [Autoplay, Pagination, Navigation],
      imgList:
        ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKL5w-51d5c3l5X1aemJTF_b_b1e6OQ5XZzZrNhfIMw0tRcjKsglsQgXTYtV-kOO0WIo&usqp=CAU'],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],

    }
  }, methods: {
    getDataCate() {
      getAllCategory().then(res => {
        this.cateArr = res.data
        console.log(res)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.banner {
  height: 300px;
  display: flex;
  gap: 10px;

  .banner-right {
    width: 900px;
    border-radius: 6px;
    overflow: hidden;

  }

  .banner-left {
    width: 300px;

    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.category {
  display: flex;
  flex-direction: column;
  padding: 10px 0;


  .category-container {
    width: 1200px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    min-height: 100px;
    background-color: #fff;
  }

  .content {
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    margin: 10px 6px;
    align-items: center;

    .category-img {
      height: 100px;
      width: 100px;
      object-fit: contain;
      border-radius: 6px;
    }

    span {
      margin-top: 8px;
      font-size: 12px;
      text-align: center;
    }
  }
}

</style>
