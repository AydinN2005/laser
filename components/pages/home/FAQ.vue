<template>
  <div class="c-container faq">
    <div class="flex flex-col items-center">
      <div class="title-box">
        <span></span>
        F & Q
      </div>
      <div class="relative">
        <div class="flex flex-col items-center relative z-10">
          <h3 class="section-title-1 text-center">
            Frequently asked questions that
          </h3>
          <h2 class="section-title-2 text-center">
            customers have form us
          </h2>
        </div>
        <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
             alt="">
      </div>
      <div class="mt-14 flex items-center w-full">
        <div class="grid grid-cols-1 gap-6 w-full">
          <div class="faq-card flex items-center relative" v-for="item in 6" :key="item">
            <span class="faq-card-circle"></span>
            <strong class="text-base font-bold">
              how pricing do you have ?
            </strong>
            <div class="faq-card-button flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <g filter="url(#filter0_ii_128_505)">
                  <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 45 5)" fill="#9A77FF"/>
                </g>
                <rect class="faq-card-button-rect" x="2.25" y="-2.25" width="44.5" height="44.5" rx="22.25"
                      transform="matrix(-1 0 0 1 49.5 5)"
                      stroke="#F8F3FF" stroke-width="4.5"/>
                <path d="M22 19L26.5858 23.5858C27.3668 24.3668 27.3668 25.6332 26.5858 26.4142L22 31" stroke="white"
                      stroke-width="2" stroke-linecap="round"/>
                <defs>
                  <filter id="filter0_ii_128_505" x="-0.5" y="-0.5" width="52" height="52" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-1" dy="-1"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_128_505"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="14"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_128_505" result="effect2_innerShadow_128_505"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col faq-right">
          <img src="~/assets/images/img/faqImg.png" alt="">
          <h2 class="text-2xl font-bold mt-6">
            how pricing do you have ?
          </h2>
          <p class="mt-4 text-base font-semibold gray-text">
            It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives
            you long lasting results.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.faq {
  &-card {
    width: 100%;
    padding: 16px;
    border: 1px solid var(--gray-bg);
    border-radius: 100px;
    cursor: pointer;

    &-circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #3D3948;
      filter: drop-shadow(0px 4px 8px rgba(61, 57, 72, 0.16));
      margin-right: 12px;
    }

    &-button {
      position: absolute;
      right: -30px;
      top: 0px;
      padding: 4px;
      border-radius: 50%;

      svg {
        fill: var(--gray-bg);
      }

      &-rect {
        stroke: var(--primary-bg);
      }
    }

    &:hover {
      background: var(--gray-bg);
      box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      border-color: unset;

      strong {
        color: white;
      }

      .faq-card-circle {
        background: white !important;
      }

      .faq-card-button {
        svg {
          fill: var(--primary-purple);
        }

        .faq-card-button-rect {
          stroke: white;
        }
      }
    }
  }

  &-right {
    margin-left: 80px;
  }
}
</style>
