const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default defineNuxtRouteMiddleware((to) => {
  const { userId, orgId } = useAuth()

  if (userId.value && isPublicRoute(to)) {
    let path = '/select-org'

    if (orgId.value) {
      path = `/organization/${orgId.value}`
    }

    return navigateTo(path)
  }

  if (!userId.value && !isPublicRoute(to)) {
    return navigateTo('/sign-in')
  }

  if (userId.value && !orgId.value && to.path !== '/select-org') {
    return navigateTo('/select-org')
  }
})
