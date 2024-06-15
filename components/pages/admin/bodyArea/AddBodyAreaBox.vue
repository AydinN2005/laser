<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        add body are
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10 items-end">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <TextInput bg="white" title="name" type="text" @dataChanged="(data) => {area.name = data}" :data="area.name"/>
        <TextInput bg="white" title="title" type="text" @dataChanged="(data) => {area.title = data}"
                   :data="area.title"/>
        <TextInput bg="white" title="description" type="text" @dataChanged="(data) => {area.description = data}"
                   :data="area.description"/>
        <TextInput bg="white" title="select image" type="file" @dataChanged="(data) => {area.image = data}"
                   :data="area.image"/>
      </div>
      <div class="mt-6" @click="handleAdd">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getFormData} from "~/components/helper/createFormData";
import {addBodyArea} from "~/services/api/admin/bodyArea";
import TextInput from "~/components/elements/TextInput";

export default {
  components: {TextInput, NotificationCard, AdminButton},
  data: () => ({
    area: {
      name: "",
      title: "",
      description: "",
      image: ""
    },
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
  }),
  methods: {
    handleAdd() {
      const formData = getFormData(this.area)
      this.loading = true;
      addBodyArea(formData, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = "body area added successfully"
          this.area = {
            name: "",
            title: "",
            description: "",
            image: ""
          }
        }
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
