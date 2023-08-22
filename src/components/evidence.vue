<template>
  <div class="headerGrid mb-5">
    <div class="evidenceGrid mb-4">
      <evidence-button v-model="evidencesWithStates" :value="Evidence.DOTS">D.O.T.S Projector</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.EMF">EMF Level 5</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.ULTRAVIOLET">Ultraviolet</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.FREEZING">Freezing Temperatures</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.ORB">Ghost Orb</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.WRITING">Ghost Writing</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.BOX">Spirit Box</evidence-button>
      <evidence-button v-model="evidencesWithStates" :value="Evidence.SPEED">Normal Speed</evidence-button>
    </div>

    <div class="card span">
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
  grid-row-gap: 55px;
}

.headerGrid {
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 50px;
}

.wrongGhostGrid {
  display: grid;
  grid-template-columns: repeat(10, 0.5fr);
}

.crossedOut {
  text-decoration: line-through !important;
  color: darkgray;
}

.span {
  grid-column: span 2;
}
</style>

<script setup lang="ts">
import {computed} from "vue";
import {Evidence} from "~/src/model/Evidence";
import AllGhosts from "~/src/repository/AllGhosts";
import {useGhostStore} from "~/src/stores/ghostStore";
import EvidenceButton from "~/src/components/evidenceButton.vue";
import {EvidenceState} from "~/src/EvidenceState";

const store = useGhostStore();

const evidencesWithStates = ref<EvidenceState[]>([]);

let wrongGhosts = ref(store.wrongGhosts)
let possibleGhosts = computed(() => {
  let ghosts = new Set(AllGhosts);

  for (const ghost of ghosts) {
    for (const evidence of Object.keys(Evidence)) {
      const state = evidencesWithStates.value[Evidence[evidence]];

      if (ghost.name === "Mimik"
      && (evidence == Evidence.SPEED || evidence == "SPEED")) {
        continue;
      }

      if (!ghost.evidence.has(Evidence[evidence])
          && state === EvidenceState.Correct) {
        ghosts.delete(ghost);
      }

      if (ghost.evidence.has(Evidence[evidence])
          && state === EvidenceState.Incorrect) {
        ghosts.delete(ghost);
      }
    }

    if (wrongGhosts.value.has(ghost)) {
      ghosts.delete(ghost);
    }
  }

  return ghosts;
});

store.possibleGhosts = possibleGhosts;

</script>