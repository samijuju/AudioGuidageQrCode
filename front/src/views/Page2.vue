<template>
  <section class="zone-container overflow-hidden d-flex flex-column justify-content-center align-items-center" :style="{ backgroundImage: `url(${backgroundImagePg2})` }">
    <div class="zone-header d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="goHome()">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>La pluie en mantra</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Les mains d’un percussionniste sont silencieuses jusqu'au moment de leurs rencontres avec la peau des
          instruments,
        </p>
        <p>
          ici les gouttes sont les mains et le feuillage les instruments.
        </p>
      </div>
    </div>
  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg2 from "@/assets/images/LaPluie-800x878.jpg"

const router = useRouter()

function goHome() {
  const hauteur = document.querySelector('#app').clientHeight
  document.querySelector('#app').style.height = (2 * hauteur) + 'px'
  router.push('/')
}
</script>

<style scoped>
</style>
