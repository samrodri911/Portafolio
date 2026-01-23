<script setup>
import { profile } from '../data/portfolio'
import { useLanguage } from '../composables/useLanguage'
import { ref, onMounted } from 'vue'

const { t } = useLanguage()

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const displayedRole = ref('')
const fullRole = t.value.hero.role
const typeSpeed = 100

onMounted(() => {
  let i = 0
  const typeWriter = () => {
    if (i < fullRole.length) {
      displayedRole.value += fullRole.charAt(i)
      i++
      setTimeout(typeWriter, typeSpeed)
    }
  }
  typeWriter()
})
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="availability" data-aos="fade-right">
          <span class="status-dot"></span>
          {{ t.hero.availability }}
        </div>
        
        <h1 class="hero-title" data-aos="fade-right" data-aos-delay="100">
          Samuel<br/>
          <span class="hero-name">Rodríguez</span> Solarte
        </h1>
        
        <p class="hero-subtitle" data-aos="fade-right" data-aos-delay="200">
          {{ t.hero.role }} & {{ t.hero.education }} {{ t.hero.subtitle }}
        </p>

        <div class="hero-buttons" data-aos="fade-right" data-aos-delay="400">
          <button @click="scrollToSection('projects')" class="btn-primary btn-glow">
            {{ t.hero.viewProjects }}
          </button>
          <button @click="scrollToSection('contact')" class="btn-secondary">
            {{ t.hero.contactMe }}
          </button>
        </div>
      </div>

      <!-- El resto del código sigue igual... -->
    </div>
  </section>
</template>