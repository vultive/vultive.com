<template>
  <section class="uk-section uk-section-default">
    <AppHero :label="$t('section.join.label')" :title="$t('section.join.title')" contentClass="uk-flex-last@m">
      <template v-slot:text>
        {{ $t("section.join.text") }}
      </template>
      <template v-slot:image>
        <div uk-slideshow="animation: push">
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slideshow-items uk-border-rounded">
              <li>
                <img src="/images/slideshow/jot.1.webp" :alt="$t('section.join.label') + ' 1'" loading="lazy" uk-cover />
              </li>
              <li>
                <img src="/images/slideshow/jot.2.webp" :alt="$t('section.join.label') + ' 2'" loading="lazy" uk-cover />
              </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
              uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
              uk-slideshow-item="next"></a>
          </div>
        </div>
      </template>
    </AppHero>
  </section>

  <section class="uk-section uk-section-default uk-section-small">
    <div class="uk-container uk-container-small">
      <div class="uk-position-relative uk-visible-toggle uk-margin-remove" tabindex="-1"
        uk-slider="sets: true; autoplay: true">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-flex-middle uk-grid v-logos-grid">
          <li>
            <a href="https://my.limitlesshost.net/order/forms/a/NDMyNA==">
              <img src="/images/logos/limitless-hosting.webp" alt="Limitless Hosting" width="160" height="50"
                class="uk-scrollspy-inview" uk-img />
            </a>
          </li>
          <li>
            <img src="/images/logos/freshworks.svg" alt="Freshworks" width="140" height="32" class="uk-scrollspy-inview"
              uk-img />
          </li>
          <li>
            <img src="/images/logos/atlassian.svg" alt="Atlassian" width="160" height="26" class="uk-scrollspy-inview"
              uk-img />
          </li>
          <li>
            <img src="/images/logos/cloudflare.svg" alt="Cloudflare" width="160" height="26" class="uk-scrollspy-inview"
              uk-img />
          </li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
          uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
          uk-slider-item="next"></a>
      </div>
    </div>
  </section>

  <footer class="uk-section uk-section-muted v-footer">
    <div class="uk-container">
      <div
        class="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-row-reverse uk-grid-row-medium uk-margin-large-bottom"
        uk-grid>
        <div>
          <h3 class="v-footer__title">{{ $t("footer.socials.title") }}</h3>
          <div>
            <a href="https://twitter.com/vultivecom" class="uk-icon-button uk-margin-small-right" data-uk-icon="twitter"
              aria-label="Twitter"></a>
            <a href="https://www.youtube.com/@vultive" class="uk-icon-button" data-uk-icon="youtube"
              aria-label="YouTube"></a>
          </div>
        </div>
        <div>
          <h3 class="v-footer__title" id="contact">{{ $t("footer.contact.title") }}</h3>
          <ul class="uk-list">
            <li>
              <a class="uk-link-muted" href="https://vultive.freshdesk.com">{{ $t("footer.contact.nav.helpdesk") }}</a>
            </li>
            <li>
              Email:
              <a href="mailto: support@vultive.com"
                class="uk-button uk-button-link uk-text-lowercase uk-text-bold">support@vultive.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="v-footer__title" id="company">{{ $t("footer.about_us.title") }}</h3>
          <ul class="uk-list">
            <li>
              <NuxtLink to="/work-with-us" class="uk-link-muted">
                {{ $t("footer.about_us.nav.careers") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="uk-link-muted">
                {{ $t("footer.about_us.nav.privacy_policy") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms-and-conditions" class="uk-link-muted">
                {{
                  $t("footer.about_us.nav.terms_and_conditions") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="v-footer__title">{{ $t("footer.display_language.title") }}</h3>
          <AppSelectLanguage />
        </div>
      </div>
      <hr class="uk-margin-medium-bottom" />
      <p class="uk-text-meta">
        © 2022-{{ new Date().getFullYear() }}
        <a class="uk-text-bold uk-link-muted" href="https://vultive.com">Vultive Team</a>. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
