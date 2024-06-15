<template>
  <div class="flex items-center">
    <div class="relative">
      <div class="input-container flex items-center justify-center"
           :style="data ? {background: 'var(--primary-purple)', borderColor: 'var(--primary-purple)'} : {}"
           :class="bg === 'white' ? 'white-input' : ''"
      >
        <input v-model="data" type="checkbox" name="" id="" @change="changed">
        <svg width="16" height="16" :style="data? {opacity: 1} : {opacity: 0}" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
             y="0px"
             viewBox="0 0 76.887 55.552" style="enable-background:new 0 0 76.887 55.552;" xml:space="preserve">
                          <g id="Layer_15">
                            <polygon style="fill:#ffffff;" points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557
                              22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541 	"/>
                          </g>
          <g id="Layer_1">
                          </g>
                    </svg>
      </div>
      <!--      <div class="tick-box" >-->


      <!--      </div>-->
    </div>
    <span class="text-base md:text-xl ml-3">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title', 'bg'],
  data: () => ({
    data: false,
  }),
  methods: {
    changed() {
      this.$emit('changed', this.data)
    }
  }
}
</script>

<style scoped lang="scss">
.input-container {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  border: 1px solid var(--input-border);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  cursor: pointer;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 4;
  }

  .tick-box {
    background: var(--primary-purple);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 10px;
    z-index: 2;
  }
}

.white-input {
  background: white;
}
</style>
