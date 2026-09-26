import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { PhoneShowcase } from '../components/PhoneShowcase'
import { Reveal } from '../components/Reveal'
import { StoreBadges } from '../components/StoreBadges'
import { postMorfi } from '../content/site'

export function PostMorfiPage() {
  return (
    <article className="case-study">
      <PageMeta
        title="PostMorfi · Caso de estudio de Pedro Gallino"
        description="Producto gastronómico creado y desarrollado end-to-end por Pedro Gallino."
      />

      <header className="case-hero">
        <div>
          <Link className="back-link" to="/"><ArrowLeft aria-hidden="true" /> Volver al portfolio</Link>
          <p className="eyebrow"><span /> Producto propio · 2026</p>
          <h1 className="postmorfi-brand-heading postmorfi-brand-heading-hero">
            <span className="sr-only">{postMorfi.title}</span>
            <img src={postMorfi.logo} alt="" aria-hidden="true" width="2536" height="1115" />
          </h1>
          <p>{postMorfi.summary}</p>
          <a className="button button-primary" href={postMorfi.liveUrl} target="_blank" rel="noreferrer">
            Abrir PostMorfi <ArrowUpRight aria-hidden="true" />
          </a>
          <StoreBadges />
        </div>
        <div className="case-meta" aria-label="Información del proyecto">
          <div><span>Rol</span><strong>Founder & Software Engineer</strong></div>
          <div><span>Alcance</span><strong>Producto end-to-end</strong></div>
          <div><span>Estado</span><strong>En producción</strong></div>
        </div>
      </header>

      <PhoneShowcase screenshots={postMorfi.screenshots} />

      <Reveal>
        <section className="case-intro">
          <p className="case-index">01 / El producto</p>
          <div>
            <h2>Recordar dónde comiste debería ser tan fácil como elegir adónde ir.</h2>
            <p>{postMorfi.role}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="metrics" aria-label="Métricas de PostMorfi">
          {postMorfi.metrics.map((metric) => (
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
            <p className="case-index">02 / Funcionalidades</p>
            <h2 id="features-title">Un solo lugar para todo el recorrido foodie.</h2>
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
            <p className="case-index">03 / Mi participación</p>
            <h2 id="role-title">De la idea a producción.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="role-copy">
            <p>
              Definí las decisiones de producto, iteré funcionalidades con feedback real de usuarios y gestioné también
              contenido, redes sociales y difusión. El trabajo técnico abarca las siguientes áreas confirmadas en mi CV:
            </p>
            <ul>
              {postMorfi.areas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="case-section visual-section" aria-labelledby="visual-title">
        <Reveal>
          <div className="case-section-heading">
            <p className="case-index">04 / Experiencia</p>
            <h2 id="visual-title">La comida es el centro; la interfaz, el marco.</h2>
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
          <p>El producto está en línea.</p>
          <h2>Descubrí tu próxima comida.</h2>
          <a className="button button-primary" href={postMorfi.liveUrl} target="_blank" rel="noreferrer">
            Visitar PostMorfi <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </Reveal>
    </article>
  )
}
