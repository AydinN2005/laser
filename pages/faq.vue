<template>
  <div>
    <faq-hero />
    <AllQuestions class="section-space"/>
  </div>
</template>

<script>
import FaqHero from '~/components/pages/faq/FaqHero.vue'
import AllQuestions from "~/components/pages/faq/AllQuestions";
export default {
  components: {AllQuestions, FaqHero },
}
</script>

<style lang="scss" scoped></style>
