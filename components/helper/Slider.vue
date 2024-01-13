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
