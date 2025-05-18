import process from 'node:process'
import { createApi } from 'unsplash-js'

export const unsplash = createApi({
  accessKey: process.env.NUXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: $fetch,
})
