<template>
  <div class="flex flex-col items-center profile">
    <img loading="lazy" src="~/assets/images/img/profileBg.webp" class="profile-bg lg:block hidden" alt=""/>
    <img loading="lazy" src="~/assets/images/img/profileTabletBg.webp" class="profile-bg lg:hidden" alt=""/>
    <div
      class="flex md:flex-row-reverse flex-col lg:flex-col items-center md:w-full lg:w-max md:justify-between lg:justify-start">
      <div class="flex flex-col items-center md:flex-row-reverse lg:flex-col">
        <div class="profile-avatar md:ml-4 lg:ml-0 lg:mr-0 md:mr-10">
          <img loading="lazy" src="~/assets/images/img/avatar.webp" width="88" height="88" style="border-radius: 50%"
               alt=""/>
        </div>
        <div class="flex flex-col lg:items-center md:items-end items-center">
          <strong class="text-xl font-bold block mb-2">
            {{ data.writer }}
          </strong>
          <span class="profile-role">
      blogs writer
    </span>
        </div>
      </div>
      <div class="md:ml-4 lg:ml-0 flex lg:flex-col md:flex-col-reverse flex-col items-center">
      <span class="flex items-center text-sm mt-6">
        <svg class="mr-2" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_685_36)">
<path
  d="M13.1667 1.73629H12.5V1.06962C12.5 0.701621 12.2013 0.402954 11.8333 0.402954C11.4653 0.402954 11.1667 0.701621 11.1667 1.06962V1.73629H5.83333V1.06962C5.83333 0.701621 5.53467 0.402954 5.16667 0.402954C4.79867 0.402954 4.5 0.701621 4.5 1.06962V1.73629H3.83333C1.99533 1.73629 0.5 3.23162 0.5 5.06962V13.0696C0.5 14.9076 1.99533 16.403 3.83333 16.403H13.1667C15.0047 16.403 16.5 14.9076 16.5 13.0696V5.06962C16.5 3.23162 15.0047 1.73629 13.1667 1.73629ZM3.83333 3.06962H13.1667C14.2693 3.06962 15.1667 3.96695 15.1667 5.06962V5.73629H1.83333V5.06962C1.83333 3.96695 2.73067 3.06962 3.83333 3.06962ZM13.1667 15.0696H3.83333C2.73067 15.0696 1.83333 14.1723 1.83333 13.0696V7.06962H15.1667V13.0696C15.1667 14.1723 14.2693 15.0696 13.1667 15.0696ZM11.1667 11.0696C11.1667 11.4376 10.868 11.7363 10.5 11.7363H6.5C6.132 11.7363 5.83333 11.4376 5.83333 11.0696C5.83333 10.7016 6.132 10.403 6.5 10.403H10.5C10.868 10.403 11.1667 10.7016 11.1667 11.0696Z"
  fill="#3D3948"/>
</g>
<defs>
<clipPath id="clip0_685_36">
<rect width="16" height="16" fill="white" transform="translate(0.5 0.402954)"/>
</clipPath>
</defs>
</svg>
        {{ data.date }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style scoped lang="scss">
.profile {
  background: #F6F0FF;
  border-radius: 56px;
  padding: 8px 8px 24px 8px;

  &-bg {
    border-radius: 48px 48px 24px 24px;
    width: 100%;
    height: 100px;
  }

  &-avatar {
    padding: 2px;
    border-radius: 50%;
    background: #F6F0FF;
    position: relative;
    top: -20px;
  }

  &-role {
    color: #9E7EFB;
  }

  &-btn-1, &-btn-2 {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
  }

  &-btn-1 {
    background: var(--gray-bg);
    box-shadow: 0 0 6px 0 rgba(#3D3948, 16%), 2px 2px 16px 0 rgba(#fff, 12%) inset;

    &:hover {
      background: white;

      path {
        fill: var(--gray-bg);
      }
    }
  }

  &-btn-2 {
    background: var(--primary-bg);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);

    &:hover {
      background: var(--gray-bg);

      path {
        fill: white;
      }
    }
  }
}
</style>
