<script lang="ts" setup>

</script>

<template>
  <div class="h-full bg-slate-100">
    <MarketingNavbar />
    <main class="pt-40 pb-20 bg-slate-100">
      <slot />
    </main>
    <MarketingFooter />
  </div>
</template>
