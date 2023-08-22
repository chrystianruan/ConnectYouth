<template>
  <main>
    <form @submit.prevent="registerEvent" enctype="multipart/form-data">
      <h1>Cadastrar Evento</h1>

      <label for="titulo">Título</label>
      <input type="text" name="titulo" id="titulo" v-model="title">

      <label for="descricao">Descrição</label>
      <textarea name="descricao" id="descricao" v-model="descricao" cols="30" rows="10"></textarea>

      <label for="myBanner">Banner</label>
      <input type="file" @change="fileValue($event)"/>

      <label for="freeEvent">Evento gratuito?</label>
      <div class="inpRadios">
        <p>Gratis</p>
        <input type="radio" name="freeEvent" id="freeEvent" v-model="freeEvent" :checked="freeEvent == true" :value="true">
        <p>Pago</p>
        <input type="radio" name="freeEvent" id="freeEvent" v-model="freeEvent" :checked="freeEvent == false" :value="false">
      </div>

      <div v-show="freeEvent == false">
        <label for="price">Preço</label>
        <input type="number" name="price" id="price" v-model="price">
      </div>

      <InpMap @loc="setLoc" />


      <input type="submit" name="register" id="register" value="Cadastrar">
    </form>
  </main>
</template>

<script setup>
  import InpMap from '../components/formItems/InputMap.vue'
  import { ref } from 'vue'
  import AuthService from '../services/AuthServices';

  const baseURL = 'https://apiconnectyouth.up.railway.app/api'

  //input title
  const title = ref('')

  //input descricao
  const descricao = ref('')

  //input file
  let fileName = ref(null)

  function fileValue(e) {
    if(e.target.files[0] != null) {
      fileName.value = e.target.files[0]
    }else{
      fileName.value = ""
    }
  }

  //input free event
  const freeEvent = ref(true)

  //input price
  const price = ref(0)

  //loc map
  const location = ref(null)

  function setLoc(loc) {
    location.value = loc;
  }

  async function registerEvent() {

    const eventFormData = new FormData()

    eventFormData.append('image', fileName.value)
    eventFormData.append('title', title.value)
    eventFormData.append('description', descricao.value)
    eventFormData.append('free', freeEvent.value)
    eventFormData.append('price', price.value)
    eventFormData.append('location', location.value)

    const authToken = AuthService.getToken()

    const req = await fetch(`${baseURL}/new-event`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${authToken}`
      },
      body: eventFormData,
      
    })

    const res = await req.json();

    if(req.status == 201) {
      console.log(res.response);
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