<template>
  <div>
    <LaserProcess/>
    <PreTreatment/>
    <DailyTreatment class="section-space"/>
    <Booking class="section-space"/>
    <Satisfaction class="section-space"/>
    <OurBlog class="section-space"/>
  </div>
</template>

<script>
import LaserProcess from "~/components/pages/process/LaserProcess";
import PreTreatment from "~/components/pages/process/PreTreatment";
import DailyTreatment from "~/components/pages/process/DailyTreatment";
import Booking from "~/components/pages/process/Booking";
import OurBlog from "~/components/pages/home/OurBlog";
import Satisfaction from "~/components/pages/home/Satisfaction";

export default {
  components: {Satisfaction, OurBlog, Booking, DailyTreatment, PreTreatment, LaserProcess}
}
</script>

<style scoped>

</style>
