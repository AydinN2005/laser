<template>
  <div class="menu p-3" :style="active ? {left: '0px'} : {left: '-100vw'}">
    <div class="flex items-center justify-between menu-box py-3 px-4">
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
    <div class="grid grid-cols-1 gap-6 mt-6">
      <nuxt-link active-class="menu-link-active"  to="#" class="menu-link">
        home
      </nuxt-link>
      <div  class="flex items-center justify-between menu-link">
        process
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div  class="flex items-center justify-between menu-link">
        body area
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div  class="flex items-center justify-between menu-link">
        services
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1" stroke="#3D3948"
                stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <nuxt-link active-class="menu-link-active"  class="menu-link" to="#">
        special
      </nuxt-link>
      <nuxt-link active-class="menu-link-active"  class="menu-link" to="#">
        about us
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style scoped lang="scss">
.menu {
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
    color: #AAAAAA;
    padding: 12px 16px;
    border-radius: 100px;
    cursor: pointer;

    &:hover, &-active {
      background: var(--primary-purple);
      color: white;
    }
  }
}
</style>
