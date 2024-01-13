<template>
  <div>
    <HomeHero/>
    <OutFeatures class="section-space"/>
    <WhyUs class="section-space"/>
    <BodyArea class="section-space"/>
  </div>
</template>

<script>
import HomeHero from "~/components/pages/home/HomeHero";
import OutFeatures from "~/components/pages/home/OutFeatures";
import WhyUs from "~/components/pages/home/WhyUs";
import BodyArea from "~/components/pages/home/BodyArea";

export default {
  name: 'IndexPage',
  components: {BodyArea, WhyUs, OutFeatures, HomeHero},
}
</script>
