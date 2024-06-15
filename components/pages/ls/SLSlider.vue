<template>
  <div class="ls-slider">
    <Slider :margin="24" :nav="false" :dots="true" :auto-play="false" :loop="false" :items="1">
      <div class="relative">
        <div class="ls-slider-overlay"></div>
        <img loading="lazy"     src="~/assets/images/img/loginWoman.webp" class="absolute top-0 left-0 h-full w-full z-10 ls-slider-img"
             alt="" />
        <div class="ls-slider-inner">
          <div class="flex flex-col relative z-50 p-6 w-full h-full justify-between ls-slider-data">
            <div class="p-4 bg-white ls-slider-icon-box">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1180_3713)">
                  <path
                    d="M26.52 12.8665C26.04 12.3065 26.0934 11.4665 26.6534 10.9865C27.2134 10.5065 28.0534 10.5598 28.5334 11.1198C29.96 12.7732 31 14.7332 31.6267 16.9598C31.8267 17.6665 31.4134 18.3998 30.7067 18.5998C30.5867 18.6398 30.4667 18.6532 30.3467 18.6532C29.76 18.6532 29.2267 18.2665 29.0667 17.6798C28.5467 15.8265 27.68 14.2132 26.52 12.8532V12.8665ZM31.9334 23.0798C30.12 28.5198 26.1867 29.3198 24 29.3198C22.12 29.3198 20.48 28.4932 19.12 27.2532C17.5467 28.4932 15.6134 29.3198 13.3334 29.3198C11.0534 29.3198 9.04004 28.0532 7.16004 26.1198C5.49338 27.7198 2.72004 29.3198 1.33338 29.3198C0.720044 29.3198 0.160044 28.8798 0.0267104 28.2532C-0.119956 27.5332 0.34671 26.8265 1.06671 26.6798C2.60004 26.3598 4.08004 25.3998 5.42671 24.0665C2.18671 19.7065 4.37502e-05 13.6532 4.37502e-05 9.99984C4.37502e-05 6.09317 3.38671 2.6665 7.24004 2.6665C11.0934 2.6665 14.6667 6.15984 14.6667 9.99984C14.6667 13.5865 12.4667 19.7198 8.94671 24.1465C10.3867 25.6798 11.9067 26.6665 13.3334 26.6665C14.8934 26.6665 16.2534 26.1065 17.36 25.2532C15.6134 22.7732 14.6667 19.7598 14.6667 17.9465C14.6667 15.4932 16.8534 13.3465 19.3467 13.3465C21.84 13.3465 24 15.4932 24 17.9465C24 19.9598 22.9734 22.9732 21.0267 25.3865C21.92 26.1732 22.92 26.6798 24 26.6798C26.6 26.6798 28.4267 25.1865 29.4 22.2532C29.6267 21.5598 30.3867 21.1732 31.0934 21.4132C31.7867 21.6398 32.1734 22.3998 31.9334 23.1065V23.0798ZM12 9.99984C12 7.59984 9.68005 5.33317 7.24004 5.33317C4.80004 5.33317 2.66671 7.55984 2.66671 9.99984C2.66671 13.1865 4.62671 18.2665 7.21338 21.9865C10.0667 18.1465 12 12.9332 12 9.99984ZM19.2667 23.2798C20.6267 21.4132 21.3334 19.2132 21.3334 17.9465C21.3334 16.9732 20.3467 16.0132 19.3467 16.0132C18.3467 16.0132 17.3334 16.9865 17.3334 17.9465C17.3334 19.2132 18.0667 21.4132 19.2667 23.2798Z"
                    fill="#3D3948"/>
                </g>
                <defs>
                  <clipPath id="clip0_1180_3713">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col">
              <div class="text-xs md:text-base text-white ls-slider-title">
                2daylaser & skin care clinic
              </div>
              <p class="text-base md:text-2xl text-white">
                “ 2daylaser & skin care clinic is a premier destination for all your skincare needs. Our clinic
                offers a wide range of services including laser treatments, and injectables,
                all tailored to meet your specific skincare goals.”
              </p>
              <div class="flex items-center ls-slider-bottom-text text-xs md:text-base text-white">
                <span></span>
                zara gulti - Product Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</template>

<script>
import Slider from "~/components/helper/Slider";

export default {
  components: {Slider}
}
</script>

<style scoped lang="scss">
.ls-slider {
  &-inner {
    min-height: 720px;
    height: 100%;
    padding-bottom: 72px;
  }

  &-data {
    min-height: 680px;
  }

  &-overlay {
    background: rgb(61, 57, 72);
    background: linear-gradient(180deg, rgba(61, 57, 72, 0) 0%, rgba(61, 57, 72, 1) 100%);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    border-radius: 48px;
  }

  &-img {
    height: 100%;
    border-radius: 48px;
  }

  &-icon-box {
    border-radius: 20px;
    width: max-content;
  }

  &-title {
    background: rgba(256, 256, 256, 36%);
    border-radius: 20px;
    padding: 12px 24px;
    border: 1px solid white;
    margin-bottom: 24px;
    width: max-content;
  }

  &-bottom-text {
    margin-top: 24px;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: white;
      margin-right: 12px;
    }
  }
}

@media screen and (max-width: 767px) {
  .ls-slider {
    &-inner {
      min-height: 560px;
    }

    &-data {
      min-height: 520px;
      padding: 16px;
    }
  }
}
</style>
<style lang="scss">
.ls-slider {
  .owl-stage-outer {
    padding: 0 !important;
  }

  .owl-dots {
    position: absolute;
    bottom: 24px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    padding: 0 24px;

    .owl-dot {
      width: 100% !important;
      margin-right: 16px;

      span {
        width: 100% !important;
        background: rgba(256, 256, 256, 80%) !important;
        height: 8px !important;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .active {
      span {
        background: #FA5770 !important;
      }
    }
  }
}
</style>
