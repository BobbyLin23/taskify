<script lang="ts" setup>
import { XCircleIcon } from 'lucide-vue-next'

defineProps<{
  id: string
  errors?: Record<string, string[] | undefined>
}>()
</script>

<template>
  <div
    v-if="errors"
    :id="`${id}-error`"
    aria-live="polite"
    class="mt-2 text-xs text-rose-500"
  >
    <div
      v-for="error in errors?.[id]"
      :key="error"
      class="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm"
    >
      <XCircleIcon class="size-4 mr-2" />
      {{ error }}
    </div>
  </div>
</template>
