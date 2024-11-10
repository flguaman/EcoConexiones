<script setup lang="ts">
import { ref } from 'vue';

const featuredProjects = ref([
  {
    id: 1,
    title: 'Limpieza de Playa Local - Salinas',
    description: 'Únete a nuestra iniciativa mensual de limpieza de playas',
    image:
      'https://i0.wp.com/sonplayas.com/wp-content/uploads/2020/07/Limpieza-en-hotel-RUI.jpg?resize=700%2C525&ssl=1',
  },
  {
    id: 2,
    title: 'Reforestación Urbana - Quito',
    description: 'Proyecto de plantación de árboles en la ciudad',
    image:
      'https://www.ministeriodegobierno.gob.ec/wp-content/uploads/2013/11/DSC_1280.jpg',
  },
]);
</script>

<template>
  <div class="space-y-12">
    <section class="text-center max-w-3xl mx-auto">
      <h1 class="text-5xl font-bold text-eco-800 mb-6">
        Bienvenido a EcoConexiones
      </h1>
      <p class="text-xl text-eco-700 mb-8">
        Conectando personas comprometidas con el medio ambiente
      </p>
      <div class="flex justify-center space-x-4">
        <button class="eco-button">Unirse ahora</button>
        <button
          class="border-2 border-eco-600 text-eco-600 px-4 py-2 rounded-lg hover:bg-eco-50 transition-colors duration-200"
        >
          Saber más
        </button>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-semibold text-eco-800 mb-6 text-center">
        Proyectos Destacados
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="eco-card group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-eco-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-eco-600 mb-4">{{ project.description }}</p>
            <button class="eco-button w-full">Saber más</button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-3xl font-semibold text-eco-800 mb-6 text-center">
        ¿Por qué unirte?
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-4xl mb-4">🌿</div>
          <h3 class="text-xl font-semibold text-eco-700 mb-2">Impacto Real</h3>
          <p class="text-eco-600">
            Participa en proyectos que generan cambios positivos en el ambiente
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">👥</div>
          <h3 class="text-xl font-semibold text-eco-700 mb-2">Comunidad</h3>
          <p class="text-eco-600">
            Conecta con personas que comparten tus valores ambientales
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">📚</div>
          <h3 class="text-xl font-semibold text-eco-700 mb-2">Aprendizaje</h3>
          <p class="text-eco-600">
            Accede a recursos educativos sobre sostenibilidad
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
