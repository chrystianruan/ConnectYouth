<template>
  <Navbar />
  <RouterView/>
  <MyFooter />
</template>

<script>
  import { RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import MyFooter from './components/Footer.vue'

  export default {
    name: 'app',
    data() {
      return {
        userAuth: false,
      }
    },
    components: {
      Navbar,
      MyFooter
    },
    methods: {
      
    }
  }
</script>

<style>
 main {
    display: flex;
    justify-content: center;
    padding: 8em 0;
    min-height: calc(90vh);
  }
</style>
