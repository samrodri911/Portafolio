<script setup>
// Definimos los "props" para que el componente sea dinámico
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="knowledge-tag">
    {{ text }}
  </span>
</template>

<style scoped>
/* El estilo .knowledge-tag ya está en tu main.css, 
   así que este componente lo heredará automáticamente. */
.knowledge-tag {
  display: inline-block;
  /* Añadimos un pequeño ajuste por si quieres usarlo fuera de un contenedor flex */
  margin: 0.2rem; 
}
</style>