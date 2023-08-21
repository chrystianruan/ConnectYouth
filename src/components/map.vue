<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';


    const mapContainer = ref(null);
    let map;
    let marker = null; // Variável para armazenar o marcador atual
    let address;

    onMounted(() => {
      // Coordenadas iniciais do mapa
      const latitude = -5.924089;
      const longitude = -35.262951;

      // Cria o mapa e adiciona camadas de base
      map = L.map(mapContainer.value).setView([latitude, longitude], 13);

      // Adiciona a camada de base do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Adicione um evento de clique no mapa
      addMarker(latitude, longitude);
    });

    onBeforeUnmount(() => {
      // Limpa recursos e eventos quando o componente é desmontado
      map.off();
      map.remove();
    });

    async function addMarker(latitude, longitude) {
      // Remove o marcador existente, se houver

      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        address = response.data.display_name;
        // Adiciona marcador no mapa com o ícone personalizado
        marker = L.marker([latitude, longitude], {
          icon: L.icon({
            iconUrl: '/eventMarker.png', // Caminho relativo ao arquivo na pasta "public"
            iconSize: [32, 32], // Substitua pelo tamanho da imagem do ícone
            iconAnchor: [16, 32], // Substitua pelo ponto de ancoragem do ícone (onde ele será fixado no mapa)
          }),
        }).addTo(map);

        marker.bindPopup(`<b>${address}</b>`);
      
      } catch (error) {
        console.error('Erro ao obter o endereço:', error);
      }
    }

  
</script>

<script>
  export default {
    name: 'BoxMap'
  }
</script>

<style scoped>
.map-container {
  max-width: 500px;
  height: 250px;
  z-index: 1;
}
</style>
