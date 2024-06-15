<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        select image for delete
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex items-center mt-10">
        <img loading="lazy" v-for="item in images" :src="`${baseUrl}/${item.image}`" class="image"
             @click="selectImage(item.id, item.image)"
             width="48" height="48"
             alt=""
             :class="imgId === item.id ? 'selected-image' : ''"
        />
      </div>
      <div class="flex items-center justify-between w-full mt-6">
        <span>
          selected image: {{ img }}
        </span>
        <div @click="delImage">
          <AdminButton :loading="loading" title="delete" type="delete"/>
        </div>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {baseUrl} from "~/services/baseUrl";
import {deletePropertyImages} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton},
  props: ['images'],
  data: () => ({
    imgId: '',
    img: '',
    baseUrl,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false
  }),
  methods: {
    selectImage(id, img) {
      this.imgId = id;
      this.img = img;
    },
    delImage() {
      this.loading = true;
      deletePropertyImages(this.imgId, (data) => {
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

<style scoped lang="scss">
.image {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-right: 16px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
}

.selected-image {
  width: 96px;
  height: 96px;
  border: 2px solid var(--primary-red);
}
</style>
