<template>
  <div class="slider-container">
    <carousel :autoplaySpeed="1000" :loop="loop" :items="items" :center="center" :autoplay="autoPlay" :margin="margin"
              :nav="nav" :dots="dots" :autoplayHoverPause="true" :responsive="responsive">
      <slot></slot>
    </carousel>
  </div>
</template>

<script>

export default {
  props: ['loop', 'items', 'center', 'autoPlay', 'margin', 'responsive', 'nav', 'dots']
}
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  direction: ltr !important;
  max-width: 100%;
}
</style>
<style lang="scss">
.slider-container {
  .owl-dot {
    transition: all .3s !important;

    span {
      transition: all .3s !important;
      width: 16px !important;
      height: 16px !important;
      background: #595763 !important;
    }

    &:hover {
      span {
        background: var(--primary-purple) !important;
      }
    }
  }

  .owl-dots {
    .active {
      span {
        width: 42px !important;
        background: var(--primary-purple) !important;
      }
    }
  }
}
</style>
