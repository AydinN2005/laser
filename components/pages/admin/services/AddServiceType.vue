<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title mb-10">
        add service type
      </strong>
      <div @click="$emit('close')" class="cursor-pointer">
        <img loading="lazy"     src="~/assets/images/icons/close-icon.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-col">
      <TextInput bg="white" title="service type" type="text" @dataChanged="(data) => {typeName = data}"/>
      <div @click="handleAdd" class="mt-10 self-end">
        <AdminButton title="add"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addServiceType} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  data: () => ({
    typeName: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    }
  }),
  methods: {
    handleAdd() {
      addServiceType(this.typeName, (data) => {
        if (!data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
