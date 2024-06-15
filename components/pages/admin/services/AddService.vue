<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        add service
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy"     src="~/assets/images/icons/close-icon.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <TextInput title="name" type="text" @dataChanged="(data) => {service.name = data}" :required="true" bg="white"/>
        <TextInput title="title" type="text" @dataChanged="(data) => {service.title = data}" :required="true"
                   bg="white"/>
        <TextInput title="description" type="text" @dataChanged="(data) => {service.description = data}"
                   :required="true"
                   bg="white"/>
        <TextInput title="price" type="text" @dataChanged="(data) => {service.price = data}" :required="true"
                   bg="white"/>
        <TextInput title="image" type="file" @dataChanged="(data) => {service.image = data}" :required="true"
                   bg="white"/>
      </div>
      <div @click="addHandler" class="self-end mt-10">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import {addService, getAllServicesType} from "~/services/api/admin/services";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {getFormData} from "~/components/helper/createFormData";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    service: {
      name: "",
      title: "",
      description: "",
      price: "",
      duration_time: '',
      image: ""
    },
    notif: {
      active: false,
      title: '',
      message: "",
      type: ''
    },
    serviceTypes: [],
    loading: false,
  }),
  methods: {
    addHandler() {
      const formData = getFormData(this.service)
      this.loading = true
      addService(formData, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = "error"
          this.notif.type = "error"
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = "success"
          this.notif.type = "success"
          this.notif.message = data.message
        }
        this.loading = false
      })
    }
  },
}
</script>

<style scoped>

</style>
