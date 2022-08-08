<template>
  <div>
    <button @click="scanQrCode()">Scanner</button>
  </div>
  <div id="reader"></div>
</template>

<script setup>
import {Html5Qrcode} from "html5-qrcode"

const props = defineProps({
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

/*
Html5Qrcode.getCameras().then(devices => {

   // devices would be an array of objects of type:
   // { id: "id", label: "label" }

  if (devices && devices.length) {
    cameraId = devices[0].id
    console.log('camera =', cameraId)
    // .. use this to start scanning.
  }
}).catch(err => {
  console.log('->', err)
})
*/

function scanQrCode() {
  const html5QrCode = new Html5Qrcode("reader");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
  }
  const config = {fps: 10, qrbox: {width: 250, height: 250}};

// If you want to prefer back camera
  html5QrCode.start({facingMode: "environment"}, config, onScanSuccess)
}


function onScanSuccess(decodedText, decodedResult) {
  emit('resultat', decodedText, decodedResult)
}
</script>

<style>
#logo {
  width: 100px;
  height: 100px;
}
</style>
