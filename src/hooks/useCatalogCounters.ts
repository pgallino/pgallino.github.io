import { useEffect, useState } from 'react'

const COUNTERS_ENDPOINT = 'https://postmorfi-api-7c66atjk3a-rj.a.run.app/catalog/counters'

export type CatalogCounters = {
  users: number
  reviews: number
  restaurants: number
  photos: number
}

export function useCatalogCounters() {
  const [counters, setCounters] = useState<CatalogCounters | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(COUNTERS_ENDPOINT, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Unexpected status ${response.status}`)
        return response.json() as Promise<CatalogCounters>
      })
      .then(setCounters)
      .catch((error) => {
        if (error.name !== 'AbortError') console.error('Failed to load PostMorfi counters', error)
      })

    return () => controller.abort()
  }, [])

  return counters
}
