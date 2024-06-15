<template>
  <div class="box flex flex-col p-4 overflow-hidden" ref="container" :style="{height: height}" @click="handleShow">
    <div class="flex flex-col" ref="header">
      <div class="flex items-center">
        <div class="p-4 rounded-2xl bg-white mr-4">
          <img loading="lazy" src="~/assets/images/icons/user.svg" alt=""/>
        </div>
        <div class="flex items-center w-full justify-between">
          <div class="flex flex-col">
            <h3 class="text-2xl font-bold mb-3">
              {{ username }}
            </h3>
            <div class="flex items-center">
              <img loading="lazy" src="~/assets/images/icons/clock.svg" class="mr-2" alt=""/>
              <span class="box-date text-sm">
            12 august 2023
          </span>
            </div>
          </div>
          <span class="reply-btn" v-if="userRole === 'admin'" @click="showReplyBox = true">
          reply
        </span>
        </div>
      </div>
      <p class="mt-5 text-sm font-semibold box-desc">
        {{ text }}
      </p>
    </div>
    <div ref="data" v-if="replies !== []">
      <div v-for="item in replies" :key="item.id" class="flex flex-col">
        <div class="box-divider">
        </div>
        <div class="flex flex-col">
          <div class="box-answer text-sm text-white py-2 px-3 mb-3 w-max">
            support team`s answer
          </div>
          <p class="text-sm">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="overlay" :style="showReplyBox ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <ReplyBox @close="showReplyBox = false" :id="id"/>
    </div>
  </div>
</template>

<script>
import ReplyBox from "~/components/pages/singleService/ReplyBox";

export default {
  components: {ReplyBox},
  props: ['services', 'id', 'username', 'text', 'replies'],
  data: () => ({
    open: false,
    height: '0px',
    userRole: '',
    showReplyBox: false,
  }),
  mounted() {
    this.height = this.$refs.header.offsetHeight + 32 + 'px';
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('user')) {
        const userData = JSON.parse(localStorage.getItem('user_data'))
        this.userRole = userData.role
      }
    }
  },
  methods: {
    handleShow() {
      this.open = !this.open
      if (this.open) {
        this.height = this.$refs.header.offsetHeight + this.$refs.data.offsetHeight + 32 + 'px';
      } else {
        this.height = this.$refs.header.offsetHeight + 32 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  border: 1px solid var(--gray-3);
  border-radius: 36px;
  cursor: pointer;

  &-date, &-desc {
    color: var(--gray-3);
  }

  &-answer {
    border-radius: 10px;
    background: var(--gray-bg);
  }

  &-divider {
    height: 2px;
    width: 100%;
    margin: 24px 0;
    background: linear-gradient(90deg, rgba(61, 57, 72, 0) 0%, rgba(61, 57, 72, 1) 50%, rgba(61, 57, 72, 1) 100%);
  }
}

.reply-btn {
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--gray-bg);
  color: white;
  font-size: 14px;

  &:hover {
    background: var(--primary-purple);
  }
}
</style>
