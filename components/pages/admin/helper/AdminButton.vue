<template>
  <div>
    <button v-if="type !== 'delete'" class="a-button" @click="$emit('clicked')">
      {{ title }}
    </button>
    <button v-if="type === 'delete'" class="a-button-delete" @click="$emit('clicked')">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['title', 'type']
}
</script>

<style scoped lang="scss">
.a-button {
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 32px;
  background: var(--gray-bg);
  color: white;
  border: 1px solid var(--gray-bg);

  &:hover {
    background: white;
    color: var(--primary-purple);
  }

  &-delete {
    background: var(--primary-red);
    padding: 16px 32px;
    font-size: 16px;
    border-radius: 32px;
    color: white;
    border: 1px solid var(--primary-red);

    &:hover {
      background: white;
      color: var(--primary-red);
    }
  }
}
</style>
