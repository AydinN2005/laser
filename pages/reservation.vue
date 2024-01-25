<template>
  <div class="relative reservation">
    <img src="~/assets/images/img/reservationBg.png" class="absolute top-0 left-0 w-full" alt="">
    <div class="c-container relative z-10">
      <div class="flex flex-col items-center relative">
        <div class="absolute" style="top: -60px; left: 0px">
          <div class="relative">
            <img src="~/assets/images/icons/reservationLines.png" class="absolute " style="top: -20px;right: 40px"
                 alt="">
            <img src="~/assets/images/img/reservationWoman2.png" alt="">
          </div>
        </div>
        <div class="absolute" style="top: -30px;right: 30px">
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
        <p class="gray-text text-base font-bold mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
          tempor incididunt .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          .lit, sed do eiusmod tempor incididunt .
        </p>
        <div class="flex flex-col items-center">
          <div class="grid grid-cols-4 gap-x-5 gap-y-10 reservation-inputs">
            <TextInput title="first name" type="text" place-holder="example jessi" :required="true"/>
            <TextInput title="last name" type="text" place-holder="example white" :required="true"/>
            <TextInput title="phone number" type="text" place-holder="example 551 012 035" :required="true"/>
            <TextInput title="email" type="email" place-holder="example@gmail.com" :required="true"/>
            <TextInput title="location" type="select" place-holder="example US" :options="test" :required="true"/>
            <TextInput title="New or Existing Customer" type="select" place-holder="" :options="test" :required="true"/>
            <div class="col-start-3 col-end-5">
              <TextInput title="When is the best time to reach you?" type="select" place-holder="" :options="test"
                         :required="true"/>
            </div>
            <div class="col-start-1 col-end-5">
              <TextInput title="your notes" type="desc" place-holder="write your more description" :required="true"/>
            </div>
          </div>
          <Button type="purple-button" title="book services" stroke="white" base="c-button-2" class="mt-14"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import Button from "~/components/elements/Button";

export default {
  components: {Button, TextInput},
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
}
</style>
