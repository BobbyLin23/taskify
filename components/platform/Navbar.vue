<script lang="ts" setup>
import { PlusIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center px-4">
    <div class="flex items-center gap-x-4 px-4">
      <div class="hidden md:block">
        <Logo />
      </div>
      <Button variant="primary" size="sm" class="rounded-sm hidden md:block h-auto py-1.5 px-2">
        Create
      </Button>
      <Button variant="primary" size="sm" class="rounded-sm block md:hidden">
        <PlusIcon class="size-4" />
      </Button>
    </div>
    <div class="flex items-center gap-x-2 ml-auto">
      <OrganizationSwitcher
        hide-personal
        after-create-organization-url="/organization/:id"
        after-select-organization-url="/organization/:id"
        after-leave-organization-url="/select-org"
        :appearance="{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }"
      />
      <UserButton
        :appearance="{
          elements: {
            avatarBox: {
              height: 30,
              width: 30,
            },
          },
        }"
      />
    </div>
  </nav>
</template>
