<template>
  <Navbar :authentication='verify_isAuth' @removeLogin="removeLoginFunction" />
  <RouterView @sendAuth="logVal"/>
  <MyFooter />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import MyFooter from './components/Footer.vue'
  import { ref } from 'vue'

  let verify_isAuth = ref(false);

  function logVal(isAuthValue) {
    verify_isAuth.value = isAuthValue
    
  }
  function removeLoginFunction(){
    logVal(false)
  }

  
</script>

<script>
export default {
    name: 'app',
  
   
  }
</script>

<style>
 main {
    display: flex;
    justify-content: center;
    min-height: calc(90vh);
  }
</style>
