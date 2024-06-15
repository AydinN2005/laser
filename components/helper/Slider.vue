<template>
  <div class="slider-container">
    <carousel
      :autoplaySpeed="1000"
      :loop="loop"
      :items="items"
      :center="center"
      :autoplay="autoPlay"
      :margin="margin"
      :nav="nav"
      :dots="dots"
      :autoplayHoverPause="true"
      :responsive="responsive"
    >
      <slot></slot>
    </carousel>
  </div>
</template>

<script>
export default {
  props: [
    'loop',
    'items',
    'center',
    'autoPlay',
    'margin',
    'responsive',
    'nav',
    'dots',
  ],
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
    transition: all 0.3s !important;

    span {
      transition: all 0.3s !important;
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

  .owl-nav {
    position: absolute;
    top: -56px;
    right: 0;
  }

  .owl-next,
  .owl-prev {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    background: var(--gray-bg) !important;
    border-radius: 50% !important;

    span {
      color: white;
      font-size: 32px;
      position: relative;
      top: -4px;
    }

    &:hover {
      background: var(--primary-purple) !important;
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .owl-next, .owl-prev {
    width: 16px !important;
    height: 16px !important;

    span {
      font-size: 16px !important;
    }
  }
}
</style>
