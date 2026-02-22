<script setup>
import { ref, computed } from 'vue';
import Badge from '@/components/base/Badge.vue';
// ECharts 관련 임포트
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const props = defineProps({
  spendingData: {
    type: Object,
    required: true
  }
});

const categories = ['식비', '쇼핑', '공과금'];
const activeTab = ref('식비');

const currentData = computed(() => props.spendingData[activeTab.value]);
const remainingAmount = computed(() => currentData.value.target - currentData.value.current);
const formatPrice = (val) => new Intl.NumberFormat('ko-KR').format(val);

const infoList = computed(() => [
  { label: '목표 소비', value: currentData.value.target, isAccent: false },
  { label: '현재 소비', value: currentData.value.current, isAccent: false },
  { label: '남은 소비', value: remainingAmount.value, isAccent: true },
]);

// ECharts 옵션
const chartOptions = computed(() => {
  const percent = currentData.value.percent;
  return {
    series: [
      {
        type: 'pie',
        // 반지름을 살짝 줄여서(90%) 캔버스 테두리와 간격을 둡니다.
        radius: ['74%', '90%'], 
        // 중심을 위로 확 끌어올립니다 (90% -> 70%)
        center: ['50%', '70%'],  
        startAngle: 180, 
        label: { show: false },
        emphasis: { scale: false },
        silent: true,
        itemStyle: {
          borderRadius: 8 // 수치가 클수록 더 둥글어집니다.
        },
        data: [
          { value: percent, itemStyle: { color: '#3b6fd2' } },
          { value: 100 - percent, itemStyle: { color: '#E5EAFC' } },
          { 
            value: 100, 
            itemStyle: { color: 'transparent' } 
          }
        ]
      }
    ]
  };
});
</script>

<template>
  <div class="category-summary">
    <nav class="tabs">
      <button 
        v-for="tab in categories" 
        :key="tab"
        :class="['tab-item', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </nav>

    <div class="content-card">
      <div class="info-list">
        <div 
          v-for="item in infoList" 
          :key="item.label" 
          :class="['info-item', { remaining: item.isAccent }]"
        >
          <Badge :variant="item.isAccent ? 'accent' : 'gray'">
            {{ item.label }}
          </Badge>
          <span :class="['amount', { highlight: item.isAccent }]">
            {{ formatPrice(item.value) }}원
          </span>
        </div>
      </div>

      <div class="chart-area">
        <v-chart class="chart" :option="chartOptions" autoresize />
        <div class="chart-text">
          <span class="percent-num"><b>{{ currentData.percent }}</b>%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-summary {
  background-color: #fff;
  border-radius: $radius-md;
  padding: 2rem;

  .tabs {
    display: flex;
    gap: 1.6rem;
    background-color: $gray-bg;
    border-radius: $radius-sm;
    padding: 0.4rem;

    .tab-item {
      flex:1;
      font-size: 1.4rem;
      color: $gray-2;
      padding-block: 0.8rem;
      position: relative;
      transition: all 0.3s;
      border-radius: $radius-sm;
      &.active {
        color: #fff;
        background-color: $primary;
        font-weight: 700;
      }
    }
  }

  .content-card {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .info-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        .amount {
          font-size: 1.4rem;
          color: $text;
        }

        &.remaining {
          .amount.highlight {
            font-size: 1.4rem;
            color: $primary;
            font-weight: 700;
          }
        }
      }
    }

 .chart-area {
  position: relative;
  width: 15rem;
  height: 11rem; // 높이를 조금 더 넉넉히 확보 (9rem -> 11rem)
  overflow: hidden;

  .chart {
    width: 100%;
    height: 16rem; 
    position: absolute;
    top: -1.5rem; // 차트 전체를 위로 살짝 들어올림
    left: 0;
  }

  .chart-text {
    position: absolute;
    // 차트 중심이 70%이므로 텍스트는 그보다 조금 위나 아래로 배치
    bottom: 1.6rem; 
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
    
    .percent-num {
      font-size: 1.4rem;
      color: $text;
      > b {
        font-size: 2.4rem;
      }
    }
  }
}
  }
}
</style>