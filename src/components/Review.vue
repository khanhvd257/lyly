<template>
  <div class="review-container">
    <h3 class="header-text">Lượt đánh giá gần đây</h3>
    <swiper
      class="review swiper"
      grab-cursor
      :slides-per-view="3"
      :spaceBetween="30"
      :autoplay="{
        delay:3000,
      }"
      :modules="modules"
    >
      <swiper-slide class="swiper-slide" v-for="item in 16">
        <div class="review-wrap">
          <div class="review-left">
            <VAvatar size="45"
                     image="https://cdnphoto.dantri.com.vn/eDFk4WWZ0w4M-LSsE51GL5DD908=/thumb_w/1155/2021/12/11/nu-sinh-ngoai-thuong-dep-tua-nang-mai-chia-se-ve-nghe-nguoi-mau-anh-1-1639186701886.jpeg"
            />
            <div style="display: flex; align-items: center; margin-right: -2px">
              <strong style="font-size: 15px">5.0</strong>
              <VIcon size="16" icon="emojione:star"/>
            </div>
          </div>
          <div class="review-content">
            <div class="title">
              <span>Tên khách</span>
              <span>19:00 22/01/2023</span>

            </div>
            <div class="body">
              Sản phẩm dùng tốt Sản phẩm dùng tốt Sản phẩm dùng tốt Sản phẩm dùng tốt
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: "Review",
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },
}
</script>

<style lang="scss" scoped>
.review-container {
  margin: 16px 0;
  .review {
    padding: 12px 16px;
    margin: 10px auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;

    .review-wrap {
      border-radius: 6px;
      padding: 6px 16px;
      width: 320px;
      height: 140px;
      display: flex;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

      .review-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .review-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 3%;

        .title {
          display: flex;
          flex-direction: column;
          font-size: 13px;

          span:first-child {
            font-weight: bold;
            color: black;
          }

          span:last-child {
          }
        }

        .body {
          flex: 1;
          font-size: 14px;
          color: #1F1717;
        }
      }
    }
  }


}
</style>
