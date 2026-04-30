import { useEffect } from 'react'
import { LanguageProvider } from './localization/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function AppContent() {
  useEffect(() => {
    // Smooth scroll behavior is handled by CSS
    return () => { }
  }, [])

  return (
    <div className="app">
      <LanguageSelector />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
