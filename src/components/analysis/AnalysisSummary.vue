<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import AnalysisCard from "./AnalysisCard.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="summary-container">
    <div class="summary-swiper">
      <swiper
        :slides-per-view="1.2"
        :centered-slides="false"
        :slides-offset-before="24"
        :slides-offset-after="24"
        :space-between="16"
        class="my-swiper"
      >
        <swiper-slide v-for="item in list" :key="item.id">
          <AnalysisCard :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" coped>
.summary-container {
  width: 100%;
  overflow-x: hidden;
  margin-top: -1rem;
  padding-bottom: 2rem;
}

.summary-swiper {
  width: 100%;
  margin-top: 2.4rem;
}

.my-swiper {
  overflow: visible;
}
</style>
