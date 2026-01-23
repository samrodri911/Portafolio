<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Función para resolver la ruta de la imagen correctamente en Vite
const getImageUrl = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href
}
</script>

<template>
  <div class="project-card-large">
    <div class="project-image-container">
      <img 
        :src="getImageUrl(project.image)" 
        :alt="project.title"
        class="project-img"
      />
      <div class="image-overlay"></div>
    </div>

    <div class="project-info">
      <h3 class="project-title-large">{{ project.title }}</h3>
      <p class="project-description-large">
        {{ project.description }}
      </p>

      <div class="project-links-large">
        <a :href="project.github" target="_blank" class="project-link-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          {{ t.projects.sourceCode }}
        </a>
        
        <a 
          v-if="project.live && !project.title.toLowerCase().includes('ants')" 
          :href="project.live" 
          target="_blank" 
          class="project-link-btn primary-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          {{ t.projects.liveDemo }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos se mantienen exactamente iguales */
.project-image-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 300px;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card-large:hover .project-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to right, rgba(15, 19, 16, 0.4), transparent);
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(125, 255, 184, 0.1);
  color: #ffffff;
  text-decoration: none;
}

.primary-btn {
  background: rgba(125, 255, 184, 0.1);
  border-color: rgba(125, 255, 184, 0.3);
  color: #7dffb8;
}

.project-link-btn:hover {
  background: #7dffb8;
  color: #0f1310;
  transform: translateY(-2px);
}
</style>