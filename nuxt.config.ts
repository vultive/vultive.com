import { fileURLToPath } from "url";
import { resolve, dirname } from "node:path";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  css: ["~/node_modules/uikit/dist/css/uikit.min.css", "~/assets/main.scss"],
  modules: [
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "@nuxtjs/google-adsense",
  ],
  robots: {
    rules: {
      UserAgent: "ia_archiver",
      Disallow: "*",
    },
  },
  "google-adsense": {
    id: "ca-pub-8536011049781887",
  },
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
      title: "Vultive",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Our journey starts with a deep-rooted belief in the power of technology to simplify and amplify everyday experiences. With each line of code we write and each feature we design, our collective goal is to make life smoother, more efficient, and more enjoyable for everyone.",
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
        },
        {
          name: "google-adsense-account",
          content: "ca-pub-8536011049781887"
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
