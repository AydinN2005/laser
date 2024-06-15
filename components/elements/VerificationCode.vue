<template>
  <div class="input-container flex items-center">
    <input name='code' class='code-input' required/>
    <input name='code' class='code-input' required/>
    <input name='code' class='code-input' required/>
    <input name='code' class='code-input' required/>
    <input name='code' class='code-input' required/>
  </div>
</template>

<script>
export default {
  props: ['getStatus'],
  mounted() {
    const inputElements = [...document.querySelectorAll('input.code-input')]

    inputElements.forEach((ele, index) => {
      ele.addEventListener('keydown', (e) => {
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
      })
      ele.addEventListener('input', (e) => {
        // take the first character of the input
        // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
        // but I'm willing to overlook insane security code practices.
        const [first, ...rest] = e.target.value
        e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index === inputElements.length - 1
        const didInsertContent = first !== undefined
        if (didInsertContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index + 1].focus()
          inputElements[index + 1].value = rest.join('')
          inputElements[index + 1].dispatchEvent(new Event('input'))
        }
      })
    })


// mini example on how to pull the data on submit of the form
    function onSubmit(e) {
      e.preventDefault()
      const code = inputElements.map(({value}) => value).join('')
    }
  },
  methods: {
    exportData() {
      const inputElements = [...document.querySelectorAll('input.code-input')]
      const code = inputElements.map(({value}) => value).join('')
      this.$emit('changed', code)
    }
  },
  watch: {
    getStatus() {
      this.exportData()
    }
  }
}
</script>

<style scoped lang="scss">
.input-container {
  width: 48px;
  height: 48px;

  input {
    border-radius: 50%;
    border: 1px solid #AAAAAA;
    padding: 16px;
    width: 48px;
    height: 48px;
    background: white;
    font-size: 14px;
    text-transform: none;
    margin-right: 24px;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }

    &:focus {
      outline: none;
      border-color: var(--input-border);
      box-shadow: -3px 3px 0px 0px #303030;
    }
  }
}

@media screen and (max-width: 767px) {
  .input-container {
    width: 40px;
    height: 40px;

    input {
      width: 40px;
      height: 40px;
      padding: 0px;
    }
  }
}
</style>
