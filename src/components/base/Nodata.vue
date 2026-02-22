<script setup>
defineProps({
  icon: {
    type: String,
    default: "ri-information-line",
  },
  title: {
    type: String,
    default: "",
  },
  subText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="no-data">
    <i v-if="icon" :class="[icon, 'icon']"></i>

    <h3 v-if="title" class="tit">
      {{ title }}
    </h3>

    <p v-if="subText" class="txt">
      {{ subText }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.no-data {
  text-align: center;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .icon {
    display: inline-block;
    padding-bottom: 1.6rem;
    font-size: 3.6rem;
    color: $gray-3;
  }
  .tit {
    font-size: 1.8rem;
    color: $gray-1;
    margin-bottom: 0.8rem;
  }
  .txt {
    font-size: 1.4rem;
    color: $gray-1;
  }
}
</style>
