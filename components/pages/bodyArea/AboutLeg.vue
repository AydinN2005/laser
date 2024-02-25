<template>
  <div class="c-container leg">
    <div class="grid grid-cols-3 gap-8 w-full items-start leg-inner">
      <div
        class="flex flex-col items-center justify-end relative w-full col-start-1 col-end-2"
      >
        <img src="~/assets/images/img/aboutLeg.png" class="lg:block hidden" alt=""/>
        <img src="~/assets/images/img/aboutLaserWoman.png" class="lg:hidden" alt="">
        <div class="leg-purple-box lg:block hidden"></div>
      </div>
      <div class="flex flex-col lg:items-start items-center w-full col-start-2 col-end-4">
        <div class="title-box">
          <span></span>
          about laser leg
        </div>
        <div class="relative w-max">
          <div class="flex flex-col lg:items-strt items-center relative z-10">
            <h3 class="section-title-1">cost of laser hair removal</h3>
            <h2 class="section-title-2">for your legs</h2>
          </div>
          <img
            src="~/assets/images/img/whyusTextBg.png"
            class="w-full absolute bottom-0"
            style="border-radius: 100px"
            alt=""
          />
        </div>
        <p class="gray-text font-bold md:text-base text-sm mt-4 mb-10 lg:text-left text-center">
          The hair on our legs is some of the fastest growing, so maintaining a
          smooth shave can get expensive and time-consuming. Laser hair removal
          is a fast, and cost-efficient choice to tame this hair. However, with
          traditional aesthetic clinics, you may end up buying multiple packages
          to get full hair removal and paying for touch-ups in the future.
          GoLaser simplifies the cost of leg laser hair removal with our GoLaser
          Guarantee. Pay one flat fee and get access to a period of unlimited
          sessions plus a yearly touch up! Even if you need a touch-up years
          from now, we’ll be happy to help for no extra cost.
        </p>
        <div class="flex items-center mb-16 lg:w-max w-full md:flex-row flex-col">
          <Button
            type="purple-button"
            title="book services"
            stroke="white"
            base="c-button-2"
            class="md:mr-6 mb-6 lg:w-max w-full"
          />
          <Button type="vacant-button" title="our service" base="c-button-2" class="lg:w-max w-full"/>
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
            <img v-for="item in images" :key="item.id" :src="item.img" alt=""/>
          </Slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/elements/Button.vue'
import Slider from '~/components/helper/Slider.vue'

export default {
  components: {Button, Slider},
  data: () => ({
    images: [
      {
        id: 1,
        img: require('~/assets/images/img/legSlider1.png'),
      },
      {
        id: 2,
        img: require('~/assets/images/img/legSlider2.png'),
      },
      {
        id: 3,
        img: require('~/assets/images/img/legSlider3.png'),
      },
      {
        id: 4,
        img: require('~/assets/images/img/legSlider4.png'),
      },
      {
        id: 5,
        img: require('~/assets/images/img/legSlider1.png'),
      },
      {
        id: 6,
        img: require('~/assets/images/img/legSlider2.png'),
      },
      {
        id: 7,
        img: require('~/assets/images/img/legSlider3.png'),
      },
      {
        id: 8,
        img: require('~/assets/images/img/legSlider4.png'),
      },
    ],
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
  &-slider{
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
