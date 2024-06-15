<template>
  <div class="modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="modal-box-title">
        export information
      </strong>
      <img src="~/assets/images/icons/close-icon.svg" class="cursor-pointer" @click="$emit('close')" alt="">
    </div>
    <div class="mt-10">
      <div class="flex flex-col">
        <span class="text-lg mb-3 block">
          export
        </span>
        <div class="flex flex-col">
          <div class="flex items-center">
            <input class="mr-3" type="radio" name="today" value="today" v-model="exportStatus" id="today">
            <label for="today">today</label>
          </div>
          <div class="flex items-center">
            <input class="mr-3" type="radio" name="today" value="range" v-model="exportStatus" id="range">
            <label for="range">select range of days</label>
          </div>
        </div>
        <div class="flex md:flex-row flex-col md:items-center mt-6" v-if="showSelectDate">
          <TextInput type="date" title="start date" bg="white" @dataChanged="handleSetStart"/>
          <TextInput class="md:mt-0 mt-6 md:ml-4" type="date" title="end date" bg="white" @dataChanged="handleSetEnd"/>
        </div>
      </div>
      <div class="flex flex-col mt-10">
        <span class="text-sm block mb-6">
          save as
        </span>
        <TextInput type="select" title="choose format" bg="white" @dataChanged="handleSelectFormat">
          <option value="csv">
            csv
          </option>
          <option value="pdf">
            pdf
          </option>
          <option value="exel">
            excel
          </option>
        </TextInput>
      </div>
    </div>
    <div class="flex items-center mt-12 justify-end">
      <AdminButton class="mr-4" title="cancel" type="delete" @clicked="$emit('close')"/>
      <AdminButton title="export" @clicked="handleExport"/>
    </div>
    <NotificationCard :title="notif.title" :type="notif.type" :message="notif.message" :active="notif.active"
                      @close="notif.active = false;"/>
  </div>
</template>

<script>
import TextInput from "~/components/elements/TextInput";
import AdminButton from "~/components/pages/admin/helper/AdminButton";
import {convertArrayToCSV, downloadCSV} from "~/components/helper/convertCsv";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {exportArrayOfObjectsToExcel, exportArrayToExcel} from "~/components/helper/exportToExel";
import {exportObjectsToPDF} from "~/components/helper/exportToPdf";

export default {
  components: {NotificationCard, AdminButton, TextInput},
  props: ['data'],
  data() {
    return {
      exportStatus: 'today',
      showSelectDate: false,
      date: {
        start: '',
        end: ''
      },
      exportFormat: '',
      todayData: [],
      rangeData: [],
      notif: {
        title: '',
        message: "",
        type: "",
        active: false,
      }
    }
  },
  methods: {
    handleSetStart(data) {
      this.date.start = new Date(data)
    },
    handleSetEnd(data) {
      this.date.end = new Date(data)
    },
    handleSelectFormat(data) {
      this.exportFormat = data
    },
    handleExport() {
      if (this.exportFormat !== '') {
        if (this.exportStatus === 'today') {
          let today = new Date()
          this.data.map(item => {
            if (new Date(item.start).toLocaleDateString() === today.toLocaleDateString() && new Date(item.end).toLocaleDateString() === today.toLocaleDateString()) {
              this.todayData.push(item)
            }
          })
          if (this.todayData.length) {
            if (this.exportFormat === 'csv') {
              const csvData = convertArrayToCSV(this.todayData)
              downloadCSV(csvData, 'today_information.csv');
            } else if (this.exportFormat === 'exel') {
              exportArrayOfObjectsToExcel(this.todayData, 'information')
            } else if (this.exportFormat === 'pdf') {
              exportObjectsToPDF(this.todayData, 'information');
            }
            this.$emit('close')
          } else {
            this.showInfoNotif()
          }
        } else {
          if (this.date.start && this.date.end) {
            if (this.date.start > this.date.end) {
              this.notif.active = true;
              this.notif.title = 'error'
              this.notif.type = 'error'
              this.notif.message = 'please select an end date bigger than start date'
            } else {
              this.data.map(item => {
                let start = item.start.split('T')
                let end = item.end.split('T')
                if (new Date(start[0]) > this.date.start && new Date(end[0]) < new Date(this.date.end)) {
                  console.log('bye')
                  this.rangeData.push(item)
                }
              })
              if (this.rangeData.length) {
                if (this.exportFormat === 'csv') {
                  const csvData = convertArrayToCSV(this.rangeData)
                  downloadCSV(csvData, 'information.csv');
                } else if (this.exportFormat === 'exel') {
                  exportArrayOfObjectsToExcel(this.rangeData, 'information')
                } else if (this.exportFormat === 'pdf') {
                  exportObjectsToPDF(this.rangeData, 'information');
                }
                this.$emit('close')
              } else {
                this.showInfoNotif()
              }
            }
          } else {
            this.notif.active = true;
            this.notif.title = 'error'
            this.notif.type = 'error'
            this.notif.message = 'please select a range of date'
          }
        }
      } else {
        this.notif.active = true;
        this.notif.title = 'error'
        this.notif.type = 'error'
        this.notif.message = 'please select a format'
      }
    },
    showInfoNotif() {
      this.notif.active = true;
      this.notif.title = 'info'
      this.notif.type = 'info'
      this.notif.message = 'there is no data in selected date for download .'
    }
  },
  watch: {
    exportStatus() {
      if (this.exportStatus === 'range') {
        this.showSelectDate = true;
      } else {
        this.showSelectDate = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.c-title {
  font-size: 18px;
}

@media screen and (max-width: 767px) {
  .modal-box {
    width: 100% !important;
  }
}
</style>
