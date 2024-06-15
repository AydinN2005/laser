<template>
  <div class="flex flex-col">
    <div class="flex items-center mb-10 md:flex-row flex-col">
      <TextInput title="search" type="text" @dataChanged="(data) => {search = data}" :data="search"/>
      <div class="flex items-center mt-4 md:mt-0 md:ml-4">
        <AdminButton @clicked="handleSearch" title="search"/>
        <AdminButton @clicked="fillData" title="reset" class="ml-4"/>
      </div>
    </div>
    <!--    <AdminButton title="create user" class="w-max mb-10"/>-->
    <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UserCard v-for="user in finallyData" :user="user"/>
    </div>
    <div v-if="loading" class="flex h-full w-full justify-center items-center">
      <Loader width="64" height="64" color="black"/>
    </div>
    <NotificationCard @close="notif.active = false" :message="notif.message" :title="notif.title" :type="notif.type"/>
  </div>
</template>

<script>
import UserCard from "~/components/pages/admin/users/UserCard";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {getAllUsers} from "~/services/api/admin/users";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import Loader from "~/components/elements/Loader";
import TextInput from "~/components/elements/TextInput";

export default {
  components: {TextInput, Loader, NotificationCard, AdminButton, UserCard},
  layout: 'admin',
  data: () => ({
    users: [],
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    },
    loading: false,
    search: "",
    finallyData: []
  }),
  mounted() {
    this.loading = true;
    getAllUsers((data) => {
      if (data.statusCode) {
        this.notif.active = true;
        this.notif.type = 'error'
        this.notif.title = 'error'
        this.notif.message = data.message
      } else {
        data.map(item => {
          this.users.push({...item, fullName: `${item.first_name} ${item.last_name}`})
        })
        // this.users = data;
        this.fillData()
      }
      this.loading = false;
    })
  },
  methods: {
    handleSearch() {
      // let finallyUsers = []
      // this.users.map(item => {})
      this.finallyData = this.users.filter(item => item.fullName.toLowerCase().includes(this.search.toLowerCase())  || item.email.toLowerCase().includes(this.search.toLowerCase()) || item.file_number.toLowerCase().includes(this.search.toLowerCase()))
    },
    fillData() {
      this.finallyData = this.users;
      this.search = ""
    }
  },
  watch: {
    search() {
      if (this.search === "") {
        this.fillData()
      }
    }
  }
}
</script>

<style scoped>

</style>
