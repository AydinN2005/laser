<template>
  <div class="dropdown p-2">
    <div class="grid grid-cols-1 gap-6 w-full">
      <nuxt-link v-for="item in links" :key="item.id" :to="item.route"
                 class="dropdown-link">
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>

<style scoped lang="scss">
.dropdown {
  border-radius: 24px !important;
  background: #FAF7FF !important;
  border: 1px solid white;
  position: absolute;
  z-index: 999;
  width: 217px;
  top: 43px;
  left: 0;
  display: none;

  &-link {
    font-size: 13px;
    padding: 12px 16px;
    border-radius: 100px;
    cursor: pointer;
    display: block;
    width: 100%;

    &:hover, &-active {
      background: var(--primary-purple);
      color: white;
    }
  }
}
</style>
