<template>
  <div class="c-container comments">
    <div class="flex flex-col">
      <div class="title-box">
        <span></span>
        customers comments
      </div>
      <div class="flex items-center justify-between">
        <h2 class="comments-title">
          Your satisfaction is our best asset
        </h2>

      </div>
      <div class="grid grid-cols-12 gap-5 comments-inputs mb-10">
        <div class="col-start-1 lg:col-end-4 md:col-end-7 col-end-13">
          <TextInput type="text" place-holder="your name"/>
        </div>
        <div class="lg:col-start-4 col-start-1 md:col-start-7 lg:col-end-7 col-end-13">
          <TextInput type="email" place-holder="your email"/>
        </div>
        <div class="lg:col-start-7 col-start-1 col-end-13 relative">
          <TextInput :data="commentMessage" @dataChanged="(data) => { commentMessage = data}" type="text"
                     place-holder="your message"
                     class="md:block hidden"/>
          <TextInput :data="commentMessage" @dataChanged="(data) => { commentMessage = data}" type="desc"
                     place-holder="your message"
                     class="md:hidden comments-desc-text"/>
          <button class="comments-send-box" @click="sendComment">
            <img v-if="!addLoading" loading="lazy" src="~/assets/images/icons/send.svg" alt=""/>
            <Loader width="16" height="16" color="white" v-if="addLoading"/>
          </button>
        </div>
      </div>
      <div v-if="!mainLoading" class="grid grid-cols-1 gap-8">
        <CommentBox :services="services" v-for="item in comments" :id="item.id"
                    :username="`${item.user.first_name} ${item.user.last_name}`"
                    :replies="item.replies" :text="item.text" :key="item"/>
      </div>
      <BigLoader v-if="mainLoading"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :type="notif.type"
                      :message="notif.message"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import CommentBox from "~/components/pages/singleBlog/CommentBox";
import Pagination from "~/components/elements/Pagination";
import {addArticleComment, addComment, getCommentOfArticle, getCommentOfService} from "~/services/api/admin/comments";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import Loader from "~/components/elements/Loader";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, Loader, NotificationCard, Pagination, CommentBox, TextInput},
  props: ['id', 'services'],
  data: () => ({
    commentMessage: '',
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    comments: [],
    addLoading: false,
    mainLoading: false,
  }),
  mounted() {
    if (this.services) {
      this.getComments()
    } else {
      this.getCommentOfBlog();
    }
  },
  methods: {
    sendComment() {
      if (this.services) {
        this.addLoading = true;
        addComment({text: this.commentMessage, serviceId: parseInt(this.id)}, (data) => {
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
          }
          this.addLoading = false;
          this.commentMessage = ''
        })
      } else {
        this.addLoading = true;
        addArticleComment({text: this.commentMessage, id: parseInt(this.id)}, (data) => {
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
          }
          this.addLoading = false;
          this.commentMessage = ''
        })
      }
    },
    getComments() {
      this.mainLoading = true;
      getCommentOfService(this.id, (data) => {
        this.comments = data.comments
        this.mainLoading = false;
      })
    },
    getCommentOfBlog() {
      this.mainLoading = true;
      getCommentOfArticle(this.id, (data) => {
        this.comments = data.comments;
        this.mainLoading = false;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.comments {
  &-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 36px;
  }

  &-send-box {
    padding: 14px;
    border-radius: 50%;
    background: #787878;
    position: absolute;
    top: 3px;
    right: 4px;
    cursor: pointer;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--primary-purple);
    }

    &:focus {
      outline: none;
      background: var(--primary-purple);
    }
  }
}

@media screen and (max-width: 767px) {
  .comments {
    &-send-box {
      bottom: 12px;
      right: 12px;
      top: unset;
      padding: 10px;

      img {
        width: 12px;
        height: 12px;
      }
    }

    &-title {
      font-size: 24px;
    }
  }
}
</style>
<style lang="scss">
.comments {
  &-inputs {
    .input-container {
      input {
        padding: 16px;
        border-color: #787878;

        &:focus {
          border-color: var(--input-border);
        }
      }

      &:hover {
        input {
          border-color: var(--input-border);
        }
      }
    }
  }

  &-desc-text {
    textarea {
      border-radius: 24px !important;
      padding: 16px !important;
      height: 125px !important;
    }
  }
}
</style>
