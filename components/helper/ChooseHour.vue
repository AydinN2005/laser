<template>
  <div class="hour-box modal-box">
    <div class="flex items-center justify-between w-full">
      <strong class="hour-box-title">
        choose your hour
      </strong>
      <img loading="lazy" width="24" height="24" src="~/assets/images/icons/close-icon.svg" @click="$emit('close')"
           alt=""
           class="cursor-pointer"/>
    </div>
    <div v-if="!loading" class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-6 mt-10">
      <button
        class="hour-box-item" v-for="item in hours" :key="item.id"
        :disabled="bookedHours.includes(item.title) || (reserves[0] <= changeReserveTimeToNumber(item.title)[1] && changeReserveTimeToNumber(item.title)[1] <= reserves[1])"
        :class="bookedHours.includes(item.title) || (reserves[0] <= changeReserveTimeToNumber(item.title)[1] && changeReserveTimeToNumber(item.title)[1] <= reserves[1]) ? 'disable-hour' : '' "
        @click="selected(item.title)"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="h-full w-full flex items-center justify-center">
      <BigLoader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import {hours} from "~/components/helper/allHours";
import BigLoader from "~/components/pages/admin/helper/BigLoader";

export default {
  components: {BigLoader},
  props: ['bookedTimes', 'bookedReserves', 'loading'],
  data: () => ({
    hours,
    bookedHours: [],
    reserves: [],
  }),
  methods: {
    selected(title) {
      if (!this.bookedHours.includes(title)) {
        this.$emit('selected', title)
        this.$emit('close')
      }
    },
    changeReserveTimeToNumber(reserve) {
      return reserve.split('_').map(splitByUnderScore => parseInt(splitByUnderScore.replace(':', '')))
    }
  },
  watch: {
    bookedReserves() {
      this.bookedReserves.map(booked => {
        this.reserves = this.changeReserveTimeToNumber(booked)
      })
    },
    bookedTimes() {
      this.bookedHours = this.bookedTimes
    }
  }
}
</script>

<style scoped lang="scss">
.hour-box {

  &-title {
    font-size: 32px;
    font-weight: bold;
  }

  &-item {
    padding: 8px;
    border: 1px solid #787878;
    color: #787878;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: var(--primary-purple);
      color: white;
      border-color: var(--primary-purple);
    }
  }
}

.disable-hour {
  border-color: #AAAAAA;
  color: #AAAAAA;
  opacity: 0.7;
  cursor: default;

  &:hover {
    background: unset !important;
    border-color: #AAAAAA !important;
    color: #AAAAAA !important;
  }
}

@media screen and (max-width: 767px) {
  .hour-box {
    &-item {
      font-size: 12px;
    }
  }
}
</style>
