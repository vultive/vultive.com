<script setup>
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/store/posts";

let error = ref(null);
let isLoading = ref(false);
const { postsDetails } = storeToRefs(usePostsStore());

async function getPosts() {
    isLoading.value = true;
    try {
        error.value = null;
        await usePostsStore().fetchPosts();
    } catch (exc) {
        error.value = exc;
    }
    isLoading.value = false;
}

onMounted(() => {
    getPosts();
});
</script>

<template>
    <template v-if="error">
        <AppAlert>{{ error.message }}</AppAlert>
    </template>
    <template v-else-if="isLoading">
        <AppLoader />
    </template>
    <template v-else-if="postsDetails">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
            uk-slider="clsActivated: uk-transition-active; center: true;">

            <ul class="uk-slider-items uk-grid">
                <template v-for="post in postsDetails" v-bind:key="post.id">
                    <li class="uk-width-1-1 uk-width-2-5@s">
                        <NuxtLink :to="'/posts/' + post.slug" class="uk-text-decoration-none">
                            <PostItem :post="post" />
                        </NuxtLink>
                    </li>
                </template>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous
                uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
                uk-slider-item="next"></a>
        </div>
    </template>
</template>
