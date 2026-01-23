import './assets/main.css'
import 'aos/dist/aos.css' // Importa los estilos de AOS

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos' // Importa AOS

const app = createApp(App)
app.mount('#app')

// Inicializa AOS después de montar la app
AOS.init({
  duration: 1000, // Duración de las animaciones
  once: true, // Anima solo una vez
  offset: 100, // Offset desde el punto de activación
  easing: 'ease-out-cubic' // Tipo de animación
})