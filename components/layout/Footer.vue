<template>
  <div class="c-container footer">
    <div class="footer-top">
      <div class="relative">
        <div class="footer-top-bg-1 absolute"></div>
        <div class="footer-top-bg-2 absolute"></div>
        <div class="relative footer-top-inner py-8 px-4 md:p-10 flex flex-col items-center">
          <div class="footer-top-inner-bg absolute top-0 left-0"></div>
          <div class="title-box-white relative z-10">
            <span></span>
            booking
          </div>
          <div class="flex flex-col items-center relative z-10">
            <h2 class="section-title-1 text-center text-white">
              book free consult and
            </h2>
            <h3 class="section-title-2 text-center text-white">
              get free first session
            </h3>
          </div>
          <div
            class="flex flex-col items-center footer-top-inner-inputs w-full">
            <div class="flex md:flex-row flex-col items-center justify-center mb-11 w-full">
              <FooterInput type="text" class="mb-10 md:mr-10" title="first name" place-holder="your first name"/>
              <FooterInput type="text" title="last name" place-holder="your last name"/>
            </div>
            <div class="flex md:flex-row flex-col items-center justify-center mb-11 w-full">
              <FooterInput type="email" class="mb-10 md:mr-10" title="email" place-holder="your email"/>
              <FooterInput type="text" title="phone number" place-holder="your phone number"/>
            </div>
            <div class="flex md:flex-row flex-col items-center justify-center w-full">
              <FooterInput type="select" :options="locations" class="mb-10 md:mr-10" title="preferred location"
                           place-holder="your location"/>
              <FooterInput type="select" :options="operators" title="choose operator" place-holder="your operator"/>
            </div>
          </div>
          <button class="footer-top-inner-btn font-s-13 flex items-center relative z-10">
            book free consulation
            <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 9L3.58579 6.41421C4.36684 5.63316 4.36683 4.36683 3.58579 3.58579L1 1" stroke="white"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <FooterBottom/>
    <div class="footer-divider"></div>
    <div class="w-full flex items-center md:flex-row flex-col-reverse justify-between mb-12">
      <span class="text-base font-normal md:mt-0 mt-6">
        @2024 by heeriye | all right reserved
      </span>
      <div class="flex items-center">
        <div class="footer-social mr-6">
          <img src="~/assets/images/icons/instagram.svg" alt="">
        </div>
        <div class="footer-social mr-6">
          <img src="~/assets/images/icons/telegram.svg" alt="">
        </div>
        <div class="footer-social mr-6">
          <img src="~/assets/images/icons/whatsapp.svg" alt="">
        </div>
        <div class="footer-social">
          <img src="~/assets/images/icons/linkedin.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterInput from "~/components/layout/FooterInput";
import FooterBottom from "~/components/layout/FooterBottom";

export default {
  components: {FooterBottom, FooterInput},
  data: () => ({
    locations: [
      {
        id: 1,
        title: "new york"
      },
      {
        id: 2,
        title: "mexico"
      }
    ],
    operators: [
      {
        id: 1,
        title: 'walter white'
      },
      {
        id: 2,
        title: "jessi pinkman"
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.footer {
  &-top {
    &-bg-1, &-bg-2 {
      width: 90%;
      height: 90%;
      border-radius: 56px;
    }

    &-bg-1 {
      background: var(--primary-purple);
      transform: rotate(4deg);
      box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }

    &-bg-2 {
      background: var(--box-bg);
      transform: rotate(-4deg);
      box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }

    &-inner {
      background: url("~/assets/images/img/footerBg.png") center center/cover;
      border-radius: 56px;

      &-bg {
        width: 100%;
        height: 100%;
        border-radius: 56px;
        background: rgba(61, 57, 72, 0.64);
        box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      }

      &-inputs {
        margin-top: 73px;
        max-width: 984px;
      }

      &-btn {
        color: white;
        text-transform: capitalize;
        margin-top: 56px;
        padding: 12px 84px;
        border-radius: 100px;
        background: var(--primary-purple);
        box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

        &:hover {
          background: white;
          color: var(--primary-purple);

          path {
            stroke: var(--primary-purple);
          }
        }
      }
    }
  }

  &-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, rgba(61, 57, 72, 0.00) 0%, #3D3948 45.31%, rgba(61, 57, 72, 0.00) 100%);
    margin: 32px 0;
  }

  &-social {
    padding: 12px;
    border-radius: 50%;
    background: var(--gray-bg);
    cursor: pointer;

    &:hover {
      background: var(--primary-purple);
    }
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &-top {
      &-bg-1, &-bg-2 {
        display: none !important;
      }
    }
  }
}
</style>
