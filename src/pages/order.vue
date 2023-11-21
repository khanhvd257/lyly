<template>
  <div>
    <h3 class="header-text">Danh sách đơn hàng</h3>
    <v-tabs
      class="sticky-top"
      fixed-tabs
      bg-color="indigo-darken-2"
      @update:modelValue="handleFilter"
    >
      <v-tab value="" prepend-icon="ri:order-play-fill">
        Tất cả đơn hàng
      </v-tab>
      <v-tab value="pending" prepend-icon="material-symbols:pending-actions">
        Chờ xác nhận
      </v-tab>
      <v-tab value="confirmed" prepend-icon="la:shipping-fast">
        Đang vận chuyển
      </v-tab>
      <v-tab value="done" prepend-icon="ic:sharp-done-all">
        Hoàn thành
      </v-tab>
      <v-tab value="cancel" prepend-icon="game-icons:cancel">
        Đã hủy
      </v-tab>
    </v-tabs>
    <div class="order-contain">
      <VCard class="order-item" v-for="order in orderArr">
        <div class="order-header">
          <div>
            <span>Thời gian đặt hàng: </span>
            <span>{{ formatDate(order.order_date) }}</span>
          </div>
          <div class="order-status">
            <span>Trạng thái đơn hàng: </span>
            <VChip v-if="order.status == 'Pending'" color="warning">
              Chờ xác nhận
            </VChip>
            <VChip v-if="order.status == 'Confirmed'" color="primary">
              Đang vận chuyển
            </VChip>
            <VChip v-if="order.status == 'Cancel'" color="error">
              Đã hủy
            </VChip>
            <VChip v-if="order.status == 'Done'" color="success">
              Hoàn thành
            </VChip>
          </div>
        </div>
        <VDivider/>
        <div v-for="(item,index) in order.order_details" :key="index" class="order-body">
          <div class="item-img">
            <img :src="item.product.image_url" alt="">
          </div>
          <div class="item-content">
            <router-link :to="`/product?id=${item.product.id}`">
              <span class="cursor name clamp-text">{{ item.product.name }}</span>
            </router-link>
            <div class="quantity">
              <span>Đơn giá:
                <strong>{{ formatPrice(item.product.price) }}</strong>
              </span>
              <span class=""> | Số lượng: {{ item.quantity }}</span>
              <div class="flow-price">
                Thành tiền:
                <span>{{ formatPrice(item.price) }}</span>
                <VBtn class="ml-1" density="compact" variant="outlined" @click="handleRating(item)"
                      v-if="order.status == 'Done' && item.isRating ==0"
                >Đánh giá
                </VBtn>
                <VChip v-if="order.status == 'Done' && item.isRating ==1" variant="elevated" color="success"
                >
                  Đã đánh giá
                </VChip>
              </div>

            </div>
          </div>
        </div>
        <v-divider style="margin: 1rem 0"/>
        <div class="order-footer">
          <div class="flow-price">
            Tổng tiền thanh toán:
            <span>{{ formatPrice(order.total_price) }}</span>
          </div>
          <VBtn style="margin: 6px 2px" @click="handleCancelOrder(order.id)" v-if="order.status == 'Pending'"
                variant="outlined"
          >Hủy đơn hàng
          </VBtn>
          <VBtn color="success" style="margin: 6px 2px" @click="handleDoneOrder(order.id)"
                v-if="order.status == 'Confirmed'"
                variant="outlined"
          >Hoàn thành đơn hàng
          </VBtn>
        </div>
      </VCard>
    </div>
    <v-dialog
      transition="dialog-top-transition"
      width="500"
      v-model="dialog"
      persistent
    >
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar
            color="primary"
            title="Đánh giá sản phẩm"
          ></v-toolbar>
          <v-card-text>
            <div class="review-container">
              <div class="content">
                <img class="review-img" :src="selectedRating.product.image_url" alt="">
                <div style="display: flex; flex-direction: column; font-size: 14px">
                  <span class="review-name">{{ selectedRating.product.name }}</span>
                  <span class="quantity">Số lượng: {{ selectedRating.quantity }}</span>
                  <span class="quantity">Giá: {{ formatPrice(selectedRating.price) }}</span>
                </div>
              </div>
              <VTextarea counter="255" placeholder="Nội dung đánh giá" v-model="formRating.comment"/>
              <h5>Đánh giá sản phẩm</h5>
              <VRating v-model="formRating.rating"/>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end layout-footer-sticky">
            <v-btn
              variant="text"
              @click="handleSubmit"
            >Đánh giá
            </v-btn>
            <v-btn
              variant="text"
              @click="isActive.value = false"
            >Hủy
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { cancelOrder, doneOrder, getAllOrder } from "@/api/order"
import { createReview } from "@/api/rating"

export default {
  name: "order",
  components: {},
  created() {
    this.getDataOrder()
  },
  data() {
    return {
      dialog: false,
      searchOrder: {
        status: '',
      },
      formRating: {
        product_id: '',
        rating: 5,
        comment: '',
        image_url: '',
      },
      selectedRating: {},
      order: {
        image: 'https://inchi.vn/data/thumbnails/qua-tang/qua-tang-gia-dinh-ban-be/coc-in-ten-va-ngay-thang-0.jpg',
        name: 'Kem HADALABO',
        unitPrice: '2.000.000',
        flowPrice: '20.000.000',
        num: 12,
        status: 'Pending',
        created_ad: '12h30 12 03 2023',
      },
      orderArr: [],
    }
  },
  methods: {
    getDataOrder() {
      getAllOrder(this.searchOrder).then(res => {
        this.orderArr = res.data
      })
    },
    handleSubmit() {
      createReview(this.formRating).then(res => {
        this.$moshaToast(res.message,
          {
            type: 'success',
            transition: 'slide',
            hideProgressBar: 'true',
          })
        this.dialog = false
        this.getDataOrder()
      })
    },

    handleRating(val) {
      this.formRating = {
        product_id: val.product.id,
        order_id: val.id,
        rating: 5,
        comment: '',
        image_url: '',
      }
      this.dialog = true
      this.selectedRating = val
    },
    handleFilter(status) {
      this.searchOrder.status = status
      this.getDataOrder()
    },
    handleCancelOrder(id) {
      cancelOrder(id).then(res => {
        this.getDataOrder()
        this.$moshaToast('Hủy thành công',
          {
            type: 'success',
            transition: 'slide',
            hideProgressBar: 'true',
            timeOut: 2000,
          })
      })
    },
    handleDoneOrder(id) {
      doneOrder(id).then(res => {
        this.getDataOrder()
        this.$moshaToast('Hoàn thành đơn hàng vui lòng đánh giá nhận thưởng',
          {
            type: 'success',
            transition: 'slide',
            hideProgressBar: 'true',
            timeOut: 2000,
          })
      }).catch(err => {
        this.$moshaToast(err.response.data.messages,
          {
            type: 'warning',
            transition: 'slide',
            hideProgressBar: 'true',
            timeOut: 2000,
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>

@media (max-width: 600px) {
  .sticky-top {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 60px;
    z-index: 1000;
    background-color: white;
  }
  .order-header {
    font-size: 12px !important;

    .order-status {
      text-align: end !important;
    }
  }
  .item-content {
    .name {
      font-size: 14px !important;

    }

    .quantity {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
}

.order-contain {
  flex: 1;
  display: flex;
  flex-direction: column;

  .filter-order {
    display: flex;
  }

  .order-item {
    padding: .5rem 1.2rem;
    margin: 16px 0;
    min-height: 200px;

    .order-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 0.5rem 0;
    }

    .order-body {
      display: flex;
      margin-top: 1rem;

      .item-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 1rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }

      .item-content {
        flex: 1;

        .name {
          color: black;
          font-size: 16px;
        }

        .quantity {
          margin-top: .2rem;
          font-size: 14px;
        }

        .flow-price {
          float: right;

          span {
            font-size: 14px;
          }
        }
      }
    }

    .order-footer {
      .flow-price {
        font-size: 16px;
        font-weight: bold;
        color: #CE5A67;

      }

      float: right;
      text-align: end;
    }
  }
}

.review-container {
  display: flex;
  flex-direction: column;

  .content {
    display: flex;

    .review-img {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
