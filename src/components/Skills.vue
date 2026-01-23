<script setup>
import { otherKnowledge } from '../data/portfolio' // Solo dejamos otherKnowledge si no lo quieres traducir
import SkillBadge from './SkillBadge.vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="skills-header" data-aos="fade-up">
        <h2 class="section-title-large">{{ t.skills.title }}</h2> 
      </div>
      <br>
      <div class="skills-content">
        <div class="skill-category" data-aos="fade-up">
          <h3 class="category-title">{{ t.skills.languages }}</h3>
          <div class="category-grid">
            <div 
              v-for="(lang, index) in t.skills.languagesItems" 
              :key="index" 
              class="skill-item"
              data-aos="zoom-in"
              :data-aos-delay="index * 50"
            >
              <h4 class="skill-item-name">{{ lang.name }}</h4>
              <p class="skill-item-desc">{{ lang.description }}</p>
            </div>
          </div>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
          <h3 class="category-title">{{ t.skills.toolsFrameworks }}</h3>
          <div class="category-grid-two">
            <div 
              v-for="(fw, index) in t.skills.frameworksItems" 
              :key="index" 
              class="skill-item-large"
              data-aos="zoom-in"
              :data-aos-delay="index * 50"
            >
              <h4 class="skill-item-name">{{ fw.name }}</h4>
              <p class="skill-item-desc">{{ fw.description }}</p>
            </div>
          </div>
        </div>

        <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
          <h3 class="category-title">{{ t.skills.otherKnowledge }}</h3>
          <div class="knowledge-tags">
            <SkillBadge 
              v-for="(tag, index) in otherKnowledge" 
              :key="index" 
              :text="tag"
              data-aos="flip-up"
              :data-aos-delay="index * 30"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tus estilos se mantienen iguales */
</style>