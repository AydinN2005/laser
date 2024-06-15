<template>
  <div class="laser">
    <div class="c-container md:block flex flex-col items-center">
      <div class="title-box">
        <span></span>
        laser proccess
      </div>
      <div class="flex items-center relative md:w-max laser-title-container">
        <div class="relative">
          <div class="flex flex-col md:items-start items-center">
            <h3 class="section-title-1">
              Pre & Post Care Instruction
            </h3>
            <div class="relative">
              <h2 class="section-title-2 relative z-10">
                easily till be you happy
              </h2>
            </div>
          </div>
          <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="w-full absolute bottom-0 right-0 w-full"
               style="border-radius: 100px;bottom: 0px"
               alt="" />
        </div>
      </div>
      <div class="grid grid-cols-12 laser-woman-images-container w-full">
        <div class="relative mt-8 w-full h-full col-start-1 col-end-4">
          <div class="laser-card-bg-1"></div>
          <div class="laser-card py-8 px-6 flex flex-col relative z-10">
            <div class="flex flex-col md:items-start items-center">
              <h3 class="laser-card-title font-bold text-white">
                hair removal <br> for ever and
              </h3>
              <div class="font-bold purple-color p-1 rounded-full laser-card-title-box mt-5">
                welcome to freedom
              </div>
            </div>
            <p class="text-sm font-bold text-white mt-4 mb-14 md:text-left text-center">
              This is where the concept of 'hair removal for ever and ever' comes into play. The idea of permanent hair
              removal has been around for decades, with methods such as electrolysis and laser hair removal being the
              most well-known.
            </p>
            <Button type="purple-button" title="contact us" base="c-button-2" stroke="white"/>
          </div>
        </div>
        <div class="flex col-start-4 col-end-13 laser-woman-images-container-inner">
          <img loading="lazy"     src="~/assets/images/img/proseccWoman1.webp" class="w-full" alt="" />
          <img loading="lazy"     src="~/assets/images/img/proseccWoman2.webp" class="w-full laser-third-woman-image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";

export default {
  components: {Button}
}
</script>

<style scoped lang="scss">
.laser {
  margin-top: 128px;

  &-card {
    height: 100%;
    justify-content: space-between;

    &-bg-1 {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 40px;
    }

    &-bg-1 {
      background: var(--primary-purple);
      transform: rotate(-2deg);
    }

    border-radius: 40px;
    background: var(--input-border);
    border: 1px solid var(--primary-purple);
    box-shadow: 2px 2px 28px 0px rgba(255, 255, 255, 0.16) inset, 0px 8px 20px 0px rgba(48, 48, 48, 0.20);

    &-title {
      font-size: 32px;

      &-box {
        font-size: 20px;
        background: white;
        box-shadow: 0px 8px 12px 0px rgba(255, 255, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      }
    }
  }

  &-third-woman-image {
    position: relative;
    top: -80px;
  }
}

@media screen and (min-width: 1281px) {
  .laser {
    &-woman-images-container-inner {
      max-height: 500px;
    }

    &-third-woman-image {
      height: 700px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .laser {
    &-card {
      &-title {
        br {
          display: none;
        }

        &-box {

        }
      }
    }

    &-title-container {
      flex-direction: column;
      align-items: flex-start;
    }

    &-woman-images-container {
      display: flex;
      flex-direction: column;

      &-inner {
        margin-top: 40px;

        img {
          &:first-child {
            max-height: 500px;
          }

          &:last-child {
            max-height: 800px;
          }
        }
      }
    }

    &-third-woman-image {
      top: 0;
    }
  }
}

@media screen and (max-width: 767px) {
  .laser {
    &-card {
      &-title {
        font-size: 19px;

        &-box {
          font-size: 16px;
          width: max-content;
        }
      }
    }
  }
  .laser-woman-images-container-inner{
    flex-direction: column;
  }
  .laser-third-woman-image{
    display: none;
  }
}
</style>
