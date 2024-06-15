<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        edit body area
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <img loading="lazy" class="area-img" :src="`${baseUrl}/${area.image}`"
           alt=""/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        <TextInput bg="white" title="name" type="text" @dataChanged="(data) => {editedArea.name = data}"
                   :data="area.name"/>
        <TextInput bg="white" title="title" type="text" @dataChanged="(data) => {editedArea.title = data}"
                   :data="area.title"/>
        <TextInput bg="white" title="description" type="text" @dataChanged="(data) => {editedArea.description = data}"
                   :data="area.description"/>
        <TextInput bg="white" title="select image" type="file" @dataChanged="(data) => {editedArea.image = data}"
                   :data="area.image"/>
      </div>
      <div class="self-end mt-6" @click="handleEdit">
        <AdminButton :loading="loading" title="edit"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import {editBodyArea, getOneBodyArea} from "~/services/api/admin/bodyArea";
import {baseUrl} from "~/services/baseUrl";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getFormData} from "~/components/helper/createFormData";
import TextInput from "~/components/elements/TextInput";

export default {
  components: {TextInput, NotificationCard, AdminButton},
  props: ['id'],
  data: () => ({
    baseUrl,
    area: {},
    editedArea: {
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
    loading: false
  }),
  methods: {
    handleEdit() {
      const formData = getFormData(this.editedArea)
      this.loading = true;
      editBodyArea(this.id, formData, (data) => {
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
  },
  watch: {
    id() {
      getOneBodyArea(this.id, (data) => {
        this.area = data.bodyArea
      })
    }
  }
}
</script>

<style scoped>
.area-img {
  width: 150px;
  height: 150px;
  border-radius: 16px;
}

@media screen and (max-width: 767px) {
  .area-img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
}
</style>
