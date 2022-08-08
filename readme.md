# Projet Chris Haga

## - Cordova
```
cordova create projet-chris-haga re.tibillet.chrishaga projetChrisHaga
cd projet-chris-haga
cordova platform add android
```
### Activer le choix d'autoriser ou non l'utilisation de la camera (indispenssable !)
Ajouter dans le fichier "platforms/android/app/src/main/AndroidManifest.xml" entre les balises "manifest":
```
<manifest .... >
    ....
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
    <uses-feature android:name="android.hardware.camera" android:required="true" />
</manifest>

## - Vue + vite (à la racine du projet)
```
npm create vite@latest chris-haga-vue-part -- --template vue
cd chris-haga-vue-part
npm install
npm run dev
```

### Configuration du build dans le dossier www de cordova
Ajouter à vite.config.js :
```
export default defineConfig({
  ...
  build: {
    outDir: '../www'
  },
  ...
})
```

### Mise en corrélation du fichier index.html de vue avec celui de cordova

#### Lecteur de qrCode cross platform
https://github.com/mebjas/html5-qrcode   
```
npm i html5-qrcode
```

#### Remplacer le fichier index.html de vue par celui de cordova.

#### Supprimer
```
<script src="js/index.js"></script>
```

#### Ajouter
```
<div id="app"></div>
```

#### "main.js" de base
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode"

// To use Html5Qrcode (more info below)
#import {Html5Qrcode} from "html5-qrcode"

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
```

## Modifier le code dans vue(dossier "chris-haga-vue-part")
- Coder   
- "Builder"
```
npm run build
```

## Construiser votre application cordova(racine du projet)
```
cordova build android
cordova run android
```

## Debug sur navigateur - "chrome://inspect/#devices"
