<template>
  <div class="flex flex-col">
    <strong class="modal-box-title block mb-6">
      please select service for show comments
    </strong>
    <TextInput title="select service" type="select" @dataChanged="handleSelectService">
      <option v-for="item in services" :value="item.id">
        {{ item.name }}
      </option>
    </TextInput>
    <div v-if="serviceComments" class="mt-10">
      <DataTable :filter="true" :data="serviceComments" @getData="handleServiceCommentsSearch"
                 :header="CommentsTblHeader">
        <tr v-for="(item, i) in finallyData1" :key="item.id">
          <td style="text-align: left;padding-left: 8px">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.user.first_name }} {{ item.user.last_name }}
          </td>
          <td>
            <div style="max-width: 200px;max-height: 24px;overflow: hidden;">
              {{ item.text }}
            </div>
          </td>
          <td>
            {{ item.replies.length }}
          </td>
          <td>
            <div @click="handleShowServiceCommentDel(item.id)">
              <AdminButton title="delete" type="delete"/>
            </div>
          </td>
        </tr>
      </DataTable>
    </div>
    <!--    article comments-->
    <div class="flex flex-col mt-10">
      <strong class="modal-title-box block mb-6">
        please select article to show comments
      </strong>
      <TextInput title="select article" type="select" @dataChanged="handleSelectArticle">
        <option v-for="item in blogs" :value="item.id">
          {{ item.title }}
        </option>
      </TextInput>
      <div v-if="articleComments" class="mt-10">
        <DataTable @getData="handleArticleCommentsSearch" :filter="true" :data="articleComments"
                   :header="CommentsTblHeader">
          <tr v-for="(item, i) in finallyData2" :key="item.id">
            <td style="text-align: left;padding-left: 8px">
              {{ (i + 1) }}
            </td>
            <td>
              {{ item.user.first_name }} {{ item.user.last_name }}
            </td>
            <td>
              <div style="max-width: 200px;max-height: 24px;overflow: hidden;">
                {{ item.text }}
              </div>
            </td>
            <td>
              {{ item.replies.length }}
            </td>
            <td>
              <div @click="handleShowArticleCommentDel(item.id)">
                <AdminButton title="delete" type="delete"/>
              </div>
            </td>
          </tr>
        </DataTable>
      </div>
    </div>
    <div class="overlay" :style="showServiceCommentDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="loading" message="are you sure for delete ?" cancel-title="cancel" accept-title="delete"
                    @cancel="showServiceCommentDelete = false" @accept="delComment"/>
    </div>
    <div class="overlay" :style="showArticleCommentDelete ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="loading" message="are you sure for delete ?" cancel-title="cancel" accept-title="delete"
                    @cancel="showArticleCommentDelete = false" @accept="delComment"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import {getAllServices} from "~/services/api/admin/services";
import DataTable from "~/components/helper/DataTable";
import {deleteCommentOfService, getCommentOfArticle, getCommentOfService} from "~/services/api/admin/comments";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getAllBlogs} from "~/services/api/admin/blogs";

export default {
  components: {NotificationCard, DeleteDialog, AdminButton, DataTable, TextInput},
  layout: 'admin',
  data: () => ({
    showServiceCommentDelete: false,
    showArticleCommentDelete: false,
    selectedService: '',
    selectedArticle: '',
    commentId: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    services: [],
    blogs: [],
    serviceComments: null,
    articleComments: null,
    CommentsTblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "author"
      },
      {
        id: 3,
        title: "text"
      },
      {
        id: 4,
        title: "replies count"
      },
      {
        id: 5,
        title: "action"
      }
    ],
    loading: false,
    finallyData1: [],
    finallyData2: [],
  }),
  mounted() {
    getAllServices((data) => {
      this.services = data.services;
    })
    getAllBlogs((data) => {
      this.blogs = data;
    })
  },
  methods: {
    handleSelectService(id) {
      this.selectedService = id;
      getCommentOfService(parseInt(this.selectedService), (data) => {
        this.serviceComments = data.comments
        this.finallyData1 = data.comments
      })
    },
    handleSelectArticle(id) {
      this.selectedArticle = id;
      getCommentOfArticle(parseInt(this.selectedArticle), (data) => {
        this.articleComments = data.comments
        this.finallyData2 = data.comments;
      })
    },
    handleShowServiceCommentDel(id) {
      this.commentId = id;
      this.showServiceCommentDelete = true;
    },
    handleShowArticleCommentDel(id) {
      this.commentId = id;
      this.showArticleCommentDelete = true;
    },
    delComment() {
      this.loading = true;
      deleteCommentOfService(this.commentId, (data) => {
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
          getCommentOfService(parseInt(this.selectedService), (data) => {
            this.serviceComments = data.comments
          })
          getAllBlogs((data) => {
            this.blogs = data;
          })
        }
        this.showServiceCommentDelete = false;
        this.showArticleCommentDelete = false;
        this.loading = false;
      })
    },
    handleServiceCommentsSearch(data) {
      this.finallyData1 = data;
    },
    handleArticleCommentsSearch(data) {
      this.finallyData2 = data;
    }
  }

}
</script>

<style scoped>

</style>
