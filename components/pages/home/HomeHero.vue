<template>
  <div class="home">
    <div class="hero-section"></div>
    <div class="hero-section-overlay"></div>
    <div class="home-hero">
      <div class="c-container">
        <div class="flex items-start lg:flex-row flex-col">
          <div class="flex flex-col home-hero-video w-full">
            <div class="relative">
              <div
                class="home-hero-video-button flex items-center justify-center"
                @click="handlePlayVideo"
              >
                <div
                  class="home-hero-video-button-border flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="52"
                    viewBox="0 0 50 52"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_128_133)">
                      <path
                        d="M32.5 23.4019C34.5 24.5566 34.5 27.4434 32.5 28.5981L20.5 35.5263C18.5 36.681 16 35.2376 16 32.9282L16 19.0718C16 16.7624 18.5 15.319 20.5 16.4737L32.5 23.4019Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_128_133"
                        x="0"
                        y="0.0673218"
                        width="50"
                        height="51.8654"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset/>
                        <feGaussianBlur stdDeviation="8"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_128_133"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_128_133"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <img
                v-if="video === null"
                class="w-full h-full home-hero-video-img"
                src="~/assets/images/img/videoPhoto.webp"
                alt=""
                loading="lazy"
              />
              <video ref="video" v-if="video !== null" :src="`${baseUrl}/${video}`">
              </video>
            </div>
            <div
              class="home-hero-video-descbox flex items-center justify-between"
            >
              <div class="flex items-center home-hero-video-descbox-images">
                <img loading="lazy" src="~/assets/images/img/videoPerson1.webp" alt=""/>
                <img loading="lazy" src="~/assets/images/img/videoPerson2.webp" alt=""/>
              </div>
              <span class="text-white text-xs font-bold block text-center ml-3">
                +1500 happy clients from our services
              </span>
              <nuxt-link to="#footer" class="home-hero-video-descbox-button">book now</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full home-hero-slider-container flex items-center justify-center"
      >
        <img loading="lazy"
             src="~/assets/images/img/purpleBg.webp"
             alt=""
             class="absolute w-full home-hero-slider-purple-bg"
        />
        <img loading="lazy"
             src="~/assets/images/img/whiteBg.webp"
             alt=""
             class="absolute w-full home-hero-slider-white-bg"
        />
        <div class="home-hero-slider w-full flex flex-col justify-between">
          <img loading="lazy" src="~/assets/images/img/dashedBorder.webp" alt=""/>
          <div class="home-hero-slider-border">
            <client-only>
              <Slider
                :nav="false"
                :loop="true"
                :dots="false"
                :items="3.5"
                :center="true"
                :responsive="{
                0: {items: 1},
                768: { items: 2 },
                1024: { items: 3 },
                1280: { items: 3.5 },
              }"
              >
                <div class="flex items-center" v-for="item in 10">
                  <!--                <img loading="lazy"   style="width: 12px;height: 12px"   src="~/assets/images/img/sliderStar.webp" class="mr-6" alt="" />-->
                  <span
                    class="min-w-max block text-xl font-bold text-white uppercase farro-font"
                  >
                  contact us
                </span>
                  <img loading="lazy"
                       style="width: 12px; height: 12px"
                       src="~/assets/images/img/sliderStar.webp"
                       class="mx-6"
                       alt=""
                  />
                  <span
                    class="min-w-max block text-xl font-bold text-white uppercase farro-font home-hero-slider-text"
                  >
                  contact us
                </span>
                  <img loading="lazy"
                       style="width: 12px; height: 12px"
                       src="~/assets/images/img/sliderStar.webp"
                       class="ml-6"
                       alt=""
                  />
                </div>
              </Slider>
            </client-only>
          </div>
          <img loading="lazy" src="~/assets/images/img/dashedBorder.webp" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/elements/Button'
import Slider from '~/components/helper/Slider'
import {baseUrl} from "~/services/baseUrl";
import {getVideo} from "~/services/api/admin/video";
import Video from "~/pages/admin/video";

export default {
  components: {Video, Slider, Button},
  data: () => ({
    baseUrl,
    video: null,
    playVideo: false,
  }),
  mounted() {
    getVideo((data) => {
      if (!data.statusCode) {
        this.video = data;
      }
    })
  },
  methods: {
    handlePlayVideo() {
      if (this.video) {
        this.playVideo = !this.playVideo
        let video = this.$refs.video
        if (this.playVideo) {
          video.pause()
        } else {
          video.play();
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  &-text-img {
    right: -120px;
    bottom: 8px;
    width: 300px;
  }

  &-hero {
    margin-top: 148px;

    &-title-1 {
      font-size: 40px;
    }

    &-title-2 {
      font-size: 68px;
    }

    &-desc {
      line-height: 40px;
    }

    &-divider {
      min-width: 2px;
      width: 2px;
      height: 40px;
      background: var(--gray-bg);
      margin: 0 32px;
    }

    &-video {
      max-width: 50%;
      margin: 0 auto;

      video {
        max-width: 556px;
        max-height: 367px;
        width: 100%;
        object-fit: cover;
        border-radius: 48px;
      }

      &-img {
        max-width: 100%;
      }

      &-button {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        background: var(--gray-bg);
        padding: 8px;
        position: absolute;
        cursor: pointer;
        top: -32px;
        left: -32px;

        &-border {
          border: 1px dashed white;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        &:hover {
          path {
            fill: var(--primary-purple) !important;
          }
        }
      }

      &-descbox {
        border-radius: 100px;
        padding-left: 12px;
        background: var(--gray-bg);
        box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16),
        -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
        2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
        margin-top: 30px;

        &-images {
          width: 57px;
          max-width: 57px;

          img {
            position: relative;
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }

          img:nth-child(2) {
            left: -18px;
          }

          img:nth-child(3) {
            left: -36px;
          }

          img:nth-child(4) {
            left: -54px;
          }
        }

        &-button {
          cursor: pointer;
          min-width: max-content;
          font-size: 16px;
          font-weight: 700;
          color: white;
          padding: 15px 16px;
          border-radius: 100px;
          background: var(--primary-purple);
          box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.16),
          -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
          2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;

          &:hover {
            color: var(--gray-bg);
          }
        }
      }
    }

    &-slider-container {
      margin-top: 137px;
    }

    &-slider {
      background-color: var(--gray-bg);
      position: relative;
      z-index: 10;
      //height: 84px;
      padding: 16px 0;

      &-white-bg,
      &-purple-bg {
        height: 120px;
      }

      &-border {
        height: 100%;
        padding: 16px 0;
      }

      &-text {
        color: unset;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .home {
    &-hero {
      &-video {
        max-width: 100%;

        video {
          max-width: unset;
          max-height: 460px;
        }

        &-button {
          left: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .home {
    &-hero {
      &-title-1 {
        font-size: 24px;
      }

      &-title-2 {
        font-size: 32px;
      }

      &-video {

        &-button {
          width: 67px;
          height: 67px;
        }

        &-descbox {
          border-radius: 28px;
          flex-direction: column;
          padding: 8px;

          span {
            margin: 16px 0 18px 0;
          }

          &-button {
            width: 100%;
            text-align: center;
            padding: 8px 0;
          }
        }
      }
    }

    &-text-img {
      right: unset;
      left: -12px;
      width: 100%;
      bottom: -18px;
      max-width: 377px;
    }
  }
}
</style>
