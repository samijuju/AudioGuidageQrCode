<template>
  <audio v-for="(audio, index) in listAudio" :key="index" :id="audio.id" class="audio-mp3" preload="auto">
    <source :src="audio.url">
  </audio>
  <router-view/>
</template>

<script setup>
import {useRouter} from 'vue-router'
const listAudio = [
  {id: 'audio-ch1', url: './musiques/Maloya_Zoizo.mp3'},
  {id: 'audio-ch2', url: './musiques/La_pluie_en_mantra.mp3'},
  {id: 'audio-ch3', url: './musiques/La_nuit_et_la_Kora.mp3'},
  {id: 'audio-ch4', url: './musiques/Zezer.mp3'},
  {id: 'audio-ch5', url: './musiques/Le_vent_et_son_instrument.mp3'}
]
const router = useRouter()
</script>

<style scoped>
</style>
