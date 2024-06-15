<template>
  <div class="mobile-menu p-3" :style="active ? {left: '0px'} : {left: '-100vw'}">
    <div class="flex items-center justify-between mobile-menu-box py-3 px-4">
      <span class="text-base font-medium text-white">
        menu
      </span>
      <div @click="$emit('close')" class="cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13" stroke="white" stroke-width="2"/>
          <path d="M0.999999 1L13 13" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 mt-6">
      <nuxt-link exact active-class="mobile-menu-link-active" class="block w-full mobile-menu-link" to="/">
        home
      </nuxt-link>
      <MobileMenuDropdown @close="$emit('close')" title="process" :links="processLinks"/>
      <MobileMenuDropdown @close="$emit('close')" title="body area" :links="bodyLinks"/>
      <MobileMenuDropdown @close="$emit('close')" title="services" :links="servicesLink"/>
    </div>
  </div>
</template>

<script>
import {processLinks, aboutLinks} from "./data";
import MobileMenuDropdown from "~/components/layout/MobileMenuDropdown";
import {getAllBodyArea} from "~/services/api/admin/bodyArea";
import {getAllServices} from "~/services/api/admin/services";

export default {
  components: {MobileMenuDropdown},
  props: ['active'],
  data: () => ({
    processLinks,
    aboutLinks,
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
.mobile-menu {
  border-radius: 24px !important;
  background: #E8E4EC !important;
  border: 1px solid white;
  position: absolute;
  z-index: 999;
  width: 217px;
  top: 72px;

  &-box {
    background: var(--gray-bg);
    box-shadow: 2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset,
    -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
    0px 8px 12px 0px rgba(61, 57, 72, 0.24);
    border-radius: 100px;
  }

  &-link {
    font-size: 13px;
    color: #696969;
    padding: 12px 16px;
    border-radius: 100px;
    cursor: pointer;

    &:hover {
      background: var(--primary-purple);
      color: white;
    }

    &-active {
      background: var(--primary-purple) !important;
      color: white !important;
    }
  }
}
</style>
