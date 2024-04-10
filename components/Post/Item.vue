<script setup>
const props = defineProps({
    post: Object,
});
const config = useRuntimeConfig();
</script>

<template>
    <div class="uk-panel">
        <img :src="config.public.directusApiBaseUrl + '/assets/' + post?.featured_image" width="276" height="450"
            :alt="post.title" class="uk-height-large uk-object-cover">
        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 class="uk-margin-remove uk-text-bold uk-text-nowrap uk-text-italic uk-overflow-hidden uk-text-truncate">
                {{
            post?.title }}</h3>
            <p class="uk-overflow-hidden uk-visible@m v-post__description" v-html="post?.content"></p>
        </div>
    </div>
</template>