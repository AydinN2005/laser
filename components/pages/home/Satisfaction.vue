<template>
  <div class="c-container satis">
    <div class="flex flex-col items-center">
      <div class="title-box">
        <span></span>
        satisfaction
      </div>
      <div class="relative">
        <div class="flex flex-col items-center relative z-10">
          <h3 class="section-title-1 text-center">
            The satisfaction of my customers is
          </h3>
          <h2 class="section-title-2 text-center">
            the biggest symbol of your trust
          </h2>
        </div>
        <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="w-full absolute bottom-0" style="border-radius: 100px"
             alt="" />
      </div>
    </div>
    <div class="relative">
      <div class="absolute w-full">
        <div class="satis-slider relative w-full flex items-center justify-center">
          <div class="satis-slider-bg-1"></div>
          <div class="satis-slider-bg-2"></div>
          <div class="satis-slider-bg-3"></div>
        </div>
      </div>
      <div class="relative z-10">
        <Slider class="slider-container" :items="1" :margin="24" :dots="true" :nav="false" :auto-play="false">
          <div class="slider-container-inner flex flex-col items-center relative" v-for="item in cards" :key="item.id">
            <img loading="lazy"   :src="item.img" class="absolute top-0 left-0" alt="" />
            <div class="flex flex-col items-center relative z-10  ">
              <strong class="font-bold text-xl md:text-2xl text-white">
                {{ item.title }}
              </strong>
              <p class="font-bold text-sm md:text-base mt-4 satis-slider-card-desc text-center text-white">
                <span>“</span>
                {{item.desc}}
                <span>”</span>
              </p>
            </div>
            <img loading="lazy"   :src="item.icon" class="absolute satis-slider-card-icon" alt="" />
            <div class="satis-slider-card-vote flex items-center">
              <div v-for="item in 5" :key="item">
                <svg v-if="item <= vote" @click="handleVote(item)" class="svg-1" xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16"
                     viewBox="0 0 16 16"
                     fill="none">
                  <g clip-path="url(#clip0_128_682)">
                    <g filter="url(#filter0_d_128_682)">
                      <path
                        d="M11.6667 1.27783C10.916 1.28951 10.1817 1.49907 9.5379 1.88535C8.8941 2.27162 8.36363 2.82094 8.00005 3.47783C7.63648 2.82094 7.10601 2.27162 6.46221 1.88535C5.81841 1.49907 5.08409 1.28951 4.33339 1.27783C3.13668 1.32983 2.00919 1.85333 1.19724 2.73399C0.385293 3.61464 -0.0451135 4.78085 5.35741e-05 5.97783C5.35741e-05 9.00917 3.19072 12.3198 5.86672 14.5645C6.4642 15.0666 7.21962 15.3418 8.00005 15.3418C8.78048 15.3418 9.53591 15.0666 10.1334 14.5645C12.8094 12.3198 16.0001 9.00917 16.0001 5.97783C16.0452 4.78085 15.6148 3.61464 14.8029 2.73399C13.9909 1.85333 12.8634 1.32983 11.6667 1.27783Z"
                        fill="white"/>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_128_682" x="-16.0032" y="-14.7222" width="48.0065" height="46.064"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset/>
                      <feGaussianBlur stdDeviation="8"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_682"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_682" result="shape"/>
                    </filter>
                    <clipPath id="clip0_128_682">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg v-if="item > vote" @click="handleVote(item)" class="svg-2" xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16"
                     viewBox="0 0 16 16"
                     fill="none">
                  <g clip-path="url(#clip0_128_674)">
                    <path
                      d="M11.6667 1.27783C10.916 1.28951 10.1817 1.49907 9.5379 1.88535C8.8941 2.27162 8.36363 2.82094 8.00005 3.47783C7.63648 2.82094 7.10601 2.27162 6.46221 1.88535C5.81841 1.49907 5.08409 1.28951 4.33339 1.27783C3.13668 1.32983 2.00919 1.85333 1.19724 2.73399C0.385293 3.61464 -0.0451135 4.78085 5.35741e-05 5.97783C5.35741e-05 9.00917 3.19072 12.3198 5.86672 14.5645C6.4642 15.0666 7.21962 15.3418 8.00005 15.3418C8.78048 15.3418 9.53591 15.0666 10.1334 14.5645C12.8094 12.3198 16.0001 9.00917 16.0001 5.97783C16.0452 4.78085 15.6148 3.61464 14.8029 2.73399C13.9909 1.85333 12.8634 1.32983 11.6667 1.27783ZM9.27672 13.5445C8.91938 13.8454 8.46722 14.0104 8.00005 14.0104C7.53289 14.0104 7.08073 13.8454 6.72339 13.5445C3.29805 10.6705 1.33339 7.91317 1.33339 5.97783C1.28781 5.13431 1.57763 4.30699 2.13963 3.6763C2.70163 3.04561 3.49021 2.66273 4.33339 2.61117C5.17656 2.66273 5.96515 3.04561 6.52714 3.6763C7.08914 4.30699 7.37896 5.13431 7.33339 5.97783C7.33339 6.15464 7.40363 6.32421 7.52865 6.44924C7.65367 6.57426 7.82324 6.6445 8.00005 6.6445C8.17686 6.6445 8.34643 6.57426 8.47146 6.44924C8.59648 6.32421 8.66672 6.15464 8.66672 5.97783C8.62115 5.13431 8.91096 4.30699 9.47296 3.6763C10.035 3.04561 10.8235 2.66273 11.6667 2.61117C12.5099 2.66273 13.2985 3.04561 13.8605 3.6763C14.4225 4.30699 14.7123 5.13431 14.6667 5.97783C14.6667 7.91317 12.7021 10.6705 9.27672 13.5418V13.5445Z"
                      fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_128_674">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/helper/Slider";

export default {
  components: {Slider},
  data: () => ({
    cards: [
      {
        id: 1,
        title: "Arthur",
        desc: "“I am extremely satisfied with the services provided by your company. From the very first interaction with your team, I could tell that customer satisfaction is a top priority for you. The level of professionalism and attention to detail shown by your staff is truly commendable.”",
        img: require('~/assets/images/img/sliderCardSatis.webp'),
        icon: require('~/assets/images/img/sliderCardIcon.webp')
      },
      {
        id: 2,
        title: "Jack",
        desc: "“No matter what issue or inquiry I may have, your team always goes above and beyond to ensure that it is resolved in a timely and efficient manner. I have never encountered such prompt and helpful customer service before. It is clear that your company values its customers and takes great pride in delivering high-quality services.”",
        img: require('~/assets/images/img/sliderCardSatis.webp'),
        icon: require('~/assets/images/img/sliderCardIcon.webp')
      },
      {
        id: 3,
        title: "Harry",
        desc: "“Moreover, I am also impressed by the wide range of services that your company offers. From technical support to customer assistance, your company covers all aspects of customer needs. This has made my experience with your company seamless and hassle-free.”",
        img: require('~/assets/images/img/sliderCardSatis.webp'),
        icon: require('~/assets/images/img/sliderCardIcon.webp')
      },
      {
        id: 4,
        title: "Avery",
        desc: "“Furthermore, the services offered by your company are top-notch. Whether it is in terms of product quality or service delivery, I have never been disappointed. Your company constantly strives to improve and innovate, which is evident in the exceptional services that you provide.”",
        img: require('~/assets/images/img/sliderCardSatis.webp'),
        icon: require('~/assets/images/img/sliderCardIcon.webp')
      },
    ],
    vote: 3,
  }),
  methods: {
    handleVote(id) {
      // this.vote = id;
    }
  }
}
</script>

<style scoped lang="scss">
.satis {
  &-slider-bg-1, &-slider-bg-2, &-slider-bg-3 {
    background: white;
    border-radius: 32px;
    position: absolute;
  }

  &-slider-bg-1 {
    height: 217px;
    width: 87%;
  }

  &-slider-bg-2 {
    height: 169px;
    width: 93%;
  }

  &-slider-bg-3 {
    height: 117px;
    width: 100%;
  }

  &-slider {
    margin-top: 182px;

    &-card {

      &-bg {
        width: 100%;
        height: 100%;
        border-radius: 32px;
        border: 2px solid var(--primary-purple);
        background: rgba(61, 57, 72, 0.56);
        box-shadow: 0px 8px 20px 0px rgba(154, 119, 255, 0.12);
        position: absolute;
        top: 0;
        left: 0;
      }

      &-desc {
        line-height: unset !important;
        span {
          color: var(--primary-purple);
        }
      }

      &-icon {
        top: -16px;
        width: 88px !important;
        height: 88px !important;
        border-radius: 50%;
      }

      &-vote {
        position: absolute;
        bottom: -12px;
        padding: 12px 24px;
        border-radius: 100px;
        background: linear-gradient(90deg, #9A77FF 0%, #E5DAFF 100%);
        box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

        div {
          margin-right: 12px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .slider-container {
    width: 85%;
    max-width: 888px;
    margin: 0 auto;
    padding-top: 15px;

    &-inner {
      padding: 63px 56px 43px 56px;
      max-width: 888px;
      height: 265px;
      border-radius: 37px;
      border-bottom-right-radius: 50px;
    }
  }
}

@media screen and (max-width: 1023px) {
  .satis {
    .section-title-1 {
      font-size: 24px;
    }

    .section-title-2 {
      font-size: 36px;
    }

    .slider-container {
      &-inner {
        height: 300px;

        img {
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .satis {
    .section-title-1, .section-title-2 {
      font-size: 16px;
    }
    .slider-container{
      top: 20px;
      width: 100%;
      &-inner{
        padding: 63px 16px 0 16px;
        height: 250px;
      }
    }
    &-slider{
      &-card{
        &-vote{
          bottom: 10px;
        }
        &-desc{
          text-overflow: ellipsis;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3;
          -webkit-box-orient: vertical;
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.slider-container {
  .owl-stage-outer {
    padding: 24px 0;
  }
}
</style>
