<template>
<h1>Page 5</h1>
  <button @click="router.push('/')">Retour</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>