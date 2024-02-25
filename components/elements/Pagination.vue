<template>
  <div class="flex items-center">
    <span v-for="item in count" :key="item" class="page flex items-center justify-center text-2xl font-bold black-text">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['count']
}
</script>

<style scoped lang="scss">
.page {
  width: 60px;
  height: 60px;
  border: 2px solid var(--input-border);
  border-radius: 50%;
  margin-right: 28px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: var(--primary-purple);
    filter: drop-shadow(-2px 2px 0px #303030);
    color: white;
  }
}
</style>
