<template>
  <div class="c-container flex flex-col items-center whyus">
    <div class="title-box">
      <span></span>
      why i use laser ?
    </div>
    <div class="relative mb-4">
      <div class="flex flex-col items-center relative z-10">
        <h3 class="section-title-1 text-center">why people love</h3>
        <h2 class="section-title-2 text-center">laser hair removal</h2>
      </div>
      <img
        src="~/assets/images/img/whyusTextBg.png"
        class="absolute bottom-0 w-full"
        alt=""
      />
    </div>
    <p class="text-center text-xl font-semibold gray-text mb-14">
      It’s about sanity, not vanity! Every other form of hair removal is
      temporary. Laser hair removal gives you long lasting results.
    </p>
    <div class="flex items-center lg:flex-row flex-col whyus-box relative">
      <div class="whyus-box-overlay"></div>
      <div class="whyus-box-left p-4 md:p-8 w-full">
        <div class="flex flex-col justify-end h-full w-full relative z-10">
          <div class="whyus-box-left-icon w-max rounded-2xl p-4 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_128_233)">
                <path
                  d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM18.2 10.512L13.774 14.857C12.991 15.625 11.983 16.008 10.974 16.008C9.976 16.008 8.978 15.632 8.198 14.879L6.299 13.012C5.905 12.625 5.9 11.992 6.287 11.598C6.673 11.203 7.308 11.198 7.701 11.586L9.594 13.447C10.37 14.197 11.595 14.193 12.375 13.429L16.8 9.085C17.193 8.697 17.824 8.704 18.214 9.098C18.601 9.492 18.595 10.125 18.2 10.512Z"
                  fill="#3D3948"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_233">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-white">
            1. Permanent hair reduction
          </h3>
          <p class="text-base font-normal mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>
      <div
        class="whyus-box-right grid lg:grid-cols-4 grid-cols-1 w-full h-full"
      >
        <div
          v-for="item in images"
          :key="item.id"
          class="whyus-box-right-item relative flex items-center justify-center"
          :style="{ background: `url(${item.img}) center center/cover` }"
        >
          <div class="whyus-box-right-item-overlay"></div>
          <span
            class="whyus-box-right-item-text absolute text-white font-bold z-10"
          >
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        id: 1,
        img: require('~/assets/images/img/whyusWoman4.png'),
        title: '2.no more razor burn hair',
      },
      {
        id: 2,
        img: require('~/assets/images/img/whyusWoman3.png'),
        title: '3.no more sticky wax and painful rip',
      },
      {
        id: 3,
        img: require('~/assets/images/img/whyusWoman2.png'),
        title: '4.fast treatment and lasting result',
      },
      {
        id: 4,
        img: require('~/assets/images/img/whyusWoman1.png'),
        title: '5.more affordable lifetime of wasxing',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
.whyus {
  &-title-1,
  &-title-2 {
    font-size: 40px;
    font-weight: 700;
  }

  &-title-2 {
    font-size: 68px;
  }

  &-box {
    border-radius: 40px;
    height: 766px;

    &-overlay {
      background: rgba(61, 57, 72, 0.48);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 4;
      border-radius: 40px;
    }

    &-left {
      background: url('~/assets/images/img/whyusWoman.png') center center/cover;
      height: 100%;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;

      &-icon {
      }
    }

    &-right {
      &-item {
        &-text {
          transform: rotate(-90deg);
          min-width: max-content;
          font-size: 32px;
          font-weight: bold;
        }

        &-overlay {
          backdrop-filter: blur(2px);
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        &:last-child {
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .whyus {
    &-box {
      height: 900px;

      &-right {
        &-item {
          justify-content: flex-start;
          padding-left: 24px;
          &-text {
            transform: rotate(0);
            text-align: left;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .whyus {
    &-box {
      &-right {
        &-item {
          &-text {
            font-size: 16px;
            min-width: unset;
          }
        }
      }
    }
  }
}
</style>
