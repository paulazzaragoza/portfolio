<script setup>
import ChipTitulo from '@/components/ChipTitulo.vue'
import ChipStatus from '@/components/ChipStatus.vue'
import BotonIdioma from '@/components/BotonIdioma.vue'
import SobreMi from '@/components/SobreMi.vue'
import ExperienciaTimeline from '@/components/ExperienciaTimeline.vue'
import TarjetaProyectos from '@/components/TarjetaProyectos.vue'
import { Chip } from 'primevue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()
const proyectos = computed(() => tm('proyectos'))
const trabajos = computed(() => tm('trabajos'))
const year = new Date().getFullYear()
</script>

<template>
  <header class="my-5">
    <div class="flex align-items-center justify-content-between w-full chips-container">
      <ChipTitulo />
      <div class="sub-chips-container">
        <ChipStatus />
        <BotonIdioma />
      </div>
    </div>
    <div class="mt-5">
      <SobreMi />
    </div>
  </header>

  <main class="mt-7">
    <section>
      <Chip class="section-title mb-4">{{ t('seccion-proyectos.title') }}</Chip>

      <div class="proyectos-container">
        <TarjetaProyectos
          v-for="(proyecto, index) in proyectos"
          :key="index"
          :proyectoInfo="proyecto"
        />
      </div>
    </section>
    <Chip class="section-title mt-7 mb-4">{{ t('seccion-experiencia.title') }}</Chip>
    <ExperienciaTimeline :trabajos="trabajos" />
    <section></section>
  </main>

  <footer class="my-7 text-center">
    <hr />
    <p class="footer-text">{{ t('footer.title') }} © {{ year }}</p>
  </footer>
</template>

<style scoped>
.footer-text {
  font-family: var(--code-font);
  font-weight: 700;
  font-size: 0.9rem;
  padding-top: 0.85rem;
}

.proyectos-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.sub-chips-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.section-title {
  font-family: var(--title-font);
  font-size: 1.75rem;
  background-color: var(--c-butter);
  border-radius: var(--border-radius);

  --p-chip-padding-x: 0.4rem;
  --p-chip-padding-y: none;
}

@media (max-width: 950px) {
  body {
    padding: 0 1.25rem;
  }
}

@media (max-width: 800px) {
  .chips-container {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 390px) {
  .sub-chips-container {
    flex-direction: column;
  }
}
</style>
