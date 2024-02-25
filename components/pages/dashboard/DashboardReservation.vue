<template>
  <div class="table-container">
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
export default {
  props: ['header']
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
        padding: 26px 0;
        text-align: center;
      }

      &:last-child {
        border-bottom: unset;
        margin-bottom: 0;
      }
    }
  }
}
</style>
