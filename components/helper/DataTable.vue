<template>
  <div class="table-container">
    <!--    <input type="text" name="" id="" v-if="filter">-->
    <div v-if="filter" class="flex md:flex-row flex-col items-center justify-between mb-10 relative">
      <TextInput :read-only="searchStatus" title="search" type="text" class="" @dataChanged="(data) => {search = data}"
                 :data="search"/>
      <div class="flex items-center md:mt-0 mt-4">
        <div class=" md:w-max md:ml-4" @click="handleSearch">
          <AdminButton title="search" :disable="searchStatus"/>
        </div>
        <div class=" md:w-max ml-2" @click="resetHandler">
          <AdminButton title="reset"/>
        </div>
      </div>
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="item in header" :key="item.id">
          {{ item.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";

export default {
  components: {AdminButton, TextInput},
  props: ['header', 'filter', 'data'],
  name: 'DataTable',
  data: () => ({
    search: "",
    searchedData: [],
    finallyData: [],
    searchStatus: false,
  }),
  methods: {
    getData(data) {
      this.$emit('getData', data)
    },
    handleSearch() {
      this.searchStatus = true;
      this.getData(this.searchFunc())
    },
    searchFunc() {
      this.data.map((item) => {
        Object.keys(item).forEach(el => {
          if (typeof item[el] === 'string' || typeof item[el] === 'number') {
            if (item[el].toString().trim().toLowerCase() === this.search.toString().trim().toLowerCase()) {
              if (!this.finallyData.includes(item)) {
                this.finallyData.push(item)
              }
            }
          } else if (typeof item[el] === 'object') {
            console.log(item[el])
            let nestedObject = item[el]
            Object.keys(nestedObject).forEach(objectEl => {
              console.log(nestedObject[objectEl])
              if (nestedObject[objectEl] !== null) {
                if (nestedObject[objectEl].toString().trim().toLowerCase() === this.search.toString().trim().toLowerCase()) {
                  if (!this.finallyData.includes(item)) {
                    this.finallyData.push(item)
                  }
                }
              }
            })
          }
        })
      })
      this.searchedData = this.finallyData
      return this.searchedData
    },
    resetHandler() {
      this.searchStatus = false;
      this.search = ""
      this.finallyData = []
      this.searchedData = this.data
      this.getData(this.searchedData)
    }
  }
}
</script>

<style scoped lang="scss">
.table-container {
  background: #E0D5F2;
  padding: 32px;
  border-radius: 50px;
  overflow-x: auto;
  scrollbar-color: #9A77FF #CBC0DD;
  scrollbar-width: thin;
  max-height: 400px;
  overflow: auto;

  table {
    width: 100%;
    min-width: max-content;
  }

  thead {
    width: 100%;
    border-bottom: 1px solid #797584;
    padding-right: 32px;

    tr {
      width: 100%;
    }

    th {
      padding: 16px;
      padding-right: 32px;
      color: #797584;
      min-width: max-content;

      &:first-child {
        padding-left: 0;
        text-align: left;
      }

      &:last-child {
        //padding-right: 0;
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #C2BECD;
      margin-bottom: 16px;
      width: 100%;

      td {
        padding: 26px;
        text-align: center;

        &:first-child {
          padding-left: 0;
        }
      }

      &:last-child {
        border-bottom: unset;
        margin-bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .table-container {
    padding: 16px;
    border-radius: 12px;
  }
}
</style>
<style lang="scss">
.table-container {
  .input-container {
    input {
      background: #E0D5F2 !important;
    }
  }

  .input-container-title {
    background: #E0D5F2 !important;
  }
}
</style>
