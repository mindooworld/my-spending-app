<script setup>
import { computed } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);

const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
});

const currentData = computed(() => props.chartData[props.activeTab]);

const chartOptions = computed(() => ({
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "10%",
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    borderWidth: 0,
    borderRadius: 8,
    textStyle: { color: "#fff", fontSize: 12 },
    formatter: "{b}: {c}원",
  },
  xAxis: {
    type: "category",
    data: currentData.value.labels,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#fff", fontSize: 12 },
  },
  yAxis: { type: "value", show: false },
  series: [
    {
      data: currentData.value.values,
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: { width: 2, color: "#d5ef96" },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(213, 239, 150, 0.2)" },
            { offset: 1, color: "rgba(213, 239, 150, 0)" },
          ],
        },
      },
    },
  ],
}));
</script>

<template>
  <div class="chart-wrapper">
    <div class="h-64">
      <v-chart class="chart" :option="chartOptions" autoresize />
    </div>
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 20rem;
}
</style>
