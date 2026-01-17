<script setup>
import { profile } from '../data/portfolio'

// Obtenemos el año actual automáticamente para que no tengas que cambiarlo nunca
const currentYear = new Date().getFullYear()

// Función para volver al inicio suavemente
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <p class="footer-text">
        © {{ currentYear }} {{ profile.name }}. All rights reserved.
      </p>

      <a @click="scrollToTop" class="back-to-top">
        Back to top ↑
      </a>
    </div>
  </footer>
</template>

<style scoped>
/* Los estilos ya están en main.css */
.back-to-top {
  cursor: pointer;
}
</style>