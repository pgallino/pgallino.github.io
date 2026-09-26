import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
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
import { cvUrl, personal, postMorfi, projects, skills, timeline } from '../content/site'

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Network,
  Email: Mail,
}

export function HomePage() {
  const featured = projects.find((project) => project.featured)!
  const highlighted = projects.filter((project) => project.size === 'large' && !project.featured)
  const otherProjects = projects.filter((project) => !project.featured && project.size !== 'large')

  return (
    <>
      <PageMeta
        title="Pedro Gallino · Ingeniero en Informática"
        description="Portfolio de Pedro Gallino: ingeniería de software, producto, sistemas distribuidos y PostMorfi."
      />

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {personal.role} · {personal.location}</p>
          <h1 id="hero-title">
            Pedro Gallino, Ingeniero en Informática.
          </h1>
          <p className="hero-intro">
            Construyo aplicaciones pensando en que la gente las use y las disfrute, no solo en que funcionen.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={cvUrl} download={!personal.cv.externalUrl} target={personal.cv.externalUrl ? '_blank' : undefined} rel="noreferrer">
              Descargar CV <Download aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Retrato de Pedro Gallino">
          <div className="portrait-index" aria-hidden="true">01 / 05</div>
          <img
            src={personal.portrait}
            alt="Pedro Gallino en su graduación"
            width="460"
            height="460"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>Ingeniería</span>
            <span>Producto</span>
            <span>Sistemas</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="featured-project" id="proyectos" aria-labelledby="postmorfi-title">
          <div className="featured-copy">
            <p className="eyebrow"><span /> Proyecto destacado · 2026</p>
            <p className="display-label">Caso / 01</p>
            <h2 id="postmorfi-title" className="postmorfi-brand-heading postmorfi-brand-heading-featured">
              <span className="sr-only">{featured.title}</span>
              <img src={postMorfi.logo} alt="" aria-hidden="true" width="2536" height="1115" />
            </h2>
            <p className="featured-lead">{featured.description}</p>
            <p className="featured-impact">{featured.impact}</p>
            <div className="featured-links">
              <Link className="text-link" to={featured.detailPath!}>Ver caso completo <ArrowRight aria-hidden="true" /></Link>
              <a className="text-link muted-link" href={featured.liveUrl} target="_blank" rel="noreferrer">Visitar producto <ArrowUpRight aria-hidden="true" /></a>
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
              <p className="display-label">Caso / 0{caseIndex + 2}</p>
              <h2 id={`${project.slug}-title`} className="case-project-title">{project.title}</h2>
              <p className="featured-lead">{project.description}</p>
              <p className="featured-impact">{project.impact}</p>
              <ul className="case-tags">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="featured-links">
                {project.liveUrl && (
                  <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver proyecto <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
                {project.repository && (
                  <a className={`text-link${project.liveUrl ? ' muted-link' : ''}`} href={project.repository} target="_blank" rel="noreferrer">
                    Ver código <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <div className="case-media">
              {project.videoId ? (
                <div className="case-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={`Video de ${project.title}`}
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
            eyebrow="Seleccion de trabajos"
            title="Proyectos académicos y personales."
            description="Donde exploré redes, distribución, concurrencia y producto."
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
            eyebrow="Trayectoria"
            title="Trayectoria"
            description="Experiencia profesional y formación académica, en orden cronológico."
          />
        </Reveal>
        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={`${item.period}-${item.title}`}>
              <article className="timeline-item">
                <div className="timeline-marker"><span>0{index + 1}</span></div>
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-copy">
                  <span className={`timeline-type ${item.type}`}>{item.type === 'educacion' ? 'educación' : item.type}</span>
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
            <p className="eyebrow"><span /> Herramientas</p>
            <h2 id="skills-title">Stack y capacidades</h2>
          </div>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="contact-section" id="contacto" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><span /> Contacto</p>
            <h2 id="contact-title">¿Construimos algo que valga la pena?</h2>
          </div>
          <div className="contact-panel">
            <p>Estoy en Buenos Aires y abierto a conversar sobre productos, software y desafíos de ingeniería.</p>
            <a className="email-link" href={`mailto:${personal.email}`}>{personal.email} <ArrowUpRight aria-hidden="true" /></a>
            <div className="social-links">
              {personal.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons]
                return (
                  <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {Icon && <Icon aria-hidden="true" />}{social.label}
                  </a>
                )
              })}
              <a href={cvUrl} download={!personal.cv.externalUrl} target={personal.cv.externalUrl ? '_blank' : undefined} rel="noreferrer">
                <Download aria-hidden="true" />CV
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}
