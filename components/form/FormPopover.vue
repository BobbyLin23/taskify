<script lang="ts" setup>
import { XIcon } from 'lucide-vue-next'
import { PopoverClose } from 'reka-ui'

const { side = 'bottom', sideOffset = 0 } = defineProps<{
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
}>()
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <slot />
    </PopoverTrigger>
    <PopoverContent :align="align" :side="side" :side-offset="sideOffset" class="w-80 pt-3">
      <div class="text-sm font-medium text-center text-neutral-600 pb-4">
        Create board
      </div>
      <PopoverClose as-child>
        <Button
          class="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
          variant="ghost"
        >
          <XIcon class="size-4" />
        </Button>
      </PopoverClose>
      <form class="space-y-4">
        <FormPicker id="image" :errors="{}" />
        <FormInput id="title" label="Board Title" :errors="{}" />
        <Button
          type="submit"
          size="sm"
          class="w-full"
        >
          Create
        </Button>
      </form>
    </PopoverContent>
  </Popover>
</template>
