<template>
  <h1>Cordova + Vue</h1>
  <div>{{ resultat }}</div>
  <ScanQrcode :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan"/>
</template>

<script setup>
import ScanQrcode from './components/ScanQrcode.vue'
import {ref} from 'vue'

let resultat = ref('')

function onScan(decodedText, decodedResult) {
  console.log('-> fonc onScan !')
  console.log('decodedText =', decodedText)
  console.log('decodedResult =', decodedResult)
  resultat.value = decodedText
  // TODO: vérifier que c'est une url + requête api + affichage retour bon/pas bon
}

</script>

<style scoped>
</style>
