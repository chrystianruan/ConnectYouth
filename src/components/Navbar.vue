<template>
  <nav>
    <router-link to="/">
      Inicio
    </router-link>
    <router-link to="/login">
      <p>Entrar <i class="fa-solid fa-arrow-right"></i></p>
    </router-link>
    <a @click="logout" >
      <p>LogOut</p>
    </a>
  </nav>
</template>

<script setup>
  import AuthService from '../services/AuthServices';
  import { ref, watch, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  // const isAuth = ref(AuthService.existToken())


  function logout(){
    AuthService.removeToken()
    router.push({
      name: 'login'
    })
  }
 
</script>

<script>
  export default {
      name: 'Navbar'
    
    }
</script>

<style scoped>
  nav {
    width: 100%;
    height: 4em;
    box-shadow: 0 1px 5px 1px grey;
    padding: 0 1em;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1.2em;
    position: fixed;
    z-index: 10;
    background-color: white;

  }

  a {
    text-decoration: none;
    color: black;
    letter-spacing: .02rem;
    font-weight: bold;
    display: flex;
    cursor: pointer;
  }

  a:hover {
    scale: 1.0225;
  }
</style>