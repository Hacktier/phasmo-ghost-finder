<template>
  <div class="ghostGrid" id="ghostGrid">

    <!--    <ghostCard :key="ghost.name" v-for="ghost in ghosts"-->
    <!--               :ghostName="ghost.name"-->
    <!--               :ability="ghost.ability"-->
    <!--               :strength="ghost.strength"-->
    <!--               :weakness="ghost.weakness"-->
    <!--               :test="ghost.test"-->
    <!--    />-->
    <ghostCard :key="ghost.name" v-for="ghost in ghosts"
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

let wrongGhosts = ref(store.wrongGhosts);

let ghosts = computed(() => {
  return store.possibleGhosts;
});

</script>