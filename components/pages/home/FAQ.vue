<template>
  <div class="c-container faq">
    <div class="flex flex-col items-center">
      <div class="title-box">
        <span></span>
        F & Q
      </div>
      <div class="relative">
        <div class="flex flex-col items-center relative z-10">
          <h3 class="section-title-1 text-center">
            Frequently asked questions that
          </h3>
          <h2 class="section-title-2 text-center">
            customers have form us
          </h2>
        </div>
        <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
             alt="">
      </div>
      <div class="mt-14 lg:flex items-center lg:flex-row flex-col-reverse w-full">
        <div class="lg:grid hidden grid-cols-1 gap-6 w-full">
          <FaqCard v-for="item in 6" :key="item" :title="'how pricing do you have ?'"/>
        </div>
        <div class="flex lg:hidden flex-col faq-right lg:items-start items-center lg:mb-0 mb-10">
          <img src="~/assets/images/img/faqImg.png" alt="">
          <h2 class="text-base md:text-2xl font-bold mt-6">
            how pricing do you have ?
          </h2>
          <p class="mt-4 text-sm md:text-base font-semibold gray-text lg:text-left text-center">
            It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives
            you long lasting results.
          </p>
        </div>
        <FaqSlider class="lg:hidden"/>
        <div class="lg:flex hidden flex-col faq-right lg:items-start items-center lg:mb-0 mb-10">
          <img src="~/assets/images/img/faqImg.png" alt="">
          <h2 class="text-2xl font-bold mt-6">
            how pricing do you have ?
          </h2>
          <p class="mt-4 text-base font-semibold gray-text lg:text-left text-center">
            It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives
            you long lasting results.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqCard from "~/components/elements/FaqCard";
import FaqSlider from "~/components/pages/faq/FaqSlider";

export default {
  components: {FaqSlider, FaqCard}
}
</script>

<style scoped lang="scss">
.faq {
  &-right {
    margin-left: 80px;
  }
}

@media screen and (max-width: 1023px) {
  .section-title-1 {
    font-size: 32px;
  }
  .section-title-2 {
    font-size: 48px;
  }
  .faq-right {
    margin-left: 0;
  }
}

@media screen and (max-width: 767px) {
  .faq {
    .section-title-1 {
      font-size: 16px;
    }

    .section-title-2 {
      font-size: 23px;
    }
  }
}
</style>
<style lang="scss">
</style>
