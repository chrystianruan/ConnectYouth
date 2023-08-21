<template>
  <main>
    <section id="home">
      <div class="carousel-container">
        <button class="arrowLeft control" aria-label="PreviousImage">
          &lt;
        </button>
        <button class="arrowRight control" aria-label="PreviousImage">
          &gt;
        </button>
        <div class="galleryWrapper">
          <div class="gallery">
            <img src="../../public/imgs/img1.jpg" alt="img1" class="image currentImage">
            <img src="../../public/imgs/img2.jpg" alt="img2" class="image">
            <img src="../../public/imgs/img3.jpg" alt="img3" class="image">
            <img src="../../public/imgs/img4.jpg" alt="img4" class="image">
          </div>
        </div>
      </div>
    </section>

    <section id="loc">
      <div class="textMap">
        <h2>Localização</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis, iure veniam perferendis dolorum beatae itaque accusamus quia sunt nulla vitae nisi commodi voluptatum? Sed dolore esse necessitatibus repellendus deserunt!</p>
      </div>
      <div class="map">
        <BoxMap />
      </div>
    </section>
  </main>
</template>

<script setup>
  import BoxMap from '../components/map.vue'
</script>

<style scoped>

  /* img {
    width: 100vw;
    height: 100vh;
  } */

  main {
    flex-direction: column;
  }

  section {
    margin-bottom: 3em;
  }

/* carouesl */
  .carousel-container {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .galleryWrapper {
    overflow-x: auto;

  }

  .gallery {
    display: flex;
    flex-flow: row nowrap;
    gap: 1em;
  }

  .arrowLeft, .arrowRight {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    font-size: 20px;
    line-height: 250px;
    width: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border: none;
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    transition: all 200ms ease-in-out;
  }

  .arrowLeft:hover, .arrowRight:hover {
    opacity: 1;
  }

  .arrowRight {
    left: auto;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent 0%, black 200%);
  }

  .image {
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    opacity: 0.6;
    transition: all 600ms ease-in-out;
  }

  .currentImage {
    opacity: 1;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .galleryWrapper::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .galleryWrapper {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }


/* section home */
  #home {
    background-color: red;
    width: 100%;
    height: 100vh;
  }

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
  }

  .map, .textMap {
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
    letter-spacing: .03em;
  }

  p {
    font-size: 1.2em;
  }
  
</style>