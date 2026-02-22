<script setup lang="ts">
import { computed, ref } from "vue";
import Header from "../components/main/Header.vue";
import CategorySummary from "../components/main/CategorySummary.vue";
import TransactionItem from "../components/card/TransactionItem.vue";
import Nodata from "../components/base/Nodata.vue";

const rawAmount = 4456320;

const formattedAmount = computed(() => {
  return new Intl.NumberFormat("ko-KR").format(rawAmount);
});

const categorySpending = ref({
  식비: { target: 1000000, current: 640000, percent: 64 },
  쇼핑: { target: 500000, current: 150000, percent: 30 },
  공과금: { target: 300000, current: 240000, percent: 80 },
});

const transactions = ref([
  {
    id: 1,
    title: "스타벅스 강남점",
    date: "2026.02.21",
    type: "food",
    time: "14:30",
    amount: 5500,
    icon: "ri-restaurant-fill",
  },
  {
    id: 2,
    title: "현대백화점 쇼핑",
    date: "2026.02.20",
    type: "shopping",
    time: "14:21",
    amount: 125000,
    icon: "ri-shopping-bag-4-fill",
  },
  {
    id: 3,
    title: "관리비 납부",
    type: "utility",
    date: "2026.02.15",
    time: "11:36",
    amount: 245000,
    icon: "ri-drop-fill",
  },
  {
    id: 4,
    title: "유투브코리아 페이먼트",
    type: "utility",
    date: "2026.02.15",
    time: "11:02",
    amount: 16500,
    icon: "ri-drop-fill",
  },
  {
    id: 5,
    title: "육탕상점 화곡점",
    date: "2026.02.21",
    type: "food",
    time: "10:13",
    amount: 25500,
    icon: "ri-restaurant-fill",
  },
]);
</script>

<template>
  <main class="home-container">
    <!-- 상단 -->
    <Header sub-tit="오늘도 아끼는 하루 되세요," user-name="홍길동" />

    <!-- 지출현황카드 -->
    <section class="total-spending">
      <div class="pay-card">
        <span class="label">이번 달 지출 현황</span>
        <div class="amount-area">
          <span class="currency-symbol">₩</span>
          <span class="unit"
            ><b class="amount">{{ formattedAmount }}</b
            >원</span
          >
        </div>
      </div>
    </section>

    <!-- 탭별 소비현황 -->
    <CategorySummary :spendingData="categorySpending" />

    <!-- 최근 이용 내역 -->
    <section class="recent-transactions">
      <div class="section-header">
        <h3 class="section-title">최근 이용 내역</h3>
        <button
          v-if="transactions.length > 0"
          class="btn-more"
          @click="$emit('go-detail')"
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>

      <!-- 리스트 -->
      <div class="transaction-container">
        <div v-if="transactions.length > 0" class="transaction-card">
          <TransactionItem
            v-for="item in transactions"
            :key="item.id"
            :transaction="item"
          />
        </div>

        <Nodata v-else subText="이용내역이 없습니다." />
      </div>
    </section>
  </main>
</template>
