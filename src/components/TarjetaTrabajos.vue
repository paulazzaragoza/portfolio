<script setup>
import ChipSkills from './ChipSkills.vue'
import { Chip } from 'primevue'

const { trabajoInfo } = defineProps({
  trabajoInfo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="card-container"
    :style="{
      '--rotation-deg': trabajoInfo.style.rotation,
    }"
  >
    <header class="trabajo-title-container">
      <span class="trabajo-role" style="grid-area: posicion-trabajo">
        {{ trabajoInfo.role }}
      </span>
      <span class="trabajo-company" style="grid-area: lugar-trabajo">
        {{ trabajoInfo.company }}
      </span>
      <Chip class="trabajo-date" :label="trabajoInfo.date" style="grid-area: fecha-trabajo" />
    </header>

    <section class="mt-3">
      <p class="trabajo-description">{{ trabajoInfo.description }}</p>
      <ul class="mt-4 highlight">
        <li v-for="(highlight, index) in trabajoInfo.highlights" :key="index">{{ highlight }}</li>
      </ul>
    </section>

    <footer>
      <div class="mt-4">
        <ChipSkills :skills="trabajoInfo.tags" />
      </div>
    </footer>
  </div>
</template>

<style scoped>
.trabajo-description {
  font-size: 1.1rem;
}

.card-container {
  width: 100%;
  min-height: 20rem;
  padding: 2rem;
  margin-bottom: 2rem;
  transform: rotate(var(--rotation-deg));
  background: var(--c-card);
  border: var(--border-solid-ink);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-ink);

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.card-container:hover {
  transform: rotate(var(--rotation-deg)) scale(1.03);
  background: var(--c-card);
  border: var(--border-solid-ink);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-ink-hover);
}

.trabajo-title-container {
  display: grid;
  grid-template-columns: 1fr auto;

  grid-template-areas:
    'posicion-trabajo fecha-trabajo'
    'lugar-trabajo lugar-trabajo';
}

.trabajo-role {
  color: var(--c-ink);
  font-family: var(--title-font);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.5rem;
}

.trabajo-company {
  color: var(--c-terracotta);
  font-family: var(--text-font);
  font-size: 0.9rem;
  font-weight: 700;
}

.trabajo-date {
  color: var(--c-ink);
  font-family: var(--code-font);
  font-size: 0.85rem;
  font-weight: 700;
  background-color: var(--c-cream);
  border: 2px solid var(--c-ink);
  box-shadow: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  transform: rotate(2deg);
}

ul {
  list-style-type: disc;
}

@media (max-width: 1030px) {
  .trabajo-title-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'posicion-trabajo'
      'lugar-trabajo'
      'fecha-trabajo';
  }

  .trabajo-date {
    width: fit-content;
    margin-top: 0.5rem;
    transform: rotate(1deg);
  }
}
</style>
