<template>
  <div class="input-container relative">
    <span class="text-base font-bold flex items-center">
      {{ title }}
      <strong v-if="required" class="text-base font-bold" style="color: red;margin-left: 4px">
        *
      </strong>
    </span>
    <input v-if="type !== 'select' && type !== 'desc'" :type="type" name="" id="" :placeholder="placeHolder">
    <select @focusin="arrowStatus = true" @change="arrowStatus = false" @focusout="arrowStatus = false"
            v-if="type === 'select'" name="" id="">
      <option v-for="item in options" :key="item.id" :value="item.title">
        {{ item.title }}
      </option>
    </select>
    <textarea :placeholder="placeHolder" v-if="type === 'desc'" class="w-full"/>
    <div v-if="type === 'select'" class="select-arrow absolute"
         :style="arrowStatus ? {transform: 'rotate(180deg)'} : {}">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path d="M1 1L5.58579 5.58579C6.36683 6.36683 7.63316 6.36684 8.41421 5.58579L13 1" stroke="#303030"
              stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'placeHolder', 'type', 'options', 'required'],
  data: () => ({
    arrowStatus: false
  })
}
</script>

<style scoped lang="scss">
.input-container {
  input, select, textarea {
    border-radius: 50px;
    border: 1px solid var(--input-border);
    padding: 21px 32px 12px 32px;
    background: var(--primary-bg);

    &:focus {
      outline: none;
      box-shadow: -3px 3px 0px 0px #303030;
    }
  }

  span {
    background: var(--primary-bg);
    padding: 2px 8px;
    color: var(--input-border);
    position: absolute;
    top: -12px;
    left: 28px;
  }

  select {
    /* for Firefox */
    -moz-appearance: none;
    /* for Safari, Chrome, Opera */
    -webkit-appearance: none;
    width: 100%;
  }

  select::-ms-expand {
    display: none;
  }

  &:hover {
    input, select, textarea {
      box-shadow: -3px 3px 0px 0px #303030;
    }
  }

  .select-arrow {
    top: 26px;
    right: 24px;
  }

  textarea {
    resize: none;
    height: 160px;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: var(--input-border) var(--box-bg);

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--input-border);
      outline: 1px solid slategrey;
    }
  }
}
</style>
