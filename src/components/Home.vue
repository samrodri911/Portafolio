<script setup>
import { ref } from 'vue'

const skills = [
  {
    icon: '⚡',
    title: 'Engineering Mindset',
    description: 'Applying rigorous engineering principles to ensure robust, production-ready code.'
  },
  {
    icon: '🎯',
    title: 'Problem Solver',
    description: 'Deep diving into technical challenges to find elegant, efficient solutions.'
  },
  {
    icon: '🚀',
    title: 'Full-Stack Capability',
    description: 'End-to-end development from fluid user interfaces to optimized database queries.'
  }
]

const languages = [
  { name: 'Python', description: 'Logic & Automation' },
  { name: 'TypeScript', description: 'Type Safety & Scalability' },
  { name: 'C++', description: 'Performance & Core Logic' },
  { name: 'SQL', description: 'Database Modeling' }
]

const frameworks = [
  { name: 'React', description: 'Modern UI development with Hooks, Context API, and Tailwind CSS.' },
  { name: 'Next.JS', description: 'Scalable server-side applications with modular architecture.' },
  { name: 'Supabase', description: 'BaaS for database management, Auth, and Real-time subscriptions.' },
  { name: 'Git & CI/CD', description: 'Version control and automated deployment pipelines.' }
]

const otherKnowledge = [
  'RESTful APIs', 'Security / Agile', 'Software Architecture', 'UI/UX Principles', 'Docker', 'Unit Testing'
]

const projects = [
  {
    title: 'Web Inventory System',
    description: 'Full-stack integration featuring real-time data synchronization and complex state management. Developed with a focus on scalability, clean architecture, and intuitive user experiences for enterprise-level logistics.',
    tech: ['React', 'Node.js', 'Supabase'],
    github: 'https://github.com/samrodri911/Inventario.git',
    live: 'https://inventario-ymfk.vercel.app/login',
    image: 'inventory-preview.jpg'
  },
  {
    title: 'Game-Ants Engine',
    description: 'A performance-focused video game emphasizing Object-Oriented Programming (OOP), manual memory management, and efficient algorithm design for complex game mechanics.',
    tech: ['C++', 'OOP', 'Algorithms'],
    github: 'https://github.com/samrodri911/Game-Ants.git',
    image: 'game-preview.jpg'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadResume = () => {
  // Aquí puedes poner el link de tu CV cuando lo tengas
  // Opción 1: Link directo
  // window.open('https://tu-link-de-cv.com/cv.pdf', '_blank')
  
  // Opción 2: Por ahora mostrar mensaje
  alert('CV coming soon! Add your CV link in the downloadResume function.')
}
</script>

<template>
  <div class="portfolio">
    <!-- Header/Navigation -->
    <header class="header">
      <div class="container">
        <div class="logo">
          <div class="logo-icon">SR</div>
          <span class="logo-text">Samuel R. Solarte</span>
        </div>
        <nav class="nav">
          <a @click="scrollToSection('home')" class="nav-link">Home</a>
          <a @click="scrollToSection('projects')" class="nav-link">Projects</a>
          <a @click="scrollToSection('about')" class="nav-link">About</a>
          <a @click="scrollToSection('skills')" class="nav-link">Skills</a>
          <a @click="scrollToSection('contact')" class="nav-link">Contact</a>
          <button @click="downloadResume" class="btn-resume">Resume</button>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="availability">
            <span class="status-dot"></span>
            AVAILABLE FOR WORK
          </div>
          
          <h1 class="hero-title">
            Samuel<br/>
            <span class="hero-name">Rodríguez</span> Solarte
          </h1>
          
          <p class="hero-subtitle">
            Junior Full-Stack Software Developer & Engineering Student bridging the gap between theoretical excellence and scalable code.
          </p>

          <div class="hero-buttons">
            <button @click="scrollToSection('projects')" class="btn-primary">
              <span class="btn-icon">📁</span>
              View Projects
            </button>
            <button @click="scrollToSection('contact')" class="btn-secondary">
              <span class="btn-icon">✉️</span>
              Contact Me
            </button>
          </div>
        </div>

        <div class="hero-image">
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
              <div class="code-line"><span class="keyword">const</span> <span class="variable">developer</span> = {</div>
              <div class="code-line indent">name: <span class="string">'Samuel RS'</span>,</div>
              <div class="code-line indent">role: <span class="string">'Full-Stack Dev'</span>,</div>
              <div class="code-line indent">stack: [</div>
              <div class="code-line indent2"><span class="string">'React'</span>, <span class="string">'Next.js'</span>,</div>
              <div class="code-line indent2"><span class="string">'Node.js'</span>, <span class="string">'PostgreSQL'</span></div>
              <div class="code-line indent">]</div>
              <div class="code-line">};</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        
        <div class="about-grid">
          <div class="about-card">
            <h3 class="about-card-title">Professional Summary</h3>
            <p class="about-text">
              I am a Systems and Computing Engineering student at Pontificia Universidad Javeriana Cali, 
              focused on building scalable full-stack applications. Currently advancing my hands-on 
              development experience while maintaining a strong academic foundation.
            </p>
            <p class="about-text">
              My approach is centered on optimizing performance and user experience while 
              maintaining clean, maintainable codebases. I thrive on solving complex architectural 
              problems and learning emerging technologies to deliver production-ready solutions.
            </p>
            <button class="btn-download">
              Download CV <span class="download-icon">⬇</span>
            </button>
          </div>

          <div class="skills-grid">
            <div v-for="skill in skills" :key="skill.title" class="skill-card">
              <div class="skill-icon">{{ skill.icon }}</div>
              <div>
                <h4 class="skill-title">{{ skill.title }}</h4>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="projects-header">
          <span class="section-label">PORTFOLIO</span>
          <h2 class="section-title-large">Featured Projects</h2>
          <p class="section-description">
            A showcase of my recent work in full-stack development and architectural 
            system design. Focused on performance, scalability, and clean code.
          </p>
        </div>
        
        <div class="projects-grid-large">
          <div v-for="project in projects" :key="project.title" class="project-card-large">
            <div class="project-image">
              <div class="project-placeholder">
                <span v-if="project.title.includes('Inventory')">📊</span>
                <span v-else>🎮</span>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title-large">{{ project.title }}</h3>
              <p class="project-description-large">{{ project.description }}</p>
              <div class="project-links-large">
                <a :href="project.github" target="_blank" class="project-link-btn">
                  <span>💻</span> GitHub
                </a>
                <a v-if="project.live" :href="project.live" target="_blank" class="project-link-btn primary">
                  <span>🚀</span> Live Demo
                </a>
                <a v-else class="project-link-btn">
                  <span>👁️</span> View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="skills-header">
          <span class="section-label">EXPERTISE</span>
          <h2 class="section-title-large">Skills & Education</h2>
          <p class="section-description">
            A curated overview of my technical arsenal and academic journey as a Software Engineer.
          </p>
        </div>

        <div class="skills-content">
          <!-- Languages -->
          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">💻</span> Languages
            </h3>
            <div class="category-grid">
              <div v-for="lang in languages" :key="lang.name" class="skill-item">
                <div class="skill-item-header">
                  <span class="skill-item-icon">{ }</span>
                  <h4 class="skill-item-name">{{ lang.name }}</h4>
                </div>
                <p class="skill-item-desc">{{ lang.description }}</p>
              </div>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">🛠️</span> Frameworks & Tools
            </h3>
            <div class="category-grid-two">
              <div v-for="framework in frameworks" :key="framework.name" class="skill-item-large">
                <div class="skill-item-header">
                  <span class="skill-item-icon">⚛️</span>
                  <h4 class="skill-item-name">{{ framework.name }}</h4>
                </div>
                <p class="skill-item-desc">{{ framework.description }}</p>
              </div>
            </div>
          </div>

          <!-- Other Knowledge -->
          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">📚</span> Other Knowledge
            </h3>
            <div class="knowledge-tags">
              <span v-for="item in otherKnowledge" :key="item" class="knowledge-tag">
                {{ item }}
              </span>
            </div>
          </div>

          <!-- Education -->
          <div class="education-section">
            <h3 class="category-title">
              <span class="category-icon">🎓</span> Education
            </h3>
            <div class="education-card">
              <div class="education-icon">🏛️</div>
              <div class="education-content">
                <div class="education-header">
                  <h4 class="education-title">Systems Engineering</h4>
                  <span class="education-status">IN PROGRESS</span>
                </div>
                <p class="education-school">Pontificia Universidad Javeriana Cali</p>
                <p class="education-period">2020 — Present • Cali, Colombia</p>
                <p class="education-description">
                  Focused on Full-Stack Development, Distributed Systems, and Software Architecture. 
                  Actively participating in research projects involving modern web technologies and scalable database solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-content">
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
            <a href="mailto:samrosolar2007@gmail.com" class="contact-email">
              samrosolar2007@gmail.com
            </a>
          </div>
        </div>

        <div class="contact-socials">
          <a href="https://linkedin.com" target="_blank" class="social-card">
            <span class="social-icon">💼</span>
            <div>
              <p class="social-label">LINKEDIN</p>
              <p class="social-handle">@samuel-rodriguez</p>
            </div>
          </a>
          <a href="https://github.com/samrodri911" target="_blank" class="social-card">
            <span class="social-icon">📂</span>
            <div>
              <p class="social-label">GITHUB</p>
              <p class="social-handle">@sam-solar-dev</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <p class="footer-text">© 2026 Samuel Rodríguez Solarte · Built with precision.</p>
        <a href="#home" @click="scrollToSection('home')" class="back-to-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio {
  background: #0f1310;
  color: #e8ede8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  background: rgba(15, 19, 16, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1a3329, #2d5a47);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  color: #7dffb8;
}

.logo-text {
  font-weight: 500;
  font-size: 1rem;
  color: #e8ede8;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #9ca89f;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-link:hover {
  color: #7dffb8;
}

.btn-resume {
  background: #1f2421;
  color: #e8ede8;
  border: 1px solid #2d3330;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.btn-resume:hover {
  background: #2d3330;
  border-color: #3d4340;
}

/* Hero Section */
.hero {
  padding: 6rem 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7dffb8;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 2rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #7dffb8;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.hero-name {
  color: #7dffb8;
  font-weight: 700;
}

.hero-subtitle {
  color: #9ca89f;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  font-weight: 500;
}

.btn-primary {
  background: #1a3329;
  color: #7dffb8;
  border: 1px solid #2d5a47;
}

.btn-primary:hover {
  background: #2d5a47;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(26, 51, 41, 0.3);
  color: #7dffb8;
  border: 1px solid #1a3329;
}

.btn-secondary:hover {
  background: rgba(26, 51, 41, 0.5);
}

/* Code Preview */
.code-preview {
  background: #161b17;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.15);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.code-header {
  background: #0d1311;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.code-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1a3329;
}

.code-title {
  color: #7dffb8;
  font-size: 0.8rem;
}

.code-content {
  padding: 2rem 1.5rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
}

.code-line {
  color: #9ca89f;
}

.indent { padding-left: 1.5rem; }
.indent2 { padding-left: 3rem; }

.keyword { color: #ff79c6; }
.variable { color: #8be9fd; }
.string { color: #7dffb8; }

/* About Section */
.about {
  padding: 6rem 0;
  background: #0d1311;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 700;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.about-card {
  background: #161b17;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.1);
}

.about-card-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #7dffb8;
  font-weight: 600;
}

.about-text {
  color: #9ca89f;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.btn-download {
  background: #1a3329;
  color: #7dffb8;
  border: 1px solid #2d5a47;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-download:hover {
  background: #2d5a47;
  transform: translateY(-2px);
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-card {
  background: #161b17;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.1);
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.skill-icon {
  font-size: 2rem;
}

.skill-title {
  color: #7dffb8;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.skill-description {
  color: #9ca89f;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Projects Section */
.projects-section {
  padding: 6rem 0;
  background: #0f1310;
}

.projects-header {
  max-width: 700px;
  margin-bottom: 4rem;
}

.section-label {
  color: #7dffb8;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: block;
}

.section-title-large {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 700;
}

.section-description {
  color: #9ca89f;
  font-size: 1rem;
  line-height: 1.7;
}

.projects-grid-large {
  display: grid;
  gap: 3rem;
}

.project-card-large {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  background: #161b17;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(125, 255, 184, 0.1);
  transition: transform 0.3s, border-color 0.3s;
}

.project-card-large:hover {
  transform: translateY(-5px);
  border-color: rgba(125, 255, 184, 0.3);
}

.project-image {
  background: #0d1311;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  font-size: 5rem;
  opacity: 0.3;
}

.project-info {
  padding: 2.5rem 2.5rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title-large {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
}

.project-description-large {
  color: #9ca89f;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 0.95rem;
}

.project-links-large {
  display: flex;
  gap: 1rem;
}

.project-link-btn {
  color: #7dffb8;
  text-decoration: none;
  padding: 0.65rem 1.25rem;
  border: 1px solid #1a3329;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(26, 51, 41, 0.2);
}

.project-link-btn:hover {
  background: rgba(26, 51, 41, 0.4);
  border-color: #2d5a47;
}

.project-link-btn.primary {
  background: #1a3329;
  border-color: #2d5a47;
}

.project-link-btn.primary:hover {
  background: #2d5a47;
}

/* Skills Section */
.skills-section {
  padding: 6rem 0;
  background: #0d1311;
}

.skills-header {
  max-width: 700px;
  margin-bottom: 4rem;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category {
  background: #161b17;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.1);
}

.category-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
}

.category-icon {
  font-size: 1.75rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.category-grid-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item,
.skill-item-large {
  background: #0d1311;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(125, 255, 184, 0.08);
}

.skill-item-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.skill-item-icon {
  font-size: 1.5rem;
  color: #7dffb8;
}

.skill-item-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
}

.skill-item-desc {
  color: #9ca89f;
  font-size: 0.9rem;
  line-height: 1.6;
}

.knowledge-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.knowledge-tag {
  background: #0d1311;
  color: #9ca89f;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid rgba(125, 255, 184, 0.08);
}

.education-section {
  background: #161b17;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.1);
}

.education-card {
  background: #0d1311;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  gap: 1.5rem;
  border: 1px solid rgba(125, 255, 184, 0.08);
}

.education-icon {
  font-size: 3rem;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.education-title {
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 600;
}

.education-status {
  background: rgba(125, 255, 184, 0.15);
  color: #7dffb8;
  padding: 0.4rem 0.9rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.education-school {
  color: #9ca89f;
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  font-weight: 500;
}

.education-period {
  color: #6a7a76;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.education-description {
  color: #9ca89f;
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  background: #0f1310;
}

.contact-section .container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 700;
}

.contact-highlight {
  color: #7dffb8;
}

.contact-text {
  color: #9ca89f;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #161b17;
  padding: 1.25rem 1.75rem;
  border-radius: 8px;
  border: 1px solid rgba(125, 255, 184, 0.1);
  max-width: fit-content;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-email {
  color: #7dffb8;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.contact-email:hover {
  color: #a0ffce;
}

.contact-socials {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social-card {
  background: #161b17;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid rgba(125, 255, 184, 0.1);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  transition: all 0.3s;
}

.social-card:hover {
  border-color: rgba(125, 255, 184, 0.3);
  transform: translateY(-3px);
}

.social-icon {
  font-size: 2rem;
}

.social-label {
  color: #6a7a76;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 0.25rem;
}

.social-handle {
  color: #7dffb8;
  font-size: 1rem;
}

/* Footer */
.footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #0d1311;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text {
  color: #6a7a76;
  font-size: 0.9rem;
}

.back-to-top {
  color: #7dffb8;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s;
  cursor: pointer;
}

.back-to-top:hover {
  color: #a0ffce;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-grid,
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .project-card-large {
    grid-template-columns: 1fr;
  }

  .project-info {
    padding: 2rem;
  }

  .contact-section .container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .category-grid,
  .category-grid-two {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title-large {
    font-size: 2rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .hero,
  .about,
  .projects-section,
  .skills-section,
  .contact-section {
    padding: 4rem 0;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-title-large {
    font-size: 1.75rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>