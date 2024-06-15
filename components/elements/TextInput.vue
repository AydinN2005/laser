<template>
  <div class="input-container relative">
    <span
      class="input-container-title text-base font-bold flex items-center"
      :style="bg ? { background: `${bg} !important` } : {}"
      :class="readOnly ? 'read-only' : ''"
    >
      {{ title }}
      <strong
        v-if="required"
        class="text-base font-bold"
        style="color: red; margin-left: 4px"
      >
        *
      </strong>
    </span>
    <input
      @change="$emit('dataChanged', textInput)"
      :style="bg ? { background: `${bg} !important` } : {}"
      v-if="type !== 'select' && type !== 'desc' && type !== 'password' && type !== 'file'"
      :type="type"
      name=""
      id=""
      :placeholder="placeHolder"
      :readonly="readOnly"
      v-model="textInput"
    />
    <input
      @change="handleFileInput"
      :style="bg ? { background: `${bg} !important` } : {}"
      v-if="type === 'file'"
      type="file"
      name=""
      id=""
      :placeholder="placeHolder"
      :readonly="readOnly"
      ref="fileInput"
    />
    <input
      @change="$emit('dataChanged', textInput)"
      :style="bg ? { background: `${bg} !important` } : {}"
      v-if="type === 'password'"
      :type="eye ? 'text' : 'password'"
      name=""
      id=""
      v-model="textInput"
      :placeholder="placeHolder"
      :readonly="readOnly"
    />
    <select
      :style="bg ? { background: `${bg} !important` } : {}"
      @focusin="arrowStatus = true"
      @change="selectChanged"
      @focusout="arrowStatus = false"
      v-if="type === 'select'"
      name=""
      id=""
      v-model="selectInput"
      :disabled="readOnly"
    >
      <slot></slot>
    </select>
    <textarea
      @change="$emit('dataChanged', textInput)"
      :style="bg ? { background: `${bg} !important` } : {}"
      :placeholder="placeHolder"
      v-if="type === 'desc'"
      class="w-full"
      v-model="textInput"
      :readonly="readOnly"
    />
    <div
      v-if="type === 'select'"
      class="select-arrow absolute"
      :style="arrowStatus ? { transform: 'rotate(180deg)' } : {}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
      >
        <path
          d="M1 1L5.58579 5.58579C6.36683 6.36683 7.63316 6.36684 8.41421 5.58579L13 1"
          stroke="#303030"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <button class="search-icon" v-if="icon === 'search'" @click="$emit('searched', textInput)">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
           viewBox="0 0 20 21"
           fill="none">
        <g clip-path="url(#clip0_564_76)">
          <path
            d="M0.244833 19.3275L5.219 14.3533C3.86348 12.6955 3.19702 10.5801 3.35746 8.44464C3.51791 6.30919 4.49299 4.31711 6.08101 2.88044C7.66904 1.44376 9.74851 0.672412 11.8893 0.725938C14.0301 0.779465 16.0684 1.65377 17.5827 3.16801C19.0969 4.68225 19.9712 6.72058 20.0247 8.86137C20.0783 11.0022 19.3069 13.0816 17.8702 14.6697C16.4336 16.2577 14.4415 17.2328 12.306 17.3932C10.1706 17.5537 8.05517 16.8872 6.39734 15.5317L1.42317 20.5058C1.266 20.6576 1.0555 20.7416 0.837 20.7397C0.618502 20.7378 0.409492 20.6502 0.254986 20.4957C0.100479 20.3412 0.0128365 20.1322 0.0109386 19.9137C0.00903893 19.6952 0.0930347 19.4847 0.244833 19.3275ZM11.6673 15.75C12.9859 15.75 14.2748 15.359 15.3711 14.6265C16.4675 13.8939 17.3219 12.8527 17.8265 11.6346C18.3311 10.4164 18.4631 9.07594 18.2059 7.78273C17.9487 6.48953 17.3137 5.30164 16.3814 4.36929C15.449 3.43694 14.2611 2.802 12.9679 2.54477C11.6747 2.28753 10.3343 2.41955 9.11611 2.92414C7.89794 3.42872 6.85675 4.28321 6.1242 5.37953C5.39166 6.47586 5.00067 7.76479 5.00067 9.08334C5.00265 10.8508 5.70567 12.5454 6.95548 13.7952C8.2053 15.045 9.89983 15.748 11.6673 15.75Z"
            fill="#565656"/>
        </g>
        <defs>
          <clipPath id="clip0_564_76">
            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0.75)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <div v-if="type === 'password'" class="eye-container">
      <img loading="lazy" v-if="eye" @click="hideEye" src="~/assets/images/img/eye1.svg" width="20"
           height="20" alt=""/>
      <img loading="lazy" v-if="!eye" @click="showEye" src="~/assets/images/img/eye2.svg" width="20"
           height="20" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'placeHolder', 'type', 'required', 'bg', 'icon', 'readOnly', 'data', 'disabled'],
  data: () => ({
    arrowStatus: false,
    eye: false,
    textInput: '',
    selectInput: '',
    fileData: ''
  }),
  mounted() {
    this.setData()
  },
  methods: {
    hideEye() {
      this.eye = false;
    },
    showEye() {
      this.eye = true;
    },
    setData() {
      this.textInput = this.data
    },
    selectChanged() {
      this.arrowStatus = false;
      this.$emit('dataChanged', this.selectInput)
    },
    handleFileInput() {
      this.fileData = this.$refs.fileInput.files[0]
      this.$emit('dataChanged', this.fileData)
    }
  },
  watch: {
    data() {
      this.setData()
    },
    textInput() {
      if (this.textInput === "") {
        this.$emit('searched', this.textInput)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input-container {
  width: 100%;
  min-height: 52px;

  input,
  select,
  textarea {
    border-radius: 50px;
    border: 1px solid var(--input-border);
    padding: 21px 32px 12px 32px;
    background: var(--primary-bg);
    width: 100%;
    min-width: 100%;
    font-size: 14px;
    text-transform: none;
    min-height: 52px;

    &:focus {
      outline: none;
      box-shadow: -3px 3px 0px 0px #303030;
    }

    &:read-only {
      border-color: #AAAAAA;
    }
  }

  span {
    background: var(--primary-bg);
    padding: 2px 8px;
    color: var(--input-border);
    position: absolute;
    top: -12px;
    left: 28px;
  }

  select {
    /* for Firefox */
    -moz-appearance: none;
    /* for Safari, Chrome, Opera */
    -webkit-appearance: none;
    width: 100%;
  }

  select::-ms-expand {
    display: none;
  }

  &:hover {
    input,
    select,
    textarea {
      box-shadow: -3px 3px 0px 0px #303030;
    }
  }

  .select-arrow {
    top: 26px;
    right: 24px;
  }

  textarea {
    resize: none;
    height: 160px;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: var(--input-border) var(--box-bg);

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--input-border);
      outline: 1px solid slategrey;
    }
  }

  .read-only {
    color: #AAAAAA;
  }

  .search-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 10px;
    background: var(--primary-purple);
    border-radius: 50%;
    cursor: pointer;

    path {
      fill: white;
    }

    &:hover {
      background: var(--gray-bg);
    }
  }

  .eye-container {
    position: absolute;
    top: 20px;
    right: 16px;
    z-index: 99;
    cursor: pointer;
  }
}
</style>
