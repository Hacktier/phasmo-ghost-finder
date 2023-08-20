<script setup lang="ts">
import Ghosts from "~/src/components/ghosts.vue";
import {Evidence} from "~/src/model/Evidence";
import {useGhostStore} from "~/src/stores/ghostStore";
import {computed} from "vue";

const store = useGhostStore();


// defineProps(['ghostName', 'evidence', 'ability', 'strength', 'weakness', 'test']);
defineProps(['ghost']);

</script>


<template>
  <div class="card" v-bind:id="ghost.name">
    <div class="card-header fw-bold fs-4">
      {{ ghost.name }}
      <button @click="store.wrongGhosts.add(ghost)" class="btn btn-danger end-0 position-absolute me-3">X</button>
    </div>
    <div class="card-body">
      <table class="table table-striped card-text">
        <tbody>
        <tr>
          <th class="pe-5">Ability</th>
          <td>{{ ghost.ability }}</td>
        </tr>
        <tr>
          <th>St&auml;rke</th>
          <td>{{ ghost.strength }}</td>
        </tr>
        <tr>
          <th>Schw&auml;che</th>
          <td>{{ ghost.weakness }}</td>
        </tr>
        <tr>
          <th>Test</th>
          <td>{{ ghost.test }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>
