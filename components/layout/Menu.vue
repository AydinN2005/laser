<template>
  <div class="c-container">
    <div class="menu p-1 mt-11 flex items-center w-full justify-between relative">
      <MenuMobile :active="showMenu" @close="showMenu = false"/>
      <div class="flex items-center w-full justify-between">
        <div class="menu-links lg:flex hidden items-center">
          <nuxt-link to="/" class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center">
            home
          </nuxt-link>
          <div class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center"
               active-class="menu-link-active">
            process
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
            <MenuDropdown :links="processLinks"/>
          </div>
          <div class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center">
            body areas
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
            <MenuDropdown v-if="bodyLinks !== null" :links="bodyLinks"/>
          </div>
          <div class="menu-link font-s-13 py-3 px-4 rounded-full flex items-center">
            services
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
            <MenuDropdown v-if="servicesLink !== null" :links="servicesLink"/>
          </div>
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
            <img loading="lazy"   width="24" height="13"   src="~/assets/images/icons/triangle.svg" class="" alt="" />
          </div>
          <div class="menu-banner-triangle-2 absolute">
            <img loading="lazy"   width="24" height="13"   src="~/assets/images/icons/triangle.svg" class=""
                 alt="" />
          </div>
          <div class="menu-banner absolute p-1 w-max">
            <div class="menu-banner-dashed-box py-1.5 px-2">
              <img loading="lazy" src="~/assets/images/img/topBar.png" class="menu-banner-text" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full hidden md:flex items-center justify-end">
        <div class="menu-profile cursor-pointer">
          <nuxt-link to="/dashboard">
            <img loading="lazy" width="24" height="24"   v-if="$store.getters['getLogin']"   src="~/assets/images/img/user.svg" class=" cursor-pointer" alt="" />
            <img loading="lazy"   width="24" height="24" v-if="!$store.getters['getLogin']"   src="~/assets/images/icons/login.svg"
                 class=" cursor-pointer" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-full flex items-center justify-end md:hidden">
        <div class="menu-profile cursor-pointer">
          <nuxt-link to="/dashboard">
            <img loading="lazy" width="24" height="24"   v-if="$store.getters['getLogin']"   src="~/assets/images/img/user.svg" class=" cursor-pointer" alt="" />
            <img loading="lazy"   width="24" height="24" v-if="!$store.getters['getLogin']"   src="~/assets/images/icons/login.svg"
                 class=" cursor-pointer" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {processLinks, aboutLinks} from "./data";
import Button from "~/components/elements/Button";
import MenuMobile from "~/components/layout/MenuMobile";
import MenuDropdown from "~/components/layout/MenuDropdown";
import {getAllBodyArea} from "~/services/api/admin/bodyArea";
import {getAllServices} from "~/services/api/admin/services";

export default {
  components: {MenuDropdown, MenuMobile, Button},
  data: () => ({
    processLinks,
    aboutLinks,
    showMenu: false,
    bodyLinks: [],
    servicesLink: []
  }),
  mounted() {
    let areaLinks = []
    let services = []
    getAllBodyArea((data) => {
      areaLinks = data;

      areaLinks.map((item) => {
        this.bodyLinks.push({
          id: item.id,
          title: item.name,
          route: `/bodyArea/${item.id}`
        })
      })
    })
    getAllServices((data) => {
      services = data.services;

      services.map((item) => {
        this.servicesLink.push({
          id: item.id,
          title: item.name,
          route: `/singleService/${item.id}`
        })
      })
    })
  }
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
    margin-right: 54px;
  }

  &-link {
    margin-right: 32px;
    min-width: max-content;
    cursor: pointer;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &:hover, &-active {
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
      width: 230px;
      height: 150px;

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
      display: none !important;
    }
  }

  &-profile {
    padding: 10px;
    border-radius: 50%;
    border: 1px solid var(--gray-bg);
  }
}

@media screen and (max-width: 1023px) {
  .menu {
    &-banner {
      display: block;
      left: -51px;

      &-text {
        width: 130px;
        height: 90px;
      }

      &-triangle-1 {
        display: block;
        left: -63px;
      }

      &-triangle-2 {
        display: block;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .menu {
    &-banner {
      left: -75px;
      display: block;

      &-triangle-1 {
        left: -86px;
        display: block;
      }

      &-triangle-2 {
        right: -60px;
        display: block;
      }
    }
  }
}
</style>
<style lang="scss">
.menu {
  &-link {
    &:hover {
      .dropdown {
        display: flex !important;
      }
    }
  }
}
</style>

