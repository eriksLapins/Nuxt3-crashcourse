// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // site-wide implementation of meta stuff
  app: {
    head: {
      title: 'Nuxt Dojo Crashcourse',
      meta: [
        {
          name: 'description',
          content: 'Everything about Nuxt 3'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
})
