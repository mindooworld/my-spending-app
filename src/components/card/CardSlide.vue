<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

interface CardItem {
  id: number;
  label: string;
  amount: number;
  color: string; // 카드 배경색
}

const props = defineProps<{
  cards: CardItem[]
}>();

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
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <div class="pay-card" :style="{ backgroundColor: card.color }">
          <span class="label">{{ card.label }}</span>
          <div class="amount-area">
            <span class="currency-symbol">₩</span>
            <span class="unit">
              <b class="amount">{{ formatPrice(card.amount) }}</b>원
            </span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
.total-spending {
  width: 100%;
  overflow: hidden;
  
  .pay-swiper {
    overflow: visible; // 옆 카드 빼꼼 보이게
    width: 100%;
  }

  .pay-card {
    padding: 2.4rem;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    .label {
      font-size: 1.4rem;
      opacity: 0.8;
      margin-bottom: 0.8rem;
    }

    .amount-area {
      display: flex;
      align-items: baseline;
      gap: 0.4rem;

      .currency-symbol { font-size: 1.8rem; }
      .amount { font-size: 2.6rem; font-weight: 800; }
      .unit { font-size: 1.6rem; }
    }
  }

  :deep(.swiper-slide:not(.swiper-slide-active)) {
    .pay-card {
      opacity: 0.4;
    }
  }
}
</style>