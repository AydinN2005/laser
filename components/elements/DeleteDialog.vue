<template>
  <div class="dialog flex flex-col items-center">
    <img loading="lazy" src="~/assets/images/img/info.svg" alt=""/>
    <p class="text-center text-base md:text-xl font-bold mt-6 mb-8">
      <!--      Note that to cancel your reservation time, you must pay a third of your reservation amount,-->
      <!--      which is $20 dollars-->
      {{ message }}
    </p>
    <div class="flex items-center justify-center md:w-max w-full">
      <button class="btn cancel-btn md:w-max w-full" @click="cancelEdit">
        {{ cancelTitle }}
      </button>
      <button class="btn accept-btn ml-3 md:ml-6 md:w-max w-full" @click="acceptEdit">
        <Loader width="16" height="16" color="white" v-if="loading"/>
        {{ !loading ? acceptTitle : '' }}
      </button>
    </div>
  </div>
</template>

<script>
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader},
  props: ['message', 'cancelTitle', 'acceptTitle', 'loading'],
  methods: {
    cancelEdit() {
      this.$emit('cancel')
    },
    acceptEdit() {
      this.$emit('accept')
    }
  }
}
</script>

<style scoped lang="scss">
.dialog {
  background: white;
  border-radius: 64px;
  padding: 40px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  width: 70%;
  height: max-content;

  .btn {
    padding: 12px 32px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }

    color: white;
    font-size: 16px;

    &
    :hover {
      background: var(--gray-bg) !important;
    }

  }

  .cancel-btn {
    background: #FA5D75;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  }

  .accept-btn {
    background: #3E74FF;
    box-shadow: 2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset,
    -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
    0px 8px 12px 0px rgba(58, 113, 255, 0.24);
  }
}

@media screen and (max-width: 767px) {
  .dialog {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 32px 16px;
    width: 100%;

    button {
      font-size: 13px !important;
    }
  }
}
</style>
