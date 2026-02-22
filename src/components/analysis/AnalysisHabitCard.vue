<script setup>
import { ref, onMounted } from "vue";
import Badge from "@/components/base/Badge.vue";

const props = defineProps({
  item: { type: Object, required: true },
});

const animatedPercent = ref(0);

onMounted(() => {
  setTimeout(() => {
    animatedPercent.value = props.item.percent;
  }, 100);
});
</script>

<template>
  <div class="habit-card">
    <Badge :variant="item.variant">{{ item.category }}</Badge>

    <div class="chart-wrapper">
      <svg viewBox="0 0 40 40" class="circular-chart">
        <circle cx="20" cy="20" r="17" class="circle-bg" />
        <circle
          cx="20"
          cy="20"
          r="17"
          class="circle"
          :style="{
            stroke: item.color,
            strokeDasharray: `${animatedPercent}, 100`,
          }"
        />
        <text x="20" y="23" class="percentage">{{ item.percent }}%</text>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.habit-card {
  background: #fff;
  padding: 2rem;
  border-radius: $radius-md;
  aspect-ratio: 1 / 1.1;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  align-items: flex-start;

  .chart-wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
}
.circular-chart {
  width: 100%;
  max-width: 13rem;
  transform: rotate(-90deg);
  overflow: visible;
}

.circle-bg {
  fill: none;
  stroke: $gray-bg;
  stroke-width: 3;
}

.circle {
  fill: none;
  stroke-width: 3; // 배경과 동일하게
  stroke-linecap: round;
  transition: stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.percentage {
  fill: #1e1e1e;
  font-size: 0.6rem;
  font-weight: 800;
  text-anchor: middle;
  transform: rotate(90deg);
  transform-origin: center;
}
</style>
