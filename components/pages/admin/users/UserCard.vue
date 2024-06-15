<template>
  <nuxt-link :to="`/admin/singleUser/${user.id}`">
    <div class="flex flex-col items-center justify-center a-user relative">
      <div class="absolute  a-user-arrow">
        <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dii_388_175)">
            <circle cx="46" cy="40.0483" r="34" fill="#303030"/>
          </g>
          <path
            d="M60.5 27.0483C60.5 26.2199 59.8284 25.5483 59 25.5483L45.5 25.5483C44.6716 25.5483 44 26.2199 44 27.0483C44 27.8768 44.6716 28.5483 45.5 28.5483L57.5 28.5483L57.5 40.5483C57.5 41.3768 58.1716 42.0483 59 42.0483C59.8284 42.0483 60.5 41.3768 60.5 40.5483L60.5 27.0483ZM34.0607 54.109L60.0607 28.109L57.9393 25.9877L31.9393 51.9877L34.0607 54.109Z"
            fill="url(#paint0_linear_388_175)"/>
          <defs>
            <filter id="filter0_dii_388_175" x="0" y="0.0483398" width="92" height="92" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="6"/>
              <feGaussianBlur stdDeviation="6"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.16 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_388_175"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_388_175" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dx="-1" dy="-1"/>
              <feGaussianBlur stdDeviation="6"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_388_175"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dx="2" dy="2"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow_388_175" result="effect3_innerShadow_388_175"/>
            </filter>
            <linearGradient id="paint0_linear_388_175" x1="59.3535" y1="24.9018" x2="33.3535" y2="56.4018"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <svg class="user-icon" width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1135_37)">
          <path
            d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22843 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z"
            fill="#fff"/>
          <path
            d="M10 11.6667C8.01155 11.6689 6.10518 12.4597 4.69914 13.8658C3.29309 15.2718 2.50221 17.1782 2.5 19.1667C2.5 19.3877 2.5878 19.5996 2.74408 19.7559C2.90036 19.9122 3.11232 20 3.33333 20C3.55435 20 3.76631 19.9122 3.92259 19.7559C4.07887 19.5996 4.16667 19.3877 4.16667 19.1667C4.16667 17.6196 4.78125 16.1358 5.87521 15.0419C6.96917 13.9479 8.4529 13.3333 10 13.3333C11.5471 13.3333 13.0308 13.9479 14.1248 15.0419C15.2188 16.1358 15.8333 17.6196 15.8333 19.1667C15.8333 19.3877 15.9211 19.5996 16.0774 19.7559C16.2337 19.9122 16.4457 20 16.6667 20C16.8877 20 17.0996 19.9122 17.2559 19.7559C17.4122 19.5996 17.5 19.3877 17.5 19.1667C17.4978 17.1782 16.7069 15.2718 15.3009 13.8658C13.8948 12.4597 11.9884 11.6689 10 11.6667Z"
            fill="#fff"/>
        </g>
        <defs>
          <clipPath id="clip0_1135_37">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div class="grid grid-cols-1 gap-4 mt-4">
      <span class="a-user-text">
        {{ user.first_name }} {{ user.last_name }}
      </span>
        <span class="a-user-text">
        {{ user.email }}
      </span>
        <span class="a-user-text">
        {{ user.file_number ? user.file_number : 'no file number' }}
      </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped lang="scss">
.a-user {
  background: var(--primary-purple);
  color: white;
  padding: 16px;
  border-radius: 24px;
  border: 1px solid white;
  cursor: pointer;

  &-arrow {
    z-index: -3;
    opacity: 0;
    top: -26px;
    right: -16px;

    svg {
      width: 64px;
    }
  }

  &-text {
    color: white;
    font-size: 14px;
    text-align: center;
    display: block;
    width: 100%;
  }

  &:hover {
    background: white;

    span {
      color: var(--primary-purple);
    }

    .user-icon {
      path {
        fill: var(--primary-purple);
      }
    }

    .a-user-arrow {
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>
