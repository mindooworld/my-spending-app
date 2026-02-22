<script setup>
import Badge from '@/components/base/Badge.vue';
import avatar from '@/assets/images/avatar.png';

defineProps({
  userName: {
    type: String,
    default: ''
  },
  subTit: {
    type: String,
    default: ''
  },
  // 상태: 'good'(양호), 'warning'(위험), 'normal'(적정)
  status: {
    type: String,
    default: 'good'
  }
});
</script>

<template>
  <header class="header">
    <div class="user-info">
      <span class="sub-title">{{ subTit }}</span>
      <h1 class="greeting">{{ userName }}님.</h1>
      <div class="badge-wrapper">
        <Badge icon="ri-checkbox-circle-fill">오늘의 추천 소비금액 <b>27,000</b>원</Badge>
      </div>
    </div>

    <div class="profile-area">
      <div class="avatar-container">
        <div class="avatar">
          <img 
            :src="avatar" 
            alt="User Avatar"
            class="avatar-img"
          />
        </div>
        <div class="status-dot" :class="status"></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include flex-between;
  align-items: center;
  padding-top: 1rem;

  .user-info {
    .sub-title {
      font-size: 1.4rem;
      color: $gray-1;
      margin-bottom: 0.8rem;
      display: inline-block;
    }

    .greeting {
      font-size: 2.4rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .badge-wrapper {
      display: flex;
    }
  }

  .avatar-container {
    position: relative;

    .avatar {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 1.8rem;
      overflow: hidden; 
      @include flex-center;

      .avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .status-dot {
      position: absolute;
      top: 0.2rem;
      right: 0rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 2px solid $background;
      
      &.good { background-color: $secondary; }
      &.warning { background-color: $error; }
      &.normal { background-color: $primary; }
    }
  }
}
</style>