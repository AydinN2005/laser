<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        edit property
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <div class="flex items-center md:flex-row flex-col w-full justify-between">
        <div class="flex items-center">
          <div v-for="item in property.images" class="flex items-center img" @click="selectImage(item.id)">
            <img loading="lazy" :src="`${baseUrl}/${item.image}`"
                 :style="item.id === selectedImg ? {width: '124px', height: '124px', borderColor: 'red'} : {}"
                 alt=""/>
          </div>
        </div>
        <div @click="handleDelImage" class="mt-3 md:mt-0">
          <AdminButton :loading="delLoading" title="delete" type="delete"/>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput title="title" type="text" bg="white" :data="property.title"
                   @dataChanged="(data) => {editedProperty.title = data;}"/>
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
        <div class="col-start-1 md:col-end-3">
          <TextInput title="description" type="text" bg="white" :data="property.description"
                     @dataChanged="(data) => {editedProperty.description = data}"/>
        </div>
      </div>
      <div @click="handleEdit" class="self-end mt-6">
        <AdminButton :loading="editLoading" title="edit"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import {deleteBodyAreaPropertyImage, editBodyAreaProperty, getOneBodyArea} from "~/services/api/admin/bodyArea";
import {baseUrl} from "~/services/baseUrl";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import TextInput from "~/components/elements/TextInput";
import {getFormData} from "~/components/helper/createFormData";

export default {
  components: {TextInput, NotificationCard, AdminButton},
  props: ['areaId', 'propertyId'],
  data: () => ({
    baseUrl,
    property: {},
    editedProperty: {
      title: "",
      description: ''
    },
    images: [],
    selectedImg: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    delLoading: false,
    editLoading: false,
  }),
  mounted() {
    this.getPropertyOfArea()
  },
  methods: {
    getPropertyOfArea() {
      let properties = []
      getOneBodyArea(this.areaId, (data) => {
        properties = data.bodyArea.properties;
        properties.map(item => {
          if (item.id === this.propertyId) {
            this.property = item;
          }
        })
      })
    },

    selectImage(id) {
      this.selectedImg = id;
    },
    handleDelImage() {
      this.delLoading = true;
      deleteBodyAreaPropertyImage(this.selectedImg, (data) => {
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
    },
    handleEdit() {

      const formData = getFormData(this.editedProperty)
      this.images.forEach(el => {
        formData.append('images', el)
      })
      this.editLoading = true;
      editBodyAreaProperty(this.propertyId, formData, (data) => {
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
        this.editLoading = false;
      })
    }
  },
  watch: {
    propertyId() {
      this.getPropertyOfArea()
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
