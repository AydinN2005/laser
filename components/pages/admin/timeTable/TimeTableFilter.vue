<template>
  <div class="flex items-center w-full justify-between">
    <div class="flex items-center">
      <TimeTableTabs @tabChanged="handleChangeTab"/>
      <div @click="handleShowFilter" class="filter-box ml-4 flex items-center">
        <img src="~/assets/images/icons/filter.svg" width="18" height="18" class="mr-3" alt="">
        <span>
        filter
      </span>
      </div>
    </div>
    <button class="export-btn" @click="showExport = true">
      export
    </button>
    <div class="overlay" :style="showFilter1 ? {zIndex: 999,opacity: 1} : {zIndex: -3, opacity: 0}">
      <client-only>
        <FilterServices @reset="handleReset" :services="data" @close="showFilter1 = false"
                        @servicesSelected="(data) => {showFilter1 = false;$emit('serviceSelected', data)}"/>
      </client-only>
    </div>
    <div class="overlay" @reset="handleReset"
         :style="showFilter2 ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <FilterServiceAndTime @reset="handleReset" @filtered="(data) => {showFilter2 = false;$emit('filtered',data)}"
                            :services="data"
                            @close="showFilter2 = false"/>
    </div>
    <div class="overlay" :style="showExport ? {zIndex: 999,opacity: 1} : {zIndex: -3, opacity: 0}">
      <ExportModal :data="data" @close="showExport = false;"/>
    </div>
  </div>
</template>

<script>
import TimeTableTabs from './TimeTableTabs'
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import FilterServices from "~/components/pages/admin/timeTable/FilterServices";
import FilterServiceAndTime from "~/components/pages/admin/timeTable/FilterServiceAndTime";
import ExportModal from "~/components/pages/admin/timeTable/ExportModal";

export default {
  components: {ExportModal, FilterServiceAndTime, FilterServices, AdminButton, TimeTableTabs},
  props: ['data'],
  data() {
    return {
      showFilter1: false,
      showFilter2: false,
      showExport: false,
      tabId: 1,
    }
  },
  methods: {
    handleShowFilter() {
      if (this.tabId === 1) {
        this.showFilter1 = true;
      } else {
        this.showFilter2 = true;
      }
    },
    handleChangeTab(tabId) {
      this.tabId = tabId;
      this.$emit('tabChanged', tabId)
    },
    handleReset() {
      this.showFilter1 = false;
      this.showFilter2 = false;
      this.$emit('reset')
    }
  }
}
</script>

<style scoped lang="scss">
.filter-box {
  background: white;
  border-radius: 8px;
  padding: 6px 24px;
  cursor: pointer;
  max-width: max-content;

  span {
    font-size: 14px;
  }

  &:hover {
    span {
      color: var(--primary-purple);
    }
  }
}

.export-btn {
  padding: 6px 24px;
  background: var(--gray-bg);
  color: white;
  font-size: 12px;
  border-radius: 12px;
  border: 1px solid var(--gray-bg);

  &:hover {
    background: white;
    color: var(--gray-bg);
  }
}
</style>
