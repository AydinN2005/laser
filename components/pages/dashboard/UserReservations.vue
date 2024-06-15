<template>
  <div class="flex flex-col reservations">
    <strong class="modal-box-title block mb-10">
      your reservation
    </strong>
    <DataTable v-if="!loadingOne" :filter="false" :header="tblHeader">
      <tr v-for="(item, i) in reservations">
        <td>
          {{ i + 1 }}
        </td>
        <td>
          {{ item.year }}-{{ item.month }}-{{ item.day }}
        </td>
        <td>
          {{ item.service.name }}
        </td>
        <td>
          {{ item.start }}
        </td>
        <td style="text-align: right;padding-right: 36px;">
          {{ item.end }}
        </td>
      </tr>
    </DataTable>
    <div class="w-full flex items-center justify-center" v-if="loadingOne">
      <Loader width="64" height="64" color="black"/>
    </div>
    <div class="overlay" :style="showDelete ? {opacity: 1, zIndex: 999} : {opacity: 0, zIndex: -100}">
      <DeleteDialog @close="showDelete = false"/>
    </div>
    <div class="flex flex-col mt-16">
      <strong class="modal-box-title block mb-10">
        your consultations
      </strong>
      <DataTable v-if="!loadingTwo" :header="consultationsHeader">
        <tr v-for="(item, i) in consultations" :key="item.id">
          <td style="text-align: left;padding-left: 8px;">
            {{ (i + 1) }}
          </td>
          <td>
            {{ item.year }}-{{ item.month }}-{{ item.day }}
          </td>
          <td>
            {{ item.start_hour }}
          </td>
          <td style="text-align: right;padding-right: 32px;" :style="item.status === 'booked' ? {color: 'green'} : {}">
            {{ item.status }}
          </td>
        </tr>
      </DataTable>
      <div class="w-full flex items-center justify-center" v-if="loadingTwo">
        <Loader width="64" height="64" color="black"/>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserReservations} from "~/services/api/userReservations";
import DeleteDialog from "~/components/elements/DeleteDialog";
import DataTable from "~/components/helper/DataTable";
import {getUserConsultation} from "~/services/api/admin/consultation";
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader, DataTable, DeleteDialog},
  data: () => ({
    tblHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "date"
      },
      {
        id: 4,
        title: "service"
      },
      {
        id: 5,
        title: "start time"
      },
      {
        id: 8,
        title: "end time"
      },
    ],
    consultationsHeader: [
      {
        id: 1,
        title: "row"
      },
      {
        id: 2,
        title: "date"
      },
      {
        id: 3,
        title: "hour"
      },
      {
        id: 4,
        title: "status"
      }
    ],
    showDelete: false,
    reservations: [],
    consultations: [],
    loadingOne: false,
    loadingTwo: false,
  }),
  mounted() {
    this.getReservs()
    this.getConsuls()
  },
  methods: {
    getReservs() {
      this.loadingOne = true;
      getUserReservations((data) => {
        this.reservations = data.reservations
        this.loadingOne = false;
      })
    },
    getConsuls() {
      this.loadingTwo = true;
      getUserConsultation((data) => {
        this.consultations = data.consulations
        this.loadingTwo = false;
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tbl-cancel-btn {
  border: 1px solid #FA5770;
  color: #FA5770;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 100px;

  &:hover {
    background: #FA5770;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
    color: white;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: unset;
      box-shadow: unset;
      color: #FA5770;
    }
  }
}
</style>
