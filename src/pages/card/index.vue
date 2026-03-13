<script setup lang="ts">
import { ref } from 'vue'
import CardSlide from '../../components/card/CardSlide.vue'

const cardList = ref([
  { id: 1, label: "이번 달 지출 현황", amount: 4456320, color: "#3B6FD2" }, // 블루
  { id: 2, label: "나의 비상금 현황", amount: 1250000, color: "#2D2D2D" }, // 다크그레이
  { id: 3, label: "포인트 잔액", amount: 54200, color: "#d5ef96" },      // 라임
]);
</script>

<template>
  <div class="card-page">
    <div class="section-header">
      <h3 class="section-title">내 카드 목록</h3>
    </div>
    <CardSlide :cards="cardList" />
  </div>
</template>