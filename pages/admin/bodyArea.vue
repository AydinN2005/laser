<template>
  <div class="flex flex-col">
    <div @click="showAdd = true;">
      <AdminButton title="add body area"/>
    </div>
    <div class="mt-10">
      <DataTable :filter="true" :data="areas" @getData="handleSearch" v-if="!mainLoading" :header="bodyAreaHeader">
        <tr v-for="(item, i) in finallyData" :key="item.id">
          <td style="text-align: left;padding-left: 8px;">
            {{ (i + 1) }}
          </td>
          <td>
            <div class="flex items-center justify-center">
              <img loading="lazy" style="width: 64px;height: 64px;border-radius: 12px" :src="`${baseUrl}/${item.image}`"
                   alt=""/>
            </div>
          </td>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.title }}
          </td>
          <td v-html="item.description">
<!--            {{ item.description }}-->
          </td>
          <td>
            <div class="flex items-center justify-end pr-7">
              <div class="cursor-pointer mr-3" @click="handleShowEdit(item.id)">
                <img loading="lazy" src="~/assets/admin/icons/edit.svg" alt=""/>
              </div>
              <div class="cursor-pointer" @click="handleShowDel(item.id)">
                <img loading="lazy" src="~/assets/admin/icons/delete.svg" alt=""/>
              </div>
            </div>
          </td>
        </tr>
      </DataTable>
      <BigLoader v-if="mainLoading"/>
    </div>
    <div class="mt-16 flex flex-col">
      <strong class="modal-box-title block mb-6">
        select body area for property
      </strong>
      <TextInput title="select body area" type="select" @dataChanged="(data) => {selectedArea = data}">
        <option v-for="item in areas" :value="item.id">
          {{ item.title }}
        </option>
      </TextInput>
      <BodyAreaProperty v-if="selectedArea !== null" :areaId="selectedArea" class="mt-10"/>
    </div>
    <div class="overlay" :style="showAdd ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddBodyAreaBox @close="showAdd = false;"/>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure for delete ?" @cancel="showDel = false"
                    @accept="handleDel"
                    cancel-title="cancel" accept-title="delete"/>
    </div>
    <div class="overlay" :style="showEdit ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
      <EditBodyAreaBox @close="showEdit = false" :id="editId"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import {deleteBodyArea, getAllBodyArea} from "~/services/api/admin/bodyArea";
import {baseUrl} from "~/services/baseUrl";
import AddBodyAreaBox from "~/components/pages/admin/bodyArea/AddBodyAreaBox";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import EditBodyAreaBox from "~/components/pages/admin/bodyArea/EditBodyAreaBox";
import TextInput from "~/components/elements/TextInput";
import BodyAreaProperty from "~/components/pages/admin/bodyArea/BodyAreaProperty";
import Loader from "~/components/elements/Loader";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {
    BigLoader,
    Loader,
    BodyAreaProperty,
    TextInput, EditBodyAreaBox, NotificationCard, DeleteDialog, AddBodyAreaBox, DataTable, AdminButton
  },
  layout: 'admin',
  data: () => ({
    baseUrl,
    showAdd: false,
    showEdit: false,
    showDel: false,
    bodyAreaHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 5,
        title: "image"
      },
      {
        id: 2,
        title: "name"
      },
      {
        id: 3,
        title: "title"
      },
      {
        id: 4,
        title: "description"
      },
      {
        id: 6,
        title: "action"
      }
    ],
    areas: [],
    editId: '',
    delId: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    selectedArea: null,
    mainLoading: false,
    delLoading: false,
    finallyData: []
  }),
  mounted() {
    this.getAreas()
  },
  methods: {
    getAreas() {
      this.mainLoading = true;
      getAllBodyArea((data) => {
        this.areas = data;
        this.finallyData = data;
        this.mainLoading = false;
      })
    },
    handleShowEdit(id) {
      this.editId = id;
      this.showEdit = true;
    },
    handleShowDel(id) {
      this.delId = id;
      this.showDel = true;
    },
    handleDel() {
      this.delLoading = true;
      deleteBodyArea(this.delId, (data) => {
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
          this.getAreas()
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

<style scoped>

</style>
