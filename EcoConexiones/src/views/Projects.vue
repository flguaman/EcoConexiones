<script setup lang="ts">
import { ref } from 'vue';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  participants: number;
  category: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Limpieza de Playa Local',
    description:
      'Únete a nuestra iniciativa mensual de limpieza de playas para mantener nuestros ecosistemas costeros limpios y saludables.',
    image: 'https://www.orienteseguros.com/wp-content/uploads/2019/10/8_A.jpg',
    location: 'Playa del Sol',
    date: '2024-04-15',
    participants: 25,
    category: 'Limpieza',
  },
  {
    id: 2,
    title: 'Reforestación Urbana',
    description:
      'Proyecto comunitario para plantar árboles nativos en diferentes áreas de la ciudad.',
    image:
      'https://www.quitoinforma.gob.ec/wp-content/uploads/2019/09/Reforestaci%C3%B3n-Quebrada-Ortega-1-800x445.jpg',
    location: 'Parque Central',
    date: '2024-04-20',
    participants: 50,
    category: 'Reforestación',
  },
]);

const categories = [
  'Todos',
  'Limpieza',
  'Reforestación',
  'Reciclaje',
  'Educación',
];
const selectedCategory = ref('Todos');
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-green-800">Proyectos Ambientales</h1>
      <button
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Crear Proyecto
      </button>
    </div>

    <div class="flex space-x-4 overflow-x-auto pb-2">
      <button
        v-for="category in categories"
        :key="category"
        :class="[
          'px-4 py-2 rounded-full',
          selectedCategory === category
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold text-gray-800">
              {{ project.title }}
            </h3>
            <span class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
              {{ project.category }}
            </span>
          </div>
          <p class="text-gray-600 mt-2">{{ project.description }}</p>
          <div class="mt-4 space-y-2">
            <div class="flex items-center text-gray-500">
              <span class="text-sm">📍 {{ project.location }}</span>
            </div>
            <div class="flex items-center text-gray-500">
              <span class="text-sm"
                >📅 {{ new Date(project.date).toLocaleDateString() }}</span
              >
            </div>
            <div class="flex items-center text-gray-500">
              <span class="text-sm"
                >👥 {{ project.participants }} participantes</span
              >
            </div>
          </div>
          <button
            class="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Participar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
