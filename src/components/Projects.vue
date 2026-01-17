<script setup>
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="projects-header">
        <span class="section-label">PORTFOLIO</span>
        <h2 class="section-title-large">Featured Projects</h2>
        <p class="section-description">
          A showcase of my recent work in full-stack development and architectural system design.
        </p>
      </div>
      
      <div class="projects-grid-large">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>