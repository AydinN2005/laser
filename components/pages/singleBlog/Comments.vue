<template>
  <div class="c-container comments">
    <div class="flex flex-col">
      <div class="title-box">
        <span></span>
        customers comments
      </div>
      <h2 class="comments-title">
        Your satisfaction is our best asset
      </h2>
      <div class="grid grid-cols-12 gap-5 comments-inputs mb-10">
        <div class="col-start-1 lg:col-end-4 md:col-end-7 col-end-13">
          <TextInput type="text" place-holder="your name"/>
        </div>
        <div class="lg:col-start-4 col-start-1 md:col-start-7 lg:col-end-7 col-end-13">
          <TextInput type="email" place-holder="your email"/>
        </div>
        <div class="lg:col-start-7 col-start-1 col-end-13 relative">
          <TextInput type="text" place-holder="your message" class="md:block hidden"/>
          <TextInput type="desc" place-holder="your message" class="md:hidden comments-desc-text"/>
          <button class="comments-send-box">
            <img src="~/assets/images/icons/send.svg" alt="">
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <CommentBox v-for="item in 4" :key="item"/>
      </div>
      <div class="flex w-full justify-center mt-12">
        <Pagination :count="4"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import CommentBox from "~/components/pages/singleBlog/CommentBox";
import Pagination from "~/components/elements/Pagination";

export default {
  components: {Pagination, CommentBox, TextInput}
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
    top: 4px;
    right: 4px;
    cursor: pointer;

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
  .comments{
    &-send-box{
      bottom: 12px;
      right: 12px;
      top: unset;
      padding: 10px;
      img{
        width: 12px;
        height: 12px;
      }
    }
    &-title{
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
