<template>
  <div class="modal-box c-height justify-between flex flex-col">
    <div class="w-full flex items-center justify-between">
      <strong class="modal-box-title">
        filter services
      </strong>
      <div @click="$emit('close')">
        <img src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" alt="">
      </div>
    </div>
    <div v-if="!loading" class="flex flex-col">
      <div class="mt-10 mb-10">
        <client-only>
          <v-select
            label="name"
            v-model="selectedValues"
            :options="options"
            multiple
            :searchable="true"
            placeholder="type here for search ..."
            @input="handleSelection"
          ></v-select>
        </client-only>
      </div>
      <div class="flex items-center flex-wrap mb-12">
        <strong class="text-lg font-bold mr-4">
          selected services :
        </strong>
        <div class="flex items-center flex-wrap">
        <span v-for="item in selectedValues" :key="item.id" class="selected-services-span">
          {{ item.name }}
        </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <BigLoader v-if="loading"/>
    </div>
    <div class="flex items-center justify-end">
      <AdminButton title="search" @clicked="handleSearch" class="mr-4"/>
      <AdminButton title="reset" @clicked="handleReset"/>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader, AdminButton, 'v-select': vSelect,},
  props: ['services'],
  mounted() {
    this.fillOptions()
  },
  ssr: false,
  data() {
    return {
      selectedValues: [],
      options: [],
      loading: false,
    }
  },
  methods: {
    handleSelection() {
      console.log(this.selectedValues)
    },
    handleSearch() {
      this.$emit('servicesSelected', this.selectedValues)
    },
    fillOptions() {
      this.loading = true;
      this.services.map(item => {
        this.options.push({
          id: item.id,
          name: item.title
        })
      })
      this.loading = false;
    },
    handleReset() {
      this.selectedValues = null;
      this.$emit('reset')
    }
  },
  watch: {
    services: {
      handler() {
        this.fillOptions()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.vs__dropdown-toggle {
  padding: 16px 32px 12px 32px;
  border-radius: 40px;
  border: 1px solid var(--input-border);
}
.vs--open{
  border-top-right-radius: 50px !important;
  border-top-left-radius: 50px !important;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.vs__search {
  font-size: 14px !important;
  color: var(--text-color);
}

.c-height {
  min-height: 70%;
  //max-width: 70% !important;
}

.selected-services-span {
  padding: 8px;
  border-radius: 8px;
  color: white;
  background: var(--primary-red);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
}

@media screen and (max-width: 767px) {
  .c-height {
    //max-width: 95% !important;
    //width: 95%;
  }
}
</style>
