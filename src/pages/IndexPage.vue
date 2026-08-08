<script setup>
import ChipTitulo from '@/components/ChipTitulo.vue'
import ChipStatus from '@/components/ChipStatus.vue'
import SobreMi from '@/components/SobreMi.vue'
</script>

<template>
  <header class="my-5">
    <div class="flex align-items-center justify-content-between w-full chips-container">
      <ChipTitulo />
      <ChipStatus />
    </div>
    <div class="mt-5">
      <SobreMi />
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 700px) {
  .chips-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
