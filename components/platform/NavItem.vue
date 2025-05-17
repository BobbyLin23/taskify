<script lang="ts" setup>
import type { OrganizationMembershipResource } from '@clerk/types'
import { ActivityIcon, CreditCardIcon, LayoutIcon, SettingsIcon } from 'lucide-vue-next'

const { organization } = defineProps<{
  isExpanded: boolean
  isActive: boolean
  organization: OrganizationMembershipResource
}>()

defineEmits<{
  expand: [id: string]
}>()

const route = useRoute()

const path = computed(() => route.path)

const routes = [
  {
    label: 'Boards',
    icon: LayoutIcon,
    href: `/organization/${organization.id}`,
  },
  {
    label: 'Activity',
    icon: ActivityIcon,
    href: `/organization/${organization.id}/activity`,
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    href: `/organization/${organization.id}/settings`,
  },
  {
    label: 'Billing',
    icon: CreditCardIcon,
    href: `/organization/${organization.id}/billing`,
  },
]
</script>

<template>
  <AccordionItem :value="organization.id" class="border-none">
    <AccordionTrigger
      :class="cn('flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
                 isActive && !isExpanded && 'bg-sky-500/10 text-sky-700')"
      @click="$emit('expand', organization.id)"
    >
      <div class="flex items-center gap-x-2">
        <div class="size-7 relative">
          <NuxtImg :src="organization.organization.imageUrl" :alt="organization.organization.name" fill class="rounded-md object-cover" />
        </div>
        <span class="text-sm font-medium">
          {{ organization.organization.name }}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent class="pt-1 text-neutral-700">
      <Button
        v-for="route in routes"
        :key="route.href"
        size="sm"
        variant="ghost"
        :class="cn('w-full font-normal justify-start pl-10 mb-1', route.href === path && 'bg-sky-500/10 text-sky-700')"
        as-child
      >
        <NuxtLink :to="route.href">
          <component :is="route.icon" class="size-4" />
          <span class="text-sm">
            {{ route.label }}
          </span>
        </NuxtLink>
      </Button>
    </AccordionContent>
  </AccordionItem>
</template>
