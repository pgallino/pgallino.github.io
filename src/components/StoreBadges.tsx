import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { personal, postMorfi } from '../content/site'

type StoreBadgesProps = {
  compact?: boolean
}

export function StoreBadges({ compact = false }: StoreBadgesProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  function closeModal() {
    setOpen(false)
    setSent(false)
    setEmail('')
  }

  function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = 'Acceso anticipado a PostMorfi para Android'
    const body = `Quiero sumarme al acceso anticipado de PostMorfi para Android.\n\nMi email de contacto: ${email}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const androidArtwork = (
    <img
      className="store-badge-art store-badge-art--google"
      src={postMorfi.stores.android.badge}
      alt="Disponible en Google Play"
      width="135"
      height="40"
    />
  )

  return (
    <div
      className={`store-badges${compact ? ' store-badges--compact' : ''}`}
      aria-label="Disponibilidad de PostMorfi para celulares"
    >
      <div className="store-badge-unit">
        <a
          className="store-badge-link"
          href={postMorfi.stores.ios.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Descargar PostMorfi desde App Store; se abre en una pestaña nueva"
        >
          <img
            className="store-badge-art store-badge-art--apple"
            src={postMorfi.stores.ios.badge}
            alt="Descárgalo en el App Store"
            width="120"
            height="40"
          />
        </a>
      </div>

      {postMorfi.stores.android.href ? (
        <div className="store-badge-unit">
          <a
            className="store-badge-link"
            href={postMorfi.stores.android.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Descargar PostMorfi desde Google Play; se abre en una pestaña nueva"
          >
            {androidArtwork}
          </a>
        </div>
      ) : (
        <div className="store-badge-unit store-badge-unit--status">
          <button
            type="button"
            className="store-badge-link"
            aria-haspopup="dialog"
            aria-label="Sumarme al acceso anticipado de PostMorfi para Android"
            onClick={() => setOpen(true)}
          >
            {androidArtwork}
          </button>
          <span className="store-badge-status">{postMorfi.stores.android.status}</span>
        </div>
      )}

      {open ? (
        <div className="waitlist-backdrop" onClick={closeModal}>
          <div
            className="waitlist-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="waitlist-close" aria-label="Cerrar" onClick={closeModal}>
              <X aria-hidden="true" />
            </button>
            {sent ? (
              <>
                <h3>Se abrió tu correo</h3>
                <p>Solo tenés que enviar el mensaje que se armó automáticamente y listo.</p>
              </>
            ) : (
              <>
                <h3 id="waitlist-title">Sumate al acceso anticipado</h3>
                <p>Dejá tu email y te aviso apenas esté disponible PostMorfi para Android.</p>
                <form onSubmit={handleWaitlistSubmit}>
                  <label className="sr-only" htmlFor="android-waitlist-email">Tu email</label>
                  <input
                    id="android-waitlist-email"
                    type="email"
                    required
                    autoFocus
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button type="submit">
                    Avisarme <ArrowRight aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
