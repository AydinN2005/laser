<template>
  <div v-if="container !== null" class="c-container flex flex-col hero">
    <div class="flex flex-col-reverse md:flex-col lg:grid grid-cols-12 gap-5 justify-between">
      <div v-if="container.properties[0]" class="col-start-1 col-end-10 row-start-1 w-full h-full md:block hidden">
        <img loading="lazy" :src="`${baseUrl}/${container?.properties[0].images[0]?.image}`"
             class="hero-img w-full h-full" alt=""/>
      </div>
      <AuthorProfile :data="container" v-if="!services"
                     class="w-full col-start-10 col-end-13 row-start-1 md:mt-0 mt-8"/>
      <div class="w-full col-start-10 col-end-13 row-start-1 md:mt-0 mt-8 flex items-center">
        <BookingCard :data="container" v-if="services"/>
      </div>
      <div v-if="container.properties[0]" class="col-start-1 col-end-10 row-start-1 w-full h-full md:hidden">
        <img loading="lazy" :src="`${baseUrl}/${container.properties[0].images[0]?.image}`" class="w-full h-full"
             alt=""/>
      </div>
      <!--      property 1-->
      <div v-if="container.properties[0] && container.properties[0].images"
           class="col-start-1 col-end-10 flex flex-col">
        <div class="flex items-center justify-between w-full">
          <h1 class="hero-title">
            {{ container.properties[0].title }}
          </h1>
        </div>
        <p v-html="container.properties[0].description || container.properties[0].text" class="text-sm md:text-base mt-4">
        </p>
        <div class="md:hidden mt-4 flex items-center">
          <div class="flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_685_47)">
                <path
                  d="M17 19.765C17 22.525 14.76 24.765 12 24.765H5C2.24 24.765 0 22.525 0 19.765V12.765C0 10.005 2.24 7.76496 5 7.76496H6C6.55 7.76496 7 8.21496 7 8.76496C7 9.31496 6.55 9.76496 6 9.76496H5C3.35 9.76496 2 11.115 2 12.765V19.765C2 21.415 3.35 22.765 5 22.765H12C13.65 22.765 15 21.415 15 19.765C15 19.215 15.45 18.765 16 18.765C16.55 18.765 17 19.215 17 19.765ZM23.13 6.65496L17.72 1.06496C17.34 0.664963 16.7 0.654963 16.31 1.04496C15.92 1.43496 15.9 2.06496 16.29 2.45496L21.43 7.75496H13C10.24 7.75496 8 9.99496 8 12.755V17.755C8 18.305 8.45 18.755 9 18.755C9.55 18.755 10 18.305 10 17.755V12.755C10 11.105 11.35 9.75496 13 9.75496H21.42L16.28 15.055C15.9 15.455 15.9 16.085 16.3 16.465C16.49 16.655 16.75 16.745 17 16.745C17.25 16.745 17.52 16.645 17.72 16.445L23.12 10.875C24.29 9.70496 24.29 7.80496 23.13 6.64496V6.65496Z"
                  fill="#3D3948"/>
              </g>
              <defs>
                <clipPath id="clip0_685_47">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.764954)"/>
                </clipPath>
              </defs>
            </svg>
            <span class="text-base font-bold ml-3">
                23
              </span>
          </div>
          <div class="flex items-center ml-8">
            <svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_685_54)">
                <path
                  d="M24.0011 12.012C23.8565 9.67199 23.0303 7.42548 21.6243 5.54939C20.2184 3.67331 18.2941 2.24966 16.0888 1.45396C13.8836 0.658265 11.4936 0.525301 9.21369 1.07146C6.93375 1.61763 4.86347 2.81904 3.25808 4.52759C1.65269 6.23614 0.582369 8.37713 0.179071 10.6866C-0.224228 12.9961 0.0571252 15.3732 0.988445 17.5247C1.91976 19.6762 3.46034 21.5082 5.42024 22.7947C7.38014 24.0813 9.67369 24.7662 12.0181 24.765H19.0011C20.3268 24.7636 21.5978 24.2364 22.5352 23.299C23.4726 22.3616 23.9998 21.0906 24.0011 19.765V12.012ZM22.0011 19.765C22.0011 20.5606 21.6851 21.3237 21.1224 21.8863C20.5598 22.4489 19.7968 22.765 19.0011 22.765H12.0181C10.6071 22.7643 9.21197 22.4663 7.92383 21.8903C6.63568 21.3143 5.4834 20.4732 4.54213 19.422C3.5963 18.3712 2.88606 17.1304 2.45902 15.7828C2.03199 14.4351 1.89803 13.0117 2.06613 11.608C2.33156 9.39391 3.32632 7.33116 4.89357 5.74489C6.46082 4.15863 8.51143 3.13908 10.7221 2.84697C11.1534 2.79292 11.5875 2.76553 12.0221 2.76497C14.3526 2.75861 16.6109 3.57287 18.4011 5.06497C19.4467 5.93391 20.3048 7.00612 20.9237 8.2166C21.5425 9.42708 21.909 10.7506 22.0011 12.107V19.765Z"
                  fill="#3D3948"/>
                <path
                  d="M8 9.76495H12C12.2652 9.76495 12.5196 9.6596 12.7071 9.47206C12.8946 9.28452 13 9.03017 13 8.76495C13 8.49974 12.8946 8.24538 12.7071 8.05785C12.5196 7.87031 12.2652 7.76495 12 7.76495H8C7.73478 7.76495 7.48043 7.87031 7.29289 8.05785C7.10536 8.24538 7 8.49974 7 8.76495C7 9.03017 7.10536 9.28452 7.29289 9.47206C7.48043 9.6596 7.73478 9.76495 8 9.76495Z"
                  fill="#3D3948"/>
                <path
                  d="M16 11.765H8C7.73478 11.765 7.48043 11.8703 7.29289 12.0578C7.10536 12.2454 7 12.4997 7 12.765C7 13.0302 7.10536 13.2845 7.29289 13.4721C7.48043 13.6596 7.73478 13.765 8 13.765H16C16.2652 13.765 16.5196 13.6596 16.7071 13.4721C16.8946 13.2845 17 13.0302 17 12.765C17 12.4997 16.8946 12.2454 16.7071 12.0578C16.5196 11.8703 16.2652 11.765 16 11.765Z"
                  fill="#3D3948"/>
                <path
                  d="M16 15.765H8C7.73478 15.765 7.48043 15.8703 7.29289 16.0578C7.10536 16.2454 7 16.4997 7 16.765C7 17.0302 7.10536 17.2845 7.29289 17.4721C7.48043 17.6596 7.73478 17.765 8 17.765H16C16.2652 17.765 16.5196 17.6596 16.7071 17.4721C16.8946 17.2845 17 17.0302 17 16.765C17 16.4997 16.8946 16.2454 16.7071 16.0578C16.5196 15.8703 16.2652 15.765 16 15.765Z"
                  fill="#3D3948"/>
              </g>
              <defs>
                <clipPath id="clip0_685_54">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.764954)"/>
                </clipPath>
              </defs>
            </svg>
            <span class="text-base font-bold ml-3">
                23
              </span>
          </div>
        </div>
      </div>
    </div>
    <!--    property 2-->
    <div v-if="container.properties[1] && container.properties[1].images" class="flex flex-col-reverse md:flex-col">
      <div class="lg:grid grid-cols-12 gap-5 mt-8">
        <img loading="lazy" :src="`${baseUrl}/${container.properties[1]?.images[0]?.image}`"
             class="col-start-1 col-end-8" alt=""/>
        <img loading="lazy" :src="`${baseUrl}/${container.properties[1]?.images[1]?.image}`"
             class="col-start-8 col-end-13 lg:block hidden"
             alt=""/>
      </div>
      <div class="flex flex-col mt-8">
        <h2 class="hero-title">
          {{ container.properties[1]?.title }}
        </h2>
        <p v-html="container.properties[1]?.description || container.properties[1]?.text" class="text-sm md:text-base mt-4">
        </p>
      </div>
    </div>
    <!--    property 3-->
    <div v-if="container.properties[2] && container.properties[2].images"
         class="mt-8 flex items-center lg:flex-row md:flex-col flex-col-reverse">
      <img loading="lazy" :src="`${baseUrl}/${container.properties[2].images[0]?.image}`" alt=""
           class="w-full lg:mr-10"/>
      <p v-html="container.properties[2].description || container.properties[2].text" class="w-full text-sm md:text-base lg:mt-0 md:mt-8 mb-8 md:mb-0">
      </p>
    </div>
    <!--    property 4-->
    <div v-if="container.properties[3] && container.properties[3].images" class="flex md:flex-col flex-col-reverse">
      <div class="my-8">
        <img loading="lazy" :src="`${baseUrl}/${container.properties[3].images[0].image}`" class="w-full" alt=""/>
      </div>
      <div class="flex flex-col md:mt-0 mt-8">
        <h2 class="hero-title">
          {{ container.properties[3].title }}
        </h2>
        <p v-html="container.properties[3].description || container.properties[3].text " class="text-base mt-4">
        </p>
      </div>
    </div>
    <!--    property 5-->
    <div v-if="container.properties[4] && container.properties[4].images" class="flex md:flex-col flex-col-reverse">
      <div class="md:grid grid-cols-12 gap-5 my-8">
        <img loading="lazy" :src="`${baseUrl}/${container.properties[4].images[0].image}`"
             class="col-start-1 lg:col-end-5 col-end-8 h-full w-full"
             alt=""/>
        <img loading="lazy" :src="`${baseUrl}/${container.properties[4].images[1]?.image}`"
             class="md:block hidden lg:col-start-5 col-start-8 lg:col-end-9 col-end-13 h-full w-full"
             alt=""/>
        <img loading="lazy" :src="`${baseUrl}/${container.properties[4].images[2].image}`"
             class="col-start-9 col-end-13 h-full w-full lg:block hidden" alt=""/>
      </div>
      <div>
        <p v-html="container.properties[4].description || container.properties[4].text" class="text-sm md:text-base">
        </p>
      </div>
    </div>
    <div v-if="container.properties[4] && container.properties[4].images" class="flex flex-col md:hidden">
      <h2 class="hero-title">
        {{ container.properties[4].title }}
      </h2>
      <p v-html="container.properties[4].description || container.properties[4].text" class="text-sm md:text-base mt-4">
      </p>
    </div>
    <!--    properties end-->
    <div class="relative flex items-center justify-center w-full hero-divider-container">
      <div class="hero-divider"></div>
      <div class="mouse-container flex items-center justify-center">
        <svg width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_685_97)">
            <path
              d="M24.0011 11.5342C23.8565 9.19421 23.0303 6.9477 21.6243 5.07161C20.2184 3.19552 18.2941 1.77188 16.0888 0.97618C13.8836 0.180482 11.4936 0.0475182 9.21369 0.59368C6.93375 1.13984 4.86347 2.34125 3.25808 4.0498C1.65269 5.75835 0.582369 7.89935 0.179071 10.2088C-0.224228 12.5183 0.0571252 14.8954 0.988445 17.0469C1.91976 19.1984 3.46034 21.0304 5.42024 22.3169C7.38014 23.6035 9.67369 24.2884 12.0181 24.2872H19.0011C20.3268 24.2859 21.5978 23.7587 22.5352 22.8213C23.4726 21.8839 23.9998 20.6129 24.0011 19.2872V11.5342ZM22.0011 19.2872C22.0011 20.0828 21.6851 20.8459 21.1224 21.4085C20.5598 21.9711 19.7968 22.2872 19.0011 22.2872H12.0181C10.6071 22.2865 9.21197 21.9885 7.92383 21.4125C6.63568 20.8365 5.4834 19.9954 4.54213 18.9442C3.5963 17.8935 2.88606 16.6527 2.45902 15.305C2.03199 13.9573 1.89803 12.5339 2.06613 11.1302C2.33156 8.91613 3.32632 6.85337 4.89357 5.26711C6.46082 3.68085 8.51143 2.66129 10.7221 2.36918C11.1534 2.31514 11.5875 2.28775 12.0221 2.28718C14.3526 2.28083 16.6109 3.09509 18.4011 4.58718C19.4467 5.45613 20.3048 6.52834 20.9237 7.73881C21.5425 8.94929 21.909 10.2728 22.0011 11.6292V19.2872Z"
              fill="#3D3948"/>
            <path
              d="M8 9.28711H12C12.2652 9.28711 12.5196 9.18175 12.7071 8.99422C12.8946 8.80668 13 8.55233 13 8.28711C13 8.02189 12.8946 7.76754 12.7071 7.58C12.5196 7.39247 12.2652 7.28711 12 7.28711H8C7.73478 7.28711 7.48043 7.39247 7.29289 7.58C7.10536 7.76754 7 8.02189 7 8.28711C7 8.55233 7.10536 8.80668 7.29289 8.99422C7.48043 9.18175 7.73478 9.28711 8 9.28711Z"
              fill="#3D3948"/>
            <path
              d="M16 11.2871H8C7.73478 11.2871 7.48043 11.3925 7.29289 11.58C7.10536 11.7675 7 12.0219 7 12.2871C7 12.5523 7.10536 12.8067 7.29289 12.9942C7.48043 13.1818 7.73478 13.2871 8 13.2871H16C16.2652 13.2871 16.5196 13.1818 16.7071 12.9942C16.8946 12.8067 17 12.5523 17 12.2871C17 12.0219 16.8946 11.7675 16.7071 11.58C16.5196 11.3925 16.2652 11.2871 16 11.2871Z"
              fill="#3D3948"/>
            <path
              d="M16 15.2871H8C7.73478 15.2871 7.48043 15.3925 7.29289 15.58C7.10536 15.7675 7 16.0219 7 16.2871C7 16.5523 7.10536 16.8067 7.29289 16.9942C7.48043 17.1818 7.73478 17.2871 8 17.2871H16C16.2652 17.2871 16.5196 17.1818 16.7071 16.9942C16.8946 16.8067 17 16.5523 17 16.2871C17 16.0219 16.8946 15.7675 16.7071 15.58C16.5196 15.3925 16.2652 15.2871 16 15.2871Z"
              fill="#3D3948"/>
          </g>
          <path d="M20 36.2832L14.8284 41.4548C13.2663 43.0169 10.7337 43.0169 9.17157 41.4548L4 36.2832"
                stroke="#3D3948" stroke-width="2" stroke-linecap="round"/>
          <defs>
            <clipPath id="clip0_685_97">
              <rect width="24" height="24" fill="white" transform="translate(0 0.287109)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

  </div>
</template>

<script>
import AuthorProfile from "~/components/pages/singleBlog/AuthorProfile";
import Booking from "~/components/pages/process/Booking";
import BookingCard from "~/components/pages/singleService/BookingCard";
import {getAService} from "~/services/api/admin/services";
import {baseUrl} from "~/services/baseUrl";
import {getBlogById} from "~/services/api/admin/blogs";

export default {
  components: {BookingCard, Booking, AuthorProfile},
  props: ['services', 'id'],
  data: () => ({
    container: null,
    baseUrl
  }),
  mounted() {
    if (this.services) {
      getAService(parseInt(this.id), (data) => {
        this.container = data.service
      })
    } else {
      getBlogById(parseInt(this.id), (data) => {
        this.container = data;
      })
    }
  },
  watch: {
    id() {
      if (this.services) {
        getAService(parseInt(this.id), (data) => {
          console.log(data.service.properties)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  max-height: 400px;
  height: 100%;
}

.hero {
  &-img {
    border-radius: 64px;
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
  }

  &-divider {
    width: 100%;
    height: 1px;
    position: absolute;
    background: linear-gradient(270deg, rgba(48, 48, 48, 0.00) 0%, #303030 44.5%, rgba(48, 48, 48, 0.00) 100%);

    &-container {
      margin-top: 72px;
      margin-bottom: 100px;
    }
  }

  .mouse-container {
    border: 1px solid var(--input-border);
    border-radius: 50%;
    padding: 12px;
    position: relative;
    z-index: 10;
    background: var(--primary-bg);
    width: 68px;
    height: 68px;
  }
}

@media screen and (max-width: 1023px) {
  .hero {
    &-title {
      font-size: 28px;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero {
    &-title {
      font-size: 16px;
    }

    img {
      height: 225px;
      border-radius: 48px;
    }
  }
}
</style>
