<template>
  <div class="footer">
    <div class="footer-bottom">
      <h2 class="mb-2.5 footer-bottom-title relative inter-font lg:mx-0 mx-auto">
        2day laser & skin Care clinic
        <svg class="svg-1" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0L5.08036 2.91964L8 4L5.08036 5.08036L4 8L2.91964 5.08036L0 4L2.91964 2.91964L4 0Z"
                fill="#3D3948"/>
        </svg>
        <svg class="svg-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
          <path d="M3 0L3.81027 2.18973L6 3L3.81027 3.81027L3 6L2.18973 3.81027L0 3L2.18973 2.18973L3 0Z"
                fill="#3D3948"/>
        </svg>
      </h2>
      <div class="flex justify-between w-full lg:flex-row flex-col">
        <div class="w-full lg:mb-0 mb-10">
          <p class="lg:text-left text-center text-base font-nomral md:mr-12">
            At 2day laser & skin Care clinic, we proud ourselves on providing top-quality cosmetic and medical
            treatments for all of our clients. Our state-of-the-art facility is equipped with the latest technology and
            our team of highly trained professionals are dedicated to helping you achieve your desired results. Our
            services range from laser hair removal and skin rejuvenation to Botox and filler injections, allowing us to
            cater to a wide range of needs and concerns.
          </p>
        </div>
        <div class="w-full flex md:flex-row flex-col md:items-start items-center justify-between">
          <div class="flex flex-col md:items-start items-center md:w-full md:mr-3">
            <h3 class="text-xl font-medium mb-6">
              2day laser & skin care clinic
            </h3>
            <div class="grid grid-cols-1 gap-5 md:justify-items-start justify-items-center">
              <div v-for="link in links" :key="link.id" class="overflow-hidden w-max">
                <nuxt-link :to="link.route" class="flex items-center footer-bottom-link min-w-max">
                  <img width="16" height="16" loading="lazy" src="~/assets/images/icons/starBlack.svg" alt=""
                       class="mr-2 md:block hidden"/>
                  <span>
                {{ link.title }}
              </span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:items-start items-center md:w-full md:mt-0 mt-8 md:mr-3">
            <h3 class="text-xl font-medium mb-6">
              our services
            </h3>
            <div class="grid grid-cols-1 gap-4 md:justify-items-start justify-items-center">
            <span class="text-base font-normal gray-text-2" v-for="item in services" :key="item.id">
              {{ item.title }}
            </span>
            </div>
          </div>
          <div class="flex flex-col md:items-start items-center md:mt-0 mt-8 md:w-full">
            <h3 class="text-xl font-medium mb-6">
              contact us
            </h3>
            <div class="grid grid-cols-1 gap-6 md:justify-items-start justify-items-center">
              <div class="flex items-center">
                <img loading="lazy" src="~/assets/images/icons/phone-call.svg" alt=""/>
                <span class="text-base font-normal gray-text-2 ml-3">
              +1 647-745-6257
            </span>
              </div>
              <div class="flex items-center">
                <img loading="lazy" src="~/assets/images/icons/phone-office.svg" width="24" height="24" alt=""/>
                <span class="text-base font-normal gray-text-2 ml-3">
                 +1 647-447-6238
            </span>
              </div>
              <div class="flex items-center flex-wrap">
                <img loading="lazy" src="~/assets/images/icons/mail.svg" alt="" class="mr-3"/>
                <span class="text-base font-normal gray-text-2">
              info@2daylaser.ca
            </span>
              </div>
              <div class="flex items-start">
                <img loading="lazy" src="~/assets/images/icons/location.svg" alt=""/>
                <span class="text-base font-normal ml-3 gray-text-2">
                UNIT 201,#16700 Bayview Avenue , New market , ONTARIO,L3X1W1.
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        id: 1,
        title: "home",
        route: '/'
      },
      {
        id: 2,
        title: "blogs",
        route: '/categoryBlog'
      },
      {
        id: 6,
        title: "contact us",
        route: '/contactUs'
      },
      {
        id: 7,
        title: "about us",
        route: "/aboutUs"
      }
    ],
    services: [
      {
        id: 1,
        title: "fat removal"
      },
      {
        id: 2,
        title: "cellulite removal"
      },
      {
        id: 3,
        title: "hair removal"
      },
      {
        id: 4,
        title: "facial package"
      },
      {
        id: 5,
        title: "skin rejuvenatian"
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.footer {
  &-bottom {
    margin-top: 106px;

    &-title {
      color: #000;
      text-shadow: 2px 2px 0px #9A77FF, 1px 1px 0px #FA5770;
      font-size: 32px;
      font-weight: 400;
      text-transform: uppercase;
      width: max-content;

      .svg-1, .svg-2 {
        position: absolute;
      }

      .svg-1 {
        top: -0px;
        right: -8px;
      }

      .svg-2 {
        right: -12px;
        top: -8px;
      }
    }

    &-link {
      transform: translateX(-16px);

      span {
        color: var(--gray-text-2);
      }

      &:hover {
        transform: translateX(0);

        span {
          color: var(--text-color);
          text-decoration: underline;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &-bottom {
      &-title {
        font-size: 20px;
      }

      &-link {
        transform: translateX(0px);
      }
    }
  }
}
</style>
