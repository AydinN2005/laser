<template>
  <div class="a-navbar flex items-center justify-between">
    <span class="a-navbar-un">
      aydin noroozi
    </span>
    <div class="flex items-center relative a-navbar-box">
      <img src="~/assets/admin/icons/user.svg" alt="">
      <img src="~/assets/admin/icons/arrow-down.svg" class="ml-3 a-navbar-arrow" alt="">
      <div class="a-navbar-dropdown p-2">
        <div class="grid grid-cols-1 gap-6 w-full">
          <span class="a-navbar-dropdown-link">
            logout
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
      .a-navbar-arrow{
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
      width: 100%;

      &:hover, &-active {
        background: var(--primary-red);
        color: white;
      }
    }
  }
}
</style>
