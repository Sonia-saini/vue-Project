// FILE: main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/dist/quasar.css'
import router from './router.js';
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
const pinia = createPinia()
const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(pinia)
myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
