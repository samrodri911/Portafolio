<script setup>
// Recibimos el objeto 'project' como prop
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="project-card-large">
    <div class="project-image">
      <div class="project-placeholder">
        <span v-if="project.title.toLowerCase().includes('inventory')">📊</span>
        <span v-else-if="project.title.toLowerCase().includes('ants')">🐜</span>
        <span v-else>💻</span>
      </div>
    </div>

    <div class="project-info">
      <h3 class="project-title-large">{{ project.title }}</h3>
      <p class="project-description-large">
        {{ project.description }}
      </p>

      <div class="project-links-large">
        <a :href="project.github" target="_blank" class="project-link-btn">
          <span>💻</span> GitHub
        </a>
        
        <a v-if="project.live" :href="project.live" target="_blank" class="project-link-btn primary">
          <span>🚀</span> Live Demo
        </a>
        <a v-else :href="project.github" target="_blank" class="project-link-btn">
          <span>👁️</span> View Source
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Los estilos base ya están en main.css */
</style>