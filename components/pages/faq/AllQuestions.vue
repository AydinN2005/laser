<template>
  <div class="c-container flex flex-col items-center questions">
    <div class="title-box">
      <span></span>
      all question
    </div>
    <h2 class="questions-title flex items-center mb-6">
      all questions
      <h3>
        about 2day laser & skin care clinkc
      </h3>
    </h2>
    <!-- <FaqTabs class="mt-6 mb-14 md:mb-16" :data="tabs" @changed="handleChangedTab"/> -->
    <AboutUsQuestions :questions="questions"/>
  </div>
</template>

<script>
import FaqTabs from "~/components/pages/faq/FaqTabs";
import AboutUsQuestions from "~/components/pages/faq/AboutUsQuestions";
import {getAllFaq} from "~/services/api/admin/faq";

export default {
  components: {AboutUsQuestions, FaqTabs},
  data: () => ({
    tabs: [
      {
        id: 1,
        title: "about us"
      },
      {
        id: 2,
        title: "treatment"
      },
      {
        id: 3,
        title: "other"
      }
    ],
    activeTab: 1,
    questions: []
  }),
  mounted() {
    getAllFaq((data) => {
      this.questions = data.FAQs
    })
  },
  methods: {
    handleChangedTab(id) {
      this.activeTab = id;
    }
  }
}
</script>

<style scoped lang="scss">
.questions {
  &-title {
    font-size: 32px;
    font-weight: 600;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-left: 8px;
    }
  }
}

@media screen and (max-width: 767px) {
  .questions {
    &-title {
      flex-direction: column;
      font-size: 24px;

      h3 {
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>
