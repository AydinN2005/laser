<template>
  <div class="c-container footer" id="footer">
    <div class="footer-top">
      <div class="relative">
        <div class="footer-top-bg-1 absolute"></div>
        <div class="footer-top-bg-2 absolute"></div>
        <div class="relative footer-top-inner py-8 px-4 md:p-10 flex flex-col items-center">
          <div class="footer-top-inner-bg absolute top-0 left-0"></div>
          <div class="title-box-white relative z-10">
            <span></span>
            consultation
          </div>
          <div class="flex flex-col items-center relative z-10">
            <h2 class="section-title-1 text-center text-white">
              book consult and
            </h2>
            <h3 class="section-title-2 text-center text-white">
              get first session
            </h3>
          </div>
          <div
            class="flex flex-col items-center footer-top-inner-inputs w-full">
            <div class="flex md:flex-row flex-col items-center justify-center w-full">
              <FooterInput @dateChanged="handleDate" type="date" title="choose your date" value="yyy/mm/dd"
                           place-holder="yyy/mm/dd"/>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 mt-10">
            <RadioInput :checked="true" value="Laser Hair Removal" text-color="white" @changed="handleSelectType"
                        title="laser hair removal" id="hair" name="consultation"/>
            <RadioInput :checked="false" value="Facial" text-color="white" @changed="handleSelectType" title="facial"
                        id="facial" name="consultation"/>
            <RadioInput :checked="false" value="Micro Needling" text-color="white" @changed="handleSelectType"
                        title="micro needling" id="micro" name="consultation"/>
            <RadioInput :checked="false" value="Microdermabrasion" text-color="white" @changed="handleSelectType"
                        title="microdreamabrasion" id="microdreamabrasion"
                        name="consultation"/>
            <RadioInput :checked="false" value="Botox" text-color="white" @changed="handleSelectType" title="botox"
                        id="botox" name="consultation"/>
          </div>
          <button @click="handleBook"
                  class="footer-top-inner-btn font-s-13 flex items-center relative z-10"
                  :class="loading ? 'no-hover' : ''"
                  :disabled="consultation_type === ''"
          >
            <Loader width="16" height="16" color="white" v-if="loading"/>
            {{ !loading ? 'book consultation' : '' }}
            <svg v-if="!loading" class="ml-4" xmlns="http://www.w3.org/2000/svg" width="6" height="10"
                 viewBox="0 0 6 10" fill="none">
              <path d="M1 9L3.58579 6.41421C4.36684 5.63316 4.36683 4.36683 3.58579 3.58579L1 1" stroke="white"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <FooterBottom/>
    <div class="footer-divider"></div>
    <div class="w-full flex items-center md:flex-row flex-col-reverse justify-between mb-12">
      <span class="text-base font-normal md:mt-0 mt-6">
        @ 2024 . 2Daylaser.ca | All Right Reserved
      </span>
      <div class="flex items-center">
        <a href="https://www.instagram.com/2daylaser?igsh=MWZydnNtOWsybTdsZw==" class="footer-social mr-6">
          <img loading="lazy" src="~/assets/images/icons/instagram.svg" alt=""/>
        </a>
        <a href="https://t.me/+16474476238" class="footer-social mr-6">
          <img loading="lazy" src="~/assets/images/icons/telegram.svg" alt=""/>
        </a>
        <a href="https://wa.me/+16474476238" class="footer-social mr-6">
          <img loading="lazy" src="~/assets/images/icons/whatsapp.svg" alt=""/>
        </a>
      </div>
    </div>
    <div class="flex items-center justify-center overlay"
         :style="showHourBox ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}">
      <ChooseHour :key="randomKey" :loading="hoursLoading" @selected="selectedHour" @close="showHourBox = false"
                  :bookedTimes="bookedHours"
                  :bookedReserves="bookedReserves"/>
    </div>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import FooterInput from "~/components/layout/FooterInput";
import FooterBottom from "~/components/layout/FooterBottom";
import ChooseHour from "~/components/helper/ChooseHour";
import {bookConsultation, getSelectedHours} from "~/services/api/consultation";
import Checkbox from "~/components/elements/Checkbox";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import Loader from "~/components/elements/Loader";
import RadioInput from "~/components/elements/RadioInput";
import {getOffDays} from "~/services/api/admin/offDays";

export default {
  components: {RadioInput, Loader, NotificationCard, Checkbox, ChooseHour, FooterBottom, FooterInput},
  data: () => ({
    locations: [
      {
        id: 1,
        title: "UNIT 201,#16700 Bayview Avenue , New market , ONTARIO,L3X1W1."
      }
    ],
    operators: [
      {
        id: 1,
        title: 'walter white'
      },
      {
        id: 2,
        title: "jessi pinkman"
      }
    ],
    date_today: new Date(),
    date: {
      year: '',
      month: '',
      day: '',
      hour: '',
      service: '',
    },
    notif: {
      active: false,
      title: "",
      type: '',
      message: ''
    },
    bookedHours: [],
    bookedReserves: [],
    showHourBox: false,
    acceptRules: false,
    loading: false,
    randomKey: 0,
    hoursLoading: false,
    consultation_type: "Microdermabrasion",
    offDays: []
  }),
  mounted() {
    this.date.service = this.consultation_type;
    getOffDays((data) => {
      this.offDays = data;
    })
  },
  methods: {
    handleDate(data) {
      let utcDay = new Date(data).getUTCDay()
      let offDay = null
      this.offDays.map(item => {
        if (data === `${item.year}-${item.month >= 10 ? item.month : `0${item.month}`}-${item.day >= 10 ? item.day : `0${item.day}`}`) {
          offDay = data;
        }
      })
      if (offDay !== null) {
        this.notif.active = true;
        this.notif.title = 'error'
        this.notif.type = 'error'
        this.notif.message = "Unfortunately, the clinic is closed on the selected day, please choose another day";
      } else {
        this.date_today = data;
        const splitedDate = this.date_today.split('-')
        this.date.year = splitedDate[0]
        this.date.month = splitedDate[1]
        this.date.day = splitedDate[2]
        this.showHourBox = true;
        this.hoursLoading = true;
        getSelectedHours(this.date, (res) => {
          this.bookedHours = res.bookedTimes;
          res.reservedTimes.map(item => {
            this.bookedReserves.push(`${item.start}_${item.end}`)
          })
          this.hoursLoading = false;
        })
        this.randomKey = Math.floor(Math.random() * 10000000)

      }
    },
    selectedHour(data) {
      this.date.hour = data;
    },
    acceptHandler(data) {
      this.acceptRules = data;
    },
    handleBook() {
      if (typeof window !== 'undefined') {
        if (localStorage.getItem('user')) {
          this.loading = true;
          bookConsultation(this.date, (data) => {
            if (!data.statusCode) {
              this.notif.active = true;
              this.notif.title = 'success'
              this.notif.type = 'success'
              this.notif.message = data.message
            } else {
              this.notif.active = true;
              this.notif.title = 'error'
              this.notif.type = 'error'
              this.notif.message = data.message
            }
            this.loading = false;
          })
        } else {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = 'please login first'
        }
      }
    },
    handleSelectType(data) {
      this.consultation_type = data;
      this.date.service = this.consultation_type
    }
  },
  watch: {
    date_today() {
      // const splitedDate = this.date_today.split('-')
      // this.date.year = splitedDate[0]
      // this.date.month = splitedDate[1]
      // this.date.day = splitedDate[2]
      // this.showHourBox = true;
      // this.hoursLoading = true;
      // getSelectedHours(this.date, (res) => {
      //   this.bookedHours = res.bookedTimes;
      //   res.reservedTimes.map(item => {
      //     this.bookedReserves.push(`${item.start}_${item.end}`)
      //   })
      //   this.hoursLoading = false;
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  &-top {
    &-bg-1, &-bg-2 {
      width: 90%;
      height: 90%;
      border-radius: 56px;
    }

    &-bg-1 {
      background: var(--primary-purple);
      transform: rotate(4deg);
      box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }

    &-bg-2 {
      background: var(--box-bg);
      transform: rotate(-4deg);
      box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
    }

    &-inner {
      background: url("~/assets/images/img/footerBg.webp") center center/cover;
      border-radius: 56px;

      &-bg {
        width: 100%;
        height: 100%;
        border-radius: 56px;
        background: rgba(61, 57, 72, 0.64);
        box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;
      }

      &-inputs {
        margin-top: 73px;
        max-width: 984px;
      }

      &-btn {
        color: white;
        text-transform: capitalize;
        margin-top: 56px;
        padding: 12px 84px;
        border-radius: 100px;
        background: var(--primary-purple);
        box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24), -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset, 2px 2px 28px 0px rgba(255, 255, 255, 0.20) inset;

        &:disabled {
          opacity: 0.5;
        }

        &:hover {
          background: white;
          color: var(--primary-purple);

          path {
            stroke: var(--primary-purple);
          }
        }
      }
    }
  }

  &-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(270deg, rgba(61, 57, 72, 0.00) 0%, #3D3948 45.31%, rgba(61, 57, 72, 0.00) 100%);
    margin: 32px 0;
  }

  &-social {
    padding: 12px;
    border-radius: 50%;
    background: var(--gray-bg);
    cursor: pointer;

    &:hover {
      background: var(--primary-purple);
    }
  }
}

.rules-box {
  margin-top: 40px;
  position: relative;
  z-index: 10;

  p {
    color: white;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &-top {
      &-bg-1, &-bg-2 {
        display: none !important;
      }
    }
  }
}
</style>
