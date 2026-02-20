<script setup>
import { ref } from 'vue';

const activeTab = ref('home');

const menuItems = [
  { id: 'home', label: '홈', icon: 'ri-home-5-line', activeIcon: 'ri-home-5-fill' },
  { id: 'analysis', label: '분석', icon: 'ri-pie-chart-2-line', activeIcon: 'ri-pie-chart-2-fill' },
  { id: 'card', label: '카드', icon: 'ri-wallet-3-line', activeIcon: 'ri-wallet-3-fill' },
  { id: 'history', label: '내역', icon: 'ri-calendar-todo-line', activeIcon: 'ri-calendar-todo-fill' },
];
</script>

<template>
  <nav class="bottom-tab">
    <div 
      v-for="item in menuItems" 
      :key="item.id"
      class="tab-item"
      :class="{ active: activeTab === item.id }"
      @click="activeTab = item.id"
    >
      <i :class="activeTab === item.id ? item.activeIcon : item.icon"></i>
      <span class="label">{{ item.label }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.bottom-tab {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 50rem; // 민주님 앱 너비 기준
  height: 7.2rem;
  background-color: rgba($surface, 0.85); // variables.scss의 $surface 사용
  backdrop-filter: blur(20px);
  border-top: 1px solid $divider;
  @include flex-between;
  padding: 0 2rem;
  padding-bottom: env(safe-area-inset-bottom); // 아이폰 하단 바 대응
  z-index: 100;

  .tab-item {
    @include flex-column;
    @include flex-center;
    flex: 1;
    cursor: pointer;
    transition: all 0.2s ease;
    gap: 0.4rem;
    color: $secondary;

    i {
      font-size: 2.4rem;
      transition: transform 0.2s ease;
    }

    .label {
      font-size: 1.1rem;
      font-weight: 500;
    }

    &.active {
      color: $primary;
      
      i {
        transform: translateY(-0.2rem);
        color: $lime; // 강조색으로 포인트!
      }
      
      .label {
        font-weight: 600;
      }
    }

    &:active {
      opacity: 0.6;
      transform: scale(0.95);
    }
  }
}
</style>