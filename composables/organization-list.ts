import type { OrganizationMembershipResource, OrganizationResource } from '@clerk/types'

export function useOrganizationList() {
  const clerk = useClerk()
  const { user } = useUser()
  const { isSignedIn } = useAuth()

  const userMemberships = useState<OrganizationMembershipResource[]>('userMemberships', () => [])
  const isLoaded = useState<boolean>('isLoaded', () => false)

  const fetchMemberships = async () => {
    if (isSignedIn.value && user.value) {
      const memberships = await user.value.getOrganizationMemberships()
      userMemberships.value = memberships?.data || []
    }
    isLoaded.value = true
  }

  const setActive = async (organization: OrganizationResource) => {
    await clerk.value?.setActive({ organization })
  }

  watchEffect(async () => {
    if (isSignedIn.value && user.value) {
      await fetchMemberships()
    }
  })

  return {
    isLoaded,
    userMemberships,
    setActive,
  }
}
