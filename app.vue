<script setup lang="ts">
import Evidence from "~/src/components/evidence.vue";
import Ghosts from "~/src/components/ghosts.vue";

useHead({
  title: 'Phasmo Ghost Finder'

})
</script>

<template>
  <main class="ms-3 me-3">
    <h1 class="mb-5">Phasmophobia Ghost Finder</h1>
    <Evidence/>
    <Ghosts/>
  </main>
</template>

