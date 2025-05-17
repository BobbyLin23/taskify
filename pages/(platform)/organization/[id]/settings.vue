<script lang="ts" setup>
definePageMeta({
  layout: 'platform',
})
</script>

<template>
  <div class="w-full">
    <OrganizationProfile
      :appearance="{
        elements: {
          rootBox: {
            boxShadow: 'none',
            width: '100%',
          },
          card: {
            border: '1px solid #e5e5e5',
            boxShadow: 'none',
            width: '100%',
          },
        },
      }"
    />
  </div>
</template>
