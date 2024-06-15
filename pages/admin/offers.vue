<template>
  <div class="flex flex-col">
    <strong class="modal-box-title block">
      add image for offer
    </strong>
    <p style="font-size: 14px;margin-top: 16px;margin-bottom: 24px;color: var(--gray-text)">
      Please choose a photo with a size of 1200 * 675 pixels
    </p>
    <div class="flex md:flex-row flex-col md:items-center items-start">
      <TextInput title="select image" type="file" @dataChanged="(data) => {offer = data;}"/>
      <div @click="addHandler" class="md:mt-0 mt-4 self-end md:ml-3">
        <AdminButton :loading="loadingTwo" title="add"/>
      </div>
    </div>
    <div class="mt-16 flex flex-col">
      <strong class="modal-box-title">
        offer
      </strong>
      <div v-if="!loadingOne"
           class="flex w-full justify-between mt-6 md:flex-row flex-col md:items-center items-start">
        <img loading="lazy" v-if="offerImage !== null"
             style="width: 200px;height: 200px;border-radius: 24px"
             class="offer-img"
             :src="`${baseUrl}/${offerImage}`" alt=""/>
        <span v-else>
          not offer yet
        </span>
        <div @click="showDel = true" class="md:mt-0 mt-4 self-end md:ml-3">
          <AdminButton title="delete" type="delete"/>
        </div>
      </div>
      <div v-if="loadingOne" class="mt-6">
        <Loader width="64" height="64" color="black"/>
      </div>
    </div>
    <div class="overlay" :style="showDel ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <DeleteDialog :loading="loadingThree" @cancel="showDel = false" @accept="handleDel" cancel-title="cancel"
                    accept-title="delete"
                    message="are you sure for delete ?"/>
    </div>
    <NotificationCard @close="notif.active = false" :title="notif.title" :type="notif.type" :message="notif.message"
                      :active="notif.active"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {baseUrl} from "~/services/baseUrl";
import {addOffer, deleteOffer, getOffer} from "~/services/api/admin/offer";
import DeleteDialog from "~/components/elements/DeleteDialog";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getFormData} from "~/components/helper/createFormData";
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader, NotificationCard, DeleteDialog, AdminButton, TextInput},
  layout: 'admin',
  data: () => ({
    offer: null,
    showDel: false,
    baseUrl,
    offerImage: null,
    notif: {
      active: false,
      title: "",
      type: "",
      message: ""
    },
    loadingOne: false,
    loadingTwo: false,
    loadingThree: false,
  }),
  mounted() {
    this.get()
  },
  methods: {
    get() {
      this.loadingOne = true;
      getOffer((data) => {
        if (data.length) {
          this.offerImage = data[0].image
        }
        this.loadingOne = false;
      })
    },
    addHandler() {
      let res = {
        image: this.offer
      }
      const formData = getFormData(res)
      this.loadingTwo = true;
      addOffer(formData, (data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
        }
        this.loadingTwo = false;
      })
    },
    handleDel() {
      this.loadingThree = true;
      deleteOffer((data) => {
        if (data.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = data.message
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = data.message
        }
        this.loadingThree = true;
        this.showDel = false;
      })
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .offer-img {
    width: 100% !important;
  }
}
</style>
