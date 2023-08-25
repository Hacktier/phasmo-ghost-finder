// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        'bootstrap/dist/css/bootstrap.css'
    ],
    app: {
        head: {
            title: 'Phasmo Ghost Finder',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            script: [
                { src: 'bootstrap.bundle.js'}
            ]
        }
    },
    modules: [
        '@pinia/nuxt',
    ],

})
