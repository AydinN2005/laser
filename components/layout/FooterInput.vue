<template>
  <div class="relative input-container">
    <span class="text-base font-bold" :style="focusStatus ? {background: 'white', color: 'var(--primary-purple)'}: {}">
      {{ title }}
    </span>
    <input v-model="text" v-if="type !== 'select' && type !== 'date'" type="text" :placeholder="placeHolder" class=""
           @focusin="focusStatus = true"
           @focusout="focusStatus = false" :style="type === 'email' ? {textTransform: 'none'} : {}">
    <select v-model="select" v-if="type === 'select'" name="" id="" @focusin="focusStatus = true"
            @focusout="focusStatus = false">
      <option v-for="item in options" :key="item.id" :value="item.title">
        {{ item.title }}
      </option>
    </select>
    <div v-if="type === 'select'" class="select-arrow absolute"
         :style="focusStatus ? {transform: 'rotate(180deg)'} : {}">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
        <path d="M2 2L7.08579 7.08579C7.86683 7.86683 9.13317 7.86683 9.91421 7.08579L15 2"
              :stroke="focusStatus ? '#fff' : '#A29FAB'"
              stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
    <input v-model="date" type="date" name="" id="" v-if="type === 'date'">
  </div>
</template>

<script>
export default {
  props: ['title', 'placeHolder', 'type', 'options'],
  data: () => ({
    focusStatus: false,
    text: '',
    select: '',
    date: '',
  }),
  watch: {
    date() {
      this.$emit('dateChanged', this.date)
    }
  }
}
</script>

<style scoped lang="scss">
.input-container {
  width: 100%;

  input, select {
    border: 1px solid white;
    border-radius: 50px;
    padding: 21px 32px 12px 32px;
    color: white;
    background: unset;
    width: 100%;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
      background: var(--primary-purple);

    }
  }

  span {
    position: absolute;
    padding: 2px 8px;
    border-radius: 6px;
    top: -16px;
    left: 24px;
    background: #656D79;
    color: white;
  }

  .select-arrow {
    top: 26px;
    right: 24px;
  }

  &:hover {
    span {
      background: white;
      color: var(--primary-purple);
    }

    input, select {
      background: var(--primary-purple);
    }

    .select-arrow {
      path {
        stroke: white;
      }
    }
  }

  select {
    /* for Firefox */
    -moz-appearance: none;
    /* for Safari, Chrome, Opera */
    -webkit-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }


}
</style>
