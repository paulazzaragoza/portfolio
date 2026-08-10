<script setup>
import { computed } from 'vue'
import { Button } from 'primevue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const language = computed(() => (locale.value === 'es' ? 'EN' : 'ES'))
const cambiarIdioma = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <Button
    class="titulo justify-content-center gap-2"
    :label="language"
    icon="pi pi-language"
    @click="cambiarIdioma"
  />
</template>

<style scoped>
.p-button.titulo {
  background-color: var(--c-card);
  color: var(--c-ink);
  font-family: var(--code-font);
  font-weight: 700;
  font-size: 0.9rem;
  border: var(--border-solid-ink);
  box-shadow: var(--shadow-ink);
  --p-button-border-radius: 30px;
  --p-button-padding-x: 0.8rem;
  --p-button-padding-y: 0.4rem;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.p-button.titulo:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-ink-hover);
}

.p-button.titulo:active {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-ink-active);
}
</style>
