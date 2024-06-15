<template>
  <nuxt-link :to="`/singleService/${id}`">
    <div class="flex flex-col card relative">
      <div class="absolute card-img-container">
        <div class="relative flex items-center justify-center">
          <div class="card-bg-1"></div>
          <div class="card-bg-2"></div>
          <img loading="lazy" :src="img" alt="" class="card-img"/>
        </div>
      </div>
      <div class="flex items-center">
      <span class="text-base font-bold mr-3 block w-full">
        {{ title }}
      </span>
        <img loading="lazy" src="~/assets/images/img/servicesStarBlack.svg" class="black-star" alt=""/>
        <img loading="lazy" src="~/assets/images/img/servicesStarWhite.svg" class="white-star" alt=""/>
      </div>
      <p class="mt-2 text-xs font-normal service-card-desc">
        {{ desc }}
      </p>
      <div class="card-btn">
        <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23.4236" cy="23.01" r="21.5" fill="#F6F0FF" stroke="#EDE2FF" stroke-width="3"/>
          <path
            d="M31.178 16.2556C31.178 15.7033 30.7303 15.2556 30.178 15.2556L21.178 15.2556C20.6257 15.2556 20.178 15.7033 20.178 16.2556C20.178 16.8079 20.6257 17.2556 21.178 17.2556L29.178 17.2556L29.178 25.2556C29.178 25.8079 29.6257 26.2556 30.178 26.2556C30.7303 26.2556 31.178 25.8079 31.178 25.2556L31.178 16.2556ZM29.4709 15.5485L15.9622 29.0572L17.3764 30.4714L30.8851 16.9627L29.4709 15.5485Z"
            fill="#3D3948"/>
        </svg>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['id', 'title', 'desc', 'img']
}
</script>

<style scoped lang="scss">
.card {
  .white-star {
    display: none;
  }

  cursor: pointer;
  background: #F3EDFB;
  padding: 16px;
  border-radius: 32px;
  border: 1px solid white;
  padding-top: 78px;
  max-width: 95% !important;

  &-bg-1, &-bg-2 {
    position: absolute;
    border-radius: 32px;
    height: 80%;
  }

  &-bg-1 {
    background: #E2D7F4;
    width: 70%;
    top: -8px;
    z-index: 4;
  }

  &-bg-2 {
    background: #F7EDFB;
    width: 50%;
    top: -16px;
  }

  &-img {
    position: relative;
    z-index: 10;
    width: 235px !important;
    height: 125px !important;
    border-radius: 32px !important;

    &-container {
      top: -62px;
      left: -14px;
    }
  }

  &-btn {
    position: absolute;
    bottom: -16px;
    right: -10px;
  }

  &:hover {
    background: var(--gray-bg);

    span, p {
      color: white;
    }

    circle {
      fill: var(--gray-bg);
    }

    path {
      fill: white;
    }

    .black-star {
      display: none;
    }

    .white-star {
      display: block;
    }
  }
}

.service-card-desc {
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
