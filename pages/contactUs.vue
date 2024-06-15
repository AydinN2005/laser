<template>
  <div class="c-container flex flex-col items-center contact-us">
    <div class="flex items-end justify-between w-full">
      <ContactLeft class="w-full"/>
      <ContactRight class="w-full ml-10 lg:block hidden"/>
    </div>
    <AllQuestions class="section-space"/>
  </div>
</template>

<script>
import ContactLeft from "~/components/pages/contactUs/ContactLeft";
import ContactRight from "~/components/pages/contactUs/ContactRight";
import Button from "~/components/elements/Button";
import AllQuestions from "~/components/pages/faq/AllQuestions";

export default {
  components: {AllQuestions, Button, ContactRight, ContactLeft}
}
</script>

<style scoped>
.contact-us {
  margin-top: 94px;
}
</style>
