<template>
  <header>
    <nav class="uk-navbar-container uk-navbar-transparent uk-position-top">
      <div class="uk-container">
        <div uk-navbar>
          <div class="uk-navbar-left">
            <NuxtLink class="uk-navbar-item uk-logo" to="/" aria-label="Homepage">
              <img src="/images/logos/vultive.svg" width="160" height="45" alt="Vultive" uk-img />
            </NuxtLink>
          </div>
          <div class="uk-navbar-right">
            <div class="uk-navbar-item">
              <a class="uk-button uk-text-italic uk-button-danger uk-button-small uk-border-rounded uk-text-bold"
                uk-scrollspy="cls: uk-animation-slide-right-small" href="https://vultive.statuspage.io">
                {{ $t("header.nav.status") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="uk-section uk-section-default uk-section-large">
      <AppHero image="/images/illustrations/relaxation.svg" :title="$t('header.about.title')" buttonUrl="/#products"
        :buttonText="$t('header.about.button')">
        <template v-slot:text>
          {{ $t("header.about.text") }}
        </template>
      </AppHero>
    </section>
  </header>
</template>
