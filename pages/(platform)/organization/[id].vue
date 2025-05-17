<script lang="ts" setup>
definePageMeta({
  layout: 'platform',
})

const { id } = useRoute().params
</script>

<template>
  <div>
    {{ id }}
    <div>
      <OrganizationSwitcher hide-personal />
    </div>
  </div>
</template>
