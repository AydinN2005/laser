<template>
  <div class="admin-layout">
    <div class="grid grid-cols-12 gap-6 w-full">
      <ASidebar :mobile="false" class="col-start-1 col-end-5 row-start-1 w-full h-screen lg:block hidden"/>
      <div class="col-start-1 lg:col-start-5 col-end-13 row-start-1 flex flex-col w-full h-screen">
        <div class="overflow-y-auto h-full px-4 lg:pr-4">
          <div class="sticky top-0 z-50 pt-3">
            <ANavbar @showSidebar="showSidebar = true" class="w-full"/>
          </div>
          <div class="mt-12 content-container w-full pb-6">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" style="justify-content: flex-start" :style="showSidebar ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <ASidebar @close="showSidebar = false;" :mobile="true" class="h-screen w-10/12"/>
    </div>
  </div>
</template>

<script>
import ASidebar from "~/components/layout/admin/ASidebar";
import ANavbar from "~/components/layout/admin/ANavbar";

export default {
  components: {ANavbar, ASidebar},
  // middleware: 'checkUser',
  data: () => ({
    showSidebar: false,
  }),
  mounted() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('user')) {
        this.$store.commit('setLogin', true)
      } else {
        this.$router.push('/loginsignup')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.admin-layout {
  background: var(--primary-bg);
}

.content-container {
}
</style>
