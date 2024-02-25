<template>
  <div class="relative reservation">
    <img src="~/assets/images/img/reservationBg.png" class="absolute top-0 left-0 w-full" alt="">
    <div class="c-container relative z-10">
      <div class="flex flex-col items-center relative lg:pt-0 pt-6">
        <div class="absolute reservation-left-woman">
          <div class="relative">
            <img src="~/assets/images/icons/reservationLines.png" class="absolute"
                 style="top: -20px;right: 40px"
                 alt="">
            <img src="~/assets/images/img/reservationWoman2.png" alt="">
          </div>
        </div>
        <div class="absolute reservation-right-woman">
          <div class="relative">
            <img src="~/assets/images/icons/reservationStars.png" class="absolute" style="top: -30px;left: 10px" alt="">
            <img src="~/assets/images/img/reservationWoman1.png" alt="">
          </div>
        </div>
        <div class="title-box mt-8">
          <span></span>
          booking time
        </div>
        <div class="relative">
          <div class="flex flex-col items-center relative z-10">
            <h3 class="section-title-1">
              Easily book the best time for
            </h3>
            <h2 class="section-title-2">
              your hair laser removal
            </h2>
          </div>
          <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="">
        </div>
        <p class="gray-text text-sm md:text-base font-bold mt-4 text-center reservation-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
          tempor incididunt .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          .lit, sed do eiusmod tempor incididunt .
        </p>
        <div class="flex flex-col items-center w-full">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 reservation-inputs w-full">
            <TextInput title="first name" type="text" place-holder="example jessi" :required="true"/>
            <TextInput title="last name" type="text" place-holder="example white" :required="true"/>
            <TextInput title="phone number" type="text" place-holder="example 551 012 035" :required="true"/>
            <TextInput title="email" type="email" place-holder="example@gmail.com" :required="true"/>
            <TextInput title="location" type="select" place-holder="example US" :options="test" :required="true"/>
            <TextInput title="New or Existing Customer" type="select" place-holder="" :options="test" :required="true"/>
            <div class="lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-3">
              <TextInput title="When is the best time to reach you?" type="select" place-holder="" :options="test"
                         :required="true"/>
            </div>
            <div class="col-start-1 lg:col-end-5 md:col-end-3">
              <TextInput title="your notes" type="desc" place-holder="write your more description" :required="true"/>
            </div>
          </div>
          <div class="flex items-center justify-between w-full mt-14 lg:flex-row flex-col">
            <div class="flex items-center md:flex-row flex-col">
              <span class="text-xl md:text-2xl font-bold mr-6">
                Consultation Form :
              </span>
              <div class="flex items-center md:mt-0 mt-7">
                <Checkbox title="now" class="mr-6"/>
                <Checkbox title="on clinic"/>
              </div>
            </div>
            <Button type="purple-button" title="book services" stroke="white" base="c-button-2"
                    class="lg:mt-0 mt-12 lg:w-max w-full"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import Button from "~/components/elements/Button";
import Checkbox from "~/components/elements/Checkbox";

export default {
  components: {Checkbox, Button, TextInput},
  data: () => ({
    test: [
      {
        id: 1,
        title: 'test'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.reservation {
  margin-top: 160px;

  &-inputs {
    margin-top: 73px;
  }

  &-left-woman {
    top: -60px;
    left: 0;
  }

  &-right-woman {
    top: -30px;
    right: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .reservation {
    .section-title-2 {
      font-size: 48px;
    }

    .section-title-1 {
      font-size: 32px;
    }

    &-left-woman {
      top: -140px;
    }

    &-right-woman {
      top: -100px;
    }
  }
}

@media screen and (max-width: 767px) {
  .reservation {
    &-left-woman, &-right-woman {
      width: 100px;
    }

    &-left-woman {
      width: 120px;
      top: -90px;
    }

    &-right-woman {
      right: 0;
      top: -90px;
    }

    .section-title-1 {
      font-size: 16px;
    }

    .section-title-2 {
      font-size: 24px;
    }

    &-desc {
      text-overflow: ellipsis;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
      text-align: center;
    }
  }
}
</style>
