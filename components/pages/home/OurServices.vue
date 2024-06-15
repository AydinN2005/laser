<template>
  <div v-if="!loading"
       class="c-container services grid md:grid-cols-1 lg:grid-cols-12 overflow-hidden items-center">
    <div class="services-left lg:col-start-1 lg:col-end-7">
      <div class="flex flex-col lg:items-start items-center">
        <div class="title-box">
          <span></span>
          our services
        </div>
        <div class="relative">
          <div class="flex flex-col relative z-10 lg:items-start items-center">
            <h3 class="section-title-1">
              amazing and incredible
            </h3>
            <h2 class="section-title-2">
              services for you
            </h2>
          </div>
          <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="absolute bottom-0" style="border-radius: 100px" alt="" />
        </div>
      </div>
    </div>
    <div class="lg:col-start-7 lg:col-end-13 overflow-hidden">
      <div>
        <Slider :items="2" :nav="false" :dots="true" :margin="59" :loop="false" :auto-play="true"
                :center="false"
                :responsive="{768: {items: 2}, 1024: {items: 2}, 0: {items: 1}}"
        >
          <ServicesCard v-for="item in cards" :key="item.id" :id="item.id" :title="item.title" :desc="item.description"
                        :img="`${baseUrl}/${item.image}`"/>
        </Slider>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/helper/Slider";
import ServicesCard from "~/components/elements/ServicesCard";
import {getAllServices} from "~/services/api/admin/services";
import {baseUrl} from "~/services/baseUrl";

export default {
  components: {ServicesCard, Slider},
  data: () => ({
    cards: [],
    baseUrl,
    loading: false,
  }),
  mounted() {
    this.loading = true;
    getAllServices((data) => {
      this.cards = data.services
      this.loading = false;
    })
  }
}
</script>

<style scoped lang="scss">
.services {
  &-left {
    margin-right: 45px;
  }

  .section-title-2 {
    font-size: 60px;
  }
}

@media screen and (max-width: 1023px) {
  .services {
    &-left {
      margin-bottom: 64px;
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 767px) {
  .services {
    .section-title-2 {
      font-size: 24px;
    }
  }
}
</style>
<style lang="scss">
.services {
  .owl-stage-outer {
    padding-top: 86px !important;
    padding-left: 12px !important;
  }
}
</style>
