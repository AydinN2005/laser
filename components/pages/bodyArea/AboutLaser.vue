<template>
  <div class="c-container about">
    <div class="grid grid-cols-12 gap-5 about-container">
      <div class="about-left col-start-1 col-end-6">
        <div class="flex flex-col lg:items-start items-center w-full">
          <div class="title-box">
            <span></span>
            about laser {{ name }}
          </div>
          <div class="relative lg:w-full w-max">
            <div class="flex flex-col lg:items-start items-center relative z-10 w-full">
              <h3 class="section-title-1">laser hair removal</h3>
              <h2 class="section-title-2">{{ data?.title }}</h2>
            </div>
            <img loading="lazy"
                src="~/assets/images/img/whyusTextBg.webp"
              class="w-full absolute bottom-0 left-0"
              style="border-radius: 100px"
              alt=""
            />
          </div>
          <p v-html="data?.description" class="mt-6 text-sm md:text-base font-bold gray-text lg:text-left text-center">
<!--            {{ data?.description }}-->
          </p>
        </div>
      </div>
      <div class="col-start-6 col-end-13 about-right">
        <div class="flex justify-between h-full about-right-inner">
          <!--          <img loading="lazy"     src="~/assets/images/img/bodyAreaLegs.webp" class="w-full womans" alt="" />-->
          <div v-if="data" class="flex flex-col woman-images-container" style="max-height: 480px">
            <img loading="lazy"   v-for="item in data.images" :src="`${baseUrl}/${item.image}`" class="woman-images" alt="" />
          </div>
          <div
            class="about-desc flex flex-col items-end justify-between h-full"
          >
            <div class="flex flex-col">
              <p class="text-sm font-bold mb-6">
                Schedule your free consultation to learn more about laser hair
                removal today!
              </p>
              <Button
                base="c-button-2"
                stroke="white"
                title="contact us"
                type="purple-button"
                class="w-max"
              />
            </div>
            <div class="flex flex-col">
              <h3 class="about-bold-text kalameh-font">+25.2k</h3>
              <div class="flex items-center mb-4">
                <div class="about-purple-box mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_408_61)">
                      <path
                        d="M9 0C6.61384 0.00258081 4.32616 0.951621 2.63889 2.63889C0.951621 4.32616 0.00258081 6.61384 0 9C0.45 20.925 17.55 20.9197 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0ZM9 16.5C7.01155 16.4978 5.10516 15.7069 3.69911 14.3009C2.29306 12.8948 1.50218 10.9885 1.5 9C1.875 -0.936 16.125 -0.933 16.5 9C16.4978 10.9885 15.7069 12.8948 14.3009 14.3009C12.8948 15.7069 10.9885 16.4978 9 16.5ZM13.3815 11.6565C12.9408 12.4334 12.3046 13.0815 11.536 13.5365C10.7673 13.9914 9.89309 14.2374 9 14.25C8.10629 14.2375 7.23136 13.9916 6.46201 13.5367C5.69265 13.0818 5.05558 12.4336 4.614 11.6565C4.53426 11.532 4.49308 11.3868 4.49563 11.239C4.49817 11.0912 4.54434 10.9475 4.62832 10.8258C4.7123 10.7042 4.83035 10.6101 4.96764 10.5553C5.10494 10.5005 5.25535 10.4876 5.4 10.518C6.55326 10.9525 7.76863 11.1996 9 11.25C10.2293 11.199 11.4426 10.9519 12.594 10.518C12.7388 10.4872 12.8894 10.4999 13.027 10.5545C13.1645 10.6091 13.2828 10.7032 13.367 10.8249C13.4512 10.9466 13.4975 11.0905 13.5001 11.2385C13.5027 11.3865 13.4614 11.5319 13.3815 11.6565ZM14.25 6.4875C14.25 7.4625 12.981 8.601 12.3488 9.108C12.2498 9.18737 12.1268 9.23062 12 9.23062C11.8732 9.23062 11.7502 9.18737 11.6512 9.108C7.37625 5.89875 11.6955 3.77625 12 6.4875C12 6.18913 12.1185 5.90298 12.3295 5.692C12.5405 5.48103 12.8266 5.3625 13.125 5.3625C13.4234 5.3625 13.7095 5.48103 13.9205 5.692C14.1315 5.90298 14.25 6.18913 14.25 6.4875ZM3.75 6.4875C3.75 6.18913 3.86853 5.90298 4.0795 5.692C4.29048 5.48103 4.57663 5.3625 4.875 5.3625C5.17337 5.3625 5.45952 5.48103 5.6705 5.692C5.88147 5.90298 6 6.18913 6 6.4875C6.3075 3.77475 10.6252 5.9025 6.34875 9.108C6.24984 9.18737 6.12682 9.23062 6 9.23062C5.87318 9.23062 5.75016 9.18737 5.65125 9.108C5.019 8.601 3.75 7.461 3.75 6.4875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_408_61">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span class="text-sm font-bold"> total customers </span>
              </div>
              <div class="flex items-center about-boxes">
                <div class="about-purple-box"></div>
                <div class="about-purple-box-2"></div>
                <div class="about-purple-box-2"></div>
                <div class="about-purple-box-2"></div>
                <div class="about-purple-box-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/elements/Button'
import {baseUrl} from "~/services/baseUrl";

export default {
  components: {Button},
  props: ['data', 'name'],
  data: () => ({
    baseUrl
  }),
}
</script>

<style scoped lang="scss">
.about {
  &-container {
    max-height: 520px;
  }

  &-bold-text {
    font-size: 64px;
    font-weight: 900;
    color: var(--input-border);
  }

  &-purple-box,
  &-purple-box-2 {
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--primary-purple);
  }

  &-purple-box-2 {
    border: 1px solid white;
    box-shadow: -1px -1px 12px 0px rgba(0, 0, 0, 0.08) inset,
    2px 2px 8px 0px rgba(255, 255, 255, 0.12) inset;
    filter: drop-shadow(0px 6px 12px rgba(154, 119, 255, 0.24));
  }

  &-boxes {
    div {
      position: relative;

      &:nth-child(2) {
        left: -16px;
      }

      &:nth-child(3) {
        left: -32px;
      }

      &:nth-child(4) {
        left: -48px;
      }

      &:nth-child(5) {
        left: -64px;
      }
    }
  }

  &-desc {
    max-width: 282px;
    max-height: 460px;
  }
}

.woman-images {
  max-width: 200px;
  max-height: 300px;
  position: relative;

  &:nth-child(2) {
    top: -150px;
    left: 50px;
  }

  &:nth-child(3) {
    top: -330px;
    left: 100px;
  }
}

@media screen and (max-width: 1280px) {
  .about {
    &-container {
      max-height: 547px;
    }

    &-right {
      grid-column-start: 8;

      &-inner {
        flex-direction: column-reverse;
      }
    }

    &-left {
      grid-column-end: 8;
    }

    &-desc {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 40px;

      div {
        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .about {
    &-container {
      display: flex;
      flex-direction: column;
      max-height: unset;
    }

    &-desc {
      flex-direction: column;
      max-width: 100%;
      height: 634px;
      margin-bottom: unset;
      margin-top: 48px;
      align-items: flex-start;
      width: 100%;

      p {
        max-width: 227px;
      }

      div {
        &:first-child {
          margin-right: 0;
          align-self: flex-end;
        }
      }

      max-height: unset;
    }

    .womans {
      position: absolute;
      width: 65%;
      top: 40px;
    }

    &-right {
      width: 100%;

      &-inner {
        position: relative;
        align-items: center;
      }
    }
  }
  .woman-images {
    &-container {
      position: absolute;
      top: 10%;
      left: 30%;
    }
  }
}

@media screen and (max-width: 767px) {
  .about {
    &-desc {
      height: 500px;

      p {
        max-width: 140px;
        font-size: 10px;
        margin-bottom: 16px;
      }
    }

    &-bold-text {
      font-size: 40px;
    }

    .womans {
      width: 85%;
      top: 95px;
      left: 0;
    }
  }
  .woman-images {
    max-width: 140px;

    &:nth-child(2) {
      top: -75px;
      left: 29px;
    }

    &:nth-child(3) {
      top: -200px;
      left: 80px;
    }

    &-container {
      left: unset;
      right: 45%;
    }
  }
}
</style>
