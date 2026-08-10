<script setup>
import { Button } from 'primevue'
const nombreRedeSociales = ['GitHub', 'LinkedIn']

const acciones = [
  () => {
    window.open('https://github.com/paulazzaragoza', '_blank')
  },
  () => {
    window.open('https://www.linkedin.com/in/paula-mei-zaragoza-villegas-a383803b2/', '_blank')
  },
]

const iconos = ['pi pi-github', 'pi pi-linkedin']
</script>

<template>
  <div class="flex flex-wrap align-items-center gap-3 mt-3">
    <Button
      class="boton-contacto gap-2"
      v-for="(nombre, index) in nombreRedeSociales"
      :key="index"
      :label="nombre"
      :icon="iconos[index]"
      iconPos="right"
      @click="acciones[index]"
    >
    </Button>
  </div>
</template>

<style scoped>
.boton-contacto {
  font-family: var(--code-font);
  font-size: 1rem;
  font-weight: 700;
  min-width: 3rem;
  min-height: 2rem;
  background-color: var(--c-butter);
  border: var(--border-solid-ink);
  border-radius: 8px;
  box-shadow: var(--shadow-ink);
  padding: 0.4rem;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.boton-contacto:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-ink-hover);
}

.boton-contacto:active {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-ink-active);
}
</style>
