const webpack = require("webpack")

export default {
  target: "static",
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og:http://ogp.me/ns#"
    },
    titleTemplate: `%s`,
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "回避性愛着障害～絆が稀薄な人たち～ (光文社新書) をもとに作成した愛着スタイル診断テストです。" },
      { hid: "og:image", property: "og:image", content: "https://attachmentstyletest.web.fc2.com/images/image.jpg" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "愛着スタイル診断テスト" },
      { hid: "og:site_name", property: "og:site_name", content: "愛着スタイル診断テスト"  },
      { hid: "og:description", property: "og:description", content: "回避性愛着障害～絆が稀薄な人たち～ (光文社新書) をもとに作成した愛着スタイル診断テストです。" },
      { hid: "og:url", property: "og:url", content: "https://attachmentstyletest.web.fc2.com/" },
      { hid: "fb:app_id", property: "fb:app_id", content: "334247574149025" },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "msapplication-config", content: "https://attachmentstyletest.web.fc2.com/favicon/broserconfig.xml" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "https://attachmentstyletest.web.fc2.com/favicon/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "https://attachmentstyletest.web.fc2.com/favicon/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "https://attachmentstyletest.web.fc2.com/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "https://attachmentstyletest.web.fc2.com/favicon/favicon-16x16.png" },
      { rel: "mask-icon", href: "https://attachmentstyletest.web.fc2.com/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", href: "https://attachmentstyletest.web.fc2.com/favicon/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/fork-awesome/1.2.0/css/fork-awesome.min.css", integrity: "sha512-aupidr80M36SeyviA/hZ2uEPnvt2dTJfyjm9y6z1MgaV13TgzmDiFdsH3cvSNG27mRIj7gJ2gNeg1HeySJyE3Q==", crossorigin: "anonymous" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/3.0.3/pretty-checkbox.min.css", integrity: "sha512-kz4Ae66pquz4nVE5ytJyKfPDkQyHSggaDtT1v8oLfOd8bB+ZgZXNLaxex99MNu4fdCsWmi58mhLtfGk5RgfcOw==", crossorigin: "anonymous" }
    ]
  },
  loading: { color: "#fff" },
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/styles.css"
  ],
  plugins: [
    { src: "@/plugins/plugin.js" }
  ],
  modules: [
    "@nuxtjs/google-gtag",
    ["@nuxtjs/google-analytics", { id: "G-NDDBVRTYH2" }],
    "nuxt-compress",
    "@nuxtjs/sitemap"
  ],
  "google-gtag": {
    id: "G-NDDBVRTYH2",
    config: {
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true,
      send_page_view: false
    },
    debug: false
  },
  sitemap: {
    hostname: "https://attachmentstyletest.web.fc2.com/",
    gzip: true
  },
  build: {
    publicPath: "/_nuxt/client/",
    extractCSS: true,
    plugins: [
      new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery",
          "_": "underscore"
      })
    ]
  },
  buildDir: "./_nuxt/",
  generate: {
    dir: "dist",
    devtools: false
  }
}
