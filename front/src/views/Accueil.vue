<template>
 <div>{{ resultat }}</div>
 <!-- 
 	<head>
		<link rel="stylesheet" href="assets/css/main.css" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	</head>
  -->
 
  <section id="intro" class="main style1 dark fullscreen">
    <div>
      <header>
        <h2 style="color:white;">Jardin App.</h2>
      </header>
      <p style="color:white;">Bienvenue à  <strong>App name ou Autre!</strong> Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu! </p>
      <br/><br/>
      <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan" />
      
      <footer>
        <a href="#one" class="button style2 down">More</a>
      </footer>
		</div>
  </section>

  <section id="one" class="main style2 right dark fullscreen">
    <div class="content box style2">
      <header>
        <h2> Les compositions</h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
        id varius justo euismod in. Curabitur egestas consectetur magna.<br/>
        ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, Sed sodales venenatis arcu,
        id varius justo euismod in. Curabitur egestas consectetur magna.<br/>
      </p>
    </div>
	</section>

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

<style>

</style>