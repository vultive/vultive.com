const prefix = "articles";

export default {
  async posts(limit) {
    return await useNuxtApp().$directus.request(
      useNuxtApp().$readItems(prefix, {
        limit: limit,
      })
    );
  },
  async postBySlug(slug) {
    return await useNuxtApp().$directus.request(
      useNuxtApp().$readItems(prefix, {
        fields: ["*", { user_created: ["*"] }],
        filter: {
          slug: {
            _eq: slug,
          },
        },
      })
    );
  },
};
