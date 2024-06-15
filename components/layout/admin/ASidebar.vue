<template>
  <div class="a-sidebar w-full h-full">
    <div class="flex items-center w-full justify-between mb-12">
      <div class="flex items-center a-sidebar-title-box">
        <img loading="lazy" width="128" height="128" src="/logo-2daylaser.png" alt=""/>
        <h1 class="a-sidebar-title md:block hidden">
          2daylaser
        </h1>
      </div>
      <div @click="$emit('close')" class="bg-white p-4 rounded-lg lg:hidden">
        <img loading="lazy" width="24" height="24" src="~/assets/images/icons/close-icon.svg"/>
      </div>
    </div>
    <div class="a-sidebar-inner">
      <div class="grid gird-cols-1 gap-4">
        <div v-for="item in links" :key="item.id" @click="$emit('close')">
          <nuxt-link exact active-class="a-sidebar-link-active" :to="item.route"
                     class="a-sidebar-link">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mobile'],
  data: () => ({
    links: [
      {
        id: 60,
        title: "back to home",
        route: '/'
      },
      {
        id: 1,
        title: "users",
        route: '/admin/users'
      },
      {
        id: 2,
        title: "offers",
        route: '/admin/offers'
      },
      {
        id: 27,
        title: "video",
        route: '/admin/video'
      },
      {
        id: 3,
        title: "blogs",
        route: '/admin/blogs'
      },
      {
        id: 7,
        title: "categories",
        route: "/admin/categories"
      },
      {
        id: 23,
        title: "body area",
        route: "/admin/bodyArea"
      },
      {
        id: 4,
        title: "services",
        route: '/admin/services'
      },
      {
        id: 8,
        title: "booking",
        route: '/admin/reservation'
      },
      {
        id: 50,
        title: "consultation",
        route: '/admin/consultation'
      },
      {
        id: 51,
        title: "schedule",
        route: "/admin/timeTable"
      },
      {
        id: 105,
        title: "off days",
        route: "/admin/offDays"
      },
      {
        id: 29,
        title: "comments",
        route: '/admin/comments'
      },
      {
        id: 5,
        title: "faq",
        route: '/admin/faq'
      },
      {
        id: 6,
        title: "messages",
        route: '/admin/messages'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
.a-sidebar {
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  background: var(--gray-bg);
  padding: 24px;
  height: 100%;

  &-inner {
    max-height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &-link {
    color: white;
    font-size: 20px;
    padding: 8px 16px;
    width: 100%;
    display: block;
    border-radius: 100px;

    &:hover, &-active {
      background: white;
      color: var(--primary-purple);
      padding-left: 32px;
    }
  }

  &-title {
    font-size: 24px;
    color: white;
    margin-left: 16px;

    &-box {
      padding: 0px 16px;
      border-radius: 100px;

      img {
        border-radius: 100px;
      }
    }
  }
}
</style>
