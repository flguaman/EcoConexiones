<script setup lang="ts">
import { ref } from 'vue'

interface Resource {
  id: number
  title: string
  description: string
  type: string
  author: string
  date: string
  category: string
}

const resources = ref<Resource[]>([
  {
    id: 1,
    title: 'Guía de Compostaje Casero',
    description: 'Aprende a crear tu propio compost con residuos orgánicos domésticos.',
    type: 'Guía',
    author: 'María González',
    date: '2024-03-15',
    category: 'Reciclaje'
  },
  {
    id: 2,
    title: 'Introducción a la Permacultura',
    description: 'Conceptos básicos y principios de la permacultura para principiantes.',
    type: 'Curso',
    author: 'Juan Pérez',
    date: '2024-03-10',
    category: 'Agricultura'
  }
])

const categories = ['Todos', 'Reciclaje', 'Agricultura', 'Energía', 'Conservación']
const selectedCategory = ref('Todos')
const searchQuery = ref('')
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-green-800">Recursos Educativos</h1>
      <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Compartir Recurso
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar recursos..."
        class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div class="flex space-x-2 overflow-x-auto">
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-4 py-2 rounded-full whitespace-nowrap',
            selectedCategory === category
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="resource in resources"
        :key="resource.id"
        class="bg-white rounded-lg shadow-md p-6"
      >
        <div class="flex justify-between items-start">
          <h3 class="text-xl font-semibold text-gray-800">{{ resource.title }}</h3>
          <span class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            {{ resource.type }}
          </span>
        </div>
        <p class="text-gray-600 mt-2">{{ resource.description }}</p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center text-gray-500">
            <span class="text-sm">👤 {{ resource.author }}</span>
          </div>
          <div class="flex items-center text-gray-500">
            <span class="text-sm">📅 {{ new Date(resource.date).toLocaleDateString() }}</span>
          </div>
          <span class="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
            {{ resource.category }}
          </span>
        </div>
        <button class="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Ver Recurso
        </button>
      </div>
    </div>
  </div>
</template>