import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../content/site'
import { useTranslation } from '../i18n/useTranslation'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation()

  const body = (
    <div>
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )

  const stackList = (
    <ul aria-label={t.projectCard.techAndAreasAriaLabel(project.title)}>
      {project.stack.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )

  if (project.detailPath) {
    return (
      <Link className="project-card" to={project.detailPath} aria-label={t.projectCard.viewDetailAriaLabel(project.title)}>
        <div className="project-card-top">
          <span className="project-number">0{index + 1}</span>
          <ArrowUpRight aria-hidden="true" />
        </div>
        {body}
        {stackList}
      </Link>
    )
  }

  if (project.liveUrl && project.repository) {
    return (
      <div className="project-card project-card--links">
        <span className="project-number">0{index + 1}</span>
        {body}
        <div className="project-card-footer">
          {stackList}
          <div className="project-card-links">
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              {t.projectCard.viewProject} <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link muted-link" href={project.repository} target="_blank" rel="noreferrer">
              {t.projectCard.viewCode} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a
      className="project-card"
      href={project.liveUrl ?? project.repository}
      target="_blank"
      rel="noreferrer"
      aria-label={t.projectCard.viewProjectAriaLabel(project.title, Boolean(project.liveUrl))}
    >
      <div className="project-card-top">
        <span className="project-number">0{index + 1}</span>
        <ArrowUpRight aria-hidden="true" />
      </div>
      {body}
      {stackList}
    </a>
  )
}
