<script setup>
defineProps({
  transaction: {
    type: Object,
    required: true,
  },
});

const formatPrice = (val) => new Intl.NumberFormat("ko-KR").format(val);
</script>

<template>
  <div class="transaction-item">
    <div class="left-content">
      <div :class="['icon-box', transaction.type]">
        <i :class="[transaction.icon, 'icon']"></i>
      </div>
      <div class="info">
        <p class="title">{{ transaction.title }}</p>
        <p class="date">
          {{ transaction.date }}
          <span class="time">{{ transaction.time }}</span>
        </p>
      </div>
    </div>
    <div class="right-content">
      <span class="amount"
        ><b>{{ formatPrice(transaction.amount) }}</b
        >원</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2rem;
  background-color: #fff;
  border-radius: $radius-md;

  &:last-child {
    border-bottom: none;
  }

  .left-content {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .icon-box {
      width: 2.8rem;
      height: 2.8rem;
      background-color: $gray-bg;
      border-radius: $radius-xsm;
      display: flex;
      align-items: center;
      justify-content: center;
      &.food {
        // 식비
        .icon {
          color: $gray-1;
        }
      }
      &.shopping {
        .icon {
          color: $secondary;
        }
      }
      &.utility {
        .icon {
          color: $primary;
        }
      }

      .icon {
        font-size: 1.8rem;
      }
    }

    .info {
      .title {
        font-size: 1.4rem;
        font-weight: 500;
        color: $text;
        margin-bottom: 0.4rem;
      }
      .date {
        font-size: 1.2rem;
        color: $gray-2;
        display: flex;
        gap: 0.4rem;
      }
    }
  }

  .right-content {
    .amount {
      font-size: 1.4rem;
      color: $text;
      > b {
        font-size: 1.8rem;
      }
    }
  }
}
</style>
