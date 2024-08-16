<template>
  <div
    class="grid grid-cols-2 gap-6 p-8 bg-gradient-to-l from-purple-600 to-blue-600 rounded-b-3xl relative"
  >
    <div
      v-for="category in categories"
      :key="category.name"
      class="relative z-50 h-[160px] rounded-2xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 group"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
      <div
        class="flex flex-col items-center justify-center h-full text-white p-4 relative z-10"
      >
        <component
          :is="category.icon"
          class="w-16 h-16 mb-4 text-blue-200 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
        />
        <h3
          class="font-semibold text-center text-xl group-hover:text-blue-200 transition-colors duration-300"
        >
          {{ category.name }}
        </h3>
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
  categories: { type: Array as () => Category[], required: true },
});
</script>

<style scoped></style>
