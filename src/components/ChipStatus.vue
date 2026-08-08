<script setup>
import { Chip } from 'primevue'
</script>

<template>
  <Chip class="flex align-items-center justify-content-center status text-center gap-2">
    <span class="status-dot" />
    <span> Estudiando Ingeniería Informática • UMU </span>
  </Chip>
</template>

<style scoped>
.p-chip.status {
  font-family: var(--code-font);
  font-weight: 700;
  font-size: 0.9rem;
  --p-chip-background: var(--c-card);
  --p-chip-color: var(--c-ink);
  --p-chip-border-radius: 30px;
}

.status-dot {
  min-width: 10px;
  min-height: 10px;
  background-color: var(--c-matcha);
  border-radius: 10px;
  animation: pulse 1.25s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .p-chip.status {
    width: 100%;
  }
}
</style>
