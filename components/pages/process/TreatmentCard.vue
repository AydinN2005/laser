<template>
  <div class="relative card">
    <div class="card-bg"></div>
    <div class="card-inner w-full">
      <div class="card-inner-bg top-0 left-0"></div>
      <div class="relative z-10 flex items-center justify-between py-4 px-6">
        <div
          class="flex lg:items-center md:items-start items-center w-full justify-between card-inner-container md:flex-row flex-col">
          <div class="card-inner-icon flex items-center justify-between lg:mr-0 mr-6">
            <div class="card-inner-icon-border flex items-center justify-center">
          <span class="text-2xl font-bold text-white">
          no.{{ card.id }}
        </span>
            </div>
          </div>
          <div class="flex lg:items-center justify-between w-full lg:flex-row flex-col md:items-start items-center">
            <div class="flex items-center justify-between lg:w-max w-full">
              <h3 class="black-text card-inner-title lg:ml-6 ml-0">
                {{title}}
              </h3>
              <div class="lg:hidden md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                  <g filter="url(#filter0_dii_343_93)">
                    <circle cx="46" cy="40.0483" r="34" fill="#303030"/>
                  </g>
                  <path
                    d="M60.5 27.0483C60.5 26.2199 59.8284 25.5483 59 25.5483L45.5 25.5483C44.6716 25.5483 44 26.2199 44 27.0483C44 27.8768 44.6716 28.5483 45.5 28.5483L57.5 28.5483L57.5 40.5483C57.5 41.3768 58.1716 42.0483 59 42.0483C59.8284 42.0483 60.5 41.3768 60.5 40.5483L60.5 27.0483ZM34.0607 54.109L60.0607 28.109L57.9393 25.9877L31.9393 51.9877L34.0607 54.109Z"
                    fill="url(#paint0_linear_343_93)"/>
                  <defs>
                    <filter id="filter0_dii_343_93" x="0" y="0.0483398" width="92" height="92"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dy="6"/>
                      <feGaussianBlur stdDeviation="6"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix"
                                     values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.16 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_93"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_93" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dx="-1" dy="-1"/>
                      <feGaussianBlur stdDeviation="6"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_343_93"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                     result="hardAlpha"/>
                      <feOffset dx="2" dy="2"/>
                      <feGaussianBlur stdDeviation="7.5"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                      <feBlend mode="normal" in2="effect2_innerShadow_343_93" result="effect3_innerShadow_343_93"/>
                    </filter>
                    <linearGradient id="paint0_linear_343_93" x1="59.3535" y1="24.9018" x2="33.3535" y2="56.4018"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p class="text-sm font-bold gray-text card-desc">
              {{desc}}
            </p>
            <div class="md:hidden mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                <g filter="url(#filter0_dii_343_93)">
                  <circle cx="46" cy="40.0483" r="34" fill="#303030"/>
                </g>
                <path
                  d="M60.5 27.0483C60.5 26.2199 59.8284 25.5483 59 25.5483L45.5 25.5483C44.6716 25.5483 44 26.2199 44 27.0483C44 27.8768 44.6716 28.5483 45.5 28.5483L57.5 28.5483L57.5 40.5483C57.5 41.3768 58.1716 42.0483 59 42.0483C59.8284 42.0483 60.5 41.3768 60.5 40.5483L60.5 27.0483ZM34.0607 54.109L60.0607 28.109L57.9393 25.9877L31.9393 51.9877L34.0607 54.109Z"
                  fill="url(#paint0_linear_343_93)"/>
                <defs>
                  <filter id="filter0_dii_343_93" x="0" y="0.0483398" width="92" height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="6"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.16 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_343_93"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_343_93" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-1" dy="-1"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_343_93"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow_343_93" result="effect3_innerShadow_343_93"/>
                  </filter>
                  <linearGradient id="paint0_linear_343_93" x1="59.3535" y1="24.9018" x2="33.3535" y2="56.4018"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="lg:block hidden">
          <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dii_388_175)">
              <circle cx="46" cy="40.0483" r="34" fill="#303030"/>
            </g>
            <path
              d="M60.5 27.0483C60.5 26.2199 59.8284 25.5483 59 25.5483L45.5 25.5483C44.6716 25.5483 44 26.2199 44 27.0483C44 27.8768 44.6716 28.5483 45.5 28.5483L57.5 28.5483L57.5 40.5483C57.5 41.3768 58.1716 42.0483 59 42.0483C59.8284 42.0483 60.5 41.3768 60.5 40.5483L60.5 27.0483ZM34.0607 54.109L60.0607 28.109L57.9393 25.9877L31.9393 51.9877L34.0607 54.109Z"
              fill="url(#paint0_linear_388_175)"/>
            <defs>
              <filter id="filter0_dii_388_175" x="0" y="0.0483398" width="92" height="92" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="6"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.16 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_388_175"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_388_175" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dx="-1" dy="-1"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_388_175"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_388_175" result="effect3_innerShadow_388_175"/>
              </filter>
              <linearGradient id="paint0_linear_388_175" x1="59.3535" y1="24.9018" x2="33.3535" y2="56.4018"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card', 'title', 'desc'],
  data: () => ({}),
}
</script>

<style scoped lang="scss">
.card {
  &-bg {
    width: 100%;
    height: 100%;
    background: var(--primary-purple);
    border-radius: 48px;
    transform: rotate(-2deg);
    position: absolute;
    z-index: 1;
    opacity: 0;
  }

  &-inner {
    background: url("~/assets/images/img/treatmentDaily.webp") center center/cover;
    width: 100%;
    height: 100%;
    border-radius: 48px;
    cursor: pointer;
    position: relative;
    z-index: 8;

    &-container {
      max-width: 90%;
    }

    &-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 48px;
      background: white;
    }

    &-icon {
      box-shadow: -1px -1px 16px 0px rgba(0, 0, 0, 0.08) inset, 2px 2px 24px 0px rgba(255, 255, 255, 0.24) inset;
      filter: drop-shadow(0px 4px 16px rgba(48, 48, 48, 0.32));
      background: var(--input-border);
      border-radius: 50%;
      padding: 6px;
      width: 82px;
      height: 82px;

      &-border {
        background: rgba(255, 255, 255, 0.08);
        filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.12));
        width: 100%;
        height: 69px;
        border-radius: 50%;
        border: 1px dashed white;
        padding: 12px;

        span {
          display: block;
          transform: rotate(-20deg);
        }
      }
    }

    &-title {
      font-size: 32px;
      font-weight: 700;
    }
  }

  &:hover {
    circle {
      fill: white;
    }

    path {
      fill: #433F4E;
    }

    p {
      color: white;
    }

    h3 {
      color: white;
    }

    .card-inner-bg {
      background: rgba(48, 48, 48, 0.88);
      box-shadow: 3px 3px 27px 0px rgba(255, 255, 255, 0.18) inset, 0px 8px 24px 0px rgba(48, 48, 48, 0.18);
    }

    .card-inner-icon {
      background: var(--primary-purple);
    }

    .card-bg {
      opacity: 1 !important;
    }
  }

  &-desc {
    max-width: 420px;
  }
}

@media screen and (max-width: 1023px) {
  .card {
    &-inner {
      &-container {
        max-width: 100%;
      }
    }

    &-desc {
      max-width: 100%;
      margin-top: 16px;
    }
  }
}

@media screen and (max-width: 767px) {
  .card {
    &-inner {
      &-title {
        font-size: 21px;
        text-align: center;
        margin-top: 16px;
      }
    }

    &-desc {
      font-size: 13px;
      text-align: center;
    }
  }
}
</style>
