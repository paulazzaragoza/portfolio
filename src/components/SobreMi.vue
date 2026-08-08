<script setup>
import AvatarImagen from './AvatarImagen.vue'
</script>

<template>
  <div class="card-container py-5 px-5">
    <header style="grid-area: card-title">
      <h3>¡Hola! Soy <span class="highlight-name">{Paula Mei}</span></h3>
    </header>
    <section class="flex flex-column gap-3" style="grid-area: card-content">
      <p>
        Estudiante de <strong>Ingeniería del Software</strong>. Me gusta construir cosas para que
        sean rápidas, legibles y que no compliquen la vida al usuario.
      </p>
      <p class="subtitle">
        Actualmente peleando con los exámenes de fin de curso y aprendiendo arquitectura de software
        por mi cuenta.
      </p>
    </section>
    <div style="grid-area: card-chips">CHIPS</div>
    <div class="flex justify-content-center" style="grid-area: card-img">
      <AvatarImagen />
    </div>
    <footer style="grid-area: card-footer">ADIOSs</footer>
  </div>
</template>

<style scoped>
.highlight-name {
  background: linear-gradient(180deg, transparent 50%, var(--c-butter) 50%);
  padding: 0 1rem;
}
.card-container {
  width: 100%;
  min-height: 30rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'card-title card-title card-title card-title card-title'
    'card-content card-content card-content card-img card-img'
    'card-content card-content card-content card-img card-img'
    'card-chips card-chips card-chips card-chips card-chips'
    'card-footer card-footer card-footer card-footer card-footer';

  background: var(--c-card);
  border: var(--border-solid-ink);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-ink-card);
}

footer {
  border-top: 2.5px dashed rgba(26, 25, 24, 0.2);
}

@media (max-width: 700px) {
  .card-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'card-img'
      'card-img'
      'card-title'
      'card-content'
      'card-chips'
      'card-footer';

    gap: 1rem;
  }
}
</style>
