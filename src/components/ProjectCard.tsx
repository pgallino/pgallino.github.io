import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../content/site'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const body = (
    <div>
      <p className="project-eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )

  const stackList = (
    <ul aria-label={`Tecnologías y áreas de ${project.title}`}>
      {project.stack.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )

  if (project.detailPath) {
    return (
      <Link className="project-card" to={project.detailPath} aria-label={`Ver detalle de ${project.title}`}>
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
              Ver proyecto <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link muted-link" href={project.repository} target="_blank" rel="noreferrer">
              Ver código <ArrowUpRight aria-hidden="true" />
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
      aria-label={`Ver ${project.title}${project.liveUrl ? '' : ' en GitHub'}`}
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
