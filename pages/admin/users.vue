<template>
  <div class="flex flex-col">
<!--    <AdminButton title="create user" class="w-max mb-10"/>-->
    <div class="grid grid-cols-3 gap-6">
      <UserCard v-for="item in 9"/>
    </div>
  </div>
</template>

<script>
import UserCard from "~/components/pages/admin/users/UserCard";
import AdminButton from "~/components/pages/admin/helper/AdminButton";

export default {
  components: {AdminButton, UserCard},
  layout: 'admin'
}
</script>

<style scoped>

</style>
