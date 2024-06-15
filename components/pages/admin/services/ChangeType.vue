<template>
  <div class="modal-box">
    <div class="flex items-center justify-between mb-10">
      <strong class="modal-box-title">
        change service type
      </strong>
      <div @click="$emit('close')">
        <img loading="lazy"     src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt="" />
      </div>
    </div>
    <span style="font-size: 14px">
      current type : <span style="color: var(--primary-purple)">{{ currentType.name }}</span>
    </span>
    <div class="mt-6 flex flex-col items-end">
      <TextInput bg="white" title="new type" type="select" @dataChanged="(data) => {type = data}">
        <option v-for="item in allTypes" :value="item.name">
          {{ item.name }}
        </option>
      </TextInput>
      <div @click="addNewType" class="mt-6">
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
import {changeServiceType, getAllServicesType} from "~/services/api/admin/services";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['currentType', 'serviceId'],
  data: () => ({
    type: '',
    allTypes: [],
    notif: {
      active: false,
      title: "",
      message: "",
      type: ''
    }
  }),
  mounted() {
    getAllServicesType((data) => {
      this.allTypes = data;
    })
  },
  methods: {
    addNewType() {
      changeServiceType({type: this.type, serviceId: this.serviceId}, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error';
          this.notif.type = 'error';
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success';
          this.notif.type = 'success';
          this.notif.message = data.message
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
