<template>
  <button :class="`${base} ${type}`">
    {{ title ? title : null }}
    <svg v-if="title" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M1 9L3.58579 6.41421C4.36684 5.63316 4.36683 4.36683 3.58579 3.58579L1 1" :stroke="stroke"
            stroke-width="2"
            stroke-linecap="round"/>
    </svg>
    <slot v-if="!title"></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'title', 'stroke', 'base']
}
</script>

<style scoped>

</style>
