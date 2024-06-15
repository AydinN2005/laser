<template>
  <div class="c-container blog">
    <div class="flex justify-between w-full items-end blog-top">
      <div class="flex flex-col lg:items-start items-center w-full">
        <div class="title-box">
          <span></span>
          our blog
        </div>
        <div class="relative">
          <div class="flex flex-col relative lg:items-start items-center z-10">
            <h3 class="section-title-1">
              best and newst
            </h3>
            <h2 class="section-title-2">
              beauty blog in
              <span>
              2day laser & skin Care clinic
            </span>
            </h2>
          </div>
          <img loading="lazy"     src="~/assets/images/img/whyusTextBg.webp" class="w-full absolute bottom-0" style="border-radius: 100px"
               alt="" />
        </div>
      </div>
      <div class="lg:flex hidden w-full justify-end">
        <Button stroke="white" base="c-button-2" type="purple-button" title="see all"
                class="mb-4 blog-btn" route="/categoryBlog"/>
      </div>
    </div>
    <div v-if="blogs !== null" class="blog-slider mt-14">
      <Slider :items="3" :dots="true" :nav="false" :margin="24" :auto-play="true"
              :responsive="{0: {items: 1}, 768: {items: 2}, 1024: {items: 3}}">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog"/>
      </Slider>
    </div>
  </div>
</template>

<script>
import Button from "~/components/elements/Button";
import Slider from "~/components/helper/Slider";
import BlogCard from "~/components/elements/BlogCard";
import {getAllBlogs} from "~/services/api/admin/blogs";

export default {
  components: {BlogCard, Slider, Button},
  data: () => ({
    // blogs: [
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    //   {
    //     id: 1,
    //     img: require('~/assets/images/img/blogImg.webp'),
    //     hash: ['#beauty', '#laser tool'],
    //     title: "how pricing laser in 2024 years ?",
    //     desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
    //   },
    // ]
    blogs: null
  }),
  mounted() {
    getAllBlogs((data) => {
      this.blogs = data;
    })
  }
}
</script>

<style scoped lang="scss">
.section-title-2 {
  span {
    font-size: 40px;
    font-weight: 600;
  }
}

@media screen and (max-width: 1325px) {
  .blog {
    &-top {
      flex-direction: column;
      align-items: flex-start;
    }

    &-btn {
      align-self: flex-end;
    }
  }
}

@media screen and (max-width: 1225px) {
  .section-title-2 {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1023px) {
  .section-title-1 {
    font-size: 24px;
  }
  .section-title-2 {
    font-size: 32px;

    span {
      font-size: 24px;
    }
  }
  .section-title-2 {
    flex-direction: row;
    align-items: center;
  }
}

@media screen and (max-width: 767px) {
  .section-title-1, .section-title-2 {
    font-size: 20px;
  }
  .section-title-2 {
    flex-direction: column;

    span {
      font-size: 20px;
    }
  }
}
</style>
