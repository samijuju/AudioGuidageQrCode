<template>
  <div>
    <button id="bt-scan" @click="scanQrCode()">Scanner</button>
  </div>
  <div id="reader"></div>
</template>

<script setup>
import {Html5Qrcode} from "html5-qrcode"

const props = defineProps({
  expected: Array,
  qrbox: {
    type: Number,
    default: 250
  },
  fps: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['resultat'])
let cameraId
let html5QrCode

function scanQrCode() {
  document.querySelector('#bt-scan').style.display = 'none'
  html5QrCode = new Html5Qrcode("reader")
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
  }
  const config = {fps: 10, qrbox: {width: 250, height: 250}};

// If you want to prefer back camera
  html5QrCode.start({facingMode: "environment"}, config, onScanSuccess)
}

function stopScanQrCode() {
  html5QrCode.stop().then(ignore => {
    // QR Code scanning is stopped.
    console.log("QR Code scanning stopped.")
  }).catch(err => {
    // Stop failed, handle it.
    console.log("Unable to stop scanning.")
  })
}

function onScanSuccess(decodedText, decodedResult) {
  console.log('test:')
  console.log('decodedText =', decodedText)
  console.log('ScanQrCode.vue - expected =', props.expected)
  console.log('include =',props.expected.includes(decodedText))
  // si valeur attendue bonne émettre
  if (props.expected.includes(decodedText) === true) {
    stopScanQrCode()
    emit('resultat', decodedText, decodedResult)
  }
}
</script>

<style>
#logo {
  width: 100px;
  height: 100px;
}
</style>
