<template>
  <div>
    <vue-editor style="text-transform: initial;" v-model="content" :editorOptions="editorOptions"></vue-editor>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      content: '',
      editorOptions: {
        placeholder: 'Write your content here...',
        modules: {
          toolbar: [
            [{'header': '1'}, {'header': '2'}, {'font': []}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            ['clean']
          ]
        }
      }
    }
  },
  watch: {
    content() {
      this.$emit('dataChanged', this.content)
    },
    data() {
      if(this.data) {
        this.content = this.data;
      }
    }
  }
}
</script>

<style lang="scss">
.ql-editor{
  p{
    text-transform: initial !important;
  }
}
</style>
