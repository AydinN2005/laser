<template>
  <div class="slider">
    <Slider :nav="false" :dots="true" items="1" :margin="24" :loop="false" :auto-play="false" class="questions-slider">
      <div v-for="item in 5" :key="item">
        <div class="grid grid-cols-1 gap-6">
          <FaqCard v-for="item in 5" :key="item" title="how pricing do you have ?" class="mr-8"/>
        </div>
      </div>
    </Slider>
  </div>
</template>

<script>
import Slider from "~/components/helper/Slider";
import FaqCard from "~/components/elements/FaqCard";

export default {
  components: {FaqCard, Slider}
}
</script>

<style lang="scss">
.slider {

  .faq-card-button {
    right: 0 !important;
  }

  .faq-card {
    margin-right: 0 !important;
  }
}
</style>
