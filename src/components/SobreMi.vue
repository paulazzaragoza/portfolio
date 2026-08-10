<script setup>
import AvatarImagen from './AvatarImagen.vue'
import ContactoBotones from './ContactoBotones.vue'
import ChipTags from './ChipTags.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="card-container">
    <header style="grid-area: card-title">
      <h3 class="mb-4">
        {{ t('sobre-mi.welcome') }} <span class="highlight-name">{Paula Mei}</span>
      </h3>
    </header>

    <section class="flex flex-column gap-4 mt-2" style="grid-area: card-content">
      <p>
        {{ t('sobre-mi.first-paragraph-start') }} <strong>{{ t('sobre-mi.degree') }}</strong>
        {{ t('sobre-mi.first-paragraph-end') }}
      </p>
      <p class="subtitle">
        {{ t('sobre-mi.second-paragraph') }}
      </p>
    </section>

    <div class="flex justify-content-center" style="grid-area: card-img">
      <AvatarImagen />
    </div>

    <ChipTags style="grid-area: card-chips" />

    <footer style="grid-area: card-footer"><ContactoBotones /></footer>
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
  padding: 2rem;

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

@media (max-width: 400px) {
  .card-container {
    padding: 1rem;
  }
}
</style>
