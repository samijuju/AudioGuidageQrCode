<template>
  <h1>Audio Guidage</h1>
  <h2>Cordova + Vue + vite</h2>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>
