<template>
  <div class="c-container leg">
    <div class="grid grid-cols-3 gap-8 w-full items-start leg-inner">
      <div
        v-if="data"
        class="flex flex-col items-center justify-end relative w-full col-start-1 col-end-2"
      >
<!--        <img loading="lazy" src="~/assets/images/img/aboutLeg.webp" class="lg:block hidden" alt=""/>-->
        <img loading="lazy" v-for="item in data.images" :src="`${baseUrl}/${item.image}`" class="woman-img" alt=""/>
        <div class="leg-purple-box lg:block hidden"></div>
        <div class="leg-purple-box-mobile lg:hidden">
          <img loading="lazy" src="~/assets/images/img/purpleMobileBox.webp" alt=""/>
        </div>
      </div>
      <div class="flex flex-col lg:items-start items-center w-full col-start-2 col-end-4">
        <div class="title-box">
          <span></span>
          about laser {{ name }}
        </div>
        <div class="relative">
          <div class="flex flex-col lg:items-start items-center relative z-10">
            <h3 class="section-title-1">cost of laser hair removal</h3>
            <h2 class="section-title-2">{{ data?.title }}</h2>
          </div>
          <img loading="lazy"
               src="~/assets/images/img/whyusTextBg.webp"
               class="w-full absolute bottom-0"
               style="border-radius: 100px"
               alt=""
          />
        </div>
        <p v-html="data?.description" class="gray-text font-bold md:text-base text-sm mt-4 mb-10 lg:text-left text-center max-w-full">
<!--          {{ data?.description }}-->
        </p>
        <div class="flex items-center mb-16 lg:w-max w-full md:flex-row flex-col">
          <Button
            type="purple-button"
            title="contact us"
            stroke="white"
            base="c-button-2"
            class="md:mr-6 md:mb-0 mb-6 lg:w-max w-full"
          />
          <Button type="vacant-button" title="about us" base="c-button-2" class="lg:w-max w-full"/>
        </div>
        <div
          class="flex items-center leg-slider-title text-sm md:text-2xl font-medium black-text md:w-max w-full"
        >
          <span></span>
          latest laser hair removal
        </div>
        <div class="leg-slider">
          <Slider
            :autoPlay="false"
            :dots="false"
            :nav="true"
            :items="4"
            :loop="false"
            :margin="22"
            :responsive="{0:{items: 2}, 768: {items: 3}, 1024: {items: 4}}"
          >
            <img loading="lazy" v-for="item in images" :key="item.id" :src="item.img" alt=""/>
          </Slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/elements/Button.vue'
import Slider from '~/components/helper/Slider.vue'
import {baseUrl} from "~/services/baseUrl";

export default {
  components: {Button, Slider},
  props: ['data', 'name'],
  data: () => ({
    images: [
      {
        id: 1,
        img: require('~/assets/images/img/legSlider1.webp'),
      },
      {
        id: 2,
        img: require('~/assets/images/img/legSlider2.webp'),
      },
      {
        id: 3,
        img: require('~/assets/images/img/legSlider3.webp'),
      },
      {
        id: 4,
        img: require('~/assets/images/img/legSlider4.webp'),
      },
      {
        id: 5,
        img: require('~/assets/images/img/legSlider1.webp'),
      },
      {
        id: 6,
        img: require('~/assets/images/img/legSlider2.webp'),
      },
      {
        id: 7,
        img: require('~/assets/images/img/legSlider3.webp'),
      },
      {
        id: 8,
        img: require('~/assets/images/img/legSlider4.webp'),
      },
    ],
    baseUrl
  }),
}
</script>

<style lang="scss" scoped>
.leg {
  &-purple-box {
    width: 100%;
    height: 300px;
    border-radius: 32px;
    background: var(--primary-purple);
    position: absolute;
    z-index: -1;

    &-mobile {
      position: absolute;
      bottom: 0;
    }
  }

  &-slider-title {
    span {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--input-border);
      margin-right: 20px;
    }
  }

  &-slider {
    width: 100%;
  }
}

@media screen and (max-width: 1023px) {
  .leg {
    &-inner {
      display: flex;
      flex-direction: column-reverse;
    }

    &-slider {
      width: 100%;
    }
  }
  .woman-img {
    max-height: 400px;
    position: relative;
    z-index: 10;
    bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .leg {
    &-slider-title {
      span {
        width: 12px;
        height: 12px;
        margin-right: 12px;
      }
    }
  }
  .woman-img {
    max-height: 200px;
    bottom: 18px;
  }
}
</style>
<style lang="scss">
.leg {
  &-slider {
    img {
      max-width: 192px !important;
      max-height: 145px !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .leg {
    .owl-nav {
      top: -36px;
    }
  }
}
</style>
