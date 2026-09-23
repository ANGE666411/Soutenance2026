import React, { useState, useEffect } from 'react'
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Solutions', href: '#features' },
  { name: 'Technologie IA', href: '#simulator' },
  { name: 'Comment ça marche', href: '#how-it-works' },
  { name: 'Rentabilité', href: '#roi' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group" aria-label="AvicCare Accueil">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-white/10 p-1 group-hover:border-emerald-500/50 transition-colors">
            <img
              src="/LOGOS.png"
              alt="Logo AvicCare"
              className="h-7 w-7 object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Avic<span className="text-emerald-400">Care</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Precision Poultry AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#simulator"
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Se connecter
          </a>

          <a
            href="#simulator"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition-all duration-200"
          >
            <span>Démarrer l'essai</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-slate-950"
            >
              <span>Démarrer maintenant</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
