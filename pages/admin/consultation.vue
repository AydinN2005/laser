<template>
  <div class="flex flex-col">
    <strong class="modal-box-title">
      all consultations
    </strong>
    <div class="mt-10 tbl-container">
      <DataTable :filter="true" :data="consultations" @getData="handleSearch" v-if="!mainLoading" :header="header">
        <tr v-for="(item, i) in finallyData" :key="item.id">
          <td style="text-align: left;padding-left: 8px;">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.date }}
          </td>
          <td>
            {{ item.start_hour }}
          </td>
          <td>
            {{ item.status }}
          </td>
          <td>
            {{ item.user.email }}
          </td>
          <td>
            <div @click="showDeleteHandler(item.id, item.user.id)">
              <AdminButton title="delete" type="delete"/>
            </div>
          </td>
        </tr>
      </DataTable>
      <BigLoader v-if="mainLoading"/>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure for delete ?" @cancel="showDel = false"
                    accept-title="delete"
                    cancel-title="cancel" @accept="handleDel"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import DataTable from "~/components/helper/DataTable";
import {deleteConsultation, getALlConsultation} from "~/services/api/admin/consultation";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, NotificationCard, DeleteDialog, AdminButton, DataTable},
  layout: 'admin',
  data: () => ({
    header: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "date"
      },
      {
        id: 3,
        title: "hour"
      },
      {
        id: 4,
        title: "status"
      },
      {
        id: 6,
        title: "user"
      },
      {
        id: 7,
        title: "action"
      }
    ],
    consultations: [],
    finallyData: [],
    delId: '',
    delUserId: '',
    showDel: false,
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    },
    mainLoading: false,
    delLoading: false,
  }),
  mounted() {
    this.getALl()
  },
  methods: {
    showDeleteHandler(id, userId) {
      this.delId = id;
      this.delUserId = userId;
      this.showDel = true;
    },
    getALl() {
      this.mainLoading = true;
      getALlConsultation((data) => {
        // this.consultations = data;
        data.map(item => {
          this.consultations.push({
            ...item,
            date: `${item.year}-${item.month}-${item.day}`,
            user: item.user
          })
        })
        this.finallyData = this.consultations;
        this.mainLoading = false;
      })
    },
    handleDel() {
      this.delLoading = true;
      deleteConsultation(this.delId, parseInt(this.delUserId), (data) => {
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
          this.getALl()
        }
        this.delLoading = false;
        this.showDel = false;
      })
    },
    handleSearch(data) {
      this.finallyData = data;
    }
  }
}
</script>

<style lang="scss">
.tbl-container {
  th {
    &:last-child {
      text-align: center !important;
    }
  }
}
</style>
