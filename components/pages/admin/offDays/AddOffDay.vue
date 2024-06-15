<template>
  <div class="modal-box">
    <div class="flex items-center w-full justify-between">
      <strong class="modal-box-title">
        add off day
      </strong>
      <img src="~/assets/images/icons/close-icon.svg" alt="" @click="$emit('close')" class="cursor-pointer">
    </div>
    <div class="mt-10 flex flex-col">
      <TextInput title="off day" bg="white" type="date" place-holder="enter your off day"
                 @dataChanged="fillOffDay"/>
      <AdminButton :loading="loading" title="add" @clicked="handleAddOfDay" class="self-end mt-6"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addOffDay} from "~/services/api/admin/offDays";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    offDay: {
      year: 0,
      month: 0,
      day: 0
    },
    loading: false,
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    }
  }),
  methods: {
    fillOffDay(data) {
      const finallyOffDay = data.split('-')
      this.offDay.year = parseInt(finallyOffDay[0])
      this.offDay.month = parseInt(finallyOffDay[1])
      this.offDay.day = parseInt(finallyOffDay[2])
    },
    handleAddOfDay() {
      this.loading = true;
      addOffDay(this.offDay, (res) => {
        if (res.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = 'off day successfully added .'
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = res.data.message
        }
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
