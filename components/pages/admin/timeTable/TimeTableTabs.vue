<template>
  <div class="flex items-center w-max tt-tabs">
    <div @click="handleClick(1)" :class="selected === 1 ? 'tt-tabs-active' : ''">
      <img width="18" height="18" src="~/assets/images/icons/dateTime.svg" alt="">
    </div>
    <div @click="handleClick(2)" :class="selected === 2 ? 'tt-tabs-active' : ''">
      <img width="18" height="18" src="~/assets/images/icons/orders.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
    }
  },
  methods: {
    handleClick(id) {
      this.selected = id;
      this.$emit('tabChanged', id)
    }
  }
}
</script>

<style scoped lang="scss">
.tt-tabs {
  background: white;
  border-radius: 12px;
  width: max-content;
  max-width: max-content;

  div {
    padding: 8px;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    &:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  &-active {
    background: #CCCCCC;
  }
}
</style>
