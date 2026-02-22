<script setup>
import { computed } from "vue";
import Badge from "@/components/base/Badge.vue";

const props = defineProps({
  item: { type: Object, required: true },
});

const formatPrice = (val) => new Intl.NumberFormat("ko-KR").format(val);

const badgeVariant = computed(() => {
  if (props.item.tag.includes("+")) return "primary";
  if (props.item.tag.includes("-")) return "secondary";

  return "gray";
});
</script>

<template>
  <div class="analysis-card">
    <div class="content">
      <p class="sub-text">{{ item.subText }}</p>
      <h3 class="main-text">
        <b>{{ formatPrice(item.mainText) }}</b
        >원
      </h3>
    </div>

    <div class="tag-area">
      <Badge :variant="badgeVariant">
        {{ item.tag }}
      </Badge>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 1. 카드의 기본 스타일
.analysis-card {
  position: relative;
  background: #fff;
  padding: 2.4rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(59, 111, 210, 0.2);
  transition: all 0.4s ease;

  .sub-text {
    font-size: 1.4rem;
    color: $gray-4;
    margin-bottom: 0.6rem;
  }

  .main-text {
    font-size: 1.6rem;
    color: $text;
    > b {
      font-size: 2rem;
      font-weight: 800;
    }
  }
}
</style>
