<script setup>
import { Card, Button } from 'primevue'
import ChipSkills from './ChipSkills.vue'

const { proyectoInfo } = defineProps({
  proyectoInfo: {
    type: Object,
    required: true,
  },
})

const abrirEnlace = () => {
  window.open(proyectoInfo.link, '_blank')
}
</script>

<template>
  <Card
    class="proyecto-card"
    :style="{
      '--title-color': proyectoInfo.style.titleColor,
      '--rotation-deg': proyectoInfo.style.rotation,
    }"
  >
    <template #title>
      <div class="flex flex-column">
        <span class="proyecto-type"> {{ proyectoInfo.type }} </span>
        <span class="proyecto-name"> {{ proyectoInfo.title }} </span>
      </div>
    </template>

    <template #content>
      <p class="proyecto-content mt-2 mb-4">{{ proyectoInfo.content }}</p>
      <p class="proyecto-learnt">{{ proyectoInfo.learnt }}</p>

      <div class="mt-4">
        <ChipSkills :skills="proyectoInfo.tags" />
      </div>
    </template>

    <template #footer>
      <div class="footer-container mt-2 text-center">
        <Button
          class="mt-3 gap-2"
          @click="abrirEnlace"
          icon="pi pi-github"
          iconPos="right"
          label="GitHub"
        ></Button>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-button {
  font-family: var(--code-font);
  font-size: 1rem;
  font-weight: 700;
  min-height: 2rem;
  min-width: 10rem;
  background-color: var(--c-terracotta);
  color: var(--c-ink);
  border: var(--border-solid-ink);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-ink);
  padding: 0.4rem;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.p-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-ink);
}

.p-button:active {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-ink-active);
}

.footer-container {
  border-top: 2.5px dashed rgba(26, 25, 24, 0.2);
}

.p-card.proyecto-card {
  background-color: var(--c-card);
  box-shadow: var(--shadow-ink);
  color: var(--c-ink);
  transform: rotate(var(--rotation-deg));
  padding: 1rem;
  width: 25rem;
  min-height: 30rem;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.p-card.proyecto-card:hover {
  transform: rotate(0deg) translate(-2px, -2px) scale(1.05);
  box-shadow: var(--shadow-ink-hover);
}

.proyecto-type {
  color: var(--title-color);
  font-family: var(--code-font);
  font-size: 0.8rem;
  font-weight: 700;
}

.proyecto-name {
  color: var(--c-ink);
  font-family: var(--title-font);
  font-size: 1.5rem;
  font-weight: 700;
}

.proyecto-content {
  font-size: 1rem;
}

.proyecto-learnt {
  font-family: var(--code-font);
  font-weight: 700;
  background-color: var(--c-terracotta-alpha);
  border-left: 4px solid var(--c-terracotta);
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: 0 8px 8px 0;
}
</style>
