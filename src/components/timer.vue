<script setup lang="ts">
import { defineComponent } from "vue";
import { useStopwatch } from 'vue-timer-hook';

const autoStart = false;
const stopwatch = useStopwatch(0, autoStart)
</script>

<template>
    <div class="mb-3">
        <span v-if="stopwatch.seconds.value < 10">0</span> {{stopwatch.minutes}} : <span v-if="stopwatch.seconds.value < 10">0</span> {{stopwatch.seconds}}
    </div>
    <button class="btn btn-success me-2" @click="stopwatch.start()">Start</button>
    <button class="btn btn-secondary me-2" @click="stopwatch.pause()">Pause</button>
    <button class="btn btn-danger" @click="stopwatch.reset()">Reset</button>
</template>

<style scoped>

</style>
