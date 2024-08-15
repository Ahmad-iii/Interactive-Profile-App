<template>
    <header v-if="user" class="bg-gradient-to-r from-blue-600 to-purple-600 w-full p-8 rounded-t-3xl shadow-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="relative z-10">
        <div class="flex justify-between items-center mb-8">
          <div class="text-white">
            <h2 class="font-bold text-4xl mb-2 tracking-tight">{{ user.name }}</h2>
            <p class="text-sm text-blue-100 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ user.address }}
            </p>
          </div>
          <div class="relative group">
            <img :src="user.avatar" alt="User avatar" class="rounded-full w-28 h-28 object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
            <div class="absolute bottom-[-2px] right-[1px] w-6 h-6 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
          </div>
        </div>
        <div class="relative mt-6">
          <input type="text" placeholder="Search ..." class="font-medium text-base rounded-full w-full px-6 py-4 pl-12 bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition duration-300 ease-in-out shadow-inner">
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  interface User {
    name: string;
    address: string;
    avatar: string;
  }
  
  const props = defineProps<{
    user: User;
  }>();
  </script>
  
  <style scoped>
  .bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  </style>