<template>
  <div class="c-container">
    <div class="menu p-1 mt-11 flex items-center w-full justify-between">
      <div class="flex items-center">
        <div class="menu-links flex items-center">
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
      <button class="base-button">
        book services
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M1 9L3.58579 6.41421C4.36684 5.63316 4.36683 4.36683 3.58579 3.58579L1 1" stroke="#3D3948"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {menuLinks} from "./data";

export default {
  data: () => ({
    menuLinks
  })
}
</script>

<style scoped lang="scss">
.menu {
  border-radius: 74px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.74);

  &-links {
    margin-right: 94px;
  }

  &-link {
    margin-right: 32px;

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
    top: -37px;
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
      top: -37px;
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
}
</style>
