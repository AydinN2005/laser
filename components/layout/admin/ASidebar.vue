<template>
  <div class="a-sidebar w-full h-full">
    <div class="flex items-center a-sidebar-title-box">
      <img width="64" height="64" src="~/assets/admin/img/logo.png" alt="">
      <h1 class="a-sidebar-title">
        beauty and laser
      </h1>
    </div>
    <div class="grid gird-cols-1 gap-4">
      <nuxt-link active-class="a-sidebar-link-active" v-for="item in links" :key="item.id" :to="item.route"
                 class="a-sidebar-link">
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
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
        id: 3,
        title: "blogs",
        route: '/admin/blogs'
      },
      {
        id: 4,
        title: "services",
        route: '/admin/services'
      },
      {
        id: 5,
        title: "consultation",
        route: '/admin/consultation'
      },
      {
        id: 6,
        title: "contact us",
        route: '/admin/contactUs'
      },
      {
        id: 7,
        title: "locations",
        route: '/admin/locations'
      },
      {
        id: 8,
        title: "operators",
        route: '/admin/operators'
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
    color: var(--primary-purple);
    margin-left: 16px;

    &-box {
      background: white;
      padding: 0px 16px;
      border-radius: 100px;
      margin-bottom: 48px;
      justify-content: center;

      img {
        border-radius: 100px;
      }
    }
  }
}
</style>
