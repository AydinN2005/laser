<template>
  <div class="booking flex flex-col justify-between h-max">
    <div class="flex flex-col booking-title">
      <h3>
        do you want
      </h3>
      <h2>
        book appointment for yourself now ?
      </h2>
    </div>
    <div class="flex flex-col mt-11">
      <div class="flex items-center w-full justify-between">
        <div class="flex items-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z"
                  fill="#3D3948"/>
          </svg>
          <span class="text-sm ml-2">
            price:
          </span>
        </div>
        <span class="booking-value ml-3">
          {{data.price}}
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
.booking {
  padding: 24px 16px;
  border-radius: 32px;
  background: #F6F0FF;
  border: 1px solid white;

  &-title {
    h3 {
      font-size: 20px;
    }

    h2 {
      font-size: 28px;
      font-weight: bold;
    }
  }

  &-value {
    color: #FA5770;
  }

  &-btn {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background: var(--gray-bg);
    box-shadow: 0px 6px 6px 0px rgba(#3D3948, 16%);
    color: white;
    text-transform: capitalize;
  }
}
</style>
