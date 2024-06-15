<template>
  <div>
    <BodyHero :title="area.name"/>
    <div v-if="properties !== null">
      <AboutLaser :name="area.name" :data="properties[0]" class="section-space"/>
      <AboutLeg :name="area.name" :data="properties[1]" class="section-space"/>
    </div>
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
import {getOneBodyArea} from "~/services/api/admin/bodyArea";
import axios from 'axios'

export default {
  fallback: true,
  components: {AboutLaser, BodyHero, AboutLeg, Booking, Satisfaction, OurBlog},
  data: () => ({
    area: {},
    properties: null
  }),
  mounted() {
    // getOneBodyArea(parseInt(this.$route.params.id), (data) => {
    //   if (data) {
    //     this.area = data.bodyArea
    //   }
    //   this.properties = this.area.properties
    // })
  },
  async asyncData({params}) {
    const {data} = await axios.get(`https://backend.2daylaser.ca/body-area/${params.id}`);
    // return { post: data };
    return {
      area: data.bodyArea,
      properties: data.bodyArea.properties
    }
  },
}
</script>

<style scoped>
</style>
