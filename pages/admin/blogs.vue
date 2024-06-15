<template>
  <div class="flex flex-col">
    <div @click="showAddBlog = true;">
      <AdminButton title="add blog"/>
    </div>
    <div class="flex flex-col mt-10 w-full">
      <DataTable @getData="handleSearch" :data="blogs" :filter="true" v-if="!loadingMain" :header="blogsHeader">
        <tr v-for="(item, i) in finallyBlogs" :key="item.id">
          <td>
            {{ (i + 1) }}
          </td>
          <td>
            <img loading="lazy" :src="`${baseUrl}/${item.image}`" style="width: 48px;height: 48px;border-radius: 12px;"
                 alt=""/>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <div class="px-6">
              {{ item.writer }}
            </div>
          </td>
          <td>
            {{ item.category?.name }}
          </td>
          <td>
            {{ item.date }}
          </td>
          <td>
            <div style="padding: 0 24px;">
              {{ item.status }}
            </div>
          </td>
          <td>
            <div v-html="item.description" style="padding: 0 24px;max-width: 300px;overflow: hidden;max-height: 24px;">
<!--              {{ item.description }}-->
            </div>
          </td>
          <td>
            <div class="flex items-center px-4">
              <nuxt-link :to="`/admin/singleBlog/${item.id}`">
                <img loading="lazy" src="~/assets/admin/icons/edit.svg" alt=""/>
              </nuxt-link>
              <div class="ml-3 cursor-pointer" @click="handleShowBlogDel(item.id)">
                <img loading="lazy" src="~/assets/admin/icons/delete.svg" alt=""/>
              </div>
            </div>
          </td>
        </tr>
      </DataTable>
      <div class="self-center justify-self-center w-full items-center justify-center" v-if="loadingMain">
        <Loader width="64" height="64" color="black"/>
      </div>
      <div class="flex flex-col mt-16">
        <strong class="modla-box-title">
          select blog for properties
        </strong>
        <TextInput class="mt-6" type="select" title="select blog" @dataChanged="(data) => {selectedBlog = data}">
          <option v-for="item in blogs" :key="item.id" :value="item.id">
            {{ item.title }}
          </option>
        </TextInput>
      </div>
      <BlogsProperty class="mt-6" v-if="selectedBlog !== null" :id="selectedBlog"/>
    </div>
    <div class="overlay" :style="showAddBlog ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <AddBlogsBox @close="showAddBlog = false"/>
    </div>
    <div class="overlay" :style="showBlogDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog @cancel="showBlogDel = false" @accept="delBlog" cancel-title="cancel" accept-title="delete"
                    message="are you sure for delete ?"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import DataTable from "~/components/helper/DataTable";
import AddBlogsBox from "~/components/pages/admin/blogs/AddBlogsBox";
import {deleteBlog, getAllBlogs} from "~/services/api/admin/blogs";
import {baseUrl} from "~/services/baseUrl";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import TextInput from "~/components/elements/TextInput";
import BlogsProperty from "~/components/pages/admin/blogs/BlogsProperty";
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader, BlogsProperty, TextInput, NotificationCard, DeleteDialog, AddBlogsBox, DataTable, AdminButton},
  layout: 'admin',
  data: () => ({
    baseUrl,
    blogsHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 3,
        title: "image"
      },
      {
        id: 2,
        title: "title"
      },
      {
        id: 4,
        title: "writer"
      },
      {
        id: 5,
        title: "category"
      },
      {
        id: 6,
        title: "date"
      },
      {
        id: 7,
        title: "status"
      },
      {
        id: 8,
        title: "description"
      },
      {
        id: 9,
        title: "action"
      }
    ],
    blogs: null,
    finallyBlogs: null,
    showAddBlog: false,
    blogId: '',
    showBlogDel: false,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    selectedBlog: null,
    loadingMain: false,
  }),
  mounted() {
    this.getBlogs()
  },
  methods: {
    getBlogs() {
      this.loadingMain = true;
      getAllBlogs((data) => {
        this.blogs = data;
        this.finallyBlogs = data;
        this.loadingMain = false;
      })
    },
    handleShowBlogDel(id) {
      this.blogId = id;
      this.showBlogDel = true;
    },
    delBlog() {
      deleteBlog(this.blogId, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
          this.showBlogDel = false;
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
          this.showBlogDel = false;
          this.getBlogs()
        }
      })
    },
    handleSearch(data) {
      this.finallyBlogs = data;
    }
  }
}
</script>

<style scoped>

</style>
