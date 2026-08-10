<script setup>
import { Timeline } from 'primevue'
import TarjetaTrabajos from './TarjetaTrabajos.vue'

const { trabajos } = defineProps({
  trabajos: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Timeline :value="trabajos" class="w-full">
    <template #marker="{ item }">
      <span
        class="timeline-marker"
        :style="{
          '--dot-color': item.style.dotColor,
        }"
      />
    </template>

    <template #content="{ item }">
      <TarjetaTrabajos :trabajoInfo="item" />
    </template>
  </Timeline>
</template>

<style scoped>
.timeline-marker {
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--dot-color);
  border-radius: 50%;
  border: 2.5px solid var(--c-ink);
  box-shadow: var(--shadow-ink-timeline);
}
</style>
