import React, { useState, useEffect } from 'react'
import NavBar from '@/components/ui/navBar'
import Hero from '@/components/ui/hero'
import StatsBanner from '@/components/sections/StatsBanner'
import AiDiagnosticSimulator from '@/components/sections/AiDiagnosticSimulator'
import FeaturesBento from '@/components/sections/FeaturesBento'
import HowItWorks from '@/components/sections/HowItWorks'
import RoiCalculator from '@/components/sections/RoiCalculator'
import Testimonials from '@/components/sections/Testimonials'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/ui/Footer'
import { ArrowUp, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Barre de navigation épurée */}
      <NavBar />

      <main className="flex-1 space-y-0">
        {/* Section Hero d'Architecte avec visuels intégrés */}
        <Hero />

        {/* Métriques d'Impact & Confiance */}
        <StatsBanner />

        {/* Démonstration Live de l'IA */}
        <AiDiagnosticSimulator />

        {/* Grille Bento des Innovations */}
        <FeaturesBento />

        {/* Parcours Étape par Étape */}
        <HowItWorks />

        {/* Simulateur de Rentabilité */}
        <RoiCalculator />

        {/* Témoignages & Preuve Métier */}
        <Testimonials />

        {/* Foire aux Questions */}
        <FaqSection />

        {/* Call to action final */}
        <CtaSection />
      </main>

      {/* Pied de page SaaS */}
      <Footer />

      {/* Bouton d'accès rapide flottant */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <a
            href="#simulator"
            className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tester l'IA</span>
          </a>

          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors shadow-lg"
            aria-label="Remonter en haut"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}