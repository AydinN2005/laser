<template>
  <div class="relative">
    <div class="md:flex hidden top-section py-2.5 px-8 items-center justify-center">
      <div class="flex items-center w-full">
        <div class="top-section-left-line"></div>
        <img loading="lazy" src="~/assets/images/icons/Star-white.svg" class="ml-3" alt=""/>
      </div>

      <div class="flex items-center mx-4 justify-center">
        <span class="top-section-text block min-w-max">
          book now fro first time %56 off
        </span>
      </div>
      <div class="flex items-center w-full">
        <img loading="lazy" src="~/assets/images/icons/Star-white.svg" class="mr-3" alt=""/>
        <div class="top-section-right-line"></div>
      </div>
    </div>
    <div class="top-section p-4 flex flex-col items-center md:hidden">
      <span class="top-section-text block min-w-max mb-3">
          book now fro first time %56 off
      </span>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center w-full">
          <div class="top-section-left-line"></div>
          <img loading="lazy" src="~/assets/images/icons/Star-white.svg" class="ml-3" alt=""/>
        </div>
        <div class="flex items-center w-full">
          <img loading="lazy" src="~/assets/images/icons/Star-white.svg" class="mr-3" alt=""/>
          <div class="top-section-right-line"></div>
        </div>
      </div>
    </div>
    <Menu/>
    <!--    <img loading="lazy" src="~/assets/images/img/logoBg.webp" class="absolute h-full w-full" style="z-index: -2" alt=""/>-->
    <nuxt/>
    <Footer class="section-space"/>
    <div class="overlay" :style="showOffer ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <OfferModal @close="showOffer = false" :offer="offer"/>
    </div>
    <div class="fixed bottom-4 z-50 cursor-pointer" :style="{left: cLeft}" @click="handleScrollToTop">
      <img width="48" height="48" src="~/assets/images/icons/arrowUp.svg" alt="">
    </div>
  </div>
</template>

<script>
import Menu from "~/components/layout/Menu";
import Footer from "~/components/layout/Footer";
import {getOffer} from "~/services/api/admin/offer";
import OfferModal from "~/components/elements/OfferModal";


export default {
  components: {OfferModal, Footer, Menu},
  data: () => ({
    offer: null,
    showOffer: false,
    cLeft: '-100vw'
  }),
  mounted() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('user')) {
        this.$store.commit('setLogin', true)
      }
    }
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('offerCount')) {
        getOffer((data) => {
          if (data.length) {
            this.showOffer = true;
            this.offer = data[0].image
            localStorage.setItem('offerCount', 'show')
          }
        })
      }
    }
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('offerCount')
      }
    }, 1000 * 60 * 60 * 5)
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          this.cLeft = '16px'
        } else {
          this.cLeft = '-50vw'
        }
      })
    }
  },
  methods: {
    handleScrollToTop() {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.top-section {
  background-color: var(--primary);

  &-left-line, &-right-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  }

  &-right-line {
    background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  }

  &-text, &-link {
    font-size: 13px;
    font-weight: 500;
    color: #fff;
  }

  &-link {
    color: #FA5770;
    background: #fff;
    box-shadow: -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

    &:hover {
      color: white;
      background-color: #FA5770;

      path {
        stroke: white;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .section-space {
    margin-top: 125px;
  }
}

@media screen and (max-width: 767px) {
  .section-space {
    margin-top: 70px;
  }
}
</style>
