<script setup>
import { ref, computed } from "vue";
import AnalysisChart from "@/components/analysis/AnalysisChart.vue";
import AnalysisSummary from "@/components/analysis/AnalysisSummary.vue";
import AnalysisHabitCard from "@/components/analysis/AnalysisHabitCard.vue";

// chart
const tabs = ["일별", "월별"];
const activeTab = ref("일별");

// card
const spendingChartData = {
  일별: {
    labels: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
    values: [12000, 45000, 15000, 80000, 32000, 90000, 40000],
  },
  월별: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월"],
    values: [
      450000, 520000, 380000, 610000, 490000, 720000, 534560, 424500, 421400,
    ],
  },
};

const currentSummaryData = computed(() => {
  const source = spendingChartData[activeTab.value];

  return source.labels.map((label, index) => {
    const currentVal = source.values[index];
    const prevVal = source.values[index - 1] || currentVal; // 첫 데이터는 증감 0% 처리용

    // 증감율 계산 (ex: -6%, +12%)
    const diff = currentVal - prevVal;
    const percent = prevVal !== 0 ? Math.round((diff / prevVal) * 100) : 0;
    const sign = percent > 0 ? "+" : ""; // 양수일 때만 + 붙임 (음수는 알아서 - 붙음)

    return {
      id: index + 1, // 기존 id: 1 형식
      subText: label, // 기존 subText: "월요일" 형식
      mainText: currentVal, // 기존 mainText: 24500 형식
      tag: `${sign}${percent}%`, // 기존 tag: "-6%" 형식
    };
  });
});

// 소비분석
const habitData = [
  { category: "식비", percent: 65, variant: "primary", color: "#3b6fd2" },
  { category: "쇼핑", percent: 34, variant: "secondary", color: "#40bf91" },
  { category: "공과금", percent: 41, variant: "accent", color: "#765dff" },
  { category: "기타", percent: 24, variant: "gray", color: "#4D4D4D" },
];

const notices = [
  "최근 3개월간의 평균 지출을 기반으로 분석되었습니다.",
  "공과금 항목에는 아파트 관리비와 통신비가 포함됩니다.",
  "소비 습관 분석은 매달 1일 업데이트됩니다.",
];
</script>

<template>
  <div class="analysis-page">
    <section class="chart-section">
      <div class="top-bg-layer"></div>
      <div class="analysis-top">
        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-item', { active: activeTab === tab }]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <AnalysisChart :activeTab="activeTab" :chartData="spendingChartData" />
      </div>

      <div class="summary-section">
        <AnalysisSummary :list="currentSummaryData" />
      </div>
    </section>
    <section class="habit-section">
      <div class="section-header">
        <h3 class="section-title">내 소비습관 분석</h3>
      </div>

      <div class="habit-grid">
        <AnalysisHabitCard
          v-for="(item, idx) in habitData"
          :key="idx"
          :item="item"
        />
      </div>

      <ul class="notice-list">
        <li v-for="(note, idx) in notices" :key="idx">{{ note }}</li>
      </ul>
    </section>
  </div>
</template>
