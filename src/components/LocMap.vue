<template>
  <div
    class="p-8 flex justify-around items-center flex-wrap gap-4 w-full border"
  >
    <div class="w-1/2">
      <h2 class="text-2xl md:text-3xl xl:text-5xl font-semibold">
        Onde nos <br />
        encontrar?
      </h2>
      <p class="text-justify text-base font-thin">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        voluptatum earum deleniti nemo repellendus ratione aliquam voluptate
        aliquid laborum quaerat, dolor consequatur atque, nostrum saepe, alias
        accusamus perferendis odio unde! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fugiat quisquam aliquid eos cum eaque est ex aut?
        Eveniet vitae ipsum neque optio itaque adipisci totam praesentium vero.
        Iure, illo excepturi!
      </p>
    </div>

    <BoxMap class="w-1/2" />
  </div>
</template>

<script setup>
import BoxMap from "../components/map.vue";
</script>

<script>
export default {
  name: "LocMap",
};
</script>

<!-- <style scoped>
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
</style> -->
