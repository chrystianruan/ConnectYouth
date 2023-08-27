<template>
  <section id="loc">
    <div class="textMap">
      <h2>Localização</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis,
        iure veniam perferendis dolorum beatae itaque accusamus quia sunt nulla
        vitae nisi commodi voluptatum? Sed dolore esse necessitatibus
        repellendus deserunt!
      </p>
    </div>
    <div class="map">
      <BoxMap />
    </div>
  </section>
</template>

<script setup>
import BoxMap from "../components/map.vue";
</script>

<script>
export default {
  name: "LocMap",
};
</script>

<style scoped>
/* section loc */
#loc {
  background-color: white;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5%;
  padding: 3em 0;
}

.map,
.textMap {
  width: 40%;
  min-width: 400px;
}

.textMap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  text-align: justify;
  padding: 0 4em;
}
h2 {
  font-size: 2em;
  letter-spacing: 0.03em;
}

p {
  font-size: 1.2em;
}
</style>
