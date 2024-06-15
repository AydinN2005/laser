<template>
  <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 w-full questions">
    <FaqSlider :questions="questions"/>
    <div class="flex flex-col faq-right">
      <img loading="lazy"     src="~/assets/images/img/faqImg.webp" class="questions-img" alt="" />
      <h2 class="text-base md:text-2xl font-bold mt-6 lg:text-left text-center">
          how do you pricing ?
      </h2>
      <p class="mt-4 text-sm md:text-base font-semibold gray-text lg:text-left text-center">
        It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives
        you long lasting results.
      </p>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/helper/Slider";
import FaqCard from "~/components/elements/FaqCard";
import FaqSlider from "~/components/pages/faq/FaqSlider";

export default {
  components: {FaqSlider, FaqCard, Slider},
  props: ['questions']
}
</script>

<style scoped lang="scss">
.questions {
  &-img {
    min-height: 210px;
    border-radius: 40px;
  }
}

.faq-right {
  margin-left: 80px;
}

@media screen and (max-width: 1023px) {
  .faq-right {
    margin-left: 0;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 767px) {

}
</style>
