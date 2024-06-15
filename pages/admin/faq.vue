<template>
  <div class="flex flex-col">
    <div @click="showFaqAdd = true;">
      <AdminButton title="add faq"/>
    </div>
    <DataTable :filter="true" :data="questions" @getData="handleSearch" v-if="!mainLoading" class="mt-10"
               :header="tblHeader">
      <tr v-for="(item, i) in finallyData" :key="item.id">
        <td>
          {{ (i + 1) }}
        </td>
        <td>
          {{ item.question }}
        </td>
        <td>
          {{ item.answer }}
        </td>
        <td>
          <div @click="handleShowDel(item.id)" class="flex justify-end w-full">
            <AdminButton type="delete" title="delete"/>
          </div>
        </td>
      </tr>
    </DataTable>
    <BigLoader v-if="mainLoading"/>
    <div class="overlay" :style="showFaqAdd ? {zIndex: 999,opacity: 1} : {zIndex: -3,opacity: 0}">
      <AddFaqBox @close="showFaqAdd = false"/>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="delLoading" message="are you sure for delete ?" accept-title="delete"
                    cancel-title="cancel"
                    @cancel="showDel = false" @accept="handleDel"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import {deleteFaq, getAllFaq} from "~/services/api/admin/faq";
import AddFaqBox from "~/components/pages/admin/faq/AddFaqBox";
import Admin from "~/layouts/admin";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, NotificationCard, DeleteDialog, Admin, AddFaqBox, DataTable, AdminButton},
  layout: 'admin',
  data: () => ({
    showFaqAdd: false,
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "question"
      },
      {
        id: 3,
        title: "answer"
      },
      {
        id: 4,
        title: "action"
      }
    ],
    questions: [],
    delId: '',
    showDel: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    mainLoading: false,
    delLoading: false,
    finallyData: []
  }),
  mounted() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      this.mainLoading = true;
      getAllFaq((data) => {
        this.questions = data.FAQs
        this.finallyData = data.FAQs
        this.mainLoading = false;
      })
    },
    handleShowDel(id) {
      this.delId = id;
      this.showDel = true;
    },
    handleDel() {
      this.delLoading = true;
      deleteFaq(this.delId, (data) => {
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
          this.getQuestions()
        }
        this.delLoading = false;
        this.showDel = false;
      })
    },
    handleSearch(data) {
      this.finallyData = data
    }
  }
}
</script>

<style scoped>

</style>
