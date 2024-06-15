<template>
  <div class="overflow-hidden">
    <div class="mobile-menu-dropdown">
      <div ref="header" class="flex items-center justify-between mobile-menu-dropdown-link"
           :class="showDropDown ? 'mobile-menu-dropdown-link-active': ''" @click="handleDropdown">
        {{ title }}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"
             :style="showDropDown ? {transform: 'rotate(180deg)'} : {}"
        >
          <path d="M1 1L3.58579 3.58579C4.36684 4.36684 5.63317 4.36683 6.41421 3.58579L9 1"
                :stroke="showDropDown ? 'white' : '#3D3948'"
                stroke-width="2" stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col pl-3 mt-3" :style="{height: height}">
      <div class="grid grid-cols-1 gap-3" ref="data" @click="$emit('close')">
        <nuxt-link v-for="link in links" :key="link.id" :to="link.route" class="mobile-menu-dropdown-link"
                   active-class="mobile-menu-dropdown-link-active"
        >
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'links'],
  data: () => ({
    showDropDown: false,
    height: '0px'
  }),
  mounted() {
    this.height = '0px'
  },
  methods: {
    handleDropdown() {
      const data = this.$refs.data
      this.showDropDown = !this.showDropDown
      if (this.showDropDown) {
        this.height = data.offsetHeight + 'px'
      } else {
        this.height = '0px'
      }
    },
    setToDefaultHeight() {
      const header = this.$refs.header;
      this.height = header.offsetHeight + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-menu-dropdown {
  &-link {
    font-size: 13px;
    color: #696969;
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
