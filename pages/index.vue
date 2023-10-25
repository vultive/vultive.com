<template>
  <section class="uk-section uk-section-muted uk-section-small">
    <div class="uk-container uk-text-center">
      <span class="uk-text-danger uk-text-bold">{{ $t("section.reasons.title") }}</span>
      <h2 class="uk-text-bold uk-margin-large-bottom uk-margin-remove-top">
        {{ $t("section.reasons.text") }}
      </h2>
      <div class="v-reasons uk-child-width-1-3@m uk-grid uk-grid-small uk-grid-match"
        data-uk-scrollspy="cls: uk-animation-scale-down; target: > div; delay: 100" uk-grid>
        <div class="uk-transition-toggle">
          <div class="uk-card uk-card-default uk-card-body uk-transition-scale-up uk-transition-opaque">
            <div class="v-reasons__icon uk-border-circle">
              <span uk-icon="icon: calendar; ratio: 2"></span>
            </div>
            <h3 class="uk-card-title uk-text-bold uk-margin-small-top uk-text-uppercase">
              {{ $t("section.reasons.regular_updates.title") }}
            </h3>
            <p>
              {{ $t("section.reasons.regular_updates.text") }}
            </p>
          </div>
        </div>
        <div class="uk-transition-toggle">
          <div class="uk-card uk-card-default uk-card-body uk-transition-scale-up uk-transition-opaque">
            <div class="v-reasons__icon uk-border-circle">
              <span uk-icon="icon: lifesaver; ratio: 2"></span>
            </div>
            <h3 class="uk-card-title uk-text-bold uk-margin-small-top uk-text-uppercase">
              {{ $t("section.reasons.efficient_support.title") }}
            </h3>
            <p>
              {{ $t("section.reasons.efficient_support.text") }}
            </p>
          </div>
        </div>
        <div class="uk-transition-toggle">
          <div class="uk-card uk-card-default uk-card-body uk-transition-scale-up uk-transition-opaque">
            <div class="v-reasons__icon uk-border-circle">
              <span uk-icon="icon: lock; ratio: 2"></span>
            </div>
            <h3 class="uk-card-title uk-text-bold uk-margin-small-top uk-text-uppercase">
              {{ $t("section.reasons.data_security.title") }}
            </h3>
            <p>
              {{ $t("section.reasons.data_security.text") }}
            </p>
          </div>
        </div>
      </div>
      <AppAds />
    </div>
  </section>

  <section class="uk-section uk-section-default uk-section-small" id="products">
    <div class="uk-container uk-text-center">
      <span class="uk-text-danger uk-text-bold uk-text-capitalize">{{ $t("section.products.title") }}</span>
      <h1 class="uk-text-bold uk-margin-remove">
        {{ $t("section.products.text") }}
      </h1>
    </div>
  </section>

  <section class="uk-section uk-section-default">
    <AppHero image="/images/illustrations/video.svg" label="Licast" :title="$t('service.licast.title')"
      contentClass="uk-flex-last@m" buttonUrl="https://licast.space" :buttonText="$t('service.licast.button')">
      <template v-slot:text>
        {{ $t("service.licast.text") }}
      </template>
    </AppHero>
  </section>

  <section class="uk-section uk-section-default">
    <AppHero image="/images/illustrations/explore.svg" label="Learn" :title="$t('service.learn.title')"
      buttonUrl="https://learn.vultive.com" :buttonText="$t('service.learn.button')">
      <template v-slot:text>
        {{ $t("service.learn.text") }}
      </template>
    </AppHero>
  </section>

  <section class="uk-section uk-section-muted uk-section-small" id="news">
    <div class="uk-container uk-container-xsmall uk-text-center"> <span class="uk-text-danger uk-text-bold">{{
      $t("section.news.title") }}</span>
      <h2 class="uk-text-bold uk-margin-large-bottom uk-margin-remove-top">
        {{ $t("section.news.text") }}
      </h2>
      <PostList />
    </div>
  </section>
</template>
