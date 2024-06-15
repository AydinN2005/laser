<template>
  <div>
    <strong class="modal-box-title">
      edit service type
    </strong>
    <div class="flex flex-col mt-10">
      <TextInput :data="serviceType.name" title="service type name " type="text"
                 @dataChanged="(data) => {serviceType.name = data}"/>
      <div @click="handleEdit" class="self-end mt-6">
        <AdminButton title="edit"/>
      </div>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import {editServiceType, getServiceTypeById} from "~/services/api/admin/services";
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    serviceType: {},
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    }
  }),
  mounted() {
    getServiceTypeById(parseInt(this.$route.params.id), ({data}) => {
      this.serviceType = data.type
    })
  },
  methods: {
    handleEdit() {
      editServiceType(parseInt(this.$route.params.id), this.serviceType.name, (data) => {
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
      })
    }
  }
}
</script>

<style scoped>

</style>
