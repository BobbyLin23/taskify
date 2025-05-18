<script lang="ts" setup>
import { CheckIcon, Loader2Icon } from 'lucide-vue-next'

defineProps<{
  id: string
  errors?: Record<string, string[] | undefined>
}>()

const images = ref<Array<Record<string, any>>>([])
const isLoading = ref(true)
const pending = ref(false)
const selectedImageId = ref('')

async function fetchImages() {
  try {
    const result = await useFetch('/api/unsplash', {
      method: 'get',
    })

    if (result.data) {
      images.value = result.data.value as Array<Record<string, any>>
    }
    else {
      console.error('Failed to get images from Unsplash')
    }
  }
  catch (error) {
    console.error(error)
    // setImages(defaultImages);
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchImages()
})
</script>

<template>
  <template v-if="isLoading">
    <div class="p-6 flex items-center justify-center">
      <Loader2Icon class="size-6 text-sky-700 animate-spin" />
    </div>
  </template>
  <template v-else>
    <div class="relative">
      <div class="grid grid-cols-3 gap-2 mb-2">
        <div
          v-for="image in images"
          :key="image.id"
          :class="cn('cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted', pending && 'opacity-50 hover:opacity-50 cursor-auto')"
          @click="() => {
            if (pending) return
            selectedImageId = image.id
          }"
        >
          <input
            :id="id"
            type="radio"
            :name="id"
            class="hidden"
            :checked="selectedImageId === image.id"
            :disabled="pending"
            :value="`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`"
          >
          <NuxtImg
            :src="image.urls.thumb"
            :alt="image.description"
            class="object-cover rounded-sm"
            fill
          />
          <div v-if="selectedImageId === image.id" class="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center">
            <CheckIcon class="h-4 w-4 text-white" />
          </div>
          <NuxtLink
            :to="image.link.html"
            target="_blank"
            class="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
          >
            {{ image.user.name }}
          </NuxtLink>
        </div>
      </div>
      <FormErrors
        id="image"
        :errors="errors"
      />
    </div>
  </template>
</template>
