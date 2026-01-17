<script setup>
import { languages, frameworks, otherKnowledge } from '../data/portfolio'
import SkillBadge from './SkillBadge.vue'
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="skills-header">
        <span class="section-label">EXPERTISE</span>
        <h2 class="section-title-large">Skills & Education</h2>
      </div>

      <div class="skills-content">
        <div class="skill-category">
          <h3 class="category-title">💻 Languages</h3>
          <div class="category-grid">
            <div v-for="lang in languages" :key="lang.name" class="skill-item">
              <h4 class="skill-item-name">{{ lang.name }}</h4>
              <p class="skill-item-desc">{{ lang.description }}</p>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="category-title">🛠️ Tools & Frameworks</h3>
          <div class="category-grid-two">
            <div v-for="fw in frameworks" :key="fw.name" class="skill-item-large">
              <h4 class="skill-item-name">{{ fw.name }}</h4>
              <p class="skill-item-desc">{{ fw.description }}</p>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="category-title">📚 Other Knowledge</h3>
          <div class="knowledge-tags">
            <SkillBadge v-for="tag in otherKnowledge" :key="tag" :text="tag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>