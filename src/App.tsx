import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { content } from './content/site'
import { LanguageProvider } from './i18n/LanguageContext'
import { useTranslation } from './i18n/useTranslation'
import { HomePage } from './pages/HomePage'
import { PostMorfiPage } from './pages/PostMorfiPage'
import './App.css'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return null
}

function Layout() {
  const { t, language } = useTranslation()
  const { personal } = content[language]

  return (
    <>
      <a className="skip-link" href="#main-content">{t.layout.skipLink}</a>
      <div className="site-shell">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/postmorfi" element={<PostMorfiPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <div className="wordmark">PG<span>.</span></div>
          <p>{t.layout.footerBuilt(personal.name)}</p>
          <p>© {new Date().getFullYear()} · Buenos Aires</p>
          <p className="store-legal">{t.layout.storeLegal}</p>
        </footer>
      </div>
      <ScrollManager />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
