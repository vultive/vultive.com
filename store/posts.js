import { defineStore } from "pinia";
import repositories from "@/api/repositories";

export const usePostsStore = defineStore("postsStore", {
  state: () => ({
    post: null,
    posts: null,
  }),
  getters: {
    postDetails: (state) => state.post,
    postsDetails: (state) => state.posts,
  },
  actions: {
    async fetchPosts(limit = 4) {
      this.posts = null;
      await repositories.directus.posts(limit).then((res) => (this.posts = res));
    },
    async fetchPostBySlug(slug) {
      this.post = null;
      await repositories.directus
        .postBySlug(slug)
        .then((res) => (this.post = res[0]));
    },
  },
});
