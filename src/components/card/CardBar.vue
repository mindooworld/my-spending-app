<script setup lang="ts">
import { computed } from "vue";
import Badge from "../base/Badge.vue";

const props = defineProps<{
  card: any; // 부모에서 넘겨주는 현재 카드 객체
}>();

const percent = computed(() =>
  Math.min((props.card.amount / props.card.limit) * 100, 100),
);
const remainAmount = computed(() =>
  (props.card.limit - props.card.amount).toLocaleString(),
);
</script>

<template>
  <div class="card-detail-info">
    <div class="limit-bar-wrap">
      <div class="bar-bg">
        <div
          class="bar-active"
          :style="{ width: `${percent}%`, backgroundColor: card.color }"
        ></div>
      </div>
      <p class="limit-txt">
        한도까지 <span>{{ remainAmount }}원</span> 남았어요
      </p>
      <Badge :icon="card.badge.icon" :variant="card.badge.variant">
        {{ card.badge.text }} <b>{{ card.badge.point }}</b
        >{{ card.badge.unit }}
      </Badge>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-detail-info {
  margin-top: 2.4rem;
  padding: 0 2.4rem;
  .limit-bar-wrap {
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 1.6rem;
    .bar-bg {
      width: 100%;
      height: 0.8rem;
      background: #f2f2f2;
      border-radius: 1rem;
      overflow: hidden;
      .bar-active {
        height: 100%;
        transition: width 0.4s ease;
        border-radius: 1.6rem;
      }
    }
    .limit-txt {
      font-size: 1.4rem;
      color: #666;
      span {
        font-weight: 700;
        color: #000;
      }
    }
  }
}
</style>
