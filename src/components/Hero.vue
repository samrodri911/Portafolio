<script setup>
import { profile } from '../data/portfolio'
import { ref, onMounted } from 'vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Efecto de tipado
const displayedRole = ref('')
const fullRole = "Full-Stack Developer"
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
          AVAILABLE FOR WORK
        </div>
        
        <h1 class="hero-title" data-aos="fade-right" data-aos-delay="100">
          Samuel<br/>
          <span class="hero-name">Rodríguez</span> Solarte
        </h1>
        
        <p class="hero-subtitle" data-aos="fade-right" data-aos-delay="200">
          {{ profile.role }} & {{ profile.education }} bridging the gap between theoretical excellence and scalable code.
        </p>

        <div class="hero-buttons" data-aos="fade-right" data-aos-delay="400">
          <button @click="scrollToSection('projects')" class="btn-primary btn-glow">
             View Projects
          </button>
          <button @click="scrollToSection('contact')" class="btn-secondary">
             Contact Me
          </button>
        </div>
      </div>

      <div class="hero-image" data-aos="zoom-in" data-aos-delay="300">
        <div class="dynamic-code-wrapper">
          
          <div class="code-preview floating-main">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot-red"></span>
                <span class="dot-amber"></span>
                <span class="dot-green"></span>
              </div>
              <span class="code-title">Main.ts</span>
            </div>
            <div class="code-content">
              <div class="code-line"><span class="keyword">import</span> { <span class="variable">Dev</span> } <span class="keyword">from</span> <span class="string">'@core'</span>;</div>
              <div class="code-line"></div>
              <div class="code-line"><span class="keyword">const</span> <span class="variable">samuel</span> = <span class="keyword">new</span> <span class="variable">Developer</span>({</div>
              <div class="code-line indent">name: <span class="string">'{{ profile.shortName }}'</span>,</div>
              <div class="code-line indent">role: <span class="string">'{{ displayedRole }}'</span><span class="cursor">_</span></div>
              <div class="code-line indent">skills: [<span class="string">'React'</span>, <span class="string">'Go'</span>, <span class="string">'AWS'</span>]</div>
              <div class="code-line">});</div>
              <div class="code-line"></div>
              <div class="code-line"><span class="variable">samuel</span>.<span class="keyword">deploy</span>();</div>
            </div>
          </div>

          <div class="glass-card floating-sub">
            <div class="stat-row">
              <span class="status-dot-green"></span>
              <span>System: <strong>Optimized</strong></span>
            </div>
          </div>

          <div class="code-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor más grande */
.dynamic-code-wrapper {
  position: relative;
  width: 100%;
  max-width: 550px; /* Aumentado */
  perspective: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ventana Principal */
.code-preview {
  width: 100%;
  background: rgba(10, 15, 12, 0.95);
  border: 1px solid rgba(125, 255, 184, 0.3);
  border-radius: 16px;
  padding: 5px;
  font-size: 1.1rem; /* Fuente más grande */
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
  z-index: 10;
}

/* Animación de flotación principal */
.floating-main {
  animation: floatMain 8s ease-in-out infinite;
}

@keyframes floatMain {
  0%, 100% { transform: translateY(0) rotateX(2deg) rotateY(-2deg); }
  50% { transform: translateY(-20px) rotateX(-2deg) rotateY(5deg); }
}

/* Tarjeta secundaria de cristal */
.glass-card {
  position: absolute;
  bottom: -30px;
  right: -20px;
  background: rgba(125, 255, 184, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(125, 255, 184, 0.2);
  padding: 15px 25px;
  border-radius: 12px;
  z-index: 20;
  color: #7dffb8;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
}

.floating-sub {
  animation: floatSub 5s ease-in-out infinite alternate;
}

@keyframes floatSub {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(-10px, -15px) scale(1.05); }
}

/* Estilo de la Mancha de Luz */
.code-glow {
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(125, 255, 184, 0.1) 0%, transparent 60%);
  z-index: 1;
  pointer-events: none;
  animation: pulseGlow 4s ease-in-out infinite alternate;
}

@keyframes pulseGlow {
  from { opacity: 0.3; transform: scale(0.8); }
  to { opacity: 0.7; transform: scale(1.1); }
}

/* Colores de Sintaxis */
.keyword { color: #c678dd; }
.variable { color: #e06c75; }
.string { color: #98c379; }
.cursor {
  color: var(--primary);
  animation: blink 1s infinite;
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* Media Query para móviles */
@media (max-width: 768px) {
  .dynamic-code-wrapper {
    max-width: 100%;
    transform: scale(0.9);
  }
  .glass-card { display: none; } /* Ocultar en móviles para no saturar */
}
</style>