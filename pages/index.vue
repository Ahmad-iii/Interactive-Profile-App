<template>
  <div class="app-container">
    <AppHeader :user="user" />
    <CategoryGrid :categories="categories" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import avatarImage from "../assets/images/avatar.png";
import {
  AcademicCapIcon,
  PaintBrushIcon,
  HeartIcon,
  GlobeAltIcon,
} from "@heroicons/vue/24/outline";

// User data
const user = ref({
  name: "Ahmad",
  address: "Green Acres, Mardan",
  avatar: avatarImage,
});

// Categories for the grid
const categories = ref([
  { name: "Fruit", icon: AcademicCapIcon },
  { name: "Color", icon: PaintBrushIcon },
  { name: "People", icon: HeartIcon },
  { name: "Travel", icon: GlobeAltIcon },
]);
</script>

<style>
body {
  @apply bg-white;
}

.app-container {
  @apply mx-auto max-w-md min-h-screen drop-shadow-2xl;
}
</style>
