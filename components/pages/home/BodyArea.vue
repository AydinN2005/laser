<template>
  <div class="c-container flex flex-col body">
    <div class="flex flex-col lg:items-start items-center">
      <div class="title-box">
        <span></span>
        body area
      </div>
      <div class="flex lg:flex-row flex-col items-center lg:items-end w-full justify-between">
        <div class="flex flex-col lg:items-start items-center relative w-max">
          <h3 class="section-title-1">
            we defuzz
          </h3>
          <h2 class="section-title-2">
            your all of body area
          </h2>
          <img loading="lazy"     src="~/assets/images/img/whyUsTextBg.webp" class="absolute w-full -z-10 bottom-0" alt="" />
        </div>
        <div class="flex items-center mb-3 lg:mt-0 mt-9 md:w-max w-full">
          <Button type="purple-button" title="contact us" base="c-button-2" stroke="white"
                  class="mr-6 md:w-max w-full"/>
          <Button type="vacant-button" title="about us" base="c-button-2" stroke="#3D3948" class="md:w-max w-full"/>
        </div>
      </div>
      <div class="body-cards grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 w-full">
        <nuxt-link v-for="item in areas" :key="item.id" :to="`/bodyArea/${item.id}`">
          <div class="relative body-card-container">
            <div class="body-card-bg"></div>
            <div class="flex flex-col items-center body-card">
              <div class="body-card-img absolute">
                <div class="relative body-card-img-inner flex items-center justify-center">
                  <img loading="lazy"     src="~/assets/images/img/bodyCardBg.webp" class="absolute w-full h-full top-0 left-0" alt="" />
                  <img loading="lazy"   :src="`${baseUrl}/${item.image}`" alt="" class=" relative z-10" />
                </div>
              </div>
              <div class="flex items-center">
                <img loading="lazy"     src="~/assets/images/icons/Star.svg" alt="" />
                <span class="text-sm md:text-xl font-bold mx-3 body-card-title">
              {{ item.name }}
            </span>
                <img loading="lazy"     src="~/assets/images/icons/Star.svg" alt="" />
              </div>
              <button class="body-card-btn absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                  <g filter="url(#filter0_dii_128_318)">
                    <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 52 4.23877)" fill="#3D3948"/>
                  </g>
                  <path d="M29 18.2388L33.5858 22.8246C34.3668 23.6056 34.3668 24.8719 33.5858 25.653L29 30.2388"
                        stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <defs>
                    <filter id="filter0_dii_128_318" x="0" y="0.23877" width="64" height="64"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dy="8"/>
                      <feGaussianBlur stdDeviation="6"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix"
                                     values="0 0 0 0 0.239216 0 0 0 0 0.223529 0 0 0 0 0.282353 0 0 0 0.24 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_318"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_318" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dx="-1" dy="-1"/>
                      <feGaussianBlur stdDeviation="6"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_128_318"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dx="2" dy="2"/>
                      <feGaussianBlur stdDeviation="14"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                      <feBlend mode="normal" in2="effect2_innerShadow_128_318" result="effect3_innerShadow_128_318"/>
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";
import {getAllBodyArea} from "~/services/api/admin/bodyArea"
import {baseUrl} from "~/services/baseUrl";

export default {
  components: {Button},
  data: () => ({
    cards: [
      {
        id: 1,
        img: require("~/assets/images/img/bodyCard1.webp"),
        title: "face removal",
      },
      {
        id: 2,
        img: require("~/assets/images/img/bodyCard2.webp"),
        title: "lip & chin",
      },
      {
        id: 3,
        img: require("~/assets/images/img/bodyCard3.webp"),
        title: "bikini",
      },
      {
        id: 4,
        img: require("~/assets/images/img/bodyCard4.webp"),
        title: "mens",
      },
      {
        id: 5,
        img: require("~/assets/images/img/bodyCard5.webp"),
        title: "brazilian",
      },
      {
        id: 6,
        img: require("~/assets/images/img/bodyCard6.webp"),
        title: "legs",
      },
      {
        id: 7,
        img: require("~/assets/images/img/bodyCard7.webp"),
        title: "underarm",
      },
      {
        id: 8,
        img: require("~/assets/images/img/bodyCard8.webp"),
        title: "other area",
      },
    ],
    areas: [],
    baseUrl
  }),
  mounted() {
    getAllBodyArea((data) => {
      this.areas = data;
    })
  }
}
</script>

<style scoped lang="scss">
.body {
  &-cards {
    margin-top: 122px;
    row-gap: 142px;
  }

  &-card {
    border-radius: 32px;
    background: #F6F0FF;
    position: relative;
    padding: 58px 0 35px 0;
    cursor: pointer;

    &-img {
      top: -62px;

      &-inner {
        width: 96px;
        height: 96px;
      }
    }

    &-btn {
      bottom: -38px;
    }

    &-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--primary-purple);
      border: 1px solid var(--primary-purple);
      border-radius: 32px;
      opacity: 0;
    }

    &-container {
      cursor: pointer;

      &:hover .body-card-bg {
        opacity: 1;
        transform: rotate(-3deg);
      }

      &:hover {
        rect {
          fill: var(--primary-purple);
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .section-title-2 {
    font-size: 56px;
  }
}

@media screen and (max-width: 767px) {
  .section-title-2 {
    font-size: 24px;
  }
  .body {
    &-card {
      &-title {
        //text-overflow: ellipsis;
        //overflow: hidden;
        //text-overflow: ellipsis;
        //display: -webkit-box;
        //-webkit-line-clamp: 1; /* number of lines to show */
        //line-clamp: 1;
        //-webkit-box-orient: vertical;
        //max-width: 90px;

      }
    }
  }
}
</style>
