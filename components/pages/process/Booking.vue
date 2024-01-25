<template>
  <div class="c-container">
    <div class="flex items-center justify-between w-full">
      <div class="w-full flex flex-col">
        <div class="title-box">
          <span></span>
          booking now
        </div>
        <div class="relative">
          <div class="flex flex-col relative z-10">
            <h3 class="section-title-1">
              Schedule your free consultation
              to learn more about laser hair
            </h3>
            <h2 class="section-title-2">
              removal today!
            </h2>
          </div>
          <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="">
        </div>
        <p class="mt-4 mb-10 text-base font-bold gray-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
          tempor incididunt .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          .lit, sed do eiusmod tempor incididunt .
        </p>
        <div class="flex items-center">
          <Button type="purple-button" title="book services" base="c-button-2" stroke="white" class="mr-6"/>
          <Button type="vacant-button" title="our services" base="c-button-2" stroke="#3D3948"/>
        </div>
      </div>
      <div class="w-full"></div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";

export default {
  components: {Button}
}
</script>

<style scoped>

</style>
