<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-content" data-aos="fade-up">
        <h2 class="contact-title">
          Let's build something <br/>
          <span class="contact-highlight">remarkable</span> together.
        </h2>
        <p class="contact-text">
          I am currently open to new opportunities and collaborations. Whether you have a question 
          or just want to say hi, my inbox is always open!
        </p>
        <div class="contact-info">
          <span class="contact-icon">✉️</span>
          <a :href="'mailto:' + profile.email" class="contact-email">
            {{ profile.email }}
          </a>
        </div>
      </div>

      <div class="contact-socials">
        <a 
          :href="profile.linkedin" 
          target="_blank" 
          class="social-card"
          data-aos="fade-right"
        >
          <span class="social-icon">💼</span>
          <div>
            <p class="social-label">LINKEDIN</p>
            <p class="social-handle">@samuel-rodriguez</p>
          </div>
        </a>
        <a 
          :href="profile.github" 
          target="_blank" 
          class="social-card"
          data-aos="fade-left"
        >
          <span class="social-icon">📂</span>
          <div>
            <p class="social-label">GITHUB</p>
            <p class="social-handle">@samrodri911</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>