<script lang="ts" setup>
const { userId } = useAuth()
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">
      Dashboard
    </h1>
    <p class="text-sm text-gray-500">
      {{ userId }}
    </p>
    <UserButton />
  </div>
</template>
