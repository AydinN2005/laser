<template>
  <div class="c-container blogs">
    <div class="flex flex-col items-center">
      <div class="lg:flex hidden items-center self-start blogs-title black-text text-base font-bold mb-6">
        <span></span>
        last release :
      </div>
      <div class="lg:flex hidden items-center">
        <div class="grid grid-cols-1 gap-8 w-full mr-8 blogs-left">
          <BlogCard v-for="item in blogs_1" :key="item.id" :blog="item"/>
        </div>
        <div class="w-full grid grid-cols-2 gap-y-10 gap-x-8">
          <BlogCard v-for="(item, index) in blogs_2" :key="item.id" :blog="item"
                    :class="index === 2 ? 'col-start-1 col-end-3' : ''"/>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:mt-8 mt-10">
        <BlogCard v-for="item in blogs_3" :key="item.id" :blog="item"/>
      </div>
      <Pagination :count="3" class="mt-16"/>
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/elements/BlogCard";
import Pagination from "~/components/elements/Pagination";

export default {
  components: {Pagination, BlogCard},
  data: () => ({
    blogs_1: [
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
    ],
    blogs_2: [
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
    ],
    blogs_3: [
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
      {
        id: 1,
        img: require('~/assets/images/img/blogImg.png'),
        hash: ['#beauty', '#laser tool'],
        title: "how pricing laser in 2024 years ?",
        desc: 'It’s about sanity, not vanity! Every other form of hair removal is temporary. Laser hair removal gives you long lasting results.'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.blogs {
  &-title {
    span {
      width: 10px;
      height: 18px;
      border-radius: 100px;
      background: #9A77FF;
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      margin-right: 12px;
    }
  }
}
</style>
<style lang="scss">
.blogs {
  .blog-card-img {
    width: 100%;
  }

  &-left {
    .blog-card-img {
      height: 510px;
      border-radius: 64px;
    }
  }
}
</style>
