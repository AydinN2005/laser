<template>
  <div class="admin-layout">
    <div class="grid grid-cols-12 gap-6 w-full">
      <ASidebar class="col-start-1 col-end-5 row-start-1 w-full h-screen"/>
      <div class="col-start-5 col-end-13 row-start-1 flex flex-col w-full h-screen">
        <div class="overflow-y-auto h-full pr-4">
          <div class="sticky top-0 z-50 pt-3">
            <ANavbar class="w-full"/>
          </div>
          <div class="mt-12 content-container w-full pb-6">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ASidebar from "~/components/layout/admin/ASidebar";
import ANavbar from "~/components/layout/admin/ANavbar";

export default {
  components: {ANavbar, ASidebar}
}
</script>

<style scoped lang="scss">
.admin-layout {
  background: var(--primary-bg);
}

.content-container {
}
</style>
