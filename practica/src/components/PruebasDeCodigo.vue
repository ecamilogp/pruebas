<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('Título');
const items = ref<(string | number)[]>([]);
const inputValue = ref<string>('');

const props = defineProps<{
  initialValue: number;
}>();

const contador = ref(props.initialValue || 0);

function aumentar() {
  if (contador.value < 10) {
    contador.value++;
  }
}

function decrementar() {
  if (contador.value > 0) {
    contador.value--;
  }
}

function agregar() {
  if (inputValue.value.trim()) {
    const parsedValue = isNaN(Number(inputValue.value))
      ? inputValue.value
      : Number(inputValue.value);

    // Optional: Avoid duplicates
    if (!items.value.includes(parsedValue)) {
      items.value.push(parsedValue);
    } else {
      console.log('El elemento ya existe en la lista.');
    }

    inputValue.value = '';
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-lg font-bold">{{ title }}</h1>
    <textarea
      v-model="title"
      class="border p-2 w-full"
      placeholder="Escribe un título"
    ></textarea>

    <h2 class="mt-4 text-lg">Lista de Elementos</h2>
    <ul class="list-disc ml-4">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <input
      type="text"
      v-model="inputValue"
      placeholder="Agregar texto o número"
      class="border p-2 mt-2"
    />
    <button @click="agregar" class="bg-blue-500 text-white px-4 py-2 ml-2">
      Enviar
    </button>

    <div class="mt-4">
      <h3>Contador: {{ contador }}</h3>
      <button @click="aumentar" class="bg-green-500 text-white px-4 py-2 mr-2">
        +
      </button>
      <button @click="decrementar" class="bg-red-500 text-white px-4 py-2">
        -
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

textarea,
input {
  width: 100%;
  margin-top: 10px;
}
</style>
