<template>
  <div class="headerGrid mb-5">
    <div class="evidenceGrid mb-4">
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.DOTS" class="btn-check" id="dots"
               autocomplete="off">
        <label class="btn" for="dots">D.O.T.S Projector</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.EMF" class="btn-check" id="emf" autocomplete="off">
        <label class="btn" for="emf">EMF Level 5</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.ULTRAVIOLET" class="btn-check" id="fingerprints"
               autocomplete="off">
        <label class="btn" for="fingerprints">Ultraviolet</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.FREEZING" class="btn-check" id="freezing"
               autocomplete="off">
        <label class="btn" for="freezing">Freezing Temperatures</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.ORB" class="btn-check" id="orb" autocomplete="off">
        <label class="btn" for="orb"> Ghost Orb</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.WRITING" class="btn-check" id="writing"
               autocomplete="off">
        <label class="btn" for="writing">Ghost Writing</label>
      </div>
      <div>
        <input type="checkbox" v-model="evidences" :value="Evidence.BOX" class="btn-check" id="box" autocomplete="off">
        <label class="btn" for="box">Spirit Box</label>
      </div>
    </div>

    <div class="card">
      <div class="card-header fw-bold fs-4"> Incorrect Ghosts</div>
      <div class="wrongGhostGrid">
        <div v-for="wrongGhost in wrongGhosts" class="card-body ">
          <button @click="store.wrongGhosts.delete(wrongGhost)" class="btn btn-secondary">
            {{ wrongGhost.name }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <hr class="mb-5"/>
</template>

<style scoped>
.evidenceGrid {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 10px;
}

.headerGrid {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 50px;
}

.wrongGhostGrid {
  display: grid;
  grid-template-columns: repeat(5, 0.5fr);
}
</style>

<script setup lang="ts">
import {computed} from "vue";
import {Evidence} from "~/src/model/Evidence";
import AllGhosts from "~/src/repository/AllGhosts";
import {useGhostStore} from "~/src/stores/ghostStore";
import Ghost from "../model/Ghost";

const store = useGhostStore();

let evidences = ref(new Set<Evidence>());

let wrongGhosts = ref(store.wrongGhosts)
let possibleGhosts = computed(() => {
  let ghosts = new Set(AllGhosts);

  for (let ghost of ghosts) {
    for (let real of evidences.value) {
      if (!ghost.evidence.has(real)) {
        ghosts.delete(ghost);
      }
    }

    // for (let wrong of wrongEvidences.value) {
    //   if (ghost.evidence.has(wrong)) {
    //     ghosts.delete(ghost)
    //   }
    // }

    if (wrongGhosts.value.has(ghost)) {
      ghosts.delete(ghost);
    }
  }

  return ghosts;
});

store.possibleGhosts = possibleGhosts;


</script>