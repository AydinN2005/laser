<template>
  <div class="flex flex-col">
    <AdminButton title="add off day" @clicked="showAdd = !showAdd"/>
    <div class="overlay" :style="showAdd ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddOffDay @close="showAdd = false"/>
    </div>
    <DataTable :header="tblHeader" v-if="!loading" class="mt-10">
      <tr v-for="item in offDays">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.year }}-{{ item.month }}-{{ item.day }}
        </td>
        <td>
          <div class="w-full flex items-center justify-end">
            <AdminButton title="delete" type="delete" @clicked="handleDeleteOffDay(item.id)"/>
          </div>
        </td>
      </tr>
    </DataTable>
    <div v-if="loading" class="flex items-center w-full justify-between mt-10">
      <BigLoader/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure about it ?" cancel-title="cancel" accept-title="delete"
                    @cancel="showDel = false" @accept="handleFinallyDel"/>
    </div>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import AddOffDay from "~/components/pages/admin/offDays/AddOffDay";
import DataTable from "~/components/helper/DataTable";
import {deleteOffDay, getOffDays} from "~/services/api/admin/offDays";
import BigLoader from "~/components/pages/admin/helper/BigLoader";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import DeleteDialog from "~/components/elements/DeleteDialog";

export default {
  components: {DeleteDialog, NotificationCard, BigLoader, DataTable, AddOffDay, AdminButton},
  layout: 'admin',
  data: () => ({
    showAdd: false,
    tblHeader: [
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
        title: "action"
      }
    ],
    offDays: [],
    loading: false,
    delLoading: false,
    showDel: false,
    delId: 0,
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    }
  }),
  mounted() {
    this.handleGetOffDays()
  },
  methods: {
    handleGetOffDays() {
      this.loading = true;
      getOffDays((data) => {
        this.offDays = data;
        console.log(data)
        this.loading = false;
      })
    },
    handleDeleteOffDay(id) {
      this.delId = id;
      this.showDel = true;
    },
    handleFinallyDel() {
      this.delLoading = true;
      deleteOffDay(this.delId, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message;
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = 'off day successfully deleted';
        }
        this.delLoading = false;
        this.showDel = false;
        this.handleGetOffDays()
      })
    }
  }
}
</script>

<style scoped>

</style>
