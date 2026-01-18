<script setup>
import { profile } from '../data/portfolio'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="availability" data-aos="fade-right">
          <span class="status-dot"></span>
          AVAILABLE FOR WORK
        </div>
        
        <h1 class="hero-title" data-aos="fade-right" data-aos-delay="100">
          Samuel<br/>
          <span class="hero-name">Rodríguez</span> Solarte
        </h1>
        
        <p class="hero-subtitle" data-aos="fade-right" data-aos-delay="200">
          {{ profile.role }} & {{ profile.education }} bridging the gap between theoretical excellence and scalable code.
        </p>

        <div class="hero-stats" data-aos="fade-right" data-aos-delay="300">
          <div class="stat-item">
            <div class="stat-number">2+</div>
            <div class="stat-label">Years Coding</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2+</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Technologies</div>
          </div>
        </div>

        <div class="hero-buttons" data-aos="fade-right" data-aos-delay="400">
          <button @click="scrollToSection('projects')" class="btn-primary btn-glow">
            <span class="btn-icon">📁</span>
            View Projects
          </button>
          <button @click="scrollToSection('contact')" class="btn-secondary">
            <span class="btn-icon">✉️</span>
            Contact Me
          </button>
        </div>
      </div>

      <div class="hero-image" data-aos="fade-left" data-aos-delay="200">
        <div class="code-preview">
          <div class="code-header">
            <div class="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="code-title">Main Stack</span>
          </div>
          <div class="code-content">
            <div class="code-line">
              <span class="keyword">const</span> <span class="variable">developer</span> = {
            </div>
            <div class="code-line indent">
              name: <span class="string">'{{ profile.shortName }}'</span>,
            </div>
            <div class="code-line indent">
              role: <span class="string">'Full-Stack Dev'</span>,
            </div>
            <div class="code-line indent">stack: [</div>
            <div class="code-line indent2">
              <span class="string">'React'</span>, <span class="string">'Next.js'</span>,
            </div>
            <div class="code-line indent2">
              <span class="string">'Node.js'</span>, <span class="string">'PostgreSQL'</span>
            </div>
            <div class="code-line indent">]</div>
            <div class="code-line">};</div>
          </div>
        </div>
        
        
      </div>
    </div>
  </section>
</template>