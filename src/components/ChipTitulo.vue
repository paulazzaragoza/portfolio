<script setup>
import { Chip } from 'primevue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Chip class="titulo justify-content-center" :label="t('chip-titulo.title')" />
</template>

<style scoped>
.p-chip.titulo {
  font-family: var(--text-font);
  font-size: 1.3rem;
  transform: rotate(-2deg);
  --p-chip-background: var(--c-butter);
  --p-chip-color: var(--c-ink);
  --p-chip-border-radius: var(--border-radius);

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.p-chip.titulo:hover {
  transform: rotate(-2deg) translate(-2px, -2px);
  box-shadow: var(--shadow-ink-hover);
}

.p-chip.titulo:active {
  transform: rotate(-2deg) translate(2px, 2px);
  box-shadow: var(--shadow-ink-active);
}

@media (max-width: 800px) {
  .p-chip.titulo {
    transform: rotate(-1.25deg);
    width: 100%;
  }

  .p-chip.titulo:hover {
    transform: rotate(-1.25deg);
  }

  .p-chip.titulo:active {
    transform: rotate(-1.25deg);
  }
}
</style>
