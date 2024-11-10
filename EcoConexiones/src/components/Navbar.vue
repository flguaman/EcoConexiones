<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Proyectos', to: '/projects' },
  { name: 'Grupos', to: '/groups' },
  { name: 'Mapa', to: '/map' },
  { name: 'Recursos', to: '/resources' },
]
</script>

<template>
  <nav class="bg-eco-700 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-white font-bold text-xl flex items-center space-x-2">
            <span class="text-2xl">🌱</span>
            <span>EcoConexiones</span>
          </RouterLink>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center space-x-1">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="text-eco-50 hover:bg-eco-600 px-3 py-2 rounded-md transition-colors duration-200"
              :class="{ 'bg-eco-600': $route.path === item.to }"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>