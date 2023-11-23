<template>
  <template v-if="statusOrder===0">
    <div style="background-color: white; padding: .2rem 1.6rem; border-radius: 12px">
      <VBreadcrumbs :items="cateArr">
        <template v-slot:prepend>
          <VIcon size="small" icon="ic:baseline-home"/>
        </template>
      </VBreadcrumbs>
      <div class="product-container">
        <div class="product-img">
          <inner-image-zoom width="350" height="350" style="border-radius: 8px;"
                            :zoomSrc="product.image_url" :srcSet="product.image_url"
          />
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="flex mt-1">-->
          <!--            <VIcon icon="mdi-heart"/>-->
          <!--            Thêm vào yêu thích-->
          <!--          </div>-->
        </div>
        <div class="product-content">
          <span class="name">{{ product.name }}</span>
          <div class="review">
            <div style="display: flex;align-items: center;">
              <strong>{{ parseFloat(product.avg_rating).toFixed(1) }}</strong>
              <VRating disabled half-increments :model-value="product.avg_rating" size="small"/>
            </div>
            <span>&nbsp; | {{ product.total_sold }} sản phẩm đã bán</span>
          </div>
          <span v-if="product.quantity == 0" class="sold-out-detail">Bán hết</span>
          <div class="product-price">
            Giá: <span>{{ formatPrice(product.price) }}</span>
          </div>
          <div class="pro-num">
            Số lượng:
            <VTextField :disabled="product.quantity == 0"
                        density="compact" type="number" v-model="formOrder.quantity"
                        :rules="[rules.required, rules.checkNum]" min="1" :max="product.quantity"
            />
            {{ product.quantity }} sản phẩm có sẵn
          </div>
          <div class="action">
            <VBtn :disabled="error" v-if="product.quantity !=0" color="success" @click="payProduct">Đặt ngay</VBtn>
            <VBtn :disabled="error" v-if="product.quantity !=0" @click="handleAddToCart" color="warning">Thêm giỏ hàng
            </VBtn>
          </div>

        </div>
        <div style="align-self: center" class="QR-mobile hidden-xs">
          <QRcode :value="urlPath"/>
        </div>
      </div>
      <div class="mt-2">
        <Review :review-arr="reviewList"/>
      </div>
      <div class="product-desc">
        <h3 class="header-text">Thông tin sản phẩm</h3>
        <div v-html="product.description"/>
      </div>
    </div>
  </template>
  <template v-if="statusOrder===1">
    <PreOrder :order="orderArr"/>
  </template>
</template>

<script>
import Review from "@/components/Review.vue"
import { getDetailProduct } from "@/api/product"
import PreOrder from "@/pages/order/preOrder.vue"
import { addToCart } from "@/api/order"
import { getReviewProduct } from "@/api/rating"
import QRcode from "@/components/QRcode.vue"
import router from "@/router"
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import InnerImageZoom from 'vue-inner-image-zoom'


export default {
  name: "product_detail",
  components: { PreOrder, Review, QRcode, InnerImageZoom },
  created() {
    this.getProduct(this.$route.query.id)
    this.getDataReview()
    console.log(this.$router.currentRoute._value.fullPath)
  },
  computed: {
    error() {
      return this.product.quantity <= 0
    },
    urlPath() {
      return new URL(location.href)
    },
  },
  data() {
    return {
      error: false,
      rules: {
        required: value => {
          if (!value) {
            this.error = true
            return 'Yêu cầu nhập số lượng mua'
          }
        },
        counter: value => value.length > 0 && value || 'Lớn hơn 0',
        checkNum: value => {
          if (!value || isNaN(value) || value <= 0) {
            this.error = true
            return 'Số lượng mua lớn hơn 0 '
          }
          if (value > this.product.quantity) {
            this.error = true
            return 'Số lượng phải bé hơn ' + this.product.quantity
          }
          this.error = false
          return true
        },
      },
      reviewList: [],
      formOrder: {
        product_detail: {},
        quantity: 1,
        flowPrice: 0,
      },
      formCart: {
        product_id: '',
        quantity: 1,
      },
      orderArr: [],
      product: {
        image: 'https://inchi.vn/data/thumbnails/qua-tang/qua-tang-gia-dinh-ban-be/coc-in-ten-va-ngay-thang-0.jpg',
        name: '',
        price: '',
        rating: 5,
        description: '',
      },
      // 0 là trang chi tiết;
      // 1 là trang thanh toán;
      // 2 là hoàn thành
      statusOrder: 0,
      cateArr: [],

    }
  },
  methods: {
    getDataReview() {
      getReviewProduct({ product_id: this.$route.query.id }).then(res => {
        this.reviewList = res.data
      })
    },
    getProduct(id) {
      getDetailProduct(id).then(res => {
        this.product = res.data
        this.cateArr = [
          { title: 'Trang chủ', href: '/' },
          {
            title: this.product.category.name,
            href: `search?category_id=${this.product.category.id}`,
          }
          , {
            title: this.product.name,

          },
        ]
      })
    },
    checkLogin() {
      return localStorage.getItem('access_token')
    },
    payProduct() {
      if (this.checkLogin()) {
        this.statusOrder = 1
        this.formOrder.flowPrice = this.product.price * this.formOrder.quantity
        this.formOrder.product_detail = this.product
        this.orderArr.push(this.formOrder)
      } else {
        localStorage.setItem('redirectPath', this.$router.currentRoute._value.fullPath)
        console.log(this.$router.currentRoute.value.path)
        this.$moshaToast('Bạn chưa đăng nhập',
          {
            type: 'warning',
            transition: 'slide',
            timeout: 3000,
          })
        router.push("/login")

      }
    },
    handleAddToCart() {
      if (this.checkLogin()) {
        this.formCart.product_id = this.product.id
        this.formCart.quantity = this.formOrder.quantity
        addToCart(this.formCart).then((res) => {
          this.$moshaToast('Thêm giỏ hàng thành công',
            {
              type: 'success',
              transition: 'slide',
              hideProgressBar: 'true',
            })

        }).catch(e => {
          this.$moshaToast('Lỗi xảy ra khi thêm',
            {
              type: 'warning',
              transition: 'slide',
              hideProgressBar: 'true',
            })
        })
      } else {
        localStorage.setItem('redirectPath', this.$router.currentRoute._value.fullPath)
        this.$moshaToast('Bạn chưa đăng nhập',
          {
            type: 'warning',
            transition: 'slide',
            timeout: 3000,
          })
        router.push("/login")
      }

    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .product-container {
    flex-direction: column;

    .product-img {
      margin-right: 0 !important;
    }
  }
  .product-content .name {
    font-size: 16px !important;
  }
}

.product-container {
  display: flex;
  margin-bottom: 3rem;

  .product-img {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    .img-wrap {
      width: 350px;
      height: 350px;

      //.zoom-img {
      //  width: 100%;
      //  height: 100%;
      //  object-fit: cover;
      //
      //}
    }

  }

  .product-content {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    position: relative;
    flex: 1;
    gap: .6rem;

    .name {
      font-size: 24px;
      font-weight: bold;
      color: #000;
    }

    .review {
      display: flex;
      align-items: center;
    }

    .product-price {
      font-size: 20px;
      color: #CE5A67;
      font-weight: bold;
    }

    .pro-num {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      max-width: 500px;
    }

    .action {
      display: flex;
      gap: 1rem;
    }
  }
}

.product-desc {
  margin-top: 1rem;
}
</style>
