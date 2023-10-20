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
      await repositories.blog.posts(
        {
          per_page: limit,
        },
        (body) => (this.posts = body._data)
      );
    },
    async fetchPostById(id) {
      this.post = null;
      await repositories.blog.postById(
        id,
        (body) => (this.post = body._data)
      );
    },
  },
});