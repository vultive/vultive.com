<script setup>
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/store/posts";

const route = useRoute();

let error = ref(null);
let isLoading = ref(false);
const { postDetails } = storeToRefs(usePostsStore());

async function getPostDetails() {
    isLoading.value = true;
    try {
        error.value = null;
        await usePostsStore().fetchPostById(route.params.id);
    } catch (exc) {
        error.value = exc;
    }
    isLoading.value = false;
}

onMounted(() => {
    getPostDetails();
});
</script>

<template>
    <section class="uk-section uk-section-muted uk-section-small">
        <div class="uk-container uk-container-small uk-text-center">
            <template v-if="error">
                <AppAlert>{{ error.message }}</AppAlert>
            </template>
            <template v-else-if="isLoading">
                <AppLoader />
            </template>
            <template v-else-if="postDetails">
                <h2 class="uk-text-bold uk-margin-remove-top">{{ postDetails.title?.rendered }}</h2>
                <p class="uk-margin-large-bottom">{{ new Date(postDetails.date).toLocaleString() }}</p>
                <div v-html="postDetails.content?.rendered" class="v-text--muted uk-text-left"></div>
                <AppAds/>
            </template>
        </div>
    </section>
</template>
