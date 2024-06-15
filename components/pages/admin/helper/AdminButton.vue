<template>
  <div>
    <button :disabled="loading || disable" :class="loading ? 'no-hover': ''" v-if="type !== 'delete'"
            class="a-button flex items-center justify-center"
            @click="$emit('clicked')"
            :style="disable ? {opacity: 0.5} : {opacity: 1}"
    >
      <Loader :width="16" :height="16" color="white" v-if="loading"/>
      <span v-if="!loading">
        {{ title }}
      </span>
    </button>
    <button :disabled="loading || disable" :class="loading ? 'no-hover': ''" v-if="type === 'delete'"
            class="a-button-delete"
            @click="$emit('clicked')"
            :style="disable ? {opacity: 0.5} : {opacity: 1}"
    >
      <Loader :width="16" :height="16" color="white" v-if="loading"/>
      <span v-if="!loading">
        {{ title }}
      </span>
    </button>
  </div>
</template>

<script>
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader},
  props: ['title', 'type', 'loading', 'disable']
}
</script>

<style scoped lang="scss">
.a-button {
  padding: 8px 32px;
  font-size: 16px;
  border-radius: 32px;
  background: var(--gray-bg);
  color: white;
  border: 1px solid var(--gray-bg);
  min-width: 151px;
  min-height: 42px;

  span {
    color: white;
  }

  &:hover {
    background: white;

    span {
      color: var(--gray-bg);
    }
  }

  &-delete {
    background: var(--primary-red);
    padding: 8px 32px;
    font-size: 16px;
    border-radius: 32px;
    color: white;
    border: 1px solid var(--primary-red);

    span {
      color: white;
    }

    &:hover {
      background: white;

      span {
        color: var(--primary-red);
      }
    }
  }
}

.no-hover {
  pointer-events: none !important;
}
@media screen and (max-width: 767px) {
  .a-button{
    font-size: 14px;
    padding: 8px 24px;
  }
}
</style>
