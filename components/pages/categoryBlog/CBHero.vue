<template>
  <div class="overflow-hidden">
    <div class="c-container flex flex-col hero">
      <div class="flex items-center lg:flex-row flex-col">
        <div class="w-full flex flex-col">
          <div class="title-box">
            <span></span>
            article`s category
          </div>
          <div class="flex flex-col">
            <h3 class="hero-title font-bold">
              get nice value & knowledge by
            </h3>
            <h2 class="flex items-center justify-between font-bold hero-title-box">
              our articles
              <div class="hero-title-box-item ml-4">
                <div></div>
              </div>
              <img loading="lazy" src="~/assets/images/img/blogsWomen.webp" alt=""/>
            </h2>
          </div>
          <p class="text-sm md:text-base font-normal mt-6 mb-12">
            Our articles provide an incredible opportunity for readers to gain valuable knowledge and insights on a wide
            range of topics. With each article, we strive to deliver content that is not only informative, but also
            engaging and thought-provoking. By reading our articles, you can expand your understanding of various
            subjects and stay updated on the latest trends and developments.
          </p>
        </div>
        <div class="w-full lg:ml-4 hero-img">
          <img loading="lazy" src="~/assets/images/img/blogsImg.svg" class="rounded-xl w-full" alt=""/>
        </div>
      </div>
      <div class="flex flex-col lg:grid grid-cols-4 w-full">
        <div class="flex items-center col-start-1 col-end-2 w-full lg:mb-0 mb-8">
          <TextInput @searched="handleSearch" title="search" place-holder="article name ....." type="text"
                     :icon="'search'"/>
          <div class="hero-divider lg:block hidden"></div>
        </div>
        <div v-if="categories.length" class="hero-categories col-start-2 col-end-5 lg:block hidden">
          <Slider :dots="false" :nav="true" :auto-play="false" :margin="40" :loop="false" :items="4"
                  :responsive="{1024: {items: 4}, 768: {items: 4}}"
          >
          <span v-for="item in categories" :key="item.id" class="hero-category text-base font-bold"
                @click="selectCategory(item.id, item.name)"
                :class="activeCategory === item.id ? 'hero-category-active': ''">
            {{ item.name }}
          </span>
          </Slider>
        </div>
      </div>
    </div>
    <div v-if="categories.length" class="hero-categories hero-categories-mobile lg:hidden ml-5 col-start-2 col-end-5">
      <Slider :dots="false" :nav="true" :auto-play="false" :margin="40" :loop="false" :items="4"
              :responsive="{768: {items: 4}, 0 : {items: 2}}"
      >
          <span v-for="item in categories" :key="item.id" class="hero-category text-base font-bold"
                @click="selectCategory(item.id)"
                :class="activeCategory === item.id ? 'hero-category-active': ''">
            {{ item.name }}
          </span>
      </Slider>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import Slider from "~/components/helper/Slider";
import {getAllCategories} from "~/services/api/admin/categories";

export default {
  components: {Slider, TextInput},
  data: () => ({
    categories: [],
    activeCategory: 200,
  }),
  mounted() {
    getAllCategories((data) => {
      this.categories.push({
        id: 200,
        name: "all articles"
      })
      this.categories.push({
        id: 100,
        name: 'last articles'
      })
      data.map((item) => {
        this.categories.push(item)
      })
    })
  },
  methods: {
    selectCategory(id, name) {
      this.activeCategory = id;
      this.$emit('categoryChanged', name)
    },
    handleSearch(data) {
      this.$emit('searched', data)
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  margin-top: 90px;

  &-title {
    font-size: 40px;

    &-box {
      font-size: 65px;
      color: white;
      padding: 0px 16px;
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      margin-top: 16px;
      background: var(--primary-purple);
      border-radius: 100px;
      position: relative;
      max-width: 600px;

      img {
        position: absolute;
        right: 0;
        bottom: 0;
      }

      &-item {
        padding: 6px 12px;
        border-radius: 100px;
        background: #D2C2FF;
        box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

        div {
          width: 94px;
          height: 46px;
          border-radius: 100px;
          background: #BBA4FF;
          box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
        }
      }
    }
  }

  &-divider {
    border-radius: 8px;
    width: 3px;
    height: 32px;
    margin: 0 24px;
    background: var(--input-border);
  }

  &-categories {
    border-radius: 50px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.06), 2px 2px 24px 0px rgba(255, 255, 255, 0.20) inset;
    padding: 4px;
    width: 100%;
    padding-right: 153px;
  }

  &-category {
    padding: 12px 24px;
    border-radius: 100px;
    display: block;
    width: max-content;
    cursor: pointer;

    &:hover {
      background: var(--primary-purple);
      color: white;
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }
  }

  &-category-active {
    background: var(--primary-purple);
    color: white;
    box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
  }
}

@media screen and (max-width: 1280px) {
  .hero {
    &-title-box {
      font-size: 48px;
    }
  }
}

@media screen and (max-width: 1023px) {
  .hero {
    &-img {
      margin-bottom: 83px;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero {
    &-title {
      font-size: 16px;

      &-box {
        font-size: 24px;

        img {
          width: 100px;
          right: 16px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.hero-categories {
  .owl-nav {
    top: -11px !important;
    right: -149px !important;
  }

  .owl-stage-outer {
    padding: 0 28px 0 0 !important;
  }
}

.hero-categories-mobile {
  .owl-nav {
    display: none !important;
  }

  padding-right: 0px !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  overflow: hidden;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  margin-left: 0 !important;
}
</style>
