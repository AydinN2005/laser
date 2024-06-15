<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-between ga">
      <div class="ga-box">
        <img loading="lazy"     src="~/assets/images/img/google.webp" alt="" />
        <span class="text-sm md:text-base ml-3">
        login with google account
      </span>
      </div>
      <div class="ga-box ml-8">
        <img loading="lazy"     src="~/assets/images/img/apple.webp" alt="" />
        <span class="text-sm md:text-base ml-3">
        login with apple account
      </span>
      </div>
    </div>
    <img loading="lazy"     src="~/assets/images/img/or.svg" class="mt-8 mb-12" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.ga {
  &-box {
    padding: 18px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-bg);
    border-radius: 56px;
    background: white;
    cursor: pointer;
    width: 100%;

    span {
      color: #AAAAAA;
    }

    &:hover {
      span {
        color: black;
      }

      box-shadow: -3px 4px 0 0 var(--gray-bg);
    }
  }
}

@media screen and (max-width: 1164px) {
  .ga {
    flex-direction: column;

    &-box {
      &:last-child {
        margin-left: 0;
        margin-top: 32px;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .ga {
    flex-direction: row;

    &-box {
      &:last-child {
        margin-left: 32px;
        margin-top: 0;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .ga {
    flex-direction: column;

    &-box {
      &:last-child {
        margin-left: 0;
        margin-top: 24px;
      }
    }
  }
}
</style>
