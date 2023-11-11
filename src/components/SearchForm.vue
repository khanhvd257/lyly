<template>
  <div id="search-box">
    <div style="position:relative; flex: 1 1;">
      <swiper v-show="searchKey === ''"
              :autoplay="{
                  delay:3000,
              }"
              :direction="'vertical'"
              :modules="modules"
              class="hot-search"
      >
        <swiper-slide v-for="(item, index) in hotSearch" :key="index">
          {{ item }}
        </swiper-slide>
      </swiper>
      <input id="search-box-input" ref="search-input" type="text" @click="handleOpenSearchBox" v-model="searchKey"
             autocomplete="off" @keydown.enter=""
      />
    </div>
    <div class="search-btn" @click="">
      <VIcon icon="ep:search" style="font-size: 16px;"/>
      <span>Tìm kiếm</span>
    </div>
  </div>
</template>

<script>
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/vue"

export default {

  name: 'SearchForm',
  components:{
    Swiper, SwiperSlide,
  },

  data() {
    return {
      hotSearch: ['CLOTHING','AO CA SA ',' CONG CHUA BONG BONG'],
      searchKey: '',
      modules: [Autoplay, Pagination, Navigation],

    }
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
  margin:  0 auto;

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
</style>
