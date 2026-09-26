import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t, toggleLanguage } = useTranslation()

  const links = [
    { label: t.header.navProjects, href: '/#proyectos' },
    { label: t.header.navTimeline, href: '/#trayectoria' },
    { label: t.header.navContact, href: '/#contacto' },
  ]

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label={t.header.wordmarkAriaLabel}>
        PG<span>.</span>
      </Link>

      <nav className="desktop-nav" aria-label={t.header.mainNavAriaLabel}>
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="lang-toggle"
          aria-label={t.header.languageToggleAriaLabel}
          onClick={toggleLanguage}
        >
          {t.header.languageToggleLabel}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label={t.header.mobileNavAriaLabel}>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
        <p>{t.header.mobileTagline}</p>
      </div>
    </header>
  )
}
