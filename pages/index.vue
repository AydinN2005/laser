<template>
  <div>
    <HomeHero class=""/>
    <OutFeatures class="section-space"/>
    <WhyUs class="section-space"/>
    <OurServices class="section-space"/>
    <BodyArea class="section-space"/>
    <Pricing class="section-space"/>
    <OurProcess class="section-space"/>
    <FAQ class="section-space"/>
    <Satisfaction class="section-space"/>
    <OurBlog class="section-space"/>
  </div>
</template>

<script>
import HomeHero from "~/components/pages/home/HomeHero";
import OutFeatures from "~/components/pages/home/OutFeatures";
import WhyUs from "~/components/pages/home/WhyUs";
import BodyArea from "~/components/pages/home/BodyArea";
import Pricing from "~/components/pages/home/Pricing";
import OurProcess from "~/components/pages/home/OurProcess";
import FAQ from "~/components/pages/home/FAQ";
import Satisfaction from "~/components/pages/home/Satisfaction";
import OurBlog from "~/components/pages/home/OurBlog";
import OurServices from "~/components/pages/home/OurServices";

export default {
  name: 'IndexPage',
  components: {OurServices, OurBlog, Satisfaction, FAQ, OurProcess, Pricing, BodyArea, WhyUs, OutFeatures, HomeHero},
}
</script>
