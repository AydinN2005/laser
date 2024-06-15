<template>
  <div class="c-container">
    <div class="ls-container grid grid-cols-1 lg:grid-cols-2 items-center">
      <div class="flex flex-col mb-8 lg:p-0 md:p-5 p-1 md:pt-0 pt-3">
        <Login v-if="activeComp === 1" @changed="changedTab"/>
        <Signup v-if="activeComp === 2" @changed="changedTab"/>
        <LSTabs :data="firstTabs" @changed="changedTab"/>
        <!-- <LoginWithGA/> -->
        <LSTabs
          v-if="activeComp === 1"
          :data="secondTabs"
          class="second-tabs"
          @changed="changedLoginStatus"
        />
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-y-4 gap-y-8"
          v-if="activeComp === 1 && !sendCodeStatus && loginStatus === 1"
        >
          <TextInput
            @dataChanged="
              (data) => {
                baseEmail = data
              }
            "
            title="your email :"
            type="email"
            bg="white"
          />
          <TextInput
            @dataChanged="
              (data) => {
                basePassword = data
              }
            "
            title="your password :"
            type="password"
            bg="white"
          />
        </div>
        <div class="w-full" v-if="loginStatus === 2 && activeComp === 1">
          <TextInput
            title="your email :"
            type="text"
            bg="white"
            @dataChanged="
              (data) => {
                loginData.loginEmail = data
              }
            "
          />
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
          v-if="activeComp === 2 && !sendCodeStatus"
        >
          <div class="relative col-start-1 col-end-3">
            <div class="input-tick-icon">
              <img loading="lazy"
                   src="~/assets/images/img/circle.svg"
                   v-if="!signUpWithEmail"
              />
              <img loading="lazy"
                   src="~/assets/images/img/circleTick.svg"
                   v-if="signUpWithEmail"
              />
            </div>
            <TextInput
              @dataChanged="signupEmailChanged"
              title="your email :"
              type="email"
              bg="white"
              :read-only="!signUpWithEmail"
            />
          </div>
        </div>
        <div
          v-if="sendCodeStatus || loginSendCodeStatus"
          class="flex w-full md:flex-row lg:justify-start md:justify-between lg:flex-col flex-col"
        >
          <VerificationCode
            v-if="sendCodeStatus"
            :getStatus="getVerifyCode"
            @changed="verifyCodeHandler"
          />
          <VerificationCode
            class="mt-10"
            v-if="loginSendCodeStatus"
            :getStatus="getVerifyCodeForLogin"
            @changed="verifyCodeHandlerForLogin"
          />
          <div
            class="ls-timer flex items-center lg:self-end lg:mt-4 md:mt-0 mt-9 self-center"
          >
            <div class="flex items-center ml-4">
              <img loading="lazy" src="~/assets/images/img/clock.svg" class="mr-2.5" alt=""/>
              <span class="text-white text-2xl font-bold" ref="timer">
                {{ formatTime(timer) }}
              </span>
            </div>
            <button
              class="ls-timer-btn"
              @click="resendCode"
              :disabled="timerStatus"
            >
              resend code
            </button>
          </div>
        </div>
        <div
          class="flex items-center md:flex-row flex-col-reverse w-full create-btns-container"
          v-if="sendCodeStatus"
        >
          <button
            @click="changeNE"
            class="change-number flex items-center justify-center w-full"
          >
            <svg
              v-if="signUpWithNumber"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1180_3692)">
                <path
                  d="M9.74999 0.750221C9.74999 0.551309 9.82901 0.360543 9.96966 0.219891C10.1103 0.0792388 10.3011 0.000221163 10.5 0.000221163C12.4884 0.00240486 14.3948 0.793282 15.8009 2.19933C17.2069 3.60538 17.9978 5.51177 18 7.50022C18 7.69913 17.921 7.8899 17.7803 8.03055C17.6397 8.1712 17.4489 8.25022 17.25 8.25022C17.0511 8.25022 16.8603 8.1712 16.7197 8.03055C16.579 7.8899 16.5 7.69913 16.5 7.50022C16.4982 5.90947 15.8655 4.38439 14.7407 3.25955C13.6158 2.13472 12.0907 1.50201 10.5 1.50022C10.3011 1.50022 10.1103 1.4212 9.96966 1.28055C9.82901 1.1399 9.74999 0.949134 9.74999 0.750221ZM10.5 4.50022C11.2956 4.50022 12.0587 4.81629 12.6213 5.3789C13.1839 5.94151 13.5 6.70457 13.5 7.50022C13.5 7.69913 13.579 7.8899 13.7197 8.03055C13.8603 8.1712 14.0511 8.25022 14.25 8.25022C14.4489 8.25022 14.6397 8.1712 14.7803 8.03055C14.921 7.8899 15 7.69913 15 7.50022C14.9988 6.30711 14.5243 5.16321 13.6807 4.31956C12.837 3.4759 11.6931 3.00141 10.5 3.00022C10.3011 3.00022 10.1103 3.07924 9.96966 3.21989C9.82901 3.36054 9.74999 3.55131 9.74999 3.75022C9.74999 3.94913 9.82901 4.1399 9.96966 4.28055C10.1103 4.4212 10.3011 4.50022 10.5 4.50022ZM17.3197 12.5545C17.7544 12.9903 17.9984 13.5807 17.9984 14.1962C17.9984 14.8117 17.7544 15.4021 17.3197 15.838L16.6372 16.6247C10.4947 22.5055 -4.45276 7.56172 1.33724 1.39972L2.19974 0.649721C2.63607 0.227229 3.22119 -0.00649203 3.82852 -0.000877705C4.43585 0.00473662 5.01655 0.249235 5.44499 0.679721C5.46824 0.702971 6.85799 2.50822 6.85799 2.50822C7.27036 2.94144 7.49992 3.51692 7.49894 4.11502C7.49796 4.71313 7.26653 5.28785 6.85274 5.71972L5.98424 6.81172C6.46488 7.97956 7.17154 9.04091 8.06362 9.93479C8.9557 10.8287 10.0156 11.5375 11.1825 12.0205L12.2812 11.1467C12.7132 10.7333 13.2878 10.5021 13.8857 10.5013C14.4836 10.5004 15.0589 10.73 15.492 11.1422C15.492 11.1422 17.2965 12.5312 17.3197 12.5545ZM16.2877 13.645C16.2877 13.645 14.493 12.2642 14.4697 12.241C14.3152 12.0878 14.1065 12.0018 13.8889 12.0018C13.6713 12.0018 13.4625 12.0878 13.308 12.241C13.2877 12.262 11.775 13.4672 11.775 13.4672C11.673 13.5484 11.5517 13.6016 11.423 13.6215C11.2942 13.6415 11.1625 13.6276 11.0407 13.5812C9.52908 13.0184 8.15604 12.1373 7.01462 10.9975C5.87319 9.85779 4.99004 8.48605 4.42499 6.97522C4.37489 6.85181 4.35855 6.71729 4.37767 6.58548C4.39678 6.45366 4.45065 6.32932 4.53374 6.22522C4.53374 6.22522 5.73899 4.71172 5.75924 4.69222C5.91244 4.53771 5.9984 4.32893 5.9984 4.11135C5.9984 3.89376 5.91244 3.68498 5.75924 3.53047C5.73599 3.50797 4.35524 1.71172 4.35524 1.71172C4.19841 1.5711 3.99374 1.49579 3.78317 1.50123C3.57261 1.50667 3.3721 1.59244 3.22274 1.74097L2.36024 2.49097C-1.87126 7.57897 11.082 19.8137 15.5407 15.6002L16.224 14.8127C16.3841 14.6644 16.4803 14.4597 16.4922 14.2417C16.5041 14.0238 16.4308 13.8098 16.2877 13.645Z"
                  fill="#9A77FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1180_3692">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <svg
              v-if="signUpWithEmail"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 0.666504H3.33333C2.4496 0.667562 1.60237 1.01909 0.97748 1.64398C0.352588 2.26888 0.00105857 3.11611 0 3.99984L0 11.9998C0.00105857 12.8836 0.352588 13.7308 0.97748 14.3557C1.60237 14.9806 2.4496 15.3321 3.33333 15.3332H12.6667C13.5504 15.3321 14.3976 14.9806 15.0225 14.3557C15.6474 13.7308 15.9989 12.8836 16 11.9998V3.99984C15.9989 3.11611 15.6474 2.26888 15.0225 1.64398C14.3976 1.01909 13.5504 0.667562 12.6667 0.666504ZM3.33333 1.99984H12.6667C13.0659 2.00062 13.4557 2.12085 13.786 2.34504C14.1163 2.56923 14.3719 2.88714 14.52 3.25784L9.41467 8.36384C9.03895 8.73805 8.53028 8.94815 8 8.94815C7.46972 8.94815 6.96105 8.73805 6.58533 8.36384L1.48 3.25784C1.6281 2.88714 1.88374 2.56923 2.21403 2.34504C2.54432 2.12085 2.93414 2.00062 3.33333 1.99984ZM12.6667 13.9998H3.33333C2.8029 13.9998 2.29419 13.7891 1.91912 13.4141C1.54405 13.039 1.33333 12.5303 1.33333 11.9998V4.99984L5.64267 9.3065C6.26842 9.93067 7.11617 10.2812 8 10.2812C8.88383 10.2812 9.73158 9.93067 10.3573 9.3065L14.6667 4.99984V11.9998C14.6667 12.5303 14.456 13.039 14.0809 13.4141C13.7058 13.7891 13.1971 13.9998 12.6667 13.9998Z"
                fill="#9A77FF"
              />
            </svg>
            {{ signUpWithEmail ? 'change email' : 'change number' }}
          </button>
          <button @click="createAccount" class="md:ml-8 w-full md:mb-0 mb-6">
            <Button
              title="create account"
              stroke="white"
              type="base-button"
              base="c-button-2"
              :loading="loadings.signUp"
            />
          </button>
        </div>
        <div v-if="loginSendCodeStatus" class="w-full mt-10">
          <div @click="loginFinally" class="w-full">
            <Button
              title="login"
              stroke="white"
              type="base-button"
              base="c-button-2"
              :loading="loadings.loginLoader"
            />
          </div>
        </div>
        <div
          v-if="activeComp === 1 && !loginSendCodeStatus"
          @click="loginHandler"
        >
          <Button
            base="c-button-1"
            type="base-button"
            stroke="white"
            :title="loginStatus === 1 ? 'login now' : 'send code'"
            class="w-full mt-16"
            :loading="loadings.loginSendCodeLoader || loadings.loginLoader"
          />
        </div>
        <div @click="sendCode" class="h-max mt-16">
          <Button
            base="c-button-1"
            type="base-button"
            stroke="white"
            :title="'send code'"
            class="w-full"
            v-if="activeComp === 2 && !sendCodeStatus"
            :loading="loadings.signupSendCodeLoader"
          />
        </div>
      </div>
      <SLSlider/>
    </div>
    <NotificationCard
      :type="notif.type"
      :title="notif.title"
      :message="notif.message"
      :active="showNotif"
      @close="showNotif = false"
    />
    <!--    <NotificationCard :type="'error'" :title="'title'" :message="'message'" :active="true"/>-->
  </div>
</template>

<script>
import Login from '~/components/pages/ls/Login'
import SLSlider from '~/components/pages/ls/SLSlider'
import Signup from '~/components/pages/ls/Signup'
import Button from '~/components/elements/Button'
import TextInput from '~/components/elements/TextInput'
import LoginWithGA from '~/components/pages/ls/LoginWithGA'
import LSTabs from '~/components/pages/ls/LSTabs'
import VerificationCode from '~/components/elements/VerificationCode'
import {
  loginApi,
  loginWithUserPass,
  sendOTPCode,
  sendOTPCodeLogin,
  signupApi,
} from '~/services/api/auth'
import NotificationCard from '~/components/helper/notification/NotificationCard'

export default {
  components: {
    NotificationCard,
    VerificationCode,
    LSTabs,
    LoginWithGA,
    TextInput,
    Button,
    Signup,
    SLSlider,
    Login,
  },
  data: () => ({
    activeComp: 1,
    loginStatus: 1,
    sendCodeStatus: false,
    loginSendCodeStatus: false,
    signUpWithNumber: false,
    signUpWithEmail: true,
    signupData: {
      signEmailData: '',
    },
    loginData: {
      loginEmail: '',
    },
    timerInterval: null,
    timerStatus: false,
    timer: 120,
    minute: 0,
    second: 0,
    firstTabs: [
      {
        id: 1,
        title: 'login now',
        icon: 'login',
      },
      {
        id: 2,
        title: 'sign up',
        icon: 'sign',
      },
    ],
    secondTabs: [
      {
        id: 1,
        title: 'login by email & pass',
        icon: 'mail',
      },
      {
        id: 2,
        title: 'login by mail',
        icon: 'mail',
      },
    ],
    getVerifyCode: false,
    getVerifyCodeForLogin: false,
    otpCode: '',
    loginOTP: '',
    showNotif: false,
    notif: {
      type: '',
      title: '',
      message: '',
    },
    baseEmail: '',
    basePassword: '',
    loadings: {
      createAccountLoader: false,
      loginSendCodeLoader: false,
      loginLoader: false,
      signupSendCodeLoader: false,
      signUp: false,
    }
  }),
  methods: {
    changedTab(id) {
      if (!this.sendCodeStatus) {
        this.activeComp = id
      }
    },
    sendCodeChange() {
      this.sendCodeStatus = !this.sendCodeStatus
    },
    sendCode() {
      if (this.signUpWithEmail) {
        this.loadings.signupSendCodeLoader = true;
        sendOTPCode(this.signupData.signEmailData, (result) => {
          if (result.statusCode) {
            this.showNotif = true
            this.notif.title = 'error'
            this.notif.type = 'error'
            this.notif.message = result.message
          } else {
            this.sendCodeChange()
            this.startTimer()
            this.showNotif = true
            this.notif.title = 'success'
            this.notif.type = 'success'
            this.notif.message = "otp code sent .(it may be sent to your spam box)"
          }
          this.loadings.signupSendCodeLoader = false;
        })
      }
    },
    signupEmailChanged(data) {
      this.signupData.signEmailData = data
    },
    changedLoginStatus(id) {
      if (!this.sendCodeStatus) {
        this.loginStatus = id
      }
    },
    numberSignUp() {
      this.signUpWithNumber = !this.signUpWithNumber
      if (this.signUpWithEmail) {
        this.signUpWithEmail = false
      }
    },
    emailSignUp() {
      this.signUpWithEmail = !this.signUpWithEmail
      if (this.signUpWithNumber) {
        this.signUpWithNumber = false
      }
    },
    verifyCodeHandler(data) {
      this.otpCode = data
    },
    verifyCodeHandlerForLogin(data) {
      this.loginOTP = data
    },
    createAccount() {
      this.getVerifyCode = !this.getVerifyCode
    },
    startTimer() {
      if (this.sendCodeStatus || this.loginSendCodeStatus) {
        this.timer = 120
        this.timerStatus = true
        const interval = 1000 // 1 second
        this.timerInterval = setInterval(() => {
          if (this.timer > 0) {
            this.timer--
          } else {
            clearInterval(this.timerInterval)
            this.timerStatus = false
          }
        }, interval)
      }
    },
    formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      return `${this.padTime(minutes)} : ${this.padTime(seconds)}`
    },
    padTime(time) {
      return time.toString().padStart(2, '0')
    },
    resendCode() {
      if (this.loginSendCodeStatus) {

        sendOTPCode(this.loginData.loginEmail, () => {
        })
      } else {
        sendOTPCode(this.signupData.signEmailData, () => {
        })
      }
      this.startTimer()
    },
    changeNE() {
      this.sendCodeStatus = false
      clearInterval(this.timerInterval)
    },
    loginHandler() {
      if (this.loginStatus === 2) {
        console.log(this.loginData)
        this.loadings.loginSendCodeLoader = true;
        sendOTPCodeLogin(this.loginData.loginEmail, (data) => {
          if (!data.statusCode) {
            this.showNotif = true
            this.notif.title = 'success'
            this.notif.type = 'success'
            this.notif.message = "otp code sent .(it may be sent to your spam box)"
          } else {
            this.showNotif = true
            this.notif.title = 'error'
            this.notif.type = 'error'
            this.notif.message = "process failed"
          }
          this.loadings.loginSendCodeLoader = false;
        })
        this.loginSendCodeStatus = !this.loginSendCodeStatus
        this.startTimer()
      } else {
        this.loadings.loginLoader = true;
        loginWithUserPass(
          {email: this.baseEmail, password: this.basePassword},
          (data) => {
            if (!data.statusCode) {
              this.showNotif = true
              this.notif.title = 'success'
              this.notif.type = 'success'
              this.notif.message = data.message
              if (typeof window !== 'undefined') {
                localStorage.setItem('user', data.jwt.token)
                localStorage.setItem('user_data', JSON.stringify(data.user))
                localStorage.setItem('user_role', data.user.role)
              }
              this.$store.commit('setLogin', true)
              if (data.user.role === 'admin') {
                this.$router.push('/admin')
              } else {
                this.$router.push('/dashboard')
              }
            } else {
              this.showNotif = true
              this.notif.title = 'error'
              this.notif.type = 'error'
              this.notif.message = data.message
            }
            this.loadings.loginLoader = false;
          }
        )

      }
    },
    loginFinally() {
      this.getVerifyCodeForLogin = !this.getVerifyCodeForLogin
    },
  },
  watch: {
    otpCode() {
      if (this.otpCode) {
        this.loadings.signUp = true;
        signupApi(
          {email: this.signupData.signEmailData, code: this.otpCode},
          (data) => {
            if (data.status === 201) {
              if (typeof window !== 'undefined') {
                localStorage.setItem('user', data.jwt.token)
                this.$store.commit('setLogin', true)
                const user = {email: this.signupData.signEmailData, signup: true}
                localStorage.setItem('user_data', JSON.stringify(user))
                window.location.href = '/dashboard'
              }
            } else {
              if (data.statusCode !== 200 || data.statusCode !== 201) {
                this.showNotif = true
                this.notif.type = 'error'
                this.notif.title = 'error'
                this.notif.message = data.message
              }
            }
            this.loadings.signUp = false;
          }
        )
      }
    },
    loginOTP() {
      if (this.loginOTP) {
        this.loadings.loginLoader = true;
        loginApi(
          {email: this.loginData.loginEmail, code: this.loginOTP},
          (data) => {
            if (data.status === 201) {
              this.showNotif = true
              this.notif.type = 'success'
              this.notif.title = 'success'
              this.notif.message = 'you logged in successfully .'
              if (typeof window !== 'undefined') {
                localStorage.setItem('user', data.jwt.token)
                let user = data.user
                localStorage.setItem('user_data', JSON.stringify(user))
                localStorage.setItem('user_role', data.user.role)
                this.$store.commit('setLogin', true)
                if (data.user.role === 'admin') {
                  // this.$router.push('/admin')
                  window.location.href = '/admin'
                } else {
                  window.location.href = '/dashboard'
                }
              }
            } else {
              if (data.statusCode !== 200 || data.statusCode !== 201) {
                this.showNotif = true
                this.notif.type = 'error'
                this.notif.title = 'error'
                this.notif.message = data.message
              }
            }
            this.loadings.loginLoader = false;
          }
        )
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  },
}
</script>

<style scoped lang="scss">
.ls-container {
  gap: 74px;
  background: white;
  padding: 8px 8px 8px 32px;
  border-radius: 56px;
  margin-top: 96px;
}

.ls-timer {
  padding: 4px;
  border-radius: 50px;
  background: #fa5770;

  &-btn {
    padding: 12px 18px;
    border-radius: 50px;
    font-size: 13px;
    background: #faf7ff;
    margin-left: 24px;
    text-transform: capitalize;

    &:hover {
      background: var(--gray-bg);
      color: white;
    }
  }
}

.change-number {
  border: 1px solid var(--primary-purple);
  padding: 12px;
  border-radius: 52px;
  color: var(--primary-purple);

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: var(--primary-purple);

    path {
      fill: white;
    }

    color: white;
  }
}

.create-btns-container {
  margin-top: 120px;
}

.second-tabs {
  margin-top: 0;
  margin-bottom: 45px;
}

.input-tick-icon {
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 10;
  cursor: pointer;
}

@media screen and (max-width: 1023px) {
  .ls-container {
    padding: 12px;
  }
}

@media screen and (max-width: 767px) {
  .ls-container {
    padding: 12px;
  }
  .forget-pass {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: -16px;
  }
  .change-number {
    font-size: 10px;
  }
  .create-btns-container {
    margin-top: 68px;
  }
}
</style>
