<template>
  <section class="zone-container overflow-hidden d-flex flex-column justify-content-center align-items-center"
           :style="{ backgroundImage: `url(${backgroundImagePg5})` }">
    <div class="zone-header d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="goHome()">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>Le vent et son instrument</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Le son du vent n’existe que s’ il est en contact avec une autre matière.
          Les arbres, les bambous…
        </p>
        <p>
          La violoncelliste, Julia Colmet Daâge, se laisse conduire par le vent.
        </p>
        <p>
          Son archet est influencé par l’intensité du vent, les deux forment un duo musical unique.
        </p>
      </div>
    </div>
  </section>

</template>

<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg5 from "@/assets/images/LeVent-800x537.jpg"

const router = useRouter()

function goHome() {
  const hauteur = document.querySelector('#app').clientHeight
  document.querySelector('#app').style.height = (2 * hauteur) + 'px'
  router.push('/')
}

</script>

<style scoped>
</style>
