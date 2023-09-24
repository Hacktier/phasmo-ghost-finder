<template>
  <div class="ghostGrid" id="ghostGrid">
    <ghostCard :key="ghost.name" v-for="ghost in store.possibleGhosts"
               :ghost=ghost
    />
  </div>
</template>

<style scoped>
.ghostGrid {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 50px;
}
</style>

<script setup lang="ts">
import {useGhostStore} from "~/src/stores/ghostStore";
import GhostCard from "~/src/components/ghostCard.vue";
import {computed} from "vue";

const store = useGhostStore();

</script>