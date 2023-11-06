<template>
  <div style="background-color: white; padding: .2rem 1.6rem; border-radius: 12px">
    <div class="product-container">
      <div class="product-img">
        <img :src="product.image" alt="">
        <div class="flex mt-1">
          <VIcon icon="mdi-heart"/>
          Thêm vào yêu thích
        </div>
      </div>
      <div class="product-content">
        <span class="name">{{ product.name }}</span>
        <div class="review">
          <div style="display: flex;align-items: center;">
            <strong>5.0</strong>
            <VRating model-value="5" length="5" size="small"/>
          </div>
          <span>&nbsp; | 5 lượt đặt</span>
        </div>

        <div class="product-price">
          Giá: <span>{{ product.price }}</span>
        </div>
        <div class="pro-num">
          Số lượng:
          <VTextField density="compact" label=""/>
          2 sản phẩm có sẵn
        </div>
        <div class="action">
          <VBtn color="success">Đặt ngay</VBtn>
          <VBtn color="warning">Thêm giỏ hàng</VBtn>
        </div>

      </div>
    </div>
    <div class="mt-2">
      <Review/>
    </div>
    <div class="product-desc">
      <div v-html="product.description"></div>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review.vue"

export default {
  name: "productDetail",
  components: { Review },
  data() {
    return {
      product: {
        image: 'https://inchi.vn/data/thumbnails/qua-tang/qua-tang-gia-dinh-ban-be/coc-in-ten-va-ngay-thang-0.jpg',
        name: 'Cốc xinh đẹp tặng cho người ngheo',
        price: '120.000',
        num: 12,
        rating: 5,
        description: '<div data-v-a50dd41e="" class="item-intro-img"><div data-v-a50dd41e="" class="item-intro"><p class="irIKAp">THÔNG TIN SẢN PHẨM:</p>\n' +
          '<p class="irIKAp">&nbsp;</p>\n' +
          '<p class="irIKAp">Mặt nạ ngủ môi Laneige Lip Sleeping Mask 20g nhẹ nhàng lấy đi tế bào da chết và làm cho đôi môi trở nên mềm mại và đàn hồi hơn trong lúc ngủ.</p>\n' +
          '<p class="irIKAp">• Thành phần &amp; Công dụng:</p>\n' +
          '<p class="irIKAp">- Mặt nạ dưỡng môi Laneige Berry Mix Complex Chiết xuất quả mọng giàu Vitamin C và chắc chống oxi hóa sẽ làm cho môi mềm và mượt mà hơn tránh tình trạng khô môi và nhiều da chết.</p>\n' +
          '<p class="irIKAp">&nbsp;</p>\n' +
          '<p class="irIKAp">&nbsp;</p>\n' +
          '<p class="irIKAp">- Moisture Wrap - công nghệ của mặt nạ dưỡng ẩm môi được cấp bằng sáng chế của Laneige với các thành phần hoạt tính như nước khoáng hydroxy, chiết xuất gốc thảo nguyên và độ ẩm trong sản phẩm được chiết xuất từ quả mận vùng Hunza, giúp môi hấp thụ các dưỡng chất suốt 8 tiếng trong lúc ngủ.</p>\n' +
          '<p class="irIKAp">- Mùi hương dễ chịu và ngọt ngào từ các loại quả mọng, sản phẩm chính của dòng mặt nạ môi dành cho môi Mặt nạ ngủ [quả bưởi]: bưởi và các loại quả họ cam chanh.</p>\n' +
          '<p class="irIKAp">- Mùi hương ngọt ngào và tươi mới của đường từ quả bưởi mask môi [Táo]: chanh, bưởi / táo xanh.</p>\n' +
          '<p class="irIKAp">- Mùi hương tươi mới từ những quả táo mới được thu hoạch. Mặt nạ ngủ [Vani]: mùi hương ngọt ngào như kem vani.</p>\n' +
          '<p class="irIKAp">- Mùi hương vani ngọt ngào như các loại kem bao bọc đôi môi, dưỡng ẩm môi trong lúc ngủ.</p>\n' +
          '<p class="irIKAp">• Khuyên dùng sản phẩm: Dành cho các cô nàng có đôi môi khô, thường xuyên nứt nẻ, nhiều tế bào chết do sử dụng son môi hằng ngày, muốn tìm sản phẩm dưỡng môi chính hãng.</p>\n' +
          '<p class="irIKAp">• Hướng dẫn sử dụng:</p>\n' +
          '<p class="irIKAp">- Sản phẩm mặt nạ môi Laneige có kèm cọ chuyên dụng.</p>\n' +
          '<p class="irIKAp">- Trước khi ngủ, hãy dùng thìa chuyên dụng thoa một lượng mặt nạ môi Laneige nhiều lên môi. Đánh tan các tế bào da chết cứng đầu và cung cấp nguồn độ ẩm dồi dào cho da qua cả đêm.</p>\n' +
          '<p class="irIKAp">- Sáng hôm sau, hãy nhẹ nhàng lau sạch bằng miếng bông gòn hoặc khăn giấy. Khiến cho môi trở nên mềm mượt và đàn hồi khi loại bỏ hết các tế bào da chết.</p>\n' +
          '<p class="irIKAp">• Hạn sử dụng: 3 năm kể từ ngày sản xuất (NXS in trên bao bì).</p>\n' +
          '<p class="irIKAp">&nbsp;</p>\n' +
          '<p class="irIKAp">VỀ LANEIGE:</p>\n' +
          '<p class="irIKAp">LANEIGE là thương hiệu mỹ phẩm trẻ trung, năng động và thời thượng dành cho mọi cô gái. Dẫn đầu về các công trình nghiên cứu dưỡng ẩm để tối đa hóa tiềm năng từ nước tạo nên công thức Water Recipe, dựa trên ý tưởng một làn da căng mọng được cung cấp đầy đủ nước là giải pháp cho nhiều vấn đề về da. Độ ẩm sâu giúp nuôi dưỡng làn da, tăng cường hàng rào bảo vệ da, thanh lọc và duy trì một làn da khoẻ mạnh, trong trẻo và rạng rỡ hơn.</p>\n' +
          '<p class="irIKAp">Với những sản phẩm dẫn đầu xu thế và đầy sáng tạo, LANEIGE đã mau chóng chiếm lĩnh trái tim của hàng triệu phụ nữ châu Á và thành công tại hơn 15 quốc gia trên toàn thế giới. Cuộc sống với những khoảnh khắc tỏa sáng rực rỡ cùng làn da khỏe mạnh, căng tràn độ ẩm là một khái niệm làm đẹp mới từ LANEIGE</p>\n' +
          '<p class="irIKAp">Bao bì thay đổi tùy đợt nhập hàng</p>\n' +
          '<p class="irIKAp">&nbsp;</p>\n' +
          '<p class="irIKAp">VỀ AMOREPACIFIC:</p>\n' +
          '<p class="irIKAp">Amorepacific là tập đoàn mỹ phẩm lớn nhất Hàn Quốc ra đời từ những năm 1945 cùng sứ mệnh đưa vẻ đẹp Châu Á ra thế giới với lý tưởng làm đẹp bắt nguồn từ các yếu tố thiên nhiên gắn kết chặt chẽ với con người. Với hơn 20 nhãn hàng chăm sóc sức khỏe, chăm sóc cá nhân và mỹ phẩm, Amorepacific đang đi đầu toàn cầu về xu hướng làm đẹp thông qua việc ra mắt các sản phẩm đẳng cấp thế giới trên cơ sở tiếp tục nghiên cứu và phát triển kết hợp các thành phần tự nhiên và công nghệ sinh học tiên tiến của châu Á, mang đến với người tiêu dùng trên khắp thế giới, trong đó có châu Á, Bắc Mỹ và châu Âu.</p></div></div>',

      },
    }
  },
}
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  margin: 2rem 0;

  .product-img {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    margin-right: 2rem;

    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-content {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
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
      max-width: 400px;
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
