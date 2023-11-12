<template>
  <div id="search-box">
    <div @click="showRecommend = true" v-click-outside="{
                handler: handleClickOutSide,include}"
         style="position:relative; flex: 1 1;"
    >
      <swiper v-show="searchKey === ''"
              :autoplay="{
                  delay:3000,
              }"
              :direction="'vertical'"
              :modules="modules"
              class="hot-search"
      >
        <swiper-slide v-for="(item, index) in recommendation" :key="index">
          <span class="clamp-text-1">{{ item.name }}</span>
        </swiper-slide>
      </swiper>
      <input id="search-box-input" ref="search-input" type="text"
             v-model="searchKey"
             autocomplete="off" @keydown.enter=""
      />
    </div>
    <div class="search-btn" @click="handleSearch">
      <VIcon icon="ep:search" style="font-size: 16px;"/>
      <span>Tìm kiếm</span>
    </div>
  </div>
  <div class="recommence-container included" v-if="showRecommend">
    <h4 style="margin: 6px 0">Sản phẩm mới ra mắt</h4>
    <a :href="`/product?id=${item.id}`" v-for="item in recommendation"
       :key="item.id" style="color: black"
       class="recommence-item hover-card"
    >
      <img :src="item.image_url" width="60" height="60" src="" alt="">
      <div class="content">
        <span class="clamp-text-1">{{ item.name }}</span>
        <span class="price">{{ formatPrice(item.price) }}</span>
      </div>
    </a>
  </div>

</template>

<script>
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/vue"
import { getTop5Product } from "@/api/product"

export default {

  name: 'SearchForm',
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    return {
      showRecommend: false,
      recommendation: ['CLOTHING', 'AO CA SA ', ' CONG CHUA BONG BONG'],
      searchKey: '',
      modules: [Autoplay, Pagination, Navigation],

    }
  },
  created() {
    this.getDataSearch()
  },
  methods: {
    getDataSearch() {
      getTop5Product().then(res => {
        this.recommendation = res.data
      })
    },
    handleClickOutSide() {
      this.showRecommend = false
    },
    include() {
      return [document.querySelector('.included')]
    },
    handleSearch() {
      this.$router.push({
        name: 'search',
        query: { search_key: this.searchKey },
      })
    },

  },
}
</script>

<style scoped lang="scss">
$accent_color: #FF6C22;

#search-box {
  height: 46px;
  width: 90%;
  border-radius: 30px;
  background: #f0f0f0;
  border: 1px solid #f0f0f0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4px 0 20px;
  margin: 0 auto;

  &:hover, &:has(#search-box-input:focus) {
    background: #fff;
    border: 1px solid $accent_color;
  }

  #search-box-input {
    outline: none !important;
    border: none !important;
    background: transparent;
    width: 100%;
    position: relative;
    caret-color: $accent_color;
    z-index: 2;
  }

  .hot-search {
    color: #8a8a8a;
    overflow: hidden;
    position: absolute;
    width: 100%;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    top: 0;
  }

  .search-btn {
    height: calc(100% - 8px);
    background: $accent_color;
    border-radius: 100px;
    display: flex;
    padding: 0 12px;
    align-items: center;
    gap: 4px;
    color: #fff;
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .recommence-container {
    left: 2% !important;
  }
}

.recommence-container {
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  left: 10%;
  background-color: white;
  border-radius: 6px;
  padding: 6px 8px;
  top: 120%;
  width: 90%;
  max-width: 800px;

  .recommence-item {
    display: flex;
    margin-bottom: 8px;
    padding: 8px 12px;

    img {
      border-radius: 4px;
    }

    .content {
      margin-left: 1rem;

      .name {
      }

      .price {
        color: #CE5A67;
        font-size: 14px;
      }
    }

  }
}
</style>
