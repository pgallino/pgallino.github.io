import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Trayectoria', href: '/#trayectoria' },
  { label: 'Contacto', href: '/#contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Pedro Gallino, inicio">
        PG<span>.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
        <p>Ingeniería · Producto · Sistemas</p>
      </div>
    </header>
  )
}
