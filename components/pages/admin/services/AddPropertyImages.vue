<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        add property images
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy"     src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt="" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col mt-10">
        <TextInput bg="white" title="images" type="file" :required="true"
                   @dataChanged="(data) => {addedData.images.push(data)}"/>
        <div class="flex items-center mt-2">
            <span class="block">
           images count : {{ addedData.images.length }}
          </span>
          <span style="color: red;text-decoration: underline;margin-left: 16px;font-size: 14px;cursor: pointer;"
                @click="addedData.images.pop()">
            undo
          </span>
        </div>
      </div>
      <div @click="handleAdd" class="self-end mt-6">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.title"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {getFormData} from "~/components/helper/createFormData";
import {addPropertyImages} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['id'],
  data: () => ({
    addedData: {
      images: []
    },
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    },
    loading: false,
  }),
  methods: {
    handleAdd() {
      const formData = new FormData()
      this.addedData.images.forEach((item, i) => {
        formData.append(`images`, item)
      })
      this.loading = true;
      addPropertyImages(this.id, formData, (data) => {
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
