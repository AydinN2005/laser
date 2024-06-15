<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        add service property
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
        <TextInput bg="white" title="title" type="text" :required="true"
                   @dataChanged="(data) => {serviceProperty.title = data}"/>
        <TextInput bg="white" title="service" type="select" :required="true"
                   @dataChanged="(data) => {serviceProperty.service = data}">
          <option v-for="item in services" :value="item.id">
            {{ item.name }}
          </option>
        </TextInput>
        <div class="flex flex-col">
          <TextInput bg="white" title="images" type="file" :required="true"
                     @dataChanged="(data) => {images.push(data)}"/>
          <div class="flex items-center mt-2">
            <span class="block">
           images count : {{ images.length }}
          </span>
            <span style="color: red;text-decoration: underline;margin-left: 16px;font-size: 14px;cursor: pointer;"
                  @click="images.pop()">
            undo
          </span>
          </div>
        </div>
        <div class="col-start-1 col-end-2 md:col-end-4">
          <!--          <TextInput @dataChanged="(data) => {serviceProperty.description = data}" bg="white" title="description"-->
          <!--                     type="desc" :required="true"/>-->
          <ContentInput @dataChanged="(data) => {serviceProperty.description = data}"
                        :data="serviceProperty.description"/>
        </div>
      </div>
      <div @click="addProperty" class="self-end mt-10">
        <AdminButton :loading="loading" title="add"/>
      </div>
      <NotificationCard :active="notif.active" @close="notif.active = false" :title="notif.title"
                        :message="notif.message" :type="notif.type"/>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {getFormData} from "~/components/helper/createFormData";
import {addServiceProperty} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, NotificationCard, AdminButton, TextInput},
  props: ['services'],
  data: () => ({
    serviceProperty: {
      title: "",
      description: "",
      service: "",
    },
    images: [],
    notif: {
      active: false,
      title: '',
      type: '',
      message: ""
    },
    loading: false,
  }),
  methods: {
    addProperty() {
      const formData = getFormData(this.serviceProperty)
      this.images.forEach((item) => {
        formData.append('images', item)
      })
      this.loading = true;
      addServiceProperty(formData, (data) => {
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
