<template>
  <main>
    <form @submit.prevent="Login">
      <h1>Entrar</h1>
      <label for="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" v-model="userEmail" placeholder="Email do usuario">
      
      <label for="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" v-model="userPassword" placeholder="Senha">
  
      <input type="submit" name="btnRegister" id="btnRegister" value="Entrar">

      <p id="redirectRegister">Não possui conta? <router-link to="/register">Cadastrar</router-link></p>
    </form>
  </main>
</template>

<script>
  
  import AuthService from '../services/AuthServices';

  export default {
    
    data(){
      return {
        userEmail: null,
        userPassword: null,
        baseURL: 'https://apiconnectyouth.up.railway.app/api'
      }
    },
    methods: {
      async Login() {
        const user = {
          email: this.userEmail,
          password: this.userPassword
        }

        const userJson = JSON.stringify(user)

        const req = await fetch(`${this.baseURL}/logon`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: userJson
          })

        const res = await req.json();

        AuthService.setToken(res.token)

        if(req.status == 200){
          this.$router.push({name: 'home'})
        }
      }
    }
  }
</script>

<style scoped>
 

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
