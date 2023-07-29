// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "To Do App - Fathasya",
      meta: [{ name: "description", content:"To Do App - Fathasya"}],
      link: [{ rel:"icon", type:"image/png", href:"/favicon.png"}],
    }
  }
})
