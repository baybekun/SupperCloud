export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
  app:{
    head: {
      title: 'Drive Fake',
      meta:[
        {name: 'description', content:'Everything about Nuxt'}
      ], 
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}

      ]

    }
  }
})
