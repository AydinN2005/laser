<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        add blog
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput bg="white" type="text" title="title" :data="blog.title"
                   @dataChanged="(data) => {blog.title = data}"/>
        <TextInput bg="white" type="text" title="writer" :data="blog.writer"
                   @dataChanged="(data) => {blog.writer = data}"/>
        <TextInput bg="white" type="file" title="image" :data="blog.image"
                   @dataChanged="(data) => {blog.image = data}"/>
        <TextInput bg="white" title="category" type="select" :data="blog.category"
                   @dataChanged="(data) => {blog.category = data}">
          <option v-for="item in categories" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </TextInput>
        <div class="col-start-1 col-end-2 md:col-end-3">
          <!--          <TextInput type="desc" title="description" :data="blog.description"-->
          <!--                     @dataChanged="(data) => {blog.description = data}" bg="white"/>-->
          <ContentInput :data="blog.description" @dataChanged="(data) => {blog.description = data}"/>
        </div>
      </div>
      <div @click="addHandler" class="self-end mt-6">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addBlog} from "~/services/api/admin/blogs";
import {getFormData} from "~/components/helper/createFormData";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getAllCategories} from "~/services/api/admin/categories";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, NotificationCard, AdminButton, TextInput},
  data: () => ({
    blog: {
      title: "",
      description: "",
      writer: "",
      category: "",
      image: ""
    },
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    categories: [],
    loading: false,
  }),
  mounted() {
    getAllCategories((data) => {
      this.categories = data;
    })
  },
  methods: {
    addHandler() {
      this.loading = true;
      const formData = getFormData(this.blog)
      addBlog(formData, (data) => {
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
      this.blog.title = ""
      this.blog.category = ""
      this.blog.description = ""
      this.blog.image = ""
      this.blog.writer = ""
    }
  }
}
</script>

<style scoped>

</style>
