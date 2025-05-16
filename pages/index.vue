<script lang="ts" setup>
import { MedalIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'marketing',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center font-heading">
      <div class="flex items-center mb-4 border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
        <MedalIcon class="size-6 mr-2" />
        No 1 Task Management App
      </div>
      <h1 class="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
        Taskify helps you team move
      </h1>
      <div class="text-3xl md:text-6xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-md pb-4 w-fit">
        work foward.
      </div>
    </div>
    <div class="text-sm md:text-lg text-center text-neutral-400 mt-4 max-w-xs md:max-w-2xl mx-auto font-text">
      Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique.
    </div>
    <Button class="mt-6" size="lg" as-child>
      <NuxtLink to="/sign-up">
        Get Taskify for free
      </NuxtLink>
    </Button>
  </div>
</template>
