import {createApp} from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

window.useCordova = true

function initApp() {
  const app = createApp(App)
  app.use(router).mount('#app')
}

if (window.useCordova === true) {
  //cordova
  document.addEventListener('deviceready', () => {
    initApp()
  }, false);
} else {
  //browser
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Navigateur, window.useCordova =', window.useCordova)
    initApp()
  })
}