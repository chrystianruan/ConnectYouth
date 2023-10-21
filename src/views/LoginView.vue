<template>
  <main
    class="pt-24 pb-20 flex justify-around flex-wrap w-full overflow-x-hidden gap-4"
  >
    <form
      @submit.prevent="Login"
      class="bg-white drop-shadow-xl rounded-xl w-80% h-auto min-h-minC flex flex-col p-4 max-w-xl gap-4 items-center"
    >
      <h1>Entrar</h1>
      <div class="w-full flex flex-col">
        <label for="userEmail" class="font-thin text-xl">Email</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          v-model="userEmail"
          placeholder="usuario@exemplo.com"
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
          placeholder="Insira sua senha"
          class="border h-12 text-xl px-2 outline-none border-gray-400 border-t-0 border-l-0 border-r-0"
        />
      </div>

      <div class="w-80% flex flex-col absolute bottom-4 left-10%">
        <input
          type="submit"
          name="btnRegister"
          id="btnRegister"
          value="Entrar"
          class="bg-green-300 p-3 rounded-md font-bold w-full"
        />

        <p id="redirectRegister" class="self-end">
          Não possui conta?
          <router-link to="/register" class="text-blue-500 hover:text-blue-300"
            >Cadastrar</router-link
          >
        </p>
      </div>
    </form>

    <!-- <div class="w-80% h-70vh drop-shadow-xl rounded-xl bg-red-500">

    </div> -->
  </main>
</template>

<script setup>
import AuthService from "../services/AuthServices";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userEmail = ref(null);
const userPassword = ref(null);
const baseURL = "https://apiconnectyouth.up.railway.app/api";

const router = useRouter();

const emits = defineEmits(["sendAuth"]);

async function Login() {
  const user = {
    email: userEmail.value,
    password: userPassword.value,
  };

  const userJson = JSON.stringify(user);

  const req = await fetch(`${baseURL}/logon`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: userJson,
  });

  const res = await req.json();

  AuthService.setToken(res.token);

  if (req.status == 200) {
    router.push({ name: "home" });
    emits("sendAuth", true);
  }
}
</script>
