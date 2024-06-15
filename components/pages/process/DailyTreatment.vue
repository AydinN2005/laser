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
        <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="w-full right-0 absolute bottom-0"
             style="border-radius: 100px"
             alt="" />
      </div>
      <p class="mt-4 mb-10 text-center md:text-base text-sm">
        is something that everyone desires. However, achieving and maintaining clear and soft skin can be a challenge, especially with the constant exposure to pollution, harsh weather conditions, and stress.
      </p>
      <div class="flex items-center justify-center">
        <Button type="purple-button" title="contact us" base="c-button-2" stroke="white" class="mr-6"/>
        <Button type="vacant-button" title="about us" base="c-button-2" stroke="#3D3948"/>
      </div>
      <div class="grid grid-cols-1 gap-16 w-full mt-16">
        <TreatmentCard title="pre - treatment cleanse " desc="Pre-treatment cleanse is an essential step in any skincare routine. It involves using a gentle cleanser to remove dirt, oil, and impurities from the skin before applying any other products." :card="{id: 1}"/>
        <TreatmentCard title="Cleaning after treatment" desc="Cleaning after treatment is an important step in the recovery process for both patients and medical facilities. Proper cleaning and disinfection of treatment areas is crucial to prevent the spread of infections and ensure the safety of patients and healthcare workers." :card="{id: 2}"/>
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
