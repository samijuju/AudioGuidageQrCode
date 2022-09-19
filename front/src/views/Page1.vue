<template>
  <section class="zone-container overflow-hidden d-flex flex-column justify-content-center align-items-center" :style="{ backgroundImage: `url(${backgroundImagePg1})` }">
    <div class="zone-header d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="goHome()">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>Maloya Zoizo</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Ils sont là, ils chantent, ce sont des oiseaux réunionnais,
          chantent ils en créole ? Faisons un maloya avec
          eux.
        </p>
        <p>Il y a les couplets et refrains comme un maloya des humains</p>
        <p>mais celui la c’est un Maloya Zoizo!!!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg1 from "@/assets/images/Zozio.jpg"

const router = useRouter()

function goHome() {
  const hauteur = document.querySelector('#app').clientHeight
  document.querySelector('#app').style.height = (2 * hauteur) + 'px'
  router.push('/')
}
</script>

<style scoped>
</style>
