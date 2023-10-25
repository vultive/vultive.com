<script setup>
const props = defineProps({
  image: String,
  imageClass: String,
  label: String,
  title: String,
  contentClass: String,
  buttonText: String,
  buttonUrl: String,
});
</script>

<template>
  <div class="uk-container">
    <div class="uk-grid-match uk-grid-large uk-child-width-expand@s uk-flex-middle uk-grid" uk-grid>
      <div class="uk-flex-last uk-flex-first@s" :class="contentClass">
        <div class="uk-container uk-container-xsmall">
          <slot name="content">
            <span class="uk-text-danger uk-text-bold uk-text-italic" v-if="label">{{ label }}</span>
            <h2 class="uk-text-bold uk-heading-medium uk-margin-remove-top">
              {{ title }}
            </h2>
            <p class="v-text--muted uk-visible@m">
              <slot name="text"></slot>
            </p>
            <a :href="buttonUrl" :aria-label="buttonText"
              class="uk-button uk-button-danger uk-border-rounded uk-text-bold" uk-scrollspy="cls: uk-animation-scale-up"
              v-if="buttonText" uk-scroll>
              <span class="uk-text-middle">{{ buttonText }}</span><span uk-icon="chevron-double-right"></span>
            </a>
          </slot>
        </div>
      </div>
      <div class="uk-transition-toggle">
        <slot name="image">
          <div class="uk-transition-scale-up uk-transition-opaque">
            <img :src="image" width="565" height="380" :alt="title" loading="lazy" class="uk-border-rounded"
              :class="imageClass" uk-img />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
