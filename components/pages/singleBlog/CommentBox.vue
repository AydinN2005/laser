<template>
  <div class="box flex flex-col p-4 overflow-hidden" ref="container" :style="{height: height}" @click="handleShow">
    <div class="flex flex-col" ref="header">
      <div class="flex items-center">
        <div class="p-4 rounded-2xl bg-white mr-4">
          <img src="~/assets/images/icons/user.svg" alt="">
        </div>
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold mb-3">
            ehsan amaniyan
          </h3>
          <div class="flex items-center">
            <img src="~/assets/images/icons/clock.svg" class="mr-2" alt="">
            <span class="box-date text-sm">
            12 august 2023
          </span>
          </div>
        </div>
      </div>
      <p class="mt-5 text-sm font-semibold box-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        Lorem
        ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit .
      </p>
    </div>
    <div class="flex flex-col" ref="data">
      <div class="box-divider">
      </div>
      <div class="flex flex-col">
        <div class="box-answer text-sm text-white py-2 px-3 mb-3 w-max">
          support team`s answer
        </div>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    height: '0px'
  }),
  mounted() {
    this.height = this.$refs.header.offsetHeight + 32 + 'px';
  },
  methods: {
    handleShow() {
      this.open = !this.open
      if (this.open) {
        this.height = this.$refs.header.offsetHeight + this.$refs.data.offsetHeight + 32 + 'px';
      } else {
        this.height = this.$refs.header.offsetHeight + 32 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  border: 1px solid var(--gray-3);
  border-radius: 36px;
  cursor: pointer;

  &-date, &-desc {
    color: var(--gray-3);
  }

  &-answer {
    border-radius: 10px;
    background: var(--gray-bg);
  }

  &-divider {
    height: 2px;
    width: 100%;
    margin: 24px 0;
    background: linear-gradient(90deg, rgba(61, 57, 72, 0) 0%, rgba(61, 57, 72, 1) 50%, rgba(61, 57, 72, 1) 100%);
  }
}
</style>
