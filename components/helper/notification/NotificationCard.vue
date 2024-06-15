<template>
  <div class="notific"
       ref="container"
       :class="active ? 'notific-active' : 'notific-disable'"
       :style="
       type === 'success' ?
       {borderColor: '#6FCF97', boxShadow: '0px 0px 8px 0px #6FCF97'} :type === 'error' ?
       {borderColor: '#EB5757', boxShadow: '0px 0px 8px 0px #EB5757'} :type === 'warning' ?
       {borderColor: '#F2C94C', boxShadow: '0px 0px 8px 0px #F2C94C'} :
       {borderColor: '#2196F3', boxShadow: '0px 0px 8px 0px #2196F3'}"
  >
    <div class="notific-inner">
      <div class="type-icon-container">
        <img loading="lazy"   class="type-icon"   src="./icons/error.svg" alt="" v-if="type === 'error'" />
        <img loading="lazy"   class="type-icon"   src="./icons/warning.svg" alt="" v-if="type === 'warning'" />
        <img loading="lazy"   class="type-icon"   src="./icons/success.svg" alt="" v-if="type === 'success'" />
        <img loading="lazy"   class="type-icon"   src="./icons/info.svg" alt="" v-if="type === 'info'" />
      </div>
      <div class="notific-text-box">
        <div class="notific-title-box">
          <span class="notific-title">
            {{ title }}
            <div @click="$emit('close')" class="close-icon">
              <img loading="lazy"     src="./icons/close.svg" alt="" />
            </div>
          </span>
        </div>
        <p class="notific-text">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'title', 'message', 'active'],
  mounted() {
    // const el = this.$refs["container"]
    // el.style.display = 'none';
    // setTimeout(() => {
    //   el.style.display = 'block';
    // }, 1000)
  }
}
</script>

<style lang="scss" scoped>
$color_1: #4D4D4D;

.notific {
  direction: ltr;
  position: fixed;
  bottom: 32px;
  right: -100vw;
  z-index: 1001;
  border-radius: 8px;
  padding: 16px 8px;
  min-width: 150px;
  width: 400px;
  background: white;
  border: 1px solid black;
  transition: all .3s;
}
.notific-inner {
  display: flex;
  align-items: start;
  gap: 16px;
}
.notific-text-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.notific-title-box {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
}
.notific-title {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.notific-text {
  color: $color_1;
  font-size: 14px;
  font-weight: 400;
}
.notific-active {
  right: 32px;
}
.notific-disable {
  right: -100vw;
}
.type-icon-container {
  display: flex;
  align-self: center;
}
.type-icon {
  width: 48px;
  height: 48px;
}
.close-icon {
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .notific {
    width: unset;
    max-width: 300px;
  }
}

</style>
