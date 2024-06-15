<template>
  <div class="c-container blogs">
    <div class="flex flex-col items-center">
      <div class="lg:flex hidden items-center self-start blogs-title black-text text-base font-bold mb-6">
        <span></span>
        articles :
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 lg:mt-8 mt-10 w-full">
        <BlogCard v-for="item in finalData" :key="item.id" :blog="item"/>
      </div>
      <Pagination @paginatedData="handlePaginate" v-if="!lastArticle && paginationData !== null" :currentPage="1"
                  :itemPerPage="6"
                  :fetchedData="paginationData" class="mt-16"/>
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/elements/BlogCard";
import Pagination from "~/components/elements/Pagination";
import {getAllBlogs} from "~/services/api/admin/blogs";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  props: ['allBlog', 'lastArticle'],
  components: {BigLoader, Pagination, BlogCard},
  data: () => ({
    showPagination: false,
    finalData: [],
    paginationData: null
  }),
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.finalData = this.allBlog.slice(0, 6)
      this.paginationData = this.allBlog
    },
    handlePaginate(data) {
      this.finalData = data;
    }
  },
  watch: {
    allBlog: {
      handler() {
        this.fillData()
      },
      deep: true,
    }
  }
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
      height: 510px !important;
      min-height: 510px !important;
      border-radius: 64px;
    }
  }
}
</style>
