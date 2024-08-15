<template>
    <div class="grid grid-cols-2 gap-6 p-8 bg-gradient-to-l from-purple-600 to-blue-600 w-full rounded-b-3xl shadow-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div
        v-for="category in categories"
        :key="category.name"
        class="relative z-50 w-full h-[160px] rounded-2xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 group overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="flex flex-col items-center justify-center h-full text-white p-4 relative z-10">
          <component :is="category.icon" class="w-16 h-16 mb-4 text-blue-200 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
          <h3 class="font-semibold text-center text-xl group-hover:text-blue-200 transition-colors duration-300">{{ category.name }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  interface Category {
    name: string;
    icon: any;
  }
  
  defineProps({
    categories: {
      type: Array as () => Category[],
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  </style>