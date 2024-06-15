<template>
  <div v-if="editedService !== {}" class="flex flex-col">
    <strong class="modal-box-title mb-10 block">
      edit your service
    </strong>
    <div class="flex items-start md:items-center md:flex-row flex-col mb-6">
      <img loading="lazy" :src="imgSrc" alt="" width="300" height="300" class="rounded-lg mr-4"/>
      <TextInput @dataChanged="(data) => {editedService.image = data}" title="image" type="file"
                 :data="editedService.name"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TextInput @dataChanged="(data) => {editedService.name = data}" title="name" type="text"
                 :data="editedService.name"/>
      <TextInput @dataChanged="(data) => {editedService.title = data}" title="title" type="text"
                 :data="editedService.title"/>
      <TextInput @dataChanged="(data) => {editedService.description = data}" title="description" type="text"
                 :data="editedService.description"/>
      <TextInput @dataChanged="(data) => {editedService.price = data}" title="price" type="text"
                 :data="editedService.price"/>
    </div>
    <div class="flex items-center self-end mt-10">
      <div @click="editHandler">
        <AdminButton :loading="editLoading" title="edit service"/>
      </div>
      <div @click="showProperty = true" class="ml-4">
        <AdminButton title="edit service property"/>
      </div>
    </div>
    <div class="overlay" :style="showProperty ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <EditProperty @close="showProperty = false" :serviceId="serviceId"/>
    </div>
    <NotificationCard :active="notif.active" @close="notif.active = false" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import {editService, getAService} from "~/services/api/admin/services";
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {baseUrl} from "~/services/baseUrl";
import {getFormData} from "~/components/helper/createFormData";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import ChangeType from "~/components/pages/admin/services/ChangeType";
import EditProperty from "~/components/pages/admin/services/EditProperty";

export default {
  components: {EditProperty, ChangeType, NotificationCard, AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    editedService: {
      name: '',
      title: "",
      description: "",
      price: "",
      image: "",
      amount: ""
    },
    serviceType: {},
    imgSrc: '',
    id: '',
    notif: {
      active: false,
      title: "",
      type: '',
      message: ""
    },
    showChangeType: false,
    showProperty: false,
    serviceId: '',
    serviceProperties: [],
    editLoading: false,
  }),
  mounted() {
    this.id = parseInt(this.$route.params.id)
    getAService(this.id, (data) => {
      const res = data.service;
      this.editedService.name = res.name
      this.editedService.title = res.title
      this.editedService.description = res.description
      this.editedService.price = res.price
      this.editedService.image = res.image
      this.serviceId = res.id
      this.imgSrc = `${baseUrl}/${res.image}`
    })
  },
  methods: {
    editHandler() {
      const formData = getFormData(this.editedService)
      this.editLoading = true;
      editService(this.id, formData, (data) => {
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
          this.editedService = data.service
        }
        this.editLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
