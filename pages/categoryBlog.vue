<template>
  <div>
    <CBHero @searched="handleSearch" @categoryChanged="handleChangeCategory"/>
    <Blogs :lastArticle="lastArticle" v-if="!loading" class="blogs" :allBlog="searchedBlogs" :key="randomkey"/>
    <BigLoader v-if="loading"/>
  </div>
</template>

<script>
import CBHero from "~/components/pages/categoryBlog/CBHero";
import Blogs from "~/components/pages/categoryBlog/Blogs";
import {getAllBlogs} from "~/services/api/admin/blogs";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, Blogs, CBHero},
  data: () => ({
    allBlogs: [],
    searchedBlogs: [],
    loading: false,
    lastArticle: false,
    randomkey: 1,
  }),
  mounted() {
    this.loading = true;
    getAllBlogs((data) => {
      this.allBlogs = data;
      this.fillData()
      this.loading = false;
    })
  },
  methods: {
    handleSearch(data) {
      if (data === "") {
        this.fillData()
      } else {
        this.searchedBlogs = this.allBlogs.filter(item => item.title.includes(data))
      }
      this.updateBlogs()
    },
    updateBlogs() {
      this.randomkey = Math.floor(Math.random() * 10000000000)
    },
    handleChangeCategory(data) {
      if (data === 'last articles') {
        this.searchedBlogs = this.allBlogs.slice(0, 6)
        this.searchedBlogs.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        this.lastArticle = true;
      } else if (data === 'all articles') {
        this.fillData()
        this.lastArticle = false;
        this.updateBlogs()
      } else {
        this.searchedBlogs = this.allBlogs.filter(item => item.category.name === data)
        this.updateBlogs()
        this.lastArticle = false;
      }
    },
    fillData() {
      this.searchedBlogs = this.allBlogs
    }
  }
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
