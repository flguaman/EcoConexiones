<script setup lang="ts">
import { ref } from 'vue';

interface Group {
  id: number;
  name: string;
  description: string;
  image: string;
  members: number;
  category: string;
}

const groups = ref<Group[]>([
  {
    id: 1,
    name: 'Guardianes del Bosque - Quito',
    description:
      'Grupo dedicado a la protección y conservación de áreas forestales locales.',
    image:
      'https://elcomercio.pe/resizer/hJWwcLEZCP1HuQGFkKRqtysUGrU=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/26TYAMQBDFBGZJMBGQE2C4UBHM.jpg',
    members: 156,
    category: 'Conservación',
  },
  {
    id: 2,
    name: 'Recicladores Urbanos - Cuenca',
    description:
      'Comunidad comprometida con el reciclaje y la gestión responsable de residuos.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-S3PDee2Lg7pB-Homu5b5UfRFV7NDEC3Sg&s',
    members: 89,
    category: 'Reciclaje',
  },
]);
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-green-800">Grupos Ecológicos</h1>
      <button
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Crear Grupo
      </button>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="group in groups"
        :key="group.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="group.image"
          :alt="group.name"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold text-gray-800">
              {{ group.name }}
            </h3>
            <span class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
              {{ group.category }}
            </span>
          </div>
          <p class="text-gray-600 mt-2">{{ group.description }}</p>
          <div class="mt-4">
            <span class="text-sm text-gray-500"
              >👥 {{ group.members }} miembros</span
            >
          </div>
          <button
            class="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Unirse al Grupo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
