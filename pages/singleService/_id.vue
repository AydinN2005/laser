<template>
  <div class="sb">
    <SBHero :services="true"/>
    <Comments/>
    <OurServices class="section-space"/>
  </div>
</template>

<script>
import SBHero from "~/components/pages/singleBlog/SBHero";
import Comments from "~/components/pages/singleBlog/Comments";
import OurServices from "~/components/pages/home/OurServices";

export default {
  components: {OurServices, Comments, SBHero}
}
</script>

<style scoped>
.sb {
  margin-top: 127px;
}
</style>
