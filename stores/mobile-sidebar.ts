export const useMobileSidebar = defineStore('mobile-sidebar', () => {
  const isOpen = ref(false)

  function onOpen() {
    isOpen.value = true
  }

  function onClose() {
    isOpen.value = false
  }

  return {
    isOpen,
    onOpen,
    onClose,
  }
})
