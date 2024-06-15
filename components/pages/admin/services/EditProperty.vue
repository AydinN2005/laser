<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between mb-10">
      <strong class="modal-box-title">
        edit property
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <TextInput bg="white" title="select property" type="select"
               @dataChanged="handleSelectProperty">
      <option v-for="item in service.properties" :value="item.id">
        {{ item.title }}
      </option>
    </TextInput>
    <div class="flex flex-col mt-10" v-if="propertyId !== ''">
      <strong class="block modal-box-title mb-6">
        edit specific property of service
      </strong>
      <div class="grid grid-cols-1 gap-6">
        <TextInput bg="white" title="title" :data="editedProperty.title" type="text"
                   @dataChanged="(data) => {editedProperty.title = data}"/>
        <!--        <TextInput bg="white" title="text" :data="editedProperty.description" type="desc"-->
        <!--                   @dataChanged="(data) => {editedProperty.description = data}"/>-->
        <ContentInput @dataChanged="(data) => {editedProperty.description = data}" :data="editedProperty.description"/>
      </div>
      <div class="grid grid-cols-2 gap-6 md:flex items-center mt-6">
        <div @click="editHandler" class="self-end">
          <AdminButton :loading="editLoading" title="edit property"/>
        </div>
        <div @click="showAddImages = true" class="self-end md:ml-3">
          <AdminButton title="add images"/>
        </div>
        <div @click="handleShowImageDelete" class="self-end md:ml-3">
          <AdminButton type="delete" title="delete property images"/>
        </div>
        <div @click="showDeleteProperty = true" class="self-end md:ml-3">
          <AdminButton type="delete" title="delete property"/>
        </div>
      </div>
      <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                        :message="notif.message"/>
      <div class="overlay" :style="showAddImages ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
        <AddPropertyImages :id="propertyId" @close="showAddImages = false"/>
      </div>
      <div class="overlay" :style="showImageDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
        <DeletePropertyImage @close="showImageDelete = false" :images="proprtyImages"/>
      </div>
      <div class="overlay" :style="showDeleteProperty ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
        <DeleteDialog :loading="delPropLoading" @cancel="showDeleteProperty = false" @accept="delProperty"
                      message="are you sure for delete ?"
                      cancel-title="cancel" accept-title="delete"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {
  deleteProperty,
  deletePropertyImages,
  editServiceProperty,
  getAService
} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import AddPropertyImages from "~/components/pages/admin/services/AddPropertyImages";
import DeleteDialog from "~/components/elements/DeleteDialog";
import DeletePropertyImage from "~/components/pages/admin/services/DeletePropertyImage";
import ContentInput from "~/components/elements/ContentInput";

export default {
  components: {
    ContentInput,
    DeletePropertyImage, DeleteDialog, AddPropertyImages, NotificationCard, AdminButton, TextInput
  },
  props: ['serviceId'],
  data: () => ({
    propertyId: '',
    editedProperty: {
      title: "",
      description: ""
    },
    service: {},
    notif: {
      active: false,
      title: "",
      type: "",
      message: "",
    },
    showImageDelete: false,
    showDeleteProperty: false,
    showAddImages: false,
    proprtyImages: [],
    editLoading: false,
    delPropLoading: false,
  }),
  mounted() {
  },
  methods: {
    editHandler() {
      this.editLoading = true;
      editServiceProperty(this.propertyId, this.editedProperty, (data) => {
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
    },
    delPropertyImages() {
      deletePropertyImages(this.propertyId, (data) => {
      })
    },
    delProperty() {
      this.delPropLoading = true;
      deleteProperty(this.propertyId, (data) => {
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
        this.delPropLoading = false;
        this.showDeleteProperty = false;
      })
    },
    handleShowImageDelete() {
      let data = {}
      this.service.properties.map((item) => {
        if (item.id === this.propertyId) {
          data = item;
        }
      })
      this.proprtyImages = data.images
      this.showImageDelete = true;
    },
    handleSelectProperty(id) {
      this.propertyId = id;
      this.service.properties.map(item => {
        if (item.id === id) {
          this.editedProperty.title = item.title;
          this.editedProperty.description = item.description
          console.log(item)
        }
      })
    }
  },
  watch: {
    serviceId() {
      getAService(this.serviceId, (data) => {
        this.service = data.service
      })
    },
  }
}
</script>

<style scoped>

</style>
