<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const menuItems = [
  {
    id: "home",
    label: "홈",
    path: "/",
    icon: "ri-home-line",
    activeIcon: "ri-home-fill",
  },
  {
    id: "analysis",
    label: "분석",
    path: "/analysis",
    icon: "ri-line-chart-line",
    activeIcon: "ri-line-chart-fill",
  },
  {
    id: "card",
    label: "카드",
    path: "/card",
    icon: "ri-bank-card-2-line",
    activeIcon: "ri-bank-card-2-fill",
  },
  {
    id: "history",
    label: "설정",
    path: "/settings",
    icon: "ri-settings-3-line",
    activeIcon: "ri-settings-3-fill",
  },
];

const isActive = (path) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};
</script>

<template>
  <nav class="bottom-tab">
    <router-link
      v-for="item in menuItems"
      :key="item.id"
      :to="item.path"
      class="tab-item"
      :class="{ active: isActive(item.path) }"
    >
      <i :class="isActive(item.path) ? item.activeIcon : item.icon"></i>
      <span class="label">{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.bottom-tab {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px 0 rgba(59, 111, 210, 0.3);
  @include flex-between;
  max-height: 5.6rem;
  height: 5.6rem;
  z-index: 100;
  padding-inline: 3.6rem;

  .tab-item {
    @include flex-column;
    @include flex-center;
    flex: 1;
    cursor: pointer;
    transition: all 0.2s ease;
    color: $gray-3;

    i {
      font-size: 2.4rem;
      transition: transform 0.2s ease;
    }

    .label {
      display: none;
    }

    &.active {
      color: $primary;

      i {
        transform: translateY(-0.2rem);
        color: $primary;
      }
    }

    &:active {
      opacity: 0.6;
      transform: scale(0.95);
    }
  }
}
</style>
