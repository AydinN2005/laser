<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        add faq
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <div class="flex items-center">
        <TextInput title="question" type="text" bg="white" @dataChanged="(data) => {question = data}"/>
        <TextInput title="answer" type="text" bg="white" @dataChanged="(data) => {answer = data}" class="ml-3"/>

      </div>
      <div @click="addHandler" class="self-end mt-6">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import {getAllUsers} from "~/services/api/admin/users";
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addFaqApi, changeFaqStatus, getAllFaq} from "~/services/api/admin/faq";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    users: [],
    userId: '',
    selectedUser: {},
    question: '',
    answer: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loading: false,
  }),
  mounted() {
  },
  methods: {
    addHandler() {
      this.loading = true;
      addFaqApi({
        question: this.question,
        answer: this.answer
      }, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message;
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message;
          getAllFaq((data))
        }
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
