<template>
  <div class="searh-container">
    <div class="search-optional">
      <div style="text-align: center;padding: 12px 3px">
        <h3>
          Tìm kiếm theo
        </h3></div>
      <v-expansion-panels v-model="panel">
        <v-expansion-panel
          value="category"
          title="Danh mục"
        >
          <v-expansion-panel-text>
            <VCheckbox style="padding: 6px 2px" v-for="item in cateList"
                       :value="item.id"
            >
              <template v-slot:label :key="item.id">
                <div style="display: flex; align-items: center">
                  <VAvatar :image="item.image_url"/>
                  <span style="font-size: 14px;" class="ml-2 clamp-text-1">{{ item.name }}</span>
                </div>
              </template>
            </VCheckbox>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          value="rating"
          title="Đánh giá"
        >
          <v-expansion-panel-text>
            <VRadioGroup>
              <div style="display: flex; align-items: center; font-size: 13px" v-for="i in 5">
                <VRadio color="primary" :value="i">
                  <template v-slot:label>
                    <VRating disabled size="small" :model-value="i" length="5"/>
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
            <VRadioGroup>
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
      <ProductList title="Sản phẩm liên quan đến"/>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/productList.vue"
import { getCategory } from "@/api/category"

export default {
  name: "SearchProduct",
  components: { ProductList },
  created() {
    this.getCategoryData()
  },
  data() {
    return {
      panel: ['price', 'rating', 'category'],
      filterPrice: [{
        title: 'Dưới 99k',
        value: [0, 99000],
      },
        {
          title: 'Khoảng 100k - 500k',
          value: [100000, 500000],
        },
        {
          title: 'Trên 500k',
          value: [500000],
        },
      ],
      cateList: [],
    }

  },
  methods: {
    getCategoryData() {
      getCategory().then(res => {
        this.cateList = res.data
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
