<script setup lang="ts">
const { data } = await useFetch('/api/[word]/[word]')
// Pointe sur le fichier [path]/[word].ts
</script>

<template>
  <pre>{{ data }}</pre>
</template>
