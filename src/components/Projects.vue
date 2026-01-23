<script setup>
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="projects-header" data-aos="fade-up">
        <h2 class="section-title">{{ t.projects.title }}</h2>
        <p class="section-description">
          {{ t.projects.description }}
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="{
            ...project,
            title: t.projects.items ? t.projects.items[index].title : project.title,
            description: t.projects.items ? t.projects.items[index].description : project.description
          }"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 80px 0;
}

.projects-header {
  margin-bottom: 3rem;
}

/* Título normalizado para que coincida con "About Me" */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 50px;
  height: 4px;
  background: var(--primary);
}

.section-description {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-top: 1rem;
  max-width: 600px;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* Espaciado más limpio entre tarjetas */
}
</style>