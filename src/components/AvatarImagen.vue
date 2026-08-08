<script setup></script>

<template>
  <img class="avatar-img" src="/me.png" alt="Foto de perfil" />
</template>

<style scoped>
.avatar-img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  box-shadow: var(--shadow-ink-avatar);
  border: 3px solid var(--c-ink);
  border-radius: 50%;
  transform: rotate(1.75deg);

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.avatar-img:hover {
  box-shadow: var(--shadow-ink-avatar-hover);
  transform: rotate(0deg) scale(1.03);
}
</style>
