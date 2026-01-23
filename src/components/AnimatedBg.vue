<template>
  <div id="tsparticles"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

onMounted(async () => {
  // 1. Cargamos el motor
  await loadSlim(tsParticles);

  // 2. Configuramos y lanzamos las partículas
  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 120,
      particles: {
        color: { value: "#7dffb8" },
        links: {
          color: "#7dffb8",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
        },
      },
      detectRetina: true,
      background: { color: "transparent" }
    },
  });
});
</script>

<style scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>