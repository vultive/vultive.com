<script setup>
const props = defineProps({
    post: Object,
});
</script>

<template>
    <div class="uk-transition-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-transition-scale-up uk-transition-opaque"
            :class="(post.sticky && 'v-post__sticky')">
            <div class="uk-card-badge uk-label uk-label-danger uk-text-bold uk-border-rounded"><span
                    uk-icon="calendar"></span> {{ new
                        Date(post.date).toLocaleString()
                    }}</div>
            <h3
                class="uk-card-title uk-text-bold uk-margin-top uk-text-uppercase uk-overflow-hidden uk-text-nowrap uk-text-truncate">
                {{
                    post.title?.rendered }}</h3>
            <div v-html="post.excerpt?.rendered" class="uk-overflow-hidden uk-height-small"></div>
        </div>
    </div>
</template>

<style scoped>
.v-post__sticky {
    border: 2px solid var(--v-highlight-primary);
}
</style>