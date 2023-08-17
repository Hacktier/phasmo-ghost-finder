<template>
  <div class="evidenceGrid">
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.DOTS" class="btn-check" id="dots" autocomplete="off">
      <label class="btn" for="dots">D.O.T.S Projector</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.EMF" class="btn-check" id="emf" autocomplete="off">
      <label class="btn" for="emf">EMF Level 5</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.FINGERPRINTS" class="btn-check" id="fingerprints"
             autocomplete="off">
      <label class="btn" for="fingerprints">Fingerprints</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.FREEZING" class="btn-check" id="freezing"
             autocomplete="off">
      <label class="btn" for="freezing">Freezing Temperatures</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.ORB" class="btn-check" id="orb" autocomplete="off">
      <label class="btn" for="orb"> Ghost Orb</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.WRITING" class="btn-check" id="writing"
             autocomplete="off">
      <label class="btn" for="writing">Ghost Writing</label>
    </div>
    <div class="mb-3">
      <input type="checkbox" v-model="evidences" :value="Evidence.BOX" class="btn-check" id="box" autocomplete="off">
      <label class="btn" for="box">Spirit Box</label>
    </div>
  </div>

<!--  <div v-for="ghost in possibleGhosts">{{ghost.name}}</div>-->
</template>

<style scoped>
.evidenceGrid {
  display: grid;
  grid-template-columns: repeat(4, 0.15fr);
  margin-bottom: 50px;
}

</style>

<script setup lang="ts">
import {computed} from "vue";
import {Evidence} from "~/src/model/Evidence";
import AllGhosts from "~/src/repository/AllGhosts";
import {useGhostStore} from "~/src/stores/ghostStore";

const store = useGhostStore();

let evidences = ref<string[]>([]);

let possibleGhosts = computed(() => {
  let ghosts = new Set(AllGhosts);

  for (let ghost of ghosts) {
    for (let real of evidences.value) {
      if (!ghost.evidence.has(real))
        ghosts.delete(ghost);
    }

    // for (let wrong of this.wrongEvidence) {
    //   if (ghost.evidence.has(wrong))
    //     this.ghosts.delete(ghost)
    // }
  }

  return ghosts;
});

store.possibleGhosts = possibleGhosts;




</script>