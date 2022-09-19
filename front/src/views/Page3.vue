<template>
  <section class="zone-container overflow-hidden d-flex flex-column justify-content-center align-items-center" :style="{ backgroundImage: `url(${backgroundImagePg3})` }">
    <div class="zone-header d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="goHome()">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>La nuit et la kora</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Les êtres éveillés de la nuit ont leur univers sonore depuis des siècles.
        </p>
        <p>
          J’ai voulu accompagner ces sons familiers de la nuit avec un son qui n’existe pas.
        </p>
        <p>
          Pour cela, j'ai fait appel à Sami Pageaux Waro et sa kora électrique pour nous livrer un échange musical des
          plus original.
        </p>
      </div>
    </div>

  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconPlayFill, BIconPauseFill, BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg3 from "@/assets/images/LaNuit-800x1067.jpg"

const router = useRouter()

function goHome() {
  const hauteur = document.querySelector('#app').clientHeight
  document.querySelector('#app').style.height = (2 * hauteur) + 'px'
  router.push('/')
}
</script>

<style scoped>

#pg3 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
