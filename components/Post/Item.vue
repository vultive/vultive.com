<script setup>
const props = defineProps({
    post: Object,
});
</script>

<template>
    <div class="uk-panel">
        <img :src="post._embedded['wp:featuredmedia']['0']?.source_url" width="1800" height="1200"
            :alt="post.title?.rendered">
        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h4 class="uk-text-bold uk-text-nowrap uk-text-italic uk-overflow-hidden uk-text-truncate">{{
                post.title?.rendered }}</h4>
            <p class="uk-margin-remove uk-overflow-hidden v-post__description" v-html="post.excerpt?.rendered"></p>
        </div>
    </div>
</template>

<style scoped>
.v-post__description {
    height: 55px;
}
</style>