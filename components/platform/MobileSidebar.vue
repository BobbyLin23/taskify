<script lang="ts" setup>
import { MenuIcon } from 'lucide-vue-next'
</script>

<template>
  <ClientOnly>
    <Sheet>
      <SheetTrigger>
        <Button class="block md:hidden mr-2" variant="ghost" size="sm">
          <MenuIcon class="size-4" />
        </Button>
        <SheetContent side="left" class="p-2 pt-10">
          <PlatformSidebar storage-key="t-mobile-sidebar-state" />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  </ClientOnly>
</template>
