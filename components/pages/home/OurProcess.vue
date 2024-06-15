<template>
  <div class="c-container process">
    <div class="flex lg:flex-row flex-col items-center lg:items-end justify-between">
      <div class="flex flex-col lg:items-start items-center">
        <div class="title-box">
          <span></span>
          our process
        </div>
        <div class="relative">
          <div class="flex flex-col lg:items-start items-center relative z-10">
            <h3 class="section-title-1">
              by easy and healthy way
            </h3>
            <h2 class="section-title-2">
              removal your hair
            </h2>
          </div>
          <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="absolute bottom-0" style="border-radius: 100px" alt="" />
        </div>
      </div>
      <div class="flex items-center mb-3 lg:mt-0 mt-10">
        <Button type="purple-button" title="contact us" base="c-button-2" stroke="white" class="mr-6"/>
        <Button type="vacant-button" title="about us" base="c-button-2" stroke="#3D3948"/>
      </div>
    </div>
    <div class="relative flex items-center justify-center">
      <img loading="lazy"     src="~/assets/images/icons/processRelationLeft.png" class="absolute left-relation"
           alt="" />
      <img loading="lazy"     src="~/assets/images/icons/processRelationRight.png" class="absolute right-relation"
           alt="" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 process-cards ">
        <div v-for="item in cards" :key="item.id" class="relative process-card-container">
          <div class="process-card-bg"></div>
          <div class="process-card-bg-2"></div>
          <div class="process-card flex flex-col items-center relative"
               :style="{background: `url(${item.img}) center center/cover`}">
          <span class="process-card-number farro-font">
            {{ item.id }}
          </span>
            <div class="process-card-img-box">
              <div class="flex items-center justify-center">
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="100" height="88" viewBox="0 0 100 88"
                     fill="none">
                  <path
                    d="M46.7133 8.19268C75.296 20.2042 90.7395 -1.36594 97.8151 25.0406C104.891 51.4472 89.2199 78.5899 62.8133 85.6655C36.4068 92.7411 9.26408 77.0703 2.18846 50.6637C-4.88716 24.2571 6.39144 -16.7201 46.7133 8.19268Z"
                    :fill="item.icon_color"/>
                </svg>
                <img loading="lazy"   :src="item.icon" class="relative z-10" alt="" />
              </div>
            </div>
            <div class="process-card-inner-bg"></div>
            <div class="flex flex-col items-center relative z-10 process-card-texts">
              <div class="flex items-center">
                <img loading="lazy"     src="~/assets/images/icons/star-white.svg" alt="" />
                <span class="text-xl font-bold text-white lg:text-left text-center">
                {{ item.title }}
              </span>
                <img loading="lazy"     src="~/assets/images/icons/star-white.svg" alt="" />
              </div>
              <p class="text-white text-base font-normal text-center mt-3">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";

export default {
  components: {Button},
  data: () => ({
    cards: [
      {
        id: 1,
        title: "contact us",
        desc: "contact us to get consultation time to talking about your laser",
        icon: require("~/assets/images/img/prcess1.webp"),
        img: require("~/assets/images/img/prcessBg1.webp"),
        icon_color: '#E5DAFF'
      },
      {
        id: 2,
        title: "choose services",
        desc: "after meet, choose your own service that you want to do",
        icon: require("~/assets/images/img/prcess2.webp"),
        img: require("~/assets/images/img/prcessBg2.webp"),
        icon_color: '#FFCCD4'
      },
      {
        id: 3,
        title: "laser hair",
        desc: "finally, come to our clinic to laser your hairs",
        icon: require("~/assets/images/img/prcess3.webp"),
        img: require("~/assets/images/img/processBg3.webp"),
        icon_color: '#CCCEFF'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.process {
  &-cards {
    margin-top: 106px;
  }

  &-card {
    border-radius: 32px;

    &-bg {
      width: 100%;
      height: 100%;
      border-radius: 32px;
      background: var(--primary-purple);
      position: absolute;
      transform: rotate(3deg);
      opacity: 0;
    }

    &-bg-2 {
      width: 100%;
      height: 100%;
      border-radius: 32px;
      background: var(--box-bg);
      position: absolute;
      transform: rotate(-3deg);
      opacity: 0;
    }

    &-inner-bg {
      border-radius: 32px;
      background: rgba(99, 93, 116, 0.68);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &-img-box {
      position: absolute;
      z-index: 4;
      top: -36px;
    }

    &-texts {
      margin: 70px 44px 16px 44px;
    }

    &-number {
      position: absolute;
      font-size: 40px;
      font-weight: 500;
      left: 35%;
      top: -62px;
      z-index: 10;
    }

    &-container {
      cursor: pointer;

      &:hover {
        .process-card-bg, .process-card-bg-2 {
          opacity: 1 !important;
        }
      }
    }
  }

  .left-relation {
    left: 30%;
    top: 65%;
    z-index: 10;
  }

  .right-relation {
    top: 65%;
    right: 30%;
    z-index: 10;
  }
}

@media screen and (max-width: 1023px) {
  .process {
    .left-relation {
      top: unset !important;
      left: 28%;
      bottom: 20px;
    }

    .right-relation {
      top: 32% !important;
      right: 28%;
    }
  }
}

@media screen and (max-width: 767px) {
  .process {
    &-cards {
      row-gap: 81px;
    }

    .right-relation, .left-relation {
      top: 40% !important;
      right: unset;
      left: -12px;
      height: 22px;
      transform: rotate(270deg);
    }

    .left-relation {
      left: unset;
      right: -12px;
      top: 73% !important;
    }
  }
}
</style>
