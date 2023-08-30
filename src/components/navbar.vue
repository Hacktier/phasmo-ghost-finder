<script setup lang="ts">
import {defineComponent} from "vue";
import {useStopwatch} from 'vue-timer-hook';

const autoStart = false;
const stopwatch = useStopwatch(0, autoStart);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5" data-bs-theme="dark">
    <div class="container-fluid">
      <span class="navbar-brand" href="">Phasmo Ghost Finder</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://phasmo.karotte.org/" target="_blank">Maps</a>
          </li>
          <li class="nav-item">
            <button type="button" data-bs-toggle="modal" data-bs-target="#possesionsModal">
              Cursed Possesions
            </button>
          </li>
          <li class="nav-item">
            <button type="button" data-bs-toggle="modal" data-bs-target="#timerModal">
              Timer
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="modal fade" id="possesionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cursed Possesions</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <h1>Coming Soon!</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="timerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Timer</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
<!--          <div>-->
<!--            <span>{{ stopwatch.minutes }}</span>:<span>{{ stopwatch.seconds }}</span>-->
<!--          </div>-->
<!--          <p>{{ stopwatch.isRunning ? 'Running' : 'Not running' }}</p>-->
<!--          <button class="btn btn-primary btnColor me-2" @click="stopwatch.start()">Start</button>-->
<!--          <button class="btn btn-primary btnColor me-2" @click="stopwatch.pause()">Pause</button>-->
<!--          <button class="btn btn-primary btnColor" @click="stopwatch.reset(0, false)">Reset</button>-->
          <h1>Coming Soon!</h1>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
button {
  color: #FFFFFF8C;
  padding: 8px;
  border: none;
  background-color: transparent;

}

button:hover:focus {
  color: var(--bs-navbar-hover-color);
  background-color: transparent;
}

.btnColor {
  color: white;
  background-color: blue;
}
</style>
