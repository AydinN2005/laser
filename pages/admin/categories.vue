<template>
  <div class="flex flex-col">
    <div @click="showAddCategory = true">
      <AdminButton title="add category"/>
    </div>
    <div v-if="!mainLoading" class="mt-10">
      <DataTable :data="categories" :filter="true" @getData="handleSearch" :header="tblHeader">
        <tr v-for="(item, i) in finallyData" :key="item.id">
          <td>
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.children.length }}
          </td>
          <td>
            <div class="flex items-center justify-end pr-7">
              <div @click="handleShowEdit(item.id)" class="cursor-pointer">
                <img loading="lazy" src="~/assets/admin/icons/edit.svg" alt=""/>
              </div>
              <div class="cursor-pointer ml-3" @click="handleShowDel(item.id)">
                <img loading="lazy" src="~/assets/admin/icons/delete.svg" alt=""/>
              </div>
            </div>
          </td>
        </tr>
      </DataTable>
      <BigLoader v-if="mainLoading"/>
    </div>
    <BigLoader v-if="mainLoading"/>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure for delete ?" cancel-title="cancel"
                    accept-title="delete"
                    @cancel="showDel = false"
                    @accept="handleDel"
      />
    </div>
    <div class="overlay" :style="showAddCategory ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddCategoryBox @close="showAddCategory = false"/>
    </div>
    <div class="overlay" :style="showEdit ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <EditCategoryBox @close="showEdit = false" :id="editId"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import {deleteCategory, getAllCategories} from "~/services/api/admin/categories";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import AddCategoryBox from "~/components/pages/admin/categories/AddCategoryBox";
import EditCategoryBox from "~/components/pages/admin/categories/EditCategoryBox";
import Loader from "~/components/elements/Loader";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {
    BigLoader,
    Loader, EditCategoryBox, AddCategoryBox, NotificationCard, DeleteDialog, DataTable, AdminButton
  },
  layout: 'admin',
  data: () => ({
    showAddCategory: false,
    showEdit: false,
    categories: null,
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
        title: "children count"
      },
      {
        id: 4,
        title: "action"
      }
    ],
    delId: '',
    editId: '',
    showDel: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    mainLoading: false,
    delLoading: false,
    finallyData: [],
  }),
  mounted() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.mainLoading = true;
      getAllCategories((data) => {
        this.categories = data;
        this.finallyData = data;
        this.mainLoading = false;
      })
    },
    handleShowDel(id) {
      this.delId = id;
      this.showDel = true;
    },
    handleShowEdit(id) {
      this.editId = id;
      this.showEdit = true;
    },
    handleDel() {
      this.delLoading = true;
      deleteCategory(this.delId, (data) => {
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
          this.getCategories()
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
