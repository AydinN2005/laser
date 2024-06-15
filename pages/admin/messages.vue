<template>
  <div class="flex flex-col">
    <strong class="modal-box-title block mb-10">
      messages
    </strong>
    <DataTable :filter="true" :data="messages" @getData="handleSearch" v-if="!mainLoading" :header="tblHeader">
      <tr v-for="(item, i) in finallyData" :key="item.id">
        <td>
          {{ (i + 1) }}
        </td>
        <td>
          {{ item.full_name }}
        </td>
        <td>
          {{ item.email }}
        </td>
        <td>
          {{ item.phone }}
        </td>
        <td>
          {{ item.location }}
        </td>
        <td style="padding: 0 24px;">
          {{ item.message }}
        </td>
        <td>
          <div @click="handleShowDel(item.id)">
            <AdminButton type="delete" title="delete"/>
          </div>
        </td>
      </tr>
    </DataTable>
    <BigLoader v-if="mainLoading"/>
    <div class="overlay" :style="showDel ? {zIndex: 999,opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" @cancel="showDel = false" @accept="delMessage"
                    message="are you sure for delete ?"
                    accept-title="delete" cancel-title="cancel"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import DataTable from "~/components/helper/DataTable";
import {deleteMessage, getMessages} from "~/services/api/admin/contactUs";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DeleteDialog from "~/components/elements/DeleteDialog";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, DeleteDialog, AdminButton, NotificationCard, DataTable},
  layout: 'admin',
  data: () => ({
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "user full name"
      },
      {
        id: 3,
        title: "user email"
      },
      {
        id: 4,
        title: "user phone"
      },
      {
        id: 5,
        title: "user location"
      },
      {
        id: 6,
        title: "message"
      },
      {
        id: 7,
        title: "action"
      }
    ],
    messages: [],
    messageId: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    showDel: false,
    mainLoading: false,
    delLoading: false,
    finallyData: []
  }),
  mounted() {
    this.getHandler()
  },
  methods: {
    getHandler() {
      this.mainLoading = true;
      getMessages((data) => {
        this.messages = data;
        this.finallyData = data;
        this.mainLoading = false;
      })
    },
    handleShowDel(id) {
      this.messageId = id;
      this.showDel = true;
    },
    delMessage() {
      this.delLoading = true;
      deleteMessage(this.messageId, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
          this.showDel = false;
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
          this.getHandler()
          this.showDel = false;
        }
        this.delLoading = false;
      })
    },
    handleSearch(data) {
      this.finallyData = data;
    }
  }
}
</script>

<style scoped>

</style>
