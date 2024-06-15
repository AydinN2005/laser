<template>
  <div class="sb">
    <SBHero :id="$route.params.id" :services="false"/>
    <Comments :id="$route.params.id" :services="false"/>
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
