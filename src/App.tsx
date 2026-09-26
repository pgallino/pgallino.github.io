import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { personal } from './content/site'
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
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
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
          <p>Diseñado y desarrollado por {personal.name}.</p>
          <p>© {new Date().getFullYear()} · Buenos Aires</p>
          <p className="store-legal">
            Apple y el logotipo de Apple son marcas comerciales de Apple Inc. Google Play y el logotipo de
            Google Play son marcas comerciales de Google LLC.
          </p>
        </footer>
      </div>
      <ScrollManager />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
