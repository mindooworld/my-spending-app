<script setup>
defineProps({
  // 아이콘 클래스 (예: 'ri-check-line')
  icon: {
    type: String,
    default: ''
  },
  // 컬러 테마 (accent, lime, secondary 등)
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>

<template>
  <div class="base-badge" :class="variant">
    <i v-if="icon" :class="[icon, 'badge-icon']"></i>
    <span class="badge-content">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.4rem;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  
  .badge-icon {
    font-size: 1.6rem;
  }

  // 테마별 컬러 설정
  &.primary {
    background-color: rgba($primary, 0.1);
    color: $primary;
  }
  &.accent {
    background-color: rgba($accent, 0.1);
    color: $accent;
  }
  
  &.error {
    background-color: rgba($error, 0.1);
    color: $error;
  }

  &.secondary {
    background-color: rgba($secondary, 0.1);
    color: $secondary;
  }
  &.gray {
    background-color: rgba($gray-1, 0.1);
    color: $gray-1;
  }
}
</style>