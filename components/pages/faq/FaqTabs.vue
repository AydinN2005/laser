<template>
  <div class="flex items-center tabs">
    <span v-for="item in data" :key="item.id" class="tabs-tab text-xs md:text-base font-bold"
          @click="handleChangeTab(item.id)"
          :class="activeTab === item.id ? 'tabs-active': ''"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    activeTab: 1
  }),
  methods: {
    handleChangeTab(id) {
      this.activeTab = id;
      this.$emit('changed', id)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  padding: 4px;
  border-radius: 50px;
  background: #DDC9FF;

  &-tab {
    padding: 12px 24px;
    border-radius: 100px;
    cursor: pointer;
    margin-right: 16px;
    width: max-content;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: white;
      background: var(--primary-purple);
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }
  }

  &-active {
    color: white;
    background: var(--primary-purple);
    box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
  }
}

@media screen and (max-width: 767px) {
  .tabs {
    &-tab {
      padding: 12px 20px;
      font-size: 12px;
    }
  }
}
</style>
