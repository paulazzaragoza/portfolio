<script setup>
import { Chip } from 'primevue'

const tags = [
  '#Java',
  '#SpringBoot',
  '#SpringSecurity',
  '#RESTAPI',
  '#VueJS3',
  '#JavaScript',
  '#SQLServer',
  '#PowerBI',
  '#Swift',
  '#SwiftUI',
  '#Figma',
  '#Swagger',
  '#Bruno',
  '#HATEOAS',
  '#Xcode',
]
</script>

<template>
  <div class="flex flex-wrap justify-content-center align-items-center gap-1 mt-6 mb-4">
    <Chip v-for="tag in tags" class="chip-tag" :key="tag" :label="tag"> </Chip>
  </div>
</template>

<style scoped>
.chip-tag {
  font-family: var(--code-font);
  font-size: 0.85rem;
  font-weight: 700;
  background-color: var(--c-cream);
  border: var(--border-solid-ink);
  box-shadow: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
}
</style>
