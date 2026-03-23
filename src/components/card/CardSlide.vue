<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const emit = defineEmits(["update:index"]);

const props = defineProps<{
  cards: any[];
}>();

const onSlideChange = (swiper: any) => {
  emit("update:index", swiper.activeIndex);
};

const formatPrice = (val: number) => new Intl.NumberFormat("ko-KR").format(val);
</script>

<template>
  <section class="total-spending">
    <swiper
      :slides-per-view="1.2"
      :centered-slides="false"
      :slides-offset-before="24"
      :slides-offset-after="24"
      :space-between="12"
      class="pay-swiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <div class="pay-card" :style="{ backgroundColor: card.color }">
          <span class="label">{{ card.label }}</span>
          <div class="amount-area">
            <span class="currency-symbol">₩</span>
            <span class="unit">
              <b class="amount">{{ formatPrice(card.amount) }}</b
              >원
            </span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
/* 기존 스타일은 그대로 유지하시면 됩니다! */
.total-spending {
  width: 100%;
  overflow: hidden;

  .pay-swiper {
    overflow: visible;
    width: 100%;
  }

  .pay-card {
    padding: 2.4rem;
    min-height: 17rem;
    border-radius: 1.6rem; // 둥글게 깎는 거 잊지 마세요!
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    color: #fff; // 글자색 흰색으로!
    transition: all 0.3s ease;

    .label {
      font-size: 1.6rem;
      font-weight: 500;
      opacity: 0.8;
    }

    .amount-area {
      display: flex;
      align-items: baseline;
      gap: 0.4rem;

      .currency-symbol {
        font-size: 1.8rem;
      }
      .amount {
        font-size: 2.6rem;
        font-weight: 800;
      }
      .unit {
        font-size: 1.6rem;
      }
    }
  }

  :deep(.swiper-slide:not(.swiper-slide-active)) {
    .pay-card {
      opacity: 0.4;
      transform: scale(0.9); // 옆 카드는 살짝 작게 만드는 게 트렌드!
    }
  }
}
</style>
