<template>
  <div class="flex flex-col">
    <strong class="modal-box-title block mb-8">
      blog properties
    </strong>
    <div @click="showAddProperty = true" class="mb-10">
      <AdminButton title="add property"/>
    </div>
    <DataTable :header="tblHeader">
      <tr v-for="(item, i) in properties" :key="item.id">
        <td style="text-align: left;padding-left: 8px">
          {{ (i + 1) }}
        </td>
        <td>
          {{ item.title }}
        </td>
        <td v-html="item.description">
<!--          {{ item.description }}-->
        </td>
        <td>
          {{ item.images.length }}
        </td>
        <td>
          <div class="flex items-center justify-end pr-7">
            <nuxt-link :to="`/admin/singleBlogProperty/${item.id}`">
              <img loading="lazy"     src="~/assets/admin/icons/edit.svg" alt="" />
            </nuxt-link>
            <div class="cursor-pointer ml-3" @click="handleShowDel(item.id)">
              <img loading="lazy"     src="~/assets/admin/icons/delete.svg" alt="" />
            </div>
          </div>
        </td>
      </tr>
    </DataTable>
    <div class="overlay" :style="showAddProperty ? {zIndex: 999,opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddBlogPropertyBox @close="showAddProperty = false" :id="id"/>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999,opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog cancel-title="cancel" accept-title="delete" @cancel="showDel = false" @accept="handleDel"
                    message="are you sure for delete ?"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import DataTable from "~/components/helper/DataTable";
import {deleteBlogProperty, getBlogById} from "~/services/api/admin/blogs";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import AddBlogPropertyBox from "~/components/pages/admin/blogs/AddBlogPropertyBox";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";

export default {
  components: {NotificationCard, DeleteDialog, AddBlogPropertyBox, AdminButton, DataTable},
  props: ['id'],
  data: () => ({
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
        title: "images count"
      },
      {
        id: 5,
        title: "action"
      }
    ],
    properties: [],
    propertyId: '',
    showDel: false,
    showAddProperty: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
  }),
  mounted() {
    this.getProperties()
  },
  methods: {
    getProperties() {
      getBlogById(this.id, (data) => {
        this.properties = data.properties;
      })
    },
    handleShowDel(id) {
      this.propertyId = id;
      this.showDel = true;
    },
    handleDel() {
      deleteBlogProperty(this.propertyId, (data) => {
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
          this.getProperties()
        }
        this.showDel = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
