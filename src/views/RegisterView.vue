<template>
  <main>
    <form @submit.prevent="Register">
      <h1>Cadastrar</h1>
      <label for="name">Nome</label>
      <input type="text" name="name" id="name" v-model="userName" placeholder="Nome de usuario">
      
      <label for="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" v-model="userEmail" placeholder="Email do usuario">
      
      <label for="userPassword">Senha</label>
      <input type="password" name="userPassword" id="userPassword" v-model="userPassword" placeholder="Senha">
      
      <label for="userConfirmPassword">Confirmar senha</label>
      <input type="password" name="userConfirmPassword" id="userConfirmPassword" v-model="userConfirmPassword" placeholder="Confirmar Senha">
      
      <input type="submit" name="btnRegister" id="btnRegister" value="Cadastrar">

      <p id="redirectLogin">Já possui conta? <router-link to="/login">Entrar</router-link></p>
    </form>
  </main>
</template>

<script>
  export default {
    data(){
      return {
        userName: null,
        userEmail: null,
        userPassword: null,
        userConfirmPassword: null,
        

      }
    },
    methods: {
      // User Register
      async Register() {

        const user = {
            name: this.userName,
            email: this.userEmail,
            password: this.userPassword
          }

          const userJson = JSON.stringify(user)

          const req = await fetch(`https://connectyouthapi-production.up.railway.app/api/new-user`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: userJson
          })

          const res = await req.json();

          if(req.status == 201){
            this.msg('Cadastrado com sucesso');
            return
          }

          this.msg(`ERROR: ${req.status}`)
          
      },
      msg(msg) {
        console.log(`${msg}`);
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

  #btnRegister {
    width: 100%;
    border-radius: 2.5em;
    transition: .2s;
    background-color: #0066ff;
    color: white;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: .1em;
  }

  #btnRegister:hover {
    background-color: transparent;
    color: black;
  }


  #redirectLogin {
    text-align: right;
    margin: 0.2em 0;
  }
</style>
