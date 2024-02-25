<template>
  <div class="flex flex-col">
    <div class="title-box lg:mx-0 mx-auto">
      <span></span>
      contact us
    </div>
    <div class="relative w-max md:mx-0 mx-auto">
      <div class="flex flex-col relative md:items-start items-center z-10">
        <h2 class="section-title-1">
          if you have question let`s chat
        </h2>
        <h3 class="section-title-2">
          reach out to us
        </h3>
      </div>
      <img src="~/assets/images/img/whyusTextBg.png" class="w-full absolute bottom-0" style="border-radius: 100px"
           alt="">
    </div>
    <p class="text-sm font-bold gray-text mt-4 mb-16 lg:text-left text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .lit, sed do eiusmod
      tempor incididunt .
    </p>
    <div class="flex flex-col md:grid md:grid-cols-2 gap-x-5 gap-y-10">
      <TextInput title="full name" place-holder="your full name" type="text"/>
      <TextInput title="email" place-holder="your email" type="email"/>
      <TextInput title="phone number" place-holder="your phone number" type="text"/>
      <TextInput :options="locations" title="preferred location" place-holder="your location" type="select"/>
      <TextInput title="message" place-holder="your message" type="desc" class="col-start-1 col-end-3"/>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";

export default {
  components: {TextInput},
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
  })
}
</script>

<style scoped>

</style>
