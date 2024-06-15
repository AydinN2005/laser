<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        enter your reply text
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10 ">
      <TextInput bg="white" title="reply text" type="text" @dataChanged="(data) => {reply = data;}"/>
      <div @click="addHandler" class="mt-6 self-end">
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
import {replyBlogComment, replyServiceComment} from "~/services/api/admin/comments";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['id', 'services'],
  data: () => ({
    reply: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
  }),
  methods: {
    addHandler() {
      this.loading = true;
      replyServiceComment({text: this.reply, id: this.id}, (data) => {
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
