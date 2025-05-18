<script lang="ts" setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const { side = 'bottom' } = defineProps<{
  description: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="side" :side-offset="sideOffset" class="text-xs max-w-[220px] break-words">
        {{ description }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
