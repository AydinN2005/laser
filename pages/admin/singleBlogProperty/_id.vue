<template>
  <div class="flex flex-col">
    <strong class="modal-box-title">
      edit blog property
    </strong>
    <div class="flex flex-col mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex items-center justify-between w-full col-start-1 col-end-2 md:col-end-3">
          <div v-if="images !== []" class="flex items-center">
            <div v-for="img in images" @click="selectImage(img.id)" class="img">
              <img loading="lazy" :src="`${baseUrl}/${img.image}` || img"
                   :style="img.id === selectedImg ? {width: '124px', height: '124px', borderColor: 'red'} : {}" alt=""/>
            </div>
          </div>
          <div v-if="images === []" class="italic font-bold text-2xl">
            no images yet
          </div>
          <div @click="handleDel" class="ml-4">
            <AdminButton :loading="delLoading" type="delete" title="delete"/>
          </div>
        </div>
        <div class="flex flex-col">
          <TextInput title="select image" type="file" @dataChanged="(data) => {editedImage.push(data)}"/>
          <div class="flex items-center">
            <span>
              images count: {{ editedImage.length }}
            </span>
            <span class="ml-4" @click="editedImage.pop()" style="color: red;text-decoration: underline">
              undo
            </span>
          </div>
        </div>
        <TextInput :data="property.title" title="title" type="text"
                   @dataChanged="(data) => {editedPropperty.title = data}"/>
        <div class="col-start-1 col-end-2 md:col-end-3">
          <!--          <TextInput :data="property.description" title="description" type="desc"-->
          <!--                     @dataChanged="(data) => {editedPropperty.description = data}"/>-->
          <ContentInput @dataChanged="(data) => {editedPropperty.description = data}"
                        :data="editedPropperty.description"/>
        </div>
      </div>
      <div @click="handleEdit" class="mt-6 self-end">
        <AdminButton :loading="loading" title="edit"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {deleteBlogPropertyImage, editBlogProperty, getAllBlogs} from "~/services/api/admin/blogs";
import {baseUrl} from "~/services/baseUrl";
import TextInput from "~/components/elements/TextInput";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getFormData} from "~/components/helper/createFormData";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {ContentInput, NotificationCard, TextInput, AdminButton},
  layout: 'admin',
  data: () => ({
    property: {
      title: "",
      description: ""
    },
    editedPropperty: {
      title: '',
      description: ""
    },
    propertyId: "",
    images: [],
    editedImage: [],
    baseUrl,
    selectedImg: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
    delLoading: false,
  }),
  mounted() {
    let blogs = []
    getAllBlogs((data) => {
      blogs = data;
      blogs.map((item) => {
        item.properties.map((el) => {
          if (el.id === parseInt(this.$route.params.id)) {
            this.property.title = el.title
            this.property.description = el.description
            this.images = el.images
            this.propertyId = el.id;
          }
        })
      })
    })
  },
  methods: {
    handleEdit() {
      const formData = getFormData(this.editedPropperty)
      this.editedImage.forEach(el => {
        formData.append('images', el)
      })
      this.loading = true;
      editBlogProperty(this.propertyId, formData, (data) => {
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
    },
    selectImage(id) {
      this.selectedImg = id;
    },
    handleDel() {
      this.delLoading = true;
      deleteBlogPropertyImage(this.selectedImg, (data) => {
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
        this.delLoading = false;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.img {
  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 1px solid white;
    cursor: pointer;
  }

  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
