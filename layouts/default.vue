<template>
  <div>
    <div class="top-section py-2.5 px-8 flex items-center justify-center">
      <div class="flex items-center w-full">
        <div class="top-section-left-line"></div>
        <img src="~/assets/images/icons/Star.svg" class="ml-3" alt="">
      </div>

      <div class="flex items-center mx-4">
        <span class="top-section-text mr-4 block min-w-max">
          book now fro first time %56 off
        </span>
        <nuxt-link to="#" class="py-1.5 px-4 rounded-full top-section-link flex items-center min-w-max">
          book services
          <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10" fill="none">
            <path d="M1 9L3.58579 6.41421C4.36684 5.63316 4.36683 4.36683 3.58579 3.58579L1 1" stroke="white"
                  stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </nuxt-link>
      </div>

      <div class="flex items-center w-full">
        <img src="~/assets/images/icons/Star.svg" class="mr-3" alt="">
        <div class="top-section-right-line"></div>
      </div>
    </div>
    <Menu/>
    <nuxt/>
  </div>
</template>

<script>
import Menu from "~/components/layout/Menu";

export default {
  components: {Menu}
}
</script>

<style scoped lang="scss">
.top-section {
  background-color: var(--primary);

  &-left-line, &-right-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, #303030 0%, rgba(48, 48, 48, 0.00) 100%);
  }

  &-right-line {
    background: linear-gradient(90deg, #303030 0%, rgba(48, 48, 48, 0.00) 100%);
  }

  &-text, &-link {
    font-size: 13px;
    font-weight: 500;
    color: #303030;
  }

  &-link {
    color: white;
    background: var(--gray-bg);
    box-shadow: -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
  }
}
</style>
