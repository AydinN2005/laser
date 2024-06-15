<template>
  <div class="modal-box">
    <div class="flex w-full justify-between items-center">
      <strong class="modal-box-title">
        edit category
      </strong>
      <div class="cursor-pointer" @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <TextInput bg="white" title="name" type="text" @dataChanged="(data) => {name = data;}"/>
      <div class="mt-6 self-end" @click="handleEdit">
        <AdminButton :loading="loading" title="edit"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {editCategory} from "~/services/api/admin/categories";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['id'],
  data: () => ({
    name: "",
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
  }),
  methods: {
    handleEdit() {
      this.loading = true;
      editCategory(this.id, this.name, (data) => {
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
