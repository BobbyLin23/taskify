import { unsplash } from '~/utils/unsplash'

export default defineEventHandler(async () => {
  try {
    const result = await unsplash.photos.getRandom({
      collectionIds: ['317099'],
      count: 9,
    })

    if (result && result.response) {
      const newImages = result.response as Array<Record<string, any>>
      return newImages
    }

    return null
  }
  catch (error) {
    console.error(error)
    return createError({
      statusCode: 500,
      statusMessage: 'Failed to get images from Unsplash',
    })
  }
})
