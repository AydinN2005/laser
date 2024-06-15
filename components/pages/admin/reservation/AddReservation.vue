<template>
  <div class="add-reserve flex flex-col modal-box">
    <div class="flex items-center justify-between">
      <strong class="modal-box-title">
        booking
      </strong>
      <img loading="lazy" src="~/assets/images/icons/close-icon.svg" @click="$emit('close')" class="cursor-pointer"
           alt=""/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
      <TextInput
        bg="white"
        @dataChanged="(data) => {date = data}" type="date" title="choose your date"/>
      <client-only>
        <div class="relative">
          <v-select
            label="name"
            :options="users"
            v-model="reservation.user"
            :searchable="true"
            placeholder="type here for search ..."
          ></v-select>
          <span class="select-user-label text-base font-bold flex items-center">
            select user
          </span>
        </div>
      </client-only>
      <TextInput
        bg="white"
        @dataChanged="(data) => {reservation.service = parseInt(data)}" type="select" title="select service">
        <option v-for="item in services" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </TextInput>
      <div class="col-start-1 col-end-2 md:col-end-4 flex items-center md:flex-row flex-col">
        <TextInput bg="white" @dataChanged="(data) => {reservation.start = data}" type="text" title="enter start time"
                   place-holder="ex: 10:30"/>
        <TextInput bg="white" @dataChanged="(data) => {reservation.end = data}" type="text" title="enter end time"
                   place-holder="ex: 12:30" class="md:mt-0 mt-6 md:ml-6"/>
      </div>
    </div>
    <div @click="add" class="self-end mt-10">
      <AdminButton :loading="loading" title="add"/>
    </div>
    <NotificationCard :active="notif.active" @close="notif.active = false" :message="notif.message" :title="notif.title"
                      :type="notif.type"/>
    <div class="overlay" :style="showForceReserve ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog message="Do you want to make a booking?" cancel-title="no" accept-title="yes"
                    :loading="forceLoading"
                    @close="showForceReserve = false;"
                    @cancel="showForceReserve = false;"
                    @accept="handleForceBooking"
      />
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import {getAllUsers} from "~/services/api/admin/users";
import {getAllServices} from "~/services/api/admin/services";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {addReserve, forceReservation} from "~/services/api/admin/reservation";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import DeleteDialog from "~/components/elements/DeleteDialog";

export default {
  components: {DeleteDialog, NotificationCard, AdminButton, TextInput, 'v-select': vSelect},
  props: ['selected', 'user'],
  data: () => ({
    reservation: {
      year: '',
      month: '',
      day: '',
      user: '',
      service: '',
      start: '',
      end: ''
    },
    date: '',
    users: [],
    services: [],
    notif: {
      active: false,
      title: "",
      message: "",
      type: ""
    },
    loading: false,
    showForceReserve: false,
    forceLoading: false,
  }),
  mounted() {
    // console.log('slm')
    // console.log(this.user)
    if (this.selected === 'selected') {
      this.reservation.user = this.user;
    }
    getAllUsers((data) => {
      if (!data.statusCode) {
        data.map((item) => {
          this.users.push({
            id: parseInt(item.id),
            name: `${item.first_name} ${item.last_name}`
          })
        })
      }
    })
    getAllServices((data) => {
      if (!data.statusCode) {
        this.services = data.services;
      }
    })
  },
  methods: {
    add() {
      this.loading = true;
      addReserve(this.reservation, this.users, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.type = 'error'
          this.notif.title = 'error'
          this.notif.message = data.message
        } else if (data.message === 'day is off') {
          this.notif.active = true;
          this.notif.type = 'error'
          this.notif.title = 'error'
          this.notif.message = data.message
        } else if (data.message === 'reserved already') {
          this.notif.active = true;
          this.notif.type = 'warning'
          this.notif.title = 'warning'
          this.notif.message = data.message
          this.showForceReserve = true;
        } else {
          this.notif.active = true;
          this.notif.type = 'success'
          this.notif.title = 'success'
          this.notif.message = data.message
        }
        this.loading = false;
      })
    },
    handleForceBooking() {
      this.forceLoading = true;
      forceReservation(this.reservation, this.users, (data) => {
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
        }
        this.forceLoading = false;
        this.showForceReserve = false;
      })
    }
  },
  watch: {
    date() {
      const finallyDate = this.date.split('-')
      this.reservation.year = parseInt(finallyDate[0])
      this.reservation.month = parseInt(finallyDate[1])
      this.reservation.day = parseInt(finallyDate[2])
    },
    selected() {
      console.log(this.user)
      if (this.init) {
        this.reservation.user = this.user
        console.log(this.reservation)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.select-user-label {
  position: absolute;
  padding: 2px 8px;
  border-radius: 6px;
  top: -12px;
  left: 24px;
  background: white;
  color: var(--text-color);
  font-weight: bold;
}
</style>
