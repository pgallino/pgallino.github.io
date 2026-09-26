type Props = {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
