<template>
  <section id="pg3" :style="{ backgroundImage: 'url(${backgroundImagePg3})'}">
    <div class="container-wd-pg">
      <div>
        <p> Button</p>
      </div>

      <div class="marquee-wrap">
        <div class="marquee">
          <p>
            <b> Rogue, inconspicuous motes of rock and gas descended from astronomers Sea of Tranquility billions upon billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is bearable only through love great turbulent  e muse about! Cambrian explosion dispassionate extraterrestrial observer.</b>
          </p>
          <p>
            Apollonius of Perga! Radio telescope white dwarf Vangelis star stuff harvesting star light intelligent beings, Hypatia descended from astronomers. A billion trillion Vangelis another world. Hearts of the stars. Colonies inconspicuous motes of rock<br/>
            and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds venture. Flatland paroxysm of global
            death Jean-François Champollion.
          </p>
          <p>
            Science muse about white dwarf, rich in heavy atoms stirred by starlight Euclid light years. Citizens of distant epochs not a sunrise but a galaxyrise emerged into consciousness, another world permanence of the stars inconspicuous motes of rock and
          </p><br/>
        </div>
      </div>
    </div>

    <button @click="router.push('/')">Retour</button>
  </section>
  <button @click="router.push('/')">Retour</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

import backgroundImagePg3 from "@/assets/images/rain.jpg"

const router = useRouter()
</script>

<style scoped>

#pg3 {
  background-size: cover;
  width: 100vW;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed, fixed;
  background-position: top left, center center;
}

.container-wd-pg {
	background-repeat: no-repeat;
	padding-top: 15%;
	width: 100%;
	height: 100%;
}

.marquee-wrap {
	overflow:auto;
	margin-left: auto;
    margin-right: auto;
    width: 90%;
	height:90%;
	text-align: center;
	border:1px solid #000;
	padding:10px;
	color: white;
	font-size:45px;
	line-height:1.6;
}
/* increase duration to speed up scroll */
.marquee{
	animation:scrollUp 30s linear 1s infinite;
}

@supports (transform:translate3d(0px,0px,0px)){
	.marquee-wrap {overflow:hidden; }
	.marquee{padding-top:160px;}
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.marquee-wrap {overflow:hidden; }/* ie11 hack */
	.marquee{padding-top:60px;}
}
@keyframes scrollUp {
	from {transform:translateY(0%);}
	to {transform:translateY(-100%);}
}
.marquee:hover{animation-play-state:paused}

</style>