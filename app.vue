<script setup lang="ts">
import Evidence from "~/src/components/evidence.vue";
import Ghosts from "~/src/components/ghosts.vue";
import Navbar from "~/src/components/navbar.vue";
import Timer from "~/src/components/timer.vue";
import {ModalsContainer} from "vue-final-modal";

</script>

<template>
  <main>
    <Navbar />
      <div class="ms-5 me-5 mb-5">
          <Evidence/>
          <Ghosts/>
      </div>
  </main>
</template>

