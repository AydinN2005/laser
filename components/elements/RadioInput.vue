<template>
  <div class="flex items-center radio-container">
    <label :for="id" :style="{color: textColor}">
      {{ title }}
    </label>
    <input :checked="checked" v-model="value" @change="(e) => {$emit('changed', e.target.value)}" :id="id" :name="name"
           :value="value"
           type="radio">
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'value', "title", 'textColor', 'checked'],
  data: () => ({
    value: ""
  })
}
</script>

<style scoped lang="scss">
.radio-container {
  label {
    font-size: 14px;
    margin-right: 8px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}
</style>
