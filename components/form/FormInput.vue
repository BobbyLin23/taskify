<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  id: string
  label?: string
  placeholder?: HTMLAttributes['placeholder']
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  class?: HTMLAttributes['class']
  defaultValue?: string | number
}>()

defineEmits<{
  blur: []
}>()
</script>

<template>
  <div class="spaec-y-2">
    <div class="space-y-1">
      <Label v-if="label" :for="id" class="text-sm font-medium text-neutral-700">
        {{ label }}
      </Label>
      <Input
        :id="id"
        :required="required"
        :name="id"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="cn('text-sm px-2 py-1 h-7', props.class)"
        :aria-describedby="`${id}-error`"
        @blur="$emit('blur')"
      />
    </div>
    <FormErrors
      :id="id"
      :errors="errors"
    />
  </div>
</template>
