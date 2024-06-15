<template>
  <div class="flex flex-col">
    <div class="flex items-center mb-10">
      <div @click="showAddService = true" class="w-max">
        <AdminButton title="add service"/>
      </div>
      <div @click="showCompleteModal = true" class="w-max ml-4">
        <AdminButton title="add service property"/>
      </div>
    </div>
    <div class="flex flex-col">
      <DataTable :data="services" @getData="handleSearch" v-if="!mainLoading" :header="tblHeader" :filter="true">
        <tr v-for="(item, i) in finallyData" :key="item.id">
          <td style="text-align: left !important;">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.price ? item.price : '0$' }}
          </td>
          <td>
            <div class="flex items-center justify-center">
              <nuxt-link :to="`/admin/singleService/${item.id}`" class="cursor-pointer">
                <img loading="lazy" src="~/assets/admin/icons/edit.svg" alt=""/>
              </nuxt-link>
              <div class="ml-4 cursor-pointer" @click="handleShowDelete(item.id)">
                <img loading="lazy" src="~/assets/admin/icons/delete.svg" alt=""/>
              </div>
            </div>
          </td>
        </tr>
      </DataTable>
      <BigLoader v-if="mainLoading"/>
    </div>
    <div class="overlay" :style="showDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" accept-title="delete" cancel-title="cancel"
                    message="are you sure for delete service ?"
                    @cancel="showDelete = false" @accept="delService"/>
    </div>
    <div class="overlay" :style="showAddService ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddService @close="showAddService = false"/>
    </div>
    <div class="overlay" :style="showCompleteModal ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddServiceProperty @close="showCompleteModal = false" :services="services"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import {
  deleteService,
  deleteServiceType,
  getAllServices,
  getAllServicesType,
  getServicesByType
} from "~/services/api/admin/services";
import DeleteDialog from "~/components/elements/DeleteDialog";
import AddServiceType from "~/components/pages/admin/services/AddServiceType";
import AddService from "~/components/pages/admin/services/AddService";
import AddServiceProperty from "~/components/pages/admin/services/AddServiceProperty";
import TextInput from "~/components/elements/TextInput";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {
    BigLoader,
    NotificationCard,
    TextInput, AddServiceProperty, AddService, AddServiceType, DeleteDialog, DataTable, AdminButton
  },
  layout: 'admin',
  data: () => ({
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "name"
      },
      {
        id: 3,
        title: "price"
      },
      {
        id: 7,
        title: 'actions'
      }
    ],
    services: [],
    showDelete: false,
    deleteId: 0,
    showAddService: false,
    showCompleteModal: false,
    notif: {
      active: false,
      title: "",
      type: '',
      message: ""
    },
    mainLoading: false,
    delLoading: false,
    finallyData: []
  }),
  mounted() {
    this.getServices()
  },
  methods: {
    handleShowDelete(id) {
      this.deleteId = id;
      this.showDelete = true;
    },
    delService() {
      this.delLoading = true;
      deleteService(this.deleteId, (data) => {
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
          this.getServices()
        }
        this.delLoading = false;
        this.showDelete = false
      })
    },
    getServices() {
      this.mainLoading = true;
      getAllServices((data) => {
        this.services = data.services;
        this.finallyData = data.services
        this.mainLoading = false;
      })
    },
    handleSearch(data) {
      this.finallyData = data;
    }
  },
}
</script>

<style scoped>

</style>
