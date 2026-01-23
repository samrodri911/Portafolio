import { ref, computed } from 'vue'
import { translations } from '../data/translations'

const currentLanguage = ref(localStorage.getItem('language') || 'en')

export function useLanguage() {
  const t = computed(() => translations[currentLanguage.value])
  
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'es' : 'en'
    localStorage.setItem('language', currentLanguage.value)
  }
  
  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
      localStorage.setItem('language', lang)
    }
  }
  
  return {
    t,
    currentLanguage: computed(() => currentLanguage.value),
    toggleLanguage,
    setLanguage
  }
}