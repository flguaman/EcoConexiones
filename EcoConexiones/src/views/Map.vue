<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css';

// Leaflet will be imported dynamically to avoid SSR issues
let L: any;
const mapContainer = ref<HTMLElement | null>(null);
const map = ref<any>(null);

// Actualiza las coordenadas de los lugares a Quito, Ecuador
const locations = [
  {
    id: 1,
    name: 'Limpieza de Playa',
    type: 'event',
    coordinates: [-0.22985, -78.5249], // Nueva coordenada en Quito
    description: 'Evento de limpieza este sábado',
  },
  {
    id: 2,
    name: 'Parque Nacional',
    type: 'place',
    coordinates: [-0.22985, -78.5249], // Nueva coordenada en Quito
    description: 'Área protegida con senderos naturales',
  },
];

onMounted(async () => {
  if (typeof window !== 'undefined') {
    L = await import('leaflet');

    if (mapContainer.value) {
      // Cambiar la vista inicial del mapa a Quito, Ecuador
      map.value = L.map(mapContainer.value).setView([-0.22985, -78.5249], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map.value);

      locations.forEach((location) => {
        L.marker(location.coordinates)
          .bindPopup(`<b>${location.name}</b><br>${location.description}`)
          .addTo(map.value);
      });
    }
  }
});
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-green-800">Mapa Ecológico</h1>
      <button
        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Agregar Ubicación
      </button>
    </div>

    <div ref="mapContainer" class="h-[600px] rounded-lg shadow-md"></div>

    <div class="grid md:grid-cols-3 gap-4">
      <div
        v-for="location in locations"
        :key="location.id"
        class="bg-white p-4 rounded-lg shadow-sm"
      >
        <h3 class="font-semibold text-gray-800">{{ location.name }}</h3>
        <p class="text-gray-600 text-sm">{{ location.description }}</p>
        <span class="mt-2 inline-block text-sm text-green-600">
          {{ location.type === 'event' ? '📅 Evento' : '📍 Lugar' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';
</style>
