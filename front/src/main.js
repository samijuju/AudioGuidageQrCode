import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

window.useCordova = true

if (window.useCordova === true) {
  //cordova
  document.addEventListener('deviceready', () => {
    createApp(App).mount('#app')
  }, false);
} else {
  //browser
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Navigateur, window.useCordova =', window.useCordova)
    createApp(App).mount('#app')
  })
}