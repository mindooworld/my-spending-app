<script setup lang="ts">
import { ref, computed } from "vue";
import CardSlide from "../../components/card/CardSlide.vue";
import CardBar from "../../components/card/CardBar.vue";

const currentIndex = ref(0);
const currentCard = computed(() => cardList.value[currentIndex.value] || null);

const cardList = ref([
  {
    id: 1,
    label: "Samsung Tab Card",
    amount: 4456320,
    limit: 5000000,
    color: "#3B6FD2",
    badge: {
      icon: "ri-checkbox-circle-fill",
      variant: "error",
      text: "오늘의 추천 소비금액 ",
      point: "27,000",
      unit: "원",
    },
  },
  {
    id: 2,
    label: "나의 비상금 현황",
    amount: 1250000,
    limit: 2000000,
    color: "#2D2D2D",
    badge: {
      icon: "ri-alarm-warning-fill",
      variant: "secondary",
      text: "비상금 소진 주의! ",
      point: "750,000",
      unit: "원 남음",
    },
  },
  {
    id: 2,
    label: "나의 비상금 현황",
    amount: 1250000,
    limit: 2000000,
    color: "#2D2D2D",
    badge: {
      icon: "ri-alarm-warning-fill",
      variant: "error",
      text: "비상금 소진 주의! ",
      point: "750,000",
      unit: "원 남음",
    },
  },
]);
</script>

<template>
  <div class="card-page">
    <div class="section-header">
      <h3 class="section-title">내 카드 목록</h3>
    </div>

    <CardSlide
      :cards="cardList"
      @update:index="(val) => (currentIndex = val)"
    />

    <CardBar v-if="currentCard" :card="currentCard" />
  </div>
</template>
