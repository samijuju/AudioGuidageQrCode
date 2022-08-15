<template>
    <section id="pg3" :style="{ backgroundImage: `url(${backgroundImagePg3})` }">
    <div class="container-wd-pg">
      <div>
        <div class="btn-play">
          <div class="play-bt" onclick="this.classList.toggle('active')">
              <div class="fond" x="0" y="0" width="200" height="200"></div>
            <div class="icon" width="200" height="200">
              <div class="side gauche" x="0" y="0" width="200" height="200" fill="#fff"></div>
              <div class="side droite" x="0" y="0" width="200" height="200" fill="#fff"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee-wrap">
        <div class="marquee">
          <p style="color: white; text-shadow: 3px 3px 4px red;">
            <b> Rogue, inconspicuous motes of rock </b>and gas descended from astronomers Sea of Tranquility billions upon billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is bearable only through love great turbulent  e muse about! Cambrian explosion dispassionate extraterrestrial observer.
            <br/>
            and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds venture. Flatland paroxysm of global
            death Jean-François Champollion.
          </p><br/>
        </div>
      </div>
    </div>
    <button @click="router.push('/')">Retour</button><br/>
  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'

import backgroundImagePg3 from "@/assets/images/rain.jpg"

const router = useRouter()
</script>

<style scoped>

#pg3 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-wd-pg {
  padding-top: 5%;
}

</style>
