<script setup>
const route = useRoute();
</script>

<template>
  <header>
    <nav class="uk-navbar-container uk-navbar-transparent">
      <div class="uk-container">
        <div uk-navbar>
          <div class="uk-navbar-left">
            <NuxtLink class="uk-navbar-item uk-logo" to="/" aria-label="Homepage">
              <img src="/images/logos/vultive.svg" width="160" height="45" alt="Vultive" uk-img />
            </NuxtLink>
          </div>
          <div class="uk-navbar-right uk-visible@s">
            <ul class="v-nav uk-navbar-nav">
              <li class="v-nav__item">
                <NuxtLink to="/">
                  <span uk-icon="home" class="v-nav__icon"></span> {{ $t('header.nav.home') }}
                </NuxtLink>
              </li>
              <li class="v-nav__item">
                <a href="#"><span uk-icon="social" class="v-nav__icon"></span> {{ $t('header.nav.links') }}</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li><a href="https://vultive.statuspage.io">{{ $t('header.nav.status') }}</a></li>
                  </ul>
                </div>
              </li>
              <li class="v-nav__item">
                <NuxtLink to="/work-with-us">
                  <span uk-icon="users" class="v-nav__icon"></span> {{ $t('header.nav.careers') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <section class="uk-section uk-section-default uk-section-medium uk-margin-large-bottom" v-if="route.path == '/'">
      <AppHero image="/images/illustrations/relaxation.svg" :title="$t('header.about.title')" buttonUrl="/#products"
        :buttonText="$t('header.about.button')">
        <template v-slot:text>
          {{ $t("header.about.text") }}
        </template>
      </AppHero>
    </section>
  </header>
</template>
