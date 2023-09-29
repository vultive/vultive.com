<script setup>
const props = defineProps({
  error: Object
});
</script>

<template>
  <AppContentCenter>
    <h2 class="uk-text-italic">
      An error occurred -
      <span class="uk-text-danger uk-text-bold">{{ error.statusCode }}</span>
    </h2>
    <NuxtLink to="/">Homepage</NuxtLink>
  </AppContentCenter>
</template>