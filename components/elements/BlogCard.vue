<template>
  <nuxt-link :to="`/singleBlog/${blog.id}`">
    <div class="blog-card">
      <div class="relative">
        <div class="blog-card-bg-1 absolute"></div>
        <div class="blog-card-bg-2 absolute"></div>
        <img loading="lazy"   class="blog-card-img" :src="`${baseUrl}/${blog.image}`" alt="" />
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
            <span class="text-base font-bold blog-card-hash" v-if="blog.category">
              {{ blog.category.parent ? `#${blog.category.parent.name} |` : '' }} {{ `#${blog.category.name}` }}
            </span>
      </div>
      <h2 class="text-xl font-bold mt-6 mb-5">
        {{ blog.title }}
      </h2>
      <p v-html="blog.description" class="text-base font-semibold">
<!--        {{ blog.description }}-->
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import {baseUrl} from "~/services/baseUrl";

export default {
  props: ['blog'],
  data: () => ({
    baseUrl
  })
}
</script>

<style scoped lang="scss">
.blog-card {
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
    max-height: 210px;
    border-radius: 24px;
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
</style>
