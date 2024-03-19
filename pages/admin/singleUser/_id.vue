<template>
  <div class="flex flex-col items-end">
    <div class="grid grid-cols-3 gap-x-5 gap-y-10 w-full">
      <TextInput data="aydin" :icon="false" :title="'first name'" :type="'text'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput data="noroozi" :icon="false" :title="'last name'" :type="'text'" ::required="true"
                 :readOnly="!changeMode"/>
      <TextInput data="09036370468" :icon="false" :title="'phone number'" :type="'text'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput data="aydinnoroozi.k@gmail.com" :icon="false" :title="'email'" :type="'email'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput data="aydin1384" :icon="false" :title="'password'" :type="'password'" :required="true"
                 :readOnly="!changeMode"/>
      <TextInput data="iran" :icon="false" :title="'location'" :type="'text'" :required="true"
                 :readOnly="!changeMode"/>
      <div class="col-start-1 col-end-4">
        <TextInput data="iran, tabriz" :icon="false" :title="'address'" :type="'text'" :required="true"
                   :readOnly="!changeMode"/>
      </div>
    </div>
    <div class="flex items-center mt-10">
      <AdminButton title="delete user" type="delete" class="mr-4"/>
      <AdminButton title="edit user"/>
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";

export default {
  components: {AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    changeMode: true,
  })
}
</script>

<style scoped>

</style>
