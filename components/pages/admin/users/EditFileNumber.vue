<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        edit user file number
      </strong>
      <img loading="lazy" src="~/assets/images/icons/close-icon.svg" @click="$emit('close')" class="cursor-pointer"
           alt=""/>
    </div>
    <div class="flex flex-col mt-10">
      <TextInput title="file number" place-holder="e.d 1347857" @dataChanged="(data) => {file_number = data}" bg="white"
                 type="text"/>
      <div @click="handleEdit" class="self-end mt-6">
        <AdminButton :loading="loading" title="edit"/>
      </div>
    </div>
    <NotificationCard :active="notif.active" :title="notif.title" :type="notif.type" :message="notif.message"
                      @close="notif.active = false;"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {editUserFileNumber} from "~/services/api/admin/users";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    file_number: '',
    loading: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    }
  }),
  methods: {
    handleEdit() {
      this.loading = true;
      editUserFileNumber(this.file_number, parseInt(this.$route.params.id), (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
        }
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
