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
      <img loading="lazy" src="~/assets/images/img/whyusTextBg.webp" class="w-full absolute bottom-0"
           style="border-radius: 100px"
           alt=""/>
    </div>
    <p class="text-sm font-bold gray-text mt-4 mb-16 lg:text-left text-center">
      If you have any questions or concerns, don't hesitate to reach out to us. Our team is always available to chat and
      assist you in any way we can. We understand that navigating through various products and services can be
      overwhelming, so we want to make sure you have all the information you need to make an informed decision.
    </p>
    <div class="flex flex-col md:grid md:grid-cols-2 gap-x-5 gap-y-10">
      <TextInput :data="messageData.fullName" @dataChanged="(data) => {messageData.fullName = data}" title="full name"
                 place-holder="your full name"
                 type="text"/>
      <TextInput :data="messageData.email" @dataChanged="(data) => {messageData.email = data}" title="email"
                 place-holder="your email"
                 type="email"/>
      <TextInput :data="messageData.phoneNumber" @dataChanged="(data) => {messageData.phoneNumber = data}"
                 title="phone number"
                 place-holder="your phone number" type="text"/>
      <TextInput :data="messageData.location" @dataChanged="(data) => {messageData.location = data}"
                 title="preferred location"
                 place-holder="your location" type="select">
        <option value="UNIT 201,#16700 Bayview Avenue , New market , ONTARIO,L3X1W1.">
          UNIT 201,#16700 Bayview Avenue , New market , ONTARIO,L3X1W1.
        </option>
      </TextInput>
<!--      <TextInput :data="messageData.message" @dataChanged="(data) => {messageData.message = data}" title="message"-->
<!--                 place-holder="your message"-->
<!--                 type="desc" class="col-start-1 col-end-3"/>-->
      <ContentInput @dataChanged="(data) => {messageData.message = data}" :data="messageData.message" class="col-start-1 col-end-3"/>
    </div>
    <div @click="addHandler" class="self-end">
      <Button :loading="loading" stroke="white" title="send message" type="purple-button" base="c-button-2"
              class="mt-10 lg:w-max w-full"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import {sendMessage} from "~/services/api/admin/contactUs";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import Button from "~/components/elements/Button";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, Button, NotificationCard, TextInput},
  data: () => ({
    messageData: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      message: ""
    },
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
  }),
  methods: {
    addHandler() {
      this.loading = true;
      sendMessage(this.messageData, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
          this.messageData.fullName = ''
          this.messageData.email = ''
          this.messageData.phoneNumber = ''
          this.messageData.location = ''
          this.messageData.message = ''
        }
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
