<template>
  <div class="flex flex-col">
    <strong class="modal-box-title block mb-10">
      edit blog
    </strong>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="col-start-1 col-end-2 md:col-end-3 flex items-center">
        <img loading="lazy" style="width: 100px;height: 100px;border-radius: 20px;" :src="`${baseUrl}/${blog.image}`"
             alt=""/>
        <TextInput class="ml-4" type="file" title="image" @dataChanged="(data) => {editedBlog.image = data}"/>
      </div>
      <TextInput title="title" type="text" :data="blog.title" @dataChanged="(data) => {editedBlog.title = data}"/>
      <TextInput title="writer" type="text" :data="blog.writer" @dataChanged="(data) => {editedBlog.writer = data}"/>
      <TextInput title="category" type="select" :data="blog.category"
                 @dataChanged="(data) => {editedBlog.category = data}">
        <option v-for="item in categories" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </TextInput>
      <div class="col-start-1 col-end-2 md:col-end-3">
        <!--        <TextInput title="description" type="desc" :data="blog.description"-->
        <!--                   @dataChanged="(data) => {editedBlog.description = data;}"/>-->
        <ContentInput @dataChanged="(data) => {blog.description = data}" :data="blog.description"/>
      </div>
    </div>
    <div class="self-end mt-6" @click="handleEdit">
      <AdminButton :loading="loading" title="edit"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getAllCategories} from "~/services/api/admin/categories";
import {baseUrl} from "~/services/baseUrl";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {editBlog, getAllBlogs, getBlogById} from "~/services/api/admin/blogs";
import {getFormData} from "~/components/helper/createFormData";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, AdminButton, NotificationCard, TextInput},
  layout: 'admin',
  data: () => ({
    blog: {},
    editedBlog: {
      title: "",
      description: "",
      writer: "",
      category: {},
      image: ""
    },
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    baseUrl,
    categories: [],
    loading: false,
  }),
  mounted() {
    getAllCategories((data) => {
      this.categories = data;
    })
    getBlogById(parseInt(this.$route.params.id), (data) => {
      this.blog = data;
    })
  },
  methods: {
    handleEdit() {
      const formData = getFormData(this.editedBlog)
      this.loading = true;
      editBlog(parseInt(this.$route.params.id), formData, (data) => {
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
