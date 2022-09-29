# Projet Audio guidage par qrcode (de zéro):

## - Cordova
```
cordova create AudioGuidageQrCode re.tibillet.AudioGuidageQrCode AudioGuidageQrCode
cd projet-chris-haga
cordova platform add android
cordova plugin add cordova-plugin-android-permissions
cordova build android --release -- --packageType=bundle
```
### Activer le choix d'autoriser ou non l'utilisation de la camera (indispenssable !)
Ajouter dans le fichier "config.xml"
```
<config-file target="AndroidManifest.xml" parent="/manifest" xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.FLASHLIGHT"/>
</config-file>
```
### Icons / Splash screen
- icones: /res/android/(ldpi/mdpi/...).png   
  ldpi    : 36x36 px   
  mdpi    : 48x48 px   
  hdpi    : 72x72 px   
  xhdpi   : 96x96 px   
  xxhdpi  : 144x144 px   
  xxxhdpi : 192x192 px    
- splash screen: /res/screen/android/(choix d'unseull fichier).png

### Build
- Après modification du front dans le fichier config.xml tag <widget>, modifier la version="1.0.x"
- Suuprimer la platforme android
```
cordova platform remove android
```
- Ajouter de nouveau la platforme android
```
cordova platform add android@latest
```
- vérifier la compilation de l'application
```
cordova build android
```

### Créer un ""
- Lancer andoid-studio
- Menu "File" + "Sync Project with Gradle Files"
- Menu "Build" + "Generate Signed Bundle / APK.."
- Cocher "Android App Bundle" + "next"
- Créer un "key store" ou utiliser en un déjà fait  + "Next"
- Sélectionner "release" + "Finish"
- Le bundle sera enregistrer sous "platforms/android/app/release"

## - Vue + vite (à la racine du projet)
```
npm create vite@latest front -- --template vue
cd front
npm install
npm install vue-router -S
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
```

## Etape 1 - Modifier le code dans vue(dossier "front")
- Coder   
- "Builder"
```
npm run build
```

## Etape 2 - Construiser votre application cordova(racine du projet)
```
cordova build android
cordova run android
```

## Debug sur navigateur - "chrome://inspect/#devices"

## divers
### Changer de sdk (android)
- Dans le fichier config.xml ajouter:
```
<platform name="android">
  <preference name="android-minSdkVersion" value="29"/>
  <preference name="android-targetSdkVersion" value="31" />
  ...
</platform>
```
- Supprimer et ajouter la platforme android
```
cordova platform rm android
cordova platform add android
```
- Attention aux autoristions, elles sont supprimées (platforms/android/app/src/main/AndroidManifest.xml)

### erreur build android
```
Unable to determine Android SDK directory
```
- Dans android-studio, menu "File" / "Sync Project with Gradle Files"

### Maj Gradle

#### Télécharger 
https://services.gradle.org/distributions-snapshots/gradle-7.6-20220920234319+0000-bin.zip

#### Installer
```
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle gradle-7.6-20220920234319+0000-bin.zip
```

### Configurer
Dans .bashrc ajouter "export PATH=$PATH:/opt/gradle/gradle-7.6-20220920234319+0000/bin"
