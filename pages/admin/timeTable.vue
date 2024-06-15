<template>
  <div>
    <div v-if="!loading" class="flex flex-col">
      <client-only>
        <TimeTableFilter @filtered="handleFilterTable" @reset="handleReset" :data="allEvents"
                         @serviceSelected="handleServiceSelected"
                         @tabChanged="handleChangeTab"
                         class="mb-10"/>
      </client-only>
      <div class="flex items-center mb-10">
        <div class="flex items-center guid-box">
          <span style="background: var(--primary-purple)"></span>
          <strong>
            consultations
          </strong>
        </div>
        <div class="flex items-center guid-box ml-6">
          <span style="background: var(--gray-bg)"></span>
          <strong>
            laser hair removal
          </strong>
        </div>
      </div>
      <div class="w-full" v-if="tabId === 1">
        <client-only>
          <FullCalendar @eventRender="handleToolTip" :key="randomKey" class="calendar" :options="calendarOptions">
            <template #eventContent="arg">
              <div class="flex flex-col event-box relative">
              <span>
                {{ arg.event.title }}
              </span>
                <span>
                {{ arg.event.start.toLocaleTimeString() }}
              </span>
                <span>
                {{ arg.event.end.toLocaleTimeString() }}
              </span>
              </div>
            </template>
          </FullCalendar>
        </client-only>
      </div>
      <div v-if="tabId === 2">
        <DataTable :header="tblHeader">
          <tr v-for="item in calendarOptions.events" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td :style="item.eventName === 'consultation' ? {color: 'var(--primary-purple) !important'} : {}">
              {{ item.eventName }}
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              {{ item.start.split('T')[0] }} {{ item.start.split('T')[1] }}
            </td>
            <td>
              1
            </td>
            <td>
              {{ item.end.split('T')[0] }} {{ item.end.split('T')[1] }}
            </td>
          </tr>
        </DataTable>
      </div>
    </div>
    <div class="flex items-center justify-center w-full">
      <BigLoader v-if="loading"/>
    </div>
  </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import {getAllReservation} from "~/services/api/admin/reservation";
import BigLoader from "~/components/pages/admin/helper/BigLoader";
import {getALlConsultation} from "~/services/api/admin/consultation";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import {spanCreator, tblHeader} from "~/pages/admin/data";
import TimeTableFilter from "~/components/pages/admin/timeTable/TimeTableFilter";
import DataTable from "~/components/helper/DataTable";

let allData = []
export default {
  ssr: false,
  layout: 'admin',
  components: {
    DataTable,
    TimeTableFilter,
    BigLoader,
    VueCal,
    FullCalendar
  },
  data() {
    return {
      loading: false,
      showModal: false,
      randomKey: 0,
      selectedData: {},
      allEvents: [],
      filteredData: [],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin],
        initialView: "dayGridMonth",
        start: '10:00:00',
        end: '18:00:00',
        headerToolbar: {
          left: "today prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        events: allData,
        eventClick: this.handleEventClicked,
        eventDidMount: this.handleToolTip,
        slotDuration: '00:15:00',
        slotMinTime: '10:00:00',
        slotMaxTime: '18:30:00',
        eventDisplay: "block",
        displayEventTime: false,
        allDaySlot: false,
        eventLimit: true,
        buttonText: {
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "Agenda",
        },
      },
      tabId: 1,
      tblHeader
    }
  },
  mounted() {
    this.getData()
  }
  ,
  methods: {
    addItem(item, title) {
      this.allEvents.push({
        eventName: 'Laser hair removal',
        id: item.id,
        fileNumber: item.user?.file_number,
        content: `${item.user?.first_name} ${item.user?.last_name}`,
        className: 'reservation-event',
        title: item.service.name || title,
        start: `${item.year}-${item.month < 10 ? `0${item.month}` : item.month}-${item.day < 10 ? `0${item.day}` : item.day}T${item.start}:00`,
        end: `${item.year}-${item.month < 10 ? `0${item.month}` : item.month}-${item.day < 10 ? `0${item.day}` : item.day}T${item.end}:00`,
        userPhone: item.user.phone,
        userEmail: item.user.email,
        userId: item.user.id
      })
    },
    getData() {
      this.loading = true;
      getAllReservation((data) => {
        data.map(item => {
          this.addItem(item)
        })
      })
      getALlConsultation((data) => {
        data.map(item => {
          let time = item.start_hour.split('_')
          this.allEvents.push({
            id: item.id,
            content: `${item.user.first_name} ${item.user.last_name}`,
            start: `${item.year}-${item.month < 10 ? `0${item.month}` : item.month}-${item.day < 10 ? `0${item.day}` : item.day}T${time[0]}:00`,
            end: `${item.year}-${item.month < 10 ? `0${item.month}` : item.month}-${item.day < 10 ? `0${item.day}` : item.day}T${time[1]}:00`,
            title: item.service,
            className: 'consultation-event',
            eventName: 'consultation',
            fileNumber: item.user?.file_number,
            userPhone: item.user.phone,
            userEmail: item.user.email,
            userId: item.user.id
          })
        })
        this.calendarOptions.events = this.allEvents;
        this.randomKey = Math.floor(Math.random() * 1000000)
        this.loading = false;
      })
    },
    handleEventClicked: function (calEvent) {
      // console.log(calEvent.event.extendedProps.userId)
      this.$router.push(`/admin/singleUser/${calEvent.event.extendedProps.userId}`)
    },
    handleToolTip: (info) => {
      const div = document.createElement('div')
      const startDate = document.createElement('div')
      const endDate = document.createElement('div')
      endDate.className = 'grid grid-cols-2 gap-3'
      startDate.className = 'grid grid-cols-2 gap-3'
      div.className = 'grid grid-cols-1 gap-3'
      const title = spanCreator(info.event.title)
      const startTime = spanCreator(info.event.start.toLocaleTimeString())
      const startDateSpan = spanCreator(info.event.start.toLocaleDateString())
      startDate.appendChild(startTime)
      startDate.appendChild(startDateSpan)

      const endTime = spanCreator(info.event.end.toLocaleTimeString())
      const endDateSpan = spanCreator(info.event.end.toLocaleDateString())
      endDate.appendChild(endTime)
      endDate.appendChild(endDateSpan)
      const user = spanCreator(info.event.extendedProps.content)
      const eventName = spanCreator(info.event.extendedProps.eventName)
      const fileNumberSpanVal = spanCreator(info.event.extendedProps.fileNumber || info.event.fileNumber)
      const fileNumberSpanTitle = spanCreator('F.N : ')
      const fileNumber = document.createElement('div')
      fileNumber.appendChild(fileNumberSpanTitle)
      fileNumber.appendChild(fileNumberSpanVal)
      fileNumber.className = 'grid grid-cols-2 gap-1'
      const userPhoneSpanTitle = spanCreator('phone :')
      const userPhoneSpanVal = spanCreator(info.event.extendedProps.userPhone)
      const userPhone = document.createElement('div')
      userPhone.appendChild(userPhoneSpanTitle)
      userPhone.appendChild(userPhoneSpanVal)
      userPhone.className = 'grid grid-cols-2 gap-1'
      const userEmail = spanCreator(info.event.extendedProps.userEmail)
      div.appendChild(eventName)
      div.appendChild(title)
      div.appendChild(startDate)
      div.appendChild(endDate)
      div.appendChild(user)
      div.appendChild(userEmail)
      div.appendChild(userPhone)
      div.appendChild(fileNumber)
      tippy(info.el, {
        content: div,
        placement: 'top',
      });
    },
    handleChangeTab(tabId) {
      this.filteredData = [];
      this.calendarOptions.events = this.allEvents;
      this.tabId = tabId;
    },
    filterServices(services) {
      services.map(el => {
        this.allEvents.map(item => {
          if (!this.filteredData.includes(item)) {
            if (item.title === el.name) {
              this.filteredData.push(item)
              this.calendarOptions.events = this.filteredData;
            }
          }
        })
      })
    },
    handleServiceSelected(services) {
      this.filteredData = []
      this.filterServices(services)
    },
    handleFilterTable({date, services}) {
      this.filteredData = []
      let {start, end} = date;
      console.log(services)
      this.allEvents.map(item => {
        if (services.length && services !== null) {
          services.map(el => {
            if (new Date(item.start) > start && new Date(item.end) < end && item.title === el.name) {
              if (!this.filteredData.includes(item)) {
                this.filteredData.push(item)
              }
              this.calendarOptions.events = this.filteredData;
            }
          })
        } else {
          console.log('slm')
          if (new Date(item.start) > start && new Date(item.end) < end) {
            if (!this.filteredData.includes(item)) {
              this.filteredData.push(item)
            }
            this.calendarOptions.events = this.filteredData;
          }
        }
      })
    },
    handleReset() {
      this.calendarOptions.events = this.allEvents;
      this.filteredData = [];
    }
  },
}
</script>
<style lang="scss">
.fc-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fc-icon::before {
  color: white;
}

.reservation-event {
  background: var(--gray-bg) !important;
}

.consultation-event {
  background: var(--primary-purple) !important;
}

.reservation-event, .consultation-event {
  cursor: pointer;

  &:hover {
    background: var(--input-bg) !important;

    span {
      color: black !important;
    }

    color: black !important;;
  }
}

.fc-event-main {
  overflow: hidden;
}

.fc-event-title {
  color: white !important;
}

.event-box {
  overflow: hidden;
  padding: 4px;

  span {
    color: white;
    font-size: 12px;
  }

  &:hover {
    .event-hover-box {
      display: flex !important;
    }
  }
}

.event-hover-box {
  position: absolute;
  display: none;
  width: 100%;
  height: 100px;
  background: white;
  color: black;
  left: 0;
  border-radius: 12px;
  z-index: 999;

  span {
    color: black;
  }
}

.title {
  font-size: 14px;
  margin-right: 8px;
  color: var(--primary-red);
}

.value {
  font-size: 16px;
  color: var(--gray-bg);
}

.guid-box {
  width: max-content;
  max-width: max-content;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 4px;
  }

  strong {
    font-size: 14px;
    font-weight: bold;
  }
}

.fc-list-event-title {
  color: white;

  &:hover {
    color: var(--text-color);

    span {
      color: var(--text-color);
    }
  }
}

.tippy-box {
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;

  span {
    color: white !important;
  }
}

.tippy-arrow {
  color: #333;
}

@media screen and (max-width: 767px) {
  .fc-header-toolbar {
    flex-direction: column-reverse;
    gap: 16px;
  }
  .fc {
    font-size: 12px; /* Adjust font size for mobile */
    /* Add additional styling as needed */
  }
}
</style>
