<template>
  <div class="sb">
    <SBHero/>
    <Comments/>
    <OurBlog class="section-space"/>
  </div>
</template>

<script>
import SBHero from "~/components/pages/singleBlog/SBHero";
import Comments from "~/components/pages/singleBlog/Comments";
import OurBlog from "~/components/pages/home/OurBlog";

export default {
  components: {OurBlog, Comments, SBHero}
}
</script>

<style scoped>
.sb {
  margin-top: 127px;
}
</style>
