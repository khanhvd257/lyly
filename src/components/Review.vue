<template>
  <div class="review-container">
    <h3 class="header-text">Lượt đánh giá gần đây</h3>
    <swiper
      class="review swiper"
      grab-cursor
      :slides-per-view="numReview"
      :spaceBetween="100"
      :autoplay="{
        delay:3000,
      }"
      :modules="modules"
      v-if="reviews.length"
    >
      <swiper-slide class="swiper-slide" v-for="item in reviews">
        <div class="review-wrap">
          <div class="review-left">
            <VAvatar size="45"
                     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUE7jXHro7BdwC8kOvXnqQ7m1SwUP6MH6iK_ZLmKKjiG8tkhq7q_tytzMTXBtGsSRp0Y&usqp=CAU"
            />
            <div style="display: flex; align-items: center; margin-right: -2px">
              <strong style="font-size: 15px">{{ item.rating }}</strong>
              <VIcon size="16" icon="emojione:star"/>
            </div>
          </div>
          <div class="review-content">
            <div class="title">
              <span>{{ item.username }}</span>
              <span>{{ formatDate(item.created_at) }}</span>

            </div>
            <div class="body">
              {{ item.comment }}
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <strong style="text-align: center" v-else>CHƯA CÓ ĐÁNH GIÁ CHO SẢN PHẨM</strong>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: "Review",
  props: {
    reviewArr: [],
  },
  components: {
    Swiper, SwiperSlide,
  },
  computed: {
    reviews() {
      return this.reviewArr
    },
  },
  created() {
    window.addEventListener('resize', this.checkWindowWidth)
  },
  data() {
    return {
      numReview: 4,
      modules: [Autoplay, Pagination, Navigation],
    }
  },
  methods:{
    checkWindowWidth() {
      let windowWidth = window.innerWidth
      if (windowWidth <= 600) {
        this.numReview = 1
      } else {
        this.numReview = 4
      }
    },
  }
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
      width: 260px;
      height: 120px;
      display: flex;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

      .review-left {
        display: flex;
        flex-direction: column;
        align-items: center;
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
