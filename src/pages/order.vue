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
      <VCard class="order-item" v-for="n in 6">
        <div class="order-header">
          <div>
            <span>Thời gian đặt hàng: </span>
            <span>{{ order.created_ad }}</span>
          </div>
          <div>
            <span>Trạng thái đơn hàng</span>
            <VChip color="success">
              Hoàn thành
            </VChip>
          </div>
        </div>
        <VDivider/>
        <div class="order-body">
          <div class="item-img">
            <img :src="order.image" alt="">
          </div>
          <div class="item-content">
            <span class="name">{{ order.name }}</span>
            <div class="quantity">
              <span>Đơn giá:
                <strong>{{ order.unitPrice }}</strong>
              </span>
              <span class=""> | Số lượng: {{ order.num }}</span>
            </div>
            <div class="flow-price">
              Thành tiền:
              <span>{{ order.flowPrice }}</span>
            </div>
          </div>
        </div>
        <div class="order-footer">
          <VBtn variant="outlined">Hủy đơn hàng</VBtn>
        </div>
      </VCard>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
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
    }
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
    height: 200px;

    .order-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
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
            color: #CE5A67;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }

    .order-footer {
      float: right;
    }
  }
}
</style>
