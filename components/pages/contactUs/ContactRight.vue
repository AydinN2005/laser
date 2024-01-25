<template>
  <div class="flex flex-col right">
    <img src="~/assets/images/img/contactUs.png" class="mb-2" alt="">
    <div class="relative">
      <div class="right-bg-1"></div>
      <div class="right-bg-2"></div>
      <div class="right-card p-8 relative z-10">
        <div class="flex flex-col">
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="bg-white p-2.5" style="border-radius: 50%">
                <img src="~/assets/images/icons/phone-call.svg" alt="">
              </div>
              <span class="text-xl font-normal text-white ml-3">
              965 - 895 -955
            </span>
            </div>
            <div class="flex items-center">
              <div class="bg-white p-2.5" style="border-radius: 50%">
                <img src="~/assets/images/icons/mail.svg" alt="">
              </div>
              <span class="text-xl font-normal text-white ml-3">
              2daylaser clinic@yahoo.com
            </span>
            </div>
          </div>
          <div class="flex items-center mt-4">
            <div class="bg-white p-2.5" style="border-radius: 50%">
              <img src="~/assets/images/icons/location.svg" alt="">
            </div>
            <span class="text-xl font-normal text-white ml-3">
              1325 Eglinton Ave East, Unit 212AOshawa: 633 King St.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.right {
  &-bg-1, &-bg-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  &-bg-1 {
    background: var(--primary-purple);
    transform: rotate(2deg);
  }

  &-bg-2 {
    background: var(--box-bg);
    transform: rotate(-2deg);
  }

  &-card {
    border-radius: 50px;
    background: var(--gray-bg);
    box-shadow: 2px 2px 20px 0px rgba(255, 255, 255, 0.16) inset;
  }
}
</style>
