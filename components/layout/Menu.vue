<template>
  <div class="c-container">
    <div class="menu p-1 mt-11 flex items-center w-full justify-between relative">
      <MenuMobile :active="showMenu" @close="showMenu = false"/>
      <div class="flex items-center w-full justify-between">
        <div class="menu-links lg:flex hidden items-center">
          <nuxt-link to="#" class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center"
                     active-class="menu-link-active">
            process
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </nuxt-link>
          <nuxt-link to="#" class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center"
                     active-class="menu-link-active">
            body areas
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </nuxt-link>
          <nuxt-link exact v-for="link in menuLinks" :key="link.id" :to="link.route"
                     class="menu-link font-s-13 py-3 px-4 rounded-full"
                     active-class="menu-link-active">
            {{ link.title }}
          </nuxt-link>
        </div>
        <div class="menu-icon lg:hidden" @click="showMenu = !showMenu">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_735_445)">
              <path
                d="M16 2.33334C16 2.88668 15.5533 3.33334 15 3.33334H1C0.446667 3.33334 0 2.88668 0 2.33334C0 1.78001 0.446667 1.33334 1 1.33334H15C15.5533 1.33334 16 1.78001 16 2.33334ZM4.33333 13.3333H1C0.446667 13.3333 0 13.78 0 14.3333C0 14.8867 0.446667 15.3333 1 15.3333H4.33333C4.88667 15.3333 5.33333 14.8867 5.33333 14.3333C5.33333 13.78 4.88667 13.3333 4.33333 13.3333ZM9.66667 7.33334H1C0.446667 7.33334 0 7.78001 0 8.33334C0 8.88668 0.446667 9.33334 1 9.33334H9.66667C10.22 9.33334 10.6667 8.88668 10.6667 8.33334C10.6667 7.78001 10.22 7.33334 9.66667 7.33334Z"
                fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_735_445">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="overlay" :style="showMenu ? {zIndex: 998,opacity: 1}: {zIndex: -100, opacity: 0}">
        </div>
        <div class="relative">
          <div class="menu-banner-triangle-1 absolute">
            <img width="24" height="13" src="~/assets/images/icons/triangle.svg" class="" alt="">
          </div>
          <div class="menu-banner-triangle-2 absolute">
            <img width="24" height="13" src="~/assets/images/icons/triangle.svg" class=""
                 alt="">
          </div>
          <div class="menu-banner absolute p-1 w-max">
            <div class="menu-banner-dashed-box py-1.5 px-2">
              <div class="menu-banner-text text-base font-bold text-center flex flex-col items-center">
                laser
                <br>
                <div class="flex items-center justify-center">
                  <img class="mr-2" src="~/assets/images/icons/Star-white.svg" alt="">
                  to
                  <img class="" src="~/assets/images/icons/Star-white.svg" alt="">
                </div>
                <br>
                day
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full hidden md:flex items-center justify-end">
        <div class="menu-profile cursor-pointer">
          <img src="~/assets/images/img/user.svg" alt="">
        </div>
        <Button stroke="white" title="book services" type="base-button" base="c-button-1" class="md:flex hidden"/>
      </div>
      <div class="w-full flex items-center justify-end md:hidden">
        <img src="~/assets/images/img/user.svg" class="mr-4 cursor-pointer" alt="">
        <Button stroke="white" type="base-button" base="c-button-1" class="md:hidden">
          <svg style="margin-left: 0 !important;" width="24" height="23" viewBox="0 0 24 23" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_735_646)">
              <path
                d="M18.268 12C19.2233 12 20 11.2227 20 10.268V9.33333C20 5.14667 16.7673 1.70133 12.6667 1.36133V0.666667C12.6667 0.298667 12.368 0 12 0C11.632 0 11.3333 0.298667 11.3333 0.666667V1.36133C7.23267 1.70133 4 5.14667 4 9.33333V10.268C4 11.2233 4.77733 12 5.732 12H11.3333V13.3333H4.66667C4.29867 13.3333 4 13.632 4 14C4 14.368 4.29867 14.6667 4.66667 14.6667H19.3333C19.7013 14.6667 20 14.368 20 14C20 13.632 19.7013 13.3333 19.3333 13.3333H12.6667V12H18.268ZM5.33333 10.268V9.33333C5.33333 5.65733 8.324 2.66667 12 2.66667C15.676 2.66667 18.6667 5.65733 18.6667 9.33333V10.268C18.6667 10.488 18.4873 10.6667 18.268 10.6667H5.732C5.512 10.6667 5.33333 10.4873 5.33333 10.268Z"
                fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_735_646" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_735_646"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_735_646" result="shape"/>
              </filter>
            </defs>
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import {menuLinks} from "./data";
import Button from "~/components/elements/Button";
import MenuMobile from "~/components/layout/MenuMobile";

export default {
  components: {MenuMobile, Button},
  data: () => ({
    menuLinks,
    showMenu: false,
  })
}
</script>

<style scoped lang="scss">
.menu {
  border-radius: 74px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.74);

  &-icon {
    padding: 12px;
    border-radius: 50%;
    background: var(--primary-purple);
  }

  &-links {
    margin-right: 94px;
  }

  &-link {
    margin-right: 32px;
    min-width: max-content;

    &:last-child {
      margin-right: 0;
    }

    &:hover, &-link-active {
      background: var(--primary-purple);
      color: white;
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

      path {
        stroke: white;
      }

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &-banner {
    top: -39px;
    border-radius: 0px 0px 24px 24px;
    background: var(--primary-purple);
    box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

    &-dashed-box {
      width: 100%;
      height: 100%;
      border-radius: 0px 0px 24px 24px;
      border: 1px dashed #FFF;
    }

    &-text {
      color: white;
      letter-spacing: 6.4px;
      text-transform: uppercase;

      div {
        color: white;
      }
    }

    &-triangle-1, &-triangle-2 {
      top: -39px;
      width: 24px;
      height: 24px;
    }

    &-triangle-1 {
      left: -12px;
    }

    &-triangle-2 {
      right: -125px;
    }
  }

  &-profile {
    padding: 10px;
    border-radius: 50%;
    border: 1px solid var(--gray-bg);
    margin-right: 16px;
  }
}

@media screen and (max-width: 1100px) {
  .menu {
    &-banner {
      left: -83px;

      &-triangle-1 {
        left: -95px;
      }

      &-triangle-2 {
        right: -40px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .menu {
    &-banner {
      left: -64px;

      &-triangle-1 {
        left: -76px;
      }

      &-triangle-2 {
        right: -60px;
      }
    }
  }
}
</style>
