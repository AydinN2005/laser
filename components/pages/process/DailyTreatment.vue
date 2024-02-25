<template>
  <div class="c-container">
    <div class="flex flex-col items-center">
      <div class="title-box">
        <span></span>
        daily treatment
      </div>
      <div class="relative">
        <div class="flex flex-col relative z-10 items-center">
          <h3 class="section-title-1 text-center">
            with daily treatment instruction have
          </h3>
          <h2 class="section-title-2 text-center">
            Clear and soft skin
          </h2>
        </div>
        <img src="~/assets/images/img/whyusTextBg.png" class="w-full right-0 absolute bottom-0"
             style="border-radius: 100px"
             alt="">
      </div>
      <p class="mt-4 mb-10 text-center md:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
        tempor incididunt .
      </p>
      <div class="flex items-center justify-center">
        <Button type="purple-button" title="book services" base="c-button-2" stroke="white" class="mr-6"/>
        <Button type="vacant-button" title="book services" base="c-button-2" stroke="#3D3948"/>
      </div>
      <div class="grid grid-cols-1 gap-16 w-full mt-16">
        <TreatmentCard v-for="item in 4" :card="{id: item}"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";
import TreatmentCard from "~/components/pages/process/TreatmentCard";

export default {
  components: {TreatmentCard, Button}
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .section-title-1{
    font-size: 24px;
  }
  .section-title-2{
    font-size: 48px;
  }
}
@media screen and (max-width: 767px) {
  .section-title-2{
    font-size: 24px;
  }
  .section-title-1{
    font-size: 16px;
  }
}
</style>
