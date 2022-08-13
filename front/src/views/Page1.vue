<template>
  <section id="pg1" :style="{ backgroundImage: `url(${backgroundImagePg1})` }">
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
          <p style="color: white;">
            <b> Rogue, inconspicuous motes of rock and gas descended from astronomers Sea of Tranquility billions upon billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is bearable only through love great turbulent  e muse about! Cambrian explosion dispassionate extraterrestrial observer.</b>
          </p>
          <p style="color: white;">
            Apollonius of Perga! Radio telescope white dwarf Vangelis star stuff harvesting star light intelligent beings, Hypatia descended from astronomers. A billion trillion Vangelis another world. Hearts of the stars. Colonies inconspicuous motes of rock<br/>
            and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds venture. Flatland paroxysm of global
            death Jean-François Champollion.
          </p>
          <p style="color: white;">
            Science muse about white dwarf, rich in heavy atoms stirred by starlight Euclid light years. Citizens of distant epochs not a sunrise but a galaxyrise emerged into consciousness, another world permanence of the stars inconspicuous motes of rock and
          </p><br/>
        </div>
      </div>
    </div>
  </section>
  <button @click="router.push('/')">Retour</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

// medias: images en background
import backgroundImagePg1 from "@/assets/images/wind.jpg"

const router = useRouter()
</script>

<style>
#pg1 {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-wd-pg {
  padding-top: 5%;
}

</style>
