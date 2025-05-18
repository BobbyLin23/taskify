<script lang="ts" setup>
definePageMeta({
  layout: 'platform',
})
</script>

<template>
  <div class="w-full mb-20">
    <Info :is-pro="true" />
    <Separator class="my-4" />
    <div class="px-2 md:px-4">
      <BoardList />
    </div>
  </div>
</template>
