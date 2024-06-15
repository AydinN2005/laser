<template>
  <div class="c-container hero">
    <div class="relative">
      <div class="hero-bg-1"></div>
      <div class="hero-bg-2"></div>
      <div class="w-full flex items-center justify-between hero-box lg:flex-row flex-col relative z-10">
        <div class="flex flex-col w-full">
          <div class="title-box lg:mx-0 mx-auto">
            <span></span>
            FAQs
          </div>
          <div class="relative lg:mx-0 mx-auto w-max">
            <div class="flex flex-col lg:items-start items-center relative z-10">
              <h3 class="section-title-1">frequently asked questions</h3>
              <h2 class="section-title-2">from our clients</h2>
            </div>
            <img loading="lazy"
                src="~/assets/images/img/whyusTextBg.webp"
              class="w-full absolute bottom-0"
              style="border-radius: 100px"
              alt=""
            />
          </div>
          <p class="gray-text text-base font-bold mt-6 mb-11 md:text-left text-center">
            If you have any questions, you can ask :
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <text-input
              :title="'full name'"
              :placeHolder="'your full name'"
              :type="'text'"
              :bg="'white'"
            />
            <text-input
              :title="'email'"
              :placeHolder="'your email'"
              :type="'email'"
              :bg="'white'"
            />
            <div
              class="col-start-1 md:col-end-3 relative w-full flex items-center hero-input"
            >
              <div
                class="hero-input-icon absolute flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M0.792893 16.7929C0.402369 17.1834 0.402369 17.8166 0.792893 18.2071C1.18342 18.5976 1.81658 18.5976 2.20711 18.2071L0.792893 16.7929ZM18.5 1.5C18.5 0.947716 18.0523 0.5 17.5 0.5L8.5 0.500001C7.94771 0.5 7.5 0.947715 7.5 1.5C7.5 2.05229 7.94772 2.5 8.5 2.5L16.5 2.5L16.5 10.5C16.5 11.0523 16.9477 11.5 17.5 11.5C18.0523 11.5 18.5 11.0523 18.5 10.5L18.5 1.5ZM2.20711 18.2071L18.2071 2.20711L16.7929 0.792894L0.792893 16.7929L2.20711 18.2071Z"
                    fill="url(#paint0_linear_432_522)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_432_522"
                      x1="17.8559"
                      y1="1.85315"
                      x2="1.8559"
                      y2="17.8532"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <text-input
                :title="'your message'"
                :placeHolder="'your message'"
                :type="'text'"
                :bg="'white'"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <img loading="lazy"
          class="hero-img"
            src="~/assets/images/img/faqBg.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '~/components/elements/TextInput.vue'

export default {
  components: {TextInput},
}
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 148px;

  &-bg-1, &-bg-2 {
    position: absolute;
    width: 100%;
    height: 103%;
    //right: 20px;
    top: -15px;
    border-radius: 88px;
  }

  &-bg-1 {
    background: #F9F6FF;
    transform: rotate(-1deg);
  }

  &-bg-2 {
    background: #F3ECFF;
    transform: rotate(-2deg);
  }

  &-box {
    background: #ffffff;
    border-radius: 88px;
    padding: 61px 42px 32px 65px;
  }

  &-input {
    &-icon {
      background: var(--input-border);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      z-index: 10;
      right: -20px;
      cursor: pointer;
    }

    &:hover {
      .hero-input-icon {
        background: var(--primary-purple);
      }
    }
  }

  &-img {
    width: 100%;
    max-height: 523px;
  }
}

@media screen and (max-width: 1023px) {
  .hero {
    &-box {
      padding: 32px;
    }

    &-img {
      width: unset;
      margin-top: 40px;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero {
    margin-top: 100px;

    &-bg-1, &-bg-2 {
      display: none;
    }

    &-box {
      border-radius: 48px;
    }
  }
}
</style>
