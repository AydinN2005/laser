<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        add property
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput title="title" type="text" :data="property.title" bg="white"
                   @dataChanged="(data) => {property.title = data}"/>
        <div class="flex flex-col">
          <TextInput title="select image" type="file" bg="white" @dataChanged="(data) => {images.push(data)}"/>
          <div class="flex items-center mt-3">
            <span>
              images count : {{ images.length }}
            </span>
            <span class="ml-3 cursor-pointer" style="color:red;text-decoration: underline" @click="images.pop()">
              undo
            </span>
          </div>
        </div>
        <div class="col-start-1 col-end-2 md:col-end-3">
          <TextInput title="description" type="text" bg="white" :data="property.description"
                     @dataChanged="(data) => {property.description = data}"/>
        </div>
      </div>
      <div @click="handleAdd" class="self-end mt-6">
        <AdminButton :loading="loading" title="add"/>
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
import {getFormData} from "~/components/helper/createFormData";
import {addBodyAreaProperty} from "~/services/api/admin/bodyArea";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['id'],
  data: () => ({
    property: {
      title: "",
      description: "",
    },
    images: [],
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
      const formData = getFormData(this.property)
      this.images.forEach(el => {
        formData.append('images', el)
      })
      this.loading = true;
      addBodyAreaProperty(this.id, formData, (data) => {
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
