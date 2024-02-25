<template>
  <div class="c-container">
    <div class="flex items-center lg:flex-row flex-col justify-between w-full">
      <div class="w-full flex flex-col lg:items-start items-center">
        <div class="title-box">
          <span></span>
          booking now
        </div>
        <div class="relative">
          <div class="flex flex-col relative z-10 lg:items-start items-center">
            <h3 class="section-title-1 lg:text-left text-center">
              Schedule your free consultation
              to learn more about laser hair
            </h3>
            <h2 class="section-title-2 min-w-max">
              removal today!
            </h2>
          </div>
          <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="">
        </div>
        <p class="mt-4 mb-10 md:text-base font-bold gray-text lg:text-left text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
          tempor incididunt .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          .lit, sed do eiusmod tempor incididunt .
        </p>
        <div class="flex items-center">
          <Button type="purple-button" title="book services" base="c-button-2" stroke="white" class="mr-6"/>
          <Button type="vacant-button" title="our services" base="c-button-2" stroke="#3D3948"/>
        </div>
      </div>
      <div class="w-full relative woman-image-container">
        <img src="~/assets/images/img/processWoman.png" class="lg:block hidden" alt="">
        <img src="~/assets/images/img/bookingWomanMobileImage.png" class="lg:hidden" alt="">
        <img src="~/assets/images/img/operators.png" class="absolute black-img" alt="">
        <img src="~/assets/images/img/services.png" class="absolute purple-img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";

export default {
  components: {Button}
}
</script>

<style scoped lang="scss">
.black-img, purple-img {
  width: 160px;
  height: 180px;
}

.black-img {
  bottom: -64px;
  right: 24px;
  z-index: 10;
}

.purple-img {
  left: 134px;
  top: -64px;
}

@media screen and (max-width: 1160px) {
  .purple-img {
    left: unset;
    right: 4px;
    top: -90px;
  }
  .black-img {
    left: 44px;
  }
}

@media screen and (max-width: 1023px) {
  .purple-img {
    right: unset;
    left: 44px;
  }
  .black-img {
    left: unset;
    right: 44px;
  }
  .woman-image-container {
    margin-top: 121px;
  }
}
@media screen and (max-width: 767px) {
  .purple-img, .black-img{
    width: 103px;
    height: 133px;
  }
  .purple-img{
    top: -40px;
  }
  .black-img{
    bottom: -44px;
  }
}
</style>
