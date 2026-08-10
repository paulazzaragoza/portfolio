<script setup></script>

<template>
  <img class="avatar-img" src="/me.jpeg" alt="Foto de perfil" />
</template>

<style scoped>
.avatar-img {
  background-color: var(--c-ink);
  width: 180px;
  height: 180px;
  display: block;
  object-fit: cover;
  box-shadow: var(--shadow-ink-avatar);
  border: var(--border-solid-ink);
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

@media (max-width: 400px) {
  .avatar-img {
    width: 160px;
    height: 160px;
  }
}
</style>
