<script setup>
import { profile } from '../data/portfolio'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

// Detectar scroll para cambiar el estilo del navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadResume = () => {
  if (profile.resumeUrl !== '#') {
    window.open(profile.resumeUrl, '_blank')
  }
}
</script>

<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="container nav-wrapper">
      <div class="logo" @click="scrollToSection('home')">
        <div class="logo-box">
          <span class="logo-initials">{{ profile.initials }}</span>
        </div>
        <span class="logo-text">{{ profile.name }}</span>
      </div>

      <nav class="nav-menu">
        <div class="nav-links">
          <a @click="scrollToSection('home')" class="nav-item">Home</a>
          <a @click="scrollToSection('projects')" class="nav-item">Projects</a>
          <a @click="scrollToSection('about')" class="nav-item">About</a>
          <a @click="scrollToSection('contact')" class="nav-item">Contact</a>
        </div>
        
        <button @click="downloadResume" class="nav-resume-btn">
          <span>Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Estructura Base */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

/* Efecto al hacer Scroll */
.header-scrolled {
  padding: 0.8rem 0;
  background: rgba(10, 15, 12, 0.8);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(125, 255, 184, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Estilizado */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-box {
  width: 40px;
  height: 40px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transform: rotate(-3deg);
  transition: transform 0.3s ease;
}

.logo:hover .logo-box {
  transform: rotate(0deg) scale(1.1);
}

.logo-initials {
  color: #0f1310;
  font-weight: 800;
  font-size: 1.2rem;
}

.logo-text {
  font-weight: 600;
  letter-spacing: -0.5px;
  color: var(--text-main);
}

/* Enlaces de Navegación */
.nav-links {
  display: flex;
  gap: 2rem;
  margin-right: 2rem;
}

.nav-item {
  position: relative;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: var(--primary);
}

.nav-item:hover::after {
  width: 100%;
}

/* Menú y Botón */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-resume-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-resume-btn:hover {
  background: var(--primary);
  color: #0f1310;
  box-shadow: 0 0 20px rgba(125, 255, 184, 0.4);
  transform: translateY(-2px);
}

/* Responsivo */
@media (max-width: 768px) {
  .nav-links { display: none; }
}
</style>