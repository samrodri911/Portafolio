<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import AnimatedBg from './components/AnimatedBg.vue'
</script>

<template>
  <div class="portfolio">
    <AnimatedBg /> <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>