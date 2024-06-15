<template>
  <div class="flex flex-col">
    <div @click="showAdd = true">
      <AdminButton title="add property"/>
    </div>
    <div class="mt-10">
      <DataTable :header="tblHeader">
        <tr v-for="(item, i) in properties" :key="item.id">
          <td style="text-align: left;padding-left: 8px">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.title }}
          </td>
          <td v-html="item.description">
<!--            {{ item.description }}-->
          </td>
          <td>
            <div class="flex items-center pr-7">
              <div class="cursor-pointer mr-3" @click="handleShowEdit(item.id)">
                <img loading="lazy"     src="~/assets/admin/icons/edit.svg" alt="" />
              </div>
              <div class="cursor-pointer" @click="handleShowDel(item.id)">
                <img loading="lazy"     src="~/assets/admin/icons/delete.svg" alt="" />
              </div>
            </div>
          </td>
        </tr>
      </DataTable>
    </div>
    <div class="overlay" :style="showAdd ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddAreaProperty @close="showAdd = false" :id="areaId"/>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog message="are you sure for delete ?" @cancel="showDel = false" @accept="handleDel"
                    cancel-title="cancel" accept-title="delete"/>
    </div>
    <div class="overlay" :style="showEdit ? {zIndex: 999, opacity: 1} : {zIndex: -3,opacity: 0}">
      <EditAreaPropertyBox :areaId="areaId" :propertyId="propertyId" @close="showEdit = false"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import {deleteBodyAreaProperty, getOneBodyArea} from "~/services/api/admin/bodyArea";
import DeleteDialog from "~/components/elements/DeleteDialog";
import AddAreaProperty from "~/components/pages/admin/bodyArea/AddAreaProperty";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import EditBodyAreaBox from "~/components/pages/admin/bodyArea/EditBodyAreaBox";
import EditAreaPropertyBox from "~/components/pages/admin/bodyArea/EditAreaPropertyBox";

export default {
  components: {
    EditAreaPropertyBox,
    EditBodyAreaBox, NotificationCard, AddAreaProperty, DeleteDialog, DataTable, AdminButton},
  props: ['areaId'],
  data: () => ({
    showAdd: false,
    showEdit: false,
    showDel: false,
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "title"
      },
      {
        id: 3,
        title: "description"
      },
      {
        id: 4,
        title: "action"
      }
    ],
    properties: {},
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    propertyId: ''
  }),
  mounted() {
    this.getPropertyOfArea()
  },
  methods: {
    getPropertyOfArea() {
      getOneBodyArea(this.areaId, (data) => {
        this.properties = data.bodyArea.properties
      })
    },
    handleShowEdit(id) {
      this.propertyId = id;
      this.showEdit = true;
    },
    handleShowDel(id) {
      this.propertyId = id;
      this.showDel = true;
    },
    handleDel() {
      deleteBodyAreaProperty(this.propertyId, (data) => {
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
          this.getPropertyOfArea()
        }
        this.showDel = false;
      })
    }
  },
  watch: {
    areaId() {
      this.getPropertyOfArea()
    }
  }
}
</script>

<style scoped>

</style>
