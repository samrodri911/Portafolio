<script setup>
// Importamos todos los componentes que creamos
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="portfolio">
    
    <Navbar />

    <Hero />

    <About />

    <Projects />

    <Skills />

    <Contact />

    <Footer />

  </div>
</template>

<style>
/* No añadimos estilos aquí porque ya configuramos 
   nuestro main.css global en el archivo main.js. 
   ¡Esto mantiene el código muy limpio!
*/
</style>