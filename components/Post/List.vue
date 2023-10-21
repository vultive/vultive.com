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
        <div class="uk-child-width-1-2@s uk-child-width-1-3@l uk-grid uk-grid-small uk-grid-match uk-flex-center"
            data-uk-scrollspy="cls: uk-animation-scale-down; target: > .uk-card; delay: 100" uk-grid
            uk-height-match="target: .uk-card">
            <template v-for="post in postsDetails" v-bind:key="post.id">
                <NuxtLink :to="'/post/' + post.id" class="uk-text-decoration-none">
                    <PostItem :post="post" />
                </NuxtLink>
            </template>
        </div>
    </template>
</template>
