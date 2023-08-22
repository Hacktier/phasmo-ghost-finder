<script setup lang="ts">
import {EvidenceState} from "~/src/EvidenceState";
import {computed} from "vue";
import {Evidence} from "~/src/model/Evidence";

const props = defineProps<{
  modelValue: EvidenceState[],
  value: Evidence
}>();

const emit = defineEmits<{
  'update:modelValue': [value: EvidenceState[]]
}>();

const state = computed(() => props.modelValue[props.value] ?? EvidenceState.Unknown);

function cycleThrough() {
  const clone = [...props.modelValue];

  if (state.value === EvidenceState.Unknown) {
    clone[props.value] = EvidenceState.Correct;
    emit('update:modelValue', clone);
    return;
  }

  if (state.value === EvidenceState.Correct) {
    clone[props.value] = EvidenceState.Incorrect;
    emit('update:modelValue', clone);
    return;
  }

  if (state.value === EvidenceState.Incorrect) {
    clone[props.value] = EvidenceState.Unknown;
    emit('update:modelValue', clone);
    return;
  }
}

</script>

<template>
  <button class="btn"
          :class="{ 'crossedOut': state === EvidenceState.Incorrect, 'btn-outline-dark': state === EvidenceState.Correct }"
          @click="cycleThrough"
  >
    <slot/>
  </button>
</template>

