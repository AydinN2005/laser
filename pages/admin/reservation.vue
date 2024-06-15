<template>
  <div class="flex flex-col">
    <div @click="showAdd = !showAdd" class="w-max">
      <AdminButton title="booking" class="mb-10"/>
    </div>
    <DataTable :data="reservations" v-if="!mainLoading" @getData="handleSearch" :header="tblHeader"
               :filter="true">
      <tr v-for="item in finallyData">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.date }}
        </td>
        <td>
          {{ item.start }}
        </td>
        <td>
          {{ item.end }}
        </td>
        <td>
          {{ item.user?.email }}
        </td>
        <td>
          {{ item.user?.file_number }}
        </td>
        <td>
          {{ item.service?.name }}
        </td>
        <td>
          <div class="flex items-center justify-end" @click="delReservation(item.user.id, item.id)">
            <AdminButton title="delete" type="delete"/>
          </div>
        </td>
      </tr>
    </DataTable>
    <BigLoader v-if="mainLoading"/>
    <div class="overlay" :style="showDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure about it ?" cancel-title="cancel" accept-title="delete"
                    @cancel="showDelete = false" @accept="delReserveFinally"/>
    </div>
    <NotificationCard :active="notif.active" @close="notif.active = false" :message="notif.message" :title="notif.title"
                      :type="notif.type"/>
    <div class="overlay" :style="showAdd ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
      <AddReservation @close="showAdd = false"/>
    </div>
  </div>
</template>

<script>
import {deleteReserve, getAllReservation} from "~/services/api/admin/reservation";
import DataTable from "~/components/helper/DataTable";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import AddReservation from "~/components/pages/admin/reservation/AddReservation";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import DeleteDialog from "~/components/elements/DeleteDialog";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, DeleteDialog, NotificationCard, AddReservation, AdminButton, DataTable},
  layout: 'admin',
  data: () => ({
    finallyData: [],
    reservations: [],
    tblHeader: [
      {
        id: 1,
        title: "book number"
      },
      {
        id: 2,
        title: "date"
      },
      {
        id: 6,
        title: "start time"
      },
      {
        id: 7,
        title: "end time"
      },
      {
        id: 3,
        title: "user"
      },
      {
        id: 4,
        title: "user F.N"
      },
      {
        id: 4,
        title: "service"
      },
      {
        id: 5,
        title: 'actions'
      }
    ],
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    },
    showAdd: false,
    userId: '',
    reserveId: '',
    showDelete: false,
    mainLoading: false,
    delLoading: false,
  }),
  mounted() {
    this.getReservations()
  },
  methods: {
    delReservation(userId, reserveId) {
      this.userId = userId;
      this.reserveId = reserveId
      this.showDelete = true;
    },
    getReservations() {
      this.mainLoading = true;
      getAllReservation(data => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.type = 'error'
          this.notif.title = 'error'
          this.notif.message = data.message
        } else {
          data.map(item => {
            this.reservations.push({
              ...item,
              date: `${item.year}-${item.month}-${item.day}`
            })
          })
          this.finallyData = this.reservations;
        }
        this.mainLoading = false;
      })
    },
    delReserveFinally() {
      this.delLoading = true;
      deleteReserve(this.userId, this.reserveId, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.type = 'error'
          this.notif.title = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.type = 'success'
          this.notif.title = 'success'
          this.notif.message = data.message
          this.getReservations()
        }
        this.delLoading = false;
        this.showDelete = false;
      })
    }
    ,
    handleSearch(data) {
      this.finallyData = data;
    }
  }
}
</script>

<style scoped>

</style>
