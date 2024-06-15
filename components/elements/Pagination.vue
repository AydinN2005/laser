<template>
  <div class="flex items-center">
    <span v-for="item in totalPages" :key="item"
          class="page flex items-center justify-center text-2xl font-bold black-text"
          :class="nowPage === item ? 'active-page' : ''"
          @click="paginatedItems(item)"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'itemPerPage', 'fetchedData'],
  data: () => ({
    nowPage: 1,
    items: 0,
    data: [],
    totalPages: null,
  }),
  mounted() {
    this.nowPage = this.currentPage;
    this.items = this.itemPerPage
    this.totalPages = Math.ceil(this.fetchedData.length / this.items);
    this.paginatedItems(1)
  },
  methods: {
    paginatedItems(id) {
      this.nowPage = id;
      const startIndex = (this.nowPage - 1) * this.items;
      const endIndex = startIndex + this.items;
      // return this.items.slice(startIndex, endIndex);
      this.$emit('paginatedData', this.fetchedData.slice(startIndex, endIndex))
    },
  },
  watch: {
    currentPage() {
      this.nowPage = this.currentPage
    },
    itemPerPage() {
      this.items = this.itemPerPage
    }
  }
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

.active-page {
  background: var(--primary-purple);
  filter: drop-shadow(-2px 2px 0px #303030);
  color: white;
}
</style>
