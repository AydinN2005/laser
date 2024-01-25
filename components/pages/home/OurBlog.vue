<template>
  <div class="c-container blog">
    <div class="flex justify-between w-full items-end">
      <div class="flex flex-col">
        <div class="title-box">
          <span></span>
          our blog
        </div>
        <div class="relative">
          <div class="flex flex-col relative z-10">
            <h3 class="section-title-1">
              best and newst
            </h3>
            <h2 class="section-title-2">
              beauty blog in
              <span>
              2day laser & skin Care clinic
            </span>
            </h2>
          </div>
          <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="">
        </div>
      </div>
      <Button stroke="white" base="c-button-2" type="purple-button" title="see all" class="mb-4"/>
    </div>
    <div class="blog-slider mt-14">
      <Slider :items="3" :dots="true" :nav="false" :margin="24" :auto-play="true">
        <div class="blog-card" v-for="blog in blogs" :key="blog.id">
          <div class="relative">
            <div class="blog-card-bg-1 absolute"></div>
            <div class="blog-card-bg-2 absolute"></div>
            <img class="blog-card-img" :src="blog.img" alt="">
            <div class="blog-card-btn absolute">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <g filter="url(#filter0_ii_128_554)">
                  <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 45 5)" fill="#3D3948"
                        class="blog-card-btn-rect-1"/>
                </g>
                <rect class="blog-card-btn-rect-2" x="2.25" y="-2.25" width="44.5" height="44.5" rx="22.25"
                      transform="matrix(-1 0 0 1 49.5 5)"
                      stroke="#F8F3FF" stroke-width="4.5"/>
                <path d="M22 19L26.5858 23.5858C27.3668 24.3668 27.3668 25.6332 26.5858 26.4142L22 31" stroke="white"
                      stroke-width="2" stroke-linecap="round"/>
                <defs>
                  <filter id="filter0_ii_128_554" x="-0.5" y="-0.5" width="52" height="52" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-1" dy="-1"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_128_554"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="14"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_128_554" result="effect2_innerShadow_128_554"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div class="flex items-center mt-10">
            <span class="text-base font-bold blog-card-hash" v-for="hash in blog.hash" :key="hash">
              {{ hash }}
            </span>
          </div>
          <h2 class="text-xl font-bold mt-6 mb-5">
            {{ blog.title }}
          </h2>
          <p class="text-base font-semibold">
            {{ blog.desc }}
          </p>
        </div>
      </Slider>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";
import Slider from "~/components/helper/Slider";

export default {
  components: {Slider, Button},
  data: () => ({
    blogs: [
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.section-title-2 {
  span {
    font-size: 40px;
    font-weight: 600;
  }
}

.blog {
  &-card {
    cursor: pointer;

    &-bg-1, &-bg-2 {
      width: 100%;
      height: 100%;
      border-radius: 32px;
      opacity: 0;
    }

    &-bg-1 {
      background: var(--primary-purple);
      transform: rotate(3deg);
    }

    &-bg-2 {
      background: var(--box-bg);
      transform: rotate(-3deg);
    }

    &-img {
      position: relative;
      z-index: 10;
    }

    &-btn {
      bottom: -24px;
      right: 26px;
      z-index: 11;

      &-rect-2 {
        transition: all .3s;
      }
    }

    &:hover {
      .blog-card-bg-1, .blog-card-bg-2 {
        opacity: 1;
      }

      .blog-card-btn {
        &-rect-1 {
          fill: var(--primary-purple);
        }

        &-rect-2 {
          stroke: none;
        }
      }
    }

    &-hash {
      color: #AAA;
      margin-right: 16px;
      padding-right: 16px;
      border-right: 1px solid #AAA;

      &:last-child {
        border-right: unset;
        margin-right: 0;
      }
    }
  }
}
</style>
