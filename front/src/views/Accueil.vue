<template>
  <!-- <ReloadPWA/> -->
  <section id="intro">
    <div class="section-header d-flex justify-content-around">
      <img class="section-header-logo  d-flex justify-content-center align-items-center" :src="logo">
      <div class="section-header-titre  d-flex justify-content-center align-items-center">Aux sons du jardin</div>
    </div>
    <div class="section-content position-relative mb-1" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="position-absolute bottom-0 start-0 w-100 pb-3">
        <div class="w-100 d-flex justify-content-center">
          <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;"
                      @resultat="onScan"/>
        </div>
        <div class="d-flex flex-row justify-content-around align-items-center mt-2">
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden"
               :style="{ backgroundImage: `url(${iconPage1})` }" @click="goPage(1)"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden"
               :style="{ backgroundImage: `url(${iconPage2})` }" @click="goPage(2)"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden"
               :style="{ backgroundImage: `url(${iconPage3})` }" @click="goPage(3)"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden"
               :style="{ backgroundImage: `url(${iconPage4})` }" @click="goPage(4)"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden"
               :style="{ backgroundImage: `url(${iconPage5})` }" @click="goPage(5)"></div>
        </div>
      </div>
    </div>
    <footer class="section-footer d-flex justify-content-between align-items-center">
      <img :src="logoRegionReunion">
      <a href="#one" class="btn bg-transparent rounded-circle text-white border-white fs-2">
        <BIconArrowDown/>
      </a>
      <img :src="logoJardinBotaniqueReunion">
    </footer>
  </section>

  <section id="one" class="d-flex justify-content-center align-items-center">
    <div class="content-style2">

      <h2 style="text-align: center">Les compositions</h2>
      <h4 style="margin-top: 1em">Aux sons du jardin.</h4>

      <p>
        Parce qu’il est peuplé d’espèces végétales et animales singulières,
        chaque jardin a son chant qui lui est propre,
        ses mélodies qui varient en fonction de la météo,
        de la saison, des essences qui y ont élu domicile.
        Chaque jardin a sa propre signature acoustique.
        Et si, avec humilité, avec nos instruments, nous nous invitions sur cette scène
        pour faire découvrir cette singularité, et en tirer une création originale.<br/><br/>
      </p>

      <h3 style="margin: 1.5em 0;">Crédits.</h3>
      <h5>Chris Hagá</h5>
      <p>Compositions, arrangements et prises de sons.</p>
      <h5>Letoyo</h5>
      <p>Ingénieur son studio. Prises de sons instruments et voix. Mixage et Mastering au Studio PLay Hit Up.</p>
      <h5>Sami Pageaux Waro</h5>
      <p>Kora électrique.</p>
      <h5>Julia Colmet Daâge</h5>
      <p>Violoncelle.</p>
      <h5>Hackerspace CodeCommun</h5>
      <p>Développement et conception.</p>

      <h4 style="margin: 1.5em 0">Remerciements : </h4>
      <h5>Département Réunion.</h5>
      <h5>Jardin Botanique Des Mascarins.</h5>
      <p>
        Résidence <q>Patrimoine et création</q> réalisée entre février et
        septembre 2022.
      </p>
      <div class="d-flex justify-content-center align-items-center mt-2">
        <a href="#intro" class="btn bg-dark rounded-circle text-white border-white fs-2 ">
          <BIconArrowUp/>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted} from 'vue'
import ScanQrcode from '@/components/ScanQrcode.vue'
// routes
import {useRouter} from 'vue-router'
// medias: images en background
import backgroundImage from "@/assets/images/chris_haga-800x967.jpg"
import logo from "@/assets/images/LogoChris.svg"
import logoRegionReunion from "@/assets/images/logo_region-reunion-150x41.png"
import logoJardinBotaniqueReunion from "@/assets/images/logo-mascarin-jardin-botanique-148x50.jpg"
// icon
import iconPage1 from "@/assets/images/PailleEnQueue-p1.png"
import iconPage2 from "@/assets/images/goutte-eau-p2.png"
import iconPage3 from "@/assets/images/Nuit-p3.png"
import iconPage4 from "@/assets/images/LogoChris-p4.png"
import iconPage5 from "@/assets/images/LeVent-p5.png"
import {BIconArrowDown, BIconArrowUp} from 'bootstrap-icons-vue'

const router = useRouter()
const routesQrCode = [
  {code: "chp5", route: "/Page5"},
  {code: "chp4", route: "/Page4"},
  {code: "chp3", route: "/Page3"},
  {code: "chp2", route: "/Page2"},
  {code: "chp1", route: "/Page1"}
]

// résultats qrcodes attendu
let expected = []
for (let i = 0; i < routesQrCode.length; i++) {
  expected.push(routesQrCode[i].code)
}

function onScan(qrCodeMessage) {
  console.log('-> fonc onScan !')
  console.log('qrCodeMessage =', qrCodeMessage)

  const test = routesQrCode.find(obj => obj.code === qrCodeMessage)
  if (test !== undefined) {
    // lancer la lecture du mp3
    const idPage = test.route.substring(5, 6)
    console.log('idPage = ->' + idPage + '<-')
    document.querySelector('#audio-ch' + idPage).play()
    // Aller à la page
    console.log('-> route =', test.route)
    router.push(test.route)
  } else {
    console.log('Qrcode non géré, inconnu !')
  }
  console.log('test =', test)
}

function goPage(idPage) {
  document.querySelector('#audio-ch' + idPage).play()
  router.push('/Page' + idPage)
  document.querySelector('#app').style.height = '100vh'
}

onMounted(() => {
  const eles = document.querySelectorAll('.audio-mp3')
  for (let i = 0; i < eles.length; i++) {
    eles[i].pause()
  }
})

</script>

<style>
#intro {
  width: 100%;
  height: 100vh;
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  background-size: cover;
  background-image: linear-gradient(#282658, #6f4b95);
}

/*    2iem page accueil! */
#one {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(#282658, #6f4b95);
}

.section-header {
  width: 100%;
  height: 20%;
}

.section-header-logo {
  /*width: 30%;*/
  height: 100%;
}

.section-header-titre {
  /*width: 70%;*/
  height: 100%;
  color: #f57199;
  font-size: 1.5rem;
  font-weight: bold;
}

.section-content {
  width: 100%;
  height: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section-footer {
  width: 100%;
  height: 10%;
  padding: 0 4px;
}

.icons-zone-taille {
  width: 46px;
  height: 46px;
}

.content-style2 {
  margin: 0;
  width: 90%;
  height: 95%;
  background: #fff;
  padding: 10%;
  overflow: hidden;
  box-shadow: 0 0 25px #000;
  border: 1px solid #444;
  border-radius: 6px;
  text-align: justify;
  overflow-x: hidden;
  overflow-y: scroll;
  opacity: 0.8;
}

p {
  font-size: 20px;
  color: #444;
}

.slide-right, .slide-left {
  width: 100%;
}

.slide-right {
  animation: 3s slide-right;
}

@keyframes slide-right {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

/***** Slide Left *****/
.slide-left {
  animation: 3s slide-left;
}

@keyframes slide-left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

.line {
  border-bottom: 3px solid red;
  width: 200px;
  margin: auto;
}

.fade-in {
  animation: fadeIn ease 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>