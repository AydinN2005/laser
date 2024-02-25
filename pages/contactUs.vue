<template>
  <div class="c-container flex flex-col items-center contact-us">
    <div class="flex items-end justify-between w-full">
      <ContactLeft class="w-full"/>
      <ContactRight class="w-full ml-10 lg:block hidden"/>
    </div>
    <Button stroke="white" title="send message" type="purple-button" base="c-button-2" class="mt-10 lg:w-max w-full"/>
  </div>
</template>

<script>
import ContactLeft from "~/components/pages/contactUs/ContactLeft";
import ContactRight from "~/components/pages/contactUs/ContactRight";
import Button from "~/components/elements/Button";

export default {
  components: {Button, ContactRight, ContactLeft}
}
</script>

<style scoped>
.contact-us {
  margin-top: 94px;
}
</style>
