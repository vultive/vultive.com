import { fileURLToPath } from "url";
import { resolve, dirname } from "node:path";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      directusApiBaseUrl: process.env.DIRECTUS_API_BASE_URL,
    },
  },
  css: ["~/node_modules/uikit/dist/css/uikit.min.css", "~/assets/main.scss"],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/base/project/_variables.scss";',
        },
      },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(
            dirname(fileURLToPath(import.meta.url)),
            "./locales/translations/*.json"
          ),
        ],
      }),
    ],
  },
  app: {
    buildAssetsDir: "/_assets/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Vultive - Make life more efficient",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Our journey starts with a deep-rooted belief in the power of technology to simplify and amplify everyday experiences.",
        },
        {
          hid: "og:locale",
          name: "og:locale",
          content: "en_US",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Vultive",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://vultive.com/",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Vultive",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://vultive.com/images/preview.webp",
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
        },
      ],
      // script: [
      //   {
      //     hid: "freshdesk-widget",
      //     src: "https://euc-widget.freshworks.com/widgets/103000006956.js",
      //     defer: true,
      //   },
      //   {
      //     hid: "freshdesk-widget-settings",
      //     innerHTML: `window.fwSettings={ 'widget_id':103000006956 };`,
      //     type: "text/javascript",
      //   },
      // ],
    },
  },
});
