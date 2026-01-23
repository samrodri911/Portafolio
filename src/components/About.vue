<script setup>
import { profile } from '../data/portfolio'
import { useLanguage } from '../composables/useLanguage'
import { computed } from 'vue'

const { t } = useLanguage()

// Convertimos el objeto de mindsets en un array para el v-for
const mindsetsArray = computed(() => [
  t.value.mindsets.engineering,
  t.value.mindsets.problemSolver,
  t.value.mindsets.fullStack
])

// Mapeamos los iconos basándonos en el índice
const getIcon = (index) => {
  if (index === 0) return 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z'; // Doc/Engineering
  if (index === 1) return 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'; // Rayo/Problem Solver
  return 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c1.091 0 2.115.245 3 .683A8.967 8.967 0 0 1 12 18c1.091 0 2.115.245 3 .683A8.967 8.967 0 0 1 18 18c1.091 0 2.115.245 3 .683v-14.25A8.987 8.987 0 0 0 18 3.75c-1.052 0-2.062.18-3 .512V6.042'; // Libro/Full-stack
}
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ t.about.title }}</h2>
      
      <div class="about-grid">
        <div class="about-card" data-aos="fade-right">
          <h3 class="about-card-title">{{ t.about.professionalSummary }}</h3>
          <p class="about-text">
            {{ t.about.summary }}
          </p>
          <p class="about-text">
            {{ t.about.approach }}
          </p>
          
          <a :href="profile.resumeUrl" target="_blank" class="btn-download-premium">
            <span>{{ t.about.downloadCV }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        <div class="skills-grid">
          <div 
            v-for="(item, index) in mindsetsArray" 
            :key="index" 
            class="skill-card-modern"
            data-aos="fade-left"
            :data-aos-delay="index * 100"
          >
            <div class="skill-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="getIcon(index)"></path>
              </svg>
            </div>
            <div class="skill-info">
              <h4 class="skill-title">{{ item.title }}</h4>
              <p class="skill-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos para el Botón de CV */
.btn-download-premium {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 2rem;
  padding: 12px 24px;
  background: var(--primary-muted);
  border: 1px solid var(--primary-border);
  color: var(--primary);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-download-premium:hover {
  background: var(--primary);
  color: #0f1310;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(125, 255, 184, 0.2);
}

.btn-download-premium svg {
  transition: transform 0.3s ease;
}

.btn-download-premium:hover svg {
  transform: translateY(2px);
}

/* Tarjetas de Mindset/Skills */
.skill-card-modern {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.05);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.skill-card-modern:hover {
  background: rgba(125, 255, 184, 0.05);
  border-color: var(--primary-border);
  transform: translateX(10px);
}

.skill-icon-box {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-muted);
  color: var(--primary);
  border-radius: 10px;
}

.skill-title {
  color: var(--text-main);
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.skill-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.about-card-title {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.about-text {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .skill-card-modern {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>