<script lang="ts" setup>
import { CreditCardIcon } from 'lucide-vue-next'

defineProps<{
  isPro: boolean
}>()

const { organization, isLoaded } = useOrganization()
</script>

<template>
  <template v-if="!isLoaded">
    <div class="flex items-center gap-x-4">
      <div class="w-[60px] h-[60px] relative">
        <Skeleton class="w-full h-full absolute" />
      </div>
      <div class="space-y-2">
        <Skeleton class="h-10 w-[200px]" />
        <div class="flex items-center">
          <Skeleton class="size-4 mr-2" />
          <Skeleton class="size-4 w-[100px]" />
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex items-center gap-x-4">
      <div class="w-[60px] h-[60px] relative">
        <NuxtImg
          :src="organization?.imageUrl!"
          :alt="organization?.name"
          fill
          class="rounded-md object-cover"
        />
      </div>
      <div class="space-y-1">
        <p class="font-semibold text-xl">
          {{ organization?.name }}
        </p>
        <div class="flex items-center text-xs text-muted-foreground">
          <CreditCardIcon class="size-3 mr-1" />
          {{ isPro ? 'Pro' : 'Free' }}
        </div>
      </div>
    </div>
  </template>
</template>
