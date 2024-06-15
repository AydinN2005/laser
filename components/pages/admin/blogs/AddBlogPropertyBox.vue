<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title-">
        add blog property
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col items-end mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <TextInput bg="white" type="text" title="title" :data="property.title"
                   @dataChanged="(data) => {property.title = data;}"/>
        <div class="flex flex-col">
          <TextInput bg="white" type="file" title="images" :data="images"
                     @dataChanged="(data) => {images.push(data)}"/>
          <div class="flex items-center">
            <span class="block mr-3">
              images count: {{ images.length }}
            </span>
            <span style="color: red;text-decoration: underline;" @click="images.pop()">
              undo
            </span>
          </div>
        </div>
        <div class="col-start-1 col-start-1 md:col-end-3">
          <!--          <TextInput bg="white" title="description" type="desc" :data="property.description"-->
          <!--                     @dataChanged="(data) => {property.description = data}"/>-->
          <ContentInput @dataChanged="(data) => {property.description = data}" :data="property.description"/>
        </div>
      </div>
      <div @click="handleAdd" class="mt-6">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addBlogProperty} from "~/services/api/admin/blogs";
import {getFormData} from "~/components/helper/createFormData";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, NotificationCard, AdminButton, TextInput},
  props: ['id'],
  data: () => ({
    property: {
      title: "",
      articleId: "",
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
      let formData = getFormData(this.property)
      this.images.forEach((item) => {
        formData.append('images', item)
      })
      this.loading = true;
      addBlogProperty(formData, (data) => {
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
          this.property.title = ""
          this.property.description = ""
          this.images = []
        }
        this.loading = false;
      })
    }
  },
  mounted() {
    this.property.articleId = this.id.toString();
  },
  watch: {
    id() {
      this.property.articleId = this.id.toString();
    }
  }
}
</script>

<style scoped>

</style>
