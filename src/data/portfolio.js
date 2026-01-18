// src/data/portfolio.js

export const profile = {
  name: 'Samuel Rodríguez Solarte',
  shortName: 'Samuel RS',
  initials: 'SR',
  role: 'Junior Full-Stack Software Developer',
  education: 'Engineering Student',
  email: 'samrosolar2007@gmail.com',
  location: 'Cali, Colombia',
  resumeUrl: '#',
  // CORREGIDO: Las propiedades estaban dentro de 'socials', pero las usabas directamente en profile
  github: 'https://github.com/samrodri911',
  linkedin: 'https://www.linkedin.com/in/samuel-rodriguez-aa0a4036a', // Agrega tu link real
  summary: "I am a Systems and Computing Engineering student at Pontificia Universidad Javeriana Cali, focused on building scalable full-stack applications. Currently advancing my hands-on development experience while maintaining a strong academic foundation."
}

export const mindsets = [
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

export const languages = [
  { name: 'Python', description: 'Logic & Automation' },
  { name: 'TypeScript', description: 'Type Safety & Scalability' },
  { name: 'C++', description: 'Performance & Core Logic' },
  { name: 'SQL', description: 'Database Modeling' }
]

export const frameworks = [
  { name: 'React', description: 'Modern UI development with Hooks, Context API, and Tailwind CSS.' },
  { name: 'Next.js', description: 'Scalable server-side applications with modular architecture.' },
  { name: 'Supabase', description: 'BaaS for database management, Auth, and Real-time subscriptions.' },
  { name: 'Git & CI/CD', description: 'Version control and automated deployment pipelines.' }
]

export const otherKnowledge = [
  'RESTful APIs', 'Security / Agile', 'Software Architecture', 'UI/UX Principles', 'Docker', 'Unit Testing'
]

export const projects = [
  {
    title: 'Web Inventory System',
    description: 'Full-stack integration featuring real-time data synchronization and complex state management. Developed with a focus on scalability, clean architecture, and intuitive user experiences for enterprise-level logistics.',
    tech: ['React', 'Node.js', 'Supabase'],
    github: 'https://github.com/samrodri911/Inventario.git',
    live: 'https://inventario-ymfk.vercel.app/login',
    image: 'inventory-preview.jpg',
    icon: '📊'
  },
  {
    title: 'Game-Ants Engine',
    description: 'A performance-focused video game emphasizing Object-Oriented Programming (OOP), manual memory management, and efficient algorithm design for complex game mechanics.',
    tech: ['C++', 'OOP', 'Algorithms'],
    github: 'https://github.com/samrodri911/Game-Ants.git',
    image: 'game-preview.jpg',
    icon: '🎮'
  }
]