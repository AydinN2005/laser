<template>
  <div>
    <CBHero/>
    <Blogs class="blogs"/>
  </div>
</template>

<script>
import CBHero from "~/components/pages/categoryBlog/CBHero";
import Blogs from "~/components/pages/categoryBlog/Blogs";

export default {
  components: {Blogs, CBHero}
}
</script>

<style scoped>
.blogs {
  margin-top: 90px;
}

@media screen and (max-width: 1023px) {
  .blogs {
    margin-top: 0;
  }
}
</style>
