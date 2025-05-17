<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <OrganizationList
    hide-personal
    after-select-organization-url="/organization/:id"
    after-create-organization-url="/organization/:id"
  />
</template>
