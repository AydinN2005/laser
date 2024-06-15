<template>
  <div class="a-navbar flex items-center justify-between">
    <div class="a-navbar-icon lg:hidden" @click="$emit('showSidebar')">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_735_445)">
          <path
            d="M16 2.33334C16 2.88668 15.5533 3.33334 15 3.33334H1C0.446667 3.33334 0 2.88668 0 2.33334C0 1.78001 0.446667 1.33334 1 1.33334H15C15.5533 1.33334 16 1.78001 16 2.33334ZM4.33333 13.3333H1C0.446667 13.3333 0 13.78 0 14.3333C0 14.8867 0.446667 15.3333 1 15.3333H4.33333C4.88667 15.3333 5.33333 14.8867 5.33333 14.3333C5.33333 13.78 4.88667 13.3333 4.33333 13.3333ZM9.66667 7.33334H1C0.446667 7.33334 0 7.78001 0 8.33334C0 8.88668 0.446667 9.33334 1 9.33334H9.66667C10.22 9.33334 10.6667 8.88668 10.6667 8.33334C10.6667 7.78001 10.22 7.33334 9.66667 7.33334Z"
            fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_735_445">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <span class="a-navbar-un">
      {{ user.first_name }} {{ user.last_name }}
    </span>
    <span class="a-navbar-dropdown-link" @click="logout">
            logout
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      first_name: '',
      last_name: ''
    }
  }),
  mounted() {
    if (typeof window !== 'undefined') {
      const admin = JSON.parse(localStorage.getItem('user_data'))
      this.user.first_name = admin.first_name
      this.user.last_name = admin.last_name
    }
  },
  methods: {
    logout() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('user_data')
        localStorage.removeItem('user_role')
        localStorage.removeItem('refresh')
        this.$router.push('/loginsignup')
        this.$store.commit('setLogin', false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.a-navbar {
  border-radius: 74px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.74);
  padding: 0 16px;

  &-un {
    font-size: 20px;
    color: var(--gray-bg);
  }

  &-box {
    padding: 16px 0;
    cursor: pointer;

    &:hover {
      .a-navbar-dropdown {
        z-index: 90;
        opacity: 1;
      }

      .a-navbar-arrow {
        transform: rotate(180deg);
      }
    }
  }

  &-dropdown {
    border-radius: 24px !important;
    background: #FAF7FF !important;
    border: 1px solid white;
    position: absolute;
    z-index: 999;
    width: max-content;
    top: 54px;
    right: 0;
    opacity: 0;
    z-index: -3;

    &-link {
      font-size: 13px;
      padding: 12px 16px;
      border-radius: 100px;
      cursor: pointer;
      display: block;
      //width: 100%;
      color: var(--primary-red);

      &:hover, &-active {
        background: var(--primary-red);
        color: white;
      }
    }
  }

  &-icon {
    padding: 12px;
    border-radius: 50%;
    background: var(--primary-purple);
  }
}

@media screen and (max-width: 1023px) {
  .a-navbar {
    padding: 0 4px;

    &-un {
      font-size: 14px;
    }
  }
}
</style>
