<template>
<section id="pg1" :style="{ backgroundImage: 'url(${backgroundImagePg1})'}">
  <button @click="router.push('/')">Retour</button>
</section>
</template>

<script setup>
import {useRouter} from 'vue-router'

// medias: images en background
import backgroundImagePg1 from "@/assets/images/wind.jpg"

const router = useRouter()
</script>

<style scoped>
#pg1 {
  background-size: cover;
  width: 100vW;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed, fixed;
  background-position: top left, center center;
}
</style>
