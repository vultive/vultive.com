<script setup>
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/store/posts";

const route = useRoute();
const config = useRuntimeConfig();

let error = ref(null);
let isLoading = ref(false);
const { postDetails } = storeToRefs(usePostsStore());

async function getPostDetails() {
    isLoading.value = true;
    try {
        error.value = null;
        await usePostsStore().fetchPostBySlug(route.params.slug);
    } catch (exc) {
        error.value = exc;
    }
    isLoading.value = false;
}

const author = ref(computed(() => {
    return postDetails.value?.user_created;
}));

onMounted(() => {
    getPostDetails();
});
</script>

<template>
    <section class="uk-section uk-section-muted uk-section-small">
        <div class="uk-container uk-container-medium uk-text-center">
            <template v-if="error">
                <AppAlert>{{ error.message }}</AppAlert>
            </template>
            <template v-else-if="isLoading">
                <AppLoader />
            </template>
            <template v-else-if="postDetails">
                <h1 class="uk-text-bold uk-margin-remove-top">{{ postDetails?.title }}</h1>
                <p class="uk-margin-large-bottom"><span uk-icon="icon: calendar; ratio: 1.25"
                        class="uk-margin-small-right uk-icon"></span> {{ new
                Date(postDetails?.date_created).toLocaleString() }}</p>
                <div uk-grid>
                    <div v-html="postDetails?.content" class="uk-width-3-4@m v-text--muted uk-text-left"></div>
                    <div class="uk-width-1-4@m uk-flex-first uk-flex-last@m" id="sidebar">
                        <div class="uk-transition-toggle uk-margin-top" v-if="author">
                            <div class="uk-card uk-card-default uk-card-body uk-transition-scale-up uk-transition-opaque"
                                uk-sticky="end: #sidebar; offset: 75">
                                <img :src="config.public.directusApiBaseUrl + '/assets/' + author?.avatar"
                                    class="uk-border-circle uk-object-cover v-post__avatar"
                                    v-if="author?.avatar" />
                                <h3 class="uk-card-title">{{ author?.first_name }} {{ author?.last_name }}</h3>
                                <p>{{ author?.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <AppAds />
            </template>
        </div>
    </section>
</template>
