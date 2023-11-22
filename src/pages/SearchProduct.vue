<template>
  <div class="searh-container">
    <div class="search-optional hidden-xs">

      <div style="text-align: center;padding: 12px 3px">
        <h3>
          Tìm kiếm theo
        </h3></div>
      <v-expansion-panels v-model="panel">
        <v-expansion-panel
          value="category"
          title="Danh mục"
          v-if="!categoryId"
        >
          <v-expansion-panel-text>
            <VRadioGroup @change="handleFilter" v-model="searchForm.category_id">
              <VRadio style="padding: 6px 2px" v-for="item in cateList"
                      :value="item.id"
              >
                <template v-slot:label :key="item.id">
                  <div style="display: flex; align-items: center">
                    <VAvatar :image="item.image_url"/>
                    <span style="font-size: 14px;" class="ml-2 clamp-text-1">{{ item.name }}</span>
                  </div>
                </template>
              </VRadio>
            </VRadioGroup>

          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          value="rating"
          title="Đánh giá"
        >
          <v-expansion-panel-text>
            <VRadioGroup @change="handleFilter" v-model="searchForm.rating">
              <div style="display: flex; align-items: center; font-size: 13px" v-for="i in 5">
                <VRadio color="primary" :value="i">
                  <template v-slot:label>
                    <VRating disabled size="small" :model-value="i" length="5"/>
                    <span style="font-size: 12px">Trở lên</span>
                  </template>
                </VRadio>
              </div>
            </VRadioGroup>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          value="price"
          title="Giá cả"
        >
          <v-expansion-panel-text>
            <VRadioGroup @change="handleFilter" v-model="searchForm.price">
              <div style="display: flex;flex-direction: column; font-size: 13px">
                <VRadio v-for="item in filterPrice" :key="item" color="primary"
                        :value="item.value"
                >
                  <template v-slot:label>
                    <div>
                      {{ item.title }}
                    </div>
                  </template>
                </VRadio>
              </div>
            </VRadioGroup>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="search-content">
      <ProductList v-if="productList.length" :title="titleSearch" :product-list="productList"/>
      <h2 style="margin-top: 16px;width: 100%;background-color: white;" v-else
      >Không thấy sản phẩm liên quan</h2>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/productList.vue"
import { getCategory } from "@/api/category"
import { getAllProduct } from "@/api/product"

export default {
  name: "SearchProduct",
  components: { ProductList },
  mounted() {
    this.getCategoryData()
    this.handleSearchProduct()
  },
  computed: {
    searchKey() {
      return this.$route.query.search_key
    },
    categoryId() {
      return this.$route.query.category_id
    },
  },
  watch: {
    searchKey: function (val) {
      this.handleSearchProduct()
    },
    categoryId: function (val) {
      this.handleSearchProduct()
    },
  },
  data() {
    return {
      panel: ['price', 'rating', 'category'],
      searchForm: {
        category_id: this.$route.query.category_id ? this.$route.query.category_id : '',
        search_key: this.$route.query.search_key ? this.$route.query.search_key : '',
        price: '',
        rating: 0,
      },
      filterPrice: [{
        title: 'Dưới 99k',
        value: 99000,
      },
        {
          title: 'Dưới 500k',
          value: 500000,
        },
        {
          title: 'Dưới 1 triệu',
          value: 1000000,
        },
      ],
      cateList: [],
      productList: [],
      titleSearch: 'Các sản phẩm liên quan',
    }

  },
  methods: {
    getCategoryData() {
      getCategory().then(res => {
        this.cateList = res.data
      })
    },
    handleSearchProduct() {
      if (this.$route.query.search_key) {
        getAllProduct(
          { search_key: this.$route.query.search_key })
          .then(res => {
            this.productList = res.data
            this.titleSearch = res.message
          })
      }
      if (this.$route.query.category_id) {
        getAllProduct(
          { category_id: this.$route.query.category_id })
          .then(res => {
            this.productList = res.data
            this.titleSearch = res.message
          })
      }
    },
    handleFilter() {
      getAllProduct(this.searchForm).then(res => {
        this.productList = res.data
        this.titleSearch = res.message
      })
    },

  },

}
</script>

<style lang="scss" scoped>
.searh-container {
  display: flex;

  .search-optional {
    background: white;
    min-width: 280px;
    max-width: 280px;
    position: sticky;

  }

  .search-content {
    margin-left: 20px;
  }
}
</style>
