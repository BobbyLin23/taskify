<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <SignIn sign-up-url="/sign-up" sign-in-fallback-redirect-url="/select-org" />
</template>
