<script lang="ts" setup>
import { HelpCircleIcon, User2Icon } from 'lucide-vue-next'

const { orgId } = useAuth()

const isPro = ref(false)

if (!orgId.value) {
  navigateTo('/select-org')
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center font-semibold text-lg text-neutral-700">
      <User2Icon class-name="size-6 mr-2" />
      Your boards
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <FormPopover side="right" :side-offset="10">
        <div
          role="button"
          class="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
        >
          <p class="text-sm">
            Create new board
          </p>
          <span class="text-xs">
            {{ isPro ? "Unlimited" : `5 remaining` }}
          </span>
          <Hint
            :side-offset="40"
            description="Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace."
          >
            <HelpCircleIcon
              class="absolute bottom-2 right-2 h-[14px] w-[14px]"
            />
          </Hint>
        </div>
      </FormPopover>
    </div>
  </div>
</template>
