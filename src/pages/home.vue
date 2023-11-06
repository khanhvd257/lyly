<template>
  <div class="banner">
    <div class="banner-right">
      <v-carousel hide-delimiter-background
                  show-arrows="hover"
                  cycle height="300" interval="4000"
      >
        <v-carousel-item>
          <img class="baner-img" slot="sources"
               src="https://previews.123rf.com/images/santi2014/santi20141708/santi2014170800002/83809998-travel-banner-concept-with-icons-design-on-blue-background.jpg"
               alt=""
          >
        </v-carousel-item>
        <v-carousel-item>
          <img class="baner-img" slot="sources"
               src="https://minio-api.micro-tech.com.vn/bono/51808fe475c04bd7b5edf47d010574c5.png"
               alt=""
          >
        </v-carousel-item>
        <v-carousel-item>
          <img class="baner-img" slot="sources"
               src="https://vietsensetravel.com/view/at_du-lich-thai-lan_f81ab4e88b900fe281233e69757ea478.jpg"
               alt=""
          >
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
          :slides-per-view="8"
          :spaceBetween="30"
          :modules="modules"

        >
          <swiper-slide class="swiper-slide" v-for="item in 16">
            <VCard variant="flat" class="content">
              <VAvatar size="60">
                <img class="category-img"
                     src="https://cdnphoto.dantri.com.vn/eDFk4WWZ0w4M-LSsE51GL5DD908=/thumb_w/1155/2021/12/11/nu-sinh-ngoai-thuong-dep-tua-nang-mai-chia-se-ve-nghe-nguoi-mau-anh-1-1639186701886.jpeg"
                     alt=""
                >
              </VAvatar>
              <span>Áo nữ</span>
            </VCard>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </VCol>
  </VRow>
  <HotProduct/>
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

export default {
  name: "home",
  components: {
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
  data() {

    return {
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
    // checkWindowWidth() {
    //   const windowWidth = window.innerWidth
    // },
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
    max-width: 1200px;
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

    .category-img {
      height: 100px;
      width: 100px;
      border-radius: 6px;
    }

    span {
      margin-left: 8px;
      color: black;
      font-size: 14px;
    }
  }
}

</style>
