=
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
        <div class="mb-12 flex md:flex-row flex-col md:items-center">
          <TextInput type="date" title="start date" bg="white" @dataChanged="handleSetStart"/>
          <TextInput class="md:mt-0 mt-6 md:ml-4" type="date" title="end date" bg="white" @dataChanged="handleSetEnd"/>
        </div>
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
import BigLoader from "~/components/pages/admin/helper/BigLoader";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import TextInput from "~/components/elements/TextInput";

export default {
  components: {TextInput, BigLoader, AdminButton, 'v-select': vSelect},
  props: ['services'],
  ssr: false,
  data() {
    return {
      selectedValues: [],
      options: [],
      loading: false,
      date: {
        start: '',
        end: ""
      }
    }
  },
  mounted() {
    this.fillOptions()
  },
  methods: {
    handleSetStart(data) {
      this.date.start = new Date(data)
    },
    handleSetEnd(data) {
      this.date.end = new Date(data)
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
    handleSearch() {
      this.$emit('filtered', {date: this.date, services: this.selectedValues})
    },
    handleReset() {
      this.selectedValues = [];
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

<style scoped>

</style>
