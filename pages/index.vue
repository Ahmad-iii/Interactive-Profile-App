<template>
  <div class="app-container">
    <AppHeader :user="user" />
    <CategoryGrid :categories="categories" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import avatarImage from "../assets/images/avatar.png";

import { AcademicCapIcon, PaintBrushIcon, HeartIcon, GlobeAltIcon} from '@heroicons/vue/24/outline';




const user = ref({
  name: "Ahmad",
  address: "Green Acres, Mardan",
  avatar: avatarImage,
});

const categories = ref([
  { name: "Fruit", icon: AcademicCapIcon },
  { name: "Color", icon: PaintBrushIcon },
  { name: "People", icon: HeartIcon },
  { name: "Travel", icon: GlobeAltIcon },
]);

</script>

<style>
body {
  @apply bg-gray-100 min-h-screen;
}

.app-container {
  @apply max-w-md mx-auto bg-white min-h-screen shadow-lg;
}
</style>
