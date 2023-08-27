<template>
  <main>
    <MySlider />
    <LocMap />
  </main>
</template>

<script setup>
import MySlider from "../components/Slider.vue";
import LocMap from "../components/LocMap.vue";
</script>

<style scoped>
main {
  flex-direction: column;
}

section {
  width: 100%;
  height: 100vh;
}
</style>
