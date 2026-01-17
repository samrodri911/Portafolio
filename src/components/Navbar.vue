<script setup>
import { profile } from '../data/portfolio'

// Función para scroll suave
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Función para descargar/ver CV
const downloadResume = () => {
  if (profile.resumeUrl !== '#') {
    window.open(profile.resumeUrl, '_blank')
  } else {
    alert('CV coming soon! Add your link in src/data/portfolio.js')
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <div class="logo-icon">{{ profile.initials }}</div>
        <span class="logo-text">{{ profile.name }}</span>
      </div>

      <nav class="nav">
        <a @click="scrollToSection('home')" class="nav-link">Home</a>
        <a @click="scrollToSection('projects')" class="nav-link">Projects</a>
        <a @click="scrollToSection('about')" class="nav-link">About</a>
        <a @click="scrollToSection('skills')" class="nav-link">Skills</a>
        <a @click="scrollToSection('contact')" class="nav-link">Contact</a>
        
        <button @click="downloadResume" class="btn-resume">
          Resume
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* No necesitamos estilos aquí porque ya los pusimos en main.css. 
   Esto hace que el componente sea súper limpio.
*/
</style>