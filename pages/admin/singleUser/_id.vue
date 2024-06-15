<template>
  <div class="flex flex-col items-end">
    <div class="mb-16 w-full flex flex-col">
      <strong class="modal-box-title block mb-6">
        user reservations
      </strong>
      <DataTable :header="tblHeader">
        <tr v-for="(item, i) in reserve" :key="item.id">
          <td style="text-align: left;padding-left: 4px">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.year }}-{{ item.month }}-{{ item.day }}
          </td>
          <td>
            {{ item.service?.name }}
          </td>
          <td>
            <div @click="showDelReserve(item.id)" class="flex justify-end">
              <AdminButton title="delete" type="delete"/>
            </div>
          </td>
        </tr>
      </DataTable>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 w-full">
      <TextInput :data="user.first_name" :icon="false" :title="'first name'" :type="'text'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput :data="user.last_name" :icon="false" :title="'last name'" :type="'text'" ::required="true"
                 :readOnly="!changeMode"/>
      <a :href="`tel:${user.phone}`">
        <TextInput :data="user.phone" :icon="false" :title="'phone number'" :type="'text'" :required="true"
                   :readOnly="!changeMode"/>
      </a>
      <a :href="`mailto:${user.email}`">
        <TextInput :data="user.email" :icon="false" :title="'email'" :type="'email'" :required="true"
                   :readOnly="!changeMode"/>
      </a>
      <TextInput :data="user.password" :icon="false" :title="'password'" :type="'password'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput :data="user.location" :icon="false" :title="'location'" :type="'text'" :required="true"
                 :readOnly="!changeMode"/>
      <div class="md:col-start-1 md:col-end-4 flex md:flex-row flex-col items-center">
        <TextInput :data="user.address" :icon="false" :title="'address'" :type="'text'" :required="true"
                   :readOnly="!changeMode"/>
        <TextInput :data="user.file_number? user.file_number : ''" :icon="false" :title="'file number'" :type="'text'"
                   :required="true"
                   class="mt-6 md:mt-0 md:ml-6"
                   :readOnly="!changeMode"/>
      </div>
    </div>
    <div class="flex md:flex-row flex-col items-center mt-10 md:justify-end w-full">
      <AdminButton title="reschedule" @clicked="showAddReservation = !showAddReservation"
                   class="mt-4 md:mt-0  md:mr-4"/>
      <div @click="showDelete = true">
        <AdminButton title="delete user" type="delete" class="mt-4 md:mt-0 md:mr-4"/>
      </div>
      <div @click="showFileNumber = true;" class="md:mt-0 mt-4">
        <AdminButton title="edit user file number"/>
      </div>
    </div>
    <div class="overlay" :style="showDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="loadingOne"
                    :message="`are you sure for delete user ${user.first_name} ${user.last_name} ?`"
                    accept-title="delete" cancel-title="cancel"
                    @cancel="showDelete = false"
                    @accept="removeUser"
      />
    </div>
    <div class="overlay" :style="showReserveDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="loadingTwo" :message="`are you sure for delete ?`"
                    accept-title="delete" cancel-title="cancel"
                    @cancel="showReserveDelete = false"
                    @accept="delReserve"
      />
    </div>
    <div class="overlay" :style="showFileNumber ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <EditFileNumber @close="showFileNumber = false;"/>
    </div>
    <div class="overlay" :style="showAddReservation ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
      <AddReservation :key="forceUpdate" :selected="'selected'"
                      :user="{id: user.id, name: `${user.first_name} ${user.last_name}`}"
                      @close="showAddReservation = false"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :message="notif.message"
                      :title="notif.title" :type="notif.type"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {deleteUser, getAllUsers} from "~/services/api/admin/users";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import DataTable from "~/components/helper/DataTable";
import {deleteReserve, getReservationOfUser} from "~/services/api/admin/reservation";
import EditFileNumber from "~/components/pages/admin/users/EditFileNumber";
import AddReservation from "~/components/pages/admin/reservation/AddReservation";

export default {
  components: {AddReservation, EditFileNumber, DataTable, NotificationCard, DeleteDialog, AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    changeMode: false,
    user: {},
    showDelete: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: 'date'
      },
      {
        id: 3,
        title: 'service name'
      },
      {
        id: 4,
        title: "action"
      }
    ],
    reserve: [],
    showReserveDelete: false,
    reserveId: '',
    loadingOne: false,
    loadingTwo: false,
    showFileNumber: false,
    showAddReservation: false,
    forceUpdate: 0
  }),
  mounted() {
    const id = parseInt(this.$route.params.id)
    getAllUsers((data) => {
      data.map((item) => {
        if (item.id === id) {
          this.user = item;
          this.forceUpdate = Math.floor(Math.random() * 100000)
          // console.log(this.user)
        }
      })
    })
  },
  methods: {
    removeUser() {
      this.loadingOne = true;
      deleteUser(this.user.id, (data) => {
        this.showDelete = false;
        if (!data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
          this.$router.push('/admin/users')
        } else {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        }
        this.loadingOne = false;
      })
    },
    getReserves() {
      getReservationOfUser(this.user.id, (data) => {
        this.reserve = data;
      })
    },
    showDelReserve(reserveId) {
      this.showReserveDelete = true;
      this.reserveId = reserveId
    },
    delReserve() {
      this.loadingTwo = true;
      deleteReserve(this.user.id, this.reserveId, (data) => {
        if (!data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
          this.getReserves()
          this.showReserveDelete = false;
        } else {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        }
        this.loadingTwo = false;
      })
    }
  },
  watch: {
    user: {
      handler() {
        this.getReserves()
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
