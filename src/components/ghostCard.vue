<script setup lang="ts">
import Ghosts from "~/src/components/ghosts.vue";
import {Evidence} from "~/src/model/Evidence";
import {useGhostStore} from "~/src/stores/ghostStore";
import {computed} from "vue";

const store = useGhostStore();

defineProps(['ghost']);

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

</script>
<template>
  <div class="card" v-bind:id="ghost.name">
    <div class="card-header">
       <span class="fw-bold fs-4 "> {{ ghost.name }}  </span>
        <a :href="'https://phasmophobia.fandom.com/wiki/' + ghost.name" target="_blank"  class="ms-2">
            <img class="imgSize" src="~/public/info.png">
        </a>
        <span class="end-0 position-absolute me-3">
            <span class="alert alert-danger me-4 p-2 alignHuntSanity" role="alert"> {{ ghost.huntSanity[0] }} {{ ghost.huntSanity[1] }} </span>
            <button @click="store.wrongGhosts.add(ghost)" class="btn btn-danger">X</button>
        </span>
    </div>
    <div class="card-body p-0">
      <table class="table table-striped card-text">
        <tbody>
        <tr>
            <th class="pe-5">Beweise</th>
            <td>
                <span v-for="evidence in ghost.evidence" class="me-2">
                    <span class="badge text-bg-primary">{{ Evidence[evidence] }}</span>
                </span>
            </td>
        </tr>
        <tr>
          <th class="pe-5">Fähigkeit</th>
          <td>{{ htmlDecode(ghost.ability) }}</td>
        </tr>
<!--        <tr>-->
<!--          <th>St&auml;rke</th>-->
<!--          <td>{{ htmlDecode(ghost.strength) }}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <th>Schw&auml;che</th>-->
<!--          <td>{{ htmlDecode(ghost.weakness) }}</td>-->
<!--        </tr>-->
        <tr>
          <th>Test</th>
          <td>{{ htmlDecode(ghost.test) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.imgSize {
   width: 20px;
    margin-top: -5px;
}

.alignHuntSanity {
    top: 2px;
}
</style>
