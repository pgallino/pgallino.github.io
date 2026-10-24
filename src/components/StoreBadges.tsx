import { useSiteContent } from '../content/useSiteContent'
import { useTranslation } from '../i18n/useTranslation'

type StoreBadgesProps = {
  compact?: boolean
}

export function StoreBadges({ compact = false }: StoreBadgesProps) {
  const { t } = useTranslation()
  const { postMorfi } = useSiteContent()

  return (
    <div
      className={`store-badges${compact ? ' store-badges--compact' : ''}`}
      aria-label={t.storeBadges.availabilityAriaLabel}
    >
      <div className="store-badge-unit">
        <a
          className="store-badge-link"
          href={postMorfi.stores.ios.href}
          target="_blank"
          rel="noreferrer"
          aria-label={t.storeBadges.appStoreDownloadAriaLabel}
        >
          <img
            className="store-badge-art store-badge-art--apple"
            src={postMorfi.stores.ios.badge}
            alt={t.storeBadges.appStoreAlt}
            width="120"
            height="40"
          />
        </a>
      </div>

      <div className="store-badge-unit">
        <a
          className="store-badge-link"
          href={postMorfi.stores.android.href}
          target="_blank"
          rel="noreferrer"
          aria-label={t.storeBadges.googlePlayDownloadAriaLabel}
        >
          <img
            className="store-badge-art store-badge-art--google"
            src={postMorfi.stores.android.badge}
            alt={t.storeBadges.googlePlayAlt}
            width="135"
            height="40"
          />
        </a>
      </div>
    </div>
  )
}
