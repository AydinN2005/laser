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
          <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="" />
        </div>
        <p class="mt-4 mb-10 md:text-base font-bold gray-text lg:text-left text-center text-sm">
          Are you tired of constantly shaving, waxing, or plucking unwanted hair? Laser hair removal may be the solution
          for you. This safe and effective treatment uses concentrated beams of light to target and destroy hair
          follicles, resulting in permanent hair reduction. Say goodbye to razor burn, ingrown hairs, and the constant
          hassle of hair removal. By scheduling a free consultation, you can learn more about the process and determine
          if it is the right choice for you.
        </p>
        <div class="flex items-center">
          <Button type="purple-button" title="contact us" base="c-button-2" stroke="white" class="mr-6"/>
          <Button type="vacant-button" title="about us" base="c-button-2" stroke="#3D3948"/>
        </div>
      </div>
      <div class="w-full relative woman-image-container">
        <img loading="lazy"     src="~/assets/images/img/processWoman.webp" class="lg:block hidden" alt="" />
        <img loading="lazy"     src="~/assets/images/img/bookingWomanMobileImage.webp" class="lg:hidden" alt="" />
        <img loading="lazy"     src="~/assets/images/img/operators.webp" class="absolute black-img" alt="" />
        <img loading="lazy"     src="~/assets/images/img/services.webp" class="absolute purple-img" alt="" />
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
  .purple-img, .black-img {
    width: 103px;
    height: 133px;
  }
  .purple-img {
    top: -40px;
  }
  .black-img {
    bottom: -44px;
  }
}
</style>
