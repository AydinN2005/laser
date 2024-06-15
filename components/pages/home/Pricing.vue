<template>
  <div :class="size < 1024 ? '' : 'c-container'">
    <div class="relative">
      <div class="pricing-bg-1"></div>
      <div class="pricing-bg-2"></div>
      <div class="pricing flex flex-col items-center">
        <div class="title-box-white">
          <span></span>
          pricing
        </div>
        <div class="flex flex-col">
          <h3 class="section-title-1 text-center text-white">
            Compare Laser Hair Removal to
          </h3>
          <h2 class="section-title-2 text-center text-white">
            Shaving and Waxing
          </h2>
        </div>
        <div class="lg:grid hidden grid-cols-3 pricing-cards">
          <div
            class="pricing-card flex flex-col relative"
          >
            <div class="pricing-card-type">gold guarantee</div>
            <div class="flex flex-col">
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
              </div>
              <div class="flex items-start">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
              </div>
              <img loading="lazy"
                  src="~/assets/images/img/dashedBorder.webp"
                alt=""
                class="my-8"
              />


              <div class="absolute pricing-card-price-triangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="21"
                  viewBox="0 0 35 21"
                  fill="none"
                >
                  <path
                    d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                    fill="#706986"
                  />
                </svg>
              </div>
              <div class="absolute pricing-card-price">
                <div class="relative flex flex-col items-center">
                  <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                  <!--                       alt="" />-->
                  <div
                    class="flex flex-col items-center pricing-card-price-inner relative z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span
                      class="flex flex-col items-center my-1 pricing-card-price-text"
                    >
                      <span>
                        new
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pricing-card flex flex-col relative"
          >
            <div class="pricing-card-type">gold guarantee</div>
            <div class="flex flex-col">
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
              </div>
              <div class="flex items-start">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
              </div>
              <img loading="lazy"
                  src="~/assets/images/img/dashedBorder.webp"
                alt=""
                class="my-8"
              />


              <div class="absolute pricing-card-price-triangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="21"
                  viewBox="0 0 35 21"
                  fill="none"
                >
                  <path
                    d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                    fill="#706986"
                  />
                </svg>
              </div>
              <div class="absolute pricing-card-price">
                <div class="relative flex flex-col items-center">
                  <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                  <!--                       alt="" />-->
                  <div
                    class="flex flex-col items-center pricing-card-price-inner relative z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span
                      class="flex flex-col items-center my-1 pricing-card-price-text"
                    >
                      <span>
                        new
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pricing-card flex flex-col relative"
          >
            <div class="pricing-card-type">gold guarantee</div>
            <div class="flex flex-col">
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
              </div>
              <div class="flex items-start mb-8">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
              </div>
              <div class="flex items-start">
                <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
              </div>
              <img loading="lazy"
                  src="~/assets/images/img/dashedBorder.webp"
                alt=""
                class="my-8"
              />


              <div class="absolute pricing-card-price-triangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="21"
                  viewBox="0 0 35 21"
                  fill="none"
                >
                  <path
                    d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                    fill="#706986"
                  />
                </svg>
              </div>
              <div class="absolute pricing-card-price">
                <div class="relative flex flex-col items-center">
                  <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                  <!--                       alt="" />-->
                  <div
                    class="flex flex-col items-center pricing-card-price-inner relative z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span
                      class="flex flex-col items-center my-1 pricing-card-price-text"
                    >
                      <span>
                        new
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_128_380)">
                        <path
                          d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_128_380"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset/>
                          <feGaussianBlur stdDeviation="4"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_128_380"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_128_380"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-full">
          <Slider
            :auto-play="false"
            class="lg:hidden"
            :items="1.5"
            :center="true"
            :loop="true"
            :margin="24"
            :dots="true"
            :nav="false"
            :responsive="{0: {items: 1.1, margin: 12} ,768: {items: 1.5}}"
          >
            <div
              class="pricing-card flex flex-col relative"
            >
              <div class="pricing-card-type">gold guarantee</div>
              <div class="flex flex-col">
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
                </div>
                <div class="flex items-start">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
                </div>
                <img loading="lazy"
                    src="~/assets/images/img/dashedBorder.webp"
                  alt=""
                  class="my-8"
                />


                <div class="absolute pricing-card-price-triangle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="21"
                    viewBox="0 0 35 21"
                    fill="none"
                  >
                    <path
                      d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                      fill="#706986"
                    />
                  </svg>
                </div>
                <div class="absolute pricing-card-price">
                  <div class="relative flex flex-col items-center">
                    <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                    <!--                       alt="" />-->
                    <div
                      class="flex flex-col items-center pricing-card-price-inner relative z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span
                        class="flex flex-col items-center my-1 pricing-card-price-text"
                      >
                      <span>
                        new
                      </span>
                    </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pricing-card flex flex-col relative"
            >
              <div class="pricing-card-type">gold guarantee</div>
              <div class="flex flex-col">
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
                </div>
                <div class="flex items-start">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
                </div>
                <img loading="lazy"
                    src="~/assets/images/img/dashedBorder.webp"
                  alt=""
                  class="my-8"
                />


                <div class="absolute pricing-card-price-triangle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="21"
                    viewBox="0 0 35 21"
                    fill="none"
                  >
                    <path
                      d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                      fill="#706986"
                    />
                  </svg>
                </div>
                <div class="absolute pricing-card-price">
                  <div class="relative flex flex-col items-center">
                    <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                    <!--                       alt="" />-->
                    <div
                      class="flex flex-col items-center pricing-card-price-inner relative z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span
                        class="flex flex-col items-center my-1 pricing-card-price-text"
                      >
                      <span>
                        new
                      </span>
                    </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pricing-card flex flex-col relative"
            >
              <div class="pricing-card-type">gold guarantee</div>
              <div class="flex flex-col">
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  permanent reduction
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Trained professional performing your treatment
                </span>
                </div>
                <div class="flex items-start mb-8">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  Unlimited treatments for one price
                </span>
                </div>
                <div class="flex items-start">
                  <img loading="lazy"     src="~/assets/images/icons/tick.svg" alt="" class="mr-3"/>
                  <span class="text-white font-bold text-base">
                  A lifetime of touch-ups included
                </span>
                </div>
                <img loading="lazy"
                    src="~/assets/images/img/dashedBorder.webp"
                  alt=""
                  class="my-8"
                />


                <div class="absolute pricing-card-price-triangle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="21"
                    viewBox="0 0 35 21"
                    fill="none"
                  >
                    <path
                      d="M17.5 0L34.3875 20.25H0.612505L17.5 0Z"
                      fill="#706986"
                    />
                  </svg>
                </div>
                <div class="absolute pricing-card-price">
                  <div class="relative flex flex-col items-center">
                    <!--                  <img loading="lazy"     src="~/assets/images/img/priceBg.webp" class="absolute pricing-card-price-img w-full h-full"-->
                    <!--                       alt="" />-->
                    <div
                      class="flex flex-col items-center pricing-card-price-inner relative z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <span
                        class="flex flex-col items-center my-1 pricing-card-price-text"
                      >
                      <span>
                        new
                      </span>
                    </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_128_380)">
                          <path
                            d="M11 8L11.8103 10.1897L14 11L11.8103 11.8103L11 14L10.1897 11.8103L8 11L10.1897 10.1897L11 8Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_128_380"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_128_380"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_128_380"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/helper/Slider'

export default {
  components: {Slider},
  data: () => ({
    size: 0,
  }),
  mounted() {
    this.setSize()
    window.addEventListener('resize', () => {
      this.setSize()
    })
  },
  methods: {
    setSize() {
      this.size = window.innerWidth
    },
  },
}
</script>

<style scoped lang="scss">
.pricing {
  background: var(--gray-bg);
  border-radius: 56px;
  box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16),
  -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
  2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
  padding: 40px 40px 46px 40px;
  position: relative;
  z-index: 4;

  &-bg-1 {
    background: var(--box-bg);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 56px;
    transform: rotate(-2deg);
    box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16),
    -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
    2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
  }

  &-bg-2 {
    background: var(--primary-purple);
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0px 8px 12px 0px rgba(61, 57, 72, 0.16),
    -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
    2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
    border-radius: 56px;
    transform: rotate(2deg);
  }

  &-cards {
    margin-top: 76px;
    gap: 30px;
  }

  &-card {
    border-radius: 32px;
    border: 1px solid #a29fab;
    background: #635d74;
    padding: 28px 24px 22px 24px;
    cursor: pointer;

    &:hover {
      border-color: var(--primary-purple);
      box-shadow: 0px 12px 36px 0px rgba(154, 119, 255, 0.32);
    }

    &:hover &-btn {
      background: var(--primary-purple);
      box-shadow: 0px 8px 12px 0px rgba(154, 119, 255, 0.24),
      -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
      2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
    }

    &:hover &-price {
      background: url('~/assets/images/img/priceBgPurple.webp') center center/cover;

      &-triangle {
        path {
          fill: var(--primary-purple);
        }
      }
    }

    &-type {
      border-radius: 16px;
      background: #fff;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
      padding: 12px 24px;
      color: var(--text-color);
      width: max-content;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 60px;
    }

    &-price {
      top: -25px;
      right: 32px;
      padding: 18px 10px;
      padding-top: 12px;
      padding-bottom: 40px;
      height: max-content;
      background: url('~/assets/images/img/priceBg.webp') center center/cover;

      &-triangle {
        top: -21px;
        right: 76px;
      }

      &-img {
      }

      &-inner {
        position: relative;

        svg {
          position: absolute;

          &:first-child {
            top: -10px;
          }

          &:last-child {
            bottom: -16px;
          }
        }
      }

      &-text {
        font-size: 10px;
        font-weight: 400;

        span {
          color: white;

          &:first-child {
            font-size: 20px;
            font-weight: 500;
          }
        }
      }
    }

    &-btn {
      border-radius: 100px;
      background: #a29fab;
      box-shadow: -1px -1px 12px 0px rgba(0, 0, 0, 0.04) inset,
      2px 2px 28px 0px rgba(255, 255, 255, 0.2) inset;
      padding: 12px 0;
      width: 100%;
    }
  }
}

@media screen and (max-width: 1023px) {
  .pricing {
    border-radius: 0;
    box-shadow: unset;
    padding: 32px 0;

    &-bg-1,
    &-bg-2 {
      transform: rotate(0);
      box-shadow: unset;
      top: unset;
    }

    &-bg-1 {
      height: 107%;
      top: -25px;
      width: 90%;
      left: 5%;
    }

    &-bg-2 {
      height: 103%;
      top: -10px;
    }

    .section-title-1 {
      font-size: 32px;
    }

    .section-title-2 {
      font-size: 48px;
    }

    &-card {
      img {
        width: 16px;
        height: 16px;
        max-width: 16px;
      }
    }

    &-divider {
      width: 100% !important;
      max-width: 100% !important;
      height: unset !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .pricing {
    .section-title-1 {
      font-size: 16px;
    }

    .section-title-2 {
      font-size: 24px;
      margin-bottom: 40px;
    }

    &-card {
      padding: 24px 16px;
      min-height: 486px;

      &-type {
        font-size: 16px;
      }
    }
  }
  .dashed-border{
    height: unset !important;
    max-width: unset !important;
  }
}
</style>
