<template>
  <div>
    <h3 class="header-text">Danh sách đơn hàng</h3>
    <v-tabs
      fixed-tabs
      bg-color="indigo-darken-2"
    >
      <v-tab prepend-icon="material-symbols:pending-actions">
        Chờ xác nhận
      </v-tab>
      <v-tab prepend-icon="fluent-mdl2:waitlist-confirm">
        Đã xác nhận
      </v-tab>
      <v-tab prepend-icon="ic:sharp-done-all">
        Hoàn thành
      </v-tab>
      <v-tab prepend-icon="game-icons:cancel">
        Đã hủy
      </v-tab>
    </v-tabs>
    <div class="order-contain">
      <VCard class="order-item" v-for="order in orderArr">
        <div class="order-header">
          <div>
            <span>Thời gian đặt hàng: </span>
            <span>{{ formatDateTime(order.order_date) }}</span>
          </div>
          <div>
            <span>Trạng thái đơn hàng: </span>
            <VChip v-if="order.status == 'Pending'" color="primary">
              Chờ xác nhận
            </VChip>
            <VChip v-if="order.status == 'Confirmed'" color="green">
              Đã xác nhận
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
            <span class="name clamp-text">{{ item.product.name }}</span>
            <div class="quantity">
              <span>Đơn giá:
                <strong>{{ formatPrice(item.product.price) }}</strong>
              </span>
              <span class=""> | Số lượng: {{ item.quantity }}</span>
              <div class="flow-price">
                Thành tiền:
                <span>{{ formatPrice(item.price) }}</span>
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
          <VBtn style="margin: 6px 2px" v-if="order.status == 'Pending'" variant="outlined">Hủy đơn hàng</VBtn>
        </div>
      </VCard>
    </div>
  </div>
</template>

<script>
import { getAllOrder } from "@/api/order"

export default {
  name: "order",
  created() {
    this.getDataOrder()
  },
  data() {
    return {
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
      getAllOrder().then(res => {
        this.orderArr = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
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
</style>
