<script setup lang="ts">
import Evidence from "~/src/components/evidence.vue";
import Ghosts from "~/src/components/ghosts.vue";
import Navbar from "~/src/components/navbar.vue";
import Timer from "~/src/components/timer.vue";

</script>

<template>
<!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--    Launch demo modal-->
<!--  </button>-->

<!--  &lt;!&ndash; Modal &ndash;&gt;-->
<!--  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--    <div class="modal-dialog">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>-->
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->
<!--          ...-->
<!--        </div>-->
<!--        <div class="modal-footer">-->
<!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--          <button type="button" class="btn btn-primary">Save changes</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <main>
    <Navbar />
      <div class="ms-5 me-5 mb-5">
          <Evidence/>
          <Ghosts/>
      </div>
  </main>
</template>

