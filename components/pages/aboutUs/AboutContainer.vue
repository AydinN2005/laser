<template>
  <div class="relative about flex items-center justify-center flex-col overflow-hidden">
    <img loading="lazy"     src="~/assets/images/img/aboutHero.webp" class="absolute w-full top-0 left-0 about-img" alt="" />
    <div class="c-container flex flex-col items-center">
      <div class="about-title">
        <div class="about-title-bg-1"></div>
        <div class="about-title-bg-2"></div>
        <h2 class="about-title-box py-6 px-12">
          ABOUT US
        </h2>
      </div>
      <div class="about-desc-container flex flex-col items-center justify-center relative">
        <img loading="lazy"     src="~/assets/images/img/aboutDesc.webp" class="absolute top-0 left-0 w-full h-full about-desc-bg" alt="" />
        <p class="about-desc">
          With over seven years of experience in the beauty and medical aesthetics industry, Azita is a seasoned
          professional dedicated to providing top-notch services. In 2016, she earned her Laser Hair Removal Technician
          certificate from the Toronto School of Aesthetics uptown, marking a pivotal moment in her career. Azita has honed her
          skills by working in various locations, ultimately establishing her own clinic in 2022. What sets Azita apart
          is her unwavering commitment to ensuring her clients feel both comfortable and secure during their sessions.
          Her passion extends beyond technical expertise; she thrives on building long-lasting relationships with
          clients, fostering a warm and friendly environment for exceptional service.
        </p>
        <img loading="lazy"     src="~/assets/images/img/aboutFlower1.webp" class="about-desc-img-1" alt="" />
        <img loading="lazy"     src="~/assets/images/img/aboutFlower1.webp" class="about-desc-img-5" alt="" />
        <img loading="lazy"     src="~/assets/images/img/aboutFlower2.webp" class="about-desc-img-2" alt="" />
        <img loading="lazy"     src="~/assets/images/img/aboutFlower2.webp" class="about-desc-img-3" alt="" />
        <img loading="lazy"     src="~/assets/images/img/aboutFlower2.webp" class="about-desc-img-4" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.about {
  margin-top: 180px;
  padding-top: 50px;
  min-height: 330px;

  &-img {
    top: -70px;
  }

  &-title {
    width: max-content;
    position: relative;

    &-bg-1, &-bg-2 {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 100px;
    }

    &-bg-1 {
      background: #C2ADFF;
      transform: rotate(3deg);
      z-index: 9;
    }

    &-bg-2 {
      background: #DFD3FF;
      transform: rotate(6deg);
      z-index: 8;
    }

    &-box {
      font-size: 48px;
      border-radius: 100px;
      background: var(--primary-purple);
      color: white;
      position: relative;
      z-index: 10;
    }
  }

  &-desc {
    font-size: 20px;
    text-align: center;
    max-width: 700px;
    line-height: 46px !important;

    &-bg {
      top: -20px;
    }

    &-container {
      width: 80%;
      padding: 48px 80px;
      padding-bottom: 104px;
      height: max-content;
      position: relative;
      z-index: 4;
    }

    &-img-3, &-img-4, &-img-5 {
      display: none;
    }

    &-img-1 {
      position: absolute;
      left: -100px;
      max-width: 250px;
    }

    &-img-2 {
      position: absolute;
      right: -100px;
      max-width: 250px;
    }
  }
}

@media screen and (max-width: 1150px) {
  .about {
    &-desc {
      &-img-1, &-img-2 {
        max-width: 180px;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .about {
    &-title {
      &-box {
        font-size: 36px;
      }
    }

    &-desc {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 767px) {
  .about {
    margin-top: 70px;
    padding-top: 50px;

    &-img {
      top: -40px;
    }

    &-title {
      &-box {
        padding: 20px 40px;
        font-size: 32px;
      }
    }

    &-desc {
      font-size: 13px;

      &-img-3, &-img-4, &-img-5 {
        position: absolute;
        display: block;
      }

      &-img-1, &-img-2, &-img-3, &-img-4, &-img-5 {
        max-width: 50px;
      }

      &-img-2 {
        top: 0;
        right: -20px;
      }

      &-img-1 {
        bottom: 130px;
        top: unset;
        left: -10px;
      }

      &-img-3 {
        top: 42%;
        right: -20px;
      }

      &-img-4 {
        bottom: 30px;
        right: 10px;
      }

      &-img-5 {
        top: 25%;
        left: -20px;
      }

      &-container {
        padding: 40px 40px;
        padding-bottom: 80px;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .about {
    &-img {
      top: 0px;
    }
  }
}
</style>
