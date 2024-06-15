<template>
  <div class="flex flex-col">
    <strong class="modal-box-title">
      add video
    </strong>
    <div class="flex md:flex-row flex-col items-start md:items-center justify-between w-full mt-6">
      <TextInput title="select video" type="file" @dataChanged="(data) => {sendData.video = data;}"/>
      <div @click="addHandler" class="md:mt-0 mt-4 self-end md:ml-3">
        <AdminButton :loading="loading" title="add video"/>
      </div>
    </div>
    <div v-if="!videoLoader" class="mt-16 flex md:flex-row flex-col items-start md:items-center justify-between">
      <div class="video">
        <video v-if="addedVideo !== null" width="320" height="320" controls>
          <source :src="`${baseUrl}/${addedVideo}`" type="video/mp4">
          <source :src="`${baseUrl}/${addedVideo}`" type="video/ogg">
          <source :src="`${baseUrl}/${addedVideo}`" type="video/mov">
        </video>
        <span v-else class="text-xl font-bold">
          no video yet
        </span>
      </div>
      <div @click="deleteHandler" class="md:mt-0 mt-4 self-end md:ml-3">
        <AdminButton :loading="deleteLoading" title="delete video" type="delete"/>
      </div>
    </div>
    <div v-else class="w-full h-full flex items-center justify-center mt-16">
      <Loader width="56" height="56" color="#9A77FF"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :message="notif.message" :type="notif.type"
                      :active="notif.active"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getFormData} from "~/components/helper/createFormData";
import {addVideo, deleteVideo, getVideo} from "~/services/api/admin/video";
import {baseUrl} from "~/services/baseUrl";
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader, NotificationCard, AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    baseUrl,
    addedVideo: null,
    sendData: {
      video: ""
    },
    loading: false,
    deleteLoading: false,
    videoLoader: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    }
  }),
  mounted() {
    this.videoLoader = true;
    getVideo((data) => {
      if (!data.statusCode) {
        this.addedVideo = data;
      }
      this.videoLoader = false;
    })
  },
  methods: {
    addHandler() {
      this.loading = true;
      const formData = getFormData(this.sendData)
      addVideo(formData, (data) => {
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
    deleteHandler() {
      this.deleteLoading = true;
      deleteVideo((data) => {
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
        this.deleteLoading = false;
        this.addedVideo = null;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.video {
  video {
    border: 1px solid var(--gray-bg);
    border-radius: 12px;
  }
}
</style>
