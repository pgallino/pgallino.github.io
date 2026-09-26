import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { PhoneShowcase } from '../components/PhoneShowcase'
import { Reveal } from '../components/Reveal'
import { StoreBadges } from '../components/StoreBadges'
import { useSiteContent } from '../content/useSiteContent'
import { useCatalogCounters } from '../hooks/useCatalogCounters'
import { useTranslation } from '../i18n/useTranslation'

export function PostMorfiPage() {
  const { t, language } = useTranslation()
  const { postMorfi } = useSiteContent()
  const counters = useCatalogCounters()

  const metrics = counters
    ? postMorfi.metrics.map((metric, index) => {
        const liveValue = [counters.users, counters.reviews, counters.restaurants, counters.photos][index]
        return { ...metric, value: new Intl.NumberFormat(language === 'es' ? 'es-AR' : 'en-US').format(liveValue) }
      })
    : postMorfi.metrics

  return (
    <article className="case-study">
      <PageMeta title={t.postMorfi.metaTitle} description={t.postMorfi.metaDescription} />

      <header className="case-hero">
        <div>
          <Link className="back-link" to="/"><ArrowLeft aria-hidden="true" /> {t.postMorfi.backLink}</Link>
          <p className="eyebrow"><span /> {t.postMorfi.productEyebrow}</p>
          <h1 className="postmorfi-brand-heading postmorfi-brand-heading-hero">
            <span className="sr-only">{postMorfi.title}</span>
            <img src={postMorfi.logo} alt="" aria-hidden="true" width="2536" height="1115" />
          </h1>
          <p>{postMorfi.summary}</p>
          <a className="button button-primary" href={postMorfi.liveUrl} target="_blank" rel="noreferrer">
            {t.postMorfi.openProduct} <ArrowUpRight aria-hidden="true" />
          </a>
          <StoreBadges />
        </div>
        <div className="case-meta" aria-label={t.postMorfi.caseMetaAriaLabel}>
          <div><span>{t.postMorfi.caseMetaRole}</span><strong>{t.postMorfi.caseMetaRoleValue}</strong></div>
          <div><span>{t.postMorfi.caseMetaScope}</span><strong>{t.postMorfi.caseMetaScopeValue}</strong></div>
          <div><span>{t.postMorfi.caseMetaStatus}</span><strong>{t.postMorfi.caseMetaStatusValue}</strong></div>
        </div>
      </header>

      <PhoneShowcase screenshots={postMorfi.screenshots} />

      <Reveal>
        <section className="case-intro">
          <p className="case-index">{t.postMorfi.caseIndex01}</p>
          <div>
            <h2>{t.postMorfi.caseIntroHeading}</h2>
            <p>{postMorfi.role}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="metrics" aria-label={t.postMorfi.metricsAriaLabel}>
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
          <p>{postMorfi.launchNote}</p>
        </section>
      </Reveal>

      <section className="case-section" aria-labelledby="features-title">
        <Reveal>
          <div className="case-section-heading">
            <p className="case-index">{t.postMorfi.caseIndex02}</p>
            <h2 id="features-title">{t.postMorfi.featuresHeading}</h2>
          </div>
        </Reveal>
        <div className="features-grid">
          {postMorfi.features.map((feature) => (
            <Reveal key={feature.number}>
              <article>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-section role-section" aria-labelledby="role-title">
        <Reveal>
          <div>
            <p className="case-index">{t.postMorfi.caseIndex03}</p>
            <h2 id="role-title">{t.postMorfi.roleHeading}</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="role-copy">
            <p>{t.postMorfi.roleCopyIntro}</p>
            <ul>
              {postMorfi.areas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="case-section visual-section" aria-labelledby="visual-title">
        <Reveal>
          <div className="case-section-heading">
            <p className="case-index">{t.postMorfi.caseIndex04}</p>
            <h2 id="visual-title">{t.postMorfi.visualHeading}</h2>
          </div>
        </Reveal>
        <div className="case-gallery">
          {postMorfi.gallery.map((image, index) => (
            <Reveal key={image.src}>
              <figure className={`case-image case-image-${index + 1}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="case-cta">
          <p>{t.postMorfi.ctaLive}</p>
          <h2>{t.postMorfi.ctaHeading}</h2>
          <a className="button button-primary" href={postMorfi.liveUrl} target="_blank" rel="noreferrer">
            {t.postMorfi.ctaVisit} <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </Reveal>
    </article>
  )
}
