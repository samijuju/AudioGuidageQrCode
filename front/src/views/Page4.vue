<template>
<h1>Page 4</h1>
  <button @click="router.push('/')">Retour</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>