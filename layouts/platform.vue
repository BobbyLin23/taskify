<script lang="ts" setup>

</script>

<template>
  <div class="h-full">
    <Toaster />
    <PlatformNavbar />
    <main class="pt-20 md:pt-24 px-4 max-w-6xl mx-auto 2xl:max-w-screen-xl">
      <div class="flex gap-x-7">
        <div class="w-64 shrink-0 hidden md:block">
          <PlatformSidebar />
        </div>
        <slot />
      </div>
    </main>
  </div>
</template>
