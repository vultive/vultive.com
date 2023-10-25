<script setup>
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

const jobs = [
  {
    name: "Front-end Web Developer",
    type: "Full Time",
    location: "Remote",
  },
];
</script>

<template>
  <section class="uk-section uk-section-muted uk-section-small">
    <div class="uk-container uk-container-small uk-text-center">
      <h1 class="uk-text-bold uk-margin-remove-top ">{{ $t("section.work_with_us.title") }}</h1>
      <p class="uk-margin-large-bottom">{{ $t("section.work_with_us.text", { num: jobs.length }) }}</p>
      <div class="uk-child-width-1-3@m uk-grid uk-grid-small uk-flex-center"
        data-uk-scrollspy="cls: uk-animation-scale-down; target: > div; delay: 100" uk-grid>
        <template v-for="job in jobs" v-bind:key="job.name">
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <div class="uk-card-badge uk-label uk-label-danger uk-text-bold uk-border-rounded">
                {{ job.location }}
              </div>
              <h3 class="uk-card-title uk-text-bold uk-text-uppercase">
                {{ job.name }}
              </h3>
              <p>{{ job.type }}</p>
              <a class="uk-button uk-button-danger uk-button-small uk-border-rounded uk-text-bold"
                :href="'mailto:careers@vultive.com?subject=' + job.name" aria-label="Apply">
                {{ $t("section.work_with_us.apply") }}
              </a>
            </div>
          </div>
        </template>
      </div>
      <AppAds/>
    </div>
  </section>
</template>