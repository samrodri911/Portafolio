<script setup>
// Importamos 'profile' para el texto y 'mindsets' para las tarjetas
import { profile, mindsets } from '../data/portfolio'

// Como tu objeto profile no tenía la propiedad 'summary', 
// usamos una descripción por defecto basada en lo que ya escribiste.
const defaultSummary = "I am a Systems and Computing Engineering student at Pontificia Universidad Javeriana Cali, focused on building scalable full-stack applications. Currently advancing my hands-on development experience while maintaining a strong academic foundation."
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-card">
          <h3 class="about-card-title">Professional Summary</h3>
          <p class="about-text">
            {{ profile.summary || defaultSummary }}
          </p>
          <p class="about-text">
            My approach is centered on optimizing performance and user experience while 
            maintaining clean, maintainable codebases. I thrive on solving complex architectural 
            problems and learning emerging technologies.
          </p>
          <a :href="profile.resumeUrl" target="_blank" class="btn-download">
            Download CV <span class="download-icon">⬇</span>
          </a>
        </div>

        <div class="skills-grid">
          <div v-for="item in mindsets" :key="item.title" class="skill-card">
            <div class="skill-icon">{{ item.icon }}</div>
            <div>
              <h4 class="skill-title">{{ item.title }}</h4>
              <p class="skill-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>