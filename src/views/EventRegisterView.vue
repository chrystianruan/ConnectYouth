<template>
  <main>
    <form @submit.prevent="registerEvent">
      <h1>Cadastrar Evento</h1>

      <label for="title">Título</label>
      <input type="text" name="title" id="title" v-model="title">

      <label for="descricao">Descrição</label>
      <textarea name="descricao" id="descricao" cols="30" rows="10" v-model="descricao"></textarea>

      <label for="banner">Banner</label>
      <input type="file" name="banner" id="banner" v-on:change="banner">

      <label for="freeEvent">Evento gratuito?</label>
      <div class="inpRadios">
        <p>Gratis</p>
        <input type="radio" name="freeEvent" id="freeEvent" v-model="freeEvent" :checked="this.freeEvent == true" :value="true">
        <p>Pago</p>
        <input type="radio" name="freeEvent" id="freeEvent" v-model="freeEvent" :checked="this.freeEvent == false" :value="false">
      </div>

      <div v-show="this.freeEvent == false">
        <label for="price">Preço</label>
        <input type="number" name="price" id="price" v-model="price">
      </div>

      <label for="loc">localização</label>
      <input type="text" name="loc" id="loc" v-model="loc">

      <Map />


      <input type="submit" name="register" id="register" value="Cadastrar">
    </form>
  </main>
</template>

<script>
  import Map from '../components/formItems/InputMap.vue'

  export default {
    data() {
      return {
        title: null,
        descricao: null,
        banner: null,
        freeEvent: true,
        price: null,
        loc: null,
      }
      
    },
    components: {
        Map
      },
    methods: {
      registerEvent() {
        if(this.freeEvent == true) {
          this.price = 0
        }
        console.log(this.title);
        console.log('----');
        console.log(this.descricao);
        console.log('----');
        console.log(this.banner);
        console.log('----');
        console.log(this.freeEvent);
        console.log('----');
        console.log(this.price);
        console.log('----');
        console.log(this.loc);
        console.log('----');
      }
    }
  }
</script>

<style>
  h1{
    text-align: center;
  }

  form {
    width: 35%;
    height: auto;
    padding: 2em 1em 2em 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  input {
    width: 100%;
    height: 2.5em;
    outline: none;
    text-decoration: none;
    border: 1px solid gray;
    font-size: 18px;
  }

  .inpRadios{
    display: flex;
  }

  label {
    font-size: 20px;
    border-left: 5px solid #0066ff;
    padding-left: .2em;
  }


  #redirectRegister {
    text-align: right;
    margin: 0.2em 0;
  }
</style>