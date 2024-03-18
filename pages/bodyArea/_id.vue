<template>
  <div>
    <BodyHero />
    <AboutLaser class="section-space" />
    <AboutLeg class="section-space" />
    <Booking class="section-space"/>
    <Satisfaction class="section-space"/>
    <OurBlog class="section-space"/>
  </div>
</template>

<script>
import BodyHero from '~/components/pages/bodyArea/BodyHero'
import AboutLaser from '~/components/pages/bodyArea/AboutLaser'
import AboutLeg from '~/components/pages/bodyArea/AboutLeg.vue'
import Booking from '~/components/pages/process/Booking.vue';
import Satisfaction from '~/components/pages/home/Satisfaction.vue';
import OurBlog from '~/components/pages/home/OurBlog.vue';

export default {
  components: { AboutLaser, BodyHero, AboutLeg, Booking, Satisfaction, OurBlog },
}
</script>

<style,
    Satisfaction scoped></style>
