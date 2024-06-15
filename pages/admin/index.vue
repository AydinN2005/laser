<template>
  <div>
    <nuxt-link to="/">
      back to home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  mounted() {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('refresh')) {
        localStorage.setItem('refresh', 'done')
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>

</style>
