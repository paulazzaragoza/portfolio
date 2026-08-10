<script setup>
import { Chip } from 'primevue'

const { skills } = defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-wrap align-items-center gap-1 mb-2 container">
    <Chip v-for="(skill, index) in skills" class="chip-skill" :key="index" :label="skill" />
  </div>
</template>

<style scoped>
.chip-skill {
  color: var(--c-ink);
  font-family: var(--code-font);
  font-size: 0.85rem;
  font-weight: 700;
  background-color: var(--c-cream);
  border: 2px solid var(--c-ink);
  box-shadow: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
}

.container {
  margin-top: 1.25rem;
  margin-bottom: 1rem;
}

@media (max-width: 700px) {
  .container {
    justify-content: center;
    margin-top: 0.25rem;
    margin-bottom: 0.2rem;
  }
}
</style>
