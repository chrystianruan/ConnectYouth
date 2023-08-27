<template>
  <section id="home" class="slider">
    <div class="slider-content">
      <input type="radio" name="btn-radio" id="radio1" />
      <input type="radio" name="btn-radio" id="radio2" />
      <input type="radio" name="btn-radio" id="radio3" />
      <input type="radio" name="btn-radio" id="radio4" />

      <div class="slide-box primeiro">
        <img
          class="img-desktop"
          src="../../public/imgs/img1.jpg"
          alt="slide image"
        />
      </div>
      <div class="slide-box">
        <img
          class="img-desktop"
          src="../../public/imgs/img2.jpg"
          alt="slide image"
        />
      </div>
      <div class="slide-box">
        <img
          class="img-desktop"
          src="../../public/imgs/img3.jpg"
          alt="slide image"
        />
      </div>
      <div class="slide-box">
        <img
          class="img-desktop"
          src="../../public/imgs/img4.jpg"
          alt="slide image"
        />
      </div>

      <div class="nav-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
      </div>

      <div class="nav-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

// slider carroussel

onMounted(() => {
  let count = 1;

  document.getElementById("radio1").checked = true;

  const nextImg = () => {
    count++;

    if (count > 4) {
      count = 1;
    }

    document.getElementById(`radio${count}`).checked = true;
  };

  setInterval(() => {
    nextImg();
  }, 20000);
});
// - - - - - - -
</script>

<script>
export default {
  name: "MySlider",
};
</script>

<style scoped>
/* slide carrossel */

.slider {
  margin: 0;
  widows: 100%;
  height: 100vh;
  padding: 0 !important;
  overflow: hidden;
}

.slider-content {
  width: 500%;
  height: 100vh;
  display: flex;
}

.slider-content input,
.img-mobile {
  display: none;
}

.slide-box {
  width: 25%;
  height: auto;
  position: relative;
  text-align: center;
  transition: 0.5s;
}

.slide-box img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.nav-manual,
.nav-auto {
  position: absolute;
  bottom: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
}

.nav-manual .manual-btn,
.nav-auto div {
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.nav-manual .manual-btn:not(:last-child),
.nav-auto div:not(:last-child) {
  margin-right: 1em;
}

.nav-manual .manual-btn:hover {
  background-color: #fff;
}

#radio1:checked ~ .nav-auto .auto-btn1 {
  background-color: #fff;
}
#radio2:checked ~ .nav-auto .auto-btn2 {
  background-color: #fff;
}
#radio3:checked ~ .nav-auto .auto-btn3 {
  background-color: #fff;
}
#radio4:checked ~ .nav-auto .auto-btn4 {
  background-color: #fff;
}

#radio1:checked ~ .primeiro {
  margin-left: 0%;
}

#radio2:checked ~ .primeiro {
  margin-left: -25%;
}

#radio3:checked ~ .primeiro {
  margin-left: -50%;
}

#radio4:checked ~ .primeiro {
  margin-left: -75%;
}

/* @media screen and (max-width: 900px) {
  .img-desktop {
    display: none;
  }

  .img-mobile {
    display: block;
  }
} */

/* - - - - - */
</style>
