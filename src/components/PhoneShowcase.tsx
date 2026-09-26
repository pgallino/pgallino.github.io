import { useEffect, useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import type { PhoneScreenshot } from '../content/site'
import { useTranslation } from '../i18n/useTranslation'

type PhoneShowcaseProps = {
  screenshots: PhoneScreenshot[]
  variant?: 'featured' | 'case'
}

export function PhoneShowcase({ screenshots, variant = 'case' }: PhoneShowcaseProps) {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLUListElement>(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, pointerX: 0, frame: 0 })

  useEffect(() => () => cancelAnimationFrame(drag.current.frame), [])

  function applyScroll() {
    const track = trackRef.current
    if (!track || !drag.current.active) return
    track.scrollLeft = drag.current.startScroll - (drag.current.pointerX - drag.current.startX)
    drag.current.frame = requestAnimationFrame(applyScroll)
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLUListElement>) {
    const track = trackRef.current
    if (!track || event.pointerType === 'touch') return
    const withinContent = event.clientY - track.getBoundingClientRect().top <= track.clientHeight
    if (!withinContent) return // clicked the scrollbar itself; let the browser handle it natively
    drag.current.active = true
    drag.current.startX = event.clientX
    drag.current.pointerX = event.clientX
    drag.current.startScroll = track.scrollLeft
    track.setPointerCapture(event.pointerId)
    drag.current.frame = requestAnimationFrame(applyScroll)
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLUListElement>) {
    if (!drag.current.active) return
    drag.current.pointerX = event.clientX
  }

  function endDrag(event: ReactPointerEvent<HTMLUListElement>) {
    if (drag.current.active) trackRef.current?.releasePointerCapture(event.pointerId)
    drag.current.active = false
    cancelAnimationFrame(drag.current.frame)
  }

  return (
    <div
      className={`phone-showcase phone-showcase--${variant}`}
      role="region"
      aria-label={t.phoneShowcase.screenshotsAriaLabel}
    >
      <ul
        className="phone-showcase__track"
        tabIndex={0}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {screenshots.map((screenshot) => (
          <li key={screenshot.src}>
            <figure className="phone-showcase__phone">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width="589"
                height="1280"
                loading="lazy"
                decoding="async"
                draggable={false}
                onDragStart={(event) => event.preventDefault()}
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
