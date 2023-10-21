<template>
  <main
    class="pt-24 pb-20 flex justify-around flex-wrap w-full overflow-x-hidden gap-4"
  >
    <form
      @submit.prevent="Register"
      class="bg-white drop-shadow-xl rounded-xl w-80% h-auto min-h-minC flex flex-col p-4 max-w-xl gap-4 items-center"
    >
      <h1>Cadastrar</h1>
      <div class="w-full flex flex-col">
        <label for="name" class="font-thin text-xl">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="userName"
          placeholder="Nome de usuario"
          class="border h-12 text-xl px-2 outline-none border-gray-400 border-t-0 border-l-0 border-r-0"
        />
      </div>

      <div class="w-full flex flex-col">
        <label for="userEmail" class="font-thin text-xl">Email</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          v-model="userEmail"
          placeholder="Email do usuario"
          class="border h-12 text-xl px-2 outline-none border-gray-400 border-t-0 border-l-0 border-r-0"
        />
      </div>

      <div class="w-full flex flex-col">
        <label for="userPassword" class="font-thin text-xl">Senha</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          v-model="userPassword"
          placeholder="Senha"
          class="border h-12 text-xl px-2 outline-none border-gray-400 border-t-0 border-l-0 border-r-0"
        />
      </div>

      <div class="w-full flex flex-col">
        <label for="userConfirmPassword" class="font-thin text-xl"
          >Confirmar senha</label
        >
        <input
          type="password"
          name="userConfirmPassword"
          id="userConfirmPassword"
          v-model="userConfirmPassword"
          placeholder="Confirmar Senha"
          class="border h-12 text-xl px-2 outline-none border-gray-400 border-t-0 border-l-0 border-r-0"
        />
      </div>

      <div class="w-80% flex flex-col absolute bottom-4 left-10%">
        <input
          type="submit"
          name="btnRegister"
          id="btnRegister"
          value="Cadastrar"
          class="bg-green-300 p-3 rounded-md font-bold w-full"
        />

        <p id="redirectLogin" class="self-end">
          Já possui conta?
          <router-link to="/login" class="text-blue-500 hover:text-blue-300"
            >Entrar</router-link
          >
        </p>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const userName = ref(null);
const userEmail = ref(null);
const userPassword = ref(null);
const userConfirmPassword = ref(null);
const baseURL = "https://apiconnectyouth.up.railway.app/api";

const Register = async () => {
  const user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  const userJson = JSON.stringify(user);

  const req = await fetch(`${baseURL}/new-user`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: userJson,
  });

  const res = await req.json();
  if (req.status == 201) {
    console.log(req);
    return;
  }
};
</script>
