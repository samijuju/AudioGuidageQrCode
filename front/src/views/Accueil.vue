<template>
  <div>{{ resultat }}</div>
  <!-- 
    bootstrap déja installer dans 
 	<head>
		<link rel="stylesheet" href="assets/css/main.css" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	</head>
  -->

  <section id="intro" class="main style1 dark fullscreen" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div>
      <header>
        <h2 style="color:white;">Jardin App.</h2>
      </header>
      <p style="color:white;">
        Bienvenue à
        <strong>App name ou Autre!</strong> Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu!
      </p>
      <br />
      <br />
      <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan" />
      <footer>
        <a href="#one" class="button style2 down">
         <img id="down-arrow" :src="downArrow" alt="flèche direction bas">
        </a>
      </footer>
    </div>
  </section>

  <section id="one" class="main style2 right dark fullscreen" :style="{ backgroundImage: `url(${backgroundImageOne})` }">
    <div class="content box style2">
      <header>
        <h2>Les compositions</h2>
      </header>
      <p>
        Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
        id varius justo euismod in. Curabitur egestas consectetur magna.
        <br />ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        Fusce blandit ultrices sapien, Sed sodales venenatis arcu,
        id varius justo euismod in. Curabitur egestas consectetur magna.
        <br />
      </p>
    </div>
  </section>
</template>

<script setup>
import ScanQrcode from '@/components/ScanQrcode.vue'
import { ref, onMounted } from 'vue'

// routes
import { useRouter } from 'vue-router'

// medias: images en background
import backgroundImage from "@/assets/images/first.jpg"
import backgroundImageOne from "@/assets/images/one.jpg"
import downArrow from "@/assets/images/down-arrow.svg"

const router = useRouter()

const routesQrCode = [
  { code: "https://m.tibillet.re/q474d", route: "/Page5" },
  { code: "https://m.tibillet.re/sd4df", route: "/Page4" },
  { code: "https://m.tibillet.re/q47f7", route: "/Page3" },
  { code: "https://m.tibillet.re/q47s4", route: "/Page2" },
  { code: "https://m.tibillet.re/q474s", route: "/Page1" }
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
#intro {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#down-arrow {
    width: 1rem;
  height: 1rem;

}
/* Button */
/*
input[type="button"],
input[type="submit"],
input[type="reset"],
.button,
button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  background-color: #98c593;
  border: 0;
  border-radius: 3.5em;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  height: 3.5em;
  line-height: 3.5em;
  outline: 0;
  padding: 0 2em 0 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
}

  input[type="button"].down,
  input[type="submit"].down,
  input[type="reset"].down,
  .button.down,
  button.down {
    width: 5em;
    height: 5em;
    line-height: 4.5em;
    padding: 0;
    background-image: url("images/dark-arrow.svg");
    background-position: center center;
    background-repeat: no-repeat;
    text-indent: -10em;
    overflow: hidden;
  }

    input[type="button"].down.anchored,
    input[type="submit"].down.anchored,
    input[type="reset"].down.anchored,
    .button.down.anchored,
    button.down.anchored {
      bottom: 0;
      border-bottom: 0;
      border-radius: 3em 3em 0 0;
      height: 4.5em;
      margin-left: -2.5em;
    }

  input[type="button"].anchored,
  input[type="submit"].anchored,
  input[type="reset"].anchored,
  .button.anchored,
  button.anchored {
    position: absolute;
    left: 50%;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover,
  input[type="reset"]:hover,
  .button:hover,
  button:hover {
    background-color: #a8cea4;
  }

  input[type="button"]:active,
  input[type="submit"]:active,
  input[type="reset"]:active,
  .button:active,
  button:active {
    background-color: #88bc82;
  }

  input[type="button"].style2,
  input[type="submit"].style2,
  input[type="reset"].style2,
  .button.style2,
  button.style2 {
    background-color: transparent;
    border: solid 2px #e5e6e7;
    color: inherit;
  }

    input[type="button"].style2:hover,
    input[type="submit"].style2:hover,
    input[type="reset"].style2:hover,
    .button.style2:hover,
    button.style2:hover {
      background-color: rgba(229, 230, 231, 0.25);
    }

    input[type="button"].style2:active,
    input[type="submit"].style2:active,
    input[type="reset"].style2:active,
    .button.style2:active,
    button.style2:active {
      background-color: rgba(229, 230, 231, 0.375);
    }

    input[type="button"].style2.down,
    input[type="submit"].style2.down,
    input[type="reset"].style2.down,
    .button.style2.down,
    button.style2.down {
      background-image: url("images/arrow.svg");
    }
    */

/*    2iem page accueil! */

#one {
  background-size: 256px 256px, cover;
  background-attachment: fixed, fixed;
  background-position: top left, center center;
}

</style>