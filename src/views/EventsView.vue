<template>
  <main>
    <div class="menu" v-if="showMenu">
      <h2>Menu</h2>
      <ul>
        <li>
          <router-link to="/eventRegister">Cadastrar eventos</router-link>
        </li>

      </ul>
    </div>
    
    <div class="container-event" v-for="event in events" :key="event.id" v-if="events.length != 0">
      <img src="" alt="imagem">
      <div class="events-info">
        <h2>{{ event.title.toUpperCase() }}</h2>
        <p>{{ event.description }}</p>
      <button class="button">Participar</button>

      </div>
    </div>

    <div v-else>
      <div class="dot-spinner">
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
</div>
    </div>
  </main>
</template>

<script setup>
  import {ref, onMounted } from 'vue'
  import AuthService from '../services/AuthServices';
  import axios from 'axios';

  const baseURL = 'https://apiconnectyouth.up.railway.app/api'
  let events = ref([]);
  let showMenu = AuthService.getToken()

  async function getEvents() {
    try {
      const req = await axios.get(`${baseURL}/events`)
      
      events.value = req.data


    } catch (error) {
      console.log(error);
    }
    
    


  }
  onMounted(() => {
    getEvents()
  })


</script>

<script>
  export default {
      name: 'home'
    }

    
</script>
  
<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4.5em;
  }
  .container-event {
    width: 60%;
    height: 500px;
    box-shadow: 0 0 2px 1px gray;
    border-radius: 0.4rem;
    display: flex;
    padding: .8em;
    margin: 0 0 2em 10%;
  }

  .container-event img, .events-info {
    width: 50%;
  }

  .events-info {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    text-align: center;
    border-left: 1px solid rgb(173, 173, 173);
  }

  .menu {
    position: fixed;
    left: 2em;
    top: 8em;
    width: 20%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  .menu ul {
    list-style: none;
  }
  .menu a {
    padding: .2em;
    font-size: 1.1rem;
    cursor: pointer;
    color: grey;
    text-decoration: none;
  }

  .menu a:hover {
    color: black;
  }


  /* Button  */
  .button {
 --color: #00A97F;
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;
 max-width: 300px;
 min-width: 250px;
 margin: auto;
}

.button::before, .button::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

.button::before {
 top: -1em;
 left: -1em;
}

.button::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.button:hover::before, .button:hover::after {
 height: 410px;
 width: 410px;
}

.button:hover {
 color: white;
}

.button:active {
 filter: brightness(.8);
}

/* Loading */
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}


</style>