<template>
 <div>{{ resultat }}</div>
  <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan" />
</template>

<script setup>
import ScanQrcode from '@/components/ScanQrcode.vue'
import {ref, onMounted} from 'vue'
// routes
import {useRouter} from 'vue-router'

const router = useRouter()

const routesQrCode = [
  {code: "https://m.tibillet.re/q474d", route: "/Page5"},
  {code: "https://m.tibillet.re/sd4df", route: "/Page4"},
  {code: "https://m.tibillet.re/q47f7", route: "/Page3"},
  {code: "https://m.tibillet.re/q47s4", route: "/Page2"},
  {code: "https://m.tibillet.re/q474s", route: "/Page1"}
]

// résultats qrcodes attendu
let expected = []
for (let i = 0; i < routesQrCode.length; i++) {
  expected.push(routesQrCode[i].code)
}


let resultat = ref('')

function onScan(decodedText, decodedResult) {
  console.log('-> fonc onScan !')
  console.log('decodedText =', decodedText)
  console.log('decodedResult =', decodedResult)
  resultat.value = decodedText


  const test = routesQrCode.find(obj => obj.code === decodedText)
  if (test !== undefined) {
    // Stoper le  lecteur de qrcode
    // Aller à la page
    console.log('-> route =', test.route)
    router.push(test.route)
  } else {
    console.log('Qrcode non géré, inconnu !')
  }
  console.log('test =', test)
}

onMounted(() => {
  // élimine l'élément #reader
  //   const ele = document.querySelector('#reader')
  //   ele.parentNode.removeChild(ele)
    console.log("-> test =", document.querySelector('#reader'))
})
</script>

<style scoped>

</style>