<template>
  <div class="c-container">
    <DashboardTabs @tabChanged="handleChange"/>
    <div v-if="activeComp === 1" class="flex flex-col items-end w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 w-full">
        <TextInput :data="user.first_name" @dataChanged="(data) => {editedUser.first_name = data}" :icon="false"
                   :title="'first name'" :type="'text'"
                   :required="true" :readOnly="!changeMode"/>
        <TextInput :data="user.last_name" @dataChanged="(data) => {editedUser.last_name = data}" :icon="false"
                   :title="'last name'" :type="'text'"
                   ::required="true" :readOnly="!changeMode"/>
        <TextInput :data="user.phone" @dataChanged="(data) => {editedUser.phone = data}" :icon="false"
                   :title="'phone number'"
                   :type="'text'"
                   :required="true" :readOnly="!changeMode"/>
        <TextInput :data="user.email" :icon="false" :title="'email'" :type="'email'" :required="true"
                   :readOnly="true"/>
        <TextInput :data="user.password" @dataChanged="(data) => {editedUser.password = data}" :icon="false"
                   :title="'password'" :type="'password'"
                   :required="true" :readOnly="!changeMode"/>
        <TextInput :data="user.location" @dataChanged="(data) => {editedUser.location = data}" :icon="false"
                   :title="'location'" :type="'select'"
                   :required="true"
                   :readOnly="!changeMode">
          <option value="new market , ontario">
            New Market , ONTARIO
          </option>
        </TextInput>
        <div class="md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-5">
          <TextInput :data="user.address" @dataChanged="(data) => {editedUser.address = data}" :icon="false"
                     :title="'address'" :type="'text'" :readOnly="!changeMode"/>
        </div>
      </div>
      <div class="flex items-center md:flex-row flex-col-reverse items-center w-full md:w-max">
        <button class="logout mr-3 mt-10 flex items-center justify-center" @click="logout">
          <img loading="lazy" src="~/assets/images/icons/arrow-left.svg" class="mr-4" alt=""/>
          logout
        </button>
<!--        <button v-if="!changeMode" class="md:w-max w-full change-btn flex items-center justify-center"-->
<!--                @click="changeMode = true">-->
<!--          <svg class="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path-->
<!--              d="M7.5 10C10.2575 10 12.5 7.7575 12.5 5C12.5 2.2425 10.2575 0 7.5 0C4.7425 0 2.5 2.2425 2.5 5C2.5 7.7575 4.7425 10 7.5 10ZM7.5 1.66667C9.33833 1.66667 10.8333 3.16167 10.8333 5C10.8333 6.83833 9.33833 8.33333 7.5 8.33333C5.66167 8.33333 4.16667 6.83833 4.16667 5C4.16667 3.16167 5.66167 1.66667 7.5 1.66667ZM8.95833 13.5167C8.485 13.395 7.99417 13.3333 7.5 13.3333C4.28333 13.3333 1.66667 15.95 1.66667 19.1667C1.66667 19.6267 1.29333 20 0.833333 20C0.373333 20 0 19.6267 0 19.1667C0 15.0317 3.365 11.6667 7.5 11.6667C8.135 11.6667 8.76583 11.7458 9.375 11.9033C9.82083 12.0183 10.0883 12.4725 9.97417 12.9183C9.86 13.3642 9.4075 13.6317 8.95917 13.5175L8.95833 13.5167ZM19.2675 9.89917C18.3225 8.95417 16.6758 8.95417 15.7317 9.89917L10.1425 15.4883C9.51333 16.1175 9.16583 16.955 9.16583 17.8458V19.1675C9.16583 19.6275 9.53917 20.0008 9.99917 20.0008H11.3208C12.2117 20.0008 13.0483 19.6533 13.6775 19.0242L19.2667 13.435C19.7392 12.9625 19.9992 12.335 19.9992 11.6667C19.9992 10.9983 19.7392 10.3708 19.2675 9.89917ZM18.0883 12.2558L12.4983 17.845C12.1842 18.16 11.7658 18.3333 11.32 18.3333H10.8317V17.845C10.8317 17.4 11.005 16.9817 11.32 16.6667L16.91 11.0775C17.2242 10.7625 17.7733 10.7625 18.0883 11.0775C18.2458 11.2342 18.3325 11.4433 18.3325 11.6667C18.3325 11.89 18.2458 12.0983 18.0883 12.2558Z"-->
<!--              fill="#EDE2FF"/>-->
<!--          </svg>-->
<!--          change information-->
<!--        </button>-->
        <div class="flex items-center mt-11 md:w-max w-full md:flex-row flex-col-reverse">
<!--          <button class="btn cancel-btn md:w-max w-full" @click="cancelEdit">-->
<!--            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <g clip-path="url(#clip0_993_5919)">-->
<!--                <path-->
<!--                  d="M13.3342 6.6666C13.1779 6.51037 12.966 6.42261 12.745 6.42261C12.5241 6.42261 12.3121 6.51037 12.1559 6.6666L10.0009 8.8216L7.84585 6.6666C7.68868 6.5148 7.47818 6.4308 7.25969 6.4327C7.04119 6.4346 6.83218 6.52224 6.67767 6.67675C6.52316 6.83125 6.43552 7.04026 6.43363 7.25876C6.43173 7.47726 6.51572 7.68776 6.66752 7.84493L8.82252 9.99993L6.66752 12.1549C6.51572 12.3121 6.43173 12.5226 6.43363 12.7411C6.43552 12.9596 6.52316 13.1686 6.67767 13.3231C6.83218 13.4776 7.04119 13.5653 7.25969 13.5672C7.47818 13.5691 7.68868 13.4851 7.84585 13.3333L10.0009 11.1783L12.1559 13.3333C12.313 13.4851 12.5235 13.5691 12.742 13.5672C12.9605 13.5653 13.1695 13.4776 13.324 13.3231C13.4785 13.1686 13.5662 12.9596 13.5681 12.7411C13.57 12.5226 13.486 12.3121 13.3342 12.1549L11.1792 9.99993L13.3342 7.84493C13.4904 7.68866 13.5782 7.47673 13.5782 7.25576C13.5782 7.03479 13.4904 6.82287 13.3342 6.6666Z"-->
<!--                  fill="#EDE2FF"/>-->
<!--                <path-->
<!--                  d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z"-->
<!--                  fill="#EDE2FF"/>-->
<!--              </g>-->
<!--              <defs>-->
<!--                <clipPath id="clip0_993_5919">-->
<!--                  <rect width="20" height="20" fill="white"/>-->
<!--                </clipPath>-->
<!--              </defs>-->
<!--            </svg>-->
<!--            cancel-->
<!--          </button>-->
          <button class="btn accept-btn mb-6 md:mb-0 md:ml-6 md:w-max w-full" @click="acceptEdit">
            <svg v-if="!loading" width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_993_5908)">
                <path
                  d="M15.1783 7.58167C15.5008 7.91 15.4958 8.4375 15.1667 8.76L11.4783 12.3808C10.8258 13.0208 9.98583 13.34 9.145 13.34C8.31333 13.34 7.48167 13.0267 6.83167 12.3992L5.24917 10.8433C4.92083 10.5208 4.91667 9.99333 5.23917 9.665C5.56083 9.33583 6.09 9.33167 6.4175 9.655L7.995 11.2058C8.64167 11.8308 9.6625 11.8275 10.3125 11.1908L14 7.57083C14.3275 7.2475 14.8533 7.25333 15.1783 7.58167ZM20 10C20 15.5142 15.5142 20 10 20C4.48583 20 0 15.5142 0 10C0 4.48583 4.48583 0 10 0C15.5142 0 20 4.48583 20 10ZM18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10C1.66667 14.595 5.405 18.3333 10 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10Z"
                  fill="#EDE2FF"/>
              </g>
              <defs>
                <clipPath id="clip0_993_5908">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <Loader v-if="loading" height="16" width="16" color="white"/>
            {{ !loading ? 'save' : '' }}
          </button>
        </div>
      </div>
    </div>
    <UserReservations v-if="activeComp === 2"/>
    <NotificationCard @close="notif.active = false" :active="notif.active" :title="notif.title" :message="notif.message"
                      :type="notif.type"/>
  </div>
</template>

<script>
import DashboardTabs from "~/components/pages/dashboard/DashboardTabs";
import DataTable from "~/components/helper/DataTable";
import TextInput from "~/components/elements/TextInput";
import DeleteDialog from "~/components/elements/DeleteDialog";
import {userEditData} from "~/services/api/user";
import NotificationCard from "~/components/helper/notification/NotificationCard";
import {getUserReservations} from "~/services/api/userReservations";
import UserReservations from "~/components/pages/dashboard/UserReservations";
import Loader from "~/components/elements/Loader";

export default {
  components: {Loader, UserReservations, NotificationCard, DeleteDialog, TextInput, DashboardTabs, DataTable},
  middleware: 'checkUser',
  data: () => ({
    reservations: [],
    activeComp: 1,
    changeMode: true,
    showDelete: false,
    user: {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      location: '',
      address: '',
    },
    editedUser: {
      first_name: '',
      last_name: '',
      phone: '',
      location: '',
      address: '',
      password: '',
    },
    notif: {
      active: false,
      title: '',
      type: '',
      message: '',
    },
    loading: false,
  }),
  mounted() {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('refresh')) {
        localStorage.setItem('refresh', 'done')
        window.location.reload()
      }
      if (localStorage.getItem('user_data')) {
        let res = JSON.parse(localStorage.getItem('user_data'))
        this.user = {...res};
      }
    }
  },
  methods: {
    handleChange(id) {
      this.activeComp = id;
    },
    cancelEdit() {
      this.changeMode = false
    },
    acceptEdit() {
      this.loading = true;
      let result = this.editedUser
      Object.keys(result).forEach(key => {
        if (result[key] === "") {
          delete result[key]
        }
      })
      userEditData(result, (res) => {
        if (res.statusCode) {
          this.notif.active = true;
          this.notif.title = 'error'
          this.notif.type = 'error'
          this.notif.message = res.message ? res.message : ''
        } else {
          this.notif.active = true;
          this.notif.title = 'success'
          this.notif.type = 'success'
          this.notif.message = res.message
          if (!this.user.signup) {
            Object.keys(this.user).forEach(key => {
              if (this.editedUser[key]) {
                if (this.user[key] !== this.editedUser[key]) {
                  this.user[key] = this.editedUser[key]
                }
              }
            })
          } else {
            this.user = {
              ...this.user,
              ...this.editedUser
            }
          }
          if (typeof window !== 'undefined') {
            localStorage.setItem('user_data', JSON.stringify(this.user))
          }
        }
        this.loading = false;
        // this.changeMode = false
      })
    },
    logout() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('user_data')
        localStorage.removeItem('refresh')
        this.$router.push('/loginsignup')
        this.$store.commit('setLogin', false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.change-btn {
  padding: 12px 32px;
  border-radius: 100px;
  background: var(--primary-purple);
  margin-top: 40px;
  color: white;

  &:hover {
    background: var(--gray-bg);
  }
}

.btn {
  padding: 12px 32px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }

  color: white;
  font-size: 16px;

  &:hover {
    background: var(--gray-bg) !important;
  }
}

.cancel-btn {
  background: #FA5D75;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
}

.accept-btn {
  background: #3E74FF;
  box-shadow: 2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset,
  -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
  0px 8px 12px 0px rgba(58, 113, 255, 0.24);
}

.logout {
  padding: 12px 24px;
  border-radius: 100px;
  background: var(--primary-red);
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);

  &:hover {
    background: var(--gray-bg);
  }
}

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
