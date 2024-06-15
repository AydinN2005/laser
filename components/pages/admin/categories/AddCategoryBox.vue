<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        add category
      </strong>
      <div class="cursor-pointer" @click="$emit('close')">
        <img loading="lazy" src="~/assets/images/icons/close-icon.svg" alt=""/>
      </div>
    </div>
    <div class="flex flex-col mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput title="category name" type="text" bg="white" @dataChanged="(data) => {name = data}"/>
        <TextInput title="sub category (optional)" type="select"
                   @dataChanged="(data) => {id = data;}" bg="white">
          <option v-for="item in categories" :value="item.id">
            {{ item.name }}
          </option>
        </TextInput>
      </div>
      <div @click="handleAdd" class="self-end mt-6">
        <AdminButton :loading="loading" title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import {addCategory, getAllCategories} from "~/services/api/admin/categories";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    // category: {
    //   name: "",
    //   parentId: 0
    // },
    name: "",
    id: null,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    categories: null,
    loading: false,
  }),
  mounted() {
    getAllCategories((data) => {
      this.categories = data;
    })
  },
  methods: {
    handleAdd() {

      let sendData = {}
      if (this.id !== null) {
        sendData = {
          name: this.name,
          parentId: this.id
        }
      } else {
        sendData = {
          name: this.name
        }
      }
      this.loading = true;
      addCategory(sendData, (data) => {
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
