import { useEffect } from 'react'

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    const canonicalUrl = `https://pgallino.github.io${window.location.pathname}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    return () => {
      document.title = 'Pedro Gallino · Ingeniero en Informática'
    }
  }, [title, description])
  return null
}
