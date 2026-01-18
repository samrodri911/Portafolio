<script setup>
import { profile, mindsets } from '../data/portfolio'
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      <div class="about-grid">
        <div class="about-card" data-aos="fade-right">
          <h3 class="about-card-title">Professional Summary</h3>
          <p class="about-text">
            {{ profile.summary }}
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
          <div 
            v-for="(item, index) in mindsets" 
            :key="item.title" 
            class="skill-card"
            data-aos="fade-left"
            :data-aos-delay="index * 100"
          >
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