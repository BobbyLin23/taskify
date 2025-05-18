<script lang="ts" setup>
import { PlusIcon } from 'lucide-vue-next'

const { storageKey = 't-sidebar-state' } = defineProps<{
  storageKey?: string
}>()

const expanded = useLocalStorage<Record<string, any>>(storageKey, {

})

const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization()

const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList()

const isLoading = computed(() => !isLoadedOrg.value || !isLoadedOrgList.value)

const defaultAccordionValue: string[] = Object.keys(expanded.value).reduce((acc: string[], key: string) => {
  if (expanded.value[key]) {
    acc.push(key)
  }
  return acc
}, [])

function onExpand(id: string) {
  expanded.value[id] = !expanded.value[id]
}
</script>

<template>
  <template v-if="isLoading">
    <div class="flex items-center justify-between mb-2">
      <Skeleton class="h-10 w-1/2" />
      <Skeleton class="size-10" />
    </div>
    <div class="space-y-2">
      <PlatformNavbarItemSkeleton v-for="i in 2" :key="i" />
    </div>
  </template>
  <template v-else>
    <div class="font-medium text-xs flex items-center mb-1">
      <span class="pl-4">
        Workspaces
      </span>
      <Button type="button" variant="ghost" size="icon" class="ml-auto" as-child>
        <NuxtLink to="/select-org">
          <PlusIcon class="size-4" />
        </NuxtLink>
      </Button>
    </div>
    <Accordion class="space-y-2" type="multiple" :default-value="defaultAccordionValue" @change="onExpand">
      <PlatformNavItem
        v-for="organization in userMemberships"
        :key="organization.id"
        :organization="organization"
        :is-active="activeOrganization?.id === organization.id"
        :is-expanded="expanded[organization.id]"
        @expand="onExpand"
      />
    </Accordion>
  </template>
</template>
