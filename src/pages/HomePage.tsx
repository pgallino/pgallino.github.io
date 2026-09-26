import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  Mail,
  Network,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { PhoneShowcase } from '../components/PhoneShowcase'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { StoreBadges } from '../components/StoreBadges'
import { getCvUrl } from '../content/site'
import { useSiteContent } from '../content/useSiteContent'
import { useCatalogCounters } from '../hooks/useCatalogCounters'
import { useTranslation } from '../i18n/useTranslation'

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Network,
}

export function HomePage() {
  const { t, language } = useTranslation()
  const { personal, postMorfi, projects, skills, timeline } = useSiteContent()
  const cvUrl = getCvUrl(language)
  const featured = projects.find((project) => project.featured)!
  const highlighted = projects.filter((project) => project.size === 'large' && !project.featured)
  const otherProjects = projects.filter((project) => !project.featured && project.size !== 'large')
  const [copied, setCopied] = useState(false)
  const counters = useCatalogCounters()
  const numberFormatter = new Intl.NumberFormat(language === 'es' ? 'es-AR' : 'en-US')
  const featuredImpact = counters
    ? t.postMorfi.impactWithLiveStats(
        numberFormatter.format(counters.users),
        numberFormatter.format(counters.reviews),
        numberFormatter.format(counters.restaurants),
        numberFormatter.format(counters.photos),
      )
    : featured.impact

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = personal.email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <PageMeta title={t.home.metaTitle} description={t.home.metaDescription} />

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {personal.role} · {personal.location}</p>
          <h1 id="hero-title">
            {t.home.heroTitle}
          </h1>
          <p className="hero-intro">
            {t.home.heroIntro}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              {t.home.viewProjects} <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={cvUrl} download={!personal.cv.externalUrl} target={personal.cv.externalUrl ? '_blank' : undefined} rel="noreferrer">
              {t.home.downloadCv} <Download aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-timeline" aria-label={t.home.careerSummaryAriaLabel}>
          <img className="hero-timeline-avatar" src={personal.avatar} alt={personal.name} width="64" height="64" />
          <ol>
            {timeline.map((item) => (
              <li key={item.title}>
                <span className="hero-timeline-period">{item.period}</span>
                <span className="hero-timeline-title">{item.title}</span>
                <span className="hero-timeline-place">{item.place}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Reveal>
        <section className="featured-project" id="proyectos" aria-labelledby="postmorfi-title">
          <div className="featured-copy">
            <p className="eyebrow"><span /> {t.home.featuredProjectEyebrow}</p>
            <p className="display-label">{t.home.caseLabel(1)}</p>
            <h2 id="postmorfi-title" className="postmorfi-brand-heading postmorfi-brand-heading-featured">
              <span className="sr-only">{featured.title}</span>
              <img src={postMorfi.logo} alt="" aria-hidden="true" width="2536" height="1115" />
            </h2>
            <p className="featured-lead">{featured.description}</p>
            <p className="featured-impact">{featuredImpact}</p>
            <div className="featured-links">
              <Link className="text-link" to={featured.detailPath!}>{t.home.viewFullCase} <ArrowRight aria-hidden="true" /></Link>
              <a className="text-link muted-link" href={featured.liveUrl} target="_blank" rel="noreferrer">{t.home.visitProduct} <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <StoreBadges compact />
          </div>
          <PhoneShowcase screenshots={postMorfi.screenshots} variant="featured" />
        </section>
      </Reveal>

      {highlighted.map((project, caseIndex) => (
        <Reveal key={project.slug}>
          <section className="featured-project case-project" aria-labelledby={`${project.slug}-title`}>
            <div className="featured-copy">
              <p className="eyebrow"><span /> {project.eyebrow}</p>
              <p className="display-label">{t.home.caseLabel(caseIndex + 2)}</p>
              <h2 id={`${project.slug}-title`} className="case-project-title">{project.title}</h2>
              <p className="featured-lead">{project.description}</p>
              <p className="featured-impact">{project.impact}</p>
              <ul className="case-tags">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="featured-links">
                {project.liveUrl && (
                  <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    {t.home.viewProject} <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.repository && (
                  <a className={`text-link${project.liveUrl ? ' muted-link' : ''}`} href={project.repository} target="_blank" rel="noreferrer">
                    {t.home.viewCode} <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <div className="case-media">
              {project.videoId ? (
                <div className="case-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={t.home.videoTitle(project.title)}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : project.screenshot ? (
                <div className="case-frame">
                  <div className="case-frame-bar" aria-hidden="true">
                    <span /><span /><span />
                    {project.liveUrl && (
                      <span className="case-frame-url">
                        {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </span>
                    )}
                  </div>
                  <img src={project.screenshot} alt={project.screenshotAlt ?? ''} loading="lazy" />
                </div>
              ) : null}
            </div>
          </section>
        </Reveal>
      ))}

      <section className="section-block projects-section" aria-labelledby="projects-title">
        <Reveal>
          <SectionHeading
            index={String(highlighted.length + 2).padStart(2, '0')}
            eyebrow={t.home.projectsSectionEyebrow}
            title={t.home.projectsSectionTitle}
            description={t.home.projectsSectionDescription}
          />
        </Reveal>
        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section-block timeline-section" id="trayectoria" aria-labelledby="timeline-title">
        <Reveal>
          <SectionHeading
            index={String(highlighted.length + 3).padStart(2, '0')}
            eyebrow={t.home.timelineEyebrow}
            title={t.home.timelineTitle}
            description={t.home.timelineDescription}
          />
        </Reveal>
        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={`${item.period}-${item.title}`}>
              <article className="timeline-item">
                <div className="timeline-marker"><span>0{index + 1}</span></div>
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-copy">
                  <span className={`timeline-type ${item.type}`}>
                    {item.type === 'educacion' ? t.home.timelineTypeEducacion : t.home.timelineTypeExperiencia}
                  </span>
                  <h3>{item.title}</h3>
                  <h4>{item.place}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="skills-band" aria-labelledby="skills-title">
          <div>
            <p className="eyebrow"><span /> {t.home.skillsEyebrow}</p>
            <h2 id="skills-title">{t.home.skillsTitle}</h2>
          </div>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="contact-section" id="contacto" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><span /> {t.home.contactEyebrow}</p>
            <h2 id="contact-title">{t.home.contactTitle}</h2>
          </div>
          <div className="contact-panel">
            <p>{t.home.contactIntro}</p>
            <button type="button" className="email-link" onClick={copyEmail}>
              {personal.email} {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </button>
            <div className="social-links">
              {personal.socials.map((social) => {
                if (social.label === 'Email') {
                  return (
                    <button key={social.label} type="button" onClick={copyEmail}>
                      <Mail aria-hidden="true" />{copied ? t.home.emailCopied : t.home.emailLabel}
                    </button>
                  )
                }
                const Icon = socialIcons[social.label as keyof typeof socialIcons]
                return (
                  <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {Icon && <Icon aria-hidden="true" />}{social.label}
                  </a>
                )
              })}
              <a href={cvUrl} download={!personal.cv.externalUrl} target={personal.cv.externalUrl ? '_blank' : undefined} rel="noreferrer">
                <Download aria-hidden="true" />{t.home.cvLabel}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}
