<template>
  <div class="modal-box">
    <div class="flex items-center justify-between">
      <strong class="modal-box-title">
        latest offer for you :)
      </strong>
      <div class="cursor-pointer" @click="$emit('close')">
        <img loading="lazy"     src="~/assets/images/icons/close-icon.svg" alt="" />
      </div>
    </div>
    <div class="mt-10 flex flex-col items-center">
      <img loading="lazy"   :src="`${baseUrl}/${offer}`" class="w-full offer-img" alt="" />
      <div class="self-end mt-6" @click="$emit('close')">
        <AdminButton title="i got it"/>
      </div>
    </div>
  </div>
</template>

<script>
import {baseUrl} from "~/services/baseUrl";
import AdminButton from "~/components/pages/admin/helper/AdminButton";

export default {
  components: {AdminButton},
  props: ['offer'],
  data: () => ({
    baseUrl
  })
}
</script>

<style scoped lang="scss">
.offer-img {
  max-width: 1200px;
  max-height: 675px;
  border-radius: 56px;
}
</style>
